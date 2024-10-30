import Footer from './Footer';
import { render } from '@testing-library/react';

describe(Footer, () => {
    it("renders without crashing", () => {
        render(
            <Footer />);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(
            <Footer />);
        expect(asFragment()).toMatchSnapshot();
    });
});