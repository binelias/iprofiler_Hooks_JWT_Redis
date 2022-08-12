import React, {useState} from 'react';


// class Login extends React.Component {
//     constructor () {
//         super();
//         this.state = {
//             logInEmail: '',
//             logInPassword: ''
//         }
//     }
const Login = ({ onRouteChange, loadUser }) => {
  const [logInEmail, setlogInEmail] = useState('');
  const [logInPassword, setlogInPassword] = useState('');
  
  const onEmailChange = (event) => {
      setlogInEmail(event.target.value)
  };

  const onPasswordChange = (event) => {
      setlogInPassword(event.target.value)
  };

  const saveAuthTokenInSession = (token) => {
    window.localStorage.setItem('token', token);
  }

  const onSubmitLogIn = () => {
    fetch('https://fast-ravine-77412.herokuapp.com/login/', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: logInEmail,
            password: logInPassword
        })
    })
      .then(response => response.json())
      .then(data => {
          if(data.userId && data.success === 'true') {
            saveAuthTokenInSession(data.token);
            fetch(`https://fast-ravine-77412.herokuapp.com/${data.userId}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': data.token
              }
            })
            .then(res=> res.json())
            .then(user => {
              if (user && user.email) {
                loadUser(user)
                onRouteChange('home');
              }
            })
            .catch(console.log)
          }
        })
  };

  return (
      <article className="mw6 center bg-white br3 pa3 pa4-ns mv4 ba b--black-10 shadow-5">
        <div className="measure">
          <fieldset id="login" className="ba b--transparent ph0 mh0">
          <h1 className="f1">Login</h1>
          <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
              className="pa2 input-reset ba bg-transparent w-100" 
              type="email" 
              name="email-address" 
              id="email-address"
              onChange={onEmailChange}
              />
          </div>
          <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
              className="b pa2 input-reset ba bg-transparent w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange={onPasswordChange}   
              />
          </div>
          </fieldset>
          <div className="">
          <input 
          onClick={onSubmitLogIn}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
          type="submit" 
          value="Login"
          />
          </div>
          <div className="lh-copy mt3">
          <p>Don't have an account?</p>
          <p onClick={() => onRouteChange('register')}className="f6 link dim black db pointer">Register</p>
          </div>
        </div>
    </article>
  );
};

export default Login;