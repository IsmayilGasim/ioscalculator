export default function Operation({ operator, numberOne, numberTwo }) {
    console.log('op',operator,numberOne,numberTwo)
  if (operator == "+") {
    return numberOne + numberTwo;
  } else if (operator == "-") {
    return numberOne - numberTwo;
  } else if (operator == "*") {
    return numberOne * numberTwo;
  } else if (operator == "/") {
    return numberOne / numberTwo;
  }
}
