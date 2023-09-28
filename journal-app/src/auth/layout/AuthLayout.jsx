/* eslint-disable import/no-absolute-path */
import { Grid, Typography } from '@mui/material'
import Image from '/background-image.webp'
import ImageBigSize from '/background-image-big.webp'

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundImage: { xs: `url(${Image})`, lg: `url(${ImageBigSize})` }, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: 4 }}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, width: { sm: 450 } }}
      >
        <Typography variant='h5' component='h1' mb={2}>{title}</Typography>
        {children}
      </Grid>
    </Grid>
  )
}
