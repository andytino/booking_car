export const ROUTES = {
  main: "/",
  home: "/home",

  // admin
  adminSignIn: "/admin/signin",
  adminForgotPassword: "/admin/forgotPassword",
  adminDashboard: "/admin/dashboard",
  adminAccount: "/admin/account",
  adminCreateAccount: "/admin/account/create",
  adminEditAccount: (id?: string | string[]) => `/admin/account/edit/${id}`,
  adminDriver: "/admin/driver",
  adminCreateDriver: "/admin/driver/create",
  adminEditDriver: (id?: string | string[]) => `/admin/driver/edit/${id}`,
  adminCustomer: "/admin/customer",
  adminCreateCustomer: "/admin/customer/create",
  adminEditCustomer: (id?: string | string[]) => `/admin/customer/edit/${id}`,
  adminBooking: "/admin/booking",

  // user
  userSignIn: "/user/signin",
  userSingUp: "/user/signup",
  userForgotPassword: "/user/forgotPassword",
  userHome: "/user",

  // driver
  driverSignIn: "/driver/signin",
  driverForgotPassword: "/driver/forgotPassword",
  driverHome: "/driver",
};
