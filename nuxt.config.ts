// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport:
        "viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1",
      meta: [
        {
          name: "mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
          media: "(prefers-color-scheme: light)",
        },
        {
          name: "msapplication-TileColor",
          content: "#000000",
        },
      ],
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/ui", "@nuxtjs/supabase", "@vite-pwa/nuxt", "@pinia/nuxt"],
  supabase: {
    redirect: false,
  },
  pwa: {
    manifest: {
      name: "Booking_Car",
      short_name: "Booking Car",
      description: "Đồ án môn nhập môn lập trình",
      background_color: "#FFFFFF",
      theme_color: "#FFFFFF",
      display: "standalone",
      orientation: "any",
      icons: [
        {
          src: "icons/64-booking.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/114-booking.png",
          sizes: "114x114",
          type: "image/png",
        },
        {
          src: "icons/192-booking.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/512-booking.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    // workbox: {
    //   globPatterns: ["**/*.{js,css}"],
    //   navigateFallback: null,
    //   cleanupOutdatedCaches: true,
    // },
    // devOptions: {
    //   enabled: true,
    //   type: "module",
    // },
  },
  // devtools: { enabled: true },
  css: ["~/assets/css/styles.scss", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ui: {
    global: true,
    icons: [],
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  devServer: {
    port: 8000,
  },
  components: [
    {
      path: "~/components",
    },
  ],
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  runtimeConfig: {
    url: process.env.URL,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
  vite: {
    plugins: [svgLoader({ defaultImport: "component" })],
  },
});
