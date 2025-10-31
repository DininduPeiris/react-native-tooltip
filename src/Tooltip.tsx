import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.root}>
      {visible && (
        // Background overlay
        <Pressable style={styles.overlay} onPress={() => setVisible(false)} />
      )}

      <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // translucent gray/black overlay
    zIndex: 1,
  },
  container: {
    position: "relative",
    alignItems: "center",
    zIndex: 2, // ensures tooltip and trigger appear above overlay
  },
  tooltip: {
    position: "absolute",
    top: -45,
    backgroundColor: "#333",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    zIndex: 3,
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Tooltip;
