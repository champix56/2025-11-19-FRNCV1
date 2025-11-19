import React from 'react';
import { Text, View } from 'react-native';

interface IButtonProps {
  children: any;
  meta?: string;
}
const Button: React.FC<IButtonProps> = ({ children, meta = 'defaultValue' }) => {
  console.log(meta);
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Button;
