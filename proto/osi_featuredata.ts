// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: osi_featuredata.proto

/* eslint-disable */
import {
  type ColorDescription,
  type Identifier,
  type MountingPosition,
  type Spherical3d,
  type Timestamp,
  type Vector3d,
} from "./osi_common";
import { type InterfaceVersion } from "./osi_version";

/** Definition of a basic detection classifications. */
export enum DetectionClassification {
  /** UNKNOWN - Detection is unknown (must not be used in ground truth). */
  UNKNOWN = 0,
  /** OTHER - Other (unspecified but known) detection. */
  OTHER = 1,
  /**
   * INVALID - Invalid detection, not to be used for object tracking, of unspecified
   * type (none of the other types applies).
   */
  INVALID = 2,
  /** CLUTTER - Clutter (noise, spray, rain, fog etc.). */
  CLUTTER = 3,
  /** OVERDRIVABLE - Over-drivable (ground etc.). */
  OVERDRIVABLE = 4,
  /** UNDERDRIVABLE - Under-drivable (sign gantry etc.). */
  UNDERDRIVABLE = 5,
}

/**
 * \brief Interface for sensor data containing information without a history
 * in contrast to interpreted data after object hypothesis and tracking.
 *
 * All information regarding the environment is given with respect to the sensor
 * coordinate system specified in \c SensorDetectionHeader::mounting_position.
 * When simulating multiple sensors, each sensor has an individual copy of
 * \c FeatureData in its own reference frame. This allows an independent
 * treatment of the sensors.
 */
export interface FeatureData {
  /**
   * The interface version used by the sender (i.e. the simulation
   * environment).
   */
  version?:
    | InterfaceVersion
    | undefined;
  /** Radar detections for multiple radar sensors (sensor fusion). */
  radar_sensor?:
    | RadarDetectionData[]
    | undefined;
  /** Lidar detections for multiple lidar sensors (sensor fusion). */
  lidar_sensor?:
    | LidarDetectionData[]
    | undefined;
  /**
   * Ultrasonic detections for multiple ultrasonic sensors (sensor fusion).
   *
   * \note Required for ultrasonic sensors: Detections will be send by the
   * emitting ultrasonic sensor, including all indirect detections received
   * by neighboring sensors.
   */
  ultrasonic_sensor?:
    | UltrasonicDetectionData[]
    | undefined;
  /** Camera detections for multiple camera sensors (sensor fusion). */
  camera_sensor?: CameraDetectionData[] | undefined;
}

