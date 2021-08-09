import React, { useState } from "react";
import "./styles/ContactMe.css";

const ContactMe = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [text, setText] = useState(null);
  let emailExpression =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  const post = () => {
    if (emailExpression.test(email)) {
      console.log("enviando");
      fetch("https://formsubmit.co/ajax/christopher_rol@hotmail.es", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          mail: email,
          name: name,
          message: text,
          enviado: "se envio de me.rolgus.com",
        }),
      })
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .catch((error) => console.log(error));
      return;
    } else {
    }
  };

  return (
    <div id="contact" scrollspy="true">
      <div className="title__component" id="contact__Title">
        <h2>Contact Me</h2>
      </div>
      <div id="contact__div">
        <div className="form__input__div">
          <label htmlFor="name-email">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="form__input"
            type="text"
            name="nameEMail"
            id="name-email"
          />
          {/* Email */}
        </div>
        <div className="form__input__div">
          <label htmlFor="email-email">Email</label>
          <input
            placeholder="Email"
            className="form__input"
            type="email"
            name="emailEMail"
            id="email-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__input__div">
          <label htmlFor="text-email">Message</label>

          <textarea
            onChange={(e) => setText(e.target.value)}
            className="form__input-textarea"
            name="textEMail"
            id="text-email"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <input
          type="button"
          value="Send"
          id="form__sendButton"
          onClick={post}
        />
      </div>
    </div>
  );
};

export default ContactMe;
