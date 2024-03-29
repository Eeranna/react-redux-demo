import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/cakes/store';
import CakeContainer from './components/CakeContainer';

/*App Component*/
function App() {
  return (
    <Provider store={store}>
      <div className="App">
            <CakeContainer />
        </div>
    </Provider>
  );
}

export default App;
