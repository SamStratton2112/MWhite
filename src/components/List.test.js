import List from './List';
import { render } from '@testing-library/react';

const testList = ['test item 1', 'test item 2']

describe(List, () => {
    it("renders without crashing", () => {
        render(
            <List list={testList} />);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(
            <List list={testList} />);
        expect(asFragment()).toMatchSnapshot();
    });
});