import RoleCard from './RoleCard';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(RoleCard, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <RoleCard />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <RoleCard />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});