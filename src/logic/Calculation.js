export default function Calculation({ operator, numberOne, numberTwo }) {

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b !== 0 ? a / b : "Sıfıra bölmək olmaz"
};
 
 return operations[operator](numberOne,numberTwo);
}
