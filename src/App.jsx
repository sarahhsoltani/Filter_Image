import { Container,Box,Grid} from "@mui/material"
import ImageField from "../components/imageField"
import FilterTabs from "../components/filterTabs"
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Container sx={{marginTop:'4rem',marginBottom:'4rem'}}>
     
      <Box sx={{textAlign:'center',marginBottom:'7 rem'}}>
        <h1>Image Filter</h1>
      
      </Box>
      <Grid container spacing={10} >
       
        <ImageField/>
        <FilterTabs/>
      </Grid>
      </Container>
  
    </>
  )
}

export default App
