import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Jornals extends Component {
  state = {
    jornals: [],
    title: "",
    author: "",
    Journals: ""
  };

  componentDidMount() {
    this.loadJournals();
  }

  loadJournals = () => {
    API.getJournals()
      .then(res =>
        this.setState({ jornals: res.data, title: "", author: "", Journals: "" })
      )
      .catch(err => console.log(err));
  };

  deleteJournal = id => {
    API.deleteJournal(id)
      .then(res => this.loadJournals())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveJournal({
        title: this.state.title,
        author: this.state.author,
        Journals: this.state.Journals
      })
        .then(res => this.loadJournals())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12" >
            <Jumbotron>
              <h1> What is on your mind?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.Journals}
                onChange={this.handleInputChange}
                name="Journals"
                placeholder="Journal (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit - One Step Closer
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12">
            <Jumbotron>
              <h1>Journal Entriest</h1>
            </Jumbotron>
            {this.state.jornals.length ? (
              <List>
                {this.state.jornals.map(jornal => (
                  <ListItem key={jornal._id}>
                    <Link to={"/jornals/" + jornal._id}>
                      <strong>
                        {jornal.title} by {jornal.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteJournal(jornal._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Jornals;
