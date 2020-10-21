import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner animation="grow" role="status" style={{ width:'600px', height: '600px', margin: 'auto', display: 'block'}}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default Loader