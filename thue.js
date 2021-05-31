function checker() {
 var val = document.getElementById('rules').value;
 document.getElementById('output').innerHTML="Вы ввели: "+val;
}

function run() {
	var ruleBox = document.getElementById('rules');
	var initBox = document.getElementById('input');
	var resultBox = document.getElementById('output');
	var errorBox = document.getElementById('errors');
	
	var ruleString = ruleBox.value;
	var initString = initBox.value;
	var result = '';
	var errors = '';
	
	ruleArray = ruleString.split('|');
	ruleArray = ruleArray.filter(item => item !== '')
	errorBox.value = ruleArray;
	p = console.log;
	//p(ruleArray);
	
	ruleObject = {};
	ruleArray.forEach(element => {
		var [a,b] = element.split('=');
		ruleObject[a] = b;
		});
	//p(ruleObject);
	
	if (typeof toPrint == "undefined") {var toPrint = true};
	
	while(Object.keys(ruleObject).some( a=>initString.includes(a) )){
		for (const [key, value] of Object.entries(ruleObject)) {
			initString = initString.replace(key, value);
		};
		if (toPrint) {result += initString +'\n'; resultBox.value = result};
	}
	
	resultBox.value = result
}

