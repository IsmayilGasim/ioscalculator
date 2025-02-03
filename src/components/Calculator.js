import React, { useState } from "react";
import "../styles/Calculator.css";
import ButtonPanel from "./ButtonPanel";
import Input from "./Input";
import Operation from "../logic/Operation";

function Calculator() {
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  console.log("res:", result);
  const onClickHandler = (e) => {
    const text = e.target.innerText;
    if (text == "AC") {
      setInput("0");
    } else if (text == "+") {
      setOperator(text);
      setResult(input);
      setInput("0");
    } else if (text == "=") {
      setResult((pre) => {
        const result = Operation({operator:operator, numberOne:Number(pre), numberTwo:Number(input)});
        console.log('resultttt', result)
        return setInput(result);
      });
    } else {
      setInput((previos) => {
        return (previos != 0 ? previos : "") + text;
      });
    }
  };

  return (
    <div className="calculator">
      <Input text={input} />
      <ButtonPanel onClickHandler={onClickHandler} />
    </div>
  );
}

export default Calculator;
