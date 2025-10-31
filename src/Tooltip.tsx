import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

interface TooltipProps {
  title?: string;
  content: string;
  titleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  width?: number;
  maxWidth?: number;
  children: React.ReactNode;
}

const Tooltip = ({
  title,
  content,
  children,
  titleStyle,
  textStyle,
  width,
  maxWidth,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        {children}
      </TouchableOpacity>

      {visible && (
        <View style={[styles.tooltip, { width, maxWidth }]}>
          {title && (
            <View style={styles.titleRow}>
              <Text style={[styles.titleText, titleStyle]}>{title}</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={styles.closeIcon}>✕</Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={[styles.contentText, textStyle]}>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  tooltip: {
    position: "absolute",
    top: 25,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    marginBottom: 6,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  closeIcon: {
    fontSize: 16,
    color: "#888",
  },
  contentText: {
    color: "#333",
    fontSize: 14,
  },
});

export default Tooltip;
