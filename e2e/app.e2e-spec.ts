import { WebstoreFrontendPage } from './app.po';

describe('webstore-frontend App', () => {
  let page: WebstoreFrontendPage;

  beforeEach(() => {
    page = new WebstoreFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
