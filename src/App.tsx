import { Route, Routes } from 'react-router-dom';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage/EmployeeDetailsPage';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeesPage />} />
      <Route path="/employee/:id" element={<EmployeeDetailsPage />} />
    </Routes>
  );
}

export default App;