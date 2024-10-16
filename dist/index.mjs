// proto/osi_detectedobject.ts
var DetectedItemHeader_MeasurementState = /* @__PURE__ */ ((DetectedItemHeader_MeasurementState2) => {
  DetectedItemHeader_MeasurementState2[DetectedItemHeader_MeasurementState2["UNKNOWN"] = 0] = "UNKNOWN";
  DetectedItemHeader_MeasurementState2[DetectedItemHeader_MeasurementState2["OTHER"] = 1] = "OTHER";
  DetectedItemHeader_MeasurementState2[DetectedItemHeader_MeasurementState2["MEASURED"] = 2] = "MEASURED";
  DetectedItemHeader_MeasurementState2[DetectedItemHeader_MeasurementState2["PREDICTED"] = 3] = "PREDICTED";
  return DetectedItemHeader_MeasurementState2;
})(DetectedItemHeader_MeasurementState || {});
var DetectedMovingObject_ReferencePoint = /* @__PURE__ */ ((DetectedMovingObject_ReferencePoint2) => {
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["UNKNOWN"] = 0] = "UNKNOWN";
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["OTHER"] = 1] = "OTHER";
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["CENTER"] = 2] = "CENTER";
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["MIDDLE_LEFT"] = 3] = "MIDDLE_LEFT";
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["MIDDLE_RIGHT"] = 4] = "MIDDLE_RIGHT";
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["REAR_MIDDLE"] = 5] = "REAR_MIDDLE";
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["REAR_LEFT"] = 6] = "REAR_LEFT";
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["REAR_RIGHT"] = 7] = "REAR_RIGHT";
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["FRONT_MIDDLE"] = 8] = "FRONT_MIDDLE";
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["FRONT_LEFT"] = 9] = "FRONT_LEFT";
  DetectedMovingObject_ReferencePoint2[DetectedMovingObject_ReferencePoint2["FRONT_RIGHT"] = 10] = "FRONT_RIGHT";
  return DetectedMovingObject_ReferencePoint2;
})(DetectedMovingObject_ReferencePoint || {});
var DetectedMovingObject_MovementState = /* @__PURE__ */ ((DetectedMovingObject_MovementState2) => {
  DetectedMovingObject_MovementState2[DetectedMovingObject_MovementState2["UNKNOWN"] = 0] = "UNKNOWN";
  DetectedMovingObject_MovementState2[DetectedMovingObject_MovementState2["OTHER"] = 1] = "OTHER";
  DetectedMovingObject_MovementState2[DetectedMovingObject_MovementState2["STATIONARY"] = 2] = "STATIONARY";
  DetectedMovingObject_MovementState2[DetectedMovingObject_MovementState2["MOVING"] = 3] = "MOVING";
  DetectedMovingObject_MovementState2[DetectedMovingObject_MovementState2["STOPPED"] = 4] = "STOPPED";
  return DetectedMovingObject_MovementState2;
})(DetectedMovingObject_MovementState || {});

// proto/osi_detectedtrafficsign.ts
var DetectedTrafficSign_DetectedMainSign_Geometry = /* @__PURE__ */ ((DetectedTrafficSign_DetectedMainSign_Geometry2) => {
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["UNKNOWN"] = 0] = "UNKNOWN";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["OTHER"] = 1] = "OTHER";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["CIRCLE"] = 2] = "CIRCLE";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["TRIANGLE_TOP"] = 3] = "TRIANGLE_TOP";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["TRIANGLE_DOWN"] = 4] = "TRIANGLE_DOWN";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["SQUARE"] = 5] = "SQUARE";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["POLE"] = 6] = "POLE";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["RECTANGLE"] = 7] = "RECTANGLE";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["PLATE"] = 8] = "PLATE";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["DIAMOND"] = 9] = "DIAMOND";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["ARROW_LEFT"] = 10] = "ARROW_LEFT";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["ARROW_RIGHT"] = 11] = "ARROW_RIGHT";
  DetectedTrafficSign_DetectedMainSign_Geometry2[DetectedTrafficSign_DetectedMainSign_Geometry2["OCTAGON"] = 12] = "OCTAGON";
  return DetectedTrafficSign_DetectedMainSign_Geometry2;
})(DetectedTrafficSign_DetectedMainSign_Geometry || {});

// proto/osi_environment.ts
var EnvironmentalConditions_Precipitation = /* @__PURE__ */ ((EnvironmentalConditions_Precipitation2) => {
  EnvironmentalConditions_Precipitation2[EnvironmentalConditions_Precipitation2["UNKNOWN"] = 0] = "UNKNOWN";
  EnvironmentalConditions_Precipitation2[EnvironmentalConditions_Precipitation2["OTHER"] = 1] = "OTHER";
  EnvironmentalConditions_Precipitation2[EnvironmentalConditions_Precipitation2["NONE"] = 2] = "NONE";
  EnvironmentalConditions_Precipitation2[EnvironmentalConditions_Precipitation2["VERY_LIGHT"] = 3] = "VERY_LIGHT";
  EnvironmentalConditions_Precipitation2[EnvironmentalConditions_Precipitation2["LIGHT"] = 4] = "LIGHT";
  EnvironmentalConditions_Precipitation2[EnvironmentalConditions_Precipitation2["MODERATE"] = 5] = "MODERATE";
  EnvironmentalConditions_Precipitation2[EnvironmentalConditions_Precipitation2["HEAVY"] = 6] = "HEAVY";
  EnvironmentalConditions_Precipitation2[EnvironmentalConditions_Precipitation2["VERY_HEAVY"] = 7] = "VERY_HEAVY";
  EnvironmentalConditions_Precipitation2[EnvironmentalConditions_Precipitation2["EXTREME"] = 8] = "EXTREME";
  return EnvironmentalConditions_Precipitation2;
})(EnvironmentalConditions_Precipitation || {});
var EnvironmentalConditions_Fog = /* @__PURE__ */ ((EnvironmentalConditions_Fog2) => {
  EnvironmentalConditions_Fog2[EnvironmentalConditions_Fog2["UNKOWN"] = 0] = "UNKOWN";
  EnvironmentalConditions_Fog2[EnvironmentalConditions_Fog2["OTHER"] = 1] = "OTHER";
  EnvironmentalConditions_Fog2[EnvironmentalConditions_Fog2["EXCELLENT_VISIBILITY"] = 2] = "EXCELLENT_VISIBILITY";
  EnvironmentalConditions_Fog2[EnvironmentalConditions_Fog2["GOOD_VISIBILITY"] = 3] = "GOOD_VISIBILITY";
  EnvironmentalConditions_Fog2[EnvironmentalConditions_Fog2["MODERATE_VISIBILITY"] = 4] = "MODERATE_VISIBILITY";
  EnvironmentalConditions_Fog2[EnvironmentalConditions_Fog2["POOR_VISIBILITY"] = 5] = "POOR_VISIBILITY";
  EnvironmentalConditions_Fog2[EnvironmentalConditions_Fog2["MIST"] = 6] = "MIST";
  EnvironmentalConditions_Fog2[EnvironmentalConditions_Fog2["LIGHT"] = 7] = "LIGHT";
  EnvironmentalConditions_Fog2[EnvironmentalConditions_Fog2["THICK"] = 8] = "THICK";
  EnvironmentalConditions_Fog2[EnvironmentalConditions_Fog2["DENSE"] = 9] = "DENSE";
  return EnvironmentalConditions_Fog2;
})(EnvironmentalConditions_Fog || {});
var EnvironmentalConditions_AmbientIllumination = /* @__PURE__ */ ((EnvironmentalConditions_AmbientIllumination2) => {
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["UNKNOWN"] = 0] = "UNKNOWN";
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["OTHER"] = 1] = "OTHER";
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["LEVEL1"] = 2] = "LEVEL1";
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["LEVEL2"] = 3] = "LEVEL2";
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["LEVEL3"] = 4] = "LEVEL3";
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["LEVEL4"] = 5] = "LEVEL4";
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["LEVEL5"] = 6] = "LEVEL5";
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["LEVEL6"] = 7] = "LEVEL6";
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["LEVEL7"] = 8] = "LEVEL7";
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["LEVEL8"] = 9] = "LEVEL8";
  EnvironmentalConditions_AmbientIllumination2[EnvironmentalConditions_AmbientIllumination2["LEVEL9"] = 10] = "LEVEL9";
  return EnvironmentalConditions_AmbientIllumination2;
})(EnvironmentalConditions_AmbientIllumination || {});

