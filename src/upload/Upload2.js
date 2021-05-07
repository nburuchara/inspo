import React, {Component} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'


const Styles = styled.div `

`

export default class Upload2 extends Component {
    constructor() {
        super()
        this.state = {
            file: null,
            
        }
    }

    render () {
        return(
            <Styles>
                <div>

                </div>
            </Styles>
        )
    }
}