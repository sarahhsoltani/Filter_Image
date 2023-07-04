import { Box,Slider } from "@mui/material";
import { useState } from "react";

export const SliderFiels = ({ slide }) => {
  const { label, defaultValue, field } = slide;
  const [value, setValue] = useState(defaultValue);
  const handleSliderValue=(e)=>setValue(e.target.value)
  return (
    <Box sx={{display:'flex',alignItems:"center",gap:"1rem",marginBottom:"1rem"}}>
      <Box sx={{minWidth:"6rem"}}>{label}</Box>
      <Slider size="small" value={value} valueLabelDisplay="auto" 
      onChange={handleSliderValue}
      max={200}
      />
    </Box>
  );
};
