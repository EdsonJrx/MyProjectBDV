import 'react-native-gesture-handler';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import { SheetProvider } from "react-native-actions-sheet";
import "./src/screen/sheets";

import UserContextProvider from './src/contexts/UserContext';

import light from './src/theme/light';
import dark from './src/theme/dark';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate`']);

function App() {
  return (
    <ThemeProvider theme={light}>
      <UserContextProvider>
        <SheetProvider>
            <Routes/>
        </SheetProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;