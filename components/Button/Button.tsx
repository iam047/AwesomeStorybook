import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: theme.margins.xl,
    paddingVertical: 8,
    backgroundColor: "purple",
    alignSelf: "flex-start",
    borderRadius: 8,
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
}));
