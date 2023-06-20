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
      setUsers(data.docs.map((doc) => {
        ({...doc.data(),id:doc.id})
      }))
    }
  },[])
  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h2>Age: { user.age}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
