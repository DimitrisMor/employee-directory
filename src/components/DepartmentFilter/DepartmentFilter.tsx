import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDepartment } from '../../features/employees/employeesSlice';
import {
  selectDepartment,
  selectEmployees,
} from '../../features/employees/employeesSelectors';

const DepartmentFilter = () => {
  const dispatch = useDispatch();
  const selectedDepartment = useSelector(selectDepartment);
  const employees = useSelector(selectEmployees);

  const departments = ['All', ...new Set(employees.map((employee) => employee.department))];

  return (
    <FormControl fullWidth>
      <InputLabel id="department-select-label">Department</InputLabel>
      <Select
        labelId="department-select-label"
        value={selectedDepartment}
        label="Department"
        onChange={(event) => dispatch(setSelectedDepartment(event.target.value))}
      >
        {departments.map((department) => (
          <MenuItem key={department} value={department}>
            {department}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DepartmentFilter;