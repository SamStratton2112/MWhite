import Actor from './Actor';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(Actor, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <Actor />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <Actor />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});