import { Container, Navbar, Nav } from "react-bootstrap";
import { FaGithub, FaInstagram } from "react-icons/fa";

import { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Logo from "/assets/logo.png";

import styles from "./Navbar.module.scss";

const Navigationbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Container fluid>
        <Navbar
          expand="xl"
          variant="dark"
          collapseOnSelect
          id={styles.navbar}
        >
          <div className="flex items-center">
            <Navbar.Brand href="#home">
              <div className={styles.logo}>
                <img src={Logo} alt="Logo" />
                <p>
                  <span>Musica</span>Mente
                </p>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="flex flex-wrap relative -left-32 top-0 sm:-left-12 ssm:border-none"/>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`me-auto ${styles.navItems}`}>
              <Nav.Link
                href="#aboutus"
                className={
                  activeLink === "aboutus"
                    ? `${styles.nav_link_item_active}`
                    : `${styles.nav_link_item}`
                }
                onClick={() => onUpdateActiveLink("aboutus")}
              >
                Sobre
              </Nav.Link>
              <Nav.Link
                href="#dynamics"
                className={
                  activeLink === "dynamics"
                    ? `${styles.nav_link_item_active}`
                    : `${styles.nav_link_item}`
                }
                onClick={() => onUpdateActiveLink("dynamics")}
              >
                Recursos
              </Nav.Link>
              <Nav.Link
                href="#preregister"
                className={
                  activeLink === "preregister"
                    ? `${styles.nav_link_item_active}`
                    : `${styles.nav_link_item}`
                }
                onClick={() => onUpdateActiveLink("preregister")}
              >
                Explore
              </Nav.Link>
              <ul className={styles.socialIcons}>
                <li>
                  <a href="https://www.instagram.com/musicamente7/" target="blank">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Biganao/musicamente-page" target="blank">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Router>
  );
};

export default Navigationbar;
