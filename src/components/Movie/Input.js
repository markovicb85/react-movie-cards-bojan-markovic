import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        id={props.name}
        className="form-controle"
        type="text"
        value={props.value}
        onChange={() => props.handleChange({props.name})}
      />
      <p className=" ? "activ": "">{}</p>
    </div>
  );
};

export default Input;
