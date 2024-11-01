export enum RoleName {
  "admin" = "admin",
  "regular" = "regular",
}
export interface Employee {
  username: any;
  email: any;
  password?: string;
  locationId: any;
  organizationId: any;
  partnerId: any;
  payrollId: any;
  employerPayrollId: any;
  accessRole: any;
  role?: { name: RoleName };
}

export interface FormattedEmployee {
  id: string;
  name: string;
  payrollId: string;
  picture: string;
}

export interface Location {
  id?: string;
  name: string;
  address: string;
}
