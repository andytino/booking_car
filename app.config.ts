export default defineAppConfig({
  ui: {
    secondary: "secondary",
    "yellow-50": "yellow-50",
    "orange-50": "orange-50",
    "blue-50": "blue-50",
    "gray-50": "gray-50",
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
    input: {
      color: {
        green: {
          solid: "border-1 border-solid border-secondary",
        },
      },
    },
  },
});
