import { memo } from "react";
import "../styles/Button.css";
function Button(props) {
  console.log("props: ",props);
  const className =
    props.btnType == "number"
      ? "numberBtn"
      : props.btnType == "action"
      ? "actionBtn"
      : "operationBtn";

  return (
    <button className={className} onClick={props.onClickHandler}  key={props.text}>
      {props.text}
    </button>
  );
}

export default memo(Button);
