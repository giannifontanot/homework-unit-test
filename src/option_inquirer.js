
/**
 * Options for the user after entering Manager data
 * @type {{prompts?: {}, Separator?: Separator|{}, ui?: {BottomBar: BottomBar, Prompt: PromptUI}, createPromptModule?: function(*=): *, prompt?: *, registerPrompt?: function(*=, *=): void, restoreDefaultPrompts?: function(): void}}
 */
const inquirer = require('inquirer');

module.exports = {
    getOption: () => {
        const questions = [
            {
                name: 'option',
                type: 'list',
                message: 'What do you want to do next?',
                choices: ['add an engineer', 'add an intern', 'finish building my team'],
            },
        ];
        return inquirer.prompt(questions);
    },
};