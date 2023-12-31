import { Button, Container, Paper, Typography } from '@mui/material'
import img from '../assets/banner.jpg'

export const Hero = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px',
      }}
    >
      <Paper elevation={3} sx={{ padding: '30px', maxWidth: '500px' }}>
        <Typography variant='h1' component='h1' gutterBottom>
          Your Name
        </Typography>
        <Typography variant='body1' color='textSecondary' paragraph>
          Welcome to my portfolio. I am a passionate developer ready to take on
          new challenges and create amazing things.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          href='/path/to/download/cv'
          download
        >
          Download CV
        </Button>
      </Paper>

      <img
        src={img}
        alt='Your Name'
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
    </Container>
  )
}
