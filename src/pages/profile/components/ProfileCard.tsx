import { Paper, Typography } from '@mui/material'
import React from 'react'

export default function ProfileCard({title, description}: {title: string, description: React.ReactNode}) {
  return (
    <Paper elevation={3} sx={{width: '24rem', padding: '1rem', borderRadius: '0.7rem'}}>
      <Typography fontWeight={100} mb={1}>{title}</Typography>
      <Typography sx={{fontWeight: 'bold', fontSize: '1.2rem', width: '100%', wordBreak: 'break-word'}}>{description}</Typography>
  </Paper>
  )
}
