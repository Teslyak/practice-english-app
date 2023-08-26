import { Component } from 'react';
import { AddWordForm } from './AddWordForm/AddWordForm';
import { Container } from '@mui/material';
import { WordsList } from './WordsList/WordsList';

export class App extends Component {
  state = {
    words: [],
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

  render() {
    return (
      <Container maxWidth="xl">
        <AddWordForm addNewWord={this.addWord} />
        <WordsList
          words={this.state.words}
          onDeleteWord={this.handleDeleteWord}
        />
      </Container>
    );
  }
}
