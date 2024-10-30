import AppearencesContainer from './AppearencesContainer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(AppearencesContainer, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <AppearencesContainer />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <AppearencesContainer />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});