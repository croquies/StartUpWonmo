#!/usr/bin/env node
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

for (var i = 0; i < 100; i += 1) {
    console.log(primeNumbers[i]);
}