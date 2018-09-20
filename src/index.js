function solveEquation(equation){
	var arr = (equation.split(' '));
  
  /* "-20", "*", "x^2", "-", "108797540", "*", "x", "-", "130011773690520" */
  
 var a = Number(arr[0]);
 var b = Number(arr[4]);
 var c = Number(arr[8]);
 
 if(arr[3] == "-") {b = b*-1;}
 if(arr[7] == "-") {c = c*-1;}
 
var x1 = -b/ 2 /a + Math.pow(Math.pow(b,2) - 4 * a * c , 0.5) / 2 / a;
var x2 = -b/ 2 / a -Math.pow(Math.pow(b,2) - 4 * a * c ,0.5) / 2 / a;
 
 var answer1 = Math.round(x1);
 var answer2 = Math.round(x2);
 
 if(answer1 < answer2){ 			       
 		return [answer1,answer2]}
 else {
 		return [answer2,answer1]}
}
