import React from "react";
import Form from "./Form";

const App = () => {

  const fields = [
    {
      name: "name",
      type: "text",
      label: "Name"
    },
    {
      name: "email",
      type: "email",
      label: "Email"
    },
    {
      name: "password",
      type: "password",
      label: "Password"
    }
  ];

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;