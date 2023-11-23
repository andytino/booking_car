export enum STATUS {
  INACTIVE = 0,
  ACTIVE,
}

export interface IFormDriverState {
  email: string;
  password?: string;
  fullName: string;
  isActive: STATUS;
  phoneNumber: string;
  citizenId: string;
}
