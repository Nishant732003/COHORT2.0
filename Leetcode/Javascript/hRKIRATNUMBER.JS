function parseInteger(value) {
    console.log(value);
    let result = parseInt(value);
    console.log(result);
}
function parsefloat1(value) {
  console.log(value);
  let result = parseFloat(value);
  console.log(result);
}
parseInteger("42");
parseInteger("42px");
parseInteger("4.21");
parsefloat1("4.23");
