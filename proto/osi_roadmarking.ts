// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: osi_roadmarking.proto

/* eslint-disable */
import { type BaseStationary, type Identifier } from "./osi_common";
import { type TrafficSign_MainSign_Classification_Type, type TrafficSignValue } from "./osi_trafficsign";

/**  */
export interface RoadMarking {
  /** The ID of the road marking. */
  id?:
    | Identifier
    | undefined;
  /**
   * The base parameters of the road marking.
   *
   * The orientation of the bounding box \c #base
   * \c BaseStationary::orientation is defined as follows:
   * The z-axis of the \c BaseStationary::orientation is the vector from the
   * 'bottom' to the 'top' of the road marking's (i.e. painted traffic sign)
   * 2D image area.
   * (Normally it is in the ground truth xy-plain.)
   * The x-axis of the \c BaseStationary::orientation is the view normal of
   * the road marking's 2D image area.
   * Normally this x-axis points to the sky.
   *
   * \note If a valid unidirectional road marking is assigned to the host
   * vehicle's current lane and the driving direction of the latter roughly
   * matches the z-axis of the \c #base \c BaseStationary::orientation then
   * the road marking is of relevance to (i.e. in effect for) the host
   * vehicle.
   */
  base?:
    | BaseStationary
    | undefined;
  /** The classification data for the road marking. */
  classification?: RoadMarking_Classification | undefined;
}

/** \brief \c Classification data for a road surface marking. */
export interface RoadMarking_Classification {
  /** The type of the road marking. */
  type?:
    | RoadMarking_Classification_Type
    | undefined;
  /**
   * Traffic sign as road marking (color image, monochrome image or
   * character string).
   *
   * \note Field is set if ( \c #type == \c #TYPE_PAINTED_TRAFFIC_SIGN or
   * \c #TYPE_SYMBOLIC_TRAFFIC_SIGN or \c #TYPE_TEXTUAL_TRAFFIC_SIGN ).
   *
   * \note Field need not be set (or set to \c #TYPE_OTHER)
   * if road marking type (\c #type) does not require it.
   */
  traffic_main_sign_type?:
    | TrafficSign_MainSign_Classification_Type
    | undefined;
  /**
   * The monochrome color of the road marking.
   * \note Field need not be set (or set to \c #COLOR_OTHER)
   * if road marking type does not require it (e.g. for \c #type ==
   * \c #TYPE_PAINTED_TRAFFIC_SIGN).
   */
  monochrome_color?:
    | RoadMarking_Classification_Color
    | undefined;
  /**
   * Additional value associated with the road marking, e.g. value of the
   * speed limit.
   *
   * \note Field need not be set if road marking type does not require it.
   *
   * \note OSI 3 uses \c #value_text and not \c TrafficSignValue for
   * simple chars.
   */
  value?:
    | TrafficSignValue
    | undefined;
  /**
   * Additional text value as road marking, e.g. BUS, TAXI etc.
   *
   * \note Field need not be set if road marking type does not require it.
   */
  value_text?:
    | string
    | undefined;
  /**
   * The ID(s) of the lane(s) that the road marking is assigned to.
   * May be multiple if the road marking goes across multiple lanes.
   *
   * \note OSI uses singular instead of plural for repeated field names.
   */
  assigned_lane_id?: Identifier[] | undefined;
}

/** Definition of road marking types. */
export enum RoadMarking_Classification_Type {
  /**
   * UNKNOWN - Type of road marking is unknown (must not be used in ground
   * truth).
   */
  UNKNOWN = 0,
  /** OTHER - Other (unspecified but known) type of road marking. */
  OTHER = 1,
  /**
   * PAINTED_TRAFFIC_SIGN - Paint on the road surface indicating a color image of a traffic
   * sign.
   */
  PAINTED_TRAFFIC_SIGN = 2,
  /**
   * SYMBOLIC_TRAFFIC_SIGN - Paint on the road surface indicating a monochrome logical symbol
   * of a traffic sign (e.g. digits 50 as start of speed limit 50 or
   * stop line for stop sign).
   */
  SYMBOLIC_TRAFFIC_SIGN = 3,
  /**
   * TEXTUAL_TRAFFIC_SIGN - Paint on the road surface as a character string (e.g. BUS as bus
   * only lane).
   */
  TEXTUAL_TRAFFIC_SIGN = 4,
  /** GENERIC_SYMBOL - Paint on the road surface indicating a generic symbol. */
  GENERIC_SYMBOL = 5,
  /** GENERIC_LINE - Paint on the road surface indicating a generic line. */
  GENERIC_LINE = 6,
  /** GENERIC_TEXT - Paint on the road surface indicating a generic character string. */
  GENERIC_TEXT = 7,
}

/** Definition of road marking colors */
export enum RoadMarking_Classification_Color {
  /**
   * UNKNOWN - Color of road marking is unknown (must not be used in ground
   * truth).
   */
  UNKNOWN = 0,
  /** OTHER - Marking with another (unspecified but known) color. */
  OTHER = 1,
  /** WHITE - Marking with white color. */
  WHITE = 2,
  /** YELLOW - Marking with yellow / orange-yellow color. */
  YELLOW = 3,
  /** BLUE - Marking with blue color. */
  BLUE = 5,
  /** RED - Marking with red color. */
  RED = 6,
  /** GREEN - Marking with green color. */
  GREEN = 7,
  /** VIOLET - Marking with violet color. */
  VIOLET = 8,
}
