export type EmployeeStatus = 'Active' | 'Inactive';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  status: EmployeeStatus;
  position: string;
  hireDate: string;
}