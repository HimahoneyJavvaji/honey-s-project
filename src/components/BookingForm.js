import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function BookingForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Booking for ${name} on ${date} at ${time} for ${guests} guests`);
  };

  return (
    <Box component="section" id="booking" sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Book a Table
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Date"
          type="date"
          variant="outlined"
          margin="normal"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          label="Time"
          type="time"
          variant="outlined"
          margin="normal"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          label="Number of Guests"
          type="number"
          variant="outlined"
          margin="normal"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2 }}
        >
          Book Now
        </Button>
      </form>
    </Box>
  );
}

export default BookingForm;
