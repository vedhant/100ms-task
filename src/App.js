import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import CharacterContextProvider from './contexts/CharacterContext';
import CharacterDetails from './components/Home/CharacterDetails/CharacterDetails';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeContextProvider>
          <CharacterContextProvider>
            <Route exact path='/' component={Home} />
            <Route path='/character/:char_id' component={CharacterDetails} />
          </CharacterContextProvider>
        </ThemeContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
