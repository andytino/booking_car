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
          outline:
            "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-secondary dark:ring-secondary focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
        },
      },
    },
    notifications: {
      // Show toasts at the top right of the screen
      position: "top-0 bottom-auto right-0",
    },
  },
});
