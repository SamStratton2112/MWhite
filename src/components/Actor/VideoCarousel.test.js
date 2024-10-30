import VideoCarousel from './VideoCarousel';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(VideoCarousel, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <VideoCarousel />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <VideoCarousel />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});