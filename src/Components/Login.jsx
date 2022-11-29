import React, { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../context/auth.context';




  //Mat's lecture
const Login = () => {
    //from signup page:
    const [state, setState] = useState({
      password: '',
      userName: '',
    });
  const [error, setError] = useState('');
  
  const [greeting, setGreeting] = useState([]);
  //from signup page

  const { storeToken } = useContext(AuthContext)

  function handleChange(event) {
      const currentValue = event.target.value;
      setState({
        ...state,
        [event.target.name]: currentValue,
      });
    };

  const handleSubmit = async event => { 
    event.preventDefault();

    const response = await fetch ("http://localhost:5005/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    })
    const parsed = await response.json()
    setError(parsed)
    console.log('response: ', parsed)
    const token = parsed.token;
    localStorage.setItem("token", token)
    console.log(token)
  }

return (
    
    <div className="login">
      <form onSubmit={handleSubmit}>
        {error?.message && <p>{error.message}</p>}
        <h2>Login</h2>
        <h3>Username</h3>
        <input
            type="text"
            name="userName"
            value={state.userName}
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

export default Login;