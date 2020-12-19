import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PartyListScreen from './src/screens/PartyListScreen';
import PartyShowScreen from './src/screens/PartyShowScreen';
import AnalyticsScreen from './src/screens/AnalyticsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Provider as CandidateProvider} from './src/context/CandidateContext';
import {Provider as PartyProvider} from './src/context/PartyContext';

const HomeStack = createStackNavigator();
const AnalyticsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="PartyListScreen"
        component={PartyListScreen}
        options={() => ({
          headerTitle: 'Partidos',
        })}
      />
      <HomeStack.Screen
        name="PartyShowScreen"
        component={PartyShowScreen}
        options={({route}) => ({
          headerTitle: route.params.partyName,
          headerBackTitle: 'Partidos',
        })}
      />
    </HomeStack.Navigator>
  );
};

const AnalyticsStackScreen = () => {
  return (
    <AnalyticsStack.Navigator>
      <AnalyticsStack.Screen
        name="AnalyticsScreen"
        component={AnalyticsScreen}
        options={() => ({
          headerTitle: 'Analítica',
        })}
      />
    </AnalyticsStack.Navigator>
  );
};

export default function App() {
  return (
    <PartyProvider>
      <CandidateProvider>
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              style: {
                margin: 0,
                paddingVertical: 5,
                backgroundColor: '#DC143C',
              },
              labelStyle: {
                marginBottom: 5,
              },
              activeTintColor: 'white',
              inactiveTintColor: '#c0c0c0',
            }}
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'Partidos') {
                  iconName = focused ? 'person' : 'person';
                } else if (route.name === 'Analítica') {
                  iconName = focused ? 'analytics' : 'analytics';
                } else if (route.name === 'Búsqueda') {
                  iconName = focused ? 'search' : 'search';
                }
                return (
                  <View style={{flexDirection: 'row'}}>
                    <MaterialIcons name={iconName} size={size} color={color} />
                  </View>
                );
              },
            })}>
            <Tab.Screen name="Partidos" component={HomeStackScreen} />
            <Tab.Screen name="Analítica" component={AnalyticsStackScreen} />
            <Tab.Screen name="Búsqueda" component={HomeStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </CandidateProvider>
    </PartyProvider>
  );
}
