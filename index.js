import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'tool',
            type: 'input',
            message: "what you want to add in your todos?",
            day: "when day sheri"
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: "do you want to add more?",
            default: "false",
            day: "sunday"
        }
    ]);
    todos.push(addTask.tool);
    condition = addTask.addMore;
    console.log(todos);
}
