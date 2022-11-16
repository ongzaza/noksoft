import { useState } from "react";
import { useEffect } from "react";
import React, { useRef } from "react";
import "./App.css";
// import React from "react";

function Ex3() {
  const inputRef = useRef("");
  const [number, setnum] = useState(0);
  const [button, setbutton] = useState(false);
  let text = "";

  useEffect(
    function () {
      console.log(number);
      if (number > 100) {
        setnum(100);
        console.log(number);
      }
      if (number < 0) {
        setnum(1);
      }
      submit();
    },
    [number]
  );

  const submit = () => {
    setbutton(true);
    document.getElementById('input').value = ""
    console.log("submit");
    for (let i = 1; i <= number; i++) {
      text += i + "  ";
      document.getElementById("demo").innerHTML = text;
    }
    text = "";
  };

  const submit2 = () => {
    if(button) {
      submit();
    }
    console.log(button);
  };

  const even = () => {
    if (!button) {
      text = "";
    } else {
      console.log("even");
      for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) {
          text += i + "  ";
          document.getElementById("demo").innerHTML = text;
        }
      }
      text = "";
    }
  };

  const odd = () => {
    if (!button) {
      text = "";
    } else {
      console.log("odd");
      for (let i = 1; i <= number; i++) {
        if (i % 2 != 0) {
          text += i + "  ";
          document.getElementById("demo").innerHTML = text;
        }
      }
      text = "";
    }
  };

  return (
    <div>
      <h2>Ex 3</h2>
      <p>Number is require 1 - 100:</p>
      <input
        id="input"
        ref={inputRef}
        className="textarea-email"
        type="number"
        placeholder="Enter Your number"
        required
      />
      <button
        onClick={() => {
          setnum(inputRef.current.value);
        }}
      >
        Submit
      </button>
      <button onClick={even}>even</button>
      <button onClick={odd}>odd</button>
      <button onClick={submit2}>Return Value</button>
      <p id="demo"></p>
    </div>
  );
}

export default Ex3;
