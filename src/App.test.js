// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import App from './App';
import { render } from '@testing-library/react';

describe(App, () => {
    it("renders without crashing", () => {
        render(
            <App />);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(
            <App />);
        expect(asFragment()).toMatchSnapshot();
    });
});