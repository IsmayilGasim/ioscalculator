import React from "react";
import Button from "./Button";
import { PiCalculatorThin } from "react-icons/pi";

import "../styles/ButtonPanel.css";
function ButtonPanel(props) {
  return (
    <div className="btnPanel">
      <div className="horizontal">
        <Button
          btnType="action"
          text="AC"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="action"
          text="+/-"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="action"
          text="%"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="operation"
          text="/"
          onClickHandler={props.onClickHandler}
        />
      </div>
      <div className="horizontal">
        <Button
          btnType="number"
          text="7"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="number"
          text="8"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="number"
          text="9"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="operation"
          text="*"
          onClickHandler={props.onClickHandler}
        />
      </div>
      <div className="horizontal">
        <Button
          btnType="number"
          text="4"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="number"
          text="5"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="number"
          text="6"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="operation"
          text="-"
          onClickHandler={props.onClickHandler}
        />
      </div>
      <div className="horizontal">
        <Button
          btnType="number"
          text="1"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="number"
          text="2"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="number"
          text="3"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="operation"
          text="+"
          onClickHandler={props.onClickHandler}
        />
      </div>
      <div className="horizontal">
        <Button
          btnType="number"
          text={<PiCalculatorThin />}
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="number"
          text="0"
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="number"
          text="."
          onClickHandler={props.onClickHandler}
        />
        <Button
          btnType="operation"
          text="="
          onClickHandler={props.onClickHandler}
        />
      </div>
    </div>
  );
}

export default ButtonPanel;
