
import { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Search(props) {
    // 2 esperas un prop de la funcion onSearch
    const [textSearch, setTextSearch]= useState("")

    useEffect(()=>{
        props && props.getMoviesSearched(textSearch)
    },[textSearch])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <h2 className='text-center'>Movie Magic</h2>
                </Grid>
                <Grid item xs={2}>
                    <input type="text" placeholder='Movie Name' value={textSearch} onChange={(e) => setTextSearch(e.target.value)} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Search;