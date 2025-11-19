import React from 'react';
import { View } from 'react-native';
import style from './Button.style';
interface IButtonProps {
  children: any;
  meta?: string;
  bgcolor: 'tomato' | 'skyblue';
}
const Button: React.FC<IButtonProps> = ({
  children,
  meta = 'defaultValue',
  bgcolor = 'tomato',
}) => {
  console.log(meta);
  return (
    <View style={[style.container, { backgroundColor: bgcolor }]}>
      {children}
    </View>
  );
};

export default Button;
