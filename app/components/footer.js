import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Themes } from '../../assets/Themes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Footer = () => {
    return (
        <View style={styles.footer}>
        <View style={styles.bottomBarIcons}>
          <Image style={styles.discoverIcon} source={require('../../assets/Icons/discover_light.png')}></Image>
          <Image style={styles.heartIcon} source={require('../../assets/Icons/heart_light.png')}></Image>
          <Image style={styles.messageIcon} source={require('../../assets/Icons/messages_light.png')}></Image>
        </View>
        <View style={styles.bottomBarTextBox}>
          <Text style={styles.discoverText}>Discover</Text>
          <Text style={styles.heartText}>Matches</Text>
          <Text style={styles.messagesText}>DMs</Text>
        </View>
      </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        flex: 1.1,
        backgroundColor: Themes.light.navigation,
        width: '100%'
    },
    discoverIcon: {
        marginLeft: windowWidth * .13,
        height: windowHeight * .05,
        width: windowHeight * .05
    },
    heartIcon: {
        height: windowHeight * .05,
        width: windowHeight * .06,
        resizeMode: 'contain'
    },
    messageIcon: {
        marginRight: windowWidth * .13,
        height: windowHeight * .05,
        width: windowHeight * .05,
        resizeMode: 'contain'
    },
    discoverText: {
        fontFamily: 'Sydney',
        color: Themes.light.textSecondary,
        marginTop: 3,
        fontSize: windowWidth * .05,
        marginLeft: windowWidth * .1,
    },
    heartText: {
        fontFamily: 'Sydney',
        color: Themes.light.textSecondary,
        marginTop: 3,
        fontSize: windowWidth * .05,
    },
    messagesText: {
        fontFamily: 'Sydney',
        fontSize: windowWidth * .05,
        color: Themes.light.textSecondary,
        marginTop: 3,
        marginRight: windowWidth * .14,
    },
    bottomBarIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    bottomBarTextBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})