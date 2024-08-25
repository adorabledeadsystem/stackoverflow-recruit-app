import type { Preview } from "@storybook/react";
import "../styles/variables/colors.scss"
import "../styles/normalize.scss"
import "../styles/_sass.scss"


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
