import { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { categories } from "../data/categories";

export class TodoFilter extends Component {
  // searchInputRef = createRef();

  render() {
    const { handleSearch, search, handleCategory, category } = this.props;
    // const handleSearch = () => {
    // console.log(this.searchInputRef.current.value);
    // };
    return (
      <InputGroup className="my-3">
        <Form.Control
          // ref={this.searchInputRef}
          value={search}
          onChange={handleSearch}
          placeholder="Search todo..."
        />
        <InputGroup.Text>
          <Form.Select value={category} onChange={handleCategory}>
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
    );
  }
}

export default TodoFilter;
