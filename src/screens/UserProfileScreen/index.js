import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../hocs/screen';

import UserProfileScreenContainer from './containers/UserProfileScreenContainer';

export const UserProfileScreen = screen(
  props => {
    const navigation = useNavigation();
    return <UserProfileScreenContainer />;
  },
  {
    noHeader: true,
  },
);