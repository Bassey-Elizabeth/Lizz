/*****************
 JavaScript Task 3
 *****************/
	
//Function yugiyo()
	const yuGiYo = n => {
	const word = [];

	for (let i; i<=n; i++) {
		if (i%2 === 0 && i%3 === 0 && i%5 === 0) {
			word.push("yu-gi-yo");
		} else if (i%2 === 0 && i%3 === 0) {
				word.push("yu-gi");
		} else if (i%2 === 0 && i%5 === 0) {
				word.push("yu-yo");
		} else if (i%3 === 0 && i%5 === 0) {
				word.push("gi-yo");
		} else if (i%2 === 0) {
				word.push("yu");
		} else if (i%3 === 0) {
				word.push("gi");
	    } else if (i%5 === 0) {
				word.push("yo");
	    } else {
	    	word.push(i);
	    }
	}

	return word;
	console.log(word);
}


//call function yuGiyo()
yuGiYo(100);
