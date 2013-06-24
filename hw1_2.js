#!/usr/bin/env node
var fs = require('fs');
var outfile = "primeNumber.txt";
var primeNumbers = new Array();
var initnum1 = 2;
var initnum2 = 2;
var dividable = new Boolean();
while (primeNumbers.length<100){
	dividable=false;
	while (dividable==false && (initnum2<Math.ceil(initnum1/2)+1)){
		if ((initnum1%initnum2)==0) {
			dividable=true;
		}
		initnum2++;
	}
	if (dividable==false) {
		primeNumbers.push(initnum1)
	}
	initnum2=2;
	initnum1++;
}
var out =primeNumbers[0];
for (var i = 1; i < 100; i += 1) {
	out=out+','+primeNumbers[i]
    console.log(primeNumbers[i]);
}
fs.writeFileSync(outfile, out);  