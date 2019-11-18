import React, { Component } from 'react'
import styled from 'styled-components'
import FundingMockUpData from 'Datas/CategoryForMakerStudio.js'

export default class Stoy extends Component {
    state = {
        fundingCategory: FundingMockUpData.category
    }
    render() {
        return (
            <div container>
                <div path nav>
                </div>
                <div header>
                </div>
                <form>

                </form>
                <div button>
                </div>
            </div>
        )
    }
}