// proto/osi_featuredata.ts
var DetectionClassification = /* @__PURE__ */ ((DetectionClassification2) => {
  DetectionClassification2[DetectionClassification2["UNKNOWN"] = 0] = "UNKNOWN";
  DetectionClassification2[DetectionClassification2["OTHER"] = 1] = "OTHER";
  DetectionClassification2[DetectionClassification2["INVALID"] = 2] = "INVALID";
  DetectionClassification2[DetectionClassification2["CLUTTER"] = 3] = "CLUTTER";
  DetectionClassification2[DetectionClassification2["OVERDRIVABLE"] = 4] = "OVERDRIVABLE";
  DetectionClassification2[DetectionClassification2["UNDERDRIVABLE"] = 5] = "UNDERDRIVABLE";
  return DetectionClassification2;
})(DetectionClassification || {});
var SensorDetectionHeader_DataQualifier = /* @__PURE__ */ ((SensorDetectionHeader_DataQualifier2) => {
  SensorDetectionHeader_DataQualifier2[SensorDetectionHeader_DataQualifier2["UNKNOWN"] = 0] = "UNKNOWN";
  SensorDetectionHeader_DataQualifier2[SensorDetectionHeader_DataQualifier2["OTHER"] = 1] = "OTHER";
  SensorDetectionHeader_DataQualifier2[SensorDetectionHeader_DataQualifier2["AVAILABLE"] = 2] = "AVAILABLE";
  SensorDetectionHeader_DataQualifier2[SensorDetectionHeader_DataQualifier2["AVAILABLE_REDUCED"] = 3] = "AVAILABLE_REDUCED";
  SensorDetectionHeader_DataQualifier2[SensorDetectionHeader_DataQualifier2["NOT_AVAILABLE"] = 4] = "NOT_AVAILABLE";
  SensorDetectionHeader_DataQualifier2[SensorDetectionHeader_DataQualifier2["BLINDNESS"] = 5] = "BLINDNESS";
  SensorDetectionHeader_DataQualifier2[SensorDetectionHeader_DataQualifier2["TEMPORARY_AVAILABLE"] = 6] = "TEMPORARY_AVAILABLE";
  SensorDetectionHeader_DataQualifier2[SensorDetectionHeader_DataQualifier2["INVALID"] = 7] = "INVALID";
  return SensorDetectionHeader_DataQualifier2;
})(SensorDetectionHeader_DataQualifier || {});
var SensorDetectionHeader_ExtendedQualifier = /* @__PURE__ */ ((SensorDetectionHeader_ExtendedQualifier2) => {
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["UNKNOWN"] = 0] = "UNKNOWN";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["OTHER"] = 1] = "OTHER";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["NORMAL_OPERATION_MODE"] = 2] = "NORMAL_OPERATION_MODE";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["POWER_UP_OR_DOWN"] = 3] = "POWER_UP_OR_DOWN";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["SENSOR_NOT_CALIBRATED"] = 4] = "SENSOR_NOT_CALIBRATED";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["SENSOR_BLOCKED"] = 5] = "SENSOR_BLOCKED";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["SENSOR_MISALIGNED"] = 6] = "SENSOR_MISALIGNED";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["BAD_SENSOR_ENVIRONMENTAL_CONDITION"] = 7] = "BAD_SENSOR_ENVIRONMENTAL_CONDITION";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["REDUCED_FIELD_OF_VIEW"] = 8] = "REDUCED_FIELD_OF_VIEW";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["INPUT_NOT_AVAILABLE"] = 9] = "INPUT_NOT_AVAILABLE";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["INTERNAL_REASON"] = 10] = "INTERNAL_REASON";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["EXTERNAL_DISTURBANCE"] = 11] = "EXTERNAL_DISTURBANCE";
  SensorDetectionHeader_ExtendedQualifier2[SensorDetectionHeader_ExtendedQualifier2["BEGINNING_BLOCKAGE"] = 12] = "BEGINNING_BLOCKAGE";
  return SensorDetectionHeader_ExtendedQualifier2;
})(SensorDetectionHeader_ExtendedQualifier || {});
var CameraDetection_Color = /* @__PURE__ */ ((CameraDetection_Color2) => {
  CameraDetection_Color2[CameraDetection_Color2["UNKNOWN"] = 0] = "UNKNOWN";
  CameraDetection_Color2[CameraDetection_Color2["OTHER"] = 1] = "OTHER";
  CameraDetection_Color2[CameraDetection_Color2["BLACK"] = 2] = "BLACK";
  CameraDetection_Color2[CameraDetection_Color2["GREY"] = 3] = "GREY";
  CameraDetection_Color2[CameraDetection_Color2["WHITE"] = 4] = "WHITE";
  CameraDetection_Color2[CameraDetection_Color2["YELLOW"] = 5] = "YELLOW";
  CameraDetection_Color2[CameraDetection_Color2["ORANGE"] = 6] = "ORANGE";
  CameraDetection_Color2[CameraDetection_Color2["RED"] = 7] = "RED";
  CameraDetection_Color2[CameraDetection_Color2["VIOLET"] = 8] = "VIOLET";
  CameraDetection_Color2[CameraDetection_Color2["BLUE"] = 9] = "BLUE";
  CameraDetection_Color2[CameraDetection_Color2["GREEN"] = 10] = "GREEN";
  CameraDetection_Color2[CameraDetection_Color2["REFLECTIVE"] = 11] = "REFLECTIVE";
  return CameraDetection_Color2;
})(CameraDetection_Color || {});
var CameraDetection_ImageShapeType = /* @__PURE__ */ ((CameraDetection_ImageShapeType2) => {
  CameraDetection_ImageShapeType2[CameraDetection_ImageShapeType2["UNKNOWN"] = 0] = "UNKNOWN";
  CameraDetection_ImageShapeType2[CameraDetection_ImageShapeType2["OTHER"] = 1] = "OTHER";
  CameraDetection_ImageShapeType2[CameraDetection_ImageShapeType2["POINT"] = 2] = "POINT";
  CameraDetection_ImageShapeType2[CameraDetection_ImageShapeType2["BOX"] = 3] = "BOX";
  CameraDetection_ImageShapeType2[CameraDetection_ImageShapeType2["ELLIPSE"] = 4] = "ELLIPSE";
  CameraDetection_ImageShapeType2[CameraDetection_ImageShapeType2["POLYGON"] = 5] = "POLYGON";
  CameraDetection_ImageShapeType2[CameraDetection_ImageShapeType2["POLYLINE"] = 6] = "POLYLINE";
  CameraDetection_ImageShapeType2[CameraDetection_ImageShapeType2["POINT_CLOUD"] = 7] = "POINT_CLOUD";
  return CameraDetection_ImageShapeType2;
})(CameraDetection_ImageShapeType || {});

// proto/osi_lane.ts
var Lane_Classification_Type = /* @__PURE__ */ ((Lane_Classification_Type2) => {
  Lane_Classification_Type2[Lane_Classification_Type2["UNKNOWN"] = 0] = "UNKNOWN";
  Lane_Classification_Type2[Lane_Classification_Type2["OTHER"] = 1] = "OTHER";
  Lane_Classification_Type2[Lane_Classification_Type2["DRIVING"] = 2] = "DRIVING";
  Lane_Classification_Type2[Lane_Classification_Type2["NONDRIVING"] = 3] = "NONDRIVING";
  Lane_Classification_Type2[Lane_Classification_Type2["INTERSECTION"] = 4] = "INTERSECTION";
  return Lane_Classification_Type2;
})(Lane_Classification_Type || {});
var LaneBoundary_Classification_Type = /* @__PURE__ */ ((LaneBoundary_Classification_Type2) => {
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["UNKNOWN"] = 0] = "UNKNOWN";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["OTHER"] = 1] = "OTHER";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["NO_LINE"] = 2] = "NO_LINE";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["SOLID_LINE"] = 3] = "SOLID_LINE";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["DASHED_LINE"] = 4] = "DASHED_LINE";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["BOTTS_DOTS"] = 5] = "BOTTS_DOTS";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["ROAD_EDGE"] = 6] = "ROAD_EDGE";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["SNOW_EDGE"] = 7] = "SNOW_EDGE";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["GRASS_EDGE"] = 8] = "GRASS_EDGE";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["GRAVEL_EDGE"] = 9] = "GRAVEL_EDGE";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["SOIL_EDGE"] = 10] = "SOIL_EDGE";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["GUARD_RAIL"] = 11] = "GUARD_RAIL";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["CURB"] = 12] = "CURB";
  LaneBoundary_Classification_Type2[LaneBoundary_Classification_Type2["STRUCTURE"] = 13] = "STRUCTURE";
  return LaneBoundary_Classification_Type2;
})(LaneBoundary_Classification_Type || {});
var LaneBoundary_Classification_Color = /* @__PURE__ */ ((LaneBoundary_Classification_Color2) => {
  LaneBoundary_Classification_Color2[LaneBoundary_Classification_Color2["UNKNOWN"] = 0] = "UNKNOWN";
  LaneBoundary_Classification_Color2[LaneBoundary_Classification_Color2["OTHER"] = 1] = "OTHER";
  LaneBoundary_Classification_Color2[LaneBoundary_Classification_Color2["NONE"] = 2] = "NONE";
  LaneBoundary_Classification_Color2[LaneBoundary_Classification_Color2["WHITE"] = 3] = "WHITE";
  LaneBoundary_Classification_Color2[LaneBoundary_Classification_Color2["YELLOW"] = 4] = "YELLOW";
  LaneBoundary_Classification_Color2[LaneBoundary_Classification_Color2["RED"] = 5] = "RED";
  LaneBoundary_Classification_Color2[LaneBoundary_Classification_Color2["BLUE"] = 6] = "BLUE";
  LaneBoundary_Classification_Color2[LaneBoundary_Classification_Color2["GREEN"] = 7] = "GREEN";
  LaneBoundary_Classification_Color2[LaneBoundary_Classification_Color2["VIOLET"] = 8] = "VIOLET";
  return LaneBoundary_Classification_Color2;
})(LaneBoundary_Classification_Color || {});

