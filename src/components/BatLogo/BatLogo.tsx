import React from 'react';
import {Image} from 'react-native';
import batLogo from '../../pictures/logo_bat_sinal.png';
import {styles} from './BatLogoStyles';

type BatLogoProps = {
  isActive: boolean;
  isFormActive: boolean;
};

export function BatLogo({ isActive, isFormActive}: BatLogoProps) {

  const logoBackground = isActive ? 'yellow' : 'white'
  
  if (!isFormActive) {
    return (
      <Image source={batLogo} style={{...styles.logo, backgroundColor: logoBackground}}/>
    );
  } else {
    return (
      <Image source={batLogo} style={{...styles.shortLogo}}/>
    );
  }

  

  
}