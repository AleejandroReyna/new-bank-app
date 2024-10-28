import './App.css';

// Navigation
import { MainRouter } from './navigation/MainRouter';

// Providers
import { UserProvider } from './contexts/User';

function App() {
  return (
    <UserProvider>
      <MainRouter />
    </UserProvider>
  );
}

export default App;
