class LoginPage {
  elements = {
    enterYourEmailTextBox: (ms) => cy.get("input[id=login-form-email]", { timeout: ms }),
    enterYourPasswordTextBox: (ms) => cy.get("input[type=password]", { timeout: ms }),
    submitButton: (ms) => cy.get("button[name='submitBtn'] span", { timeout: ms }),
    errorMessage: () => cy.get('div[class="form-errors"] p'),
    agreeButton: () => cy.get('button[title="AGREE"]'),
    loggedInUser: () => cy.get('a[amp-access="indy.loggedIn"] span div'),
    logoutButton: () => cy.get('a[href="/user/logout"]')
  };

navigateToHomeUrl(){
    cy.wait(3000);
    cy.visit("/");
    cy.viewport(1920, 1080);
  }

getIframe=() => {
  return cy.get("iframe[src*='https://cmpv2.independent.co.uk']")
  .its('0.contentDocument.body').should('be.visible').then(cy.wrap);
}

validateLoginFunctionality(username, password){
    cy.wait(3000);
    this.getIframe().find('button[title="AGREE"]').should("be.visible").click({ force: true });
    cy.contains('Log in / Register').should("be.visible").click({ force: true });
    this.elements.enterYourEmailTextBox(10000).first().should("be.visible").type(username);
    this.elements.enterYourPasswordTextBox(5000).first().should("be.visible").type(password);
    cy.wait(3000);
    cy.contains('Submit').should("be.visible").click({ force: true });
    cy.wait(6000);
  }

userProfilePage(){
    this.elements.loggedInUser().first().should("be.visible").contains('A. QA Test');
  }

validateCookieTrue(){
    cy.getCookie('loggedIn').should('have.property', 'value', 'true');
  }

validateErrorMessage(errorMessage){
    this.elements.errorMessage().should("be.visible").contains(errorMessage);
  }

getPopupIframe=() => {
    return cy.get("iframe[id^='offer']")
    .its('0.contentDocument.body').should('be.visible').then(cy.wrap);
}

validateLogoutFunctionality(){
    this.elements.loggedInUser().first().should("be.visible").contains('A. QA Test').click({ force: true });
    cy.wait(3000);
    this.getPopupIframe().find('button[class="pn-template__close unbutton"]').should("be.visible").click({ force: true });
    this.elements.logoutButton().first().should("be.visible").contains('Logout').click({ force: true });
    cy.wait(5000);
    cy.contains('Log in / Register').should("be.visible");
  }
  
}
export const loginPage = new LoginPage();