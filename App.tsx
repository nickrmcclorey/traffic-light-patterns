/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren, ReactElement} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import GetLocation from 'react-native-get-location'

GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 60000,
})
.then(location => {
    console.log(location);
})
.catch(error => {
    const { code, message } = error;
    console.warn('hi')
    console.log(error);
    console.warn('check')
})

type Phase = {
  start: Date; // start time for this light pattern
  end: Date; // end time for this light pattern
  redLightDurationSeconds: number;
  greenLightDurationSeconds: number; // includes yellow light time
  direction: number;
}

type Light = {
  title: string;
  phases: Phase[];
}

type LightProps = PropsWithChildren<{
  light: Light;
}>;

function Light({children, light}: LightProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {light.title}
          </Text>
      <View style={styles.circle}><Text>29</Text></View>
      <Text>hi</Text>
    </View>
  );
}


function App(): ReactElement {

  function componentDidMount() {
    console.log('mounted')
  }

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  let count = 1;

  function increaseCount() {
    count += 1;

  }

  let debug = 'its here';

  let lights: Light[] = [
    {
      title: 'John R. Road X 17 Mile',
      phases: [],
    }
  ];
  let lightElements = lights.map(light => <Light light={light} key={light.title}></Light>)
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* <Light title="John R. Road X 16 Mile" phases={[]}></Light> */}
          {lightElements}
          <Text>{debug}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: "red"
  }
});

export default App;
