import { useState, useEffect } from "react"
import { db } from "./firebase-config"
import { collection, getDocs } from "@firebase/firestore";
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const userCollectionsRef = collection(db, "user")
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data)
    }
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
