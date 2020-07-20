var responses                                   = require('./responses');

exports.findMaxColorAndCount               = findMaxColorAndCount;
exports.calculateNumberOfNotes     = calculateNumberOfNotes;


//Write a program to find which colour has come the maximum times and the count of that colour. 

async function findMaxColorAndCount(req, res) {
	try {
        let arr = req.body.colorArray;
        var obj = {};
        var color = '';
        var count = 0;
        for(var i=0; i<arr.length; i++) {
            if(obj.hasOwnProperty(arr[i])) {
                obj[arr[i]]++;
            }
            else {
                obj[arr[i]] = 0;
            }
            if(obj[arr[i]] > count){
                count = obj[arr[i]];
                color =  arr[i];
            }
        }


    return responses.actionCompleteResponse(res, {'color': color, 'count': count});

	} catch (error) {
        responses.somethingWentWrongError(res);
	}
}

//When a user enters an amount to withdraw, it should dispense the minimum number of notes for that amount 
// suppose value to be 4800

async function calculateNumberOfNotes(req, res) {
	try {
        const inputAmount = req.body.inputAmount;
        var notes = [];
        
           var notes2000 = Math.floor(inputAmount / 2000);
           var notes500 = Math.floor((inputAmount - (notes2000 * 2000)) / 500 );
           var notes200 = Math.floor((inputAmount - ((notes2000 * 2000) + (notes500 * 500))) / 200);
           var notes100 = Math.floor((inputAmount - ((notes2000 * 2000) + (notes500 * 500) + (notes200 * 200))) / 100);
       
          notes.push(notes2000);
          notes.push(notes500);
          notes.push(notes200);
          notes.push(notes100);
        //  console.log(notes);


    return responses.actionCompleteResponse(res, {"2000": notes[0], "500": notes[1], "200": notes[2], "100": notes[3]});

	} catch (error) {
        responses.somethingWentWrongError(res);
	}
}