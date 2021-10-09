import initStoryshots from '@storybook/addon-storyshots';

//  Created a global mock to avoid the error for the tests:
//  --- TypeError: Cannot read property 'STORYBOOK_HOOKS_CONTEXT' of undefined ---
//  https://github.com/storybookjs/storybook/issues/8083#issuecomment-533184737
jest.mock('global', () => Object.assign(global, { window: { STORYBOOK_HOOKS_CONTEXT: '' } }));

initStoryshots();
