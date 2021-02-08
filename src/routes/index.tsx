import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import BookMark from '../pages/BookMark';
import Ticket from '../pages/Ticket';
import Send from '../pages/Send';

import SvgLocation from '../assets/SvgLocation';
import SvgBookMark from '../assets/SvgBookMark';
import SvgTicket from '../assets/SvgTicket';
import SvgSend from '../assets/SvgSend';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          position: 'relative',
          height: 67,
          paddingVertical: 5,
          paddingHorizontal: 25,
          paddingBottom: 5,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#000',
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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="BookMark" component={BookMark} />
      <Tab.Screen name="Ticket" component={Ticket} />
      <Tab.Screen name="Send" component={Send} />
    </Tab.Navigator>
  );
}
