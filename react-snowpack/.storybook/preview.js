import { Provider } from 'react-redux';
import { store } from '@store';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Docs',
        'Components',
        'Containers',
        'Pages',
      ]
    }
  }
}

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  )
]