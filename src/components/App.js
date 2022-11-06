//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList';
import ContactCard from './ContactCard';

function App() {
  const [contacts, setContacts] = useState([]);
  const AddContactHandler = (contact) => {
      //console.log(contact);
      setContacts([...contacts, contact])
  }
  return (
    <div className="App flex flex-col items-center">
      
      
        <Header/>

        <AddContact AddContactHandler={AddContactHandler} />
        
        <ContactList contacts = {contacts}/>
        
      </div>

    
  );
}

export default App;
