import * as React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const App = ({componentId}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{backgroundColor: 'red'}}
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              name: 'navigation.playground.WelcomeScreen1',
              passProps: {
                text: 'Pushed screen'
              },
              options: {
                topBar: {
                  title: {
                    text: 'Pushed screen title'
                  }
                }
              }
            }
          })
        }>
        <Text>go Forward</Text>
      </TouchableOpacity>
      <Text>Sample</Text>
    </SafeAreaView>
  );
};
const l = e => {
  console.log(e);
  return e;
};

export default App;
