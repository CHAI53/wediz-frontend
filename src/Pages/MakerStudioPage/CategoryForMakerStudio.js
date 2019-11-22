import React from "react";
import styled, { css } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import LockImg from "Images/lockfornav.png";
// const { title, optionZero, optionOne, optionTwo,
//     optionThree, optionFour, optionFive, unlock, value, } = this.props.info
// const { show } = this.props

class CategoryForMakerStudio extends React.Component {
  state = {
    id: ""
  };
  // state = {
  //     checkClicked: ""
  // }
  // ===========================nav바 펼치기 숨기기 로직 구현 no.1에 필요했던 constructor===============================================
  // const { show } = props
  // const { control } = control

  // constructor(props) {
  //     super(props)
  //     this.state = {
  //         id: "",
  //         // list1: false,
  //         // list2: false,
  //         // list3: false,
  //         // list4: false,
  //         // list5: false,
  //         displayOption: false
  //         // checkStatus: false,
  //     }
  // }
  // ===========================nav바 펼치기 숨기기 로직 구현 no.1에 필요했던 constructor===============================================
  // ===========================nav바 펼치기 숨기기 로직 구현 no.1===============================================
  // handleChange = (e) => {
  //     console.log(this.props.info.title, "이벤트헨들러의 state는===", this.state)
  //     console.log(this.props.info.title, "이벤트헨들러의 props는===", this.props.open)

  // this.setState((state) => ({
  //=========================== 삼항연산자 대신 논리not연산자 사용===========================
  //     displayOption: !this.state.displayOption
  //=========================== 삼항연산자 대신 논리not연산자 사용===========================
  // })
  //         , () => {
  //             {
  //                 (this.props.open !== this.state.displayOption) &&
  //                     this.setState((state) =>
  //                         ({

  //                             displayOption: this.state.displayOption ? false : true,
  //                         })
  //                         // checkStatus: this.state.checkStatus ? false : true
  //                     )

  //             }
  //             this.props.control(this.state.displayOption)
  //         }
  //     )

  // }
  // ===========================nav바 펼치기 숨기기 로직 구현 no.1===============================================

  // ===========================lifecycle 확인용===============================================
  // componentWillMount() {
  //     console.log(this.props.info.title, 'componentWillMount');
  //     console.log(this.props.info.title, "state는===", this.state)
  //     console.log(this.props.info.title, "props는===", this.props.open)
  // }

  // componentDidMount() {
  //     console.log(this.props.info.title, 'componentDidMount');
  //     console.log(this.props.info.title, "state는===", this.state)
  //     console.log(this.props.info.title, "props는===", this.props.open)
  // }

  // componentWillReceiveProps(nextProps) {
  //     console.log(this.props.info.title, 'componentWillReceiveProps');
  //     console.log(this.props.info.title, "state는===", this.state)
  //     console.log(this.props.info.title, "props는===", this.props.open)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.props.info.title, 'shouldComponentUpdate');
  //     return true / false;
  //     console.log(this.props.info.title, "state는===", this.state)
  //     console.log(this.props.info.title, "props는===", this.props.open)
  // }

  // componentWillUpdate(nextProps, nextState) {
  //     console.log(this.props.info.title, 'componentWillUpdate');
  //     console.log(this.props.info.title, "state는===", this.state)
  //     console.log(this.props.info.title, "props는===", this.props.open)
  // }

  // componentDidUpdate(prevProps, prevState) {
  //     console.log(this.props.info.title, 'componentDidUpdate');
  //     console.log(this.props.info.title, "state는===", this.state)
  //     console.log(this.props.info.title, "props는===", this.props.open)
  // }

  // componentWillUnmount() {
  //     console.log(this.props.info.title, 'componentWillUnmount');
  //     console.log(this.props.info.title, "state는===", this.state)
  //     console.log(this.props.info.title, "props는===", this.props.open)
  // }
  // ===========================lifecycle 확인용===============================================

