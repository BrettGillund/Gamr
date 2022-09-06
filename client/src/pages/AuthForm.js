import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';

function AuthForm(props) {

  console.log(props)
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
    type: 'login'
  });
  const [addUser] = useMutation(ADD_USER, {
    variables: formInput
  });
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: formInput
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user, token;
    let mutation = formInput.type === 'register' ? addUser : loginUser;
    let type = formInput.type === 'register' ? 'addUser' : 'loginUser';

    const { data } = await mutation();

    user = data[type].user;
    token = data[type].token;

    localStorage.setItem('token', token);
    props.setUser(user);
    console.log(user)

    navigate('/');
  };

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="profLogin">
      <h1>{formInput.type[0].toUpperCase() + formInput.type.slice(1)}</h1>
      <input className='border'
        name="email"
        value={formInput.email}
        onChange={handleInputChange}
        type="email"
        placeholder="Enter your email address" />
      <input
      className='border'
        name="password"
        value={formInput.password}
        onChange={handleInputChange}
        type="password"
        placeholder="Enter your password" />
      <div className="type-wrap">
        <label htmlFor="login">
          Login
          <input checked={formInput.type === 'login'} onChange={handleInputChange} name="type" id="login" type="radio" value="login" />
        </label>
        <label htmlFor="register">
          Register
          <input checked={formInput.type === 'register'} onChange={handleInputChange} name="type" id="register" type="radio" value="register" />
        </label>
      </div>
      <button className='border'>Submit</button>
    </form>
  )
}

export default AuthForm;