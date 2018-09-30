module.exports =  function solveEquation(equation){
 let equationToArray = (equation.split(' '));	
 let a = Number(equationToArray[0]),
     b = Number(equationToArray[4]),
     c = Number(equationToArray[8]);

 equationToArray[3] == "-" ? b = b* -1 : 0;
 equationToArray[7] == "-" ? c = c* -1 : 0;
 
const discriminant = Math.pow(Math.pow(b,2) - 4 * a * c , 0.5) / 2 / a
let x1 = -b / 2 / a + discriminant;
let x2 = -b / 2 / a - discriminant;
 
let answer1 = Math.round(x1);
let answer2 = Math.round(x2);
 
answer1 <= answer2 ? return([answer1,answer2]) : return([answer2,answer1]);
}
