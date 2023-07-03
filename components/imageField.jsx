import { Box,Grid} from "@mui/material"
import { styled } from '@mui/material/styles';
import { useRef, useState } from "react";
const StyleBox=styled(Box)({
    background:'#ddd',
    minHeight:'20rem',
    maxHeight:"1vh",
    marginBottom:"1rem",
    borderRadius:"5px",
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
    cursor:"pointer"
})
const ImageField = () => {
    const uploadInputRed=useRef(null);
    const [imageFile,setImageFile]=useState(null);
    const handleChangeInput=(e)=>{
         setImageFile(URL.createObjectURL(e.target.files[0]))
        console.log('e.tagrget.files', e.target.files[0])
    }
    const renderImage=()=>{
        <div>
            <img src={imageFile} alt=""/>
        </div>
    }
  return (
    <Grid item xs={12} md={7}>
        <StyleBox onClick={()=>uploadInputRed.current && uploadInputRed.current.click()}>
            {
                imageFile? renderImage():<p>Upload Image</p>
            }
        </StyleBox>
        <input onChange={handleChangeInput} ref={uploadInputRed} type="file" accept="image/*" hidden/>
    </Grid>
  )
}

export default ImageField