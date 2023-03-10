import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { RiAddCircleFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand>MemoPad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
          <BsList />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="me-3">
              <IconContext.Provider value={{ className: "me-2" }}>
                <RiAddCircleFill />
              </IconContext.Provider>
              Adicionar Nota
            </Nav.Link>
            <Nav.Link href="#" className="me-3">
              <IconContext.Provider value={{ className: "me-2" }}>
                <FaRegEdit />
              </IconContext.Provider>
              Editar Nota
            </Nav.Link>
            <Nav.Link href="#" className="me-3">
              <IconContext.Provider value={{ className: "me-2" }}>
                <AiFillDelete />
              </IconContext.Provider>
              Excluir Nota
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
