import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export class TodoItem extends Component {
  render() {
    const { id, name, category, date, done, no, doneTodo } = this.props;
    return (
      <Alert
        variant={"info"}
        className="d-flex justify-content-between align-items-center"
      >
        <span>
          {no}. ({category}) ({date}) {name}
        </span>

        {done ? (
          <span>✔️</span>
        ) : (
          <div>
            <button className="btn btn-primary me-3">Edit {id}</button>
            <button className="btn btn-success" onClick={() => doneTodo(id)}>
              Done
            </button>
          </div>
        )}
      </Alert>
    );
  }
}

export default TodoItem;
