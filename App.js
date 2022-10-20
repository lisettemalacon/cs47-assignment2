import AppLoading from 'expo-app-loading';
import { StyleSheet, View, StatusBar, Text, Image, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons } from './assets/Themes';
import Header from './app/components/header';
import Body from './app/components/body';
import Footer from './app/components/footer';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);

  return (
    <View style={styles.container}>
      <Header></Header>
      <Body></Body>
      <View style={styles.blankSpace}></View>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blankSpace: {
    flex: 1
  }
});
