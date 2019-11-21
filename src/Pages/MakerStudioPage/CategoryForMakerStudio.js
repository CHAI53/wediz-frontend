import React from "react";
import styled from "styled-components";
import category from "Datas/CategoryForMakerStudio.js";
import CategoryForFunding from "./CategoryForFunding.js";

class CategoryForMakerStudio extends React.Component {
  state = {
    category: category.category,
    detect: ""
  };
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
  handleView = selected => {
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
  };

  render() {
    // console.log("부모에서 넘어가는 변경할 props", this.state.distinguisher)
    const { category, detect } = this.state;
    const navCategory = category.map(data => (
      <CategoryForFunding
        info={data}
        control={detect === data.name}
        show={() => {
          this.handleView(data.name);
        }}
      />
    ));
    return (
      <ContainerNav>
        <CategoryContainer>{navCategory}</CategoryContainer>
      </ContainerNav>
    );
  }
}

export default CategoryForMakerStudio;

const CategoryContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 240px;
`;

const ContainerNav = styled.nav`
  width: 240px;
`;
