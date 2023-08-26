import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';
import { nanoid } from 'nanoid';
import { Component } from 'react';

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;

export class AddWordForm extends Component {
  state = {
    ukWord: '',
    enWord: '',
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    return (
      <Form
        onSubmit={evt => {
          evt.preventDefault();
          this.props.addNewWord({ id: nanoid(5), ...this.state });
          this.setState({
            ukWord: '',
            enWord: '',
          });
        }}
      >
        <TextField
          onChange={this.handleChange}
          id="enWord"
          name="enWord"
          label="English Word"
          variant="standard"
          value={this.state.enWord}
        />
        <TextField
          onChange={this.handleChange}
          id="ukWord"
          name="ukWord"
          label="Ukrainian Word"
          variant="standard"
          value={this.state.ukWord}
        />
        <Button type="submit" variant="outlined">
          Add word
        </Button>
      </Form>
    );
  }
}
