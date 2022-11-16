import { useState } from "react";
import { useEffect } from "react";
import React, { useRef } from "react";
import "./App.css";

export default function Ex4() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  //   let arrayNumberall=[1,2,4,1,2,1,4,1,2,2,2];
  const [arrayNumber, setnum] = useState([]);
  const [fillter, setfillter] = useState([]);
  const [nonfillter, setnonfillter] = useState([]);
  const [track, settrack] = useState(false);

  //   const [button, setbutton] = useState(true);
  //   const [ccountfillter, setcountfillter] = useState(0);
  //   const [countnonfillter, setcountnonfillter] = useState(0);

  useEffect(
    function () {
      settrack(false);
      // a=count1
      // a+=count;

      // setcount1(a);
      // console.log(count1);
      // console.log(count);
    },
    [arrayNumber, track]
  );

  const clear = () => {
    setnum([]);
    settrack(false);
    setfillter([]);
    setnonfillter([]);
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
  };

  const random = () => {
    const randomnum = inputRef2.current.value;
    for (let i = 0; i < randomnum; i++) {
      const b = Math.ceil(Math.random() * 9);
      arrayNumber.push(b.toString());
    }
    settrack(true);
    // setcount(com1.length);
    // setnum([...arrayNumber, com1]);
    console.log(arrayNumber);
  };

  //   const filter = () => {
  //     console.log("filter");
  //     let com = [];
  //     let decom = [];
  //       for (let i = 0; i < arrayNumber.length; i++) {
  //         if (arrayNumber[i] === parseInt(inputRef3.current.value)) {
  //           // com.push(arrayNumber[i])
  //           com.push(arrayNumber[i]);
  //         } else {
  //           decom.push(arrayNumber[i]);
  //         }
  //       }
  //     setfillter([com]);
  //     setnonfillter([decom]);
  //     console.log(fillter.length)
  //   };

  const fill = () => {
    const filteredIn = arrayNumber.filter((resultIn) => {
      if (resultIn === inputRef3.current.value) return resultIn;
    });
    const outfilteredIn = arrayNumber.filter((resultIn) => {
      if (resultIn !== inputRef3.current.value) return resultIn;
    });
    setfillter(filteredIn);
    setnonfillter(outfilteredIn);
    console.log(fillter);
    settrack(true);
  };

  // function fil(arrayNumber) {
  //     return arrayNumber == inputRef3.current.value;

  //   }
  //   document.getElementById("demo").innerHTML = arrayNumber.filter(fil);
  //   console.log(arrayNumber.filter(fil));

  return (
    <div>
      <h2>Ex 4</h2>
      <p>Number is require 1 - 100:</p>

      <input
        id="input1"
        ref={inputRef1}
        className="textarea-email"
        type="number"
        placeholder="Enter Your number"
        required
      />
      <button
        onClick={() => {
          // arrayNumber.push([inputRef1.current.value]);
          console.log("push");
          setnum([...arrayNumber, inputRef1.current.value]);
        }}
      >
        Submit
      </button>
      <br />

      <input
        id="input2"
        ref={inputRef2}
        className="textarea-email"
        type="number"
        placeholder="Enter Your number"
        required
      />
      <button onClick={random}>Random</button>
      <br />

      <input
        id="input3"
        ref={inputRef3}
        className="textarea-email"
        type="number"
        placeholder="Enter Your number"
        required
      />
      <button onClick={fill}>filter</button>
      <br />

      <button onClick={clear}>clear</button>

      <p>total number{arrayNumber.length}</p>
      <p>{arrayNumber + ","}</p>
      <br />

      <p>{fillter + ","}</p>
      <br />
      <p>{"total filter" + " " + fillter.length}</p>
      <br />
      <p>{nonfillter + ","}</p>
      <br />
      <p>{"total nonfilter" + " " + nonfillter.length}</p>
    </div>
  );
}
