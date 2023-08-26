import { Component } from 'react';
import { AddWordForm } from './AddWordForm/AddWordForm';
import { Container } from '@mui/material';

export class App extends Component {
  state = {
    words: [],
  };

  addWord = newWord => {
    this.setState(prevState => ({
      words: [...prevState.words, newWord],
    }));
  };

  render() {
    return (
      <Container maxWidth="xl">
        <AddWordForm addNewWord={this.addWord} />
      </Container>
    );
  }
}
