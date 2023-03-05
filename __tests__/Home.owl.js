import {press, takeScreenshot} from 'react-native-owl';

jest.setTimeout(30000);

describe('Home.tsx', () => {
  it('takes a screenshot of the first screen', async () => {
    const screen = await takeScreenshot('homescreen');
    expect(screen).toMatchBaseline();
  });

  // it('presses a button, then takes a screenshot', async () => {
  //   await press('openGallery');

  //   const screen = await takeScreenshot('afterButtonPress');

  //   expect(screen).toMatchBaseline();
  // });
});
