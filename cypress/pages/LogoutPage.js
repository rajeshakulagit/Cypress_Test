class LogoutPage {
  elements = {
    enterYourEmailRegFormTextBox: (ms) => cy.get("input[id=reg-form-_]", { timeout: ms }),

  };

}

export const logoutPage = new LogoutPage();