import type { VerticalNavigationLink } from "@nuxt/ui/dist/runtime/types/vertical-navigation";
import { ROUTES } from "./routes";

export const ADMIN_NAVIGATION = (): VerticalNavigationLink[] => {
  return [
    {
      label: "DASHBOARD",
      to: ROUTES.adminDashboard,
      icon: "dashboard",
    },
    {
      label: "ACCOUNT",
      to: ROUTES.adminAccount,
      icon: "profile",
    },
    {
      label: "DRIVER",
      to: ROUTES.adminDriver,
      icon: "driver",
    },
  ];
};
export const USER_NAVIGATION = (): VerticalNavigationLink[] => {
  return [
    {
      label: "HOME",
      to: ROUTES.home,
    },
  ];
};