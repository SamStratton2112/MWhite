import ListModal from './ListModal';
import { render } from '@testing-library/react';

const testList = ['test item 1', 'test item 2'];

describe(ListModal, () => {
    it("renders without crashing", () => {
        render(
            <ListModal list={testList}/>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(
            <ListModal list={testList}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});