// Exercise 7.9
//Part One
let
    num = 1001;
num = String(num);
console.log(num.length);

let numFloat = 123.45;
numFloat = String(numFloat);
console.log(numFloat.length);

if (String(num).includes('.')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }

//Part Two
let
    dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
dna = dna.trim();
console.log(dna);

dna.toUpperCase();

dna.replace('GCT', 'AGG')

if (dna.indexOf("CAT" !== -1)){
    console.log("CAT found");
} else {
    console.log("CAT NOT found");
}

let codon = dna.slice(16, 19);
console.log(codon);

console.log(`The DNA strand is ${dna.length} characters long.`);


let str = "JavaScript";
let strAbbr = str.slice(0, 1) + str.slice(4, 5);
console.log(strAbbr);

let altAbbr = str.replace("ava", "").replace("cript", "");
console.log(altAbbr);

console.log(`The abbreviation for ${str} is ${str[0]}${str[4]}.`);

let titleText = 'title case';
titleText = titleText.replace(titleText[0], titleText[0].toUpperCase());
titleText = titleText.replace(titleText[6], titleText[6].toUpperCase());
console.log(titleText);