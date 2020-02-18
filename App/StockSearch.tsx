import * as React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

const App = ({componentId}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => Navigation.pop(componentId)} >
        <Text>
          Search
        </Text>
      </TouchableOpacity>
      <Text>Sample</Text>
    </SafeAreaView>
  );
};

export default App;
