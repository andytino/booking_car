export default defineAppConfig({
  ui: {
    primary: "red",
    gray: "cool",
    strategy: "override",
    button: {
      default: {
        color: "green",
      },
      color: {
        white: {
          solid: "text-black bg-white dark:bg-gray-900",
        },
        black: {
          solid: "text-white bg-black dark:bg-gray-900",
        },
      },
    },
  },
});
