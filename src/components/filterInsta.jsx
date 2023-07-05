import { useContext } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { filterValues } from "../utils";
import { FilterContext } from "../App";
export default function FilterInsta() {
  const {filterClass, setFilterClass} = useContext(FilterContext);
  const handleChange = (e) => setFilterClass(e.target.value);

  return (
    <div>
      <Box sx={{ marginTop: "2rem" }}>
        <FormControl fullWidth>
          <InputLabel>Filter </InputLabel>
          <Select onChange={handleChange} value={filterClass} label="filter">
            {filterValues.map((filter) => (
              <MenuItem value={filter.class} key={filter.class}>
                {filter.name}
              </MenuItem>
            ))}

            {/* <MenuItem value="1970">1970</MenuItem>
            <MenuItem value="two">menu two</MenuItem>
            <MenuItem value="three">Twenty three</MenuItem> */}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
