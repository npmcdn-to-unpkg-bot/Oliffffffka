import { OliwkaPage } from './app.po';

describe('oliwka App', function() {
  let page: OliwkaPage;

  beforeEach(() => {
    page = new OliwkaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
