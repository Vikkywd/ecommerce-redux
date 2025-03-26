import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap"; // Added Container for better layout
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="mb-4" sticky="top">
            <Container> {/* Wrap content in Container for better spacing */}
                <BootstrapNavbar.Brand as={Link} to="/">E-Shop</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" /> {/* Add ID for Collapse */}
                <BootstrapNavbar.Collapse id="basic-navbar-nav"> {/* Match ID with Toggle */}
                    <Nav className="ms-auto"> {/* ms-auto aligns links to the right */}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cart">
                            Cart ({cartItems.length})
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;