// proto/osi_object.ts
var StationaryObject_Classification_Type = /* @__PURE__ */ ((StationaryObject_Classification_Type2) => {
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["UNKNOWN"] = 0] = "UNKNOWN";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["OTHER"] = 1] = "OTHER";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["BRIDGE"] = 2] = "BRIDGE";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["BUILDING"] = 3] = "BUILDING";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["POLE"] = 4] = "POLE";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["PYLON"] = 5] = "PYLON";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["DELINEATOR"] = 6] = "DELINEATOR";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["TREE"] = 7] = "TREE";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["BARRIER"] = 8] = "BARRIER";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["VEGETATION"] = 9] = "VEGETATION";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["CURBSTONE"] = 10] = "CURBSTONE";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["WALL"] = 11] = "WALL";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["VERTICAL_STRUCTURE"] = 12] = "VERTICAL_STRUCTURE";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["RECTANGULAR_STRUCTURE"] = 13] = "RECTANGULAR_STRUCTURE";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["OVERHEAD_STRUCTURE"] = 14] = "OVERHEAD_STRUCTURE";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["REFLECTIVE_STRUCTURE"] = 15] = "REFLECTIVE_STRUCTURE";
  StationaryObject_Classification_Type2[StationaryObject_Classification_Type2["CONSTRUCTION_SITE_ELEMENT"] = 16] = "CONSTRUCTION_SITE_ELEMENT";
  return StationaryObject_Classification_Type2;
})(StationaryObject_Classification_Type || {});
var StationaryObject_Classification_Material = /* @__PURE__ */ ((StationaryObject_Classification_Material2) => {
  StationaryObject_Classification_Material2[StationaryObject_Classification_Material2["UNKNOWN"] = 0] = "UNKNOWN";
  StationaryObject_Classification_Material2[StationaryObject_Classification_Material2["OTHER"] = 1] = "OTHER";
  StationaryObject_Classification_Material2[StationaryObject_Classification_Material2["WOOD"] = 2] = "WOOD";
  StationaryObject_Classification_Material2[StationaryObject_Classification_Material2["PLASTIC"] = 3] = "PLASTIC";
  StationaryObject_Classification_Material2[StationaryObject_Classification_Material2["CONCRETE"] = 4] = "CONCRETE";
  StationaryObject_Classification_Material2[StationaryObject_Classification_Material2["METAL"] = 5] = "METAL";
  StationaryObject_Classification_Material2[StationaryObject_Classification_Material2["STONE"] = 6] = "STONE";
  StationaryObject_Classification_Material2[StationaryObject_Classification_Material2["GLAS"] = 7] = "GLAS";
  StationaryObject_Classification_Material2[StationaryObject_Classification_Material2["MUD"] = 8] = "MUD";
  return StationaryObject_Classification_Material2;
})(StationaryObject_Classification_Material || {});
var StationaryObject_Classification_Density = /* @__PURE__ */ ((StationaryObject_Classification_Density2) => {
  StationaryObject_Classification_Density2[StationaryObject_Classification_Density2["UNKNOWN"] = 0] = "UNKNOWN";
  StationaryObject_Classification_Density2[StationaryObject_Classification_Density2["OTHER"] = 1] = "OTHER";
  StationaryObject_Classification_Density2[StationaryObject_Classification_Density2["SOLID"] = 2] = "SOLID";
  StationaryObject_Classification_Density2[StationaryObject_Classification_Density2["SMALL_MESH"] = 3] = "SMALL_MESH";
  StationaryObject_Classification_Density2[StationaryObject_Classification_Density2["MEDIAN_MESH"] = 4] = "MEDIAN_MESH";
  StationaryObject_Classification_Density2[StationaryObject_Classification_Density2["LARGE_MESH"] = 5] = "LARGE_MESH";
  StationaryObject_Classification_Density2[StationaryObject_Classification_Density2["OPEN"] = 6] = "OPEN";
  return StationaryObject_Classification_Density2;
})(StationaryObject_Classification_Density || {});
var StationaryObject_Classification_Color = /* @__PURE__ */ ((StationaryObject_Classification_Color2) => {
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["UNKNOWN"] = 0] = "UNKNOWN";
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["OTHER"] = 1] = "OTHER";
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["YELLOW"] = 2] = "YELLOW";
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["GREEN"] = 3] = "GREEN";
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["BLUE"] = 4] = "BLUE";
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["VIOLET"] = 5] = "VIOLET";
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["RED"] = 6] = "RED";
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["ORANGE"] = 7] = "ORANGE";
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["BLACK"] = 8] = "BLACK";
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["GREY"] = 9] = "GREY";
  StationaryObject_Classification_Color2[StationaryObject_Classification_Color2["WHITE"] = 10] = "WHITE";
  return StationaryObject_Classification_Color2;
})(StationaryObject_Classification_Color || {});
var MovingObject_Type = /* @__PURE__ */ ((MovingObject_Type2) => {
  MovingObject_Type2[MovingObject_Type2["UNKNOWN"] = 0] = "UNKNOWN";
  MovingObject_Type2[MovingObject_Type2["OTHER"] = 1] = "OTHER";
  MovingObject_Type2[MovingObject_Type2["VEHICLE"] = 2] = "VEHICLE";
  MovingObject_Type2[MovingObject_Type2["PEDESTRIAN"] = 3] = "PEDESTRIAN";
  MovingObject_Type2[MovingObject_Type2["ANIMAL"] = 4] = "ANIMAL";
  return MovingObject_Type2;
})(MovingObject_Type || {});
var MovingObject_VehicleClassification_Type = /* @__PURE__ */ ((MovingObject_VehicleClassification_Type2) => {
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["UNKNOWN"] = 0] = "UNKNOWN";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["OTHER"] = 1] = "OTHER";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["SMALL_CAR"] = 2] = "SMALL_CAR";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["COMPACT_CAR"] = 3] = "COMPACT_CAR";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["MEDIUM_CAR"] = 4] = "MEDIUM_CAR";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["LUXURY_CAR"] = 5] = "LUXURY_CAR";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["DELIVERY_VAN"] = 6] = "DELIVERY_VAN";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["HEAVY_TRUCK"] = 7] = "HEAVY_TRUCK";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["SEMITRAILER"] = 8] = "SEMITRAILER";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["TRAILER"] = 9] = "TRAILER";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["MOTORBIKE"] = 10] = "MOTORBIKE";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["BICYCLE"] = 11] = "BICYCLE";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["BUS"] = 12] = "BUS";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["TRAM"] = 13] = "TRAM";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["TRAIN"] = 14] = "TRAIN";
  MovingObject_VehicleClassification_Type2[MovingObject_VehicleClassification_Type2["WHEELCHAIR"] = 15] = "WHEELCHAIR";
  return MovingObject_VehicleClassification_Type2;
})(MovingObject_VehicleClassification_Type || {});
var MovingObject_VehicleClassification_LightState_IndicatorState = /* @__PURE__ */ ((MovingObject_VehicleClassification_LightState_IndicatorState2) => {
  MovingObject_VehicleClassification_LightState_IndicatorState2[MovingObject_VehicleClassification_LightState_IndicatorState2["UNKNOWN"] = 0] = "UNKNOWN";
  MovingObject_VehicleClassification_LightState_IndicatorState2[MovingObject_VehicleClassification_LightState_IndicatorState2["OTHER"] = 1] = "OTHER";
  MovingObject_VehicleClassification_LightState_IndicatorState2[MovingObject_VehicleClassification_LightState_IndicatorState2["OFF"] = 2] = "OFF";
  MovingObject_VehicleClassification_LightState_IndicatorState2[MovingObject_VehicleClassification_LightState_IndicatorState2["LEFT"] = 3] = "LEFT";
  MovingObject_VehicleClassification_LightState_IndicatorState2[MovingObject_VehicleClassification_LightState_IndicatorState2["RIGHT"] = 4] = "RIGHT";
  MovingObject_VehicleClassification_LightState_IndicatorState2[MovingObject_VehicleClassification_LightState_IndicatorState2["WARNING"] = 5] = "WARNING";
  return MovingObject_VehicleClassification_LightState_IndicatorState2;
})(MovingObject_VehicleClassification_LightState_IndicatorState || {});
var MovingObject_VehicleClassification_LightState_GenericLightState = /* @__PURE__ */ ((MovingObject_VehicleClassification_LightState_GenericLightState2) => {
  MovingObject_VehicleClassification_LightState_GenericLightState2[MovingObject_VehicleClassification_LightState_GenericLightState2["UNKNOWN"] = 0] = "UNKNOWN";
  MovingObject_VehicleClassification_LightState_GenericLightState2[MovingObject_VehicleClassification_LightState_GenericLightState2["OTHER"] = 1] = "OTHER";
  MovingObject_VehicleClassification_LightState_GenericLightState2[MovingObject_VehicleClassification_LightState_GenericLightState2["OFF"] = 2] = "OFF";
  MovingObject_VehicleClassification_LightState_GenericLightState2[MovingObject_VehicleClassification_LightState_GenericLightState2["ON"] = 3] = "ON";
  MovingObject_VehicleClassification_LightState_GenericLightState2[MovingObject_VehicleClassification_LightState_GenericLightState2["FLASHING_BLUE"] = 4] = "FLASHING_BLUE";
  MovingObject_VehicleClassification_LightState_GenericLightState2[MovingObject_VehicleClassification_LightState_GenericLightState2["FLASHING_BLUE_AND_RED"] = 5] = "FLASHING_BLUE_AND_RED";
  MovingObject_VehicleClassification_LightState_GenericLightState2[MovingObject_VehicleClassification_LightState_GenericLightState2["FLASHING_AMBER"] = 6] = "FLASHING_AMBER";
  return MovingObject_VehicleClassification_LightState_GenericLightState2;
})(MovingObject_VehicleClassification_LightState_GenericLightState || {});
var MovingObject_VehicleClassification_LightState_BrakeLightState = /* @__PURE__ */ ((MovingObject_VehicleClassification_LightState_BrakeLightState2) => {
  MovingObject_VehicleClassification_LightState_BrakeLightState2[MovingObject_VehicleClassification_LightState_BrakeLightState2["UNKNOWN"] = 0] = "UNKNOWN";
  MovingObject_VehicleClassification_LightState_BrakeLightState2[MovingObject_VehicleClassification_LightState_BrakeLightState2["OTHER"] = 1] = "OTHER";
  MovingObject_VehicleClassification_LightState_BrakeLightState2[MovingObject_VehicleClassification_LightState_BrakeLightState2["OFF"] = 2] = "OFF";
  MovingObject_VehicleClassification_LightState_BrakeLightState2[MovingObject_VehicleClassification_LightState_BrakeLightState2["NORMAL"] = 3] = "NORMAL";
  MovingObject_VehicleClassification_LightState_BrakeLightState2[MovingObject_VehicleClassification_LightState_BrakeLightState2["STRONG"] = 4] = "STRONG";
  return MovingObject_VehicleClassification_LightState_BrakeLightState2;
})(MovingObject_VehicleClassification_LightState_BrakeLightState || {});

// proto/osi_occupant.ts
var Occupant_Classification_Seat = /* @__PURE__ */ ((Occupant_Classification_Seat2) => {
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["UNKNOWN"] = 0] = "UNKNOWN";
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["OTHER"] = 1] = "OTHER";
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["FRONT_LEFT"] = 2] = "FRONT_LEFT";
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["FRONT_RIGHT"] = 3] = "FRONT_RIGHT";
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["FRONT_MIDDLE"] = 4] = "FRONT_MIDDLE";
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["BACK_LEFT"] = 5] = "BACK_LEFT";
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["BACK_RIGHT"] = 6] = "BACK_RIGHT";
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["BACK_MIDDLE"] = 7] = "BACK_MIDDLE";
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["THIRD_ROW_LEFT"] = 8] = "THIRD_ROW_LEFT";
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["THIRD_ROW_RIGHT"] = 9] = "THIRD_ROW_RIGHT";
  Occupant_Classification_Seat2[Occupant_Classification_Seat2["THIRD_ROW_MIDDLE"] = 10] = "THIRD_ROW_MIDDLE";
  return Occupant_Classification_Seat2;
})(Occupant_Classification_Seat || {});
var Occupant_Classification_SteeringControl = /* @__PURE__ */ ((Occupant_Classification_SteeringControl2) => {
  Occupant_Classification_SteeringControl2[Occupant_Classification_SteeringControl2["UNKNOWN"] = 0] = "UNKNOWN";
  Occupant_Classification_SteeringControl2[Occupant_Classification_SteeringControl2["OTHER"] = 1] = "OTHER";
  Occupant_Classification_SteeringControl2[Occupant_Classification_SteeringControl2["NO_HAND"] = 2] = "NO_HAND";
  Occupant_Classification_SteeringControl2[Occupant_Classification_SteeringControl2["ONE_HAND"] = 3] = "ONE_HAND";
  Occupant_Classification_SteeringControl2[Occupant_Classification_SteeringControl2["BOTH_HANDS"] = 4] = "BOTH_HANDS";
  Occupant_Classification_SteeringControl2[Occupant_Classification_SteeringControl2["LEFT_HAND"] = 5] = "LEFT_HAND";
  Occupant_Classification_SteeringControl2[Occupant_Classification_SteeringControl2["RIGHT_HAND"] = 6] = "RIGHT_HAND";
  return Occupant_Classification_SteeringControl2;
})(Occupant_Classification_SteeringControl || {});

