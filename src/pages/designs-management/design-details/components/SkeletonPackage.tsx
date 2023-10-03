import { Skeleton } from '@mui/material'
import React from 'react'

export default function SkeletonPackage() {
  return (
      <Skeleton variant="rounded" sx={{width: {xs: '365px', sm: "570px"}, height: '200px'}} />
  )
}
