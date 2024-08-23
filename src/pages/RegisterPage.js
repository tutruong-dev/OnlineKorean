import React, { useState } from 'react'; 
import Register from '../components/Login_Logout/Register';
import { db } from '../config';
import { collection, addDoc } from "firebase/firestore"; 

function RegisterPage (){
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    const docRef = addDoc(collection(db, "users"), user);
    setUsers([...users, user]);
  };
    return (
      <div className="ResgisterPage-page">
        <Register addUser={addUser} />
      </div>
    );
  };
  export default RegisterPage;