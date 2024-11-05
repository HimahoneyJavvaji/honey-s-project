import React from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import { Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Header />
      <BookingForm />
    </Container>
  );
}

export default App;
