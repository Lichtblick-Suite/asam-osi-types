import { ASAM_OSI_SCHEMAS } from "../schemas/schemas";

export const detectSchemaType = (message: Record<string, any>): string | undefined => {
  const hasKeys = (keys: string[]) => keys.some((key) => key in message);

  switch (true) {
    case hasKeys([
      "sensor_id",
      "host_vehicle_data",
      "global_ground_truth",
      "generic_sensor_view",
      "radar_sensor_view",
      "lidar_sensor_view",
      "camera_sensor_view",
      "ultrasonic_sensor_view",
      "mounting_position",
    ]):
      return "SensorView";

    case hasKeys(["stationary_object", "moving_object", "traffic_sign", "lane_boundary"]):
      return "GroundTruth";

    case hasKeys([
      "host_vehicle_location",
      "host_vehicle_location_rmse",
      "feature_data",
      "last_measurement_time",
      "lane_boundary_header",
    ]):
      return "SensorData";

    case hasKeys([
      "header",
      "base",
      "reference_point",
      "movement_state",
      "percentage_side_lane_left",
      "percentage_side_lane_right",
    ]):
      return "DetectedMovingObject";

    case hasKeys(["update", "internal_state"]):
      return "TrafficUpdate";

    case hasKeys([
      "id",
      "classification",
      "model_reference",
      "source_reference",
      "color_description",
    ]):
      return "TrafficLight";

    default:
      return undefined;
  }
};

export const validateAsamOsiMessage = (message: Record<string, any>): boolean => {
  const detectedType = detectSchemaType(message);
  console.info("Selected Schema type:", detectedType);

  if (!detectedType) return false;

  const schemaKeys = ASAM_OSI_SCHEMAS[detectedType];

  if (!schemaKeys) return false;

  const missingKeys = schemaKeys.filter(
    (key) => !Object.prototype.hasOwnProperty.call(message, key),
  );

  console.info("Missing Keys:", missingKeys);

  return missingKeys.length === 0;
};
