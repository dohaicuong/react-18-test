import type { NextPage } from 'next'
import { Grid, GridProps } from '@mui/material'
import { styled } from '@mui/material'

import background from '../assets/half_map.png'
import { SignupForm } from '../features/auth/SignupForm'

// import Head from 'next/head'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Grid container sx={{ height: '100vh' }} spacing={0}>
      <HalfBackgroundGrid item xs />
      <Grid
        item
        xs
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SignupForm />
      </Grid>
    </Grid>
  )
}

export default Home

const HalfBackgroundGrid: React.FC<GridProps> = styled
  (props => (
    <Grid {...props} />
  ))
  `
    background-image: url(${background.src});
    backgroundSize: cover;
    display: inline-block;
  `
