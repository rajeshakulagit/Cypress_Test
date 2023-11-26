
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//import { registrationPage } from "@pages/RegistrationPage";

When("user clicks on login register link to navigate on registration page",() => {
    registrationPage.navigateToRegistrationPage();
    });

Then("user enters {string}, {string}, {string}, {string} and {string}",(emailid, firstname, lastname, yearofbirth, password) => {
    registrationPage.enterRegistrationDetails(emailid, firstname, lastname, yearofbirth, password);
    });

Then("user clicks you would like to receive offers check box",() => {
    registrationPage.offerCheckBox();
    });

Then("user open and close opt-out policy",() => {
    registrationPage.optoutPolicy();
    });
      
Then("user clicks on create my account button",() => {
    registrationPage.createAccount();
    });
        
Then("user is navigated to thank you page",() => {
    registrationPage.validateThankYouPage();
    });

Then("user should enter invalid email {string}",() => {
    registrationPage.invalidEmail();
    });


Then("user should see {string} for invalid {string}",(ErrorMessage, selection) => {
    registrationPage.invalidErrorMessage(ErrorMessage, selection);
    });


Then("user should enter special characters in {string} and {string}",(FirstName, LastName) => {
    registrationPage.specialCharacter(FirstName, LastName);
    });

Then("user should see {string} for invalid FirstName and LastName",(ErrorMessage) => {
    registrationPage.invalidErrorMessage(ErrorMessage);
    });


Then("user enters invalid password {string}",(Password) => {
    registrationPage.invalidPassword(Password);
    });

Then("user should enter existing emailid {string}",(ExistingEmailId) => {
    registrationPage.existingEmail(ExistingEmailId);
    });

