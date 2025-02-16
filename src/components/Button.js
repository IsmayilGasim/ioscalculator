import { memo, useContext } from "react";
import "../styles/Button.css";
import { HandlerContext } from "./Calculator";


function Button(props) {
  console.log("props: ", props);
  const clickHandlerContext = useContext(HandlerContext)

  console.log("clickHandlerContext:",clickHandlerContext)
  const className =
    props.btnType == "number"
      ? "numberBtn"
      : props.btnType == "action"
      ? "actionBtn"
      : "operationBtn";

       
  return (
    <button
      className={className}
      onClick={clickHandlerContext}
      key={props.text}
    >
      {props.text}
    </button>
  );
}

export default memo(Button);
