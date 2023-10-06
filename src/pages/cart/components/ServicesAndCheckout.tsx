import { Box, Grid } from '@mui/material'
import React from 'react'
import OrderServices from './OrderServices'
import Checkout from './Checkout'

export default function ServicesAndCheckout() {
  return (
    <Box sx={{marginTop: '2rem'}}>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={7}>
          <OrderServices/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Checkout/>
        </Grid>
      </Grid>
    </Box>
  )
}
