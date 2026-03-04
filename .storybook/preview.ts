import type { Preview } from "@storybook/react";
import React from "react";
import "./preview.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story) =>
      React.createElement(
        "div",
        { className: "story-wrapper" },
        React.createElement(Story)
      ),
  ],
};

export default preview;
