import { loginPage } from "@pages/LoginPage";

class RegistrationPage {

elements = {
    registrationButton: (ms) => cy.get('a[id="registerLink"]', { timeout: ms }),
    enterYourEmailRegFormTextBox: (ms) => cy.get("input[id=reg-form-_]", { timeout: ms }),
    enterYourFirstNameRegFormTextBox: (ms) => cy.get("input[id=reg-form-firstName]", { timeout: ms }),
    enterYourLastNameRegFormTextBox: (ms) => cy.get("input[id=reg-form-lastName]", { timeout: ms }),
    selectYourBirthYearDropDownField: (ms) => cy.get("select[id='reg-form-birthYear']", { timeout: ms }),
    enterYourPasswordRegFormTextBox: (ms) => cy.get("input[id=reg-form-password]", { timeout: ms }),
    checkBoxRegForm: (ms) => cy.get("input[id=form-receive-offer]", { timeout: ms }),
    createMyAccountButtonRegForm: (ms) => cy.get("button[name='register-form-submit']", { timeout: ms }),
    optoutPolicyButton: (ms) => cy.get('div[class*="opt-out-policy-label"] [fill-rule="evenodd"]', { timeout: ms }),
    invalidValueErrorMessage: (ms) => cy.get('p[class="sc-1letmz5-0 jJwcsH csr-error-message"]', { timeout: ms }),
    existingEmailWarningMessage: (ms) => cy.get('p[class="sc-1097j05-0 gOmyEF"]', { timeout: ms } )
};

navigateToRegistrationPage() {
  cy.wait(3000);
    loginPage.getIframe().find('button[title="AGREE"]').should("be.visible").click({ force: true });
    cy.contains('Log in / Register').should("be.visible").click({ force: true });
    this.elements.registrationButton().first().should("be.visible").contains('Register').click({ force: true });
}

enterRegistrationDetails(emailid, firstname, lastname, yearofbirth, password) {
    const email = Math.random().toString(36).substring(2,7);
    console.log(email);
    const emailId = email+emailid;
    this.elements.enterYourEmailRegFormTextBox().type(emailId);
    this.elements.enterYourFirstNameRegFormTextBox().type(firstname);
    this.elements.enterYourLastNameRegFormTextBox().type(lastname);
    this.elements.selectYourBirthYearDropDownField().select(yearofbirth);
    this.elements.enterYourPasswordRegFormTextBox().type(email+password);
  }

offerCheckBox() {
  this.elements.checkBoxRegForm().click({ force: true });
  }

optoutPolicy() {
  this.elements.optoutPolicyButton().click({ force: true });
  cy.wait(3000);
  this.elements.optoutPolicyButton().click({ force: true });
  }

createAccount() {
  this.elements.createMyAccountButtonRegForm().click({ force: true });
  cy.wait(5000);
  }

validateThankYouPage(emailId) {
  loginPage.getPopupIframe().find('button[class="pn-template__close unbutton"]').should("be.visible").click({ force: true });
  cy.contains('Success! A confirmation email will be sent to ' +emailId).should("be.visible");
  }

invalidEmail(emailId) {
   this.elements.enterYourEmailRegFormTextBox().type('gsdfgsdgfgmail.com');
   cy.wait(2000);
  }

invalidErrorMessage(ErrorMessage, selection) {

 switch (selection) {
      case "EmailId":
        this.elements.invalidValueErrorMessage().first().should("be.visible").contains(ErrorMessage);
        break;
      case "FirstName and LastName":
          this.elements.invalidValueErrorMessage().first().should("be.visible").contains(ErrorMessage);
          this.elements.invalidValueErrorMessage().last().should("be.visible").contains(ErrorMessage);
          break;
      case "Password":
        this.elements.invalidValueErrorMessage().first().should("be.visible").contains(ErrorMessage);
        break;
      case "ExistingEmailId":
          cy.get('div input[placeholder="Enter your email"]').first().parents().first().siblings('p').first().contains(ErrorMessage);
          break;
      }
  }

specialCharacter(firstname, lastname) {
  this.elements.enterYourFirstNameRegFormTextBox().type(firstname);
  this.elements.enterYourLastNameRegFormTextBox().type(lastname);
}

invalidPassword(Password) {
  this.elements.enterYourPasswordRegFormTextBox().type(Password);
  cy.wait(2000);
  }

existingEmail(Emailid) {
   this.elements.enterYourEmailRegFormTextBox().type(Emailid);
   cy.wait(5000);
  }

}

export const registrationPage = new RegistrationPage();