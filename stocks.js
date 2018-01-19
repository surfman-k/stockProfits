
function maxProfit(arr){
	var potential = [];
	for(i = 0; i < arr.length; i++){
		for(j = i + 1; j < arr.length -1; j ++){
			potential.push(arr[j] - arr[i]);
		}
	}
	var max = potential.reduce(function(a, b) {
    return Math.max(a, b);
	});

	return (max > 0) ? max : -1;
}


module.exports = maxProfit;

//console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));