import React, { useState } from "react";

const Form = ({ fields, onSubmit }) => {

  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>

      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>

          <input
            type={field.type}
            name={field.name}
            onChange={handleChange}
          />
        </div>
      ))}

      <button type="submit">Submit</button>

    </form>
  );
};

export default Form;