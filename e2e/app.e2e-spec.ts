import { FirestorecrudPage } from './app.po';

describe('firestorecrud App', function() {
  let page: FirestorecrudPage;

  beforeEach(() => {
    page = new FirestorecrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
