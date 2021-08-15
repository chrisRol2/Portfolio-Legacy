import React, { useState, useContext, useEffect } from "react";
import ErrorContext from "../context/ErrorContext";
import LanguageContext from "../context/LanguageContext";
import "./styles/ContactMe.css";
const idleStyles = {
  style: {
    color: "#121111",
    borderColor: "#121111",
  },
  class: "form__input",
  classArea: "form__input-textarea",
};
const errorStyles = {
  style: {
    // color: "#f66",
    borderColor: "#f66",
  },
  class: " animate__animated animate__shakeX form__input",
  classArea:
    "form__input-textarea animate__animated animate__shakeX form__input",
};
// const sentStyles = {
//   style: {},
//   class: "form__input",
// };

const styleForm = {
  email: idleStyles,
  name: idleStyles,
  text: idleStyles,
};

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(null);
  const [text, setText] = useState("");
  const [errorStyle, setErrorStyle] = useState(styleForm);
  const { text: lang } = useContext(LanguageContext);
  const { error, setError } = useContext(ErrorContext);
  const emailExpression =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,63}$/i;
  const nameExpression = /[A-Z-a-z-À-ÿ] /;

  const textExpression = /[A-Z-a-z-À-ÿ] /;
  const handleChange = (e) => {
    if (e.target.name === "nameEMail") {
      setErrorStyle({ ...errorStyle, name: idleStyles });
    }
    if (e.target.name === "emailEMail") {
      setErrorStyle({ ...errorStyle, email: idleStyles });
    }
    if (e.target.name === "textEMail") {
      setErrorStyle({ ...errorStyle, text: idleStyles });
    }
  };

  const post = () => {
    let errorFlag = false;
    let errorName = name.split(" ").length >= 1 && nameExpression.test(name);
    let errorMail = emailExpression.test(email);
    let errorText = text.split(" ").length > 15 && textExpression.test(text);
    if (!errorName) errorFlag = true;
    if (!errorMail) errorFlag = true;
    if (!errorText) errorFlag = true;

    if (!errorFlag) {
      setError({
        error: null,
      });

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
        .then((data) => {
          setError({
            errorForm: !data.success ? "Fail to send email" : "ok",
          });
        })
        .catch((err) => {
          setError({
            errorForm: "connection error",
          });
        });
    } else {
      //errorStyle
      setErrorStyle({
        name: !errorName ? errorStyles : idleStyles,
        email: !errorMail ? errorStyles : idleStyles,
        text: !errorText ? errorStyles : idleStyles,
      });
      setTimeout(() => {
        setErrorStyle({
          name: !errorName
            ? { ...errorStyles, class: "form__input" }
            : idleStyles,
          email: !errorMail
            ? { ...errorStyles, class: "form__input" }
            : idleStyles,
          text: !errorText
            ? { ...errorStyles, classArea: "form__input-textarea" }
            : idleStyles,
        });
      }, 1000);
      if (!errorName) {
        console.log("error: ", errorName);
      }
      if (!errorMail) {
        console.log("error: ", errorMail);
      }
      if (!errorText) {
        console.log("error: ", errorText);
      }
      setError({ errorForm: "invalid data" });
      return;
    }
  };

  useEffect(() => {
    if (error.errorForm === "invalid data") {
    } else if (error.errorForm === "Fail to send email") {
    } else if (error.errorForm === "connection error") {
    } else if (error.errorForm === "ok") {
    }
  }, [error]);

  return (
    <div id="contact" scrollspy="true">
      <div className="title__component" id="contact__Title">
        <h2>{lang.contactMe}</h2>
      </div>
      <div id="contact__div">
        <div className="form__input__div">
          <label htmlFor="name-email">{lang.name}</label>
          <input
            style={errorStyle.name.style}
            className={errorStyle.name.class}
            onChange={(e) => {
              setName(e.target.value);
              handleChange(e);
            }}
            placeholder={lang.name}
            type="text"
            name="nameEMail"
            id="name-email"
          />
          {/* Email */}
        </div>
        <div className="form__input__div">
          <label htmlFor="email-email">Email</label>
          <input
            style={errorStyle.email.style}
            className={errorStyle.email.class}
            placeholder="Email"
            type="email"
            name="emailEMail"
            id="email-email"
            onChange={(e) => {
              setEmail(e.target.value);
              handleChange(e);
            }}
          />
        </div>
        <div className="form__input__div">
          <label htmlFor="text-email">{lang.message}</label>

          <textarea
            onChange={(e) => {
              setText(e.target.value);
              handleChange(e);
            }}
            style={errorStyle.text.style}
            className={errorStyle.text.classArea}
            name="textEMail"
            id="text-email"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <input
          type="button"
          value={lang.send}
          id="form__sendButton"
          onClick={post}
        />
      </div>
    </div>
  );
};

export default ContactMe;
