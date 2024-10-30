import Residencies from './Residencies';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(Residencies, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <Residencies />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <Residencies />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});