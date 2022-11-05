//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList';
import ContactCard from './ContactCard';

function App() {
  return (
    <div className="App">
      
      <Header/>

      <AddContact/>
      {/* <ContactCard/> */}
      <ContactList/>

    </div>
  );
}

export default App;
