import React from 'react'

export default class Test extends React.Component {
    
    render(props) {
        return (
            <div>
                <h1>{'Mr. ' + this.props.authorName}</h1>
            </div>
        )
    }
}
