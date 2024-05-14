import React, { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View } from "react-native";
import MapboxGL from "@rnmapbox/maps";

export default function Game() {
  return (
    <ThemedView>
      <MapboxGL.MapView style={{ flex: 1 }}>
        <MapboxGL.Camera zoomLevel={9} centerCoordinate={[-74.5, 40]} />
      </MapboxGL.MapView>
    </ThemedView>
  );
}
