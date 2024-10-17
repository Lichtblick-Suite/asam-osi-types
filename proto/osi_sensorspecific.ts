// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: osi_sensorspecific.proto

/* eslint-disable */
import { type Identifier } from "./osi_common";

/**
 * \brief Message encapsulates all data for detected objects that is specific to
 * radar sensors.
 */
export interface RadarSpecificObjectData {
  /**
   * The radar cross section (RCS) of the detected object.
   *
   * Unit: dB m^2
   */
  rcs?: number | undefined;
}

/**
 * \brief Message encapsulates all data for detected objects that is specific to
 * lidar sensors.
 */
export interface LidarSpecificObjectData {
}

/**
 * \brief Message encapsulates all data for detected objects that is specific to
 * camera sensors.
 */
export interface CameraSpecificObjectData {
}

/**
 * \brief Message encapsulates all data for detected objects that is specific to
 * ultrasonic sensors.
 */
export interface UltrasonicSpecificObjectData {
  /**
   * Maximum measured distance from one sensor which leads to the calculation
   * of this object.
   *
   * Unit: m
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * \endrules
   */
  maximum_measurement_distance_sensor?:
    | number
    | undefined;
  /**
   * This value indicates the probability height for the classification in the
   * calculated object.
   *
   * Unit: %
   *
   * \rules
   * is_less_than_or_equal_to: 1
   * is_greater_than_or_equal_to: 0
   * \endrules
   */
  probability?:
    | number
    | undefined;
  /**
   * This indicates if the detection was calculated based on one or multiple
   * sensors.
   */
  trilateration_status?:
    | UltrasonicSpecificObjectData_TrilaterationStatus
    | undefined;
  /** Describes the general moving direction of the detection. */
  trend?:
    | UltrasonicSpecificObjectData_Trend
    | undefined;
  /**
   * Ultrasonic signalway. Sender to receiver.
   *
   * \note This information can also be derived from the corresponding \c
   * UltrasonicDetection. \c UltrasonicDetection refer to DetectedXXX by \c
   * UltrasonicDetection::object_id.
   */
  signalway?: UltrasonicSpecificObjectData_Signalway[] | undefined;
}

/**
 * This indicates if the object was calculated based on one or multiple
 * sensors.
 */
export enum UltrasonicSpecificObjectData_TrilaterationStatus {
  /** UNKNOWN - Unknown (must not be used in ground truth). */
  UNKNOWN = 0,
  /** OTHER - Other (unspecified but known). */
  OTHER = 1,
  /** NOT_TRILATERATED - No trilateration used. */
  NOT_TRILATERATED = 2,
  /** TRILATERATED - Trilateration used. */
  TRILATERATED = 3,
}

/** Describes the general moving direction of the detection. */
export enum UltrasonicSpecificObjectData_Trend {
  /** UNKNOWN - Unknown (must not be used in ground truth). */
  UNKNOWN = 0,
  /** OTHER - Other (unspecified but known). */
  OTHER = 1,
  /**
   * CONSTANT_APPROACHING - Distance (object, sensor) is constant. The object has approached in
   * the past before it was constant.
   */
  CONSTANT_APPROACHING = 2,
  /**
   * CONSTANT - Distance (object, sensor) is constant. The object has departed in the
   * past before it was constant or there is no history.
   */
  CONSTANT = 3,
  /** APPROACHING - Distance (object, sensor) is decreasing. */
  APPROACHING = 4,
  /** DEPARTING - Distance (object, sensor) is increasing. */
  DEPARTING = 5,
}

/**
 * \brief Message encapsulates all data for detected objects that is
 * specific to ultrasonic sensors.
 */
export interface UltrasonicSpecificObjectData_Signalway {
  /** The ID of the ultrasonic sensor's sender. */
  sender_id?:
    | Identifier
    | undefined;
  /** The ID of the ultrasonic sensor's receiver. */
  receiver_id?: Identifier | undefined;
}
