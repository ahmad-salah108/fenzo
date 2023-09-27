import { ButtonProps } from '@mui/material'
import React from 'react'
import MuiButton from '@mui/material/Button'

interface ButtonOptions {
  // your custom options with their types
}

const ButtonLink = <C extends React.ElementType>(props: ButtonProps<C, {component?: C}> & ButtonOptions ) => {
  return <MuiButton {...props}>{props.children}</MuiButton>
}

export default ButtonLink