import React, { Fragment } from 'react';
import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Button, Container, NavDropdown, Navbar, } from 'react-bootstrap'
import {Form, Nav} from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


function DashMenu() {

  const [show, setShow] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLogoutModal = () => setShowLogout(false);
  const handleShowLogoutModal = () => setShowLogout(true);
  return (
    <Fragment>

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">H&A</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll 
            >
              
              <Nav.Link href="/dashboard" >Dashboard </Nav.Link>
              <NavDropdown title="Sites" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/dashboard/sites">Sites</NavDropdown.Item>
                <NavDropdown.Item href="/dashboard/new-site">New Site</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Profile" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/dashboard/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item >
                <Button variant="primary" onClick={handleShowLogoutModal}>
                  Logout
                </Button>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
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

      <>
        

        <Modal show={showLogout} onHide={handleCloseLogoutModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 className="text-center text-danger">Are you sure you want to logout?</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseLogoutModal}>
              Close
            </Button>
            <Link to="/logout" className='btn btn-danger'>
              Yes, Logout.
            </Link>
          </Modal.Footer>
        </Modal>
      </>
    </Fragment>
    

  );
}

export default DashMenu;