import VenueCard from './VenueCard';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const testVenue = {
    image: 'testImage',
    name: 'testName'
}

describe(VenueCard, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <VenueCard venue={testVenue}/>
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <VenueCard venue={testVenue}/>
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});