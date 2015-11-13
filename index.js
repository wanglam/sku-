/* @flow */

function all(arr){
	return allByIndex(arr,0);
}

function allByIndex(arr,idx){
	if(idx !== arr.length){
		var newArr = arr;
		if(idx > 0){
			newArr = arr.slice(1);
			newArr.push(arr.slice(0,1)[0])
		}	
		idx++ ;
		var result = arr1(newArr);
		result = result.concat(allByIndex(newArr,idx));
		return result;
	}
	return [];
}

function arr1(arr){
	if(arr.length === 1){
		return arr[0];
	}else if(arr.length >= 2){
		return arrayMethod2(arr.slice(0,1)[0],arr1(arr.slice(1)));
	}
	return [];
}

function arrayMethod2(arr1,arr2){
	if(arr1.length >= 1){
		var current = multipleOneAndArray(arr1.slice(0,1)[0],arr2);
		current = current.concat(arrayMethod2(arr1.slice(1),arr2));
		return current;
	}
	return [];
}

function multipleOneAndArray(one,arr){
	if(arr.length > 0){
		var last = multipleOneAndArray(one,arr.slice(1));
		var current = new Array();
		current.push(one);
		if(Object.prototype.toString.call(arr.slice(0,1)[0]) === '[object Array]'){
			current = current.concat(arr.slice(0,1)[0]);
		}else{
			current.push(arr.slice(0,1)[0]);
		}
		last.unshift(current);
		return last;
	}
	return [];
}




// console.log(arrayMethod2([1,2],[[3,4],[5,6]]));

// console.log(multipleOneAndArray(1,[3,[5,6]]));

// console.log(arr1([[1,2],[3,4],[5,6],[7,8]]));

// console.log(all([[1,2],[3,4]]));

console.log(arr1([[1,2],[3,4],[5,6],[7,8]]));

console.log(all([[1,2],[3,4],[5,6],[7,8]]));