/** \brief The header attributes of each sensor's detection list. */
export interface SensorDetectionHeader {
  /**
   * Time stamp at which the measurement was taken (not the time at which it
   * was processed or at which it is transmitted) in the global synchronized
   * time.
   *
   * \note See \c SensorData::timestamp and
   * \c SensorData::last_measurement_time for detailed discussions on the
   * semantics of time-related fields.
   */
  measurement_time?:
    | Timestamp
    | undefined;
  /**
   * Monotonous counter to identify the exact cycle.
   * In general the detection function is called periodically and
   * \c #cycle_counter corresponds to the number of periods.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * \endrules
   */
  cycle_counter?:
    | number
    | undefined;
  /**
   * The physical mounting position of the sensor (origin and orientation of
   * the sensor frame). Both origin and orientation are given in and with
   * respect to the host vehicle coordinate system [1].
   *
   * The sensor frame's x-axis is pointing in the central viewing direction of
   * the sensor. It is the angle bisector of the sensor's horizontal and
   * vertical field of view. The terms horizontal and vertical must be
   * understood as names for the two principal planes of the sensor's field of
   * view (relative to the sensor frame's orientation), which do not have to
   * be horizontal or vertical in the strict sense of being parallel or
   * perpendicular to the local gravitational vector. The horizontal field
   * of view defines the sensor frame's xy-plane and the vertical field
   * of view defines the xz-plane. The sensor frame is right-handed and the
   * z-axis is pointing in an upward direction.
   *
   * The sensor frame uses cartesian coordinates. The sensor frame's origin is
   * identical to sensor detection frame's origin. Detections are defined in
   * the sensor detection frame which uses e.g. spherical coordinates.
   *
   * \par Reference:
   * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
   *
   * \rules
   * is_set
   * \endrules
   */
  mounting_position?:
    | MountingPosition
    | undefined;
  /**
   * The origin/orientation of the sensor frame represents the current
   * mounting pose to the best knowledge of the sensor. The estimation of the
   * 6D pose given by the calibration. The uncertainty of this estimation is
   * given with the corresponding 6D root mean squared error. The estimation
   * of the current origin does not include effects due to short-time
   * dynamics, such as pitch angles from braking, but includes long-time
   * calibration values, such as pitch angles from luggage in the trunk.
   */
  mounting_position_rmse?:
    | MountingPosition
    | undefined;
  /**
   * Data Qualifier expresses to what extent the content of this event can be
   * relied on.
   */
  data_qualifier?:
    | SensorDetectionHeader_DataQualifier
    | undefined;
  /**
   * The current number of valid detections in the detections list.
   *
   * \note This value has to be set if the list contains invalid detections.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * \endrules
   */
  number_of_valid_detections?:
    | number
    | undefined;
  /**
   * The ID of the sensor at host vehicle's \c #mounting_position.
   *
   * This ID can equal \c SensorData::sensor_id, if \c SensorData holds only
   * data from one sensor/sensor model.
   *
   * \rules
   * is_set
   * \endrules
   */
  sensor_id?:
    | Identifier
    | undefined;
  /**
   * The extended qualifier describes the reason (not the effect) why the
   * event data qualifier, \c #data_qualifier, is reduced or not available.
   */
  extended_qualifier?: SensorDetectionHeader_ExtendedQualifier | undefined;
}

/**
 * Data qualifier communicates the overall availability of the
 * interface.
 */
export enum SensorDetectionHeader_DataQualifier {
  /** UNKNOWN - Unknown (must not be used in ground truth). */
  UNKNOWN = 0,
  /** OTHER - Other (unspecified but known). */
  OTHER = 1,
  /** AVAILABLE - Data is available. */
  AVAILABLE = 2,
  /** AVAILABLE_REDUCED - Reduced data is available. */
  AVAILABLE_REDUCED = 3,
  /** NOT_AVAILABLE - Data is not available. */
  NOT_AVAILABLE = 4,
  /** BLINDNESS - Sensor is blind. */
  BLINDNESS = 5,
  /** TEMPORARY_AVAILABLE - Sensor temporary available. */
  TEMPORARY_AVAILABLE = 6,
  /** INVALID - Sensor invalid. */
  INVALID = 7,
}

/**
 * The extended qualifier describes the reason (not the effect) why the
 * event data qualifier, \c #data_qualifier, is reduced or not available.
 */
export enum SensorDetectionHeader_ExtendedQualifier {
  /** UNKNOWN - Unknown (must not be used in ground truth). */
  UNKNOWN = 0,
  /** OTHER - Other (unspecified but known). */
  OTHER = 1,
  /** NORMAL_OPERATION_MODE - Normal operation mode. */
  NORMAL_OPERATION_MODE = 2,
  /** POWER_UP_OR_DOWN - Power up or down. */
  POWER_UP_OR_DOWN = 3,
  /** SENSOR_NOT_CALIBRATED - Sensor not calibrated. */
  SENSOR_NOT_CALIBRATED = 4,
  /** SENSOR_BLOCKED - Sensor blocked. */
  SENSOR_BLOCKED = 5,
  /** SENSOR_MISALIGNED - Sensor misaligned. */
  SENSOR_MISALIGNED = 6,
  /** BAD_SENSOR_ENVIRONMENTAL_CONDITION - Bad sensor environmental condition (e.g. Darkness for vision). */
  BAD_SENSOR_ENVIRONMENTAL_CONDITION = 7,
  /** REDUCED_FIELD_OF_VIEW - Reduced field of view. */
  REDUCED_FIELD_OF_VIEW = 8,
  /** INPUT_NOT_AVAILABLE - Input not available. */
  INPUT_NOT_AVAILABLE = 9,
  /** INTERNAL_REASON - Internal reason (e.g. an internal hardware or software error has occurred). */
  INTERNAL_REASON = 10,
  /**
   * EXTERNAL_DISTURBANCE - External disturbance, sensor specific for front radar (e.g.
   * Interference of different radar sensors).
   */
  EXTERNAL_DISTURBANCE = 11,
  /** BEGINNING_BLOCKAGE - Beginning blockage, sensor specific for front radar. */
  BEGINNING_BLOCKAGE = 12,
}

