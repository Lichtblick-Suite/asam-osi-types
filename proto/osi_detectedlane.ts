// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: osi_detectedlane.proto

/* eslint-disable */
import { type ColorDescription } from "./osi_common";
import { type DetectedItemHeader } from "./osi_detectedobject";
import {
  type Lane_Classification,
  type LaneBoundary_BoundaryPoint,
  type LaneBoundary_Classification,
} from "./osi_lane";

/** \brief A lane segment as detected by the sensor. */
export interface DetectedLane {
  /** Common information of one detected item. */
  header?:
    | DetectedItemHeader
    | undefined;
  /** A list of candidates for this lane as estimated by the sensor. */
  candidate?: DetectedLane_CandidateLane[] | undefined;
}

/**
 * \brief A candidate for a detected lane as estimated by the
 * sensor.
 */
export interface DetectedLane_CandidateLane {
  /**
   * The estimated probability that this candidate is the true value.
   *
   * \note The sum of all \c #probability must be one. This probability is
   * given under the condition of
   * \c DetectedItemHeader::existence_probability.
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
   * The classification of one lane that defines this candidate.
   *
   * \note IDs, which are referenced in this message, usually
   * reference to \c DetectedXXX::tracking_id IDs.
   */
  classification?: Lane_Classification | undefined;
}

/**
 * \brief A lane boundary segment as detected by the sensor.
 *
 * \image html OSI_DetectedLaneBoundary.svg
 *
 * The parent frame of a detected lane boundary is the virtual sensor coordinate
 * system.
 *
 * /note The virtual sensor coordinate system is relative to the vehicle coordinate
 * system which has its origin in the center of the rear axle of the ego
 * vehicle. This means if virtual sensor mounting position and orientation are
 * set to (0,0,0) the virtual sensor coordinate system coincides with the
 * vehicle coordinate system.
 */
export interface DetectedLaneBoundary {
  /** Common information of one detected item. */
  header?:
    | DetectedItemHeader
    | undefined;
  /**
   * A list of candidates for this lane boundary as estimated by the
   * sensor.
   */
  candidate?:
    | DetectedLaneBoundary_CandidateLaneBoundary[]
    | undefined;
  /**
   * The list of individual points defining the location of the lane boundary
   * (as a list of segments).
   *
   * Since a \c BoundaryPoint is part of a sequence, only the position
   * attribute has to be set for each instance. All other values will be
   * reused from the previous \c BoundaryPoint in the sequence or set to
   * default values if there is none or it was never set. For dashed lines,
   * one \c LaneBoundary::BoundaryPoint has to be at the start and another at
   * the end of each dashed line segment. For Botts' dots lines, one \c
   * LaneBoundary::BoundaryPoint position has to define each Botts' dot.
   *
   * \attention For \c LaneBoundary::BoundaryPoint the same rules regarding
   * maximum distance and approximation error apply as for \c
   * Lane::Classification::centerline.
   */
  boundary_line?:
    | LaneBoundary_BoundaryPoint[]
    | undefined;
  /**
   * The root mean squared error of the \c LaneBoundary::BoundaryPoint.
   * Each \c #candidate has the same \c #boundary_line points and exact
   * one \c #boundary_line_rmse rmse confidence value is
   * specified which is suitable for all candidates.
   */
  boundary_line_rmse?:
    | LaneBoundary_BoundaryPoint[]
    | undefined;
  /**
   * Confidence of the segments of the \c LaneBoundary::BoundaryPoint.
   * Each \c #candidate has the same \c #boundary_line points and exact
   * one \c #boundary_line_confidences confidence value is
   * specified which is suitable for all candidates.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  boundary_line_confidences?:
    | number[]
    | undefined;
  /**
   * The visual color of the material of the lane boundary.
   *
   * \note This does not represent the semantic classification but the visual
   * appearance. For semantic classification of the lane boundary use the color
   * field in \c CandidateLaneBoundary::classification.
   */
  color_description?: ColorDescription | undefined;
}

/**
 * \brief A candidate for a detected lane boundary as estimated by the
 * sensor.
 */
export interface DetectedLaneBoundary_CandidateLaneBoundary {
  /**
   * The estimated probability that this candidate is the true value.
   *
   * \note The sum of all \c #probability must be one. This probability is
   * given under the condition of
   * \c DetectedItemHeader::existence_probability.
   *
   * \rules
   * is_greater_than_or_equal_to: 0
   * is_less_than_or_equal_to: 1
   * \endrules
   */
  probability?:
    | number
    | undefined;
  /**
   * The classification of one lane boundary that defines this candidate.
   *
   * \note IDs, which are referenced in this message, usually
   * reference to \c DetectedXXX::tracking_id IDs.
   */
  classification?: LaneBoundary_Classification | undefined;
}
