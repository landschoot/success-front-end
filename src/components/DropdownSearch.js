import React from "react";
import { Dropdown } from "semantic-ui-react";

class DropdownSearch extends React.Component {
  state = {
    term: "",
    placeholder: this.props.placeholder,
    options: this.props.options
  };
  render() {
    return (
      <div>
        <Dropdown
          placeholder={this.state.placeholder}
          clearable
          search
          selection
          pointing
          options={this.state.options}
          onChange={e => this.setState({ term: e.target.value })}
        />
      </div>
    );
  }
}

export default DropdownSearch;
