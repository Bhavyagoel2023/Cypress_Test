export class LoginPage {

    loginPage_username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginPage_password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginPage_loginbutton = '.oxd-button';
    page_title = '.oxd-topbar-header-breadcrumb > .oxd-text';

    openUrl(url: string){
    cy.visit(url)
    }

    enter_username(username: string){
    cy.get(this.loginPage_username).type(username)
    }

    enter_password(password: string){
    cy.get(this.loginPage_password).type(password)
    }

    click_login(){
    cy.get(this.loginPage_password).click()
    }

    headingText_assert(pageTitle: string){
        // cy.get(this.page_title).then(($value) => {
        //     const txt = $value.text()
        // })
        cy.get(this.page_title).should('have.text', pageTitle);
    }
}