
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage }  from "@pages/LoginPage";


Given("user is on the login page", () => {
  loginPage.navigateToHomeUrl();
  });
  

When("user enters {string} and {string} and clicks on signin button",(username, password) => {
      loginPage.validateLoginFunctionality(username, password);
    });

Then("user should logged successfully", () => {
  loginPage.userProfilePage();
    });

Then("user should checks loggedin cookie set to true", () => {
      loginPage.validateCookieTrue();
        });

Then("user should see a {string}", (errorMessage) => {
    loginPage.validateErrorMessage(errorMessage);
 });

 Then("user should logout successfully", () => {
  loginPage.validateLogoutFunctionality();
    });