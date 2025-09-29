import { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Later you can integrate backend / email API here
    handleClose();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Container>
        <Navbar
          bg="transparent"
          variant="dark"
          expand="lg"
          className="top-nav"
          fixed="top"
        >
          <Container>
            <div className="nav-logo">
              <Link to="/" className="navbar-brand">
                gaming hub
              </Link>
            </div>

            <Nav className="justify-content-end gap-5">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
              <Link to="/news" className="nav-link">News</Link>
              <Button className="page-btn" onClick={handleShow}>Contact</Button>   
            </Nav>
          </Container>
        </Navbar>
      </Container>

      {/* Contact Form Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
