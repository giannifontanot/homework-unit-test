/**
 *
 * Methods to paont in screen
 */
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');


module.exports = {
    /**
     * Resets screen
     */
    clearPage: () => {
        clear();

        console.log(
            chalk.yellow(
                figlet.textSync('My Team', {
                    horizontalLayout: 'full'
                })
            )
        );
    },
    /**
     * Creates the HTML for
     * the employee's cards
     * @param gTeam
     */
    buildHTML: (gTeam) => {
        let cards = "";

        //FOR EACH
        gTeam.forEach(member => {

            let name = member._name;
            let id = member._id;
            let email = member._email;
            let role = member._role;
            let officeNumber = member._officeNumber;
            let github = member._github;
            let school = member._school;
            let extraDescription = "";
            let extraData = "";
            let icon = "";

            switch (role) {
                case 'Manager':
                    extraDescription = "Office #";
                    extraData = officeNumber;
                    icon = '<i class="fa fa-coffee" aria-hidden="true"></i>';
                    break;
                case 'Engineer':
                    extraDescription = "GitHub";
                    extraData = "<a href='http:////github.com//" + github + "'>github.com/" + github + "</a>";
                    icon = '<i class="fa fa-bolt" aria-hidden ="true"></i>';
                    break;
                case 'Intern':
                    extraDescription = "School";
                    extraData = school;
                    icon = '<i class="fa fa-graduation-cap" aria-hidden="true"></i>';
                    break;
                default:
                    break;
            }


            cards += `<div class="panel m-sm" style="box-shadow: 1px 1px 3px #888888;background-color: white;">
            <div class="panel-header text-left primary">
                <h4>${name}<br>${icon}
                ${role}</h4></div>
            <div class="panel-body">
                <div style="white-space:pre">ID&#9;&#9;${id}</div>
                <div style="white-space:pre">email&#9;<a href="mailto:${email}">${email}</a></div>
                <div style="white-space:pre">${extraDescription}&#9;${extraData}</div>
            </div>
            <div class="line spacer-xs">
            </div></div>`;
        });

        const html = wrapHtml();
        fs.writeFile("./dist/myTeam.html", html, err => {
            console.log(err);
        });

        // Creates the HTML page using the employee's cards
        function wrapHtml() {
            let page = "";
            return page = `<!doctype html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta content="ie=edge" http-equiv="X-UA-Compatible">
                                <meta content="width=device-width, initial-scale=1" name="viewport">
                                <!--suppress SpellCheckingInspection -->
                                <link crossorigin="anonymous" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css"
                                      integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" rel="stylesheet">
                                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
                                <link href="./assets/css/purecssframework.css" rel="stylesheet">
                                <link href="./assets/css/theme-colors.css" rel="stylesheet">
                                <link href="./assets/css/myTeam.css" rel="stylesheet">
                                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
                                <title>Document</title>
                            </head>
                            <body style="background-color: #eee;">
                             <h1 class="danger spacer-xl text-center mt-0 bold"><br>My Team</h1>
                             <div class="flex-grid">
                            ${cards}  
                            </div>
                            </body>
                            </html>`;

        }
    },
};