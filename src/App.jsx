import './App.css';
import MainRouter from './shared/MainRouter';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
