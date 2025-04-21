import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeStack from './screens/HomeStack';
import GroupsStack from './screens/GroupsStack';
import CommunitiesStack from './screens/CommunitiesStack';
import ProfileStack from './screens/ProfileStack';

const Tab = createBottomTabNavigator();

// 🎨 Глобальная тёмная тема
const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000',       // фон всего приложения
    card: '#000',             // фон хедера и таббара
    text: '#fff',             // текст заголовков и элементов
    border: '#222',
    notification: '#f00',
    primary: '#fff',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,          
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: {
            backgroundColor: '#000',
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#888',
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            switch (route.name) {
              case 'Лента':
                iconName = 'fire';
                break;
              case 'Группы':
                iconName = 'users';
                break;
              case 'Сообщества':
                iconName = 'layer-group';
                break;
              case 'Профиль':
                iconName = 'user';
                break;
              default:
                iconName = 'circle';
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Лента" component={HomeStack} />
        <Tab.Screen name="Группы" component={GroupsStack} />
        <Tab.Screen name="Сообщества" component={CommunitiesStack} />
        <Tab.Screen name="Профиль" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
