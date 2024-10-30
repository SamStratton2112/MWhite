import LeftImg from './LeftImg';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const testList = ['test item 1', 'test item 2']

describe(LeftImg, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <LeftImg name='testName' image="testImg" list={testList} />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <LeftImg name='testName' image="testImg" list={testList}/>
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});