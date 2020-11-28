import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function LoginScreen({ location, history }) {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        console.log(redirect)
    }


    return (
        <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button type="submit" variant='dark'>Sign In</Button>
        </Form>    

        <Row>
            <Col>
                New Customer ? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} >Register</Link>
            </Col>
        </Row>

        </FormContainer>
    )
}

export default LoginScreen
