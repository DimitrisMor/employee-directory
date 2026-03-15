import { useEffect, useMemo, useState } from 'react';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import type { Employee } from '../../types/Employee';
import './EmployeeTable.scss';

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(0);
  }, [employees]);

  const paginatedEmployees = useMemo(() => {
    const start = page * rowsPerPage;
    return employees.slice(start, start + rowsPerPage);
  }, [employees, page]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  if (!employees.length) {
    return (
      <Paper sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          No employees found
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Try changing the search term or selected department.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Department</strong></TableCell>
              <TableCell><strong>Position</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedEmployees.map((employee) => (
              <TableRow
                key={employee.id}
                hover
                className="employee-table-row"
                onClick={() => navigate(`/employee/${employee.id}`)}
              >
                <TableCell>
                  {employee.firstName} {employee.lastName}
                </TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>
                  <Chip
                    label={employee.status}
                    color={employee.status === 'Active' ? 'success' : 'default'}
                    size="small"
                    variant={employee.status === 'Active' ? 'filled' : 'outlined'}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={employees.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10]}
      />
    </Paper>
  );
};

export default EmployeeTable;