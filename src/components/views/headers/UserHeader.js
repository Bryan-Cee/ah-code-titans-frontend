import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Menu,
  Container,
  Image,
  Header,
  Responsive,
  Popup,
  Divider
} from "semantic-ui-react";
import * as AuthenticationActions from "../../../actions/authenticationActions";
import { history } from "../../../store/configureStore";
import SearchInput from "../../containers/searchInput";
import DefaultUserPic from "../../../assets/img/person.png";

import LOGO from "../../../assets/img/logo.png";

function UserPopup(props) {
  const { actions } = props;
  return (
    <Menu vertical secondary>
      <Menu.Item name="createArticle">
        <a href="/create_article">
          <Header as="h5">Create an Article</Header>
        </a>
      </Menu.Item>
      <Menu.Item name="users">
        <a href="/profiles">
          <Header as="h5">View Users</Header>
        </a>
      </Menu.Item>

      <Divider horizontal />
      <Menu.Item name="profile">
        <a href="/profile">
          <Header as="h5">Profile</Header>
        </a>
      </Menu.Item>

      <Menu.Item name="profile">
        <Header
          as="h5"
          onClick={() => {
            actions.auth.logout();
          }}
        >Log out
        </Header>
      </Menu.Item>
    </Menu>
  );
}

UserPopup.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      auth: bindActionCreators(AuthenticationActions, dispatch)
    }
  };
}

function UserHeader(props) {
  const { currentPath, auth } = props;

  return (
    <Menu borderless main="true" className="header--user">
      <Container>
        <Menu.Item className="header__logo">
          <a href="/">
            <Image src={LOGO} />
          </a>
        </Menu.Item>

        <Menu.Item className="header__text">
          <Header>Authors Haven</Header>
        </Menu.Item>

        <Menu.Menu position="right" className="secondary">
          <Menu.Item className="item">
            <SearchInput />
          </Menu.Item>

          <Responsive
            as={Menu.Item}
            minWidth={Responsive.onlyTablet.minWidth}
            active={currentPath === "/"}
            onClick={() => {
              history.replace("/");
            }}
          >Home
          </Responsive>

          <Responsive
            as={Menu.Item}
            minWidth={Responsive.onlyTablet.minWidth}
            active={currentPath === "/discover"}
            onClick={() => {
              history.replace("/discover");
            }}
          >Discover
          </Responsive>

          <Menu.Item position="right" className="floated user">
            <span className="user__name">{auth.user.username}</span>

            <Popup
              trigger={<Image className="user__image" src={DefaultUserPic} avatar />}
              content={<UserPopup {...props} />}
              on="click"
              position="top right"
            />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

UserHeader.propTypes = {
  auth: PropTypes.object.isRequired,
  currentPath: PropTypes.string.isRequired
};

export default connect(null, mapDispatchToProps)(UserHeader);
