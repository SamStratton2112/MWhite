import Dj from './Dj';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(Dj, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <Dj />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <Dj />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});