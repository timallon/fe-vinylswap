import React from 'react';
import { useState } from 'react';
import '../App.css'

function Signup() {
    const [state, setState] = useState({
        email: '',
        password: '',
        userName: '',
      });
    const [greeting, setGreeting] = useState([]);

    function handleChange(event) {
        const currentValue = event.target.value;
        setState({
          ...state,
          [event.target.name]: currentValue,
        });
      };

    async function handleSubmit(event) {
      event.preventDefault()
      try{
        const { REACT_APP_MY_ENV } = process.env; 
        const response = await fetch (`${REACT_APP_MY_ENV}/auth/signup`, {
          method:"POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state)

        })
        const newUser = await response.json()
        console.log(newUser)
      }
      catch(err){
        console.log(err)
      }
        event.preventDefault();
        let user = event.target.userName.value;
        let welcomeGreeting = `Hi ${user}, and welcome to VinylSwap. Please make sure to share some records before searching.`;
        setGreeting([welcomeGreeting]);
    }


return (
    
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>Signup!</h2>
        <h3>Username</h3>
        <input
            type="text"
            name="userName"
            value={state.userName}
            onChange={handleChange}
        />
        <h3>Email</h3>
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <h3>Password</h3>
        <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
        />
    <button>Submit</button>
      </form>
      {greeting
        ? greeting.map((elem, i) => {
            return (
              <div key={elem + i}>
                <p>{elem}</p>
              </div>
            );
          })
        : null}
    </div>
    
)}

export default Signup;