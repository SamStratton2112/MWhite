import LocationsCard from './LocationsCard';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const testLocation = {
    image: "testImage",
    city: "testCity",
    locations: ["test item 1", "test item 2"]
}

describe(LocationsCard, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <LocationsCard  location={testLocation}/>
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <LocationsCard location={testLocation} />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});