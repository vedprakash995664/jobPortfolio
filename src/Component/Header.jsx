import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Css/Header.css'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container fluid className='head'>
        <Row style={{backgroundColor:"#F1F2F4",}}>
            <Col sm={1}></Col>
         <Col sm={10}>
    <Navbar expand="lg" className="header">
      <Container fluid>
        {/* <Navbar.Brand style={{display:"flex", gap:"10px", alignItems:"center", justifyContent:"center"}}>
             <div>logo</div>
             <span style={{fontSize:"20px", fontWeight:"bolder"}}>JobHai.com</span>
             </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
          >
            <Nav.Link style={{fontWeight:"bold"}}><Link to='/' style={{textDecoration:"none", marginLeft:"15px"}}>Home</Link></Nav.Link>
            <Nav.Link style={{fontWeight:"bold"}}><Link to='/findjob' style={{textDecoration:"none", marginLeft:"15px"}}>Find Job</Link> </Nav.Link>
            <Nav.Link style={{fontWeight:"bold"}}><Link to='/login' style={{textDecoration:"none", marginLeft:"15px"}}>Accounts</Link></Nav.Link>
            <Nav.Link style={{fontWeight:"bold"}}><Link to='/topcompany' style={{textDecoration:"none", marginLeft:"15px"}}>Companies</Link></Nav.Link>
            <Nav.Link style={{fontWeight:"bold"}}><Link to='/about' style={{textDecoration:"none", marginLeft:"15px"}}>About Us</Link></Nav.Link>
           
          </Nav>

          <Navbar.Brand>
    <span style={{ fontSize: "15px" }}>
        <i className="bi bi-telephone-outbound" style={{ fontSize: "18px" }}></i>
        <a href="tel:+916307275065" style={{ textDecoration: 'none', color: 'inherit' }}>
            +91 63792 75065
        </a>
    </span>
</Navbar.Brand>

          <Navbar.Brand>
          <NavDropdown title="English" id="navbarScrollingDropdown" style={{fontSize:"18px",}}>
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>
                Hindi
              </NavDropdown.Item>
            </NavDropdown>

          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Col>
    <Col sm={1}></Col>
        </Row>
{/* next line of menu */}

<Container fluid>
    <Row style={{backgroundColor:"white",}}>
    <Col sm={1}></Col>
 <Col sm={10}>
<Navbar expand="lg" className="header">
<Container>
<Navbar.Brand style={{display:"flex", gap:"10px", alignItems:"center", justifyContent:"center"}}>
     <div><img src="src/assets/techvinelogo.png" alt="" style={{height:"45px", backgroundColor:"", borderRadius:"50%"}}/></div>
     <span style={{fontSize:"20px", fontWeight:"bolder"}}> <i> TECHVINE CODERS</i></span>
     </Navbar.Brand>
     <Navbar expand="lg" className="menuu">
      <Container>
        {/* <Navbar.Brand style={{display:"flex", gap:"10px", alignItems:"center", justifyContent:"center"}}>
             <div>logo</div>
             <span style={{fontSize:"20px", fontWeight:"bolder"}}>JobHai.com</span>
             </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
          >
            <Nav.Link style={{fontWeight:"bold"}}><Link to='/' style={{textDecoration:"none", marginLeft:"15px"}}>Home</Link></Nav.Link>
            <Nav.Link style={{fontWeight:"bold"}}><Link to='/findjob' style={{textDecoration:"none", marginLeft:"15px"}}>Find Job</Link> </Nav.Link>
            <Nav.Link style={{fontWeight:"bold"}}><Link to='/login' style={{textDecoration:"none", marginLeft:"15px"}}>Accounts</Link></Nav.Link>
            <Nav.Link style={{fontWeight:"bold"}}><Link to='/topcompany' style={{textDecoration:"none", marginLeft:"15px"}}>Companies</Link></Nav.Link>
            <Nav.Link style={{fontWeight:"bold"}}><Link to='/about' style={{textDecoration:"none", marginLeft:"15px"}}>About Us</Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  <Link to="/signup" style={{textDecoration:"none"}}> <button className='signbtn'>Signup</button></Link>
 <Link to="/login"><button className='jobbtn'>Post A Job</button></Link> 
{/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
  </Container>
</Navbar>
</Col>
<Col sm={1}></Col>
</Row>
</Container>
    </Container>
  );
}

export default Header;