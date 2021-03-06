import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
//import SignIn from './src/components/sign-in'
//import HelloWorld from './src/hello-world'
import EventList from './src/components/event-list'
import fixtures from './fixtures.json'
import img from './assets/images/logo.png'


const events = Object.entries(fixtures.events).map(([uid, event]) => ({...event, uid}))

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image style = {styles.image}
                 source = {img}
                 resizeMode = {Image.resizeMode.contain}
          />
          <EventList events = {events}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
    image: {
        width: '100%',
        height: 100
    }
});

