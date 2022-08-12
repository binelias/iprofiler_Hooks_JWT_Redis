import React, { useState } from "react";


// class Register extends React.Component {
//     constructor () {
//         super();
//         this.state = {
//             email: '',
//             password: '',
//             name: ''
//         }
//     }
const Register = ({ onRouteChange, loadUser }) => {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState(''); 
  
  const onNameChange = (event) => {
    setRegisterName(event.target.value)
  };

  const onEmailChange = (event) => {
      setRegisterEmail(event.target.value)
  };

  const onPasswordChange = (event) => {
      setRegisterPassword(event.target.value)
  };

  const onSubmitLogIn = () => {
      fetch('https://fast-ravine-77412.herokuapp.com/register/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              email: registerEmail,
              password: registerPassword,
              name: registerName,
          })
      })
          .then(response => response.json())
          .then(user => {
              if(user.id) {
                  loadUser(user);
                  onRouteChange('home');
              } else {
                alert('Sorry, wrong fillup info');
              }
          })
  };

  return (
    <article className="mw6 center bg-white br3 pa3 pa4-ns mv4 ba b--black-10 shadow-5">
      <div className="measure">
        <fieldset id="register" className="ba b--transparent ph0 mh0">
        <h1 className="f1">Register</h1>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
          <input 
          className="pa2 input-reset ba bg-transparent  w-100" 
          type="text"
          onChange={onNameChange}
          />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input 
          className="pa2 input-reset ba bg-transparent  w-100" 
          type="email" 
          name="email-address"  
          id="email-address"
          onChange={onEmailChange}
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input 
          className="b pa2 input-reset ba bg-transparent  w-100" 
          type="password" 
          name="password"  
          id="password"
          onChange={onPasswordChange}
          />
        </div>
        </fieldset>
        <div>
        <input 
        onClick={onSubmitLogIn}
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Register"
        />
        </div>
        <div className="lh-copy mt3">
        <p>Already have an account?</p>
        <p onClick={() => onRouteChange('login')} className="f6 link dim black db pointer">Login</p>
        </div>
      </div>  
    </article>
  );
};

export default Register;