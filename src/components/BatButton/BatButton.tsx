import React from 'react';
import {Text} from 'react-native';
import {styles} from './BatButtonStyles';

type BatButtonProps = {
  isActive: boolean;
  isFormActive?: boolean;
  onPress?: () => void;
};

export function BatButton({ isActive, isFormActive, onPress }: BatButtonProps) {

  const buttonText = isActive ? 'DEACTIVATE BAT SINAL' : (isFormActive ? 'ENVIAR' : 'ACTIVATE BAT SINAL');

  return (

    <Text onPress={onPress} style={styles.button}>{buttonText}</Text>
  );
}
