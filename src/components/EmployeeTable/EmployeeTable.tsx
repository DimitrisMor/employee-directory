import { useEffect, useMemo, useState } from 'react';
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
import {
  EMPLOYEE_TABLE_ROWS_PER_PAGE,
  getPaginatedEmployees,
  employeeColumns
} from './employee-table.helpers';
import './EmployeeTable.scss';

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(0);
  }, [employees]);

  const paginatedEmployees = useMemo(() => {
    return getPaginatedEmployees(
      employees,
      page,
      EMPLOYEE_TABLE_ROWS_PER_PAGE
    );
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
              {employeeColumns.map((column) => (
                <TableCell key={column.key}>
                  <strong>{column.label}</strong>
                </TableCell>
              ))}
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
                {employeeColumns.map((column) => (
                  <TableCell key={`${employee.id}-${column.key}`}>
                    {column.renderCell(employee)}
                  </TableCell>
                ))}
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
        rowsPerPage={EMPLOYEE_TABLE_ROWS_PER_PAGE}
        rowsPerPageOptions={[EMPLOYEE_TABLE_ROWS_PER_PAGE]}
      />
    </Paper>
  );
};

export default EmployeeTable;