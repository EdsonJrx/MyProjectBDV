import 'react-native-gesture-handler';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';

import UserContextProvider from './src/contexts/UserContext';

import light from './src/theme/light';
import dark from './src/theme/dark';

function App() {
  return (
      <ThemeProvider theme={light}>
      <UserContextProvider>
          <Routes/>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;