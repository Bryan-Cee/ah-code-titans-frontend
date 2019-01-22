// test login reducer
import * as types from "../../actions/actionTypes";
import loginReducer from "../loginReducer";
import initialState from "../../store/initialState";
import testDetails from "../../actions/__test__/authenticationActions.test";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(initialState.loginReducer, {})).toEqual(initialState.loginReducer);
  });

  it("should handle LOGIN_BY_EMAIL_SUCCESS ", () => {
    expect(
      loginReducer(initialState.loginReducer, {
        type: types.LOGIN_BY_EMAIL_SUCCESS,
        payload: testDetails
      })
    ).toEqual({
      auth: { authentication: "email", isFetching: false, user: undefined },
      login: { error: null, state: "" }
    });
  });

  it("should handle LOGIN_BY_EMAIL_FAILURE", () => {
    const details = {
      payload: {
        message: "Invalid Password!"
      }
    };
    expect(
      loginReducer(initialState.loginReducer, {
        type: types.LOGIN_BY_EMAIL_FAILURE,
        payload: details
      })
    ).toEqual({ auth: { isFetching: false }, login: { error: null, state: "error" } });
  });
});
