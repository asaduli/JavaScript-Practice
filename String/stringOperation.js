

// String methods practice


let str="abcdefghijklmnopqrstuvwxyz"

let length=str.length;// this method calculates the length of the string
console.log("length: " + str.length);

//Replacement method for strings

let newstr=str.replace('a','z');  // 
console.log("newstr: " + newstr);

//Repalce method returns a new string
//Replace method is case sensitive
//It replaces only first match by default

let newstr2="Please visit Microsoft.MICROSOFT is famus for windows operating system";
let replaceStr2=newstr2.replace('Microsoft','Google') ;

//to ignore case sensitive Replace method need regular expression (/i)
//Regular expression are written without quote
let replaceStr2_1=newstr2.replace(/microsoft/i,'Google');
//to replace all the match, need to use /g regular expression for global flag set.
let replaceStr2_2=newstr2.replace(/Microsoft/ig,'Google');

console.log(replaceStr2_2);

// slice(startpostion, endposition) ..end postion not included
let slicestr=str.slice(2,6); //slice(startpositon) [if the second parameter is not included than rest of the character will be sliced]

console.log(slicestr);

// substring(star,end) similar to slice()

let part=str.substring(2,6);
console.log(part);

//let part2=str.substr(2,6);

//toUpperCase , toLowerCase method

let lower='asadul islam seeyam';
let upper='ASADUL ISlam SEEyam';
console.log(lower.toUpperCase());
console.log(upper.toLowerCase());


//String Concatanation Method

let concat1="My name is";
let concat2="Seeyam";
console.log(concat1.concat(' ').concat(concat2));


// Trim() method

//Remove white space from both side of the string 
//trimStart() remove white space from the star of sting 
//trimEnd() remove white space from the end of string 


let text1=" \'This is text with white space\' ";
console.log(text1.trim());
console.log(text1.trimStart());

//Pad method
//for adding character 
//fisrt parameter is number of combined character include adding character
//second parameter is the charcter to add


let text2='5';
console.log(text2.padStart(5,'0'));
console.log(text2.padEnd(5,'0'));


