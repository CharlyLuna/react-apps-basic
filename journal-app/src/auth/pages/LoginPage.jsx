import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
// eslint-disable-next-line import/no-absolute-path
import Image from '/background-image.webp'

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundImage: `url(${Image})`, padding: 4 }}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant='h5' component='h1' mb={2}>Login</Typography>
        <form>
          <Grid container>
            <Grid item xs={12} mt={1}>
              <TextField
                label='Email'
                type='email'
                placeholder='email@gmail.com'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} mt={1}>
              <TextField
                label='Password'
                type='password'
                placeholder='strongPass#123'
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>Login</Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ marginLeft: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Create an account
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
