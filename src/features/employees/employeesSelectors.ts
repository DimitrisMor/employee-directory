import type { RootState } from '../../store/store';

export const selectEmployees = (state: RootState) => state.employees.employees;
export const selectSearchTerm = (state: RootState) => state.employees.searchTerm;
export const selectDepartment = (state: RootState) => state.employees.selectedDepartment;

export const selectFilteredEmployees = (state: RootState) => {
  const { employees, searchTerm, selectedDepartment } = state.employees;

  return employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();

    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === 'All' ||
      employee.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });
};