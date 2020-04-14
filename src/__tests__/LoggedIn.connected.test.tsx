import { connect, Provider } from 'react-redux';
import { IGlobalState } from "../store/LoginReducer";
import LoggedInConnected, { mapDispatchToProps } from '../component/LoggedIn.connected';
// import { shallow } from 'enzyme';
// import '../test-config';

// // Create the mock store
// import configureMockStore from 'redux-mock-store';
import React from 'react';
import { LoginState } from '../store/LoginReducer.action';
// const mockStore = configureMockStore();

jest.mock('react-redux', () => {
  return {
    connect: jest.fn().mockReturnValue(() => jest.fn()),
  };
});




const connectMock = (connect as unknown) as jest.Mock;
const currentState: IGlobalState = {
  isAuthenticated: true
}

describe('Login Screen mapDispatchToProps', () => {
  // let wrapper: any, store: any;

  // beforeEach(() => {
  //   const initialState: IGlobalState = {
  //     isAuthenticated: false
  //   };
  //   store = mockStore(initialState);
  //   // Shallow render the container passing in the mock store
  //   wrapper = shallow(
  //     < Provider store={store} />
  //   );
  // });

  it('should be defined', () => {
    expect(mapDispatchToProps).toBeDefined();
  });

  it('should assign proper actions on valid input ', () => {

    console.log(connectMock.mock.calls[0][0])
    expect(connectMock.mock.calls[0][0]).toBeCalled
  })

  it('should have been called the connectMock only once', () => {
    expect(connectMock).toHaveBeenCalledTimes(1);
  });

  // it('should assign proper actions 1', () => {

  //   wrapper.simulate('invalidUser');

  //   const actions = store.getActions();
  //   expect(actions).toEqual([{ type: LoginState.LOGOUT }]);
  // });

  it('should assign proper actions 1', () => {

    // wrapper.simulate('invalidUser');

    const dispatch  = jest.fn();
    mapDispatchToProps(dispatch).onInvalidUser();

    expect(dispatch.mock.calls[0][0]).toEqual({ type: LoginState.LOGOUT });
  });
});