import Video from './Video';
import {render} from '@testing-library/react'

describe(Video, ()=>{
    it("renders without crashing", ()=>{
        render(<Video id="test ID" />);
    });
    it("matches snapshot", ()=>{
        const {asFragment} = render(<Video id="test ID" />);
        expect(asFragment()).toMatchSnapshot();
    });
})

  // it("Uses id prop to display embedded youtube video", ()=>{

    // })
