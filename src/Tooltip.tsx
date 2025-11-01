import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  title?: string;
  content: string;
  titleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  width?: number;
  maxWidth?: number;
  position?: TooltipPosition;
  style?: StyleProp<ViewStyle>;
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
  position = "top",
  style,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const getTooltipPosition = (): ViewStyle => {
    switch (position) {
      case "bottom":
        return { top: "100%", marginTop: 8, alignSelf: "center" };
      case "left":
        return { right: "100%", marginRight: 8 };
      case "right":
        return { left: "100%", marginLeft: 8 };
      case "top":
      default:
        return { bottom: "100%", marginBottom: 8, alignSelf: "center" };
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        {children}
      </TouchableOpacity>

      {visible && (
        <View style={[styles.tooltip, { width, maxWidth }, getTooltipPosition()]}>
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
    alignItems: "center",
    justifyContent: "center",
  },
  tooltip: {
    position: "absolute",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
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
