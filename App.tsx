import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/stack';

function App() {
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  );
}

export default App;