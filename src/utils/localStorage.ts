export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('employeesFilters');
    if (!serializedState) return undefined;

    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

export const saveState = (state: unknown) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('employeesFilters', serializedState);
  } catch {
    // ignore write errors
  }
};