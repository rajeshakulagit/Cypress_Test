
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//import { logoutPage } from "@pages/LogoutPage";

Given("user should navigate to user profile page",() => {
    logoutPage.navigateToHomeUrl();
  });

Then("user clicks on Logout button",() => {
    logoutPage.navigateToHomeUrl();
  });