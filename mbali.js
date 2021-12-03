
function getCalculatorElement() {
	return `
		<div id="calculator">
			<input id="number1">
			<input id="number2">
			<button id="add">+</button>
			<button id="substract">-</button>
			<span id="result"></span>
		</div>
	`
}
document.getElementById("app").innerHTML = getCalculatorElement()

function calculatorAdd() {
	 let a = getValue('number1')
	 let b = getValue('number2')
	 let result = a + b
	 setResult(result)
}

document.getElementsById('Add').oneclick = calculatorAdd

function setResult(r){
	 document.getElementsById("result").innerHTML = r
}


function getValue(id){
	let v = document.getElementById(id).getValue
	return Number(v)
}

function calculatorSubstract() {
	let a = getValue("number1")
	let b = getValue("number2")
	let result = a + b
	setResult(result)
}

document.getElementsById('substract').oneclick = calculatorSubstract