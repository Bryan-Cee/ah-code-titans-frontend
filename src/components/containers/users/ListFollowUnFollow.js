/* eslint max-len: ["error", { "code": 120 }] */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import * as profileSearchActions from "../../../actions/searchedProfileActions";
import FollowersFollowingUsers from "../../views/users/FollowFollowers";

const ListFollowUnFollow = (props) => {
  const { profiles } = props;

  return (
    <div>
      {profiles.map(profile => <FollowersFollowingUsers key={profile.username} profile={profile} />)}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: {
    followtab: bindActionCreators(profileSearchActions, dispatch)
  }
});

ListFollowUnFollow.propTypes = {
  profiles: PropTypes.array.isRequired
};

export default connect(null, mapDispatchToProps)(ListFollowUnFollow);
