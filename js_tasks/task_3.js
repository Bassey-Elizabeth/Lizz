/*****************
 JavaScript Task 3
 *****************/
	
//Function yugioh()
	const yuGiOh = n => {
	
	const arr = [];
	let word;

	for (let i; i<=n; i++) {
		if (i%2 === 0 && i%3 === 0 && i%5 === 0) {
			return word = "yu-gi-oh";
		} else if (i%2 === 0 && i%3 === 0) {
				return word="yu-gi";
		} else if (i%2 === 0 && i%5 === 0) {
				return word="yu-oh";
		} else if (i%3 === 0 && i%5 === 0) {
				return word="gi-oh";
		} else if (i%2 === 0) {
				return word="yu";
		} else if (i%3 === 0) {
				return word="gi";
	    } else if (i%5 === 0) {
				return word = "oh";
	    } else {
	    	return word = i;
	    }

	    arr.push(word);
	}
	
	console.log(arr);
	return arr;
	
}


//call function yuGiOh)
yuGiOh(100);