// proto/osi_roadmarking.ts
var RoadMarking_Classification_Type = /* @__PURE__ */ ((RoadMarking_Classification_Type2) => {
  RoadMarking_Classification_Type2[RoadMarking_Classification_Type2["UNKNOWN"] = 0] = "UNKNOWN";
  RoadMarking_Classification_Type2[RoadMarking_Classification_Type2["OTHER"] = 1] = "OTHER";
  RoadMarking_Classification_Type2[RoadMarking_Classification_Type2["PAINTED_TRAFFIC_SIGN"] = 2] = "PAINTED_TRAFFIC_SIGN";
  RoadMarking_Classification_Type2[RoadMarking_Classification_Type2["SYMBOLIC_TRAFFIC_SIGN"] = 3] = "SYMBOLIC_TRAFFIC_SIGN";
  RoadMarking_Classification_Type2[RoadMarking_Classification_Type2["TEXTUAL_TRAFFIC_SIGN"] = 4] = "TEXTUAL_TRAFFIC_SIGN";
  RoadMarking_Classification_Type2[RoadMarking_Classification_Type2["GENERIC_SYMBOL"] = 5] = "GENERIC_SYMBOL";
  RoadMarking_Classification_Type2[RoadMarking_Classification_Type2["GENERIC_LINE"] = 6] = "GENERIC_LINE";
  RoadMarking_Classification_Type2[RoadMarking_Classification_Type2["GENERIC_TEXT"] = 7] = "GENERIC_TEXT";
  return RoadMarking_Classification_Type2;
})(RoadMarking_Classification_Type || {});
var RoadMarking_Classification_Color = /* @__PURE__ */ ((RoadMarking_Classification_Color2) => {
  RoadMarking_Classification_Color2[RoadMarking_Classification_Color2["UNKNOWN"] = 0] = "UNKNOWN";
  RoadMarking_Classification_Color2[RoadMarking_Classification_Color2["OTHER"] = 1] = "OTHER";
  RoadMarking_Classification_Color2[RoadMarking_Classification_Color2["WHITE"] = 2] = "WHITE";
  RoadMarking_Classification_Color2[RoadMarking_Classification_Color2["YELLOW"] = 3] = "YELLOW";
  RoadMarking_Classification_Color2[RoadMarking_Classification_Color2["BLUE"] = 5] = "BLUE";
  RoadMarking_Classification_Color2[RoadMarking_Classification_Color2["RED"] = 6] = "RED";
  RoadMarking_Classification_Color2[RoadMarking_Classification_Color2["GREEN"] = 7] = "GREEN";
  RoadMarking_Classification_Color2[RoadMarking_Classification_Color2["VIOLET"] = 8] = "VIOLET";
  return RoadMarking_Classification_Color2;
})(RoadMarking_Classification_Color || {});

// proto/osi_sensordata.ts
var DetectedEntityHeader_DataQualifier = /* @__PURE__ */ ((DetectedEntityHeader_DataQualifier2) => {
  DetectedEntityHeader_DataQualifier2[DetectedEntityHeader_DataQualifier2["UNKNOWN"] = 0] = "UNKNOWN";
  DetectedEntityHeader_DataQualifier2[DetectedEntityHeader_DataQualifier2["OTHER"] = 1] = "OTHER";
  DetectedEntityHeader_DataQualifier2[DetectedEntityHeader_DataQualifier2["AVAILABLE"] = 2] = "AVAILABLE";
  DetectedEntityHeader_DataQualifier2[DetectedEntityHeader_DataQualifier2["AVAILABLE_REDUCED"] = 3] = "AVAILABLE_REDUCED";
  DetectedEntityHeader_DataQualifier2[DetectedEntityHeader_DataQualifier2["NOT_AVAILABLE"] = 4] = "NOT_AVAILABLE";
  DetectedEntityHeader_DataQualifier2[DetectedEntityHeader_DataQualifier2["BLINDNESS"] = 5] = "BLINDNESS";
  DetectedEntityHeader_DataQualifier2[DetectedEntityHeader_DataQualifier2["TEMPORARY_AVAILABLE"] = 6] = "TEMPORARY_AVAILABLE";
  return DetectedEntityHeader_DataQualifier2;
})(DetectedEntityHeader_DataQualifier || {});

// proto/osi_sensorspecific.ts
var UltrasonicSpecificObjectData_TrilaterationStatus = /* @__PURE__ */ ((UltrasonicSpecificObjectData_TrilaterationStatus2) => {
  UltrasonicSpecificObjectData_TrilaterationStatus2[UltrasonicSpecificObjectData_TrilaterationStatus2["UNKNOWN"] = 0] = "UNKNOWN";
  UltrasonicSpecificObjectData_TrilaterationStatus2[UltrasonicSpecificObjectData_TrilaterationStatus2["OTHER"] = 1] = "OTHER";
  UltrasonicSpecificObjectData_TrilaterationStatus2[UltrasonicSpecificObjectData_TrilaterationStatus2["NOT_TRILATERATED"] = 2] = "NOT_TRILATERATED";
  UltrasonicSpecificObjectData_TrilaterationStatus2[UltrasonicSpecificObjectData_TrilaterationStatus2["TRILATERATED"] = 3] = "TRILATERATED";
  return UltrasonicSpecificObjectData_TrilaterationStatus2;
})(UltrasonicSpecificObjectData_TrilaterationStatus || {});
var UltrasonicSpecificObjectData_Trend = /* @__PURE__ */ ((UltrasonicSpecificObjectData_Trend2) => {
  UltrasonicSpecificObjectData_Trend2[UltrasonicSpecificObjectData_Trend2["UNKNOWN"] = 0] = "UNKNOWN";
  UltrasonicSpecificObjectData_Trend2[UltrasonicSpecificObjectData_Trend2["OTHER"] = 1] = "OTHER";
  UltrasonicSpecificObjectData_Trend2[UltrasonicSpecificObjectData_Trend2["CONSTANT_APPROACHING"] = 2] = "CONSTANT_APPROACHING";
  UltrasonicSpecificObjectData_Trend2[UltrasonicSpecificObjectData_Trend2["CONSTANT"] = 3] = "CONSTANT";
  UltrasonicSpecificObjectData_Trend2[UltrasonicSpecificObjectData_Trend2["APPROACHING"] = 4] = "APPROACHING";
  UltrasonicSpecificObjectData_Trend2[UltrasonicSpecificObjectData_Trend2["DEPARTING"] = 5] = "DEPARTING";
  return UltrasonicSpecificObjectData_Trend2;
})(UltrasonicSpecificObjectData_Trend || {});

// proto/osi_sensorviewconfiguration.ts
var CameraSensorViewConfiguration_ChannelFormat = /* @__PURE__ */ ((CameraSensorViewConfiguration_ChannelFormat2) => {
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["UNKNOWN"] = 0] = "UNKNOWN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["OTHER"] = 1] = "OTHER";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["MONO_U8_LIN"] = 2] = "MONO_U8_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["MONO_U16_LIN"] = 3] = "MONO_U16_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["MONO_U32_LIN"] = 4] = "MONO_U32_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["MONO_F32_LIN"] = 5] = "MONO_F32_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["RGB_U8_LIN"] = 6] = "RGB_U8_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["RGB_U16_LIN"] = 7] = "RGB_U16_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["RGB_U32_LIN"] = 8] = "RGB_U32_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["RGB_F32_LIN"] = 9] = "RGB_F32_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["BAYER_BGGR_U8_LIN"] = 10] = "BAYER_BGGR_U8_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["BAYER_BGGR_U16_LIN"] = 11] = "BAYER_BGGR_U16_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["BAYER_BGGR_U32_LIN"] = 12] = "BAYER_BGGR_U32_LIN";
  CameraSensorViewConfiguration_ChannelFormat2[CameraSensorViewConfiguration_ChannelFormat2["BAYER_BGGR_F32_LIN"] = 13] = "BAYER_BGGR_F32_LIN";
  return CameraSensorViewConfiguration_ChannelFormat2;
})(CameraSensorViewConfiguration_ChannelFormat || {});

// proto/osi_trafficlight.ts
var TrafficLight_Classification_Color = /* @__PURE__ */ ((TrafficLight_Classification_Color2) => {
  TrafficLight_Classification_Color2[TrafficLight_Classification_Color2["UNKNOWN"] = 0] = "UNKNOWN";
  TrafficLight_Classification_Color2[TrafficLight_Classification_Color2["OTHER"] = 1] = "OTHER";
  TrafficLight_Classification_Color2[TrafficLight_Classification_Color2["RED"] = 2] = "RED";
  TrafficLight_Classification_Color2[TrafficLight_Classification_Color2["YELLOW"] = 3] = "YELLOW";
  TrafficLight_Classification_Color2[TrafficLight_Classification_Color2["GREEN"] = 4] = "GREEN";
  TrafficLight_Classification_Color2[TrafficLight_Classification_Color2["BLUE"] = 5] = "BLUE";
  TrafficLight_Classification_Color2[TrafficLight_Classification_Color2["WHITE"] = 6] = "WHITE";
  return TrafficLight_Classification_Color2;
})(TrafficLight_Classification_Color || {});
var TrafficLight_Classification_Icon = /* @__PURE__ */ ((TrafficLight_Classification_Icon2) => {
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["UNKNOWN"] = 0] = "UNKNOWN";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["OTHER"] = 1] = "OTHER";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["NONE"] = 2] = "NONE";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_STRAIGHT_AHEAD"] = 3] = "ARROW_STRAIGHT_AHEAD";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_LEFT"] = 4] = "ARROW_LEFT";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_DIAG_LEFT"] = 5] = "ARROW_DIAG_LEFT";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_STRAIGHT_AHEAD_LEFT"] = 6] = "ARROW_STRAIGHT_AHEAD_LEFT";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_RIGHT"] = 7] = "ARROW_RIGHT";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_DIAG_RIGHT"] = 8] = "ARROW_DIAG_RIGHT";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_STRAIGHT_AHEAD_RIGHT"] = 9] = "ARROW_STRAIGHT_AHEAD_RIGHT";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_LEFT_RIGHT"] = 10] = "ARROW_LEFT_RIGHT";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_DOWN"] = 11] = "ARROW_DOWN";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_DOWN_LEFT"] = 12] = "ARROW_DOWN_LEFT";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_DOWN_RIGHT"] = 13] = "ARROW_DOWN_RIGHT";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["ARROW_CROSS"] = 14] = "ARROW_CROSS";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["PEDESTRIAN"] = 15] = "PEDESTRIAN";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["WALK"] = 16] = "WALK";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["DONT_WALK"] = 17] = "DONT_WALK";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["BICYCLE"] = 18] = "BICYCLE";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["PEDESTRIAN_AND_BICYCLE"] = 19] = "PEDESTRIAN_AND_BICYCLE";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["COUNTDOWN_SECONDS"] = 20] = "COUNTDOWN_SECONDS";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["COUNTDOWN_PERCENT"] = 21] = "COUNTDOWN_PERCENT";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["TRAM"] = 22] = "TRAM";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["BUS"] = 23] = "BUS";
  TrafficLight_Classification_Icon2[TrafficLight_Classification_Icon2["BUS_AND_TRAM"] = 24] = "BUS_AND_TRAM";
  return TrafficLight_Classification_Icon2;
})(TrafficLight_Classification_Icon || {});
var TrafficLight_Classification_Mode = /* @__PURE__ */ ((TrafficLight_Classification_Mode2) => {
  TrafficLight_Classification_Mode2[TrafficLight_Classification_Mode2["UNKNOWN"] = 0] = "UNKNOWN";
  TrafficLight_Classification_Mode2[TrafficLight_Classification_Mode2["OTHER"] = 1] = "OTHER";
  TrafficLight_Classification_Mode2[TrafficLight_Classification_Mode2["OFF"] = 2] = "OFF";
  TrafficLight_Classification_Mode2[TrafficLight_Classification_Mode2["CONSTANT"] = 3] = "CONSTANT";
  TrafficLight_Classification_Mode2[TrafficLight_Classification_Mode2["FLASHING"] = 4] = "FLASHING";
  TrafficLight_Classification_Mode2[TrafficLight_Classification_Mode2["COUNTING"] = 5] = "COUNTING";
  return TrafficLight_Classification_Mode2;
})(TrafficLight_Classification_Mode || {});

