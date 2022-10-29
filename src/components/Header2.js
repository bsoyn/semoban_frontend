import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/header2.css";
import logo from "../semobanlogo_3.png";
import { AiFillBell } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

function Header2() {
  return (
    <Navbar collapseOnSelect expand="lg mt-3" variant="light">
      <Container className="nav-cont">
        <img src={logo} href="/main" className="logo_header"></img>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              <NavDropdown
                title="게시판"
                className="nav_dropdown"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="board/free">
                  자유 게시판
                </NavDropdown.Item>
                <NavDropdown.Item href="board/info">
                  정보공유 게시판
                </NavDropdown.Item>
                <NavDropdown.Item href="board/questions">
                  질문 게시판
                </NavDropdown.Item>
                <NavDropdown.Item href="board/mypet">
                  자랑 게시판
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="뉴스"
                className="nav_dropdown"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="news/video">영상 뉴스</NavDropdown.Item>
                <NavDropdown.Item href="news/article">
                  기사 뉴스
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="나의 활동" id="collasible-nav-dropdown">
                <NavDropdown.Item href="mypage/post">
                  작성한 게시글 조회
                </NavDropdown.Item>
                <NavDropdown.Item href="mypage/comment">
                  작성한 댓글 조회
                </NavDropdown.Item>
                <NavDropdown.Item href="mypage/likedpost">
                  좋아요 한 게시글 조회
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="nav-icon">
              <Nav.Link>
                <AiFillBell size={24}></AiFillBell>
              </Nav.Link>
              <Nav.Link>
                <BsFillPersonFill size={24}></BsFillPersonFill>
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header2;
