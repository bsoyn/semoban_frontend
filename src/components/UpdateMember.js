import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';

function UpdateMember() {
  return (
    <div className="Login">
      <Form>
        <h3 className="title mb-4">회원정보 수정</h3>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="id" disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>생년월일</Form.Label>
          <Form.Control type="email" placeholder="생년월일" disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일 입력" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>키워드</Form.Label>
        </Form.Group>

        <p className="updateMemberButtons">
          <Button variant="primary" type="submit">
            수정
          </Button>
          <Button variant="primary" type="submit">
            <Link to='/changepassword' className='link_button'>비밀번호 수정</Link>
          </Button>
          <Button variant="primary" type="submit">
            <Link to='/leaveid' className='link_button'>회원탈퇴</Link>
          </Button>
        </p>
      </Form>
    </div>
  );
}

export default UpdateMember;
