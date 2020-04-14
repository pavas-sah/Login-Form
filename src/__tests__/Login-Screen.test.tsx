
import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { IGlobalState } from '../store/LoginReducer';
import { IProps, LoginScreen } from '../component/Login-Screen';
import { RouteComponentProps, MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const currentState: IGlobalState = {
    isAuthenticated: true
  }

  const mockInvalidUser = jest.fn()
  const mockValidUser = jest.fn()
//   const mockHistory = jest.fn()
//   const mock = jest.fn()
//   const mock = jest.fn()
//   const mock = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        history: jest.fn(),
        location: jest.fn(),
        match: jest.fn(),
        staticContext: jest.fn()
      };
});

const historyMock =  { push: jest.fn() };
const locationMock = jest.fn();
const matchMock = jest.fn();;
const staticContextMock = jest.fn();

const LoginScreenProps:IProps ={
    
    onInvalidUser : jest.fn(),
    onValidUser: jest.fn(),
    isAuthenticated: true,
    history: jest.fn(),
    location: jest.fn(),
        match: jest.fn(),
        staticContext: jest.fn()

} as unknown as IProps

describe("Login Screen class", () => {


    beforeAll(() => {

    
    });
    beforeEach(() => {

    
    });

    // state: IState = {
    //     user: '',
    //     pass: '',
    //     isPassValid: true,
    //     isUserValid: true,
    //     errorMessage: ""
    // };

    it("", () => {

    
    });

    // it("should renders form correctly", () => {
    //     const {getByTestId} = render( <MemoryRouter><LoginScreen {...LoginScreen}/></MemoryRouter>)

    // });

    const loginScreenComponent = renderer.create(<LoginScreen {...LoginScreen} />);

    it('matches snapshot', () =>{
        const tree = renderer.create(<LoginScreen/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    afterEach(() => {

    
    });
    afterAll(() => {

    
    });

});