/// <reference types="cypress"/>

import {LoginPage} from "../pages/login_page"
// it("Google search", function() {
//     cy.visit('https://www.google.com/')

//     // cy.get('.gLFyf').type('Automation step by step {enter}')


//     //wait
//     // cy.wait(4000)
//     // cy.contains('Videos').click()

//     //cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').click()
//     //Default 4 sec timeout

//     //Custom timeout
//     //cy.get('.gLFy', {timeout: 6000}).type('Automation step by step {enter}')

// })


const loginPage = new LoginPage();


it('Login Orange HRM', function() {
    
    loginPage.openUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.enter_username("Admin");
    loginPage.enter_password("admin123");
    loginPage.click_login();
    loginPage.headingText_assert('Dashboard');

})