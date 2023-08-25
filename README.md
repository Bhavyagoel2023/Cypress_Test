# CypressBasics
This is a simple project which includes single test case of Web and API Automation using Cypress

**Pre requisites**

1. Install Nodejs on your machine and set the for Nodejs
2. Install any IDE either Visual Studio or Webstrom


**Running the Project**
1. Take a clone of the Reposiory on your local machine
2. Open terminal in visual studio code
3. Open the repo. folder in visual studio code
4. Now go to terminal and run command
"npm i or npm install"
5. Verify a node_modules folder should get created in your folder
6. Now run the command
"npx cypress open" or "npx cypress run"
7. After this, a cypress window will open and then if you have created any test case you can see that and run it from there.
8. Now click on the testcase which are present in the .ts extension the test will get executed


**Reporting in Cypress

**Mocha reporting**
   1. npm install mochawesome --save-dev
   2. npm install mocha --save-dev
   3. npm install mochawesome-merge --save-dev
   4. add the below code in the cypress.json file
       {
           "reporter": "mochawesome",
           "reporterOptions": {
              "reportDir": "cypress/results",
              "overwrite": false,
              "html": false,
              "json": true
           }
        }
  5. Now run the command
     npx cypress run
  6. results, screenshots and videos folder will be created for the reports


**JUnit Reporting**
  1. npm install cypress-junit-reporter --save-dev
  2. add the below code in the cypress.json file
     "reporter": "junit",
     "reporterOptions": {
      "mochaFile": "cypress/results/results.xml",
      "toConsole": true
     }
  3. npx cypress run --reporter junit
  4. results folder will be created with results.xml file, videos folder will also get created, screenshots folder will be created
