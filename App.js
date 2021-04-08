import React, { useEffect, useLayoutEffect, useState }  from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

import {store} from './redux/store'
import Home from './pages/Home'
import StockInfo from './pages/StockInfo';

const Stack = createStackNavigator();

export default function App() {
  const [users, setUserList] = useState(undefined);
  useLayoutEffect(() => {
    axios.get('http://localhost:4000/nse/get_index_stocks?symbol=nifty', {
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .then((response) => {
      setUserList(response.data);
    });
  }, []);

  console.log(users);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
          <Stack.Screen name="StockInfo">
          {/* {props => <StockInfo {...props}  data={users.data} key={1}/>} */}
          {props => <StockInfo {...props} stockData={users.data} />}
          </Stack.Screen>
        </Stack.Navigator>
        {/* <Home/> */}
      </NavigationContainer>
    </Provider>
    
  );
}