/** \brief Data from one radar sensor including a list of detections. */
export interface RadarDetectionData {
  /** Header attributes of radar detection from one radar sensor. */
  header?:
    | SensorDetectionHeader
    | undefined;
  /** List of radar detections constituting the radar detection list. */
  detection?: RadarDetection[] | undefined;
}

/** \brief A radar detection. */
export interface RadarDetection {
  /**
   * Existence probability of the detection not based on history. Value does
   * not depend on any past experience with similar detections.
   *
   * \note Use as confidence measure where a low value means less confidence
   * and a high value indicates strong confidence.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  existence_probability?:
    | number
    | undefined;
  /**
   * ID of the detected object this detection is associated to.
   *
   * \note ID = MAX(uint64) indicates no reference to an object.
   *
   * \rules
   * refers_to: DetectedObject
   * \endrules
   */
  object_id?:
    | Identifier
    | undefined;
  /**
   * Measured position of the detection given in spherical coordinates in the
   * sensor coordinate system.
   */
  position?:
    | Spherical3d
    | undefined;
  /** Root mean squared error of the measured position of the detection. */
  position_rmse?:
    | Spherical3d
    | undefined;
  /**
   * Radial velocity of the detection positive in direction to the sensor.
   *
   * Unit: m/s
   */
  radial_velocity?:
    | number
    | undefined;
  /**
   * Root mean squared error of the object measured radial velocity.
   *
   * Unit: m/s
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * \endrules
   */
  radial_velocity_rmse?:
    | number
    | undefined;
  /**
   * The radar cross section (RCS) of the radar detection.
   *
   * Unit: dB m^2
   */
  rcs?:
    | number
    | undefined;
  /**
   * The signal to noise ratio (SNR) of the radar detection.
   *
   * Unit: dB
   */
  snr?:
    | number
    | undefined;
  /**
   * Describes the possibility whether more than one object may have led to
   * this detection.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  point_target_probability?:
    | number
    | undefined;
  /**
   * Ambiguity Information:
   * Each ambiguous measurement generates one Ambiguity ID. Ambiguity is
   * indicated by an identical ambiguity ID.
   *
   * \note Unambiguous measurements have the ambiguity ID 0.
   *
   * \note Multiple separate detections, from e.g. a large object, do not
   * necessarily on their own create any ambiguity. Therefore they do not
   * usually share an ambiguity ID. They can however be ambiguous
   * with other detections.
   */
  ambiguity_id?:
    | Identifier
    | undefined;
  /** Basic classification of the detection. */
  classification?: DetectionClassification | undefined;
}

/** \brief Data from one lidar sensor including a list of detections. */
export interface LidarDetectionData {
  /** Header attributes of lidar detection from one lidar sensor. */
  header?:
    | SensorDetectionHeader
    | undefined;
  /** List of lidar detections. */
  detection?: LidarDetection[] | undefined;
}

