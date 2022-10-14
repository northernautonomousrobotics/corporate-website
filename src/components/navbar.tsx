import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/CARVI-logo.png";

interface QueryData {
  site: {
    siteMetadata: {
      title: string;
      menuLinks: [
        {
          name: string;
          link: string;
        }
      ];
    };
  };
}

type QueryResult = [string, [{ name: string; link: string }]];

const useQLQuery = (): QueryResult => {
  const data: QueryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return [data.site.siteMetadata.title, data.site.siteMetadata.menuLinks];
};

const NavBar = () => {
  const [title, menuItems] = useQLQuery();
  React.useState();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="400"
            height="150"
            className="d-inline-block align-top"
          />
          {""}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {menuItems.map((elem) => (
              <Nav.Link key={elem.link} as={Link} to={elem.link}>
                {elem.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
