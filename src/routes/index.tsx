import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Map from '../pages/Map';
import BookMark from '../pages/BookMark';
import Ticket from '../pages/Ticket';
import Send from '../pages/Send';

import SvgLocation from '../assets/SvgLocation';
import SvgBookMark from '../assets/SvgBookMark';
import SvgTicket from '../assets/SvgTicket';
import SvgSend from '../assets/SvgSend';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackHome({navigation, route}) {
  /*   if (route.state.routes[route.state.index].name === 'Details') {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  } */

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          height: 68,
          paddingHorizontal: 25,
          paddingBottom: 5,
          backgroundColor: '#000',
          borderTopColor: 'transparent',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'Home':
              return <SvgLocation fill={focused ? '#4096fe' : '#414141'} />;
            case 'BookMark':
              return <SvgBookMark fill={focused ? '#4096fe' : '#414141'} />;
            case 'Ticket':
              return <SvgTicket fill={focused ? '#4096fe' : '#414141'} />;
            case 'Send':
              return <SvgSend fill={focused ? '#4096fe' : '#414141'} />;
            default:
              break;
          }
        },
      })}>
      <Tab.Screen name="Home" component={StackHome} />
      <Tab.Screen name="BookMark" component={BookMark} />
      <Tab.Screen name="Ticket" component={Ticket} />
      <Tab.Screen name="Send" component={Send} />
    </Tab.Navigator>
  );
}