/** \brief A point or vertical line in a lidar point cloud. */
export interface LidarDetection {
  /**
   * Existence probability of the detection not based on history. Value does
   * not depend on any past experience with similar detections.
   *
   * \note Used as confidence measure where a low value means less confidence
   * and a high value indicates strong confidence.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  existence_probability?:
    | number
    | undefined;
  /**
   * ID of the detected object this detection is associated to.
   *
   * \note ID = MAX(uint64) indicates no reference to an object.
   *
   * \rules
   * refers_to: DetectedObject
   * \endrules
   */
  object_id?:
    | Identifier
    | undefined;
  /**
   * Measured position of the detection given in spherical coordinates in the
   * sensor coordinate system.
   */
  position?:
    | Spherical3d
    | undefined;
  /** Root mean squared error of the measured position of the detection. */
  position_rmse?:
    | Spherical3d
    | undefined;
  /**
   * The height value which is required when multiple scan points are
   * vertically clustered. Only vertical clustering is allowed (z-axis).
   *
   * Unit: m
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * \endrules
   */
  height?:
    | number
    | undefined;
  /**
   * Root mean squared error of the object height.
   *
   * Unit: m
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * \endrules
   */
  height_rmse?:
    | number
    | undefined;
  /**
   * Intensity or equivalent value of the detection's echo.
   *
   * Unit: %
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 100
   * \endrules
   */
  intensity?:
    | number
    | undefined;
  /**
   * The free space probability in the range [0.0, 1.0] from the origin of the
   * sensor up to this detection, as given by the distance.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  free_space_probability?:
    | number
    | undefined;
  /** Basic classification of the detection. */
  classification?:
    | DetectionClassification
    | undefined;
  /** Lambertian reflectivity. */
  reflectivity?:
    | number
    | undefined;
  /**
   * Echo pulse width of the detection's echo.
   * Several sensors output an echo pulse width instead of an intensity for each individual detection.
   * The echo pulse is measured in m and measures the extent of the object parts or atmospheric particles that produce the echo.
   * \note For more details see [1] Fig. 7 and 8.
   * \note Fig. 7 shows an example where the two echos are reflected from the edges A-B and C-D.
   * \note Fig. 8 shows how the echo pulse width is measured as the range between the rising edge and the falling edge that crosses the intensity threshold.
   *
   * Unit: m
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * \endrules
   *
   * \par Reference:
   * [1] Rosenberger, P., Holder, M.F., Cianciaruso, N. et al. (2020). <em>Sequential lidar sensor system simulation: a modular approach for simulation-based safety validation of automated driving</em> Automotive Engine Technology 5, Fig 7, Fig 8. Retrieved May 10, 2021, from https://doi.org/10.1007/s41104-020-00066-x
   */
  echo_pulse_width?:
    | number
    | undefined;
  /**
   * Radial velocity of the detection positive in direction to the sensor.
   *
   * Unit: m/s
   */
  radial_velocity?:
    | number
    | undefined;
  /** ID of the corresponding lidar beam. */
  beam_id?: Identifier | undefined;
}

/** \brief Specific header extension for ultrasonic sensors. */
export interface UltrasonicDetectionSpecificHeader {
  /**
   * Maximal range of the ultrasonic sensor.
   *
   * Unit: m
   */
  max_range?:
    | number
    | undefined;
  /**
   * The current number of valid indirect detections in the detections list.
   * The detections are measured by a virtual sensor (i.e. sender and
   * receiver are different sensors).
   *
   * \note This value has to be set if the list contains invalid detections.
   */
  number_of_valid_indirect_detections?: number | undefined;
}

/**
 * \brief Data from one ultrasonic sensor including a list of detections.
 * This list is generated by the sending ultrasonic sensor. Indirectly received
 * signals from other ultrasonic sensors are included in this message.
 *
 * Direct detections:
 *
 * Sending: Ultrasonic Sensor ID 1
 *
 * Receiving:
 * - Direct: Ultrasonic Sensor ID 1
 * - Indirect: Ultrasonic Sensor ID 2 and 3
 *
 * \image html OSI_USSensor.svg
 *
 * \note Direct detections lie on circles with the sending sensor as center.
 */
export interface UltrasonicDetectionData {
  /** Header attributes of ultrasonic detection from one ultrasonic sensor. */
  header?:
    | SensorDetectionHeader
    | undefined;
  /**
   * Additional header attributes of ultrasonic detection from one ultrasonic
   * sensor.
   */
  specific_header?:
    | UltrasonicDetectionSpecificHeader
    | undefined;
  /** List of ultrasonic detections. */
  detection?:
    | UltrasonicDetection[]
    | undefined;
  /**
   * List of ultrasonic indirect detections (sender and receiver sensors are
   * not the same).
   */
  indirect_detection?: UltrasonicIndirectDetection[] | undefined;
}

