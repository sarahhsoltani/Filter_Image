import {useState} from "react"
import { Box, Tab, Tabs} from "@mui/material"
 const FilterTabs = () => {
  const [tabFilter,setTabFilter]=useState('instaFilter')

  const handleChange=(e,newValue)=>{
    setTabFilter(newValue)
  }
  return (
    <Box  xs={{marginBottom:'2rem' }} >
      <Tabs   value={tabFilter}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          >
        <Tab value="instaFilter" label="InstaGram Filter"/>
        
        <Tab value="CustomFilter" label="Custom Filter"/>
      </Tabs>
    </Box>
  )
}
export default FilterTabs