import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Container from '@mui/material/Container';

/* Exporting all of the application *
*  components                       */

const App = () => {
  const contacts = [
    {
      id: "1",
      name: "Dylan",
      email: "dylanscott1@gmail.com"
    },
    {
      id: "2",
      name: "Shayna",
      email: "shaynaberg1@gmail.com"
    },
  ];

  return (
    <Container fixed>
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/> 
    </div>
    </Container>
  );
}

export default App;
