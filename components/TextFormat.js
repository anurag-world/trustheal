import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Heading({ children, layoutStyle, style, align }) {
  return (
    <View style={[layoutStyle]}>
      <Text style={[styles.heading, { textAlign: align }, style]}>{children}</Text>
    </View>
  );
}

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: 700,
    color: '#292929',
  },
});
