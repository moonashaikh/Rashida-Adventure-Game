#! /usr/bin/env node
// ********* Rashida Makes  Adventure Game  Project **************
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "please Enter your Name:"
    }
]);
// console.log(player.name)
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent: ",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
// console.log(opponent.select)
//  gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // skeleton
    if (opponent.select == "Skeleton") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "what would you like to do: ",
                choices: ["Atack", "Drink Portion", "Run for Your Life.."]
            }
        ]);
        if (ask.opt == "Atack") {
            let num = Math.floor(Math.random() * 2); // generete number 0 or 1 using mathfuncton
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.grey(`${p1.name} ,fuel is ${p1.fuel}`));
                console.log(chalk.bold.grey(`${o1.name} ,fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.grey("you loose, Better Luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.grey(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.grey(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink health portion, your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for Your Life..") {
            console.log(`you loose better luck next time`);
            process.exit();
        }
    }
    //  Alien
    if (opponent.select == "Alien") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "what would you like to do: ",
                choices: ["Atack", "Drink Portion", "Run for Your Life.."]
            }
        ]);
        if (ask.opt == "Atack") {
            let num = Math.floor(Math.random() * 2); // generete number 0 or 1 using mathfuncton
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.grey(`${p1.name} ,fuel is ${p1.fuel}`));
                console.log(chalk.bold.grey(`${o1.name} ,fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.grey("you loose, Better Luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.grey(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.grey(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink health portion, your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for Your Life..") {
            console.log(`you loose better luck next time`);
            process.exit();
        }
    }
    //  Zombie
    if (opponent.select == "Zombie") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "what would you like to do: ",
                choices: ["Atack", "Drink Portion", "Run for Your Life.."]
            }
        ]);
        if (ask.opt == "Atack") {
            let num = Math.floor(Math.random() * 2); // generete number 0 or 1 using mathfuncton
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.grey(`${p1.name} ,fuel is ${p1.fuel}`));
                console.log(chalk.bold.grey(`${o1.name} ,fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.grey("you loose, Better Luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.grey(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.grey(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink health portion, your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for Your Life..") {
            console.log(`you loose better luck next time`);
            process.exit();
        }
    }
} while (true);
