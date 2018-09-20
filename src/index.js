function solveEquation(equation){
	var arr = (equation.split(' ')),
	    a = Number(arr[0]),
	    b = Number(arr[4]),
	    c = Number(arr[8]);
 
 if(arr[3] == "-") {b = b*-1;}
 if(arr[7] == "-") {c = c*-1;}
 
 var x1 = -b/ 2 /a + Math.pow(Math.pow(b,2) - 4 * a * c , 0.5) / 2 / a;
 var x2 = -b/ 2 / a -Math.pow(Math.pow(b,2) - 4 * a * c ,0.5) / 2 / a;
 
 var answer1 = Math.round(x1),
     answer2 = Math.round(x2);
 
 if(answer1 < answer2){return ([answer1,answer2]);}
 else {return ([answer2,answer1]);}
}
