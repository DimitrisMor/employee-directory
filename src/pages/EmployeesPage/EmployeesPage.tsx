import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import DepartmentFilter from '../../components/DepartmentFilter/DepartmentFilter';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import SearchBar from '../../components/SearchBar/SearchBar';
import { selectFilteredEmployees } from '../../features/employees/employeesSelectors';

const EmployeesPage = () => {
  const employees = useSelector(selectFilteredEmployees);

  return (
    <Box sx={{ maxWidth: 1100, margin: '0 auto', padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 1, fontWeight: 700 }}>
        Employee Directory
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 3 }}>
        Browse employees, search by name or email, and filter by department.
      </Typography>

      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 2,
            marginBottom: 2,
          }}
        >
          <SearchBar />
          <DepartmentFilter />
        </Box>

        <Typography variant="body2" color="text.secondary">
          {employees.length} employee{employees.length === 1 ? '' : 's'} found
        </Typography>
      </Paper>

      <EmployeeTable employees={employees} />
    </Box>
  );
};

export default EmployeesPage;