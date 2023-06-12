import React from 'react';
import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Button, Container, NavDropdown, Navbar, } from 'react-bootstrap'
import {Form, Nav} from 'react-bootstrap'


function DashMenu() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-light" href="#">H&A</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="#action2"className="text-light"  onClick={handleShow}>Sidebar </Nav.Link>
            <NavDropdown title="Links" id="navbarScrollingDropdown">
              <NavDropdown.Item className="text-dark" href="/admin/sites">Sites</NavDropdown.Item>
              <NavDropdown.Item className="text-dark" href="/admin/users">
                Users 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-dark" href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='text-light' href="dashboard/profile">
                Profile
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           <div className="form-group">
           
              <select className="form-control" id="floatingSelect" aria-label="Floating label select example">
                <option defaultValue>Open this select menu</option>
                <option value="users">Users</option>
                <option value="sites">Sites</option>
                {/* <option value="3">Three</option> */}
              </select>
            
           </div>

            <Button className='btn-dark'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default DashMenu;