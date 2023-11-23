import type { VerticalNavigationLink } from "@nuxt/ui/dist/runtime/types/vertical-navigation";
import { ROUTES } from "./routes";
import { ROLES } from "~/types/roles";

interface VerticalNavigationLinkExtend extends VerticalNavigationLink {
  role: ROLES[];
}

export const ADMIN_NAVIGATION = (): VerticalNavigationLinkExtend[] => {
  return [
    {
      label: "DASHBOARD",
      to: ROUTES.adminDashboard,
      icon: "dashboard",
      role: [ROLES.admin],
    },
    {
      label: "ACCOUNT",
      to: ROUTES.adminAccount,
      icon: "profile",
      role: [ROLES.admin],
    },
    {
      label: "DRIVER",
      to: ROUTES.adminDriver,
      icon: "driver",
      role: [ROLES.admin],
    },
    {
      label: "CUSTOMER",
      to: ROUTES.adminCustomer,
      icon: "user",
      role: [ROLES.admin],
    },
    {
      label: "BOOKING",
      to: ROUTES.adminBooking,
      icon: "phone",
      role: [ROLES.staff],
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
