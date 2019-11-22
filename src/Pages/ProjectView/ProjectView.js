import React, { Component } from "react";
import styled from "styled-components";
import { API_TS } from "Datas/Config";
import ProjectTitle from "./ProjectTitle";
import ProjectList from "./ProjectList";
import Footer from "Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

class ProjectView extends Component {
  constructor() {
    super();
    this.state = {
      information: [
        {
          id: 0,
          titlephoto: "",
          title: "",
          name: ""
        }
      ]
    };
  }

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  componentDidMount() {
    const key = window.localStorage.getItem("VALID_TOKEN");
    fetch(`${API_TS}/fund/maininformation`, {
      method: "GET",
      headers: { Authorization: key }
    })
      .then(res => res.json())
      .then(info => {
        this.setState({
          titlephoto: info.titlephoto,
          title: info.title
        });
      });

    fetch(`${API_TS}/account/maker`, {
      method: "GET",
      headers: { Authorization: key }
    })
      .then(res => res.json())
      .then(info => {
        this.setState({
          name: info.name
        });
      });
  }

  render() {
    return (
      <section>
        <NavBar />
        <ViewWrapper>
          <ProjectTitle />
          <Board>
            <ProjectList />
          </Board>
        </ViewWrapper>
        <Footer />
      </section>
    );
  }
}

const ViewWrapper = styled.div``;

const Board = styled.div`
  border-top: 1px solid #e1e3e6;
  background: #f5f7fa;
  padding-top: 50px;
  padding-bottom: 160px;
  width: 100%;
  height: 740px;
`;

export default ProjectView;
