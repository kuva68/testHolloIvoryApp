import React from 'react';
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import BlockerLoader from '@components/BlockerLoader'
interface AppProps {}

const App: React.FC<AppProps> = () =>{
    return  <Provider store={store}>
                <BlockerLoader />
                <RootNavigator {...store.getState()} />
            </Provider>;
} ;

export default App;
