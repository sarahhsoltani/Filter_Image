import { Box,Button,Grid} from "@mui/material"
import { styled } from '@mui/material/styles';
import { useRef, useState } from "react";
const StyleBox=styled(Box)({
    background:'#ddd',
    minHeight:'20rem',
    maxHeight:"100vh",
    marginBottom:"1rem",
    borderRadius:"5px",
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
    cursor:"pointer"
})
const StyleImage=styled('img')({
    width:'100%',
    height:'100%',
    objectFit:'contain'
})
const ImageField = () => {
    const uploadInputRed=useRef(null);
    const [imageFile,setImageFile]=useState(null);

    const handleChangeInput = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]))
  }
    const renderImage=()=>(
        <figure style={{ width: '100%', height: '100%' }}>
            <StyleImage src={imageFile} alt=""/>
        </figure>
    )
  return (
    <Grid item xs={12} md={7}>
        <StyleBox onClick={()=>uploadInputRed.current && uploadInputRed.current.click()}>
        {imageFile ? renderImage() : <p>Upload Image</p>}
        <input onChange={handleChangeInput} ref={uploadInputRed} type="file" accept="image/*" hidden />
        </StyleBox>
        <input onChange={handleChangeInput} ref={uploadInputRed} type="file" accept="image/*" hidden/>
        <Button disabled={!imageFile} variant="contained" fullWidth >Dowload Image</Button>
    </Grid>
  )
}

export default ImageField