import { Component } from 'react';
import { AddWordForm } from './AddWordForm/AddWordForm';
import { Container } from '@mui/material';
import { WordsList } from './WordsList/WordsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    words: [],
    filter: ""
  };

  addWord = newWord => {
    this.setState(prevState => ({
      words: [...prevState.words, newWord],
    }));
  };

  handleDeleteWord = id => {
    this.setState(prevState => ({
      words: prevState.words.filter(word => word.id !== id),
    }));
  };

  handleChange = (evt) => {
    this.setState({ filter: evt.target.value });
  }

  getFilterWords = () => {
    const normalizedFilter = this.state.filter.toLowerCase().trim();
    return this.state.words.filter((word) => {
      return word.ukWord.concat(word.enWord).toLowerCase().includes(normalizedFilter);
    });
  }

  render() {
    return (
      <Container maxWidth="xl">
        <AddWordForm addNewWord={this.addWord} />
        <Filter handleChange={this.handleChange}/>
        <WordsList
          words={this.getFilterWords()}
          onDeleteWord={this.handleDeleteWord}
        />
      </Container>
    );
  }
}
