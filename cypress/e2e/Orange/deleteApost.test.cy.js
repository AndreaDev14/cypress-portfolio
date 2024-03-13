import { login } from "../../support/pages/Orange/Login.Page";
import { post } from '../../support/pages/Orange/Post.Page';
const { username, password } = Cypress.env('AdminUser');
const {loginPage, viewBuzz} = Cypress.env('endpoints')
import { removeLogs } from "../../support/helper/removeLogs";
removeLogs();

describe('GX3-2493 | [Automation] OrangeHRM | Buzz | Delete a post', () => {
	beforeEach(() => {
		cy.session('login', () => {
			cy.visit(loginPage);
			cy.url().should('contain', 'orangehrmlive');
			login.validLogin(username, password);
		});
		cy.visit(viewBuzz);
		cy.url().should('contain', 'viewBuzz');
	});

	it('GX3-2493 | TC1: Validate delete a post', () => {
		post.selectRandomPostAndClickDeleteLink();

		post.verifyPopUpIsShown();
		post.verifyDeleteButtonIsVisible();
		post.verifyCancelButtonIsVisible();
	});

	it('GX3-2493 | TC2: Validate delete a post', () => {
		post.selectRandomPostAndClickDeleteLink();

		post.verifyPopUpIsShown();
		post.clickDeleteButton();
		post.verifySuccessMessageIsDisplayed('Successfully Deleted');
		post.verifyPostNotVisible();
	});

	it('GX3-2493 | TC3: Validate cancel deleting a post', () => {
		post.selectRandomPostAndClickDeleteLink();
		post.clickCancelButton();
		post.verifyPostIsVisible();
	});
});
