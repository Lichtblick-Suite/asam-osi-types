import { SensorView } from "../proto/osi_sensorview";
import { GroundTruth } from "../proto/osi_groundtruth";
import { SensorData } from "../proto/osi_sensordata";
import { DetectedMovingObject } from "../proto/osi_detectedobject";
import { TrafficUpdate } from "../proto/osi_trafficupdate";
import { TrafficLight } from "../proto/osi_trafficlight";

type SchemaType = Record<string, any>;

function createClass<T extends SchemaType>(schema: T) {
  return class {
    constructor() {
      Object.assign(this, schema);
    }
  };
}

const schemaDefaults: Record<string, SchemaType> = {
  SensorView: {
    version: undefined,
    timestamp: undefined,
    sensor_id: undefined,
    mounting_position: undefined,
    mounting_position_rmse: undefined,
    host_vehicle_data: undefined,
    global_ground_truth: undefined,
    host_vehicle_id: undefined,
    generic_sensor_view: [],
    radar_sensor_view: [],
    lidar_sensor_view: [],
    camera_sensor_view: [],
    ultrasonic_sensor_view: [],
  } as SensorView,
  GroundTruth: {
    version: undefined,
    timestamp: undefined,
    host_vehicle_id: undefined,
    stationary_object: [],
    moving_object: [],
    traffic_sign: [],
    traffic_light: [],
    road_marking: [],
    lane_boundary: [],
    lane: [],
    occupant: [],
    environmental_conditions: undefined,
    country_code: undefined,
    proj_string: undefined,
    map_reference: undefined,
    model_reference: undefined,
    reference_line: [],
    logical_lane_boundary: [],
    logical_lane: [],
    proj_frame_offset: undefined,
  } as GroundTruth,
  SensorData: {
    version: undefined,
    timestamp: undefined,
    host_vehicle_location: undefined,
    host_vehicle_location_rmse: undefined,
    sensor_id: undefined,
    mounting_position: undefined,
    mounting_position_rmse: undefined,
    sensor_view: [],
    last_measurement_time: undefined,
    stationary_object_header: undefined,
    stationary_object: [],
    moving_object_header: undefined,
    moving_object: [],
    traffic_sign_header: undefined,
    traffic_sign: [],
    traffic_light_header: undefined,
    traffic_light: [],
    road_marking_header: undefined,
    road_marking: [],
    lane_boundary_header: undefined,
    lane_boundary: [],
    lane_header: undefined,
    lane: [],
    occupant_header: undefined,
    occupant: [],
    feature_data: undefined,
    logical_detection_data: undefined,
    virtual_detection_area: undefined,
    system_time: undefined,
  } as SensorData,
  DetectedMovingObject: {
    header: undefined,
    base: undefined,
    base_rmse: undefined,
    reference_point: undefined,
    movement_state: undefined,
    percentage_side_lane_left: 0,
    percentage_side_lane_right: 0,
    candidate: [],
    color_description: undefined,
    radar_specifics: undefined,
    lidar_specifics: undefined,
    camera_specifics: undefined,
    ultrasonic_specifics: undefined,
  } as DetectedMovingObject,
  TrafficUpdate: {
    version: undefined,
    timestamp: undefined,
    update: [],
    internal_state: [],
  } as TrafficUpdate,
  TrafficLight: {
    id: undefined,
    base: undefined,
    classification: undefined,
    model_reference: undefined,
    source_reference: [],
    color_description: undefined,
  } as TrafficLight,
};

export const SchemaClasses = Object.fromEntries(
  Object.entries(schemaDefaults).map(([name, schema]) => [name, createClass(schema)]),
);
