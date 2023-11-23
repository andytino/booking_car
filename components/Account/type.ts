import type { ROLES } from "~/types/roles";

export enum STATUS {
  INACTIVE = 0,
  ACTIVE,
}

export interface IFormAccountState {
  email: string;
  password?: string;
  fullName: string;
  role: ROLES;
  isActive: STATUS;
  phoneNumber: string;
}
