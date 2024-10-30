import RightImg from './RightImg';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const testList = ['test item 1', 'test item 2']

describe(RightImg, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <RightImg name='testName' image="testImg" list={testList} />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <RightImg name='testName' image="testImg" list={testList}/>
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});