import DjCarousel from './DjCarousel';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(DjCarousel, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <DjCarousel />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <DjCarousel />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});