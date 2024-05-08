import { NavLink } from 'react-router-dom';
import './App.css'

function App() {

    const handleAddUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name , email}
       // console.log(user)
        
        fetch('http://localhost:5000/users' , {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
         // console.log(data);
          if (data.insertedId) {
            alert('User added successfully')
            form.reset();
          }
        })
    }

  return (
    <>

      <h1>Simple curd client</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='name'/><br />
        <input type="email" name='email' placeholder='email'/><br />
        <input type="submit" value="add user" />
      </form>
      <button>
         <NavLink to='/users'>Show user</NavLink>
         </button>
    </>
  )
}

export default App
