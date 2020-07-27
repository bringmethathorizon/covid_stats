import React, {useState, useEffect} from 'react';
import store from './store/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import BackgroundCard from './components/BackgroundCard';

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <BackgroundCard/>
            </div>
        </Provider>
  );
}

export default App;
