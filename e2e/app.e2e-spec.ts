import { DevLoggerClientPage } from './app.po';

describe('dev-logger-client App', function() {
  let page: DevLoggerClientPage;

  beforeEach(() => {
    page = new DevLoggerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
