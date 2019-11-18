import React from 'react'
import HeaderForMakerStudio from 'Components/HeaderForMakerStudio'
import MakerStudioNav from 'Components/NavForMakerStudio/MakerStudioNav.js'
import MainArticleForMakerStudio from './MainArticleForMakerStudio'
import navCategoryForMakerStudio from 'Datas/CategoryForMakerStudio.js'

class MakerStudioPage extends React.Component {
    state = {
        category: navCategoryForMakerStudio.category,
        detect: "funding",
        list: navCategoryForMakerStudio.list1,
        address: ""
    }
    handleAddress = (data) => {
        console.log("handleAddress 작동")
        this.setState({
            address: data
        })
    }
    render() {
        console.log("최종", this.state.address)
        return (
            <>
                <HeaderForMakerStudio />
                <MakerStudioNav
                    navCategory={this.state}
                    getAddress={this.handleAddress} />
                <MainArticleForMakerStudio>
                </MainArticleForMakerStudio>
            </>
        )
    }
}

export default MakerStudioPage;  