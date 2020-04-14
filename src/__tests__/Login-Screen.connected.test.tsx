import { connect } from 'react-redux';
import { IGlobalState } from "../store/LoginReducer";
import { mapDispatchToProps, mapStateToProps } from '../component/Login-Screen.connected';

jest.mock('react-redux', () => {
  return {
    connect: jest.fn().mockReturnValue(() => jest.fn()),
  };
});

const connectMock = (connect as unknown) as jest.Mock;
const currentState: IGlobalState = {
  isAuthenticated: true
}
describe('Login Screen mapStateToProps', () => {

  // beforeAll(() => {
  //   jest.mock("mapStateToProps", () =>{
  //     return{
  //       isAuthenticated: true
  //     }
  //   });

  // });

  it('should return for initial state isAuthenticated as false', () => {
    const initialState: IGlobalState = {
      isAuthenticated: false
    } as IGlobalState;

    const result = mapStateToProps(initialState);
    expect(result).toEqual({ isAuthenticated: false });
  });

  it('should call connect with mapStateToProps', () => {

    const componentState = mapStateToProps(currentState)
    console.log(componentState)
    expect(componentState).toEqual(currentState);
    expect(connectMock.mock.calls[0][0]).toBe(mapStateToProps);
  });
});

describe('Login Screen mapDispatchToProps', () => {
  it('should be defined', () => {
    expect(mapDispatchToProps).toBeDefined();
  });

  it('should assign proper actions on valid input ',()=>{

    console.log(connectMock.mock.calls[0][0])
    // expect(connectMock.mock.calls[0][1]).toBe(mapDispatchToProps)
  })

  it('should have been called the connectMock only once', () => {
    expect(connectMock).toHaveBeenCalledTimes(1);
  }); 

  // it('should assign proper actions', () => {
  //   expect(connectMock.mock.calls[0][1].memberLogin).toBe(
  //     memberLoginLoadingAction
  //   );
  //   expect(connectMock.mock.calls[0][1].navigateToPrivacyPolicy).toBe(
  //     navigateToPrivacyPolicyAction
  //   );
  //   expect(connectMock.mock.calls[0][1].navigateToTermsAndConditions).toBe(
  //     navigateToTermsAndConditionsAction
  //   );
  // });
});