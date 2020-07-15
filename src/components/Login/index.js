import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import * as actions from '../../actions'
import { useCookie, useMount } from 'react-use'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = { 
  logout: actions.userLogOut, 
  login: actions.userLogIn,
  jwtLogin: actions.jwtLogin,
};

const Login = ({ auth, logout, login, jwtLogin }) => {
  const [authCookie, updateAuthCookie ] = useCookie('auth')
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async data => {
    login(data.username, data.password);
    reset()
  }

  useMount(() => {
    if (authCookie) jwtLogin(authCookie)
  })

  useEffect(() => {
    if (authCookie !== auth.token) updateAuthCookie(auth.token)
  }, [auth.token, authCookie, updateAuthCookie])

  const LoginForm = (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control type="text" name="username"
      placeholder="Username" ref={register} />
      <Form.Control type="password" name="password"
      placeholder="Password" ref={register} />
      <Button type="submit" className="Form">Log In</Button>
    </Form>
  )
  
  const LogoutButton = (
    <Button className="Form" onClick={logout}>Log Out</Button>
  )

  return auth.loggedIn ? LogoutButton : LoginForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)