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
      method: "configure",
      includeName: true,
      order: ["Design System", ["Atoms", "Molecules", "Organisms"], "Pages"],
    },
  },
};
