import { HomeCtrlAppPage } from './app.po';

describe('home-ctrl-app App', function() {
  let page: HomeCtrlAppPage;

  beforeEach(() => {
    page = new HomeCtrlAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
