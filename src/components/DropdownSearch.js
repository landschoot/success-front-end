import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownSearch = props => {
  return (
    <div>
      <Dropdown
        placeholder={"Select " + props.boxType}
        fluid
        search
        selection
        options={props.options}
      />
      ;
    </div>
  );
};

export default DropdownSearch;
