import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const LinearGradientOnboardView = () => {
  return (
    <LinearGradient
      colors={['rgba(22, 22, 22, 0)', 'rgba(22, 22, 22, 1)']}
      style={{
        position: 'absolute',
        width: '100%',
        height: 354,
        zIndex: 0,
        bottom: 0,
      }}
    />
  );
};
