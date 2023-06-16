import React, { useState } from "react";
import "../styles/contact.css";
export default function Contact() {
  const [email, setEamil] = useState("");
  const [username, setUsername] = useState("");
  const [massage, setMessage] = useState("");

  function Handelsubmit(e) {
    e.preventDefault();
    setEamil("");
    setMessage("");
    setUsername("");
  }
  return (
    <div className="contact-container">
      <h1>contact us</h1>
      <form className="form-container" onSubmit={Handelsubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEamil(e.target.value)}
        />
        <textarea
          placeholder="You message"
          rows="4"
          cols="50"
          value={massage}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="btn-submit" type="sibmit">
          Submit
        </button>
      </form>
    </div>
  );
}
