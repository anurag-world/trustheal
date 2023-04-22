import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function Heading({ children, layoutStyle, style, align }) {
  return (
    <View style={[layoutStyle]}>
      <Text style={[styles.heading, { textAlign: align }, style]}>
        {children}
      </Text>
    </View>
  );
}

// function SubText({ children, layoutStyle, style, align, grey }) {
//   return (
//     <View style={[layoutStyle]}>
//       <Text
//         style={[
//           common.fontNotoRegular,
//           common.fs14,
//           grey ? common.textGrey : common.textDark,
//           { textAlign: align },
//           style,
//         ]}
//       >
//         {children}
//       </Text>
//     </View>
//   );
// }

// function ErrorText({ children, layoutStyle, style, align }) {
//   return (
//     <View style={[layoutStyle]}>
//       <Text
//         style={[
//           common.fontNotoRegular,
//           common.fs14,
//           common.textError,
//           { textAlign: align },
//           style,
//         ]}
//       >
//         {children}
//       </Text>
//     </View>
//   );
// }

// function LinkText({ children, onPress, style, layoutStyle, align }) {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.8}
//       onPress={onPress}
//       style={[layoutStyle]}
//     >
//       <Text
//         style={[
//           common.fontNotoBold700,
//           common.fs14,
//           common.textPrimary,
//           { textAlign: align },
//           style,
//         ]}
//       >
//         {children}
//       </Text>
//     </TouchableOpacity>
//   );
// }

export { Heading };

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: 700,
    color: "#292929",
  },
});
