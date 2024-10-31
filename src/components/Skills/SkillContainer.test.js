import SkillContainer from './SkillContainer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(SkillContainer, () => {
    it.skip("renders without crashing", () => {
        render(<MemoryRouter>
            <SkillContainer />
        </MemoryRouter>);
    });
    it.skip("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <SkillContainer />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});