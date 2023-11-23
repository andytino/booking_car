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
        green: {
          solid:
            "shadow-sm ring-inset ring-secondary dark:ring-gray-700 text-white dark:text-white bg-secondary hover:bg-secondary disabled:bg-secondary/80 dark:bg-secondary dark:hover:bg-secondary dark:disabled:bg-gray-900 focus-visible:ring-secondary dark:focus-visible:ring-secondary",
          outline:
            "shadow-sm ring-inset ring-secondary dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
          ghost:
            "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
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
