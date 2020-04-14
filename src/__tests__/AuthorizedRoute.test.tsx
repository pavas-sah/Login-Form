import { IGlobalState } from "../store/LoginReducer";
import { AuthorizedRoute, IProps } from '../component/AuthorizedRoute';
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';


const currentState: IGlobalState = {
    isAuthenticated: true
}

const mockComponent = jest.fn();
const mockPath = jest.fn();

const AuthorizedRouteProps: IProps & IGlobalState = {
    component: mockComponent,
    isAuthenticated: currentState.isAuthenticated,
    path: mockPath,
}

describe('Authorized Route class', () => {


    it('should render Authorized Route', () => {

        const { queryByTestId } = render(<AuthorizedRoute {...AuthorizedRouteProps} />);
        expect(queryByTestId('comp')).toBeTruthy()

    });

    it('matches snapshot', () => {
        const tree = renderer.create(<AuthorizedRoute {...AuthorizedRouteProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    })


});
