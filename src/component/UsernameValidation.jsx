import React, { useState } from "react";

const UsernameValidation = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const validateUsername = (value) => {
    const regex = /^[a-zA-Z]+$/; // Username must be 5-15 characters long and include only letters, numbers, and underscores.
    if (!regex.test(value)) {
      setError(
        "Username must be 5-15 characters long and can only contain letters, numbers, and underscores."
      );
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    validateUsername(value);
  };

  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleChange}
        placeholder="Enter username"
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default UsernameValidation;