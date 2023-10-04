import { People } from '@mui/icons-material'
import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Chairs() {
  return (
    <Box>
      <Typography fontSize={"0.8rem"} mb={1}>Number of Chairs</Typography>
      <Stack direction={"row"} sx={{gap: '5px'}}>
        <People/>
        <TextField size='small' variant='standard' type='number' placeholder='99' sx={{width: '100px'}}/>
      </Stack>
    </Box>
  )
}
