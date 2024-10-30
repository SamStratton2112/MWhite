import Model from './Model';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(Model, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <Model />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <Model />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});