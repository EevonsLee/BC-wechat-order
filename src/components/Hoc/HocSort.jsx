import React, { Component } from "react"

function HocSort(Com) {
    return class extends Component {
        constructor(props) {
            super(props)
            let list = [...this.props.list].sort((a, b) => {
                return a.age - b.age
            })
            this.state = {
                list: list
            }
        }

        render() {
            return <Com list={this.state.list}/>
        }
    }
}

export default HocSort