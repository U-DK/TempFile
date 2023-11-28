import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, styled } from "@mui/material"
import { useState } from "react";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface SubmitRequestBody {
  name: string;
  category: string;
  pictureFile: File | null;
  modelFile: File | null;

}

function FormPage() {
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");
  const [pictureFileName, setPictureFileName] = useState("");
  const [pictureFile, setPictureFile] = useState<File | null>(null);
  const [modelFileName, setModelFileName] = useState("");
  const [modelFile, setModelFile] = useState<File | null>(null);

  const handleChangePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setPictureFileName(file.name);
      setPictureFile(file);
    }
  };

  const handleChangeModel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setModelFileName(file.name);
      setModelFile(file);
    }
  };

  const handleSubmit = ({ name, category, pictureFile, modelFile }: SubmitRequestBody) => {
    console.log("submit button clicked: ", { name, category, pictureFile, modelFile });
    /* const response = fetch("http://localhost:8080/api/submit", {
      name,
      category,
      pictureFile,
      modelFile,
    });
    if (response.status === 200) {
      alert("Success!");
    } */
  };

  console.log(pictureFile);
  console.log(modelFile);
  const handleSelectChange = (event: SelectChangeEvent): void => {
    setCategory(event.target.value as unknown as string);
  };
  return (
    <Stack
      mt={5}
      mb={5}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <TextField 
        id="name" 
        label="Name" 
        variant="outlined" 
        required 
        value={name}
        sx={{ width: 300 }}
        onChange={e => setName(e.currentTarget.value)}
        placeholder="Please enter your name." 
      />
      <FormControl
        sx={{ width: 300 }}
        required
        variant="outlined"
      >
        <InputLabel id="demo-simple-select-label">Categroy</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Categroy"
          onChange={handleSelectChange}
        >
          <MenuItem value="">
              <em>None selected category</em>
          </MenuItem>
          <MenuItem value={"category1"}>category 1</MenuItem>
          <MenuItem value={"category2"}>category 2</MenuItem>
          <MenuItem value={"category3"}>category 3</MenuItem>
        </Select>
      </FormControl>
      <Stack
        direction="row"
        alignItems="center"
      >
        <TextField
          disabled
          id="outlined-disabled"
          value={pictureFileName} 
          sx={{ width: 300 }}
          placeholder="Please upload your picture." 
        />
        <Button 
          component="label" 
          variant="contained"
          sx={{ height: "56px", width: "130px"}}
        >
          Upload file
          <VisuallyHiddenInput type="file" onChange={handleChangePicture} />
        </Button>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
      >
        <TextField
          disabled
          id="outlined-disabled"
          value={modelFileName} 
          sx={{ width: 300 }}
          placeholder="Please upload your model." 
        />
        <Button 
          component="label" 
          variant="contained"
          sx={{ height: "56px", width: "130px"}}
        >
          Upload file
          <VisuallyHiddenInput type="file" onChange={handleChangeModel} />
        </Button>
      </Stack>
      <Button variant="contained" onClick={() => handleSubmit({ name, category, pictureFile, modelFile })}>Submit</Button>
    </Stack>
  )
}

export default FormPage