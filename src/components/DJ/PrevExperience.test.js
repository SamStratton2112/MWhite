import PrevExperience from './PrevExperience';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(PrevExperience, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <PrevExperience />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <PrevExperience />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});