import React, { useState } from "react";
import "../css/updateMember.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // function validateForm() {
  //   return id.length > 0 && password.length > 0;
  // }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit} className="p-4">
        <h3 className="title">로그인</h3>
        <Form.Group size="lg" controlId="id" className="mb-4">
          <Form.Label className="mb-2">아이디</Form.Label>
          <Form.Control
            autoFocus
            type="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="mb-5">
          <Form.Label className="mb-2">비밀번호</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button block="true" type="submit" className="btn mb-5" size="lg">
          로그인
        </Button>

        <div className="d-flex flex-row justify-content-around mb-4">
          <Link to="/findid">아이디 찾기</Link>
          <Link to="findpassword">비밀번호 찾기</Link>
        </div>
      </Form>
    </div>
  );
}
