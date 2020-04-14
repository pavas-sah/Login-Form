import { connect } from 'react-redux';
import { IGlobalState } from "../store/LoginReducer";
import {
        mapStateToProps,
} from '../component/AuthorizedRoute.connected';

jest.mock('react-redux', () => {
    return {
        connect: jest.fn().mockReturnValue(() => jest.fn()),
    };
});

const connectMock = (connect as unknown) as jest.Mock;
const currentState: IGlobalState = {
    isAuthenticated: true
}
describe('Authorized Route mapStateToProps', () => {

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
