import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
