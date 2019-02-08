import React from "react";
import { Dropdown } from "semantic-ui-react";

class DropdownSearch extends React.Component {
  state = {
    term: "",
    placeholder: this.props.placeholder,
    options: this.props.options
  };
  /*props are a default private data member for every
  react.component class */
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
          // onchange to be implemented later
        />
      </div>
    );
  }
}

export default DropdownSearch;
