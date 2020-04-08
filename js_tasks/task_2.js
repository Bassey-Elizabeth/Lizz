 /*****************
 JAVASCRIPT TASK2
 *****************/

 //array of objects
 const data = [
     {
         principal: 2500,
         time: 1.8
     },
     {
         principal: 1000,
         time: 5
     },
     {
         principal: 3000,
         time: 1
     },
     {
         principal: 2000,
         time: 3
     }
 ];

//function interestCalculator
 const interestCalculator = (arr) => {
 	 let rate;
     arr.forEach(item => {
         if ( item.principal >= 2500 && (item.time > 1 && item.time < 3 ) ) {
             return rate = 3;
         } else if (item.principal >= 2500 && item.time >= 3 ) {
             return rate = 4;
         } else if (item.principal < 2500 || item.time <= 1 ) {
             return rate = 2
         } else {
             return rate = 1;
         }
     
     let interest = (item.principal * rate * item.time) / 100;

 });
      let interestData = arr.map ((e) => {
                    return {
                        principal: item.principal,
                        rate: rate,
                        time: item.time,
                        interest: interest
                    }
                });

     console.log(interestData);

      return interestData;

 };

//call function interestCalculator
 interestCalculator(data);


