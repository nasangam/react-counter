import React from 'react'

export default function Child(props) {
    return (
        <div>
            child props: {props.user.name || "empty"}
        </div>
    )
}
