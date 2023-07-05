import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useRef, useState } from "react";
import { FilterContext } from "../App";
import "../styles/instagram.css";
import domtoimage from 'dom-to-image';
import {saveAs} from "file-saver"
const StyleBox = styled(Box)({
  background: "#ddd",
  minHeight: "20rem",
  maxHeight: "100vh",
  marginBottom: "1rem",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
const StyleImage = styled("img")((props) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  filter: `contrast(${props.customFilter.contrast}%) brightness(${props.customFilter.brightness}%) saturate(${props.customFilter.saturate}%) sepia(${props.customFilter.sepia}%) grayScale(${props.customFilter.gray}%)`,
}));
const ImageField = () => {
  const uploadInputRed = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const { filterClass, customFilter } = useContext(FilterContext);
  const imgResultRef=useRef(null)
  console.log("filterClass", filterClass);
  const handleChangeInput = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };
  const renderImage = () => (
    <figure style={{ width: "100%", height: "100%" }}>
      <StyleImage
        className={filterClass}
        customFilter={!filterClass && customFilter}
        src={imageFile}
        alt=""
        ref={imgResultRef}
      />
    </figure>
  );
  const DownloadImg=()=>{
    domtoimage.toBlob(imgResultRef.current)
    .then(function (blob) {
        saveAs(blob, 'Result.png');
    })
    .catch(function(error){
      console.error("ooops ,someting went wrong !",error)
    });
  }
  return (
    <Grid item xs={12} md={7}>
      <StyleBox
        onClick={() => uploadInputRed.current && uploadInputRed.current.click()}
      >
        {imageFile ? renderImage() : <p>Upload Image</p>}
        <input
          onChange={handleChangeInput}
          ref={uploadInputRed}
          type="file"
          accept="image/*"
          hidden
        />
      </StyleBox>
      <input
        onChange={handleChangeInput}
        ref={uploadInputRed}
        type="file"
        accept="image/*"
        hidden
      />
      <Button onClick={DownloadImg} disabled={!imageFile} variant="contained" fullWidth>
        Dowload Image
      </Button>
    </Grid>
  );
};

export default ImageField;
