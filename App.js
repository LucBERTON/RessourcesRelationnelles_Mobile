import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ListRessources from './components/ListRessources';
import RessourceDetails from './components/RessourceDetails';
import { getData, TOKEN_KEY, Token_KEY, USER_KEY } from './service/StorageService';
import Login from './components/login/Login';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createNativeStackNavigator()

getData(USER_KEY)
  .then((data) => console.log(data))

export const UserContext = React.createContext({
  token: {
    value: '',
    setValue: (value) => { }
  },
  username: {
    value: '',
    setValue: (value) => { }
  },
})


export default function App() {
  const [token, setToken] = React.useState()
  const [username, setUsername] = React.useState()
  const contextValue = {
    token: {
      value: '',
      setValue: setToken
    },
    username: {
      value: '',
      setValue: setUsername
    },
  }

  React.useEffect(async () => {
    const usernameStorage = await getData(USER_KEY)
    const tokenStorage = await getData(TOKEN_KEY)
    setUsername(usernameStorage)
    setToken(tokenStorage)
  }, [])
  return (
    
    <NavigationContainer>
     
      <UserContext.Provider value={contextValue}>
        <Stack.Navigator>
          {
            (token && username) ? (
              <>
              <Stack.Screen name='home'>
              {
                (props) => {
                  return (
                    <SafeAreaView style={styles.container}>
                      <ListRessources {...props} />
                    </SafeAreaView>
                  )
                }
              }
              
              </Stack.Screen>
              <Stack.Screen name="ressourceDetails" component={RessourceDetails} />
              </>
            )
            :
            <Stack.Screen name="login" component={Login}/>
          }
          
          
          
        </Stack.Navigator>
      </UserContext.Provider>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
