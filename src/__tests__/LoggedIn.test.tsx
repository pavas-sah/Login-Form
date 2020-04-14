import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { LoggedIn, IProps } from '../component/LoggedIn';
import { render } from '@testing-library/react';


const mockInvalidUser = jest.fn();

const loggedInProps: IProps = {
    onInvalidUser : mockInvalidUser
  };

describe('LoggedIn Page',()=>{

    it('renders correctly', ()=>{
        const { queryByTestId } = render(<LoggedIn {...loggedInProps} />);
        expect(queryByTestId("button")).toBeTruthy();
    })

    it('matches snapshot', () =>{
        const tree = renderer.create(<LoggedIn {...loggedInProps}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

});