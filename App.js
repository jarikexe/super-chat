import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import HomeScreen from './screens/Home'
import nickNameReducer from './store/reducers/nickname'
import ChatScreen from "./screens/Chat";

const rootReducer = combineReducers({
    nickname: nickNameReducer
})

const store = createStore(rootReducer);
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Nickname" component={HomeScreen} />
              <Stack.Screen name="Chat" component={ChatScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
