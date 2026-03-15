import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectEmployees } from '../../features/employees/employeesSelectors';

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const employees = useSelector(selectEmployees);

  const employee = useMemo(
    () => employees.find((item) => item.id === Number(id)),
    [employees, id]
  );

  if (!employee) {
    return (
      <Box sx={{ maxWidth: 900, margin: '0 auto', padding: 4 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Employee not found
        </Typography>

        <Button variant="contained" onClick={() => navigate('/')}>
          Back to employees
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, margin: '0 auto', padding: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        sx={{ marginBottom: 3 }}
        onClick={() => navigate('/')}
      >
        Back
      </Button>

      <Card>
        <CardContent sx={{ padding: 4 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            spacing={2}
            sx={{ marginBottom: 3 }}
          >
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {employee.firstName} {employee.lastName}
              </Typography>
              <Typography color="text.secondary">
                {employee.position}
              </Typography>
            </Box>

            <Chip
              label={employee.status}
              color={employee.status === 'Active' ? 'success' : 'default'}
              variant={employee.status === 'Active' ? 'filled' : 'outlined'}
            />
          </Stack>

          <Divider sx={{ marginBottom: 3 }} />

          <Stack spacing={2}>
            <Typography>
              <strong>Email:</strong> {employee.email}
            </Typography>
            <Typography>
              <strong>Department:</strong> {employee.department}
            </Typography>
            <Typography>
              <strong>Hire Date:</strong> {employee.hireDate}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeeDetailsPage;