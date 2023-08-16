import React from 'react';
import "./Header.css";
import logo from "./img/로고.png"
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';


const Header = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="nav-all">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container className='navbar'>
            <Navbar.Brand><img src={logo} onClick = {() => {
              navigate('/');
            }}/></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/AllProduct') }}>전체메뉴</Nav.Link>
              <Nav.Link onClick={() => { navigate('/Cart') }}>장바구니</Nav.Link>
              <Nav.Link onClick={() => { navigate('/PurchaseHistory') }}>구매내역</Nav.Link>
              <Nav.Link onClick={() => { navigate('/Customer') }}>고객센터</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;