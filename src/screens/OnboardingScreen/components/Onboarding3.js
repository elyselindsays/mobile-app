import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styled from 'styled-components/native';
import React, { useState } from 'react';
import {
  DefaultInput,
  PrimaryButton,
  Timer,
  CodeEnter,
  H2,
  H3,
  H1,
} from '../../../components';
import {
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Res } from '../../../resources';


export const Onboarding3 = () => {

  const [showModal, setShowModal] = useState(false);




  const askLocation = async (e) => {
    console.log('AHHHHHHHHHHHHHHHHH')
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('PERMISSION GRANTED');
      } else {
        console.log('PERMISSION DENIED');
      }
    }
  };

  Geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (error) => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );

  return (
    <>
      <ImageBackground
        style={{ flex: 1, resizeMode: 'cover', width: null, height: null }}
        source={require('../../../assets/images/OverheadOnboarding3.jpg')}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>


          <View style={styles.blackModal}>
            <Text style={{ fontFamily: 'PlusJakartaSans-Bold', fontSize: 26, color: 'white', textAlign: 'center' }}>
              Let's see what gyms are close to you!
            </Text>
            <Image
              source={require('../../../assets/icons/locationServices.png')}
            />
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>
              Location services are required to find gyms near you and allow
              for proximity-based check-ins.
            </Text>
            <View style={{ width: '100%' }} >
              <PrimaryButton
                onPress={askLocation}
                text={'Share Location'}
                uppercase
              />
            </View>
          </View>

          {showModal && (
            <View style={{ backgroundColor: 'white' }}>
              <Text>Location Required</Text>
              <Text>
                In order to get the best of your GymHop experience, location
                services are required to easily find and check-in to gyms.{' '}
              </Text>
              <PrimaryButton text={'Share Location'} uppercase />
            </View>)}
        </View>


      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackModal: {
    backgroundColor: 'rgba(36, 36, 36, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    padding: 15,

  },
});
