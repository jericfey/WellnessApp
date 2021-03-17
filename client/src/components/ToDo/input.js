import React, { useState } from "react";
import ReactDOM from "react-dom";
function FormInput(props) {
  const [formObject, setformObject] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setformObject({ ...formObject, [name]: value });
  }

  const createNewTask = (event) => {
    event.preventDefault();
    const payload = {
      name: formObject.name,
    };
  };
  return (
    <form onSubmit={createNewTask}>
      <input
        label="add..."
        type="text"
        value={formObject.name}
        onChange={handleChange}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}
ReactDOM.render(<FormInput />, document.getElementById("root"));
export default FormInput;
