function myfunc() {
	var a = document.getElementById('given_data').value;
	var b = document.getElementById('given_value').value;	
	document.getElementById('result').innerHTML ="The bigger value"+" "+ Math.max( a, b);	
}
function myfun() {
	var a = document.getElementById('given_data').value;
	var b = document.getElementById('given_value').value;
	document.getElementById('result').innerHTML ="The smaller value" +" "+ Math.min( a, b);

}