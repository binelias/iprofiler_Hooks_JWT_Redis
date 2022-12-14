import React from 'react';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      pet: this.props.user.pet
    }
  }
  
  onProfileUpdate = (data) => {
    fetch(`https://fast-ravine-77412.herokuapp.com/${this.props.user.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify({
        formInput: data
      })
    }).then(resp => {
      if (resp.status === 200 || resp.status === 304) {
        this.props.toggleModal();
        this.props.loadUser({ ...this.props.user, ...data });
      }
    }).catch(console.log)
  }

  onFormChange = (event) => {
    switch(event.target.name) {
      case 'user-name':
        this.setState({name: event.target.value})
        break;
      case 'user-age':
        this.setState({age: event.target.value})
        break;
      case 'user-pet':
        this.setState({pet: event.target.value})
        break;
      default:
        return;
    }
  }

  render() {
    const {user, toggleModal} = this.props;
    const { name, age, pet } = this.state;
    return (
      <div className="profile-modal">
        <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white'>
          <main className='pa4 w-90'>
            <img
              src="https://raw.githubusercontent.com/binelias/binelias.github.io/main/assets/profile.png"
              className="br-100 pa1 ba b--black-10 h3 w3" alt="http://tachyons.io/img/logo.jpg"/>
            <h1>{this.state.name}</h1>
            <h4>{`Images Submitted: ${user.entries}`}</h4>
            <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
            <hr />
  
            <label className="mt2 fw6" htmlFor='user-name'>Name:</label>
            <input 
              onChange={this.onFormChange}
              className="pa2 ba w-100" 
              placeholder={this.state.name}
              type="text"
              id='user-name'/>
            <label className="mt2 fw6" htmlFor='user-age'>Age:</label>
            <input 
              onChange={this.onFormChange}
              className="pa2 ba w-100" 
              placeholder={this.state.age}
              type="text"
              id='user-age'/>
            <label className="mt2 fw6" htmlFor='user-pet'>Pet:</label>
            <input 
              onChange={this.onFormChange}
              className="pa2 ba w-100" 
              placeholder={this.state.pet}
              type="text"
              id='user-pet'/>
  
            <div className='mt4' style={{ display: 'flex', justifyContent: 'space-evenly'}}>
              <button 
                onClick={() => this.onProfileUpdate({name, age, pet})}
                className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'>
                Save
              </button>
              <button className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </main>
          <div className='modal-close' onClick={toggleModal}>
            &times;
          </div>
        </article>
      </div>
    );
  }
}

export default Profile;
