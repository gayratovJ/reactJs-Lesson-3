import React, { Component } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import TodoFilter from "../components/TodoFilter";

export class HomePage extends Component {
  state = {
    todos: [
      {
        id: 0,
        name: "Playing football",
        date: "07-09-2023",
        category: "D",
        done: true,
      },
      {
        id: 1,
        name: "Reading book",
        date: "04-09-2023",
        category: "C",
        done: false,
      },
    ],
    todo: {
      name: "",
      date: "",
      category: "A",
    },
    search: "",
    category: "all",
  };
  render() {
    let { todos, search, category, todo } = this.state;
    todos = todos.filter((todo) => todo.name.toLowerCase().includes(search));

    if (category !== "all") {
      todos = todos.filter((todo) => todo.category === category);
    }

    const doneTodos = todos.filter((todo) => todo.done);
    const undoneTodos = todos.filter((todo) => !todo.done);

    const handleSearch = (e) => {
      this.setState({ search: e.target.value.trim().toLowerCase() });
    };

    const handleCategory = (e) => {
      this.setState({ category: e.target.value });
    };

    const submit = (e) => {
      e.preventDefault();
      let newTodos = [...todos, { ...todo, done: false, id: Date.now() }];
      this.setState({
        todos: newTodos,
        todo: { name: "", date: "", category: "A" },
      });
    };

    const handleTodo = (e) => {
      let newTodo = { ...todo, [e.target.id]: e.target.value };
      this.setState({ todo: newTodo });
    };

    const doneTodo = (id) => {
      let newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.done = true;
        }
        return todo;
      });
      this.setState({ todos: newTodos });
    };

    return (
      <Container>
        <TodoForm todo={todo} submit={submit} handeTodo={handleTodo} />
        <TodoFilter
          handleCategory={handleCategory}
          category={category}
          search={search}
          handleSearch={handleSearch}
        />
        <Tabs defaultActiveKey="all" variant="pills" className="my-3" justify>
          <Tab eventKey="all" title="All todos">
            {todos.map((todo, i) => (
              <TodoItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
          <Tab eventKey="undone" title="Undone todos">
            {undoneTodos.map((todo, i) => (
              <TodoItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
          <Tab eventKey="done" title="Done todos">
            {doneTodos.map((todo, i) => (
              <TodoItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default HomePage;
