// Arimathea Charmille H. Suarez
// CMSC 100 - U3L
// Description: A password validation program using JavaScript with extra functions



// Needed to import for the ES Module
import { appendFileSync } from 'node:fs';
import { type } from 'node:os';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';


// The first funtion in generating a unique ID

export function generateUniqueID(firstName, lastName) {
    if (typeof firstName !== "string" || typeof lastName !== "string") { // For the validation of strings
        return null;
    }

    // To convert the firstName, lastLetter and uniqueString to be trimmed and lowercased
    const firstLetter = firstName.trim().charAt(0).toLowerCase();
    const lastLetter = lastName.trim().toLowerCase();
    const uniqueString = uuidv4().replace(/~/g, '').substring(0, 8)

    return `${firstLetter}${lastLetter}${uniqueString}`; // To return the unique ID
}





// The second function to add an account
export function addAccount(accountData) {
    if (!Array.isArray(accountData) || accountData.length !== 4) { // To ensure that the accountData is an array with 4 elements
        return false;

    }

    // To classify into different variables
    const [firstName, lastName, email, age] = accountData;


    // For the validation of each field
    if (
        typeof firstName !== "string" || firstName.trim() === "" ||
        typeof lastName !== "string" || lastName.trim() === "" ||
        typeof email !== "string" || email.trim() === "" ||
        !validator.isEmail(email) ||
        typeof age !== "number" || age < 18
    ) {

        return false;
    }


    const uniqueID = generateUniqueID(firstName, lastName);
    if (!uniqueID) {
        return false;
    }

    const userData = `${firstName},${lastName},${email},${age},${uniqueID}\n`;

    // To append the user data inside the 'users.txt'
    try {
        appendFileSync('users.txt', userData, 'utf8');
        return true;

    } catch (err) {
        return false;
        /* Handle the error */
    }

}


//References:
// typeof - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// trim - https://www.w3schools.com/java/ref_string_trim.asp
// charAt - https://www.w3schools.com/java/ref_string_charat.asp
// replace - https://www.w3schools.com/jsref/jsref_replace.asp
// substring - https://www.w3schools.com/jsref/jsref_substring.asp
// array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

