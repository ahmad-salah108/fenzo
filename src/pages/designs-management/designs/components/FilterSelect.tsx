import { Stack } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterSelect() {
  return (
    <Stack direction={'row'} sx={{gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap', marginInlineStart: {xs: '0', md: '3.2rem'}}}>
    <Box sx={{ minWidth: '10rem' }}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          sx={{'& *': {fontSize: '0.9rem'}}}
        >
          <MenuItem sx={{fontSize: '0.9rem'}} value={10}>Ten</MenuItem>
          <MenuItem sx={{fontSize: '0.9rem'}} value={20}>Twenty</MenuItem>
          <MenuItem sx={{fontSize: '0.9rem'}} value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: '7rem' }}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Time"
          sx={{'& *': {fontSize: '0.9rem'}}}
        >
          <MenuItem sx={{fontSize: '0.9rem'}} value={10}>Ten</MenuItem>
          <MenuItem sx={{fontSize: '0.9rem'}} value={20}>Twenty</MenuItem>
          <MenuItem sx={{fontSize: '0.9rem'}} value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: '13rem' }}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Classification</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Classification"
          sx={{'& *': {fontSize: '0.9rem'}}}
        >
          <MenuItem sx={{fontSize: '0.9rem'}} value={10}>Ten</MenuItem>
          <MenuItem sx={{fontSize: '0.9rem'}} value={20}>Twenty</MenuItem>
          <MenuItem sx={{fontSize: '0.9rem'}} value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Stack>
  )
}