/**
 * \brief Ultrasonic detection from the sensor (same sensor as sender and
 * receiver).
 *
 * Direct detections:
 *
 * Sending: Ultrasonic Sensor ID 1
 *
 * Receiving: Ultrasonic Sensor ID 1
 *
 * \image html OSI_USSensor_direct.svg
 *
 * \note Direct detections lie on circles with the sensor as center.
 */
export interface UltrasonicDetection {
  /**
   * Existence probability of the detection not based on history. Value does
   * not depend on any past experience with similar detections.
   *
   * \note Used as confidence measure where a low value means less confidence
   * and a high value indicates strong confidence.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  existence_probability?:
    | number
    | undefined;
  /**
   * ID of the detected object this detection is associated to.
   *
   * \note ID = MAX(uint64) indicates no reference to an object.
   *
   * \rules
   * refers_to: DetectedObject
   * \endrules
   */
  object_id?:
    | Identifier
    | undefined;
  /**
   * Measured distance (radius) of the detection.
   *
   * Unit: m
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * \endrules
   */
  distance?: number | undefined;
}

/**
 * \brief Ultrasonic detection received by another ultrasonic sensor (different
 * sensors as sender and receiver).
 *
 * Indirect detections:
 *
 * Sending: Ultrasonic Sensor ID 1
 *
 * Receiving: Ultrasonic Sensor ID 2 and 3
 *
 * \image html OSI_USSensor_indirect.svg
 *
 * \note Indirect detections lie on ellipses with the sending resp. receiving
 * sensor in the focal points.
 */
export interface UltrasonicIndirectDetection {
  /**
   * Existence probability of the detection not based on history. Value does
   * not depend on any past experience with similar detections.
   *
   * \note Used as confidence measure where a low value means less confidence
   * and a high value indicates strong confidence.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  existence_probability?:
    | number
    | undefined;
  /**
   * ID of the detected object this detection is associated to.
   *
   * \note ID = MAX(uint64) indicates no reference to an object.
   *
   * \rules
   * refers_to: DetectedObject
   * \endrules
   */
  object_id?:
    | Identifier
    | undefined;
  /**
   * First parameter b of an ellipsoid equation.
   *
   * Unit: m
   */
  ellipsoid_radial?:
    | number
    | undefined;
  /**
   * Second parameter b of an ellipsoid equation.
   *
   * Unit: m
   */
  ellipsoid_axial?:
    | number
    | undefined;
  /**
   * The ID of the sensor's receiver. Sender ID is stored in the header \c
   * SensorDetectionHeader.
   */
  receiver_id?:
    | Identifier
    | undefined;
  /**
   * The vector to the receiver's origin in sending ultrasonic sensor frame.
   * The vector is also the direction of \c #ellipsoid_axial.
   */
  receiver_origin?: Vector3d | undefined;
}

/** \brief Specific header extension for camera sensors. */
export interface CameraDetectionSpecificHeader {
  /**
   * The current number of points which all detections in the detections list
   * refer.
   *
   * \note This value has to be set if the list contains invalid points.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * \endrules
   */
  number_of_valid_points?: number | undefined;
}

/** \brief Data from one camera sensor including a list of detections. */
export interface CameraDetectionData {
  /** Header attributes of camera detection from one camera sensor. */
  header?:
    | SensorDetectionHeader
    | undefined;
  /** Additional header attributes of camera detection from one camera sensor. */
  specific_header?:
    | CameraDetectionSpecificHeader
    | undefined;
  /** List of camera detections. */
  detection?:
    | CameraDetection[]
    | undefined;
  /** List of points which are used by detections. */
  point?: CameraPoint[] | undefined;
}

