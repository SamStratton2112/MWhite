// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const NavigationBar =()=> {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">Mike White</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import { Link } from 'react-router-dom';



const NavigationBar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" className="NavBar navbar-static-top">
          <Navbar.Brand as={Link} to="/" className=' nav-name'>Mike White</Navbar.Brand>
          <Nav className="ms-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link className='NavBar-link' as={Link} to="/">Home</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/dj">DJ</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/actor">Actor</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/model">Model</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/Residencies">Residencies</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/contact">Contact</Nav.Link>
          </Navbar.Collapse>

            </Nav>
      </Navbar>
    )
};

export default NavigationBar;