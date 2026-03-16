import type { ReactNode } from 'react';
import Chip from '@mui/material/Chip';
import type { Employee } from '../../types/Employee';

export interface EmployeeColumn {
  key: string;
  label: string;
  renderCell: (employee: Employee) => ReactNode;
}

export const EMPLOYEE_TABLE_ROWS_PER_PAGE = 10;

export const getPaginatedEmployees = (
  employees: Employee[],
  page: number,
  rowsPerPage: number
) => {
  const start = page * rowsPerPage;
  const end = start + rowsPerPage;

  return employees.slice(start, end);
};

export const employeeColumns: EmployeeColumn[] = [
  {
    key: 'name',
    label: 'Name',
    renderCell: (employee) => `${employee.firstName} ${employee.lastName}`,
  },
  {
    key: 'email',
    label: 'Email',
    renderCell: (employee) => employee.email,
  },
  {
    key: 'department',
    label: 'Department',
    renderCell: (employee) => employee.department,
  },
  {
    key: 'position',
    label: 'Position',
    renderCell: (employee) => employee.position,
  },
  {
    key: 'status',
    label: 'Status',
    renderCell: (employee) => (
      <Chip
        label={employee.status}
        color={employee.status === 'Active' ? 'success' : 'default'}
        size="small"
        variant={employee.status === 'Active' ? 'filled' : 'outlined'}
      />
    ),
  },
];