import React, { useState } from "react";
import "./Form.css";
const Form = ({ stateChanger, userData, stateChanger_two }) => {
  const [formError, setFormError] = useState(false);
  const [person, setPerson] = useState({
    fullname: "",
    email: "",
    country: "",
    city: "",
    address: "",
  });
  const [formFadeOut, setFormFadeOut] = useState(false);
  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      person.fullname &&
      person.email &&
      person.country &&
      person.city &&
      person.address
    ) {
      setFormFadeOut(true);
      setTimeout(() => {
        stateChanger(true);
        stateChanger_two(false);
      }, 500);
      userData({
        ...person,
      });
    } else {
      setFormError(true);
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className={formFadeOut ? "form fade" : "form"}
    >
      <div className="control_group">
        <div className="label">Full name</div>
        <input
          type="text"
          placeholder="Alex Nobody"
          name="fullname"
          value={person.fullname}
          onChange={changeHandler}
        />
      </div>
      <div className="control_group">
        <div className="label">Email</div>
        <input
          type="email"
          placeholder="example@exmpl.com"
          name="email"
          value={person.email}
          onChange={changeHandler}
        />
      </div>
      <div className="control_group">
        <div className="label">Country</div>
        <input
          type="text"
          placeholder="United Kingdom"
          name="country"
          value={person.country}
          onChange={changeHandler}
        />
      </div>
      <div className="control_group">
        <div className="label">City</div>
        <input
          type="text"
          placeholder="Manchester"
          name="city"
          value={person.city}
          onChange={changeHandler}
        />
      </div>
      <div className="control_group">
        <div className="label">Address</div>
        <input
          type="text"
          placeholder="Somewhere st. apt. 12"
          name="address"
          value={person.address}
          onChange={changeHandler}
        />
      </div>
      <button className="submit">Confirm order</button>
      {formError && (
        <div
          className="error"
          style={{ fontSize: "14px", color: "red", marginTop: "5px" }}
        >
          Please fill out form fields
        </div>
      )}
    </form>
  );
};

export default Form;
