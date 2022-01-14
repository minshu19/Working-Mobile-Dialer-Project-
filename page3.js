
function refreshString(num)
{   
	let result = document.getElementById('result')
	result.innerHTML = num;
}

function getString()
{
	let result = document.getElementById('result')
	return result.innerHTML
}

function appendString(btnTxt)
{
	let resultString = getString()
	refreshString(resultString + btnTxt)
}

function removeChar()
{
	let str = getString() 
	refreshString(str.slice(0, str.length - 1));
}



