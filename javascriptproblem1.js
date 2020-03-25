let arraySize = getArraySize();
let numberArray = []; 
fillArray(arraySize, numberArray);
let total = getTargetTotal();
findTarget(numberArray, total);

function getArraySize(){
	let arraySize = prompt("Enter the array size: ");
	return arraySize;
}

function fillArray(arraySize, numberArray){
	for(let i = 0; i < arraySize; i++){
		let number = prompt("Enter a number for the array:");
		if(numberArray.includes(number)){
			console.log("Already in the array!");
			fillArray(arraySize, numberArray);
		}
		else {
			numberArray[i] = number;
		}
	}
}

function getTargetTotal(){
	let target = prompt("Enter a target total:");
	return target;
}

function findTarget(numberArray, target){
	for(let i = 0; i < numberArray.length; i++){
		for(let j = 0; j < numberArray.length; j++){
			if(target === (numberArray[i] + numberArray[j])){
				console.log("["+i+"]["+j+"]");
				console.log("-------------------------");
				console.log("["+numberArray[j]+"]["+numberArray[i]+"]");
			}
			else{
				console.log("No Match!");
			}
		}
	}
}