import fs from "fs";
import { raz } from "../src/raz-resume";
import { transform } from "../src/dataTransformer";
const data = transform(raz);

// Define your variable
// Convert the variable to JSON string
const jsonData = JSON.stringify(data);

// Write the JSON string to a file
fs.writeFileSync("./resume.json", jsonData);

console.log("Data written to output.json");
