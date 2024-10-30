import RoleContainer from './RoleContainer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const type = {
    movies : {
        speedJunkie: {
            name: "Speedway Junkie",
            company: "Speedway Junkie Inc.",
            role: "V.I.P. host at club Utopia",
            location: "Las Vegas, NV",
            year: "1998"
        }
    }
}

describe(RoleContainer, () => {
    it.skip("renders without crashing", () => {
        render(<MemoryRouter>
            <RoleContainer type={type}/>
        </MemoryRouter>);
    });
    it.skip("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <RoleContainer type={type}/>
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});