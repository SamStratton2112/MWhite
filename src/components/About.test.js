import About from './About';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(About, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <About />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <About />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});