/** \brief Camera detection from the sensor. */
export interface CameraDetection {
  /**
   * Existence probability of the detection not based on history. Value does
   * not depend on any past experience with similar detections.
   *
   * \note Used as confidence measure where a low value means less confidence
   * and a high value indicates strong confidence.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  existence_probability?:
    | number
    | undefined;
  /**
   * ID of the detected object this detection is associated to.
   *
   * \note ID = MAX(uint64) indicates no reference to an object.
   *
   * \rules
   * refers_to: DetectedObject
   * \endrules
   */
  object_id?:
    | Identifier
    | undefined;
  /**
   * Difference to the base timestamp \c
   * SensorDetectionHeader::measurement_time.
   *
   * The timestamp of this detection :=
   * \c SensorDetectionHeader::measurement_time + \c #time_difference.
   */
  time_difference?:
    | Timestamp
    | undefined;
  /** Definition of the image shape type of this detection. */
  image_shape_type?:
    | CameraDetection_ImageShapeType
    | undefined;
  /**
   * The defined shape is background.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_background?:
    | boolean
    | undefined;
  /**
   * The defined shape is foreground.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_foreground?:
    | boolean
    | undefined;
  /**
   * The defined shape is flat.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_flat?:
    | boolean
    | undefined;
  /**
   * The defined shape is upright.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_upright?:
    | boolean
    | undefined;
  /**
   * The defined shape is ground.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_ground?:
    | boolean
    | undefined;
  /**
   * The defined shape is sky.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_sky?:
    | boolean
    | undefined;
  /**
   * The defined shape is vegetation.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_vegetation?:
    | boolean
    | undefined;
  /**
   * The defined shape is a road.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_road?:
    | boolean
    | undefined;
  /**
   * The defined shape is a non-driving lane (e.g. sidewalk).
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_non_driving_lane?:
    | boolean
    | undefined;
  /**
   * The defined shape is non-road (e.g. traffic island).
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_non_road?:
    | boolean
    | undefined;
  /**
   * The defined shape is a stationary object.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_stationary_object?:
    | boolean
    | undefined;
  /**
   * The defined shape is a possible moving object.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_moving_object?:
    | boolean
    | undefined;
  /**
   * The defined shape is a landmark.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_landmark?:
    | boolean
    | undefined;
  /**
   * The defined shape is a traffic sign.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_traffic_sign?:
    | boolean
    | undefined;
  /**
   * The defined shape is a traffic light.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_traffic_light?:
    | boolean
    | undefined;
  /**
   * The defined shape is a road marking sign.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_road_marking?:
    | boolean
    | undefined;
  /**
   * The defined shape is a vehicle.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_vehicle?:
    | boolean
    | undefined;
  /**
   * The defined shape is a pedestrian.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_pedestrian?:
    | boolean
    | undefined;
  /**
   * The defined shape is an animal.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_animal?:
    | boolean
    | undefined;
  /**
   * The defined shape is a pedestrian seen by the sensor from the front.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_pedestrian_front?:
    | boolean
    | undefined;
  /**
   * The defined shape is a pedestrian seen by the sensor from the side.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_pedestrian_side?:
    | boolean
    | undefined;
  /**
   * The defined shape is a pedestrian seen by the sensor from the rear.
   * The probability for this classification is at least
   * \c #shape_classification_probability.
   */
  shape_classification_pedestrian_rear?:
    | boolean
    | undefined;
  /**
   * This probability defines the minimum probability for each selected
   * shape classification.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  shape_classification_probability?:
    | number
    | undefined;
  /**
   * The dominant color of the shape.
   *
   * \attention DEPRECATED: This color enum will be removed in version
   * 4.0.0. Use the field \c #color_description (\c ColorDescription)
   * instead.
   */
  color?:
    | CameraDetection_Color
    | undefined;
  /**
   * The probability of the shape's color.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  color_probability?:
    | number
    | undefined;
  /**
   * If one shape has different shape classifications and shape classification
   * probability or color and color probability, all detections in this cycle
   * have the same ambiguity ID.
   *
   * \note ID = MAX(uint64) indicates no reference to an object.
   */
  ambiguity_id?:
    | Identifier
    | undefined;
  /** Index of the first point in the camera detection. */
  first_point_index?:
    | number
    | undefined;
  /**
   * Number of points which defines the shape.
   * \c #image_shape_type may restrict the number of possible values.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * \endrules
   */
  number_of_points?:
    | number
    | undefined;
  /** The dominant color of the shape. */
  color_description?: ColorDescription | undefined;
}

