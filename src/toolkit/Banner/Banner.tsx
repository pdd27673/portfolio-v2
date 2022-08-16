import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Twitter, Github, Linkedin } from "react-bootstrap-icons";

type Props = {};

const Banner = (props: Props) => {
  const image = require('../../assets/logo.png');
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Education</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
            </Nav>
          <Navbar.Brand href="#home">
            <img
              src={image}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="twitter.com"><Twitter/></Nav.Link>
              <Nav.Link href="https://github.com/pdd27673"><Github/></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/paul-doho-702b82200/"><Linkedin/></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Banner;
