import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [message, setMessage] = useState('')


    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        } else{
            dispatch(register(name, email, password))
        }
    }


    return (
        <FormContainer>
        <h1>Sign Up</h1>
        { message && <Message variant='danger'>{message}</Message> }
        { error && <Message variant='danger'>{error}</Message> }
        { loading && <Loader /> }
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" value={confirmPassword} placeholder="Enter Password" onChange={(e) => setconfirmPassword(e.target.value)}/>
            </Form.Group>
            <Button type="submit" variant='dark'>Sign In</Button>
        </Form>    

        <Row>
            <Col>
                Already have an account ? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} >Login</Link>
            </Col>
        </Row>

        </FormContainer>
    )
}

export default RegisterScreen
