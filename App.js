import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ScheduleScreen from './screens/ScheduleScreen';


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  HomeScreen:{screen: HomeScreen},
  ScheduleScreen:{screen: ScheduleScreen}
})

const AppContainer =  createAppContainer(switchNavigator);