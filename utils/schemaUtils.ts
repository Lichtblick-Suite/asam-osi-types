import { ASAM_OSI_SCHEMAS } from "../schemas/schemas";

interface ValidateSchemaResult {
  result: boolean;
  missingKeys: string[];
}

export const detectSchemaType = (message: Record<string, unknown>): string | undefined => {
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

export const validateAsamOsiMessage = (message: Record<string, unknown>): ValidateSchemaResult => {
  const detectedType = detectSchemaType(message);
  console.info("Selected Schema type:", detectedType);

  if (!detectedType) {
    return { result: false, missingKeys: [] };
  }

  const schemaKeys = ASAM_OSI_SCHEMAS[detectedType];

  if (!schemaKeys) {
    return { result: false, missingKeys: [] };
  }

  const missingKeys = schemaKeys.filter(
    (key) => !Object.prototype.hasOwnProperty.call(message, key),
  );

  console.info("Missing Keys:", missingKeys);

  return { result: missingKeys.length === 0, missingKeys };
};
