import { WuHuFrontendPage } from './app.po';

describe('wu-hu-frontend App', function() {
  let page: WuHuFrontendPage;

  beforeEach(() => {
    page = new WuHuFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
