import React from 'react'

export default function Loading(props) {
    if (props.error) {
        return(
            <div>
                Error! <button onClick={props.retry}></button>
            </div>
        )
    } else if (props.pastDelay) {
        return <div>Loading...</div>
    } else {
        return null
    }
}