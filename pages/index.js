import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import ButtonAppBar from '../src/ButtonAppBar';

export default function Index() {
  return (
    
    <Container maxWidth="sm" dir="rtl">
      <ButtonAppBar />

      <Box sx={{ my: 4 }}>
        
        <Typography variant="h4" component="h1" gutterBottom>
          سلام علیکم
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
        
        <Button variant="contained">Contained</Button>
      </Box>
    </Container>
  );
}
