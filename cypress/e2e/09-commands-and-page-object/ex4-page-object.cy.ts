import { User } from '../../../src/model/user.ts';
import homePage from '../../pages/homePage2.ts';

const mockList: User[] = [
  { id: 1, name: "A", username: "Username A" },
  { id: 2, name: "B", username: "Username B" },
  { id: 3, name: "C", username: "Username C" },
  { id: 4, name: "D", username: "Username D" },
]

describe("HomePage Layout", () => {

  beforeEach(() => {
    homePage.visit();
  })

  it('page title is shown', () => {
    homePage.displayTitle()
  });

  it('page title is a main title', () => {
    homePage.titleIsStyled()
  });
});

describe("HomePage Content", () => {

  beforeEach(() => {
    cy.intercept(
      'https://jsonplaceholder.typicode.com/users',
      { method: 'GET'},
      mockList
    )

    homePage.visit()
    cy.get('[data-testid="userList"]').as('list')
  })

  it(`should display exactly ${mockList.length} elements in the page`, () => {
    homePage.displayList<User>(mockList)
  });

  it(`first element should display its own name`, () => {
    homePage.displayName('A')
  });

});
