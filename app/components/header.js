import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.menuStyle} source={require('../../assets/Icons/menu_light.png')} />
            <Text style={styles.titleStyle}>ensom</Text>
            <Image style={styles.sunStyle} source={require('../../assets/Icons/sun.png')} />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: windowHeight * .05,
        width: '100%'
    },
    menuStyle: {
        marginLeft: 30,
        height: windowHeight * .05,
        width: windowHeight * .05
    },
    titleStyle: {
        fontFamily: 'Sydney-Bold',
        fontSize: windowWidth * 0.082

    },
    sunStyle: {
        marginRight: 30,
        height: windowHeight * .05,
        width: windowHeight * .05
    },
})