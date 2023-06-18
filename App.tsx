import 'react-native-gesture-handler';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';

import light from './src/theme/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;