// proto/osi_trafficsign.ts
var TrafficSignValue_Unit = /* @__PURE__ */ ((TrafficSignValue_Unit2) => {
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["UNKNOWN"] = 0] = "UNKNOWN";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["OTHER"] = 1] = "OTHER";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["NO_UNIT"] = 2] = "NO_UNIT";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["KILOMETER_PER_HOUR"] = 3] = "KILOMETER_PER_HOUR";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["MILE_PER_HOUR"] = 4] = "MILE_PER_HOUR";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["METER"] = 5] = "METER";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["KILOMETER"] = 6] = "KILOMETER";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["FEET"] = 7] = "FEET";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["MILE"] = 8] = "MILE";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["METRIC_TON"] = 9] = "METRIC_TON";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["LONG_TON"] = 10] = "LONG_TON";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["SHORT_TON"] = 11] = "SHORT_TON";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["MINUTES"] = 12] = "MINUTES";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["DAY"] = 13] = "DAY";
  TrafficSignValue_Unit2[TrafficSignValue_Unit2["PERCENTAGE"] = 14] = "PERCENTAGE";
  return TrafficSignValue_Unit2;
})(TrafficSignValue_Unit || {});
var TrafficSign_Variability = /* @__PURE__ */ ((TrafficSign_Variability2) => {
  TrafficSign_Variability2[TrafficSign_Variability2["UNKNOWN"] = 0] = "UNKNOWN";
  TrafficSign_Variability2[TrafficSign_Variability2["OTHER"] = 1] = "OTHER";
  TrafficSign_Variability2[TrafficSign_Variability2["FIXED"] = 2] = "FIXED";
  TrafficSign_Variability2[TrafficSign_Variability2["VARIABLE"] = 3] = "VARIABLE";
  return TrafficSign_Variability2;
})(TrafficSign_Variability || {});
var TrafficSign_MainSign_Classification_Type = /* @__PURE__ */ ((TrafficSign_MainSign_Classification_Type2) => {
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["UNKNOWN"] = 0] = "UNKNOWN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["OTHER"] = 1] = "OTHER";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DANGER_SPOT"] = 2] = "DANGER_SPOT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ZEBRA_CROSSING"] = 87] = "ZEBRA_CROSSING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["FLIGHT"] = 110] = "FLIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CATTLE"] = 200] = "CATTLE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HORSE_RIDERS"] = 197] = "HORSE_RIDERS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["AMPHIBIANS"] = 188] = "AMPHIBIANS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["FALLING_ROCKS"] = 96] = "FALLING_ROCKS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SNOW_OR_ICE"] = 94] = "SNOW_OR_ICE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["LOOSE_GRAVEL"] = 97] = "LOOSE_GRAVEL";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["WATERSIDE"] = 102] = "WATERSIDE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CLEARANCE"] = 210] = "CLEARANCE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["MOVABLE_BRIDGE"] = 101] = "MOVABLE_BRIDGE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["RIGHT_BEFORE_LEFT_NEXT_INTERSECTION"] = 3] = "RIGHT_BEFORE_LEFT_NEXT_INTERSECTION";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TURN_LEFT"] = 4] = "TURN_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TURN_RIGHT"] = 5] = "TURN_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DOUBLE_TURN_LEFT"] = 6] = "DOUBLE_TURN_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DOUBLE_TURN_RIGHT"] = 7] = "DOUBLE_TURN_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HILL_DOWNWARDS"] = 8] = "HILL_DOWNWARDS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HILL_UPWARDS"] = 9] = "HILL_UPWARDS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["UNEVEN_ROAD"] = 93] = "UNEVEN_ROAD";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ROAD_SLIPPERY_WET_OR_DIRTY"] = 95] = "ROAD_SLIPPERY_WET_OR_DIRTY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDE_WINDS"] = 98] = "SIDE_WINDS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ROAD_NARROWING"] = 10] = "ROAD_NARROWING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ROAD_NARROWING_RIGHT"] = 12] = "ROAD_NARROWING_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ROAD_NARROWING_LEFT"] = 11] = "ROAD_NARROWING_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ROAD_WORKS"] = 13] = "ROAD_WORKS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TRAFFIC_QUEUES"] = 100] = "TRAFFIC_QUEUES";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TWO_WAY_TRAFFIC"] = 14] = "TWO_WAY_TRAFFIC";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ATTENTION_TRAFFIC_LIGHT"] = 15] = "ATTENTION_TRAFFIC_LIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PEDESTRIANS"] = 103] = "PEDESTRIANS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CHILDREN_CROSSING"] = 106] = "CHILDREN_CROSSING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CYCLE_ROUTE"] = 107] = "CYCLE_ROUTE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DEER_CROSSING"] = 109] = "DEER_CROSSING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["UNGATED_LEVEL_CROSSING"] = 144] = "UNGATED_LEVEL_CROSSING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["LEVEL_CROSSING_MARKER"] = 112] = "LEVEL_CROSSING_MARKER";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["RAILWAY_TRAFFIC_PRIORITY"] = 135] = "RAILWAY_TRAFFIC_PRIORITY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["GIVE_WAY"] = 16] = "GIVE_WAY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["STOP"] = 17] = "STOP";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRIORITY_TO_OPPOSITE_DIRECTION"] = 18] = "PRIORITY_TO_OPPOSITE_DIRECTION";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRIORITY_TO_OPPOSITE_DIRECTION_UPSIDE_DOWN"] = 19] = "PRIORITY_TO_OPPOSITE_DIRECTION_UPSIDE_DOWN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_LEFT_TURN"] = 20] = "PRESCRIBED_LEFT_TURN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_RIGHT_TURN"] = 21] = "PRESCRIBED_RIGHT_TURN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_STRAIGHT"] = 22] = "PRESCRIBED_STRAIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_RIGHT_WAY"] = 24] = "PRESCRIBED_RIGHT_WAY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_LEFT_WAY"] = 23] = "PRESCRIBED_LEFT_WAY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_RIGHT_TURN_AND_STRAIGHT"] = 26] = "PRESCRIBED_RIGHT_TURN_AND_STRAIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_LEFT_TURN_AND_STRAIGHT"] = 25] = "PRESCRIBED_LEFT_TURN_AND_STRAIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_LEFT_TURN_AND_RIGHT_TURN"] = 27] = "PRESCRIBED_LEFT_TURN_AND_RIGHT_TURN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_LEFT_TURN_RIGHT_TURN_AND_STRAIGHT"] = 28] = "PRESCRIBED_LEFT_TURN_RIGHT_TURN_AND_STRAIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ROUNDABOUT"] = 29] = "ROUNDABOUT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ONEWAY_LEFT"] = 30] = "ONEWAY_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ONEWAY_RIGHT"] = 31] = "ONEWAY_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PASS_LEFT"] = 32] = "PASS_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PASS_RIGHT"] = 33] = "PASS_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDE_LANE_OPEN_FOR_TRAFFIC"] = 128] = "SIDE_LANE_OPEN_FOR_TRAFFIC";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDE_LANE_CLOSED_FOR_TRAFFIC"] = 129] = "SIDE_LANE_CLOSED_FOR_TRAFFIC";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDE_LANE_CLOSING_FOR_TRAFFIC"] = 130] = "SIDE_LANE_CLOSING_FOR_TRAFFIC";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BUS_STOP"] = 137] = "BUS_STOP";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TAXI_STAND"] = 138] = "TAXI_STAND";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BICYCLES_ONLY"] = 145] = "BICYCLES_ONLY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HORSE_RIDERS_ONLY"] = 146] = "HORSE_RIDERS_ONLY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PEDESTRIANS_ONLY"] = 147] = "PEDESTRIANS_ONLY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BICYCLES_PEDESTRIANS_SHARED_ONLY"] = 148] = "BICYCLES_PEDESTRIANS_SHARED_ONLY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BICYCLES_PEDESTRIANS_SEPARATED_LEFT_ONLY"] = 149] = "BICYCLES_PEDESTRIANS_SEPARATED_LEFT_ONLY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BICYCLES_PEDESTRIANS_SEPARATED_RIGHT_ONLY"] = 150] = "BICYCLES_PEDESTRIANS_SEPARATED_RIGHT_ONLY";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PEDESTRIAN_ZONE_BEGIN"] = 151] = "PEDESTRIAN_ZONE_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PEDESTRIAN_ZONE_END"] = 152] = "PEDESTRIAN_ZONE_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BICYCLE_ROAD_BEGIN"] = 153] = "BICYCLE_ROAD_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BICYCLE_ROAD_END"] = 154] = "BICYCLE_ROAD_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BUS_LANE"] = 34] = "BUS_LANE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BUS_LANE_BEGIN"] = 35] = "BUS_LANE_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BUS_LANE_END"] = 36] = "BUS_LANE_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ALL_PROHIBITED"] = 37] = "ALL_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["MOTORIZED_MULTITRACK_PROHIBITED"] = 38] = "MOTORIZED_MULTITRACK_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TRUCKS_PROHIBITED"] = 39] = "TRUCKS_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BICYCLES_PROHIBITED"] = 40] = "BICYCLES_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["MOTORCYCLES_PROHIBITED"] = 41] = "MOTORCYCLES_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["MOPEDS_PROHIBITED"] = 155] = "MOPEDS_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HORSE_RIDERS_PROHIBITED"] = 156] = "HORSE_RIDERS_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HORSE_CARRIAGES_PROHIBITED"] = 157] = "HORSE_CARRIAGES_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CATTLE_PROHIBITED"] = 158] = "CATTLE_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["BUSES_PROHIBITED"] = 159] = "BUSES_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CARS_PROHIBITED"] = 160] = "CARS_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CARS_TRAILERS_PROHIBITED"] = 161] = "CARS_TRAILERS_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TRUCKS_TRAILERS_PROHIBITED"] = 162] = "TRUCKS_TRAILERS_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TRACTORS_PROHIBITED"] = 163] = "TRACTORS_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PEDESTRIANS_PROHIBITED"] = 42] = "PEDESTRIANS_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["MOTOR_VEHICLES_PROHIBITED"] = 43] = "MOTOR_VEHICLES_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HAZARDOUS_GOODS_VEHICLES_PROHIBITED"] = 164] = "HAZARDOUS_GOODS_VEHICLES_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["OVER_WEIGHT_VEHICLES_PROHIBITED"] = 165] = "OVER_WEIGHT_VEHICLES_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["VEHICLES_AXLE_OVER_WEIGHT_PROHIBITED"] = 166] = "VEHICLES_AXLE_OVER_WEIGHT_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["VEHICLES_EXCESS_WIDTH_PROHIBITED"] = 167] = "VEHICLES_EXCESS_WIDTH_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["VEHICLES_EXCESS_HEIGHT_PROHIBITED"] = 168] = "VEHICLES_EXCESS_HEIGHT_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["VEHICLES_EXCESS_LENGTH_PROHIBITED"] = 169] = "VEHICLES_EXCESS_LENGTH_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DO_NOT_ENTER"] = 44] = "DO_NOT_ENTER";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SNOW_CHAINS_REQUIRED"] = 170] = "SNOW_CHAINS_REQUIRED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["WATER_POLLUTANT_VEHICLES_PROHIBITED"] = 171] = "WATER_POLLUTANT_VEHICLES_PROHIBITED";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ENVIRONMENTAL_ZONE_BEGIN"] = 45] = "ENVIRONMENTAL_ZONE_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ENVIRONMENTAL_ZONE_END"] = 46] = "ENVIRONMENTAL_ZONE_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["NO_U_TURN_LEFT"] = 47] = "NO_U_TURN_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["NO_U_TURN_RIGHT"] = 48] = "NO_U_TURN_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_U_TURN_LEFT"] = 49] = "PRESCRIBED_U_TURN_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRESCRIBED_U_TURN_RIGHT"] = 50] = "PRESCRIBED_U_TURN_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["MINIMUM_DISTANCE_FOR_TRUCKS"] = 51] = "MINIMUM_DISTANCE_FOR_TRUCKS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SPEED_LIMIT_BEGIN"] = 52] = "SPEED_LIMIT_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SPEED_LIMIT_ZONE_BEGIN"] = 53] = "SPEED_LIMIT_ZONE_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SPEED_LIMIT_ZONE_END"] = 54] = "SPEED_LIMIT_ZONE_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["MINIMUM_SPEED_BEGIN"] = 55] = "MINIMUM_SPEED_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["OVERTAKING_BAN_BEGIN"] = 56] = "OVERTAKING_BAN_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["OVERTAKING_BAN_FOR_TRUCKS_BEGIN"] = 57] = "OVERTAKING_BAN_FOR_TRUCKS_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SPEED_LIMIT_END"] = 58] = "SPEED_LIMIT_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["MINIMUM_SPEED_END"] = 59] = "MINIMUM_SPEED_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["OVERTAKING_BAN_END"] = 60] = "OVERTAKING_BAN_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["OVERTAKING_BAN_FOR_TRUCKS_END"] = 61] = "OVERTAKING_BAN_FOR_TRUCKS_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ALL_RESTRICTIONS_END"] = 62] = "ALL_RESTRICTIONS_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["NO_STOPPING"] = 63] = "NO_STOPPING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["NO_PARKING"] = 64] = "NO_PARKING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["NO_PARKING_ZONE_BEGIN"] = 65] = "NO_PARKING_ZONE_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["NO_PARKING_ZONE_END"] = 66] = "NO_PARKING_ZONE_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["RIGHT_OF_WAY_NEXT_INTERSECTION"] = 67] = "RIGHT_OF_WAY_NEXT_INTERSECTION";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["RIGHT_OF_WAY_BEGIN"] = 68] = "RIGHT_OF_WAY_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["RIGHT_OF_WAY_END"] = 69] = "RIGHT_OF_WAY_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRIORITY_OVER_OPPOSITE_DIRECTION"] = 70] = "PRIORITY_OVER_OPPOSITE_DIRECTION";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRIORITY_OVER_OPPOSITE_DIRECTION_UPSIDE_DOWN"] = 71] = "PRIORITY_OVER_OPPOSITE_DIRECTION_UPSIDE_DOWN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TOWN_BEGIN"] = 72] = "TOWN_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TOWN_END"] = 73] = "TOWN_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CAR_PARKING"] = 74] = "CAR_PARKING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CAR_PARKING_ZONE_BEGIN"] = 75] = "CAR_PARKING_ZONE_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CAR_PARKING_ZONE_END"] = 76] = "CAR_PARKING_ZONE_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDEWALK_HALF_PARKING_LEFT"] = 172] = "SIDEWALK_HALF_PARKING_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDEWALK_HALF_PARKING_RIGHT"] = 173] = "SIDEWALK_HALF_PARKING_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDEWALK_PARKING_LEFT"] = 174] = "SIDEWALK_PARKING_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDEWALK_PARKING_RIGHT"] = 175] = "SIDEWALK_PARKING_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDEWALK_PERPENDICULAR_HALF_PARKING_LEFT"] = 176] = "SIDEWALK_PERPENDICULAR_HALF_PARKING_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDEWALK_PERPENDICULAR_HALF_PARKING_RIGHT"] = 177] = "SIDEWALK_PERPENDICULAR_HALF_PARKING_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDEWALK_PERPENDICULAR_PARKING_LEFT"] = 178] = "SIDEWALK_PERPENDICULAR_PARKING_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SIDEWALK_PERPENDICULAR_PARKING_RIGHT"] = 179] = "SIDEWALK_PERPENDICULAR_PARKING_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["LIVING_STREET_BEGIN"] = 77] = "LIVING_STREET_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["LIVING_STREET_END"] = 78] = "LIVING_STREET_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TUNNEL"] = 79] = "TUNNEL";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["EMERGENCY_STOPPING_LEFT"] = 80] = "EMERGENCY_STOPPING_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["EMERGENCY_STOPPING_RIGHT"] = 81] = "EMERGENCY_STOPPING_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HIGHWAY_BEGIN"] = 82] = "HIGHWAY_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HIGHWAY_END"] = 83] = "HIGHWAY_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["EXPRESSWAY_BEGIN"] = 84] = "EXPRESSWAY_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["EXPRESSWAY_END"] = 85] = "EXPRESSWAY_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["NAMED_HIGHWAY_EXIT"] = 183] = "NAMED_HIGHWAY_EXIT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["NAMED_EXPRESSWAY_EXIT"] = 184] = "NAMED_EXPRESSWAY_EXIT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["NAMED_ROAD_EXIT"] = 185] = "NAMED_ROAD_EXIT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HIGHWAY_EXIT"] = 86] = "HIGHWAY_EXIT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["EXPRESSWAY_EXIT"] = 186] = "EXPRESSWAY_EXIT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ONEWAY_STREET"] = 187] = "ONEWAY_STREET";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CROSSING_GUARDS"] = 189] = "CROSSING_GUARDS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DEADEND"] = 190] = "DEADEND";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DEADEND_EXCLUDING_DESIGNATED_ACTORS"] = 191] = "DEADEND_EXCLUDING_DESIGNATED_ACTORS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["FIRST_AID_STATION"] = 194] = "FIRST_AID_STATION";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["POLICE_STATION"] = 195] = "POLICE_STATION";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TELEPHONE"] = 196] = "TELEPHONE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["FILLING_STATION"] = 198] = "FILLING_STATION";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HOTEL"] = 201] = "HOTEL";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["INN"] = 202] = "INN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["KIOSK"] = 203] = "KIOSK";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TOILET"] = 204] = "TOILET";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CHAPEL"] = 205] = "CHAPEL";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TOURIST_INFO"] = 206] = "TOURIST_INFO";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["REPAIR_SERVICE"] = 207] = "REPAIR_SERVICE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PEDESTRIAN_UNDERPASS"] = 208] = "PEDESTRIAN_UNDERPASS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PEDESTRIAN_BRIDGE"] = 209] = "PEDESTRIAN_BRIDGE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CAMPER_PLACE"] = 213] = "CAMPER_PLACE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ADVISORY_SPEED_LIMIT_BEGIN"] = 214] = "ADVISORY_SPEED_LIMIT_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ADVISORY_SPEED_LIMIT_END"] = 215] = "ADVISORY_SPEED_LIMIT_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PLACE_NAME"] = 216] = "PLACE_NAME";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TOURIST_ATTRACTION"] = 217] = "TOURIST_ATTRACTION";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TOURIST_ROUTE"] = 218] = "TOURIST_ROUTE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TOURIST_AREA"] = 219] = "TOURIST_AREA";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SHOULDER_NOT_PASSABLE_MOTOR_VEHICLES"] = 220] = "SHOULDER_NOT_PASSABLE_MOTOR_VEHICLES";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SHOULDER_UNSAFE_TRUCKS_TRACTORS"] = 221] = "SHOULDER_UNSAFE_TRUCKS_TRACTORS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TOLL_BEGIN"] = 222] = "TOLL_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TOLL_END"] = 223] = "TOLL_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TOLL_ROAD"] = 224] = "TOLL_ROAD";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CUSTOMS"] = 225] = "CUSTOMS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["INTERNATIONAL_BORDER_INFO"] = 226] = "INTERNATIONAL_BORDER_INFO";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["STREETLIGHT_RED_BAND"] = 227] = "STREETLIGHT_RED_BAND";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["FEDERAL_HIGHWAY_ROUTE_NUMBER"] = 228] = "FEDERAL_HIGHWAY_ROUTE_NUMBER";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HIGHWAY_ROUTE_NUMBER"] = 229] = "HIGHWAY_ROUTE_NUMBER";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HIGHWAY_INTERCHANGE_NUMBER"] = 230] = "HIGHWAY_INTERCHANGE_NUMBER";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["EUROPEAN_ROUTE_NUMBER"] = 231] = "EUROPEAN_ROUTE_NUMBER";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["FEDERAL_HIGHWAY_DIRECTION_LEFT"] = 232] = "FEDERAL_HIGHWAY_DIRECTION_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["FEDERAL_HIGHWAY_DIRECTION_RIGHT"] = 233] = "FEDERAL_HIGHWAY_DIRECTION_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRIMARY_ROAD_DIRECTION_LEFT"] = 234] = "PRIMARY_ROAD_DIRECTION_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PRIMARY_ROAD_DIRECTION_RIGHT"] = 235] = "PRIMARY_ROAD_DIRECTION_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SECONDARY_ROAD_DIRECTION_LEFT"] = 236] = "SECONDARY_ROAD_DIRECTION_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["SECONDARY_ROAD_DIRECTION_RIGHT"] = 237] = "SECONDARY_ROAD_DIRECTION_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DIRECTION_DESIGNATED_ACTORS_LEFT"] = 238] = "DIRECTION_DESIGNATED_ACTORS_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DIRECTION_DESIGNATED_ACTORS_RIGHT"] = 239] = "DIRECTION_DESIGNATED_ACTORS_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ROUTING_DESIGNATED_ACTORS"] = 240] = "ROUTING_DESIGNATED_ACTORS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DIRECTION_TO_HIGHWAY_LEFT"] = 143] = "DIRECTION_TO_HIGHWAY_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DIRECTION_TO_HIGHWAY_RIGHT"] = 108] = "DIRECTION_TO_HIGHWAY_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DIRECTION_TO_LOCAL_DESTINATION_LEFT"] = 127] = "DIRECTION_TO_LOCAL_DESTINATION_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DIRECTION_TO_LOCAL_DESTINATION_RIGHT"] = 136] = "DIRECTION_TO_LOCAL_DESTINATION_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["CONSOLIDATED_DIRECTIONS"] = 118] = "CONSOLIDATED_DIRECTIONS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["STREET_NAME"] = 119] = "STREET_NAME";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DIRECTION_PREANNOUNCEMENT"] = 120] = "DIRECTION_PREANNOUNCEMENT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DIRECTION_PREANNOUNCEMENT_LANE_CONFIG"] = 121] = "DIRECTION_PREANNOUNCEMENT_LANE_CONFIG";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DIRECTION_PREANNOUNCEMENT_HIGHWAY_ENTRIES"] = 122] = "DIRECTION_PREANNOUNCEMENT_HIGHWAY_ENTRIES";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HIGHWAY_ANNOUNCEMENT"] = 123] = "HIGHWAY_ANNOUNCEMENT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["OTHER_ROAD_ANNOUNCEMENT"] = 124] = "OTHER_ROAD_ANNOUNCEMENT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HIGHWAY_ANNOUNCEMENT_TRUCK_STOP"] = 125] = "HIGHWAY_ANNOUNCEMENT_TRUCK_STOP";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HIGHWAY_PREANNOUNCEMENT_DIRECTIONS"] = 126] = "HIGHWAY_PREANNOUNCEMENT_DIRECTIONS";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["POLE_EXIT"] = 88] = "POLE_EXIT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["HIGHWAY_DISTANCE_BOARD"] = 180] = "HIGHWAY_DISTANCE_BOARD";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DETOUR_LEFT"] = 181] = "DETOUR_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DETOUR_RIGHT"] = 182] = "DETOUR_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["NUMBERED_DETOUR"] = 131] = "NUMBERED_DETOUR";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DETOUR_BEGIN"] = 132] = "DETOUR_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DETOUR_END"] = 133] = "DETOUR_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DETOUR_ROUTING_BOARD"] = 134] = "DETOUR_ROUTING_BOARD";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["OPTIONAL_DETOUR"] = 111] = "OPTIONAL_DETOUR";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["OPTIONAL_DETOUR_ROUTING"] = 199] = "OPTIONAL_DETOUR_ROUTING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ROUTE_RECOMMENDATION"] = 211] = "ROUTE_RECOMMENDATION";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ROUTE_RECOMMENDATION_END"] = 212] = "ROUTE_RECOMMENDATION_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ANNOUNCE_LANE_TRANSITION_LEFT"] = 192] = "ANNOUNCE_LANE_TRANSITION_LEFT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ANNOUNCE_LANE_TRANSITION_RIGHT"] = 193] = "ANNOUNCE_LANE_TRANSITION_RIGHT";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ANNOUNCE_RIGHT_LANE_END"] = 90] = "ANNOUNCE_RIGHT_LANE_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ANNOUNCE_LEFT_LANE_END"] = 89] = "ANNOUNCE_LEFT_LANE_END";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ANNOUNCE_RIGHT_LANE_BEGIN"] = 115] = "ANNOUNCE_RIGHT_LANE_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ANNOUNCE_LEFT_LANE_BEGIN"] = 116] = "ANNOUNCE_LEFT_LANE_BEGIN";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["ANNOUNCE_LANE_CONSOLIDATION"] = 117] = "ANNOUNCE_LANE_CONSOLIDATION";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DETOUR_CITY_BLOCK"] = 142] = "DETOUR_CITY_BLOCK";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["GATE"] = 141] = "GATE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["POLE_WARNING"] = 91] = "POLE_WARNING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TRAFFIC_CONE"] = 140] = "TRAFFIC_CONE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["MOBILE_LANE_CLOSURE"] = 139] = "MOBILE_LANE_CLOSURE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["REFLECTOR_POST"] = 114] = "REFLECTOR_POST";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["DIRECTIONAL_BOARD_WARNING"] = 113] = "DIRECTIONAL_BOARD_WARNING";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["GUIDING_PLATE"] = 104] = "GUIDING_PLATE";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["GUIDING_PLATE_WEDGES"] = 105] = "GUIDING_PLATE_WEDGES";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["PARKING_HAZARD"] = 99] = "PARKING_HAZARD";
  TrafficSign_MainSign_Classification_Type2[TrafficSign_MainSign_Classification_Type2["TRAFFIC_LIGHT_GREEN_ARROW"] = 92] = "TRAFFIC_LIGHT_GREEN_ARROW";
  return TrafficSign_MainSign_Classification_Type2;
})(TrafficSign_MainSign_Classification_Type || {});
var TrafficSign_MainSign_Classification_DirectionScope = /* @__PURE__ */ ((TrafficSign_MainSign_Classification_DirectionScope2) => {
  TrafficSign_MainSign_Classification_DirectionScope2[TrafficSign_MainSign_Classification_DirectionScope2["UNKNOWN"] = 0] = "UNKNOWN";
  TrafficSign_MainSign_Classification_DirectionScope2[TrafficSign_MainSign_Classification_DirectionScope2["OTHER"] = 1] = "OTHER";
  TrafficSign_MainSign_Classification_DirectionScope2[TrafficSign_MainSign_Classification_DirectionScope2["NO_DIRECTION"] = 2] = "NO_DIRECTION";
  TrafficSign_MainSign_Classification_DirectionScope2[TrafficSign_MainSign_Classification_DirectionScope2["LEFT"] = 3] = "LEFT";
  TrafficSign_MainSign_Classification_DirectionScope2[TrafficSign_MainSign_Classification_DirectionScope2["RIGHT"] = 4] = "RIGHT";
  TrafficSign_MainSign_Classification_DirectionScope2[TrafficSign_MainSign_Classification_DirectionScope2["LEFT_RIGHT"] = 5] = "LEFT_RIGHT";
  return TrafficSign_MainSign_Classification_DirectionScope2;
})(TrafficSign_MainSign_Classification_DirectionScope || {});
var TrafficSign_SupplementarySign_Classification_Type = /* @__PURE__ */ ((TrafficSign_SupplementarySign_Classification_Type2) => {
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["UNKNOWN"] = 0] = "UNKNOWN";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["OTHER"] = 1] = "OTHER";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["NO_SIGN"] = 2] = "NO_SIGN";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["TEXT"] = 41] = "TEXT";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["SPACE"] = 39] = "SPACE";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["TIME"] = 26] = "TIME";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["ARROW"] = 30] = "ARROW";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["CONSTRAINED_TO"] = 46] = "CONSTRAINED_TO";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["EXCEPT"] = 45] = "EXCEPT";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["VALID_FOR_DISTANCE"] = 3] = "VALID_FOR_DISTANCE";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PRIORITY_ROAD_BOTTOM_LEFT_FOUR_WAY"] = 27] = "PRIORITY_ROAD_BOTTOM_LEFT_FOUR_WAY";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PRIORITY_ROAD_TOP_LEFT_FOUR_WAY"] = 28] = "PRIORITY_ROAD_TOP_LEFT_FOUR_WAY";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PRIORITY_ROAD_BOTTOM_LEFT_THREE_WAY_STRAIGHT"] = 32] = "PRIORITY_ROAD_BOTTOM_LEFT_THREE_WAY_STRAIGHT";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PRIORITY_ROAD_BOTTOM_LEFT_THREE_WAY_SIDEWAYS"] = 33] = "PRIORITY_ROAD_BOTTOM_LEFT_THREE_WAY_SIDEWAYS";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PRIORITY_ROAD_TOP_LEFT_THREE_WAY_STRAIGHT"] = 34] = "PRIORITY_ROAD_TOP_LEFT_THREE_WAY_STRAIGHT";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PRIORITY_ROAD_BOTTOM_RIGHT_FOUR_WAY"] = 29] = "PRIORITY_ROAD_BOTTOM_RIGHT_FOUR_WAY";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PRIORITY_ROAD_TOP_RIGHT_FOUR_WAY"] = 31] = "PRIORITY_ROAD_TOP_RIGHT_FOUR_WAY";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PRIORITY_ROAD_BOTTOM_RIGHT_THREE_WAY_STRAIGHT"] = 35] = "PRIORITY_ROAD_BOTTOM_RIGHT_THREE_WAY_STRAIGHT";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PRIORITY_ROAD_BOTTOM_RIGHT_THREE_WAY_SIDEWAY"] = 36] = "PRIORITY_ROAD_BOTTOM_RIGHT_THREE_WAY_SIDEWAY";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PRIORITY_ROAD_TOP_RIGHT_THREE_WAY_STRAIGHT"] = 37] = "PRIORITY_ROAD_TOP_RIGHT_THREE_WAY_STRAIGHT";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["VALID_IN_DISTANCE"] = 4] = "VALID_IN_DISTANCE";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["STOP_IN"] = 25] = "STOP_IN";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["LEFT_ARROW"] = 11] = "LEFT_ARROW";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["LEFT_BEND_ARROW"] = 13] = "LEFT_BEND_ARROW";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["RIGHT_ARROW"] = 12] = "RIGHT_ARROW";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["RIGHT_BEND_ARROW"] = 14] = "RIGHT_BEND_ARROW";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["ACCIDENT"] = 40] = "ACCIDENT";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["SNOW"] = 9] = "SNOW";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["FOG"] = 8] = "FOG";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["ROLLING_HIGHWAY_INFORMATION"] = 48] = "ROLLING_HIGHWAY_INFORMATION";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["SERVICES"] = 47] = "SERVICES";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["TIME_RANGE"] = 5] = "TIME_RANGE";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PARKING_DISC_TIME_RESTRICTION"] = 43] = "PARKING_DISC_TIME_RESTRICTION";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["WEIGHT"] = 6] = "WEIGHT";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["WET"] = 44] = "WET";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["PARKING_CONSTRAINT"] = 42] = "PARKING_CONSTRAINT";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["NO_WAITING_SIDE_STRIPES"] = 38] = "NO_WAITING_SIDE_STRIPES";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["RAIN"] = 7] = "RAIN";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["SNOW_RAIN"] = 10] = "SNOW_RAIN";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["NIGHT"] = 19] = "NIGHT";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["STOP_4_WAY"] = 21] = "STOP_4_WAY";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["TRUCK"] = 15] = "TRUCK";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["TRACTORS_MAY_BE_PASSED"] = 16] = "TRACTORS_MAY_BE_PASSED";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["HAZARDOUS"] = 17] = "HAZARDOUS";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["TRAILER"] = 18] = "TRAILER";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["ZONE"] = 20] = "ZONE";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["MOTORCYCLE"] = 22] = "MOTORCYCLE";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["MOTORCYCLE_ALLOWED"] = 23] = "MOTORCYCLE_ALLOWED";
  TrafficSign_SupplementarySign_Classification_Type2[TrafficSign_SupplementarySign_Classification_Type2["CAR"] = 24] = "CAR";
  return TrafficSign_SupplementarySign_Classification_Type2;
})(TrafficSign_SupplementarySign_Classification_Type || {});
var TrafficSign_SupplementarySign_Classification_Actor = /* @__PURE__ */ ((TrafficSign_SupplementarySign_Classification_Actor2) => {
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["UNKNOWN"] = 0] = "UNKNOWN";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["OTHER"] = 1] = "OTHER";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["NO_ACTOR"] = 2] = "NO_ACTOR";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["AGRICULTURAL_VEHICLES"] = 3] = "AGRICULTURAL_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["BICYCLES"] = 4] = "BICYCLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["BUSES"] = 5] = "BUSES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["CAMPERS"] = 6] = "CAMPERS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["CARAVANS"] = 7] = "CARAVANS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["CARS"] = 8] = "CARS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["CARS_WITH_CARAVANS"] = 9] = "CARS_WITH_CARAVANS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["CARS_WITH_TRAILERS"] = 10] = "CARS_WITH_TRAILERS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["CATTLE"] = 11] = "CATTLE";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["CHILDREN"] = 12] = "CHILDREN";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["CONSTRUCTION_VEHICLES"] = 13] = "CONSTRUCTION_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["DELIVERY_VEHICLES"] = 14] = "DELIVERY_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["DISABLED_PERSONS"] = 15] = "DISABLED_PERSONS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["EBIKES"] = 16] = "EBIKES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["ELECTRIC_VEHICLES"] = 17] = "ELECTRIC_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["EMERGENCY_VEHICLES"] = 18] = "EMERGENCY_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["FERRY_USERS"] = 19] = "FERRY_USERS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["FORESTRY_VEHICLES"] = 20] = "FORESTRY_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["HAZARDOUS_GOODS_VEHICLES"] = 21] = "HAZARDOUS_GOODS_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["HORSE_CARRIAGES"] = 22] = "HORSE_CARRIAGES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["HORSE_RIDERS"] = 23] = "HORSE_RIDERS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["INLINE_SKATERS"] = 24] = "INLINE_SKATERS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["MEDICAL_VEHICLES"] = 25] = "MEDICAL_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["MILITARY_VEHICLES"] = 26] = "MILITARY_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["MOPEDS"] = 27] = "MOPEDS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["MOTORCYCLES"] = 28] = "MOTORCYCLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["MOTORIZED_MULTITRACK_VEHICLES"] = 29] = "MOTORIZED_MULTITRACK_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["OPERATIONAL_AND_UTILITY_VEHICLES"] = 30] = "OPERATIONAL_AND_UTILITY_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["PEDESTRIANS"] = 31] = "PEDESTRIANS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["PUBLIC_TRANSPORT_VEHICLES"] = 32] = "PUBLIC_TRANSPORT_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["RAILROAD_TRAFFIC"] = 33] = "RAILROAD_TRAFFIC";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["RESIDENTS"] = 34] = "RESIDENTS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["SLURRY_TRANSPORT"] = 35] = "SLURRY_TRANSPORT";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["TAXIS"] = 36] = "TAXIS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["TRACTORS"] = 37] = "TRACTORS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["TRAILERS"] = 38] = "TRAILERS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["TRAMS"] = 39] = "TRAMS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["TRUCKS"] = 40] = "TRUCKS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["TRUCKS_WITH_SEMITRAILERS"] = 41] = "TRUCKS_WITH_SEMITRAILERS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["TRUCKS_WITH_TRAILERS"] = 42] = "TRUCKS_WITH_TRAILERS";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["VEHICLES_WITH_GREEN_BADGES"] = 43] = "VEHICLES_WITH_GREEN_BADGES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["VEHICLES_WITH_RED_BADGES"] = 44] = "VEHICLES_WITH_RED_BADGES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["VEHICLES_WITH_YELLOW_BADGES"] = 45] = "VEHICLES_WITH_YELLOW_BADGES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["WATER_POLLUTANT_VEHICLES"] = 46] = "WATER_POLLUTANT_VEHICLES";
  TrafficSign_SupplementarySign_Classification_Actor2[TrafficSign_SupplementarySign_Classification_Actor2["WINTER_SPORTSPEOPLE"] = 47] = "WINTER_SPORTSPEOPLE";
  return TrafficSign_SupplementarySign_Classification_Actor2;
})(TrafficSign_SupplementarySign_Classification_Actor || {});
var TrafficSign_SupplementarySign_Classification_Arrow_Direction = /* @__PURE__ */ ((TrafficSign_SupplementarySign_Classification_Arrow_Direction2) => {
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["UNKNOWN"] = 0] = "UNKNOWN";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["OTHER"] = 1] = "OTHER";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["NO_DIRECTION"] = 2] = "NO_DIRECTION";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["DIRECT_0_DEG"] = 3] = "DIRECT_0_DEG";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["DIRECT_45_DEG_RIGHT"] = 4] = "DIRECT_45_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["DIRECT_45_DEG_LEFT"] = 5] = "DIRECT_45_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["DIRECT_90_DEG_RIGHT"] = 6] = "DIRECT_90_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["DIRECT_90_DEG_LEFT"] = 7] = "DIRECT_90_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["DIRECT_135_DEG_RIGHT"] = 8] = "DIRECT_135_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["DIRECT_135_DEG_LEFT"] = 9] = "DIRECT_135_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["DIRECT_180_DEG"] = 10] = "DIRECT_180_DEG";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["TURN_45_DEG_RIGHT"] = 11] = "TURN_45_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["TURN_45_DEG_LEFT"] = 12] = "TURN_45_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["TURN_90_DEG_RIGHT"] = 13] = "TURN_90_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["TURN_90_DEG_LEFT"] = 14] = "TURN_90_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["TURN_135_DEG_RIGHT"] = 15] = "TURN_135_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["TURN_135_DEG_LEFT"] = 16] = "TURN_135_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["TURN_180_DEG_RIGHT"] = 17] = "TURN_180_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["TURN_180_DEG_LEFT"] = 18] = "TURN_180_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["CIRCLE_0_DEG"] = 19] = "CIRCLE_0_DEG";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["CIRCLE_45_DEG_RIGHT"] = 20] = "CIRCLE_45_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["CIRCLE_45_DEG_LEFT"] = 21] = "CIRCLE_45_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["CIRCLE_90_DEG_RIGHT"] = 22] = "CIRCLE_90_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["CIRCLE_90_DEG_LEFT"] = 23] = "CIRCLE_90_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["CIRCLE_135_DEG_RIGHT"] = 24] = "CIRCLE_135_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["CIRCLE_135_DEG_LEFT"] = 25] = "CIRCLE_135_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["CIRCLE_180_DEG"] = 26] = "CIRCLE_180_DEG";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["KEEP_LEFT_TO_TURN_0_DEG"] = 27] = "KEEP_LEFT_TO_TURN_0_DEG";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["KEEP_RIGHT_TO_TURN_0_DEG"] = 28] = "KEEP_RIGHT_TO_TURN_0_DEG";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["KEEP_LEFT_TO_TURN_90_DEG_RIGHT"] = 29] = "KEEP_LEFT_TO_TURN_90_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["KEEP_RIGHT_TO_TURN_90_DEG_LEFT"] = 30] = "KEEP_RIGHT_TO_TURN_90_DEG_LEFT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["KEEP_LEFT_DRIVE_BACK_TO_TURN_90_DEG_RIGHT"] = 31] = "KEEP_LEFT_DRIVE_BACK_TO_TURN_90_DEG_RIGHT";
  TrafficSign_SupplementarySign_Classification_Arrow_Direction2[TrafficSign_SupplementarySign_Classification_Arrow_Direction2["KEEP_RIGHT_DRIVE_BACK_TO_TURN_90_DEG_LEFT"] = 32] = "KEEP_RIGHT_DRIVE_BACK_TO_TURN_90_DEG_LEFT";
  return TrafficSign_SupplementarySign_Classification_Arrow_Direction2;
})(TrafficSign_SupplementarySign_Classification_Arrow_Direction || {});
export {
  CameraDetection_Color,
  CameraDetection_ImageShapeType,
  CameraSensorViewConfiguration_ChannelFormat,
  DetectedEntityHeader_DataQualifier,
  DetectedItemHeader_MeasurementState,
  DetectedMovingObject_MovementState,
  DetectedMovingObject_ReferencePoint,
  DetectedTrafficSign_DetectedMainSign_Geometry,
  DetectionClassification,
  EnvironmentalConditions_AmbientIllumination,
  EnvironmentalConditions_Fog,
  EnvironmentalConditions_Precipitation,
  LaneBoundary_Classification_Color,
  LaneBoundary_Classification_Type,
  Lane_Classification_Type,
  MovingObject_Type,
  MovingObject_VehicleClassification_LightState_BrakeLightState,
  MovingObject_VehicleClassification_LightState_GenericLightState,
  MovingObject_VehicleClassification_LightState_IndicatorState,
  MovingObject_VehicleClassification_Type,
  Occupant_Classification_Seat,
  Occupant_Classification_SteeringControl,
  RoadMarking_Classification_Color,
  RoadMarking_Classification_Type,
  SensorDetectionHeader_DataQualifier,
  SensorDetectionHeader_ExtendedQualifier,
  StationaryObject_Classification_Color,
  StationaryObject_Classification_Density,
  StationaryObject_Classification_Material,
  StationaryObject_Classification_Type,
  TrafficLight_Classification_Color,
  TrafficLight_Classification_Icon,
  TrafficLight_Classification_Mode,
  TrafficSignValue_Unit,
  TrafficSign_MainSign_Classification_DirectionScope,
  TrafficSign_MainSign_Classification_Type,
  TrafficSign_SupplementarySign_Classification_Actor,
  TrafficSign_SupplementarySign_Classification_Arrow_Direction,
  TrafficSign_SupplementarySign_Classification_Type,
  TrafficSign_Variability,
  UltrasonicSpecificObjectData_Trend,
  UltrasonicSpecificObjectData_TrilaterationStatus
};