  // console.log(this.props.info.title, "렌더의 state는===", this.state)
  // console.log(this.props.info.title, "렌더의 props는===", this.props.open)
  handleDetectClick = event => {
    console.log("handleDetectClick");
    // const check = this.state
    this.setState(
      {
        id: event.target.id
      },
      () => this.props.callRender(this.state.id)
    );
    // this.props.callRender(event, this.state
    //     ()=> this.setState({
    //         [event.target.name]: ""
    //     })
    // )
  };
  render() {
    console.log("handleDetectClick", this.state.id);
    console.log("show는===", this.props.show);
    console.log("unfold는===", this.props.unfold);
    console.log("info는===", this.props.info);
    const {
      title,
      optionZero,
      optionZeroId,
      optionOne,
      optionOneId,
      optionTwo,
      optionTwoId,
      optionThree,
      optionThreeId,
      optionFour,
      optionFourId,
      optionFive,
      optionFiveId,
      unlock,
      value
    } = this.props.info;
    const { show, unfold, highlight } = this.props;
    const { id } = this.state;
    return (
      <Category>
        {unlock ? (
          <CategoryList control={unfold} id={value} onClick={show}>
            <CategoryName id={value} unlock onClick={show}>
              {title}
            </CategoryName>
            <Arrow
              id={value}
              type="checkbox"
              checked={unfold && "checked"}
            ></Arrow>
          </CategoryList>
        ) : (
          <CategoryList id={value}>
            <CategoryName onClick={show}>{title}</CategoryName>
            <Lock disabled="true" type="checkbox"></Lock>
          </CategoryList>
        )}
        {optionZero && (
          <OptionList control={unfold}>
            <Option
              onClick={this.handleDetectClick}
              name="optionZero"
              id={optionZeroId}
              hightlight={highlight === optionZeroId}
            >
              {optionZero}
            </Option>
            <Link to="/maker/studio/funding" style={{ textDecoration: "none" }}>
              <Option
                name="optionOne"
                id={optionOneId}
                onClick={this.handleDetectClick}
                hightlight={highlight === optionOneId}
              >
                {optionOne}
              </Option>
            </Link>
            <Option
              name="optionTwo"
              id={optionTwoId}
              onClick={this.handleDetectClick}
              hightlight={highlight === optionTwoId}
            >
              {optionTwo}
            </Option>
            <Option
              name="optionThree"
              id={optionThreeId}
              onClick={this.handleDetectClick}
              hightlight={highlight === optionThreeId}
            >
              {optionThree}
            </Option>
            <Option
              name="optionFour"
              id={optionFourId}
              onClick={this.handleDetectClick}
              hightlight={highlight === optionFourId}
            >
              {optionFour}
            </Option>
            <Option
              name="optionFive"
              id={optionFiveId}
              onClick={this.handleDetectClick}
              hightlight={highlight === optionFiveId}
            >
              {optionFive}
            </Option>
          </OptionList>
        )}
      </Category>
    );
  }
}
export default CategoryForMakerStudio;

// const CategoryContainer = styled.ul`

// `;

const Category = styled.li`
  // justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  // justify-content: center;
  // position: relative;
  // flex-direction: column;
  list-style: none;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.control ? "#00a2a2" : "black")};
`;

const OptionList = styled.ul`
  padding: 0;
  display: ${props => (props.control ? "block" : "none")};
`;

const Option = styled.li`
  list-style: none;
  background-color: #f8f8f9;
  color: ${props => (props.hightlight ? "#00a2a2" : "#44484b")};
  margin-left: 0;
  padding: 16px 70px;
  font-size: 13px;
  /* text-decoration:none; */
  cursor: pointer;
  /* :hover {
    color: #00a2a2
} */
`;

const Arrow = styled.input`
  border-bottom: 1px solid #00a2a2;
  border-left: 1px solid #00a2a2;
  width: 12px;
  height: 12px;
  font-weight: 400;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  border-right: none;
  border-top: none;
  position: relative;
  margin-top: -3px;
  position: relative;
  transform: rotate(-225deg);
  // top:10px;
  // left:4px
  transition: 1s;

  animation: spinner 1s;
  // animation: checkMove 1s ;
  animation-fill-mode: both;

  @keyframes spinner {
    0% {
      top: 5px;
      left: 4px;
      transform: rotate(-45deg);
    }
    20% {
      top: 20px;
      left: 4px;
      transform: rotate(-45deg);
    }
    50% {
      top: 5px;
      left: 4px;
      transform: rotate(-45deg);
    }
    100% {
      top: 8px;
      left: 4px;
      transform: rotate(-225deg);
    }
  }
  &:checked {
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    // margin-right: 6px;
    transition: 1s;
    top: 4px;
    left: 4px;
    animation: spinnerRecover 1s;
    animation-fill-mode: both;
  }
  @keyframes spinnerRecover {
    0% {
      top: 0;
      left: 4px;
      transform: rotate(-225deg);
    }
    50% {
      top: -3px;
      left: 4px;
      transform: rotate(-45deg);
    }
    80% {
      top: 14px;
      left: 4px;
      transform: rotate(-45deg);
    }
    100% {
      top: 0px;
      left: 4px;
      transform: rotate(-48deg);
    }
  }
`;

const Lock = styled.input`
appearance:none;
border: none;
background-image: url('${LockImg}');
background-size: 100%;
width: 12px;
height: 15px;
position:relative;
top:-1px;
opacity:0.5;
left:4px;
&:hover {
    opacity:1;
}
`;

const CategoryName = styled.div`
  font-size: 13px;
  height: 22px;
  display: flex;
  align-items: center;
  opacity: ${props => (props.unlock ? 1 : 0.5)};
  cursor: pointer;
`;
