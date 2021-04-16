import React, { useState } from "react";
import "./Form.css";
function Form(props) {
  // return <h1 className="formStyle">{props.title}</h1>;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [fullname, setFullName] = useState("");

  const nameEvent = (event) => {
    setName(event.target.value);
  };
  const emailEvent = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = () => {
    // alert(name);
    setFullName(name);
  };
  return (
    <React.Fragment>
      <div class="formStyle">
        {props.title}
        <form>
          <div>Name:</div>
          <input
            className="input-block"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={nameEvent}
          />
          <br></br>
          <div>Email:</div>
          <input
            className="input-block"
            type="Email"
            placeholder="Enter Email"
            value={email}
            onChange={emailEvent}
          />
          <br></br>
          <div>Password:</div>
          <input
            className="input-block"
            type="password"
            placeholder="Enter Password"
            // value={value}
            // onChange={inputEvent}
          />
          <br></br>
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>

          <h3> Your form is submit {fullname} </h3>
        </form>
      </div>
    </React.Fragment>
  );
}
export default Form;
