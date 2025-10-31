import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={[styles.container, visible && styles.activeContainer]}>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        activeOpacity={0.8}
      >
        {children}
      </TouchableOpacity>

      {visible && (
        <View style={styles.tooltip}>
          <Text style={styles.text}>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
  },
  activeContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // subtle gray background
    borderRadius: 8,
  },
  tooltip: {
    position: "absolute",
    top: -45,
    backgroundColor: "#333",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    zIndex: 10,
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Tooltip;
