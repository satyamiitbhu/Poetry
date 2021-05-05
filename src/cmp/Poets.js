import React from 'react';
import Test from './Test';

class Poets extends React.Component {

    state = { render: false }
    add = (i) => {
        this.setState({ render: !this.state.render, i})
    }
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://poetrydb.org/author').then((resp) => {
            resp.json().then((result) => {
                // console.warn(result.authors);
                // console.log()
                this.setState({ users: result.authors })
            })
        })
    }
    // urlFunction(temp,i)
    // {
    //     console.log(i);
    //     console.log(temp);
    // }
    render() {
        return (
            <div>
                {/* <h1> Fetching authors name !</h1> */}

                {
                    this.state.users ?
                        this.state.users.map((item, i) =>
                            <div>
                                {/* { i } --- { item.authors }  */}
                                {/* <a href="xyz" onClick={this.urlFunction(item,i)}> {item} </a> */}

                                {/* <button onClick={() => this.urlFunction(item, i)}> {item} </button>
                                onClick={() => sayHello('James')} */}

                                <button onClick={() => this.add(i)}> {item} </button>
                                {
                                    this.state.render &&
                                    <Test authorName={item} />
                                }

                            </div>
                        )
                        : null
                }


            </div>
        )
    }
}
export default Poets;