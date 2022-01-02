import * as React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  ScrollView
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';


export default class CreateStory extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../images/logo.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Story</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#15193c',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  fieldContainer: {
    flex: 0.85,
  },
  image: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputBox: {
    color: 'white',
    borderRadius: RFValue(10),
    borderColor: 'white',
    borderWidth: RFValue(1),
    paddingLeft: RFValue(10),
    margin: RFValue(10),
    // height: RFValue(40),
    padding: RFValue(5),
    fontFamily: 'BubbleGum-Sans',
  },
  submitButton: {
    marginVertical: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  }
});
