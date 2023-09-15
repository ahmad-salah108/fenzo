import { Box, Container, Stack, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'

export default function AuthNavbar() {
  const { t } = useTranslation();
  const theme = useTheme()

  return (
    <Box bgcolor={'secondary.main'} sx={{borderBottom: theme => `2px solid ${theme.palette.primary.main}`}}>
      <Container maxWidth='lg'>
        <Stack direction={'row'} sx={{justifyContent: 'space-between', alignItems: 'center'}}>
          <Link to={'/'}>
            <img src='/assets/icons/logo.svg' style={{width: '10.2rem'}}/>
          </Link>
          <Stack direction={'row'} sx={{gap: '1.4rem', '& *': {fontFamily: "Aleo, serif !important"}}}>
            <NavLink to={'/login'} style={{color: theme.palette.primary.main}}>{t('login')}</NavLink>
            <NavLink to={'/sign-up'}>{t('sign_up')}</NavLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
