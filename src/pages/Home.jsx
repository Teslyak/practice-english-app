import { Container } from '@mui/material';
import { AddWordForm } from 'components/AddWordForm/AddWordForm';
import Filter from 'components/Filter/Filter';
import { WordsList } from 'components/WordsList/WordsList';

const Home = () => {
  return (
    <>
      <Container maxWidth="xl">
        <AddWordForm />
        <Filter />
        <WordsList />
      </Container>
    </>
  );
};

export default Home;
