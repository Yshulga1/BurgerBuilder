import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
const orderSummary = props => {
  //object keys transforming it in array
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>

      <p>A delicious burger with an amaizing ingredience:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <Button btnType="Danger">CANCEL</Button>
      <Button btnType="Success">CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
