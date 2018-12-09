import { TheoryPage } from './app.po';

describe('theory App', () => {
  let page: TheoryPage;

  beforeEach(() => {
    page = new TheoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
