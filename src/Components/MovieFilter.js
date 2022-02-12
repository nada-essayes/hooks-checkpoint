import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const MovieFilter = ({rating,setRating,setNameMovie})=>{


  const handleChange = (e) => {
    setRating(e.target.value);
  };

    return(
    <div>
        <h3> Search a movie </h3>
        <input type="text" placeholder="Search a movie" onChange={(e)=>setNameMovie(e.target.value)}/>
        <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 4, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">Choose the rate</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                value={rating}
            >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            </Select>
</FormControl>
</Box>
    </div>
    );
}
export default MovieFilter;