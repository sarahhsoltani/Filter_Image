import { Container,Box,Grid} from "@mui/material"
import ImageField from "./components/imageField"
import FilterTabs from "./components/filterTabs"
//import FilterInsta from "./components/filterInsta"
import CustomFilter from "./components/customFilter"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Container sx={{marginTop:'7rem',marginBottom:'4rem'}}>
     
      <Box sx={{textAlign:'center',marginBottom:'3rem'}}>
        <h1>Image Filter</h1>
      
      </Box>
      <Grid container spacing={10} >
       
        <ImageField/>
        <Grid item xs={12} md={5}>
        <FilterTabs/>
        {/* <FilterInsta/> */}
        <CustomFilter/>
        </Grid>
      </Grid>
      </Container>
  
    </>
  )
}

export default App
