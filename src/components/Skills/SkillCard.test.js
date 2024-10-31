import SkillCard from './SkillCard';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(SkillCard, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <SkillCard />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <SkillCard />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});