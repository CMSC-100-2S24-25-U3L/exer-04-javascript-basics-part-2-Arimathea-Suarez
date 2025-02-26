import { generateUniqueID, addAccount } from "./index.js";

// For testing the output of the first function
const id1 = generateUniqueID("Alan", "Turing");
console.log(id1);


//For testing the output of the second function
const result1 = addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);
console.log(result1);