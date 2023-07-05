import { Container,Box,Grid} from "@mui/material"
import ImageField from "./components/imageField"
import FilterTabs from "./components/filterTabs"
import FilterInsta from "./components/filterInsta"
import CustomFilter from "./components/customFilter"
import { useState,createContext } from "react"
export const FilterContext=createContext()
function App() {
  const [tabFilter,setTabFilter]=useState('instaFilter')
  const [filterClass, setFilterClass] = useState("");
  //const [count, setCount] = useState(0)

const [customFilter, setCustomFilter] = useState({
  contrast: 100,
  brightness: 100,
  saturate: 100,
  sepia: 0,
  gray: 0
});
const value={
  tabFilter,
  setTabFilter,
  filterClass,
  setFilterClass,
  customFilter,
  setCustomFilter
}
console.log('customFilter', customFilter)
  return (
    <FilterContext.Provider value={value}>
      <Container sx={{marginTop:'7rem',marginBottom:'4rem'}}>
     
      <Box sx={{textAlign:'center',marginBottom:'3rem'}}>
        <h1>Image Filter</h1>
      
      </Box>
      <Grid container spacing={10} >
       
        <ImageField/>
        <Grid item xs={12} md={5}>
        <FilterTabs/>
        {tabFilter==='instaFilter'?<FilterInsta/>:<CustomFilter/> }
        {/* <FilterInsta/> */}
        
        </Grid>
      </Grid>
      </Container>
  
    </FilterContext.Provider>
  )
}

export default App
