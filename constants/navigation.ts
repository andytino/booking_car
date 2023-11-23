import type { VerticalNavigationLink } from "@nuxt/ui/dist/runtime/types/vertical-navigation";
import { ROUTES } from "./routes";
import { ROLES } from "~/types/roles";

interface VerticalNavigationLinkExtend extends VerticalNavigationLink {
  role: ROLES[];
}

export const ADMIN_NAVIGATION = (): VerticalNavigationLinkExtend[] => {
  return [
    {
      label: "TRANG CHỦ",
      to: ROUTES.adminDashboard,
      icon: "dashboard",
      role: [ROLES.admin],
    },
    {
      label: "ADMIN - TỔNG ĐÀI VIÊN",
      to: ROUTES.adminAccount,
      icon: "profile",
      role: [ROLES.admin],
    },
    {
      label: "TÀI XẾ",
      to: ROUTES.adminDriver,
      icon: "driver",
      role: [ROLES.admin],
    },
    {
      label: "KHÁCH HÀNG",
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
