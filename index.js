// Arimathea Charmille H. Suarez
// CMSC 100 - U3L
// Description: A password validation program using JavaScript with extra functions



// Needed to import for the ES Module
import { appendFileSync } from 'node:fs';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';


// The first funtion in generating a unique ID

export function generateUniqueID(firstName, lastName) {
    if (typeof firstName !== "string" || typeof lastName !== "string") {
        return null;
    }

    const firstLetter = firstName.trim().charAt(0).toLowerCase();
    const lastLetter = lastName.trim().toLowerCase();
    const uniqueString = uuidv4().replace(/~/g, '').substring(0, 8)

    return `${firstLetter}${lastLetter}${uniqueString}`;
}


try {
    appendFileSync('message.txt', 'data to append');
    console.log('The "data to append" was appended to file!'); // To notify that the file has been properly appended
} catch (err) {
    /* Handle the error */
}


//References:
// typeof - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// trim - https://www.w3schools.com/java/ref_string_trim.asp
// charAt - https://www.w3schools.com/java/ref_string_charat.asp
// replace - https://www.w3schools.com/jsref/jsref_replace.asp
// substring - https://www.w3schools.com/jsref/jsref_substring.asp
