#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: chalk.yellow("Enter your sentence to count the word:"),
});
const wordCount = answer.sentence.trim().split(" ");
console.log(wordCount);
console.log(chalk.blueBright(`your sentence word count is: ${wordCount.length}`));
