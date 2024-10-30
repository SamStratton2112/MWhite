import MusicPlayer from './MusicPlayer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const testAlbum = {
    image: 'testImg',
    name: 'testName',
    src: 'testSrc'
}

describe(MusicPlayer, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <MusicPlayer album={testAlbum} />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <MusicPlayer album={testAlbum} />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});