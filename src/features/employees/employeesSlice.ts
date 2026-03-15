import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import employeesData from '../../data/employees.json';
import type { Employee } from '../../types/Employee';

interface EmployeesState {
  employees: Employee[];
  searchTerm: string;
  selectedDepartment: string;
}

export const initialState: EmployeesState = {
  employees: employeesData as Employee[],
  searchTerm: '',
  selectedDepartment: 'All',
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSelectedDepartment: (state, action: PayloadAction<string>) => {
      state.selectedDepartment = action.payload;
    },
  },
});

export const { setSearchTerm, setSelectedDepartment } = employeesSlice.actions;
export default employeesSlice.reducer;