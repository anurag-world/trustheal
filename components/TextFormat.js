import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../style/theme';

function Heading({ children, layoutStyle, style, align }) {
  return (
    <View style={[layoutStyle]}>
      <Text style={[styles.heading, { textAlign: align }, style]}>{children}</Text>
    </View>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { Heading };

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: 700,
    color: theme.colors.text.header,
  },
});

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  layoutStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  align: PropTypes.string,
};

Heading.defaultProps = {
  children: '',
  layoutStyle: undefined,
  style: undefined,
  align: 'auto',
};