/**
 * Definition of shape dominant color.
 *
 * \attention DEPRECATED: This color enum will be removed in version
 * 4.0.0. Use \c ColorDescription instead.
 */
export enum CameraDetection_Color {
  /**
   * UNKNOWN - Color of the shape is unknown (must not be used in ground
   * truth).
   */
  UNKNOWN = 0,
  /** OTHER - Shape with another (unspecified but known) color. */
  OTHER = 1,
  /** BLACK - Shape with black color. */
  BLACK = 2,
  /** GRAY - Shape with gray color. */
  GRAY = 3,
  /**
   * GREY - Shape with gray color.
   *
   * \note Deprecated variant spelling of COLOR_GRAY
   */
  GREY = 3,
  /** WHITE - Shape with white color. */
  WHITE = 4,
  /** YELLOW - Shape with yellow color. */
  YELLOW = 5,
  /** ORANGE - Shape with orange color. */
  ORANGE = 6,
  /** RED - Shape with red color. */
  RED = 7,
  /** VIOLET - Shape with violet color. */
  VIOLET = 8,
  /** BLUE - Shape with blue color. */
  BLUE = 9,
  /** GREEN - Shape with green color. */
  GREEN = 10,
  /** REFLECTIVE - Shape with reflective color. */
  REFLECTIVE = 11,
}

/** Definition of different image shape types. */
export enum CameraDetection_ImageShapeType {
  /** UNKNOWN - Shape type is unknown (must not be used in ground truth). */
  UNKNOWN = 0,
  /** OTHER - Other (unspecified but known) shape type. */
  OTHER = 1,
  /**
   * POINT - Image shape is defined by a single point.
   *
   * Allowed number of referenced points: 1
   */
  POINT = 2,
  /**
   * BOX - Image shape is defined by a box.
   *
   * Allowed number of referenced points: 2 or 3
   *
   * Allowed number of referenced points = 2: first and third corner of
   * the box. Box is aligned horizontal resp. vertical.
   *
   * Allowed number of referenced points = 3: first, second and third
   * corner of the box. fourth corner is calculated by first+third-second
   * corner.
   */
  BOX = 3,
  /**
   * ELLIPSE - Image shape is defined by an ellipse.
   *
   * Allowed number of referenced points: 2 or 3
   *
   * Allowed number of referenced points = 2: center point of circle,
   * point on circle
   *
   * Allowed number of referenced points = 3: center point of ellipse,
   * point on ellipse at main axis of ellipse, point on ellipse at minor
   * axis of ellipse
   */
  ELLIPSE = 4,
  /**
   * POLYGON - Image shape is defined by a polygon.
   *
   * Allowed number of referenced points: 3 .. n
   *
   * Polygon is defined by the first, second, third and so on points. The
   * polygon shape is closed (last and first point are different).
   */
  POLYGON = 5,
  /**
   * POLYLINE - Image shape is defined by a polyline.
   *
   * Allowed number of referenced points: 2 .. n
   *
   * Polyline is defined by the first, second and so on points. The
   * polyline shape is open.
   */
  POLYLINE = 6,
  /**
   * POINT_CLOUD - Image shape is defined by a point cloud.
   *
   * Allowed number of referenced points: 2 .. n
   *
   * Point cloud is defined by a number of points. The points are not
   * connected in the point cloud.
   */
  POINT_CLOUD = 7,
}

/** \brief Camera point from the sensor. */
export interface CameraPoint {
  /**
   * Existence probability of the point not based on history. Value does
   * not depend on any past experience with similar points.
   *
   * \note Used as confidence measure where a low value means less confidence
   * and a high value indicates strong confidence.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  existence_probability?:
    | number
    | undefined;
  /**
   * Measured point referred by one camera detection given in spherical
   * coordinates in the sensor coordinate system.
   */
  point?:
    | Spherical3d
    | undefined;
  /** Root mean squared error of the measured point. */
  point_rmse?: Spherical3d | undefined;
}
