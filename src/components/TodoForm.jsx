import React, { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { categories } from "../data/categories";

export class TodoForm extends Component {
  render() {
    const { submit, handeTodo, todo } = this.props;
    return (
      <Form onSubmit={submit} className="w-50 mx-auto">
        <Row>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Todo name</Form.Label>
            <Form.Control
              value={todo.name}
              onChange={handeTodo}
              required
              type="text"
              placeholder="Todo name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md={6} controlId="date">
            <Form.Label>Todo date</Form.Label>
            <Form.Control
              value={todo.date}
              onChange={handeTodo}
              required
              type="date"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md={6} controlId="category">
            <Form.Label>Todo category</Form.Label>
            <Form.Select value={todo.category} onChange={handeTodo}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Button className="w-100" type="submit">
          Add todo
        </Button>
      </Form>
    );
  }
}

export default TodoForm;
