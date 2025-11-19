import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IButtonProps {
  children: any;
  meta?: string;
}
const Button: React.FC<IButtonProps> = ({
  children,
  meta = 'defaultValue',
}) => {
  console.log(meta);
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});

export default Button;
