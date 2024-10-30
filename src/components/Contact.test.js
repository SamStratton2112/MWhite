import Contact from './Contact';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(Contact, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <Contact />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <Contact />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});