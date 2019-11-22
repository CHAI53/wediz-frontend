import React from "react";
import styled from "styled-components";
import CategoryForMakerStudio from "./CategoryForMakerStudio.js";
// const { detect, category } = this.props.navCategory
class MakerStudioNav extends React.Component {
  constructor(props) {
    super(props);
    const { category, detect, list } = this.props.navCategory;
    this.state = {
      category: category,
      detect: detect,
      // list: this.props.navCategory.list,
      // optionOne: "",
      // optionTwo: "",
      // optionThree: "",
      // optionFour: "",
      // optionFive: "",
      sectionOne: list,
      address: ""
    };
  }
  // handleControl = (value) => {
  //     const { distinguisher } = this.state
  //     const { detect } = this.state
  //     console.log("부모에서 넘어가는 변경할 props in 부모의 이벤트 핸들러", this.state.distinguisher)

  //     {
  //         (value) ?
  //             this.setState((state) => ({
  //                 distinguisher: value ? false : true
  //             })
  //             )
  //             :
  //             this.setState((state) => ({
  //                 distinguisher: value ? false : true
  //             })
  //             )
  //     }
  // }
  handleUnfold = selected => {
    //     this.state.detect === selected ?
    //         this.setState({
    //             detect: ""
    //         })
    //         :
    //         this.setState({
    //             detect: selected
    //         })
    this.setState({
      detect: this.state.detect === selected ? "" : selected
    });
    console.log("is event happening?===");
  };
  handleRenderPage = id => {
    console.log(id);
    this.setState(
      {
        address: id
      },
      () => this.props.getAddress(this.state.address)
    );
    console.log("handleRenderPage", this.state.address);
  };

  render() {
    // console.log("부모에서 넘어가는 변경할 props", this.state.distinguisher)
    console.log(
      "is setState working when click each ticket?===",
      this.state.detect
    );
    console.log(
      "is setState working when click each section?===",
      this.state.address
    );
    const { category, detect, address, sectionOne } = this.state;
    const navCategory = category.map(data => (
      <CategoryForMakerStudio
        info={data}
        unfold={detect === data.name}
        show={() => {
          this.handleUnfold(data.name);
        }}
        highlight={address}
        callRender={this.handleRenderPage}
      ></CategoryForMakerStudio>
    ));
    return (
      <NavContainer>
        <CategoryContainer>{navCategory}</CategoryContainer>
      </NavContainer>
    );
  }
}

export default MakerStudioNav;

const CategoryContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 240px;
  position: fixed;
  top: 55px;
`;

const NavContainer = styled.nav`
  width: 240px;
  margin-right: 50px;
`;
