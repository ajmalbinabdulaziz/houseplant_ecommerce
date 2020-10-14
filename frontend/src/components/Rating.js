import React from 'react'
import ProTypes from 'prop-types'


const Rating = ({ value, text, color }) => {
    return (
        <div className='Rating' >

            <span style={{color}}>
            <i className= {value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star' } ></i>
            </span>
            <span style={{color}}>
            <i className= {value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star' } ></i>
            </span>
            <span style={{color}}>
            <i className= {value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star' } ></i>
            </span>
            <span style={{color}}>
            <i className= {value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star' } ></i>
            </span>
            <span style={{color}}>
            <i className= {value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star' } ></i>
            </span>
            <span>{text && text}</span>

        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825',
}

Rating.ProTypes = {
    value: ProTypes.number.isRequired,
    text: ProTypes.string.isRequired,
    color: ProTypes.string,
}

export default Rating
