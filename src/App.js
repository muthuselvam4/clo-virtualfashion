import './css/App.css';
import ConnectWidget from './ConnectWidget';
import ConnectContentList from './ConnectContentList';
import { Provider } from 'react-redux';
import store from './configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <ConnectWidget />
        <ConnectContentList />
      </div>
    </Provider>
  );
}

export default App;