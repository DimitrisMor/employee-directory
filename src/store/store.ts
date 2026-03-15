import { configureStore } from '@reduxjs/toolkit';
import employeesReducer, { initialState } from '../features/employees/employeesSlice';
import { loadState, saveState } from '../utils/localStorage';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  preloadedState: {
    employees: {
      ...initialState,
      ...persistedState,
    },
  },
});

store.subscribe(() => {
  const state = store.getState();

  saveState({
    searchTerm: state.employees.searchTerm,
    selectedDepartment: state.employees.selectedDepartment,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;