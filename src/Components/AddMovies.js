import React ,{useState}from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const AddMovies = ({addMovies})=>{
const[newMovies,setNewMovies]=useState(
   
    {
        id:0,
        title:"",
        image:"",
        description:"",
        year:0,
        rate:0
    }
);
const handleChange=(event)=>{
    setNewMovies({...newMovies,[event.target.name]:event.target.value})
};
    return(
    <div >
    <h3>Add a new movie </h3>
    <Box
      
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="outlined-basic" label="Title" variant="outlined" name="title"  onChange={handleChange}/>
      <TextField id="outlined-basic" label="Image" variant="outlined" name="image" onChange={handleChange}/>
      <TextField id="outlined-basic" label="Description" variant="outlined" name="description" onChange={handleChange}/>
      <TextField id="outlined-basic" label="Year" variant="outlined" name="year" onChange={handleChange}/>
      <TextField id="outlined-basic" label="Rate" variant="outlined" name="rate" onChange={handleChange}/>
      
    </Box>  
    <button variant="primary" onClick={() => {addMovies(newMovies)}}>Add a new movie </button>
    </div>
    );
}
export default AddMovies;