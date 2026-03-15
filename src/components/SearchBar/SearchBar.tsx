import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../features/employees/employeesSlice';
import { selectSearchTerm } from '../../features/employees/employeesSelectors';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <TextField
      label="Search by name or email"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(event) => dispatch(setSearchTerm(event.target.value))}
    />
  );
};

export default SearchBar;