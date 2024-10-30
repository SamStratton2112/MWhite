import MusicContainer from './MusicContainer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(MusicContainer, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <MusicContainer />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <MusicContainer />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});