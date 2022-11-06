//import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList';
import ContactCard from './ContactCard';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const AddContactHandler = (contact) => {
      //console.log(contact);
      setContacts([...contacts, contact])
  }
  
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   console.log("In retrive contacts");
  //   console.log(retriveContacts);
  //   if(retriveContacts) {
  //     console.log(" inside if ")
  //     setContacts(retriveContacts)
  //     console.log("after set contacts");
  //   };
  // },[])
  useEffect(() => {
    console.log("set items");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  
  return (
    <div className="App flex flex-col items-center">
      
      
        <Header/>

        <AddContact AddContactHandler={AddContactHandler} />
        
        <ContactList contacts = {contacts}/>
        
      </div>

    
  );
}

export default App;
