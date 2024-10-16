/**
 * \brief A cartesian 3D vector for positions, velocities or accelerations or
 * its uncertainties.
 *
 * The coordinate system is defined as right-handed.
 *
 * Units are m for positions, m/s for velocities, and m/s^2 for
 * accelerations.
 */
interface Vector3d {
    /**
     * The x-coordinate.
     *
     * Unit: m, m/s, or m/s^2
     */
    x?: number | undefined;
    /**
     * The y-coordinate.
     *
     * Unit: m, m/s, or m/s^2
     */
    y?: number | undefined;
    /**
     * The z-coordinate.
     *
     * Unit: m, m/s, or m/s^2
     */
    z?: number | undefined;
}
/**
 * \brief A cartesian 2D vector for positions, velocities or accelerations or
 * its uncertainties.
 *
 * Units are m for positions, m/s for velocities, and m/s^2 for
 * accelerations.
 */
interface Vector2d {
    /**
     * The x-coordinate.
     *
     * Unit: m, m/s, or m/s^2
     */
    x?: number | undefined;
    /**
     * The y-coordinate.
     *
     * Unit: m, m/s, or m/s^2
     */
    y?: number | undefined;
}
/**
 * \brief A timestamp.
 *
 * Names and types of fields are chosen in accordance to
 * google/protobuf/timestamp.proto to allow a possible switch in the future.
 * There is no definition of the zero point in time neither it is the Unix
 * epoch. A simulation may start at the zero point in time but it is not
 * mandatory.
 */
interface Timestamp {
    /**
     * The number of seconds since the start of e.g. the simulation / system /
     * vehicle.
     *
     * Unit: s
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    seconds?: number | undefined;
    /**
     * The number of nanoseconds since the start of the last second.
     *
     * Range: [0, 999.999.999]
     *
     * Unit: ns
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 999999999
     * \endrules
     */
    nanos?: number | undefined;
}
/**
 * \brief The dimension of a 3D box, e.g. the size of a 3D bounding box or its
 * uncertainties.
 *
 * \image html OSI_Dimension3D.svg
 *
 * The dimensions are positive. Uncertainties are negative or positive.
 *
 * Dimension is defined in the specified reference coordinate frame along the
 * x-axis (=length), y-axis (=width) and z-axis (=height).
 */
interface Dimension3d {
    /**
     * The length of the box.
     *
     * Unit: m
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    length?: number | undefined;
    /**
     * The width of the box.
     *
     * Unit: m
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    width?: number | undefined;
    /**
     * The height of the box.
     *
     * Unit: m
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    height?: number | undefined;
}
/**
 * \brief A 3D orientation, orientation rate or orientation acceleration (i.e.
 * derivatives) or its uncertainties denoted in euler angles.
 *
 * Units are rad for orientation, rad/s for rates, and rad/s^2 for
 * accelerations
 *
 * The coordinate system is defined as right-handed.
 * For the sense of each rotation, the right-hand rule applies.
 *
 * The rotations are to be performed \b yaw \b first (around the z-axis),
 * \b pitch \b second (around the new y-axis) and \b roll \b third (around the
 * new x-axis) to follow the definition according to [1] (Tait-Bryan / Euler
 * convention z-y'-x''). The preferred angular range is [-pi, pi] for roll
 * and yaw and [-pi/2, pi/2] for pitch.
 *
 * Roll/Pitch are 0 if the objects xy-plane is parallel to its parent's
 * xy-plane. Yaw is 0 if the object's local x-axis is parallel to its parent's
 * x-axis.
 *
 * \f$ Rotation_{yaw,pitch,roll} =
 * Rotation_{yaw}*Rotation_{pitch}*Rotation_{roll} \f$
 *
 * \f$ vector_{global coord system} := Rotation_{yaw, pitch, roll} * vector_{local coord system} +local_{origin::position} \f$
 *
 * \attention This definition changed in OSI version 3.0.0. Previous OSI
 * versions  (V2.xx) had an other definition.
 *
 * \par Reference:
 * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
 */
interface Orientation3d {
    /**
     * The roll angle/rate/acceleration.
     *
     * Unit: rad, rad/s, or rad/s^2
     */
    roll?: number | undefined;
    /**
     * The pitch angle/rate/acceleration.
     *
     * Unit: rad, rad/s, or rad/s^2
     */
    pitch?: number | undefined;
    /**
     * The yaw angle/rate/acceleration.
     *
     * Unit: rad, rad/s, or rad/s^2
     */
    yaw?: number | undefined;
}
/**
 * \brief A common identifier (ID), represented as an integer.
 *
 * Has to be unique among all simulated items at any given time. For ground
 * truth, the identifier of an item (object, lane, sign, etc.) must remain
 * stable over its lifetime. \c Identifier values may be only be reused if the
 * available address space is exhausted and the specific values have not been in
 * use for several time steps. Sensor specific tracking IDs have no restrictions
 * and should behave according to the sensor specifications.
 * Purely simulation technical IDs, like sensor IDs, are not required to be
 * unique among all simulated items, but rather unique within the context of the
 * given message type.
 *
 * The value MAX(uint64) = 2^(64) -1 =
 * 0b1111111111111111111111111111111111111111111111111111111111111111 is
 * reserved and indicates an invalid ID or error.
 */
interface Identifier {
    /**
     * The value of the identifier.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    value?: number | undefined;
}
/**
 * \brief References to external objects.
 *
 * The external reference is an optional recommendation to refer to objects defined outside of OSI.
 * This could be other OpenX standards, 3rd-party standards or user-defined objects.
 *
 * \note ExternalReference is optional and can be left empty.
 */
interface ExternalReference {
    /**
     * The source of the external references.
     *
     * Defines the original source of an object as uniquely identifiable reference.
     * In case of using \c GroundTruth::map_reference or
     * \c GroundTruth::model_reference, the reference can be left empty.
     * If not otherwise required, an URI is suggested. The syntax should follow
     * \link https://tools.ietf.org/html/rfc3986 RFC 3986\endlink.
     */
    reference?: string | undefined;
    /**
     * The type of the external references.
     *
     * Mandatory value describing the type of the original source.
     *
     * For OpenX/ASAM standards it is specified as follows:
     * - net.asam.opendrive
     * - net.asam.openscenario
     *
     * For third-party standards and user-defined objects,
     * reverse domain name notation with lower-case type field
     * is recommended to guarantee unique and interoperable identification.
     *
     * \rules
     * is_set
     * \endrules
     */
    type?: string | undefined;
    /**
     * The external identifier reference value.
     *
     * The repeated string is chosen as a common description of the external
     * identifier, because a variety of identifier types could be
     * involved .
     *
     * For example, referencing a unique lane in OpenDRIVE requires the
     * following identifiers:
     * * RoadId: String
     * * S-Value of LaneSection: Double
     * * LaneId: Int
     *
     * \note The detailed description of the identifiers and how they are
     *       used for referencing external objects is given in the individual
     *       messages where the external identifier is used.
     *
     * \see EnvironmentalConditions::source_reference
     * \see Lane::source_reference
     * \see LaneBoundary::source_reference
     * \see StationaryObject::source_reference
     * \see MovingObject::source_reference
     * \see RoadMarking::source_reference
     * \see TrafficLight::source_reference
     * \see TrafficSign::source_reference
     */
    identifier?: string[] | undefined;
}
/**
 * \brief Specifies the mounting position of a sensor.
 *
 * Details are specified in each instance where \c MountingPosition is used.
 */
interface MountingPosition {
    /** Offset position relative to the specified reference coordinate system. */
    position?: Vector3d | undefined;
    /**
     * Orientation offset relative to the specified reference coordinate system.
     *
     * \f$ Origin_{sensor} :=
     * Rotation_{yaw,pitch,roll}( \f$ \c #orientation \f$
     * )*(Origin_{\text{reference coord system}}
     * - \f$ \c #position \f$ )\f$
     */
    orientation?: Orientation3d | undefined;
}
/**
 * \brief A spherical representation for a point or vector in 3D space.
 *
 * Used e.g., for low level representations of radar detections.
 *
 * Azimuth and elevation are defined as the rotations that would have to be
 * applied to the local frame (e.g sensor frame definition in
 * \c SensorDetectionHeader) to make its x-axis point towards the referenced
 * point or to align it with the referenced vector. The rotations are to be
 * performed \b azimuth \b first (around the z-axis) and \b elevation \b second
 * (around the new y-axis) to follow the definition of \c Orientation3d. For the
 * sense of each rotation, the right-hand rule applies.
 *
 * \f$ vector_{cartesian} :=
 * Rotation( \f$ \c #elevation \f$ )*Rotation( \f$ \c #azimuth \f$ )*
 * (Unit_{vector_x}* \f$ \c #distance \f$ ) \f$
 */
interface Spherical3d {
    /**
     * The radial distance.
     *
     * Unit: m
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    distance?: number | undefined;
    /**
     * The azimuth (horizontal) angle.
     *
     * Unit: rad
     */
    azimuth?: number | undefined;
    /**
     * The elevation (vertical) angle.
     *
     * Unit: rad
     */
    elevation?: number | undefined;
}
/**
 * \brief Assignment of an object to a logical lane
 *
 * An object is assigned to a logical lane if it overlaps the logical lane.
 * Assignment happens even if the reference point is outside the lane, and only
 * a part of the object overlaps (any object overlapping the lane more than 5cm
 * has to be assigned to the lane).
 *
 * As an exception to this, \c TrafficSign and \c TrafficLight are assigned to
 * a logical lane if they control traffic on that lane. For \c TrafficSign and
 * \c TrafficLight , #s_position refers to the position where the sign or light
 * is valid (e.g. where vehicles should stop in case of a red traffic light),
 * not the physical position (where the sign or light is in the world).
 * Typically, t_position and angle_to_lane do not have any meaning in this
 * case, and will be 0.
 */
interface LogicalLaneAssignment {
    /**
     * ID of the LogicalLane the object is assigned to.
     *
     * \rules
     * refers_to: LogicalLane
     * \endrules
     */
    assigned_lane_id?: Identifier | undefined;
    /**
     * S position of the object reference point on the lane, in the ST
     * coordinate system of the lane.
     *
     * #s_position might be outside [s_start,s_end] of the lane (and even
     * outside [startS,endS] of the reference line) if the reference point is
     * outside the lane, but the object overlaps the lane or a TrafficSign or
     * TrafficLight is assigned to a lane.
     */
    s_position?: number | undefined;
    /**
     * T position of the object reference point on the lane, in the ST
     * coordinate system of the lane.
     */
    t_position?: number | undefined;
    /**
     * Angle of the object relative to the lane.
     * See the ReferenceLine description how the angle is calculated.
     *
     * Unit: rad
     */
    angle_to_lane?: number | undefined;
}
/**
 * \brief A bounding box description.
 *
 * A bounding box representing a sub-section of its parent's overall
 * dimension, either that of a \c BaseMoving or \c BaseStationary .
 *
 * The parent frame of the \c BoundingBox is identical to the parent frame
 * of the \c MovingObject or \c StationaryObject it is associated to. For
 * example, if the parent object coordinates are given relative to the
 * global coordinate system, then the \c BoundingBox coordinates are also
 * given relative to the global coordinate system.
 *
 * \note The overall bounding box of the object is still defined using the
 * dimension, position and orientation of the \c BaseMoving or
 * \c BaseStationary .
 */
interface BoundingBox {
    /** The 3D dimensions of the bounding box. */
    dimension?: Dimension3d | undefined;
    /**
     * The 3D position of the bounding box. The position is the center
     * of the bounding box and the pivot for the \c dimension and \c orientation.
     *
     * \note The position should be within the same coordinate frame as
     * its parent, not relative to coordinate frame of the parent object.
     * The position becomes global/absolute if the parent frame is inertial
     * (all parent frames up to ground truth).
     */
    position?: Vector3d | undefined;
    /**
     * The 3D orientation of the bounding box.
     *
     * \note The orientation should be within the same coordinate frame as
     * its parent, not relative to the coordinate frame of the parent object.
     * The orientation becomes global/absolute if the parent frame is inertial
     * (all parent frames up to ground truth).
     */
    orientation?: Orientation3d | undefined;
    /** The type of object contained in the bounding box. */
    contained_object_type?: BoundingBox_Type | undefined;
    /**
     * Opaque reference of an associated 3D model of the bounding box.
     *
     * \note It is implementation-specific how model_references are resolved to
     * 3d models. This means the coordinate system, model origin, and model
     * orientation are also implementation-specific.
     */
    model_reference?: string | undefined;
}
/** Definition of different types of object contained within the bounding box */
declare enum BoundingBox_Type {
    /** UNKNOWN - Object of unknown type (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Any other type of object. */
    OTHER = 1,
    /**
     * BASE_STRUCTURE - The main structure of an object, e.g. a chassis of a vehicle,
     * or the central structure of a building, a tree trunk, etc.
     */
    BASE_STRUCTURE = 2,
    /**
     * PROTRUDING_STRUCTURE - A protruding, integral part of an object, which is not
     * temporarily attached, e.g. a tree crown, a light pole arm, or a
     * parking house gate. The protruding structure is meant to be an
     * additional part to a base structure.
     */
    PROTRUDING_STRUCTURE = 3,
    /** CARGO - Additional, temporarily attached cargo to an object. */
    CARGO = 4,
    /**
     * DOOR - The door of an object.
     *
     * For vehicles, this includes driver and passenger doors, trunk
     * and front hoods, and fuel or charging port covers.
     */
    DOOR = 5,
    /**
     * SIDE_MIRROR - The side mirror of a vehicle.
     *
     * \note The side mirror is not included in the overall bounding box
     * of the parent object.
     */
    SIDE_MIRROR = 6
}
/**
 * \brief The base attributes of a stationary object or entity.
 *
 * This includes the \c StationaryObject , \c TrafficSign ,
 * \c TrafficLight , \c RoadMarking messages.
 *
 * \image html OSI_BaseStationary.svg
 *
 * All coordinates and orientations from ground truth objects are relative to
 * the global ground truth frame (see image). (All coordinates and orientations
 * from detected objects are relative to the host vehicle frame (see:
 * \c Vehicle vehicle reference point).)
 */
interface BaseStationary {
    /**
     * The 3D dimensions of the stationary object (bounding box), e.g. a
     * landmark.
     *
     * \note The \c #dimension must completely enclose the geometry of the
     * \c BaseStationary .
     */
    dimension?: Dimension3d | undefined;
    /**
     * The reference point for position and orientation, i.e. the center (x,y,z)
     * of the bounding box.
     */
    position?: Vector3d | undefined;
    /**
     * The relative orientation of the stationary object w.r.t. its parent
     * frame, noted in the parent frame. The orientation becomes global/absolute
     * if the parent frame is inertial (all parent frames up to ground truth).
     *
     * \f$ Origin_{\text{base stationary entity}} :=
     * Rotation_{yaw,pitch,roll}( \f$ \c #orientation \f$ )*
     * (Origin_{\text{parent coord system}} -
     * \f$ \c #position \f$ )\f$
     *
     * \note There may be some constraints how to align the orientation w.r.t.
     * to some stationary object's or entity's definition.
     */
    orientation?: Orientation3d | undefined;
    /**
     * Usage as ground truth:
     * The two dimensional (flat) contour of the object. This is an extension of
     * the concept of a bounding box as defined by \c Dimension3d. The contour
     * is the projection of the object's outline onto the z-plane in the object
     * frame (independent of its current position and orientation). The height
     * is the same as the height of the bounding box.
     *
     * Usage as sensor data:
     * The polygon describes the visible part of the object's contour.
     *
     * General definitions:
     * The polygon is defined in the local object frame: x pointing forward and
     * y to the left.
     * The origin is the center of the bounding box.
     * As ground truth, the polygon is closed by connecting the last with the
     * first point. Therefore these two points must be different. The polygon
     * must consist of at least three points.
     * As sensor data, however, the polygon is open.
     * The polygon is defined counter-clockwise.
     */
    base_polygon?: Vector2d[] | undefined;
    /**
     * Sub-divisions of the overall bounding box of the \c BaseStationary object.
     *
     * The bounding box sections can include separate parts on partially-opaque
     * objects such as trees with a distinction between trunk and crown.
     *
     * \note The bounding box sub-divisions can extend beyond the overall
     * bounding box, however no actual geometry must reside outside of the
     * overall bounding box.
     *
     * \note If any sub-divisions are provided, then they must cover all
     * occupied space of the overall bounding box. In other words, a consumer
     * of this data is guaranteed that any part of the overall bounding box
     * that is not covered by any sub-division is free of physical objects,
     * and thus no collisions can occur there.
     */
    bounding_box_section?: BoundingBox[] | undefined;
}
/**
 * \brief The base attributes of an object that is moving.
 *
 * This includes the \c MovingObject messages.
 *
 * \image html OSI_BaseMoving.svg
 *
 * \image html OSI_BaseMoving_Top.svg
 *
 * E.g. a vehicle is a base moving object.
 *
 * All coordinates and orientations from ground truth objects are relative to
 * the global ground truth frame. All coordinates and orientations
 * from detected objects are relative to the host vehicle frame
 * (see: \c MovingObject vehicle reference point).
 */
interface BaseMoving {
    /**
     * The 3D dimension of the moving object (its bounding box).
     *
     * \note The \c #dimension must completely enclose the geometry of the
     * \c BaseMoving with the exception of the side mirrors for vehicles.
     *
     * \note The bounding box does NOT include side mirrors for vehicles.
     */
    dimension?: Dimension3d | undefined;
    /**
     * The reference point for position and orientation: the center (x,y,z) of
     * the bounding box.
     */
    position?: Vector3d | undefined;
    /**
     * The relative orientation of the moving object w.r.t. its parent frame,
     * noted in the parent frame. The orientation becomes global/absolute if
     * the parent frame is inertial (all parent frames up to ground truth).
     *
     * \f$ Origin_{\text{base moving entity}} :=
     * Rotation_{yaw,pitch,roll}( \f$ \c #orientation \f$ )*
     * (Origin_{\text{parent coord system}} -
     * \f$ \c #position \f$ ) \f$
     *
     * \note There may be some constraints how to align the orientation w.r.t.
     * to some stationary object's or entity's definition.
     */
    orientation?: Orientation3d | undefined;
    /**
     * The relative velocity of the moving object w.r.t. the parent frame,
     * noted in the parent frame. The velocity becomes global/absolute if
     * the parent frame does is inertial (all parent frames up to ground truth).
     *
     * \c #position \f$ (t) := \f$ \c #position \f$ (t-dt)+ \f$ \c #velocity \f$
     * *dt \f$
     */
    velocity?: Vector3d | undefined;
    /**
     * The relative acceleration of the moving object w.r.t. its parent frame,
     * noted in the parent frame. The acceleration becomes global/absolute if
     * the parent frame is inertial (all parent frames up to ground truth).
     *
     * \c #position \f$ (t) := \f$ \c #position \f$ (t-dt)+ \f$ \c #velocity \f$
     * *dt+ \f$ \c #acceleration \f$ /2*dt^2\f$
     *
     * \c #velocity \f$ (t) := \f$ \c #velocity \f$ (t-dt)+ \f$ \c #acceleration
     * \f$ *dt \f$
     */
    acceleration?: Vector3d | undefined;
    /**
     * The relative orientation rate of the moving object w.r.t. its parent
     * frame and parent orientation rate in the center point of the bounding box
     * (origin of the bounding box frame), noted in the parent frame.
     * The orientation becomes global/absolute if the parent frame is inertial
     * (all parent frames up to ground truth).
     *
     * \c #orientation \f$ .yaw(t) := \f$ \c #orientation_rate \f$ .yaw(t) * dt
     * + \f$ \c #orientation \f$ .yaw(t-dt) \f$
     *
     * \c #orientation \f$ .pitch(t) := \f$ \c #orientation_rate \f$ .pitch(t) *
     * dt + \f$ \c #orientation \f$ .pitch(t-dt) \f$
     *
     * \c #orientation \f$ .roll(t) := \f$ \c #orientation_rate \f$ .roll(t) *
     * dt + \f$ \c #orientation \f$ .roll(t-dt)\f$
     */
    orientation_rate?: Orientation3d | undefined;
    /**
     * The relative orientation acceleration of the moving object w.r.t. its
     * parent frame and parent orientation acceleration in the center point of
     * the bounding box (origin of the bounding box frame), noted in the parent
     * frame. The orientation becomes global/absolute if the parent frame is
     * inertial (all parent frames up to ground truth).
     *
     * \c #orientation_rate \f$ .yaw(t) := \f$ \c #orientation_acceleration \f$
     * .yaw(t) * dt + \f$ \c #orientation_rate \f$ .yaw(t-dt) \f$
     *
     * \c #orientation_rate \f$ .pitch(t) := \f$ \c #orientation_acceleration
     * \f$ .pitch(t) * dt
     * + \f$ \c #orientation_rate \f$ .pitch(t-dt) \f$
     *
     * \c #orientation_rate \f$ .roll(t) := \f$ \c #orientation_acceleration \f$
     * .roll(t) * dt +
     *  \f$ \c #orientation_rate \f$ .roll(t-dt) \f$
     */
    orientation_acceleration?: Orientation3d | undefined;
    /**
     * Usage as ground truth:
     * The two dimensional (flat) contour of the object. This is an extension of
     * the concept of a bounding box as defined by \c Dimension3d. The contour
     * is the projection of the object's outline onto the z-plane in the object
     * frame (independent of its current position and orientation). The height
     * is the same as the height of the bounding box.
     *
     * Usage as sensor data:
     * The polygon describes the visible part of the object's contour.
     *
     * General definitions:
     * The polygon is defined in the local object frame: x pointing forward and
     * y to the left. The origin is the center of the bounding box.
     * As ground truth, the polygon is closed by connecting the last with the
     * first point. Therefore these two points must be different. The polygon
     * must consist of at least three points. As sensor data, however, the
     * polygon is open.
     * The polygon is defined counter-clockwise.
     */
    base_polygon?: Vector2d[] | undefined;
    /**
     * Sub-divisions of the overall bounding box of the \c BaseMoving object.
     *
     * The bounding box sections can include side mirrors, cargo, etc. for
     * vehicles, as well as body-part sections for pedestrians. Note that for
     * more precise pedestrian information \c PedestrianAttributes can be used.
     *
     * \note The bounding box sub-divisions can extend beyond the overall
     * bounding box, however no actual geometry must reside outside of the
     * overall bounding box, with the specific exception of the side mirrors.
     *
     * \note If any sub-divisions are provided, then they must cover all
     * occupied space of the overall bounding box. In other words, a consumer
     * of this data is guaranteed that any part of the overall bounding box
     * that is not covered by any sub-division is free of physical objects,
     * and thus no collisions can occur there.
     */
    bounding_box_section?: BoundingBox[] | undefined;
}
/**
 * \brief The StatePoint definition
 *
 * A reference to a time and pose.  Typically used in a repeated field to define
 * a trajectory.
 *
 * \note The StatePoint definition does not define mandatory fields.
 * The context defines how and what fields are used.  For example, in some cases
 * only the pose variables are relevant and the timestamp is ignored.
 */
interface StatePoint {
    /**
     * The timestamp of a StatePoint.
     *
     * \note Zero time does not need to coincide with the UNIX epoch.
     */
    timestamp?: Timestamp | undefined;
    /**
     * Position in the global coordinate system.
     *
     * \note Remark: The definition of the reference point follows the
     * specification of the \c BaseMoving message, if not specified otherwise
     * in the message the StatePoint is used in.
     */
    position?: Vector3d | undefined;
    /** Orientation in the global coordinate system. */
    orientation?: Orientation3d | undefined;
}
/**
 * \brief Detailed WavelengthRange message.
 *
 * Defines the start (minimum) and the end (maximum) values of the wavelength.
 * Additionally, the number of samples within this range is defined in this message.
 */
interface WavelengthData {
    /**
     * The start, or the minimum wavelength value.
     *
     * Unit: m
     */
    start?: number | undefined;
    /**
     * The end, or the maximum wavelength value.
     *
     * Unit: m
     */
    end?: number | undefined;
    /**
     * Number of samples to be considered within the defined wavelength range.
     * The number of samples includes the start and the end values that are defined in this message, starting from the "start" value.
     * \note This defines the number of wavelengths to be computed during simulation, not to be confused with samples_per_pixel.
     */
    samples_number?: number | undefined;
}
/**
 * \brief Definition of a spatial signal strength distribution
 * for an emitting / transmitting / receiving entity
 * with a horizontal and a vertical angle
 * and the corresponding signal strength in dBm (decibels per milliwatt).
 */
interface SpatialSignalStrength {
    /**
     * Horizontal angle (azimuth) of emission / transmission / reception
     * in the entity's coordinate system.
     *
     * Unit: rad
     */
    horizontal_angle?: number | undefined;
    /**
     * Vertical angle (elevation) of emission / transmission / reception
     * in the entity's coordinate system.
     *
     * Unit: rad
     */
    vertical_angle?: number | undefined;
    /**
     * Emitted / transmitted /received signal strength
     * of the emitting / transmitting / receiving entity
     * at the previously defined horizontal and
     * vertical angle for one specific wavelength.
     * The value for the signal strength
     * is given in dBm (decibels per milliwatt).
     *
     * Unit: dBm
     */
    signal_strength?: number | undefined;
}
/**
 * \brief The description of a color within available color spaces.
 *
 * ColorDescription represents the visual, non-semantic appearance of an object, structure or feature within various available color spaces.
 *
 * Depending on the context, this may define the color of an object or structure a priori (e.g. GroundTruth objects)
 * or describe a perceived color (e.g. CameraDetections).
 */
interface ColorDescription {
    /** Grayscale color model */
    grey?: ColorGrey | undefined;
    /** RGB (Red, Green, Blue) color model */
    rgb?: ColorRGB | undefined;
    /** RGBIR (Red, Green, Blue, Infrared) color model */
    rgbir?: ColorRGBIR | undefined;
    /** HSV (Hue, Saturation, Value) color model */
    hsv?: ColorHSV | undefined;
    /** LUV (Luminance, U-coordinate, V-coordinate) color model */
    luv?: ColorLUV | undefined;
    /** CMYK (Cyan, Magenta, Yellow, Key) color model */
    cmyk?: ColorCMYK | undefined;
}
/**
 * \brief Grayscale color model
 *
 * ColorGrey defines a grayscale.
 */
interface ColorGrey {
    /**
     * Definition of a grayscale
     *
     * Range: [0,1]
     */
    grey?: number | undefined;
}
/**
 * \brief RGB color model
 *
 * ColorRGB provides values for red, green and blue.
 */
interface ColorRGB {
    /**
     * Red ratio
     *
     * Range: [0,1]
     */
    red?: number | undefined;
    /**
     * Green ratio
     *
     * Range: [0,1]
     */
    green?: number | undefined;
    /**
     * Blue ratio
     *
     * Range: [0,1]
     */
    blue?: number | undefined;
}
/**
 * \brief RGBIR color model
 *
 * ColorRGBIR provides values for red, green, blue and infrared.
 */
interface ColorRGBIR {
    /**
     * Red ratio
     *
     * Range: [0,1]
     */
    red?: number | undefined;
    /**
     * Green ratio
     *
     * Range: [0,1]
     */
    green?: number | undefined;
    /**
     * Blue ratio
     *
     * Range: [0,1]
     */
    blue?: number | undefined;
    /**
     * Infrared
     *
     * Range: [0,1]
     */
    infrared?: number | undefined;
}
/**
 * \brief HSV color model
 *
 * ColorHSV provides values for hue, saturation and value/brightness.
 */
interface ColorHSV {
    /**
     * Hue
     *
     * Unit: deg
     * Range: [0,360[
     */
    hue?: number | undefined;
    /**
     * Saturation
     *
     * Range: [0,1]
     */
    saturation?: number | undefined;
    /**
     * Value
     *
     * Range: [0,1]
     */
    value?: number | undefined;
}
/**
 * \brief LUV color model
 *
 * ColorLUV provides values for luminance, U- and V-coordinate.
 */
interface ColorLUV {
    /**
     * Luminance
     *
     * Range: [0,1]
     */
    luminance?: number | undefined;
    /**
     * U-coordinate
     *
     * Range: [0,1]
     */
    u?: number | undefined;
    /**
     * V-Coordinate
     *
     * Range: [0,1]
     */
    v?: number | undefined;
}
/**
 * \brief CMYK colors model
 *
 * ColorCMYK provides values for cyan, magenta, yellow and key/black.
 */
interface ColorCMYK {
    /**
     * Cyan ratio
     *
     * Range: [0,1]
     */
    cyan?: number | undefined;
    /**
     * Magenta ratio
     *
     * Range: [0,1]
     */
    magenta?: number | undefined;
    /**
     * Yellow ratio
     *
     * Range: [0,1]
     */
    yellow?: number | undefined;
    /**
     * Black ratio
     *
     * Range: [0,1]
     */
    key?: number | undefined;
}
/** \brief A description for the positions of the pedals. */
interface Pedalry {
    /**
     * Position of the acceleration pedal.
     * Range: 0-1 (Unpressed - fully pressed)
     */
    pedal_position_acceleration?: number | undefined;
    /**
     * Position of the brake pedal.
     * Range: 0-1 (Unpressed - fully pressed)
     */
    pedal_position_brake?: number | undefined;
    /**
     * Position of the clutch pedal.
     * Range: 0-1 (Unpressed - fully pressed)
     */
    pedal_position_clutch?: number | undefined;
}
/** \brief A description of the steering wheel. */
interface VehicleSteeringWheel {
    /**
     * Angle of the steering wheel.
     * Zero means the steering wheel is in its center position. A positive value
     * means the steering wheel is turned to the left. A negative value
     * means the steering wheel is turned to the right of the center position.
     *
     * Unit: rad
     */
    angle?: number | undefined;
    /**
     * Angular speed of the steering wheel.
     * Zero means the steering wheel stays in its position. A positive value
     * means the steering wheel is turned to the left. A negative value
     * means the steering wheel is turned to the right.
     *
     * Unit: rad/s
     */
    angular_speed?: number | undefined;
    /**
     * Torque of the steering wheel to the hand.
     * Zero means there is no force from the steering wheel to the hand of the driver.
     * A positive value means that the steering wheel would turn to the left without driver intervention.
     * A negative value means that the steering wheel would turn to the right without driver intervention.
     *
     * Unit: N*m
     */
    torque?: number | undefined;
}
/** \brief The geodetic position of an object, that is, the center of the 3D bounding box. */
interface GeodeticPosition {
    /**
     * Longitude in decimal degrees regarding WGS84.
     *
     * Unit: Degree
     * Range: [-180; 180]
     */
    longitude?: number | undefined;
    /**
     * Latitude in decimal degrees regarding WGS84.
     *
     * Unit: Degree
     * Range: [-90; 90]
     */
    latitude?: number | undefined;
    /**
     * Height above sea level regarding EGM96.
     *
     * Unit: m
     * Range: [-300; 10000]
     */
    altitude?: number | undefined;
}
/**
 * \brief Generic key-value pair structure
 *
 * A generic key-value pair structure which can be used to capture information
 * which is opaque to the general OSI interface.
 */
interface KeyValuePair {
    /** A generic string key. */
    key?: string | undefined;
    /** A generic string value. */
    value?: string | undefined;
}
/**
 * \brief Polygon in 3 dimensions
 *
 * A polygon in 3 dimensions which contains a list of vertices.
 */
interface Polygon3d {
    /** A list of vertices */
    vertex?: Vector3d[] | undefined;
}

/**
 * \brief A simulated object that is neither a moving object (vehicle or
 * \c MovingObject e.g. pedestrian, animal, or vehicle) nor a traffic related
 * object (\c TrafficLight, \c TrafficSign).
 *
 * \image html OSI_BaseStationary.svg
 *
 * \c StationaryObject excludes traffic lights, traffic signs and road marking
 */
interface StationaryObject {
    /**
     * The ID of the object.
     *
     * \rules
     * is_globally_unique
     * is_set
     * \endrules
     */
    id?: Identifier | undefined;
    /** The base parameters of the stationary object. */
    base?: BaseStationary | undefined;
    /** The classification of the stationary object. */
    classification?: StationaryObject_Classification | undefined;
    /**
     * Opaque reference of an associated 3D model of the stationary object.
     *
     * \note It is implementation-specific how model_references are resolved to
     * 3d models.
     */
    model_reference?: string | undefined;
    /**
     * External reference to the stationary-object source.
     *
     * The external reference points to the source of a stationary object, if it
     * is derived from an external sources like OpenDRIVE or OpenSCENARIO.
     *
     * For example, to reference an object defined in an OpenDRIVE map
     * the items should be set as follows:
     * * reference = URI to map, can remain empty if identical with definition
     *               in \c GroundTruth::map_reference
     * * type = "net.asam.opendrive"
     * * identifier[0] = "object" for t_road_objects_object and
     *                   "bridge" for t_road_objects_bridge
     * * identifier[1] = id of t_road_objects_object or t_road_objects_bridge
     *
     * For example, to reference OpenSCENARIO entities of the type MiscObject,
     * which describe partly stationary objects, the items should be set as
     * follows:
     * * reference = URI to the OpenSCENARIO File
     * * type = "net.asam.openscenario"
     * * identifier[0] = Entity-Type ("MiscObject")
     * * identifier[1] = name of MiscObject in Entity
     *
     * \note The following rule, described in OpenDRIVE, also applies:
     * * Objects derived from OpenSCENARIO shall not be mixed with objects
     *   described in OpenDRIVE.
     *
     * \note For non-ASAM Standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note The value has to be repeated because one object may be derived
     *       from more than one origin source, for example, from a scenario file
     *       and from sensors.
     */
    source_reference?: ExternalReference[] | undefined;
    /** The dominating color of the material of the structure. */
    color_description?: ColorDescription | undefined;
}
/** \brief Classification data for a stationary object. */
interface StationaryObject_Classification {
    /** The type of the object. */
    type?: StationaryObject_Classification_Type | undefined;
    /** The dominating material of the structure. */
    material?: StationaryObject_Classification_Material | undefined;
    /** The dominating density of the material of the structure. */
    density?: StationaryObject_Classification_Density | undefined;
    /**
     * The dominating color of the material of the structure.
     *
     * \attention DEPRECATED: This color enum will be removed in version
     * 4.0.0. Use the field \c #color_description (\c ColorDescription) of
     * \c StationaryObject instead.
     */
    color?: StationaryObject_Classification_Color | undefined;
    /** The attributes of the emitting structure if stationary object is classified as such. */
    emitting_structure_attribute?: StationaryObject_Classification_EmittingStructureAttribute | undefined;
    /**
     * The IDs of the lanes that the object is assigned to.
     *
     * \note Might be multiple IDs if the object stretches over multiple lanes.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    assigned_lane_id?: Identifier[] | undefined;
    /**
     * Percentage values of the object width in the corresponding lane.
     *
     * \note Might be multiple percentages if the object stretches over multiple lanes.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    assigned_lane_percentage?: number[] | undefined;
    /**
     * Assignment of this object to logical lanes.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    logical_lane_assignment?: LogicalLaneAssignment[] | undefined;
}
/** Definition of object types. */
declare enum StationaryObject_Classification_Type {
    /** UNKNOWN - Type of the object is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) type of object. */
    OTHER = 1,
    /** BRIDGE - Object is a bridge. */
    BRIDGE = 2,
    /** BUILDING - Object is a building. */
    BUILDING = 3,
    /** POLE - Object is a pole (e.g. from a traffic light). */
    POLE = 4,
    /** PYLON - Object is a pylon. */
    PYLON = 5,
    /** DELINEATOR - Object is a delineator (e.g. at a construction site). */
    DELINEATOR = 6,
    /** TREE - Object is a tree. */
    TREE = 7,
    /** BARRIER - Object is a barrier. */
    BARRIER = 8,
    /** VEGETATION - Object is vegetation. */
    VEGETATION = 9,
    /** CURBSTONE - Object is a curbstone. */
    CURBSTONE = 10,
    /** WALL - Object is a wall. */
    WALL = 11,
    /**
     * VERTICAL_STRUCTURE - Landmarks corresponding to vertical structures in the
     * environment.
     */
    VERTICAL_STRUCTURE = 12,
    /**
     * RECTANGULAR_STRUCTURE - Landmarks corresponding to rectangular structures in the
     * environment, like walls.
     */
    RECTANGULAR_STRUCTURE = 13,
    /**
     * OVERHEAD_STRUCTURE - Landmarks corresponding to overhead structures in the
     * environment, like sign bridges.
     */
    OVERHEAD_STRUCTURE = 14,
    /**
     * REFLECTIVE_STRUCTURE - Landmarks corresponding to reflective structures
     * in the environment, like reflective poles on the
     * road boarder.
     */
    REFLECTIVE_STRUCTURE = 15,
    /**
     * CONSTRUCTION_SITE_ELEMENT - Landmarks corresponding to construction site elements in the
     * environment, like beacons.
     */
    CONSTRUCTION_SITE_ELEMENT = 16,
    /** SPEED_BUMP - Object is a speed bump. */
    SPEED_BUMP = 17,
    /**
     * EMITTING_STRUCTURE - Landmarks corresponding to sources of electromagnetic waves
     * in the environment, like street lights.
     */
    EMITTING_STRUCTURE = 18
}
/** Definition of material types. */
declare enum StationaryObject_Classification_Material {
    /**
     * UNKNOWN - Type of the material is unknown (must not be used in ground
     * truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) type of material. */
    OTHER = 1,
    /** WOOD - Wooden structure. */
    WOOD = 2,
    /** PLASTIC - Plastic structure. */
    PLASTIC = 3,
    /** CONCRETE - Concrete structure. */
    CONCRETE = 4,
    /** METAL - Metal structure. */
    METAL = 5,
    /** STONE - Natural stone structure. */
    STONE = 6,
    /** GLASS - Glass structure. */
    GLASS = 7,
    /**
     * GLAS - Glass structure.
     *
     * \note Deprecated variant spelling of MATERIAL_GLASS
     */
    GLAS = 7,
    /** MUD - Mud structure. */
    MUD = 8
}
/** Definition of material density types. */
declare enum StationaryObject_Classification_Density {
    /**
     * UNKNOWN - Type of the material density is unknown (must not be used in
     * ground truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) type of material density. */
    OTHER = 1,
    /** SOLID - No perforation - solid; */
    SOLID = 2,
    /** SMALL_MESH - Perforation max. ]0; 100] mm */
    SMALL_MESH = 3,
    /** MEDIAN_MESH - Perforation max. ]100; 500] mm */
    MEDIAN_MESH = 4,
    /** LARGE_MESH - Perforation max. ]500; 5000] mm */
    LARGE_MESH = 5,
    /** OPEN - Perforation max. ]5000; infinity[ mm */
    OPEN = 6
}
/**
 * Definition of colors for structures.
 *
 * \attention DEPRECATED: This color enum will be removed in version
 * 4.0.0. Use \c ColorDescription instead.
 */
declare enum StationaryObject_Classification_Color {
    /** UNKNOWN - Color is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) color. */
    OTHER = 1,
    /** YELLOW - Yellow. */
    YELLOW = 2,
    /** GREEN - Green. */
    GREEN = 3,
    /** BLUE - Blue. */
    BLUE = 4,
    /** VIOLET - Violet. */
    VIOLET = 5,
    /** RED - Red. */
    RED = 6,
    /** ORANGE - Orange. */
    ORANGE = 7,
    /** BLACK - Black. */
    BLACK = 8,
    /** GRAY - GRAY. */
    GRAY = 9,
    /**
     * GREY - GRAY.
     *
     * \note Deprecated variant spelling of COLOR_GRAY
     */
    GREY = 9,
    /** WHITE - White. */
    WHITE = 10
}
/**
 * \brief Attributes of type emitting structure. The horizontal_angle and the vertical_angle in
 * emitted_spatial_intensity are symmetrical across the normal, which is defined by the mounting position
 * of the emitting structure.
 */
interface StationaryObject_Classification_EmittingStructureAttribute {
    /**
     * This message determines the range of the emitted wavelength and its
     * desired number of samples.
     */
    wavelength_data?: WavelengthData[] | undefined;
    /**
     * Spatial signal strength distribution of the emitted electromagnetic wave.
     * For every sample in wavelength_data an emitted_spatial_signal_strength has to be defined.
     *
     * \note emitted_spatial_signal_strength.size() = WavelengthData.samples_number.size()
     */
    emitted_spatial_signal_strength?: SpatialSignalStrength[] | undefined;
}
/**
 * \brief A simulated object that is either a vehicle or another
 * moving object (animal, pedestrian, etc), but not a stationary
 * object (\c TrafficLight, \c TrafficSign, or \c StationaryObject).
 *
 * \image html OSI_MovingObject.svg
 *
 * \image html OSI_HostVehicle.svg
 *
 * \note The fields \c MovingObject::vehicle_attributes and \c
 * MovingObject::vehicle_classification have to be filled if the \c
 * MovingObject::Type is set to #TYPE_VEHICLE.
 */
interface MovingObject {
    /**
     * The ID of the object.
     *
     * \rules
     * is_globally_unique
     * is_set
     * \endrules
     */
    id?: Identifier | undefined;
    /**
     * The base parameters of the vehicle.
     *
     * \note The bounding box does NOT include side mirrors for vehicles.
     * \note The height includes the ground_clearance. It always goes from the
     * top to the ground.
     */
    base?: BaseMoving | undefined;
    /** The type of the object. */
    type?: MovingObject_Type | undefined;
    /**
     * The IDs of the lanes that this object is assigned to.
     *
     * \note Might be multiple if the object is switching lanes or moving from
     * one lane into another following lane.
     *
     * \note DEPRECATED: Use assigned_lane_id in MovingObjectClassification
     * instead.
     */
    assigned_lane_id?: Identifier[] | undefined;
    /**
     * Specific information about the vehicle.
     *
     * \note This field is mandatory if the \c #type is
     * #TYPE_VEHICLE .
     *
     * \rules
     * check_if this.type is_equal_to 2 else do_check is_set
     * \endrules
     */
    vehicle_attributes?: MovingObject_VehicleAttributes | undefined;
    /**
     * Specific information about the classification of the vehicle.
     *
     * \note This field is mandatory if the \c #type is
     * #TYPE_VEHICLE .
     *
     * \rules
     * check_if this.type is_equal_to 2 else do_check is_set
     * \endrules
     */
    vehicle_classification?: MovingObject_VehicleClassification | undefined;
    /**
     * Opaque reference of an associated 3D model of the moving object.
     *
     * \note It is implementation-specific how model_references are resolved to
     * 3d models.
     */
    model_reference?: string | undefined;
    /**
     * The trajectory that this moving object expects to follow in the future.
     *
     * This is not externally perceivable information, rather this is to aid
     * realistic simulation of traffic participants that are not under test.
     * This information should not be made available to the stack under test.
     *
     * \note Moving objects are not required to stick to this trajectory. It is
     * indicative and equivalent to the output of a perception and prediction
     * system.
     */
    future_trajectory?: StatePoint[] | undefined;
    /** Specific information about the classification of the vehicle. */
    moving_object_classification?: MovingObject_MovingObjectClassification | undefined;
    /**
     * Optional external reference to the moving-object source
     *
     * The external reference points to the source of an moving object, if it
     * is derived from an external sources like OpenSCENARIO.
     *
     * For example, to reference OpenSCENARIO entities of the type Vehicle or
     * Pedestrian, which describe moving objects, the items should be set as
     * follows:
     * * reference = URI to the OpenSCENARIO File
     * * type = "net.asam.openscenario"
     * * identifier[0] = Entity-Type ("Vehicle" or "Pedestrian")
     * * identifier[1] = name of Vehicle/Pedestrian in Entity
     *
     * \note For non-ASAM Standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note The value has to be repeated because one object may be derived
     *       from more than one origin source, for example, from a scenario file
     *       and from sensors.
     */
    source_reference?: ExternalReference[] | undefined;
    /** The dominating color of the material of the moving object. */
    color_description?: ColorDescription | undefined;
    /**
     * Specific information about the pedestrian.
     *
     * \note This field is mandatory if the \c #type is
     * #TYPE_PEDESTRIAN.
     *
     * \rules
     * check_if this.type is_equal_to 3 else do_check is_set
     * \endrules
     */
    pedestrian_attributes?: MovingObject_PedestrianAttributes | undefined;
}
/** Definition of object types. */
declare enum MovingObject_Type {
    /** UNKNOWN - Type of the object is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) type of moving object. */
    OTHER = 1,
    /** VEHICLE - Object is a vehicle. */
    VEHICLE = 2,
    /** PEDESTRIAN - Object is a pedestrian. */
    PEDESTRIAN = 3,
    /** ANIMAL - Object is an animal. */
    ANIMAL = 4
}
/**
 * \brief The vehicle attributes for \c MovingObject (host or other).
 *
 * This is an extension to the \c MovingObject with additional attributes,
 * such as type and lights. The origin of the rear (front) axis coordinate
 * system in global coordinates is calculated as:
 * \c MovingObject::base . \c BaseMoving::position + R * \c
 * MovingObject::VehicleAttributes::bbcenter_to_rear (front) for the host
 * vehicle (R rotates from vehicle to world frame, i.e. inverse orientation
 * of \c MovingObject::base . \c BaseMoving::orientation).
 *
 * For all vehicles, including host vehicles, the position given in
 *  \c MovingObject::base . \c BaseMoving::position points to the center of
 *  the vehicle's bounding box.
 *
 * The vehicle object coordinates are defined as x-axis is the direction
 * from rear to front of the vehicle, y-axis corresponds to rear axle and
 * z-axis points to vehicle ceiling [1]. The coordinate system is
 * right-handed. Therefore the positive y-axis points to the left of the
 * vehicle.
 *
 * \par Reference:
 * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
 */
interface MovingObject_VehicleAttributes {
    /**
     * The ID of the driver of the (host) vehicle.
     *
     * \note Field need not be set if host_vehicle is set to false or use
     * value for non valid id.
     */
    driver_id?: Identifier | undefined;
    /**
     * Deprecated: Will be removed in next major release. Moved to WheelData.
     * Median radius of the wheels measured from a center of the wheel
     * including tire.
     *
     * Unit: m
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    radius_wheel?: number | undefined;
    /**
     * Number of independent wheels.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    number_wheels?: number | undefined;
    /**
     * The vector pointing from the bounding box center point (\c
     * MovingObject::base . \c BaseMoving::position) to the middle (in x, y
     * and z) of the rear axle under neutral load conditions. In object
     * coordinates.
     */
    bbcenter_to_rear?: Vector3d | undefined;
    /**
     * The vector pointing from the bounding box center point (\c
     * MovingObject::base . \c BaseMoving::position) to the middle (in x, y
     * and z) of the front axle under neutral load conditions. In object
     * coordinates.
     */
    bbcenter_to_front?: Vector3d | undefined;
    /**
     * Static minimal distance or space from the lowest point of the vehicle's
     * body to the surface plane below it under neutral load conditions. This
     * distance disregards, for example, driving-dynamic effects or
     * road-surface effects. Can be useful to approximate the clearance area
     * under a vehicle that a sensor can see through.
     * \note \c ground_clearance is included in the bounding box height.
     */
    ground_clearance?: number | undefined;
    /**
     * Description of each wheel.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    wheel_data?: MovingObject_VehicleAttributes_WheelData[] | undefined;
    /**
     * Angle of the steering wheel.
     * Zero means the steering wheel is in its center position, a positive value
     * means the steering wheel is turned to the left and a negative value
     * means the steering wheel is turned to the right of the center position.
     *
     * Unit: rad
     */
    steering_wheel_angle?: number | undefined;
}
/**
 * \brief Detailed wheel data.
 * The focus is on the description of a wheel regarding the perceivable
 * information from the outside.
 * It is not intended to be used for dynamic calculations, for example.
 */
interface MovingObject_VehicleAttributes_WheelData {
    /**
     * The axle which contains this wheel. A value of 0 represents the
     * front-most axle of the vehicle with higher numbers incrementing
     * towards the rear-most axle.
     */
    axle?: number | undefined;
    /**
     * The index of the wheel on the axle, counting in the direction
     * of positive-y, that is, right-to-left.
     *
     * For example, on a standard 2-axle, 4-wheel car, the rear-right
     * wheel would be (axle=1, index=0).
     * This concept works also for twin tires.
     */
    index?: number | undefined;
    /**
     * A vector pointing from the vehicle's reference system (center of bounding
     * box) to the geometric center of the wheel.
     */
    position?: Vector3d | undefined;
    /**
     * Median radius of the wheel measured from the center of the wheel to
     * the outer part of the tire.
     *
     * Unit: m
     */
    wheel_radius?: number | undefined;
    /**
     * Median radius of the rim measured from the center to the outer, visible part of the rim.
     *
     * Unit: m
     */
    rim_radius?: number | undefined;
    /**
     * Median width of the tire.
     *
     * Unit: m
     */
    width?: number | undefined;
    /**
     * Orientation of the wheel.
     *
     * The reference system is the vehicle frame (center of bounding box).
     */
    orientation?: Orientation3d | undefined;
    /**
     * Rotation rate of the wheel.
     * The rotation rate around the y-axis with respect to the wheel's coordinate system.
     *
     * Unit: rad/s.
     *
     * The sign convention is defined using the right-hand rule.
     * It is applied on the y-axis of the vehicle's reference system (center of bounding box).
     * Counterclockwise is positive and clockwise is negative.
     *
     * \image html OSI_RotationRate.svg
     * \note The vehicle's reference coordinate system is only used to determine the sign convention of the rotation rate.
     */
    rotation_rate?: number | undefined;
    /**
     * Opaque reference of an associated 3D model of the wheel.
     *
     * \note It is implementation-specific how model_references are resolved to
     * 3d models.
     */
    model_reference?: string | undefined;
    /**
     * The value describes the kinetic friction of the tire's contact point.
     * If different friction coefficients due to more than one contact points are available,
     * this value contains the average.
     *
     * Unit: Dimensionless
     *
     * \par References:
     * [1] Britannica, T. Editors of Encyclopaedia. (2020, June 24). <em>coefficient of friction</em>. Retrieved May 18, 2022, from https://www.britannica.com/science/coefficient-of-friction
     */
    friction_coefficient?: number | undefined;
}
/**
 * \brief Information for the classification of moving objects regarding
 * \c MovingObject (host or other).
 */
interface MovingObject_MovingObjectClassification {
    /**
     * The IDs of the lanes that this object is assigned to.
     *
     * \note Might be multiple if the object is switching lanes or moving from
     * one lane into another following lane.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    assigned_lane_id?: Identifier[] | undefined;
    /**
     * Percentage value of the object width in the corresponding lane.
     *
     * \note Might be multiple if the object is switching lanes or moving from
     * one lane into another following lane.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    assigned_lane_percentage?: number[] | undefined;
    /**
     * Assignment of this object to logical lanes.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    logical_lane_assignment?: LogicalLaneAssignment[] | undefined;
}
/**
 * \brief Information for the classification of vehicles regarding
 * \c MovingObject (host or other).
 */
interface MovingObject_VehicleClassification {
    /** The type of the vehicle. */
    type?: MovingObject_VehicleClassification_Type | undefined;
    /** The light state of the vehicle. */
    light_state?: MovingObject_VehicleClassification_LightState | undefined;
    /** Flag defining whether the vehicle has an attached trailer. */
    has_trailer?: boolean | undefined;
    /**
     * Id of the attached trailer.
     *
     * \note Field need not be set if has_Trailer is set to false or use
     * value for non valid id.
     *
     * \rules
     * check_if this.has_trailer is_equal_to true else do_check is_set
     * \endrules
     */
    trailer_id?: Identifier | undefined;
    /** The role of the vehicle. */
    role?: MovingObject_VehicleClassification_Role | undefined;
}
/**
 * Definition of vehicle types.
 *
 * \note OSI provides a richer set of vehicle types than is supported by some
 * other OpenX standards (in particular, OpenScenario 1.x and 2.x, and OpenLabel).
 * This is primarily for historical reasons.  Where a single type from a
 * different standard can map to multiple OSI types it is left up to the
 * discretion of the OSI implementer how that mapping is achieved. In previous
 * versions, for example, a simulator might have used the dimensions of a provided
 * 3d model of a vehicle with type "car" in OpenScenario, to determine whether it
 * should be a TYPE_SMALL_CAR or TYPE_MEDIUM_CAR in OSI. As part of the harmonization
 * effort, it should now map to TYPE_CAR, which is an alias of the old TYPE_MEDIUM_CAR,
 * and all other car type enums have been deprecated in favor of TYPE_CAR.
 *
 * \note Vehicle type classification is a complex area and there are no
 * universally recognized standards.  As such, the boundaries between some of the
 * OSI vehicle types are not well-defined.  It is left to the implementer to
 * decide how to distinguish between them and agree that with any applications which
 * make use of that specific interface instance.  For example, how to distinguish
 * between a HEAVY_TRUCK and a DELIVERY_VAN, or a TRAILER and a SEMITRAILER.
 */
declare enum MovingObject_VehicleClassification_Type {
    /** UNKNOWN - Type of vehicle is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) type of vehicle. */
    OTHER = 1,
    /**
     * SMALL_CAR - Vehicle is a small car.
     *
     * Definition: Hatchback car with maximum length 4 m.
     *
     * \note Deprecated differentiation, use TYPE_CAR instead
     */
    SMALL_CAR = 2,
    /**
     * COMPACT_CAR - Vehicle is a compact car.
     *
     * Definition: Hatchback car with length between 4 and 4.5 m.
     *
     * \note Deprecated differentiation, use TYPE_CAR instead
     */
    COMPACT_CAR = 3,
    /**
     * CAR - Vehicle is a car.
     *
     * This is to be used for all car-like vehicles, without any
     * further differentiated type available.
     */
    CAR = 4,
    /**
     * MEDIUM_CAR - Vehicle is a medium car.
     *
     * Definition: Hatchback or sedan with length between 4.5 and 5 m.
     *
     * \note Deprecated differentiation, use the alias TYPE_CAR instead
     */
    MEDIUM_CAR = 4,
    /**
     * LUXURY_CAR - Vehicle is a luxury  car.
     *
     * Definition: Sedan or coupe that is longer then 5 m.
     *
     * \note Deprecated differentiation, use TYPE_CAR instead
     */
    LUXURY_CAR = 5,
    /**
     * DELIVERY_VAN - Vehicle is a delivery van.
     *
     * \image html OSI_TYPE_DELIVERY_VAN.svg
     */
    DELIVERY_VAN = 6,
    /**
     * HEAVY_TRUCK - Vehicle is a (heavy) truck.
     *
     * \image html OSI_TYPE_HEAVY_TRUCK.svg
     */
    HEAVY_TRUCK = 7,
    /**
     * SEMITRACTOR - Vehicle is a tractor capable of pulling a semi-trailer.
     *
     * \image html OSI_TYPE_SEMITRACTOR.svg
     */
    SEMITRACTOR = 16,
    /**
     * SEMITRAILER - This vehicle is a semi-trailer that can be pulled by a
     * semi-tractor.
     *
     * \note The vehicle can be, but doesn't need to be,
     * attached to another vehicle.
     *
     * \image html OSI_TYPE_SEMITRAILER.svg
     */
    SEMITRAILER = 8,
    /**
     * TRAILER - Vehicle is a trailer.
     *
     * \note The vehicle can be, but doesn't need to be,
     * attached to another vehicle.
     *
     * \image html OSI_TYPE_TRAILER.svg
     */
    TRAILER = 9,
    /** MOTORBIKE - Vehicle is a motorbike or moped. */
    MOTORBIKE = 10,
    /** BICYCLE - Vehicle is a bicycle (without motor and specific lights). */
    BICYCLE = 11,
    /** BUS - Vehicle is a bus. */
    BUS = 12,
    /** TRAM - Vehicle is a tram. */
    TRAM = 13,
    /** TRAIN - Vehicle is a train. */
    TRAIN = 14,
    /** WHEELCHAIR - Vehicle is a wheelchair. */
    WHEELCHAIR = 15,
    /**
     * STANDUP_SCOOTER - Vehicle is a stand-up scooter, including
     * motorized versions.
     */
    STANDUP_SCOOTER = 17
}
/**
 * Definition of vehicle roles.
 *
 * The role specifies the perceived role of a vehicle. Therefore, a
 * civil police car is set to ROLE_CIVIL as long as it cannot be
 * perceived as a ROLE_POLICE.
 * The normal use case will consist of 99% ROLE_CIVIL, as this role is
 * used for normal vehicles.
 * These roles may influence the behavior in traffic of the surrounding vehicles.
 * To check whether a role is "active" (e.g. blue flashing light of an
 * ambulance or an amber flashing light of a sweeper) can be looked up
 * in message LightState.
 */
declare enum MovingObject_VehicleClassification_Role {
    /** UNKNOWN - Role of vehicle is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) role of vehicle. */
    OTHER = 1,
    /** CIVIL - The vehicle role is civil, e.g. a "normal" car. */
    CIVIL = 2,
    /** AMBULANCE - The vehicle role is ambulance. */
    AMBULANCE = 3,
    /** FIRE - The vehicle role is fire fighting, e.g. fire engine. */
    FIRE = 4,
    /** POLICE - The vehicle role is police. */
    POLICE = 5,
    /** PUBLIC_TRANSPORT - The vehicle role is public transport, e.g. a school bus. */
    PUBLIC_TRANSPORT = 6,
    /** ROAD_ASSISTANCE - The vehicle role is roadside assistance, e.g. tow truck. */
    ROAD_ASSISTANCE = 7,
    /** GARBAGE_COLLECTION - The vehicle role is garbage collection, e.g. a garbage truck or sweeper. */
    GARBAGE_COLLECTION = 8,
    /** ROAD_CONSTRUCTION - The vehicle role is road construction, e.g. a excavator or tipper truck. */
    ROAD_CONSTRUCTION = 9,
    /** MILITARY - The vehicle role is military, e.g. camouflaged truck. */
    MILITARY = 10
}
/** \brief The state of the lights of a vehicle. */
interface MovingObject_VehicleClassification_LightState {
    /** State of the object's indicators. */
    indicator_state?: MovingObject_VehicleClassification_LightState_IndicatorState | undefined;
    /** State of the front fog light. */
    front_fog_light?: MovingObject_VehicleClassification_LightState_GenericLightState | undefined;
    /** State of the rear fog light. */
    rear_fog_light?: MovingObject_VehicleClassification_LightState_GenericLightState | undefined;
    /** State of the head lights. */
    head_light?: MovingObject_VehicleClassification_LightState_GenericLightState | undefined;
    /** State of the high beam. */
    high_beam?: MovingObject_VehicleClassification_LightState_GenericLightState | undefined;
    /** State of the reversing light. */
    reversing_light?: MovingObject_VehicleClassification_LightState_GenericLightState | undefined;
    /** State of the brake lights. */
    brake_light_state?: MovingObject_VehicleClassification_LightState_BrakeLightState | undefined;
    /** State of the (rear) license plate illumination. */
    license_plate_illumination_rear?: MovingObject_VehicleClassification_LightState_GenericLightState | undefined;
    /**
     * Lighting of emergency vehicles (ambulance, fire engine, police
     * car, etc.). Must be set only if a vehicle is allowed to use this
     * illumination type.
     */
    emergency_vehicle_illumination?: MovingObject_VehicleClassification_LightState_GenericLightState | undefined;
    /**
     * Lighting of service vehicles (snow removal, garbage truck, towing
     * vehicle, slow or wide vehicle, etc.). Must be set only if a
     * vehicle is allowed to use this illumination type.
     */
    service_vehicle_illumination?: MovingObject_VehicleClassification_LightState_GenericLightState | undefined;
}
/** Definition of indicator states. */
declare enum MovingObject_VehicleClassification_LightState_IndicatorState {
    /**
     * UNKNOWN - Indicator state is unknown (must not be used in ground
     * truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) state of indicator. */
    OTHER = 1,
    /** OFF - Indicators are off. */
    OFF = 2,
    /** LEFT - Left indicator is on. */
    LEFT = 3,
    /** RIGHT - Right indicator is on. */
    RIGHT = 4,
    /** WARNING - Hazard/warning light, i.e. both indicators, are on. */
    WARNING = 5
}
/**
 * Definition of generic light states for light that may be on or
 * off.
 */
declare enum MovingObject_VehicleClassification_LightState_GenericLightState {
    /** UNKNOWN - Light state is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) state of light. */
    OTHER = 1,
    /** OFF - Light is off. */
    OFF = 2,
    /** ON - Light is on. */
    ON = 3,
    /**
     * FLASHING_BLUE - Light is flashing blue.
     * To be used for emergency vehicles.
     */
    FLASHING_BLUE = 4,
    /**
     * FLASHING_BLUE_AND_RED - Light is flashing blue and red.
     * To be used for emergency vehicles.
     */
    FLASHING_BLUE_AND_RED = 5,
    /**
     * FLASHING_AMBER - Light is flashing amber.
     * To be used for service vehicles.
     */
    FLASHING_AMBER = 6
}
/** Definition of brake light states. */
declare enum MovingObject_VehicleClassification_LightState_BrakeLightState {
    /**
     * UNKNOWN - Brake light state is unknown (must not be used in ground
     * truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) state of brake light. */
    OTHER = 1,
    /** OFF - Brake lights are off. */
    OFF = 2,
    /** NORMAL - Brake lights are on with normal intensity. */
    NORMAL = 3,
    /**
     * STRONG - Brake lights are on with extra bright intensity (indicating
     * stronger braking).
     */
    STRONG = 4
}
/**
 * \brief Additional pedestrian data in case the moving object is a human.
 *
 * This is an extension to the \c MovingObject with additional information
 * describing a pedestrian in more detail.
 */
interface MovingObject_PedestrianAttributes {
    /**
     * Position offset from the center of the bounding box to the current position
     * of the root point of the pedestrian skeleton model.
     */
    bbcenter_to_root?: Vector3d | undefined;
    /**
     * List of all bones of the pedestrian.
     *
     * The number of bones may vary, based on the detail level of
     * the pedestrian model used. For example, some simulators will not include
     * detailed data about the hands of a pedestrian.
     *
     * \note A bone of each type can be provided, or left out, depending
     * on the desired level of detail, or available data. However, if a
     * bone is defined, all bones in the chain from that bone back to
     * the root point must be provided to create a complete chain.
     */
    skeleton_bone?: MovingObject_PedestrianAttributes_Bone[] | undefined;
}
/**
 * \brief Bones in the skeleton of the pedestrian.
 *
 * Each point represents a joint, or otherwise important point in the skeleton
 * of a pedestrian. For example pelvis, knee or shoulder. The naming convention
 * should be followed for identifying bones.
 */
interface MovingObject_PedestrianAttributes_Bone {
    /**
     * Bones are identified by their type, combined with which body side
     * they are on.
     *
     * To properly identify the bones the pre-defined naming convention
     * must be used.
     *
     * \image html OSI_SkeletonNamingConvention.svg
     *
     * A bone's name, position, and orientation is defined by the end-point closer
     * to the root. For example: the "LOWER_ARM_L" will define the point in the left
     * elbow of the model.
     *
     * If a bone which is more than one layer detached from the
     * root point is used, all bones between that bone and the root also
     * need to be defined in order to create a complete chain!
     *
     * If information about bones are missing, they may be left empty.
     */
    type?: MovingObject_PedestrianAttributes_Bone_Type | undefined;
    /**
     * Position of the bone.
     *
     * Reference System is the root, defined by bbcenter_to_root
     * (\c PedestrianAttributes::bbcenter_to_root).
     */
    position?: Vector3d | undefined;
    /**
     * Orientation of the bone.
     *
     * Reference System is the root, defined by bbcenter_to_root
     * (\c PedestrianAttributes::bbcenter_to_root).
     */
    orientation?: Orientation3d | undefined;
    /**
     * Length of the bone.
     *
     * Measured along its major axis.
     *
     * Unit: m
     */
    length?: number | undefined;
    /**
     * Determines whether a bone is explicitly missing from the pedestrian model.
     *
     * In case a pedestrian has missing limbs this can be explicitly communicated
     * by setting this boolean to TRUE.
     */
    missing?: boolean | undefined;
    /**
     * The velocity of the bone.
     *
     * Reference System is the root, defined by bbcenter_to_root
     * (\c PedestrianAttributes::bbcenter_to_root).
     */
    velocity?: Vector3d | undefined;
    /**
     * The orientation rate of the bone.
     *
     * Reference System is the root, defined by bbcenter_to_root
     * (\c PedestrianAttributes::bbcenter_to_root).
     */
    orientation_rate?: Orientation3d | undefined;
}
/**
 * The type of the bone.
 *
 * \image html OSI_PedestrianModelHierarchy.jpg
 */
declare enum MovingObject_PedestrianAttributes_Bone_Type {
    /**
     * ROOT - Root point of the pedestrian. Defined by bbcenter_to_root
     * (\c PedestrianAttributes::bbcenter_to_root).
     */
    ROOT = 0,
    /** HIP - Bone defining the hip. */
    HIP = 1,
    /** LOWER_SPINE - Bone defining the lower part of the spine. */
    LOWER_SPINE = 2,
    /** UPPER_SPINE - Bone defining the upper part of the spine. */
    UPPER_SPINE = 3,
    /** NECK - Bone defining the neck. */
    NECK = 4,
    /** HEAD - Bone defining the head. */
    HEAD = 5,
    /** SHOULDER_L - Bone defining the left shoulder. */
    SHOULDER_L = 6,
    /** SHOULDER_R - Bone defining the right shoulder. */
    SHOULDER_R = 7,
    /** UPPER_ARM_L - Bone defining the left upper arm. */
    UPPER_ARM_L = 8,
    /** UPPER_ARM_R - Bone defining the right upper arm. */
    UPPER_ARM_R = 9,
    /** LOWER_ARM_L - Bone defining the left forearm. */
    LOWER_ARM_L = 10,
    /** LOWER_ARM_R - Bone defining the right forearm. */
    LOWER_ARM_R = 11,
    /** FULL_HAND_L - Bone defining the left hand. */
    FULL_HAND_L = 12,
    /** FULL_HAND_R - Bone defining the right hand. */
    FULL_HAND_R = 13,
    /** UPPER_LEG_L - Bone defining the left thigh. */
    UPPER_LEG_L = 14,
    /** UPPER_LEG_R - Bone defining the right thigh. */
    UPPER_LEG_R = 15,
    /** LOWER_LEG_L - Bone defining the left shin. */
    LOWER_LEG_L = 16,
    /** LOWER_LEG_R - Bone defining the right shin. */
    LOWER_LEG_R = 17,
    /** FULL_FOOT_L - Bone defining the left foot. */
    FULL_FOOT_L = 18,
    /** FULL_FOOT_R - Bone defining the right foot. */
    FULL_FOOT_R = 19
}

/**
 * \brief Message encapsulates all data for detected objects that is specific to
 * radar sensors.
 */
interface RadarSpecificObjectData {
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
interface LidarSpecificObjectData {
}
/**
 * \brief Message encapsulates all data for detected objects that is specific to
 * camera sensors.
 */
interface CameraSpecificObjectData {
}
/**
 * \brief Message encapsulates all data for detected objects that is specific to
 * ultrasonic sensors.
 */
interface UltrasonicSpecificObjectData {
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
    maximum_measurement_distance_sensor?: number | undefined;
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
    probability?: number | undefined;
    /**
     * This indicates if the detection was calculated based on one or multiple
     * sensors.
     */
    trilateration_status?: UltrasonicSpecificObjectData_TrilaterationStatus | undefined;
    /** Describes the general moving direction of the detection. */
    trend?: UltrasonicSpecificObjectData_Trend | undefined;
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
declare enum UltrasonicSpecificObjectData_TrilaterationStatus {
    /** UNKNOWN - Unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known). */
    OTHER = 1,
    /** NOT_TRILATERATED - No trilateration used. */
    NOT_TRILATERATED = 2,
    /** TRILATERATED - Trilateration used. */
    TRILATERATED = 3
}
/** Describes the general moving direction of the detection. */
declare enum UltrasonicSpecificObjectData_Trend {
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
    DEPARTING = 5
}
/**
 * \brief Message encapsulates all data for detected objects that is
 * specific to ultrasonic sensors.
 */
interface UltrasonicSpecificObjectData_Signalway {
    /** The ID of the ultrasonic sensor's sender. */
    sender_id?: Identifier | undefined;
    /** The ID of the ultrasonic sensor's receiver. */
    receiver_id?: Identifier | undefined;
}

/**
 * \brief The common information for a detected item as estimated by the
 * sensor.
 */
interface DetectedItemHeader {
    /**
     * Specific ID of the detected item as assigned by the sensor internally.
     * Needs not to match with \c #ground_truth_id.
     *
     * \rules
     * is_set
     * \endrules
     */
    tracking_id?: Identifier | undefined;
    /** The ID of the original detected item in the ground truth. */
    ground_truth_id?: Identifier[] | undefined;
    /**
     * The estimated probability that this detected item really exists, not
     * based on history.
     *
     * \note Use as confidence measure where a low value means less confidence
     * and a high value indicates strong confidence.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 1
     * \endrules
     */
    existence_probability?: number | undefined;
    /**
     * The amount of time that this detected object has been continuously
     * observed/tracked.
     *
     * \note
     * \f$ Timestamp - Age := \f$ 'point in time' when the object has
     * been observed for the first time.
     *
     * Unit: s
     */
    age?: number | undefined;
    /** The measurement state. */
    measurement_state?: DetectedItemHeader_MeasurementState | undefined;
    /**
     * A list of physical sensors which detected this detected item.
     *
     * If \c SensorData has detected entities and all detections are missing,
     * then e.g. the number of sensors can confirm the
     * \c #existence_probability.
     *
     * \note This information can be determined via the detected entities'
     * detections ( \c ...Detection::object_id = 'this detected item' ) and
     * the sensors (their IDs) to which these detections belong.
     */
    sensor_id?: Identifier[] | undefined;
}
/** Definition of measurement states. */
declare enum DetectedItemHeader_MeasurementState {
    /** UNKNOWN - Measurement state is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /**
     * OTHER - Measurement state is unspecified (but known, i.e. value is not part
     * of this enum list).
     */
    OTHER = 1,
    /** MEASURED - Entity has been measured by the sensor in the current time step. */
    MEASURED = 2,
    /**
     * PREDICTED - Entity has not been measured by the sensor in the current time step.
     * Values provided by tracking only.
     */
    PREDICTED = 3
}
/**
 * \brief A stationary object (e.g. landmark) in the environment as detected by
 * the sensor.
 *
 * \image html OSI_DetectedStationaryObject.svg
 *
 * The parent frame of a detected stationary object is the virtual sensor
 * coordinate system.
 *
 * /note The virtual sensor coordinate system is relative to the vehicle coordinate
 * system which has its origin in the center of the rear axle of the ego
 * vehicle. This means if virtual sensor mounting position and orientation are
 * set to (0,0,0) the virtual sensor coordinate system coincides with the
 * vehicle coordinate system.
 */
interface DetectedStationaryObject {
    /** Common information of one detected item. */
    header?: DetectedItemHeader | undefined;
    /** The base parameters of the stationary object. */
    base?: BaseStationary | undefined;
    /**
     * The root mean squared error of the base parameters of the detected
     * stationary object (e.g. landmark). \c StationaryObject::base has to be
     * identical for all \c #candidate stationary objects.
     */
    base_rmse?: BaseStationary | undefined;
    /**
     * A list of candidates for this stationary object as estimated by the
     * sensor.
     */
    candidate?: DetectedStationaryObject_CandidateStationaryObject[] | undefined;
    /** The dominating color of the material of the structure. */
    color_description?: ColorDescription | undefined;
    /**
     * Additional data that is specific to radar sensors.
     *
     * \note Field needs not to be set if simulated sensor is not a radar
     * sensor.
     */
    radar_specifics?: RadarSpecificObjectData | undefined;
    /**
     * Additional data that is specific to lidar sensors.
     *
     * \note Field needs not to be set if simulated sensor is not a lidar
     * sensor.
     */
    lidar_specifics?: LidarSpecificObjectData | undefined;
    /**
     * Additional data that is specific to camera sensors.
     *
     * \note Field needs not to be set if simulated sensor is not a camera
     * sensor.
     */
    camera_specifics?: CameraSpecificObjectData | undefined;
    /**
     * Additional data that is specific to ultrasonic sensors.
     *
     * \note Field needs not to be set if simulated sensor is not an ultrasonic
     * sensor.
     */
    ultrasonic_specifics?: UltrasonicSpecificObjectData | undefined;
}
/**
 * \brief A candidate for a detected stationary object as estimated
 * by the sensor.
 */
interface DetectedStationaryObject_CandidateStationaryObject {
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
    probability?: number | undefined;
    /** The classification of the stationary object (e.g. landmark). */
    classification?: StationaryObject_Classification | undefined;
}
/**
 * \brief Moving object in the environment as detected and perceived by the
 * sensor.
 *
 * The parent frame of a detected moving object is the virtual sensor coordinate
 * system.
 *
 * /note The virtual sensor coordinate system is relative to the vehicle coordinate
 * system which has its origin in the center of the rear axle of the ego
 * vehicle. This means if virtual sensor mounting position and orientation are
 * set to (0,0,0) the virtual sensor coordinate system coincides with the
 * vehicle coordinate system.
 */
interface DetectedMovingObject {
    /** Common information of one detected item. */
    header?: DetectedItemHeader | undefined;
    /**
     * The base parameters of the moving object.
     *
     * \note The bounding box does NOT include mirrors for vehicles.
     * \note The height includes the ground_clearance. It always goes from the
     * top to the ground.
     */
    base?: BaseMoving | undefined;
    /**
     * The root mean squared error of the base parameters of the detected
     * moving object (e.g. car). \c MovingObject::base has to be
     * identical for all \c #candidate moving objects.
     */
    base_rmse?: BaseMoving | undefined;
    /**
     * Reference point location specification of the sensor measurement
     * (required to decouple sensor measurement, position and bounding box
     * estimation) as used by the sensor (model).
     *
     * \note Note that the value of this field has no impact on the value of
     * object::position, which always references the center of the object /
     * bounding box.
     */
    reference_point?: DetectedMovingObject_ReferencePoint | undefined;
    /** Actual movement state w.r.t. the moving object history. */
    movement_state?: DetectedMovingObject_MovementState | undefined;
    /**
     * Percentage side lane left.
     *
     * Percentage value of the object width in the corresponding lane.
     *
     * \note DEPRECATED: Use assigned_lane_percentage in MovingObjectClassification
     * instead.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 100
     * \endrules
     */
    percentage_side_lane_left?: number | undefined;
    /**
     * Percentage side lane right.
     *
     * Percentage value of the object width in the corresponding lane.
     *
     * \note DEPRECATED: Use assigned_lane_percentage in MovingObjectClassification
     * instead.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 100
     * \endrules
     */
    percentage_side_lane_right?: number | undefined;
    /**
     * A list of candidates for this moving object as estimated by the
     * sensor (e.g. pedestrian, car).
     */
    candidate?: DetectedMovingObject_CandidateMovingObject[] | undefined;
    /** The dominating color of the material of the moving object. */
    color_description?: ColorDescription | undefined;
    /**
     * Additional data that is specific to radar sensors.
     *
     * \note Field needs not to be set if simulated sensor is not a radar
     * sensor.
     */
    radar_specifics?: RadarSpecificObjectData | undefined;
    /**
     * Additional data that is specific to lidar sensors.
     *
     * \note Field needs not to be set if simulated sensor is not a lidar
     * sensor.
     */
    lidar_specifics?: LidarSpecificObjectData | undefined;
    /**
     * Additional data that is specific to camera sensors.
     *
     * \note Field needs not to be set if simulated sensor is not a camera
     * sensor.
     */
    camera_specifics?: CameraSpecificObjectData | undefined;
    /**
     * Additional data that is specific to ultrasonic sensors.
     *
     * \note Field needs not to be set if simulated sensor is not an ultrasonic
     * sensor.
     */
    ultrasonic_specifics?: UltrasonicSpecificObjectData | undefined;
}
/**
 * Definition of available reference points. Left/middle/right and
 * front/middle/rear indicate the position in y- and x-direction
 * respectively. The z position is always considered as middle.
 */
declare enum DetectedMovingObject_ReferencePoint {
    /**
     * UNKNOWN - Reference point is unknown, i.e. sensor does not report a reference
     * point for the position coordinate.
     * Value must not be used in ground truth data.
     * Usually this means that the reference point for the given position
     * coordinates is a largely arbitrary point within the bounding volume
     * unknown to the sensor. If this value is set, the center of the
     * bounding box should be used as reference point by convention, unless
     * the specific use case requires otherwise.
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) reference point. */
    OTHER = 1,
    /** CENTER - Center of the bounding box. */
    CENTER = 2,
    /** MIDDLE_LEFT - Middle-Left of the bounding box. */
    MIDDLE_LEFT = 3,
    /** MIDDLE_RIGHT - Middle-Right of the bounding box. */
    MIDDLE_RIGHT = 4,
    /** REAR_MIDDLE - Rear-Middle of the bounding box. */
    REAR_MIDDLE = 5,
    /** REAR_LEFT - Rear-Left of the bounding box. */
    REAR_LEFT = 6,
    /** REAR_RIGHT - Rear-Right of the bounding box. */
    REAR_RIGHT = 7,
    /** FRONT_MIDDLE - Front-Middle of the bounding box. */
    FRONT_MIDDLE = 8,
    /** FRONT_LEFT - Front-Left of the bounding box. */
    FRONT_LEFT = 9,
    /** FRONT_RIGHT - Front-Right of the bounding box. */
    FRONT_RIGHT = 10
}
/** Information about a possible movement of the object during tracking. */
declare enum DetectedMovingObject_MovementState {
    /** UNKNOWN - Movement state is unknown. */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known). */
    OTHER = 1,
    /** STATIONARY - Until now no object movement was detected in tracking history. */
    STATIONARY = 2,
    /** MOVING - Object moves currently. */
    MOVING = 3,
    /**
     * STOPPED - Object movement was detected in tracking history, but object is
     * currently not moving.
     */
    STOPPED = 4
}
/**
 * \brief A candidate for a detected moving object as estimated by the
 * sensor.
 */
interface DetectedMovingObject_CandidateMovingObject {
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
    probability?: number | undefined;
    /** The description of the moving object (e.g. car). */
    type?: MovingObject_Type | undefined;
    /**
     * Specific information about the classification of the vehicle.
     *
     * \note This field is mandatory if the \c CandidateMovingObject::type
     * is \c MovingObject::TYPE_VEHICLE .
     *
     * \rules
     * check_if this.type is_equal_to 2 else do_check is_set
     * \endrules
     */
    vehicle_classification?: MovingObject_VehicleClassification | undefined;
    /**
     * Pedestrian head pose for behavior prediction. Describes the head
     * orientation w.r.t. the host vehicle orientation.
     * The x-axis of the right-handed head frame is pointing along the
     * pedestrian's straight ahead viewing direction (anterior), the y-axis lateral to the left,
     * and the z-axis is pointing upwards (superior) [1].
     *
     * ``View_normal_base_coord_system =
     * Inverse_Rotation(#head_pose)*Unit_vector_x``
     *
     * \note This field is mandatory if the \c CandidateMovingObject.type is
     * \c MovingObject::TYPE_PEDESTRIAN
     *
     * \rules
     * check_if this.type is_equal_to 3 else do_check is_set
     * \endrules
     *
     * \par Reference:
     *
     * [1] Patton, K. T. & Thibodeau, G. A. (2015). <em>Anatomy & Physiology</em>. 9th Edition. Elsevier. Missouri, U.S.A. ISBN 978-0-323-34139-4. p. 1229.
     */
    head_pose?: Orientation3d | undefined;
    /**
     * Pedestrian upper body pose for behavior prediction. Describes the
     * upper body orientation w.r.t. the host vehicle orientation.
     * The x-axis of the right-handed upper body frame is pointing along the
     * pedestrian's upper body ventral (anterior) direction (i.e. usually
     * pedestrian's intended moving direction), the y-axis lateral to the left,
     * and the z-axis is pointing upwards (superior, to the pedestrian's head) [1].
     *
     * ``View_normal_base_coord_system =
     * Inverse_Rotation(#upper_body_pose)*Unit_vector_x``
     *
     * \note This field is mandatory if the \c CandidateMovingObject::type
     * is \c MovingObject::TYPE_PEDESTRIAN
     *
     * \rules
     * check_if this.type is_equal_to 3 else do_check is_set
     * \endrules
     *
     * \par Reference:
     * [1] Patton, K. T. & Thibodeau, G. A. (2015). <em>Anatomy & Physiology</em>. 9th Edition. Elsevier. Missouri, U.S.A. ISBN 978-0-323-34139-4. p. 1229.
     */
    upper_body_pose?: Orientation3d | undefined;
    /** Specific information about the classification of a moving object. */
    moving_object_classification?: MovingObject_MovingObjectClassification | undefined;
}

/**
 * \brief A lane in the road network.
 *
 * A lane is part of a road and mainly characterized by its center line. It also
 * knows about any adjacent lanes, antecessor and successor lanes.
 * The following images will be referred to by later comments. The lane
 * l4 in image HighwayExit is used  as reference if not mentioned otherwise.
 *
 * <table border=0>
 * <tr>
 * <td>
 * \image html OSI_Highway_Exit.svg "" width=550px
 * <td>
 * \image html OSI_LaneIntersection.svg "" width=550px
 * <tr>
 * <td>
 * \image html OSI_Highway_Exit.jpg "HighwayExit" width=650px
 * <td>
 * \image html OSI_LaneIntersection.jpg "Intersection" width=650px
 * </table>
 *
 * \note In the examples, the symbols l1, l2, ... and lb1, lb2, ...
 * stand for the lane ids and lane boundary ids respectively, i.e. for
 * integers (uint64). The symbols cl1, cl2, ... represent the
 * osi3::Lane::Classification::centerline elements of the lanes with
 * the respective ids.
 */
interface Lane {
    /**
     * The ID of the lane.
     * Example: l4 (see reference picture HighwayExit).
     *
     * \note Note ID is global unique.
     *
     * \rules
     * is_globally_unique
     * is_set
     * \endrules
     */
    id?: Identifier | undefined;
    /** The classification of the lane. */
    classification?: Lane_Classification | undefined;
    /**
     * Optional external reference to the lane source.
     *
     * The external reference points to the source of the lane, if it is derived
     * from one or more objects or external references.
     *
     * For example, to reference a lane defined in an OpenDRIVE map
     * the items should be set as follows:
     * * reference = URI to map, can remain empty if identical with definition
     *               in \c GroundTruth::map_reference
     * * type = "net.asam.opendrive"
     * * identifier[0] = id of t_road
     * * identifier[1] = s of t_road_lanes_laneSection
     * * identifier[2] = id of t_road_lanes_laneSection_left_lane,
     *                         t_road_lanes_laneSection_right_lane
     *
     * \note For non-ASAM Standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note The value has to be repeated, because one lane segment may be
     *       derived from more than one origin segment. Multiple sources
     *       may be added as reference as well, for example, a map and sensors.
     */
    source_reference?: ExternalReference[] | undefined;
}
/**
 * \brief \c Classification of a lane.
 *
 * <table border = 0>
 * <tr>
 * <td>
 * \anchor HighwayExit
 * \image html OSI_LaneClassification.jpg "HighwayExit" width=800px
 * </td>
 * <td>
 * <table border=0>
 * <tr>
 * <td>
 * <b>
 * \c Classification for lane l4 in image HighwayExit:
 * </b>
 * <tr>
 * <td>
 * \c #type = \c #TYPE_DRIVING
 * <tr>
 * <td>
 * \c #centerline = (cl4_1, cl4_2, cl4_3, cl4_4, cl4_5)
 * <tr>
 * <td>
 * \c #centerline_is_driving_direction = \c true
 * <tr>
 * <td>
 * \c #is_host_vehicle_lane = \c true
 * <tr>
 * <td>
 * \c #left_adjacent_lane_id = l3
 * <tr>
 * <td>
 * \c #right_adjacent_lane_id  = (l5,l6)
 * <tr>
 * <td>
 * \c #left_lane_boundary_id = lb5
 * <tr>
 * <td>
 * \c #right_lane_boundary_id = (lb9, lb6)
 * </table>
 * </td>
 * </tr>
 * <tr>
 * <td>
 * \anchor Intersection
 * \image html OSI_LaneIntersection.jpg "Intersection" width=800px
 * </td>
 * <td>
 * <table border=0>
 * <tr>
 * <td>
 * <b>
 * \c Classification for lane l7 in image Intersection:
 * </b>
 * </td>
 * </tr>
 * <tr>
 * <td>
 * \c #type = \c #TYPE_INTERSECTION
 * </td>
 * </tr>
 * <tr>
 * <td>
 * \c #is_host_vehicle_lane = \c false
 * </td>
 * </tr>
 * <tr>
 * <td>
 * \c #free_lane_boundary_id = lb11
 * </td>
 * </tr>
 * <tr>
 * <td>
 * <border = 0>
 * <tr>
 * <td>
 * \c #lane_pairing = (
 * <td>
 * (l2,l1), (l2,l3), (l2,l5),
 * <tr>
 * <td>
 * <td>
 * (l4,l1), (l4,l3), (l4,l5),
 * <tr>
 * <td>
 * <td>
 * (l6,l1), (l6,l3), (l6,l5) )
 * </table>
 * </td>
 * </tr>
 * </table>
 * </td>
 * </tr>
 * </table>
 *
 * \note In the examples, the symbols l1, l2, ... and lb1, lb2, ...
 * stand for the lane ids and lane boundary ids respectively, i.e. for
 * integers (uint64). The symbols cl1, cl2, ... represent the
 * osi3::Lane::Classification::centerline elements of the lanes with
 * the respective ids. The symbols cl1_1, cl1_2, ... stand for
 * \c #osi3::Vector3d elements.
 */
interface Lane_Classification {
    /**
     * The type of the lane.
     *
     * Example: For l4 in image \ref HighwayExit the \c #type is \c
     * #TYPE_DRIVING.
     */
    type?: Lane_Classification_Type | undefined;
    /**
     * Indicates that the host vehicle travels on this particular lane.
     * The host vehicle may travel on more than one lane at once. This does
     * also apply for the \c CandidateLane in the \c DetectedLane .
     */
    is_host_vehicle_lane?: boolean | undefined;
    /**
     * The lane's center line (as a list of segments).
     *
     * The centerline describes the middle of the lane.
     *
     * \image html OSI_LaneCenterline.svg "Centerline" width=500px
     *
     * Example: In image \ref HighwayExit,
     * the centerline of lane l4 (black line) is given by
     * (cl4_1, cl4_2, cl4_3, cl4_4, cl4_5).
     *
     * \image html OSI_LaneBoundaries_And_CenterLine.svg "Centerline" width=500px
     *
     * \note
     * cl: center line
     * lb: lane boundary
     *
     * \attention The points describing the center line must be set in the
     * same ordering (ascending or descending) as the points describing the
     * lane boundaries. Example: If the points are deducted from a map format,
     * the order of points is recommended to be in line with the road coordinate
     * (e.g. s-coordinate in OpenDRIVE).
     *
     * \attention The points describing the center line might be set at
     * arbitrary distances. When the points are pairwise linearly connected,
     * the lateral distance to the real ideal line (as used by the
     * simulation environment internally) must not exceed 5cm. As shown in
     * the following image:
     *
     * \image html line_approximation_error.svg "Approximation error"
     * Approximation error green line.
     *
     * \note The center line is the line that a typical vehicle follows more
     * or less (depending on the situation, a little more to the left or
     * right of the center line). The intended direction of travel on the
     * lane is given by the direction defined by the sequence of points
     * forming the \c #centerline w.r.t. \c
     * #centerline_is_driving_direction.
     *
     * \note The \c #centerline is defined only for \c #type =
     * \c #TYPE_DRIVING and if exactly one or no \c #lane_pairing pair
     * exists.
     *
     * \note Intersections and non-driving lanes do not have a center line.
     * A vehicle must calculate this individually and depending on the
     * situation.
     */
    centerline?: Vector3d[] | undefined;
    /**
     * Definition of the intended driving direction.
     *
     * Defined and used for driving lanes.
     * \c true means driving direction is according to ascending storage
     * order of center line points. \c false means driving direction is
     * according to descending storage order of center line points.
     *
     * Example: \c #centerline_is_driving_direction = \c true for lane l4
     * and \c #centerline_is_driving_direction = \c false for lane l2 in
     * image \ref HighwayExit .
     *
     * \note The \c #centerline_is_driving_direction is defined for \c #type
     * = \c #TYPE_DRIVING .
     */
    centerline_is_driving_direction?: boolean | undefined;
    /**
     * List of IDs of all lane segments that are directly adjacent to the
     * lane on the left side (w.r.t. ascending order of centerline points
     * and lane boundary points). Note that lengths of lane segments are
     * not synchronized and therefore there are multiple adjacent segments
     * if there is a split/merge point in the adjacent lane.
     *
     * Example: The lane l3 is the only left adjacent lane for lane l4
     * in image \ref HighwayExit.
     *
     * \note The \c #left_adjacent_lane_id is undefined for \c #type =
     * \c #TYPE_INTERSECTION .
     *
     * \note OSI uses singular instead of plural for repeated field names.
     *
     * \rules
     * check_if this.type is_different_to 4 else do_check is_set
     * \endrules
     */
    left_adjacent_lane_id?: Identifier[] | undefined;
    /**
     * List of IDs of all lane segments that are directly adjacent to the
     * lane on the right side (w.r.t. ascending order of centerline points
     * and lane boundary points). Note that lengths of lane segments are
     * not synchronized and therefore there are multiple adjacent segments
     * if there is a split/merge point in the adjacent lane.
     *
     * Example: \c #right_adjacent_lane_id = (l5, l6)
     * for lane l4 in image \ref HighwayExit.
     *
     * \note The \c #right_adjacent_lane_id is undefined for \c #type =
     * \c #TYPE_INTERSECTION .
     *
     * \note OSI uses singular instead of plural for repeated field names.
     *
     * \rules
     * check_if this.type is_different_to 4 else do_check is_set
     * \endrules
     */
    right_adjacent_lane_id?: Identifier[] | undefined;
    /**
     * The antecessor/successor lane pairings of this lane. There can be
     * multiple pairings with the same antecessor and different successor
     * lanes and vice versa. The antecessor lanes end in the same point that
     * this lane starts from. The successor lanes start in the same point
     * that this lane ends in.
     *
     * Example: See image \ref Intersection.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    lane_pairing?: Lane_Classification_LanePairing[] | undefined;
    /**
     * The right adjacent lane boundaries \c #right_lane_boundary_id may
     * only be shared with/as the left adjacent lane boundaries \c
     * #left_lane_boundary_id of the nearest right adjacent lane \c
     * #right_adjacent_lane_id.
     *
     * Example: \c #right_lane_boundary_id =
     * (lb9, lb6) for reference lane l4 in image \ref HighwayExit.
     *
     * \note Empty for intersections.
     *
     * \note The \c #right_lane_boundary_id is undefined for \c #type =
     * \c #TYPE_INTERSECTION .
     *
     * \note OSI uses singular instead of plural for repeated field names.
     *
     * \note The boundary between adjacent lanes at different heights
     *       (e.g. a curb between a driving lane and a sidewalk)
     *       should not be shared, but modeled as two separate lane
     *       boundaries with individual ids. One for the upper, the
     *       other one for the lower lane.
     *
     * \rules
     * check_if this.type is_different_to 4 else do_check is_set
     * \endrules
     */
    right_lane_boundary_id?: Identifier[] | undefined;
    /**
     * The left adjacent lane boundaries \c #left_lane_boundary_id may only
     * be shared with/as the right adjacent lane boundaries \c
     * #right_lane_boundary_id of the nearest left adjacent lane \c
     * #left_adjacent_lane_id.
     *
     * Example: \c #left_lane_boundary_id = lb5 for lane l4 in image \ref
     * HighwayExit.
     *
     * \note Empty for intersections.
     *
     * \note The \c #left_lane_boundary_id is undefined for \c #type =
     * \c #TYPE_INTERSECTION .
     *
     * \note OSI uses singular instead of plural for repeated field names.
     *
     * \note The boundary between adjacent lanes at different heights
     *       (e.g. a curb between a driving lane and a sidewalk)
     *       should not be shared, but modeled as two separate lane
     *       boundaries with individual ids. One for the upper, the
     *       other one for the lower lane.
     *
     * \rules
     * check_if this.type is_different_to 4 else do_check is_set
     * \endrules
     */
    left_lane_boundary_id?: Identifier[] | undefined;
    /**
     * The free boundaries which have no/unknown assignment to left/right.
     *
     * Example: \c #free_lane_boundary_id = lb11 for lane l7 in image \ref
     * Intersection.
     *
     * \note \c Lane with \c #type = \c #TYPE_INTERSECTION use only free
     * lane boundaries.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     *
     * \rules
     * check_if this.type is_different_to 4 else do_check is_set
     * \endrules
     */
    free_lane_boundary_id?: Identifier[] | undefined;
    /** The condition of the lane, e.g. influenced by weather. */
    road_condition?: Lane_Classification_RoadCondition | undefined;
    /**
     * The subtype of the lane.
     *
     * This subtype specifies a lane more concretely.
     */
    subtype?: Lane_Classification_Subtype | undefined;
}
/** Definition of available lane types. */
declare enum Lane_Classification_Type {
    /** UNKNOWN - Lane of unknown type (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Any other type of lane. */
    OTHER = 1,
    /**
     * DRIVING - A normal lane.
     * Example: Lanes with IDs l1, l2, l3, l4 and l6 in image \ref
     * HighwayExit.
     */
    DRIVING = 2,
    /**
     * NONDRIVING - A road where driving is normally not permitted.
     * Example: Lane with ID l5 in image \ref HighwayExit.
     */
    NONDRIVING = 3,
    /**
     * INTERSECTION - An intersection as a lane.
     * Example: Lane with ID l7 in image \ref Intersection.
     *
     * \image html OSI_X-Junction.svg "" width=600px
     */
    INTERSECTION = 4
}
/** Definition of available lane subtypes, aligned with OpenDRIVE. */
declare enum Lane_Classification_Subtype {
    /** UNKNOWN - Lane of unknown subtype. Do not use in ground truth. */
    UNKNOWN = 0,
    /** OTHER - Any other subtype of lane. */
    OTHER = 1,
    /**
     * NORMAL - A normal driving lane.
     * Example: Lanes with IDs l1, l2, l3 and l4 in image \ref
     * HighwayExit.
     *
     * Since it is intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_DRIVING.
     */
    NORMAL = 2,
    /**
     * BIKING - A lane that is designated for bicycles.
     *
     * Since it is not intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_NONDRIVING.
     */
    BIKING = 3,
    /**
     * SIDEWALK - A lane that is designated for pedestrians (sidewalk).
     *
     * Since it is not intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_NONDRIVING.
     */
    SIDEWALK = 4,
    /**
     * PARKING - A lane with parking spaces.
     *
     * Since it is not intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_NONDRIVING.
     */
    PARKING = 5,
    /**
     * STOP - A hard shoulder on motorways for emergency stops.
     * Example: Lane l5 in image \ref
     * HighwayExit.
     *
     * Since it is not intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_NONDRIVING.
     */
    STOP = 6,
    /**
     * RESTRICTED - A lane on which cars should not drive.
     *
     * Since it is not intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_NONDRIVING.
     */
    RESTRICTED = 7,
    /**
     * BORDER - A hard border on the edge of a road.
     *
     * Since it is not intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_NONDRIVING.
     */
    BORDER = 8,
    /**
     * SHOULDER - A soft border on the edge of a road.
     *
     * Since it is not intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_NONDRIVING.
     */
    SHOULDER = 9,
    /**
     * EXIT - A deceleration lane in parallel to the main road.
     * Example: Lane l6 in image \ref
     * HighwayExit.
     *
     * Since it is intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_DRIVING.
     */
    EXIT = 10,
    /**
     * ENTRY - An acceleration lane in parallel to the main road.
     *
     * Since it is intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_DRIVING.
     */
    ENTRY = 11,
    /**
     * ONRAMP - A ramp from rural or urban roads joining a motorway.
     *
     * Since it is intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_DRIVING.
     */
    ONRAMP = 12,
    /**
     * OFFRAMP - A ramp leading off a motorway onto rural or urban roads.
     *
     * Since it is intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_DRIVING.
     */
    OFFRAMP = 13,
    /**
     * CONNECTINGRAMP - A ramp that connect two motorways.
     *
     * Since it is intended to be used for normal automotive
     * driving, it should be used in combination with TYPE_DRIVING.
     */
    CONNECTINGRAMP = 14
}
/** \brief The condition of the road surface. */
interface Lane_Classification_RoadCondition {
    /**
     * The temperature of the roads surface in Kelvin.
     *
     * Unit: K
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    surface_temperature?: number | undefined;
    /**
     * The height of the water film on top of the surface in mm.
     *
     * Unit: mm
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    surface_water_film?: number | undefined;
    /**
     * The temperature where the water on top of the surface would start
     * to freeze or dew in Kelvin.
     *
     * Unit: K
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    surface_freezing_point?: number | undefined;
    /**
     * The percentage of ice covering the road.
     *
     * Unit: %
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    surface_ice?: number | undefined;
    /**
     * The coefficient representing the roughness or unevenness of the
     * road. International Roughness Index (IRI) [1] values range from 0
     * = smooth ground (equivalent to driving on a plate of glass) up to
     * >
     * 20 mm/m (a very rough road).
     *
     * Estimated value ranges (IRI):
     * 0.0 mm/m absolutely perfect evenness
     * 0.3 -  1.8 mm/m airport runways and superhighways
     * 1.4 -  3.4 mm/m new pavements
     * 2.2 -  5.7 mm/m older pavements
     * 3.2 -  9.8 mm/m maintained unpaved roads
     * 4.0 - 11.0 mm/m damaged pavements
     * 8.0 - >
     * 20 mm/m rough unpaved roads
     *
     * Speed of normal use (IRI):
     * 30 km/h - 20   mm/m
     * 50 km/h - 14.5 mm/m
     * 60 km/h - 10.0 mm/m
     * 80 km/h -  8.5 mm/m
     * 100 km/h -  3.4 mm/m
     *
     * Road conditions (IRI);
     * 15 mm/m erosion gulleys and deep depressions
     * 11 mm/m frequent shallow depressions, some deep
     * 9 mm/m frequent minor depressions
     * 5 mm/m surface imperfections
     *
     * Unit: mm/m
     *
     * \par Reference:
     * [1] Sayers, M. W. & Karamihas, S. M. (1998). <em>Little Book of Profiling</em>. University of Michigan Transportation Research Institute. Retrieved January 25, 2020, from http://www.umtri.umich.edu/content/LittleBook98R.pdf pp. 45 ff.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    surface_roughness?: number | undefined;
    /**
     * The surface texture or fine roughness
     *
     * Whereas the IRI-based roughness or unevenness measure only takes
     * into account road wavelengths around 0.5 m - 100 m, the surface
     * texture or fine roughness [1] measures only wavelengths below
     * 0.5 m. It is given as the standard height deviation of fine
     * roughness
     *
     * Unit: m
     *
     * \par Reference:
     * [1] Schneider, R. (1998). <em>Modellierung der Wellenausbreitung fuer ein bildgebendes Kfz-Radar</em>. PhD thesis. Karlsruhe, Germany. Universitaet Karlsruhe, Fak. f. Elektrotechnik.
     */
    surface_texture?: number | undefined;
}
/**
 * \brief The lane ID pairings of antecessor and successor lanes.
 *
 * <table border = 0>
 * <tr>
 * <td>
 * \image html OSI_LaneIntersection.svg "" width=600px
 * </td>
 * <td>
 * <table border=0>
 * <tr>
 * <td>
 * <b>
 * \c LanePairing for lane l7:
 * </b>
 * </td>
 * </tr>
 * <tr>
 * <td>
 * <table border = 0>
 * <tr>
 * <td>
 * (l2,l1), (l2,l3), (l2,l5),
 * <tr>
 * <td>
 * (l4,l1), (l4,l3), (l4,l5),
 * <tr>
 * <td>
 * (l6,l1), (l6,l3), (l6,l5)
 * </table>
 * </td>
 * </tr>
 * </table>
 * </td>
 * </tr>
 * </table>
 *
 * \note In the example, the symbols l1, l2, ... stand for the
 * respective lane ids, i.e. for integers (uint64). The symbols cl1,
 * cl2, ... represent the osi3::Lane::Classification::centerline
 * elements of the lanes with the respective ids.
 */
interface Lane_Classification_LanePairing {
    /**
     * The antecessor lane ID.
     *
     * \rules
     * refers_to: Lane
     * \endrules
     */
    antecessor_lane_id?: Identifier | undefined;
    /**
     * The successor lane ID.
     *
     * \rules
     * refers_to: Lane
     * \endrules
     */
    successor_lane_id?: Identifier | undefined;
}
/**
 * \brief A lane boundary defining the border of a lane.
 *
 * The left and right lane boundary define the width of the lane. Additionally,
 * free markings can be defined, e.g. at construction sites. Free markings
 * across multiple lanes may be defined multiple times for all affected lanes.
 *
 * \image html OSI_LaneBoundary.svg "LaneBoundary" width=800px
 *
 * \note In the example, the symbols l1, l2, ... and lb1, lb2, ...
 * stand for the lane ids and lane boundary ids respectively, i.e. for
 * integers (uint64). The symbols bp2_{i+1}, bp2_{i}, bp2_{i-1} stand
 * for \c #osi3::LaneBoundary::BoundaryPoint elements.
 */
interface LaneBoundary {
    /**
     * The ID of the lane boundary.
     *
     * \rules
     * is_globally_unique
     * \endrules
     */
    id?: Identifier | undefined;
    /**
     * \note For dashed lines, one \c BoundaryPoint has to be at the start and
     * another at the end of each dashed line segment. The first
     * \c BoundaryPoint defines the beginning of the first dashed lane marking.
     * The last \c BoundaryPoint defines the end of the last dashed lane
     * marking.
     * \note For Botts' dots lines, one \c BoundaryPoint position has to define
     * each Botts' dot.
     *
     * \attention For \c BoundaryPoint the same rule for the approximation
     * error applies as for \c Lane::Classification::centerline.
     *
     * \rules
     * first_element width is_equal_to 0.13
     * first_element height is_equal_to 0.14
     * last_element width is_equal_to 0.13
     * last_element height is_equal_to 0.13
     * \endrules
     */
    boundary_line?: LaneBoundary_BoundaryPoint[] | undefined;
    /** The classification of the lane boundary. */
    classification?: LaneBoundary_Classification | undefined;
    /**
     * Optional external reference to the lane boundary source.
     *
     * \note For OpenDRIVE, there is no direct possibility to reference the
     *       RoadMark, as there is no unique identifier in this sub-object.
     *
     * \note For non-ASAM Standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note The value has to be repeated because one object may be derived
     *       from more than one origin source, for example, from a scenario file
     *       and from sensors.
     */
    source_reference?: ExternalReference[] | undefined;
    /**
     * The visual color of the material of the lane boundary.
     *
     * \note This does not represent the semantic classification but the visual
     * appearance. For semantic classification of the lane boundary use the color
     * field in \c Classification.
     */
    color_description?: ColorDescription | undefined;
}
/**
 * \brief A single point of a lane boundary.
 *
 * \image html OSI_LaneBoundaries_And_CenterLine.svg "" width=800px
 *
 * \note
 * cl: center line
 * lb: lane boundary
 *
 * \image html OSI_LaneBoundary.svg "" width=800px
 *
 * The lane boundary point bp2_{i} is one of the points of lane boundary
 * lb2.
 *
 * \note In the example, the symbols l1, l2, ... and lb1, lb2, ...
 * stand for the lane ids and lane boundary ids respectively, i.e. for
 * integers (uint64). The symbols bp2_{i+1}, bp2_{i}, bp2_{i-1} stand
 * for \c #osi3::LaneBoundary::BoundaryPoint elements.
 */
interface LaneBoundary_BoundaryPoint {
    /** The position of the \c BoundaryPoint. */
    position?: Vector3d | undefined;
    /**
     * The overall width of the lane boundary at the position of the
     * \c BoundaryPoint .
     * Used for lines forming lane markings.
     *
     * \image html OSI_LaneBoundaryWidth.svg "" width=600px
     *
     * \note Field need not be set if it is defined previous.
     * See \c LaneBoundary.
     */
    width?: number | undefined;
    /**
     * The overall height of the lane boundary at the position of the
     * \c BoundaryPoint .
     * Used for guard rails, curbstone, or similar.
     *
     * \image html OSI_LaneBoundaryHeight.svg "" width=600px
     *
     * \note Field need not be set if it is previously defined.
     *
     * \note The boundary point height should not be used to model the boundary
     *       between two adjacent lanes at different heights as a single, shared
     *       boundary.
     *       Boundaries between adjacent lanes at different heights should be
     *       modeled as two separate lane boundaries.
     *
     * See \c LaneBoundary .
     */
    height?: number | undefined;
    /**
     * Alternation of dashes in case of a dashed lane boundary. In
     * context, this field gives information about the location of
     * dashes on the boundary line.
     */
    dash?: LaneBoundary_BoundaryPoint_Dash | undefined;
}
/**
 * This enum describes the alternation of dashes in case of a
 * dashed lane boundary.
 *
 * \note The enum descriptions adhere to the definition direction
 * of the lane boundary points. This means that start or end of a
 * dash are understood with respect to the direction in which the
 * points of the boundary line are defined.
 */
declare enum LaneBoundary_BoundaryPoint_Dash {
    /**
     * UNKNOWN - The current state of the dash alternation is not known (must
     * not be used in ground truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) type of dash alternation state. */
    OTHER = 1,
    /** START - The current \c BoundaryPoint indicates the start of a dash. */
    START = 2,
    /**
     * CONTINUE - The current \c BoundaryPoint is located on a dash of a dashed
     * line. This enables a dash to continue across multiple points.
     */
    CONTINUE = 3,
    /** END - The current \c BoundaryPoint indicates the end of a dash. */
    END = 4,
    /**
     * GAP - The current \c BoundaryPoint is located in the gap between
     * two dashes. When used to describe a first/last point of a lane
     * boundary, it indicates that the lane boundary starts/ends in
     * a gap.
     */
    GAP = 5
}
/**
 * \brief \c Classification of a lane boundary.
 *
 * <table border = 0>
 * <tr>
 * <td>
 * <table border=0>
 * <tr>
 * <td>
 * <b>
 * Image Intersection
 * </b>
 * <tr>
 * <td>
 * <tr>
 * <td>
 * \c Classification for lane boundaries lb2 and lb9:
 * </td>
 * </tr>
 * <tr>
 * <td>
 * <table border = 0>
 * <tr>
 * <td>
 * \c #type = #TYPE_DASHED_LINE
 * <tr>
 * <td>
 * \c #color = #COLOR_WHITE
 * <tr>
 * </table>
 * </td>
 * </tr>
 * <tr>
 * <td>
 * \c Classification for lane boundaries lb1, lb3, lb4, lb7, lb8, lb10,
 * lb11, lb12 and lb14:
 * </td>
 * </tr>
 * <tr>
 * <td>
 * <table border = 0>
 * <tr>
 * <td>
 * \c #type = #TYPE_SOLID_LINE
 * <tr>
 * <td>
 * \c #color = #COLOR_WHITE
 * <tr>
 * </table>
 * </td>
 * </tr>
 * <tr>
 * <td>
 * \c Classification for lane boundaries lb5, lb6 and lb13:
 * </td>
 * </tr>
 * <tr>
 * <td>
 * <table border = 0>
 * <tr>
 * <td>
 * \c #type = #TYPE_CURB
 * </table>
 * </td>
 * </tr>
 * </table>
 * </td>
 * <td>
 * <table border=0>
 * <tr>
 * <td>
 * \image html OSI_LaneIntersection.svg "" width=500px
 * </td>
 * <tr>
 * <td>
 * \image html OSI_LaneBoundaryClassification.jpg "" width=600px
 * </td>
 * </table>
 * </td>
 * </tr>
 * </table>
 *
 * \note In the example, the symbols l1, l2, ... and lb1, lb2, ...
 * stand for the lane ids and lane boundary ids respectively, i.e. for
 * integers (uint64). The symbols cl1, cl2, ... represent the
 * osi3::Lane::Classification::centerline elements of the lanes with
 * the respective ids.
 */
interface LaneBoundary_Classification {
    /** The type of the lane boundary. */
    type?: LaneBoundary_Classification_Type | undefined;
    /**
     * The semantic color of the lane boundary in case of lane markings.
     *
     * \note The color types represent the semantic classification of
     * lane markings only. They do not represent an actual visual appearance.
     */
    color?: LaneBoundary_Classification_Color | undefined;
    /**
     * The ids of \c StationaryObject which limit the corresponding lane.
     * This field must be set if the \c #type is set to
     * \c #TYPE_STRUCTURE
     *
     * \rules
     * refers_to: StationaryObject
     * \endrules
     */
    limiting_structure_id?: Identifier[] | undefined;
}
/**
 * The lane boundary type.
 * There is no special representation for double lines, e.g. solid /
 * solid or dashed / solid. In such cases, each lane will define its own
 * side of the lane boundary.
 */
declare enum LaneBoundary_Classification_Type {
    /**
     * UNKNOWN - The type of lane boundary is unknown. Value must not be used in
     * ground truth.
     */
    UNKNOWN = 0,
    /**
     * OTHER - Unspecified but known type of lane boundary.
     * Consider proposing an additional type if using TYPE_OTHER.
     */
    OTHER = 1,
    /** NO_LINE - An invisible lane boundary. */
    NO_LINE = 2,
    /** SOLID_LINE - A solid line at the lane boundary. */
    SOLID_LINE = 3,
    /** DASHED_LINE - A dashed line at the lane boundary. */
    DASHED_LINE = 4,
    /** BOTTS_DOTS - A lane boundary consisting of Botts' dots (multiple Botts dots). */
    BOTTS_DOTS = 5,
    /**
     * ROAD_EDGE - A lane boundary formed by the road's edge.
     * The road edge is the end of the (paved) road surface.
     */
    ROAD_EDGE = 6,
    /**
     * SNOW_EDGE - A lane boundary formed by a snow edge that may be on the road
     * surface.
     */
    SNOW_EDGE = 7,
    /** GRASS_EDGE - A lane boundary covered by grass. */
    GRASS_EDGE = 8,
    /** GRAVEL_EDGE - A lane boundary covered by gravel. */
    GRAVEL_EDGE = 9,
    /** SOIL_EDGE - A lane boundary covered by soil. */
    SOIL_EDGE = 10,
    /** GUARD_RAIL - A guard rail. */
    GUARD_RAIL = 11,
    /** CURB - A curb. */
    CURB = 12,
    /** STRUCTURE - A structure (e.g. building or tunnel wall). */
    STRUCTURE = 13,
    /** BARRIER - A barrier to guide vehicles and to prevent them from entering other lanes (e.g. a concrete barrier on a highway). */
    BARRIER = 14,
    /** SOUND_BARRIER - A sound barrier. */
    SOUND_BARRIER = 15
}
/**
 * The semantic color of the lane boundary in case of a lane markings.
 * Lane markings that alternate in color must be represented by
 * individual \c LaneBoundary segments.
 *
 * \note The color types represent the semantic color classification of
 * lane markings only. They do not represent an actual visual appearance.
 */
declare enum LaneBoundary_Classification_Color {
    /**
     * UNKNOWN - Color of marking is unknown. Value must not be used in ground
     * truth.
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) color. */
    OTHER = 1,
    /**
     * NONE - Marking without color. Used to represent logical boundaries
     * without actual physical markings at the respective position.
     * Value may be used in ground truth only.
     */
    NONE = 2,
    /** WHITE - Marking with white color. */
    WHITE = 3,
    /** YELLOW - Marking with yellow / orange-yellow color. */
    YELLOW = 4,
    /** RED - Marking with red color */
    RED = 5,
    /** BLUE - Marking with blue color. */
    BLUE = 6,
    /** GREEN - Marking with green color; */
    GREEN = 7,
    /** VIOLET - Marking with violet color. */
    VIOLET = 8,
    /** ORANGE - Marking with orange color. */
    ORANGE = 9
}

/** \brief A lane segment as detected by the sensor. */
interface DetectedLane {
    /** Common information of one detected item. */
    header?: DetectedItemHeader | undefined;
    /** A list of candidates for this lane as estimated by the sensor. */
    candidate?: DetectedLane_CandidateLane[] | undefined;
}
/**
 * \brief A candidate for a detected lane as estimated by the
 * sensor.
 */
interface DetectedLane_CandidateLane {
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
    probability?: number | undefined;
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
interface DetectedLaneBoundary {
    /** Common information of one detected item. */
    header?: DetectedItemHeader | undefined;
    /**
     * A list of candidates for this lane boundary as estimated by the
     * sensor.
     */
    candidate?: DetectedLaneBoundary_CandidateLaneBoundary[] | undefined;
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
    boundary_line?: LaneBoundary_BoundaryPoint[] | undefined;
    /**
     * The root mean squared error of the \c LaneBoundary::BoundaryPoint.
     * Each \c #candidate has the same \c #boundary_line points and exact
     * one \c #boundary_line_rmse rmse confidence value is
     * specified which is suitable for all candidates.
     */
    boundary_line_rmse?: LaneBoundary_BoundaryPoint[] | undefined;
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
    boundary_line_confidences?: number[] | undefined;
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
interface DetectedLaneBoundary_CandidateLaneBoundary {
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
    probability?: number | undefined;
    /**
     * The classification of one lane boundary that defines this candidate.
     *
     * \note IDs, which are referenced in this message, usually
     * reference to \c DetectedXXX::tracking_id IDs.
     */
    classification?: LaneBoundary_Classification | undefined;
}

/** \brief An occupant of a host vehicle, especially the driver of the vehicle. */
interface Occupant {
    /**
     * The ID of the driver.
     *
     * \rules
     * is_globally_unique
     * \endrules
     */
    id?: Identifier | undefined;
    /** Specific information about the classification of the occupant. */
    classification?: Occupant_Classification | undefined;
    /**
     * External reference to the occupant source.
     *
     * \note For OpenDRIVE and OpenSCENARIO there is no direct counterpart.
     *
     * \note For non-ASAM Standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note The value has to be repeated because one object may be derived
     *       from more than one origin source, for example, from a scenario file
     *       and from sensors.
     */
    source_reference?: ExternalReference[] | undefined;
}
/** \brief Information regarding the classification of the occupant. */
interface Occupant_Classification {
    /**
     * Flag determining whether the person is the driver of the vehicle or a
     * passenger.
     */
    is_driver?: boolean | undefined;
    /** Seat position of the vehicle occupant. */
    seat?: Occupant_Classification_Seat | undefined;
    /**
     * Describes the state of the passenger's hands related to the steering
     * wheel (mostly driver).
     */
    steering_control?: Occupant_Classification_SteeringControl | undefined;
}
/** Definition of seat positions. */
declare enum Occupant_Classification_Seat {
    /** UNKNOWN - Seat position is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) seat. */
    OTHER = 1,
    /**
     * FRONT_LEFT - Seat position is in the front row, left seat.
     * This is usually the driver's seat in right-hand traffic.
     */
    FRONT_LEFT = 2,
    /**
     * FRONT_RIGHT - Seat position is in the front row, right seat.
     * This is usually the driver's seat in left-hand traffic.
     */
    FRONT_RIGHT = 3,
    /** FRONT_MIDDLE - Seat position is in the front row, middle seat. */
    FRONT_MIDDLE = 4,
    /** BACK_LEFT - Seat position is in the back row, left seat. */
    BACK_LEFT = 5,
    /** BACK_RIGHT - Seat position is in the back row, right seat. */
    BACK_RIGHT = 6,
    /** BACK_MIDDLE - Seat position is in the back row, middle seat. */
    BACK_MIDDLE = 7,
    /** THIRD_ROW_LEFT - Seat position is in the third row, left seat. */
    THIRD_ROW_LEFT = 8,
    /** THIRD_ROW_RIGHT - Seat position is in the third row, right seat. */
    THIRD_ROW_RIGHT = 9,
    /** THIRD_ROW_MIDDLE - Seat position is in the third row, middle seat. */
    THIRD_ROW_MIDDLE = 10
}
/** Definition of hands related to the steering wheel (mostly driver). */
declare enum Occupant_Classification_SteeringControl {
    /** UNKNOWN - Hands state is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /**
     * OTHER - Other (unspecified but known) hand positioning related to the
     * steering wheel.
     */
    OTHER = 1,
    /** NO_HAND - Hands are not on the steering wheel. */
    NO_HAND = 2,
    /**
     * ONE_HAND - One hand is on the steering wheel. Whether it is the left or
     * right hand is unspecified or unknown.
     *
     * \note If there is no differentiation between one or both hands on
     * the steering wheel, this value should be used.
     */
    ONE_HAND = 3,
    /** BOTH_HANDS - Both hands are on the steering wheel. */
    BOTH_HANDS = 4,
    /** LEFT_HAND - Only left hand is on the steering wheel. */
    LEFT_HAND = 5,
    /** RIGHT_HAND - Only right hand is on the steering wheel. */
    RIGHT_HAND = 6
}

/** \brief A vehicle occupant as detected and perceived by an interior sensor. */
interface DetectedOccupant {
    /** Common information of one detected item. */
    header?: DetectedItemHeader | undefined;
    /**
     * A list of candidates for this occupant as estimated by the
     * sensor.
     */
    candidate?: DetectedOccupant_CandidateOccupant[] | undefined;
}
/**
 * \brief A candidate for a detected occupant as estimated by
 * the sensor.
 */
interface DetectedOccupant_CandidateOccupant {
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
    probability?: number | undefined;
    /**
     * The detected vehicle occupant classification.
     *
     * \note IDs, which are referenced in this message, usually
     * reference to \c DetectedXXX::tracking_id IDs.
     */
    classification?: Occupant_Classification | undefined;
}

/**
 * \brief Additional value associated with a traffic sign or road marking,
 * its unit and its text. The interpretation of this text is left to a
 * user-defined procedure
 */
interface TrafficSignValue {
    /**
     * Additional value associated with a traffic sign or road marking,
     * e.g. value of a speed limit.
     */
    value?: number | undefined;
    /** Unit for additional value. */
    value_unit?: TrafficSignValue_Unit | undefined;
    /**
     * Text associated with a sign, e.g. the name of a location whose distance
     * to the sign is indicated therein. The interpretation of this text is
     * left to a user-defined procedure.
     */
    text?: string | undefined;
}
/** Unit for values on traffic sign. */
declare enum TrafficSignValue_Unit {
    /**
     * UNKNOWN - Unit of the sign's value is unknown (must not be used in ground
     * truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) unit of the sign's value. */
    OTHER = 1,
    /** NO_UNIT - Value without unit. */
    NO_UNIT = 2,
    /**
     * KILOMETER_PER_HOUR - Velocity.
     * Kilometers per hour.
     *
     * Unit: km/h
     */
    KILOMETER_PER_HOUR = 3,
    /**
     * MILE_PER_HOUR - Velocity.
     * Miles per hour.
     *
     * Unit: mph
     */
    MILE_PER_HOUR = 4,
    /**
     * METER - Length.
     * Meter.
     *
     * Unit: m
     */
    METER = 5,
    /**
     * KILOMETER - Length.
     * Kilometer.
     *
     * Unit: km
     */
    KILOMETER = 6,
    /**
     * FEET - Length.
     * Feet.
     *
     * Unit: ft
     */
    FEET = 7,
    /**
     * MILE - Length.
     * Mile.
     *
     * Unit: mile
     */
    MILE = 8,
    /**
     * METRIC_TON - Weight.
     * Ton.
     *
     * Unit: t
     */
    METRIC_TON = 9,
    /**
     * LONG_TON - Weight.
     * Long ton UK 1,016.047 kg.
     *
     * Unit: tn. l.
     */
    LONG_TON = 10,
    /**
     * SHORT_TON - Weight.
     * Short ton USA 907.1847 kg.
     *
     * Unit: tn. sh.
     */
    SHORT_TON = 11,
    /**
     * HOUR - Time of day.
     * Hours since midnight. Starting with 0.
     *
     * Unit: h
     */
    HOUR = 15,
    /**
     * MINUTES - Time of day.
     * Minutes since last hour. Starting with 0.
     *
     * Unit: min
     */
    MINUTES = 12,
    /**
     * DAY_OF_MONTH - Day of the month.
     * Starting with 1.
     */
    DAY_OF_MONTH = 16,
    /**
     * DAY - Day of the week.
     * Days since Monday. Monday = 0; Tuesday = 1; ...
     *
     * \note For consistency this field will be renamed to UNIT_DAY_OF_WEEK in v4.0.0 .
     */
    DAY = 13,
    /**
     * PERCENTAGE - Percentage.
     * Value.
     *
     * Unit: %
     */
    PERCENTAGE = 14,
    /**
     * DURATION_DAY - Duration in days.
     *
     * Unit: day
     */
    DURATION_DAY = 17,
    /**
     * DURATION_HOUR - Duration in hours.
     *
     * Unit: h
     */
    DURATION_HOUR = 18,
    /**
     * DURATION_MINUTE - Duration in minutes.
     *
     * Unit: min
     */
    DURATION_MINUTE = 19
}
/**
 * \brief A traffic sign.
 *
 * All coordinates and orientations are relative to the global ground truth
 * coordinate system.
 */
interface TrafficSign {
    /**
     * The ID of the traffic sign.
     *
     * \rules
     * is_globally_unique
     * is_set
     * \endrules
     */
    id?: Identifier | undefined;
    /** Main sign, e.g. speed limit 30 km/h */
    main_sign?: TrafficSign_MainSign | undefined;
    /**
     * Additional supplementary signs, e.g. time limits, modifying the traffic
     * sign.
     */
    supplementary_sign?: TrafficSign_SupplementarySign[] | undefined;
    /**
     * Optional external reference to the traffic sign source.
     *
     * The external reference point to the source of the traffic sign, if it is
     * derived from one or more objects or external references.
     *
     * For example, to reference a signal defined in an OpenDRIVE map
     * the items should be set as follows:
     * * reference = URI to map, can remain empty if identical with definition
     *               in \c GroundTruth::map_reference
     * * type = "net.asam.opendrive"
     * * identifier[0] = id of t_road_signals_signal
     *
     * \note For non-ASAM Standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note If an individual identification of MainSign and SupplementarySign
     *       is necessary, this should be done via multiple individual
     *       entries of this source_reference.
     *
     * \note The value has to be repeated, because one lane segment may be
     *       derived from more than one origin segment. Multiple sources
     *       may be added as reference as well, for example, a map and sensors.
     */
    source_reference?: ExternalReference[] | undefined;
}
/** Definition of the variability of a traffic sign. */
declare enum TrafficSign_Variability {
    /**
     * UNKNOWN - Variability type of sign is unknown (must not be used in ground
     * truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) variability. */
    OTHER = 1,
    /**
     * FIXED - Sign that can change neither semantically nor positionally, e.g. a
     * fixed, immutable, non-temporary traffic sign.
     */
    FIXED = 2,
    /**
     * VARIABLE - Sign that can change semantically and/or positionally, i.e. it is
     * left unspecified in which way the sign may change.
     *
     * \note This value represents a legacy definition. If possible, please
     * use the more specific values below to indicate the exact nature of
     * variability.
     */
    VARIABLE = 3,
    /**
     * MOVABLE - Sign that can change positionally but not semantically, e.g. a
     * temporary, immutable traffic sign at construction site.
     */
    MOVABLE = 4,
    /**
     * MUTABLE - Sign that can change semantically but not positionally, e.g. a
     * digital traffic sign on traffic sign gantry, or an analog prism
     * sign.
     */
    MUTABLE = 5,
    /**
     * MOVABLE_AND_MUTABLE - Sign that can change both semantically and positionally, e.g. a
     * temporary, digital traffic sign at a construction site, or a digital
     * traffic sign attached to a road works vehicle.
     */
    MOVABLE_AND_MUTABLE = 6
}
/**
 * \brief Main sign of the traffic sign.
 *
 * \image html OSI_MainSign.svg
 */
interface TrafficSign_MainSign {
    /**
     * The base parameters of the traffic sign.
     *
     * The orientation of the bounding box \c #base
     * ( \c BaseStationary::orientation ) is defined as follows:
     * The z-axis of the given \c BaseStationary::orientation is the vector
     * from the bottom to the top of the traffic sign's 2D image plate.
     * (Normally it is equal to the ground truth z-axis.)
     * The x-axis of the given \c BaseStationary::orientation is view
     * normal of the traffic sign's image.
     * This x-axis points from the traffic sign's image in the direction
     * from where a 'viewer' could see the traffic sign image.
     */
    base?: BaseStationary | undefined;
    /** The classification of the traffic sign. */
    classification?: TrafficSign_MainSign_Classification | undefined;
    /**
     * Opaque reference of an associated 3D model of the traffic sign.
     *
     * \note It is implementation-specific how model_references are resolved to
     * 3d models.
     */
    model_reference?: string | undefined;
}
/**
 * \brief \c Classification data for a traffic sign.
 *
 * \image html OSI_DirectionScope.svg
 *
 * When constructing a \c MainSign, consider the use of the following
 * members:
 * - In order to include numerical values indicated in the sign,
 * use \c TrafficSignValue::value. Accompany this value with an
 * indication of its unit of measure given by \c
 * TrafficSignValue::value_unit.
 * - In order to include strings of text indicated in the sign,
 * use \c TrafficSignValue::text. The interpretation of this text is
 * left to a user-defined procedure.
 * - Some traffic signs exist in two variants that have a similar
 * semantic meaning and the property that the one results from flipping
 * the other one around the vertical axis. The optional member \c
 * #vertically_mirrored has been provided to enable an explicit choice
 * between both variants.
 * - For signs in which an arrow symbol is included to constraint their
 * scope, the \c #direction_scope member has been provided to indicate
 * the direction of the arrow from the perspective of a viewer standing
 * right in front of the sign and looking straight towards it.
 *
 * \note The definition of the sign types is thought to be independent
 * of the country, even if the images used in this documentation are
 * based on the German Road Traffic Regulations (StVO).
 */
interface TrafficSign_MainSign_Classification {
    /**
     * This value indicates if a sign is static or dynamic regarding its
     * content (e.g., electronic sign bridge) and/or regarding its
     * position on the road.
     */
    variability?: TrafficSign_Variability | undefined;
    /**
     * The type of the traffic sign.
     *
     * \attention Deprecated: A revision is planned for version 4.0.0 to
     * replace the type enum with a more semantically defined enumeration,
     * with the exact sign specification being relegated to the newly
     * introduced 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     */
    type?: TrafficSign_MainSign_Classification_Type | undefined;
    /**
     * Additional value associated with the traffic sign, e.g. value of
     * the speed limit.
     *
     * \note Field need not be set if traffic sign type does not require
     * it.
     */
    value?: TrafficSignValue | undefined;
    /**
     * Some traffic signs have an additional arrow symbol as an
     * additional constraint for their scope (e.g. no parking to the
     * right). The arrow direction is given relative to the sign's 2D
     * image plane, i.e. as a viewer standing right in front of the sign
     * and looking straight towards it would interpret the arrow.
     *
     * The definition for left and right is according to the following
     * temporarily constructed right-handed local coordinate system:
     * Set z-axis to match the z-axis of the ground truth coordinate
     * system. Set x-axis to the view normal of the traffic sign's image
     * (\c #base \c BaseStationary::orientation x-axis).
     * Right: direction of the local coordinate system's positive
     * y-axis. Left: opposite direction of the local coordinate system's
     * y-axis i.e. negative y-axis',
     *
     * \note If a traffic sign image is on the ground (there is no
     * definition for right or left). Normally, this is a road marking
     * and not a traffic sign. Actual traffic signs lying on the ground
     * might have been intentionally unmounted and, hence, not be in
     * effect.
     *
     * \attention Deprecated: A revision is planned for version 4.0.0 to
     * replace the type enum with a more semantically defined enumeration,
     * with the exact sign specification being relegated to the newly
     * introduced 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     */
    direction_scope?: TrafficSign_MainSign_Classification_DirectionScope | undefined;
    /**
     * The IDs of the lanes that the sign is assigned to.
     * May be multiple if the sign is valid for multiple lanes.
     *
     * \note OSI uses singular instead of plural for repeated field
     * names.
     *
     * \rules
     * refers_to: Lane
     * \endrules
     */
    assigned_lane_id?: Identifier[] | undefined;
    /**
     * Some traffic signs exist in two variants that have
     * a similar semantic meaning but differ in that the symbol
     * of the one corresponds to the specular reflection of the
     * other with respect to the vertical axis.
     * For some scenarios it might be relevant to choose the
     * reflected version of a reference sign. This can be done
     * by setting the \c #vertically_mirrored boolean to \c true.
     * As for every boolean in the protocol buffers language, the
     * default value of \c #vertically_mirrored is \c false.
     *
     * \attention Deprecated: A revision is planned for version 4.0.0 to
     * replace the type enum with a more semantically defined enumeration,
     * with the exact sign specification being relegated to the newly
     * introduced 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     */
    vertically_mirrored?: boolean | undefined;
    /**
     * Boolean flag to indicate that a traffic sign is taken out of service.
     * This can be achieved by visibly crossing the sign or covering it completely.
     */
    is_out_of_service?: boolean | undefined;
    /**
     * Country specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * Country is specified using the ISO 3166-1, alpha-2 code
     * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2, or the
     * special OpenDRIVE country for generic signs.<br>
     */
    country?: string | undefined;
    /**
     * Revision specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * The year the traffic rules came into force. <br>
     * e.g. "2017"
     */
    country_revision?: string | undefined;
    /**
     * Code specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * Code identifier according to country and country revision,
     * corresponds to the type field of OpenDRIVE. <br>
     * code is only unique in combination with #country and #country_revision.  <br>
     * e.g. http://www.vzkat.de/2017/VzKat.htm
     */
    code?: string | undefined;
    /**
     * Sub-code specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * Sub-code identifier according to country, country revision and code,
     * corresponds to the subtype field of OpenDRIVE. <br>
     * sub_code is only unique in combination with #country, #country_revision,
     * and #code.  <br>
     * e.g. http://www.vzkat.de/2017/VzKat.htm
     */
    sub_code?: string | undefined;
    /**
     * Assignment of this object to logical lanes.
     *
     * \note OSI uses singular instead of plural for repeated field
     * names.
     */
    logical_lane_assignment?: LogicalLaneAssignment[] | undefined;
}
/**
 * Definition of traffic sign types.
 * Numbers are given according to German StVO.
 *
 * For an overview of the German StVO see:
 * \arg
 * https://www.bast.de/DE/Verkehrstechnik/Fachthemen/v1-verkehrszeichen/vz-download.html
 * (Catalog of the Federal Road Research Institute - BASt)
 * \arg
 * https://www.dvr.de/publikationen/downloads/verkehrszeichen.html
 * (Images) \arg
 * https://www.gesetze-im-internet.de/stvo_2013/anlage_1.html
 * (Allgemeine und Besondere Gefahrenzeichen) \arg
 * https://www.gesetze-im-internet.de/stvo_2013/anlage_2.html
 * (Vorschriftzeichen) \arg
 * https://www.gesetze-im-internet.de/stvo_2013/anlage_3.html
 * (Richtzeichen) \arg
 * https://www.gesetze-im-internet.de/stvo_2013/anlage_4.html
 * (Verkehrseinrichtungen) \arg https://traffic-rules.com/
 *
 * \attention Deprecated: A revision is planned for version 4.0.0 to
 * replace the type enum with a more semantically defined enumeration,
 * with the exact sign specification being relegated to the newly
 * introduced 4-tupel traffic sign catalog specification as used in
 * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
 */
declare enum TrafficSign_MainSign_Classification_Type {
    /**
     * UNKNOWN - Type of traffic sign is unknown (must not be used in ground
     * truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) type of traffic sign. */
    OTHER = 1,
    /**
     * DANGER_SPOT - Warning: Danger sign.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 101.png
     * </td>
     * <td>
     * StVO 101
     * </td>
     * </table>
     */
    DANGER_SPOT = 2,
    /**
     * ZEBRA_CROSSING - Warning: Zebra crossing.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 101-11.png
     * </td>
     * <td>
     * StVO 101-11
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 101-11.png
     * </td>
     * <td>
     * StVO 101-21
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 350-10.png
     * </td>
     * <td>
     * StVO 350-10
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 350-20.png
     * </td>
     * <td>
     * StVO 350-20
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN.
     *
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 293.png
     * </td>
     * <td>
     * StVO 293
     * </td>
     * </table>
     */
    ZEBRA_CROSSING = 87,
    /**
     * FLIGHT - Warning: Low-flying aircraft or sudden aircraft noise.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 101-10.png
     * </td>
     * <td>
     * StVO 101-10
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 101-10.png
     * </td>
     * <td>
     * StVO 101-20
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    FLIGHT = 110,
    /**
     * CATTLE - Warning: Cattles crossing.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 101-12.png
     * </td>
     * </td>
     * <td>
     * StVO 101-12
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 101-12.png
     * </td>
     * <td>
     * StVO 101-22
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    CATTLE = 200,
    /**
     * HORSE_RIDERS - Warning: Horse riders.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 101-13.png
     * </td>
     * <td>
     * StVO 101-13
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 101-13.png
     * </td>
     * <td>
     * StVO 101-23
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    HORSE_RIDERS = 197,
    /**
     * AMPHIBIANS - Warning: Amphibian migration.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 101-14.png
     * </td>
     * <td>
     * StVO 101-14
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 101-14.png
     * </td>
     * <td>
     * StVO 101-24
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    AMPHIBIANS = 188,
    /**
     * FALLING_ROCKS - Warning: Falling rocks.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 101-15.png
     * </td>
     * <td>
     * StVO 101-15
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 101-15.png
     * </td>
     * <td>
     * StVO 101-25
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    FALLING_ROCKS = 96,
    /**
     * SNOW_OR_ICE - Warning: Risk of snow or ice.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 101-51.png
     * </td>
     * <td>
     * StVO 101-51
     * </td>
     * </tr>
     * </table>
     */
    SNOW_OR_ICE = 94,
    /**
     * LOOSE_GRAVEL - Warning: Crushed stones.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 101-52.png
     * </td>
     * <td>
     * StVO 101-52
     * </td>
     * </tr>
     * </table>
     */
    LOOSE_GRAVEL = 97,
    /**
     * WATERSIDE - Warning: Waterside.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 101-53.png
     * </td>
     * <td>
     * StVO 101-53
     * </td>
     * </tr>
     * </table>
     */
    WATERSIDE = 102,
    /**
     * CLEARANCE - Warning: Not enough clearance.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 101-54.png
     * </td>
     * <td>
     * StVO 101-54
     * </td>
     * </tr>
     * </table>
     */
    CLEARANCE = 210,
    /**
     * MOVABLE_BRIDGE - Warning: Movable bridge.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 101-55.png
     * </td>
     * <td>
     * StVO 101-55
     * </td>
     * </tr>
     * </table>
     */
    MOVABLE_BRIDGE = 101,
    /**
     * RIGHT_BEFORE_LEFT_NEXT_INTERSECTION - Warning: "Right before left" rule at the next intersection.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 102.png
     * </td>
     * <td>
     * StVO 102
     * </td>
     * </tr>
     * </table>
     */
    RIGHT_BEFORE_LEFT_NEXT_INTERSECTION = 3,
    /**
     * TURN_LEFT - Warning: Sign for a left turn.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 103-10.png
     * </td>
     * <td>
     * StVO 103-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_TURN_RIGHT
     */
    TURN_LEFT = 4,
    /**
     * TURN_RIGHT - Warning: Sign for a right turn.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 103-20.png
     * </td>
     * <td>
     * StVO 103-20
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_TURN_LEFT
     */
    TURN_RIGHT = 5,
    /**
     * DOUBLE_TURN_LEFT - Warning: Sign for a double turn (first left turn).
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 105-10.png
     * </td>
     * <td>
     * StVO 105-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_DOUBLE_TURN_RIGHT
     */
    DOUBLE_TURN_LEFT = 6,
    /**
     * DOUBLE_TURN_RIGHT - Warning: Sign for a double turn (first right turn).
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 105-20.png
     * </td>
     * <td>
     * StVO 105-20
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_DOUBLE_TURN_LEFT
     */
    DOUBLE_TURN_RIGHT = 7,
    /**
     * HILL_DOWNWARDS - Warning: Steep hill downwards.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 108-4.png
     * </td>
     * <td>
     * StVO 108
     * </td>
     * <td>
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to indicate slope.
     * </td>
     * </tr>
     * </table>
     */
    HILL_DOWNWARDS = 8,
    /**
     * HILL_UPWARDS - Warning: Steep hill upwards.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 110-4.png
     * </td>
     * <td>
     * StVO 110
     * </td>
     * <td>
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to indicate slope
     * </td>
     * </tr>
     * </table>
     */
    HILL_UPWARDS = 9,
    /**
     * UNEVEN_ROAD - Warning: Uneven road.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 112.png
     * </td>
     * <td>
     * StVO 112
     * </td>
     * </tr>
     * </table>
     */
    UNEVEN_ROAD = 93,
    /**
     * ROAD_SLIPPERY_WET_OR_DIRTY - Warning: Road slippery when wet or dirty.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 114.png
     * </td>
     * <td>
     * StVO 114
     * </td>
     * </tr>
     * </table>
     */
    ROAD_SLIPPERY_WET_OR_DIRTY = 95,
    /**
     * SIDE_WINDS - Warning: Side winds.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 117-10.png
     * </td>
     * <td>
     * StVO 117-10
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 117-10.png
     * </td>
     * <td>
     * StVO 117-20
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    SIDE_WINDS = 98,
    /**
     * ROAD_NARROWING - Warning: Road narrowing.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 120.png
     * </td>
     * <td>
     * StVO 120
     * </td>
     * </tr>
     * </table>
     */
    ROAD_NARROWING = 10,
    /**
     * ROAD_NARROWING_RIGHT - Warning: Road narrowing on the right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 121-10.png
     * </td>
     * <td>
     * StVO 121-10
     * </td>
     * </tr>
     * </table>
     */
    ROAD_NARROWING_RIGHT = 12,
    /**
     * ROAD_NARROWING_LEFT - Warning: Road narrowing on the left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 121-20.png
     * </td>
     * <td>
     * StVO 121-20
     * </td>
     * </tr>
     * </table>
     */
    ROAD_NARROWING_LEFT = 11,
    /**
     * ROAD_WORKS - Warning: Road works sign.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 123.png
     * </td>
     * <td>
     * StVO 123
     * </td>
     * </tr>
     * </table>
     */
    ROAD_WORKS = 13,
    /**
     * TRAFFIC_QUEUES - Warning: Traffic queues likely.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 124.png
     * </td>
     * <td>
     * StVO 124
     * </td>
     * </tr>
     * </table>
     */
    TRAFFIC_QUEUES = 100,
    /**
     * TWO_WAY_TRAFFIC - Warning: Two-way-traffic (after one-way lane).
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 125.png
     * </td>
     * <td>
     * StVO 125
     * </td>
     * </tr>
     * </table>
     */
    TWO_WAY_TRAFFIC = 14,
    /**
     * ATTENTION_TRAFFIC_LIGHT - Warning: Traffic light ahead sign.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 131.png
     * </td>
     * <td>
     * StVO 131
     * </td>
     * </tr>
     * </table>
     */
    ATTENTION_TRAFFIC_LIGHT = 15,
    /**
     * PEDESTRIANS - Warning: Pedestrians.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 133-10.png
     * </td>
     * <td>
     * StVO 133-10
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 133-10.png
     * </td>
     * <td>
     * StVO 133-20
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    PEDESTRIANS = 103,
    /**
     * CHILDREN_CROSSING - Warning: Children crossing.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 136-10.png
     * </td>
     * <td>
     * StVO 136-10
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 136-10.png
     * </td>
     * <td>
     * StVO 136-20
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    CHILDREN_CROSSING = 106,
    /**
     * CYCLE_ROUTE - Warning: Pedal cycle route crossing or joining road sign.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 138-10.png
     * </td>
     * <td>
     * StVO 138-10
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 138-10.png
     * </td>
     * <td>
     * StVO 138-20
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    CYCLE_ROUTE = 107,
    /**
     * DEER_CROSSING - Warning: Deer crossing.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 142-10.png
     * </td>
     * <td>
     * StVO 142-10
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 142-10.png
     * </td>
     * <td>
     * StVO 142-20
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    DEER_CROSSING = 109,
    /**
     * UNGATED_LEVEL_CROSSING - Warning: Level crossing without barrier or gate.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 151.png
     * </td>
     * <td>
     * StVO 151
     * </td>
     * </tr>
     * </table>
     */
    UNGATED_LEVEL_CROSSING = 144,
    /**
     * LEVEL_CROSSING_MARKER - Level crossing marker.
     * (StVO 156 - Countdown marker indicating that level crossing
     * are 2 main signs \c #TYPE_UNGATED_LEVEL_CROSSING and \c
     * #TYPE_LEVEL_CROSSING_MARKER.)
     * <table border="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 157-20.png
     * </td>
     * <td style="transform:scaleX(-1)">
     * \image html 159-20.png
     * </td>
     * <td style="transform:scaleX(-1)">
     * \image html 161-20.png
     * </td>
     * <td>
     * \image html 156-10.png
     * </td>
     * <td>
     * \image html 156-11.png
     * </td>
     * </tr>
     * <tr style="font-weight:bold">
     * <td>
     * StVO 157-10
     * </td>
     * <td>
     * StVO 159-10
     * </td>
     * <td>
     * StVO 161-10
     * </td>
     * <td>
     * (StVO 156-10)
     * </td>
     * <td>
     * (StVO 156-11)
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 157-20.png
     * </td>
     * <td>
     * \image html 159-20.png
     * </td>
     * <td>
     * \image html 161-20.png
     * </td>
     * <td style="transform:scaleX(-1)">
     * \image html 156-10.png
     * </td>
     * <td>
     * \image html 156-21.png
     * </td>
     * </tr>
     * <tr style="font-weight:bold">
     * <td>
     * StVO 157-20
     * </td>
     * <td>
     * StVO 159-20
     * </td>
     * <td>
     * StVO 162-20
     * </td>
     * <td>
     * (StVO 156-20)
     * </td>
     * <td>
     * (StVO 156-21)
     * </td>
     * </tr>
     * </table>
     *
     * Variants (here X is any of 157, 159 or 162):
     * <table border="0">
     * <tr>
     * <td>
     * StVO X-10
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * StVO X-11
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * Additionally, use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to indicate the remaining
     * distance or the number of displayed red stripes. In
     * the second case, set \c TrafficSignValue::value_unit
     * to \c TrafficSignValue::UNIT_NO_UNIT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * StVO X-20
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * StVO X-21
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * Additionally, use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to indicate the remaining
     * distance or the number of displayed red stripes. In
     * the second case, set \c TrafficSignValue::value_unit
     * to \c TrafficSignValue::UNIT_NO_UNIT.
     * </td>
     * </tr>
     * </table>
     */
    LEVEL_CROSSING_MARKER = 112,
    /**
     * RAILWAY_TRAFFIC_PRIORITY - St.Andrew's cross, railway traffic has priority.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 201-50.png
     * <td>
     * StVO 201-50
     * <td>
     * </tr>
     * <tr>
     * <td>
     * \image html 201-52.png
     * </td>
     * <td>
     * StVO 201-52
     * </td>
     * <td>
     * with lightning bolt indicating voltage-carrying overhead
     * line.
     * </td>
     * </tr>
     * </table>
     */
    RAILWAY_TRAFFIC_PRIORITY = 135,
    /**
     * GIVE_WAY - Give way.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 205.png
     * </td>
     * <td>
     * StVO 205
     * </td>
     * </tr>
     * </table>
     *
     * As symbolic road marking
     * \c RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN.
     *
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 341.png
     * -->
     * </td>
     * <td>
     * StVO 341
     * </td>
     * </tr>
     * </table>
     */
    GIVE_WAY = 16,
    /**
     * STOP - Stop sign.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 206.png
     * </td>
     * <td>
     * StVO 206
     * </td>
     * </tr>
     * </table>
     *
     * As symbolic road marking
     * \c RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN.
     *
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 294.png
     * </td>
     * <td>
     * StVO 294
     * </td>
     * </table>
     */
    STOP = 17,
    /**
     * PRIORITY_TO_OPPOSITE_DIRECTION - Priority must be given to vehicles from the opposite
     * direction.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 208.png
     * </td>
     * <td>
     * StVO 208
     * </td>
     * </tr>
     * </table>
     *
     * See also: \c
     * #TYPE_PRIORITY_OVER_OPPOSITE_DIRECTION.
     */
    PRIORITY_TO_OPPOSITE_DIRECTION = 18,
    /**
     * PRIORITY_TO_OPPOSITE_DIRECTION_UPSIDE_DOWN - Priority must be given to vehicles from the opposite
     * direction.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:rotate(180deg)">
     * \image html 208.png
     * </td>
     * <td>
     * StVO 208, upside down
     * </td>
     * </tr>
     * </table>
     *
     * See also: \c #TYPE_PRIORITY_TO_OPPOSITE_DIRECTION.
     */
    PRIORITY_TO_OPPOSITE_DIRECTION_UPSIDE_DOWN = 19,
    /**
     * PRESCRIBED_LEFT_TURN - Prescribed left turn.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 209-10.png
     * </td>
     * <td>
     * StVO 209-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_PRESCRIBED_RIGHT_TURN
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN
     * (StVO 297).
     */
    PRESCRIBED_LEFT_TURN = 20,
    /**
     * PRESCRIBED_RIGHT_TURN - Prescribed right turn.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 209-10.png
     * </td>
     * <td>
     * StVO 209-20
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_PRESCRIBED_LEFT_TURN
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN
     * (StVO 297).
     */
    PRESCRIBED_RIGHT_TURN = 21,
    /**
     * PRESCRIBED_STRAIGHT - Prescribed driving straight.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 209-30.png
     * </td>
     * <td>
     * StVO 209-30
     * </td>
     * </tr>
     * </table>
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN
     * (StVO 297).
     */
    PRESCRIBED_STRAIGHT = 22,
    /**
     * PRESCRIBED_RIGHT_WAY - Prescribed right way.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 211.png
     * </td>
     * <td>
     * StVO 211
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_PRESCRIBED_LEFT_WAY
     */
    PRESCRIBED_RIGHT_WAY = 24,
    /**
     * PRESCRIBED_LEFT_WAY - Prescribed left way.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 211-10.png
     * </td>
     * <td>
     * StVO 211-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_PRESCRIBED_RIGHT_WAY
     */
    PRESCRIBED_LEFT_WAY = 23,
    /**
     * PRESCRIBED_RIGHT_TURN_AND_STRAIGHT - Prescribed right turn and driving straight.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 214.png
     * </td>
     * <td>
     * StVO 214
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_PRESCRIBED_LEFT_TURN_AND_STRAIGHT
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN
     * (StVO 297).
     */
    PRESCRIBED_RIGHT_TURN_AND_STRAIGHT = 26,
    /**
     * PRESCRIBED_LEFT_TURN_AND_STRAIGHT - Prescribed left turn and driving straight .
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 214-10.png
     * </td>
     * <td>
     * StVO 214-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_PRESCRIBED_RIGHT_TURN_AND_STRAIGHT
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN
     * (StVO 297).
     */
    PRESCRIBED_LEFT_TURN_AND_STRAIGHT = 25,
    /**
     * PRESCRIBED_LEFT_TURN_AND_RIGHT_TURN - Prescribed left and right turn.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 214-30.png
     * </td>
     * <td>
     * StVO 214-30
     * </td>
     * </tr>
     * </table>
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN
     * (StVO 297).
     */
    PRESCRIBED_LEFT_TURN_AND_RIGHT_TURN = 27,
    /**
     * PRESCRIBED_LEFT_TURN_RIGHT_TURN_AND_STRAIGHT - Prescribed left turn, right turn and driving straight
     * (required for logical signs as road marking).
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN
     * (StVO 297).
     */
    PRESCRIBED_LEFT_TURN_RIGHT_TURN_AND_STRAIGHT = 28,
    /**
     * ROUNDABOUT - Roundabout.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 215.png
     * </td>
     * <td>
     * StVO 215
     * </td>
     * </tr>
     * </table>
     *
     * \note The direction of driving (clockwise, counterclockwise)
     * is country-specific.
     */
    ROUNDABOUT = 29,
    /**
     * ONEWAY_LEFT - One-way road to the left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 220-10.png
     * </td>
     * <td>
     * StVO 220-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_ONEWAY_RIGHT
     */
    ONEWAY_LEFT = 30,
    /**
     * ONEWAY_RIGHT - One-way road to the right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 220-20.png
     * </td>
     * <td>
     * StVO 220-20
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_ONEWAY_LEFT
     */
    ONEWAY_RIGHT = 31,
    /**
     * PASS_LEFT - Drive past on the left side.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 222-10.png
     * </td>
     * <td>
     * StVO 222-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_PASS_RIGHT
     */
    PASS_LEFT = 32,
    /**
     * PASS_RIGHT - Drive past on the right side.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 222.png
     * </td>
     * <td>
     * StVO 222
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_PASS_LEFT
     */
    PASS_RIGHT = 33,
    /**
     * SIDE_LANE_OPEN_FOR_TRAFFIC - Drive along side lanes.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 223.1-50.png
     * </td>
     * <td>
     * StVO 223.1-50
     * </td>
     * <td>
     * Drive along side lanes, 2 lanes and side lane.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 223.1-51.png
     * </td>
     * <td>
     * StVO 223.1-51
     * </td>
     * <td>
     * Drive along side lanes, 3 lanes and side lane.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 223.1-52.png
     * </td>
     * <td>
     * StVO 223.1-52
     * </td>
     * <td>
     * Drive along side lanes, 4 lanes and side lane.
     * </td>
     * </tr>
     * </table>
     */
    SIDE_LANE_OPEN_FOR_TRAFFIC = 128,
    /**
     * SIDE_LANE_CLOSED_FOR_TRAFFIC - Do not drive on the side lane.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 223.2-50.png
     * </td>
     * <td>
     * StVO 223.2-50
     * </td>
     * <td>
     * Do not drive on the side lane, 2 lanes and side lane.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 223.2-51.png
     * </td>
     * <td>
     * StVO 223.2-51
     * </td>
     * <td>
     * Do not drive on the side lane, 3 lanes and side lane.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 223.2-52.png
     * </td>
     * <td>
     * StVO 223.2-52
     * </td>
     * <td>
     * Do not drive on the side lane, 4 lanes and side lane.
     * </td>
     * </tr>
     * </table>
     */
    SIDE_LANE_CLOSED_FOR_TRAFFIC = 129,
    /**
     * SIDE_LANE_CLOSING_FOR_TRAFFIC - Side lane closing.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 223.3-50.png
     * </td>
     * <td>
     * StVO 223.3-50
     * </td>
     * <td>
     * Side lane closing, 2 lanes and side lane.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 223.3-51.png
     * </td>
     * <td>
     * StVO 223.3-51
     * </td>
     * <td>
     * Side lane closing, 3 lanes and side lane.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 223.3-52.png
     * </td>
     * <td>
     * StVO 223.3-52
     * </td>
     * <td>
     * Side lane closing, 4 lanes and side lane.
     * </td>
     * </tr>
     * </table>
     */
    SIDE_LANE_CLOSING_FOR_TRAFFIC = 130,
    /**
     * BUS_STOP - Bus stop or tramway stop.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 224.png
     * </td>
     * <td>
     * StVO 224
     * </td>
     * </tr>
     * </table>
     */
    BUS_STOP = 137,
    /**
     * TAXI_STAND - Taxi rank.
     * <table border="0">
     * <tr>
     * <td colspan="2">
     * \image html 229.png "StVO 229"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_NO_DIRECTION
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 229-10.png "StVO 229-10"
     * </td>
     * <td>
     * \image html 229-21.png "StVO 229-21"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_LEFT
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 229-11.png "StVO 229-11"
     * </td>
     * <td>
     * \image html 229-20.png "StVO 229-20"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_RIGHT
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 229-30.png "StVO 229-30"
     * </td>
     * <td>
     * \image html 229-31.png "StVO 229-31"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_LEFT_RIGHT
     * </td>
     * </tr>
     * </table>
     */
    TAXI_STAND = 138,
    /**
     * BICYCLES_ONLY - Route for bicycles only.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 237.png
     * </td>
     * <td>
     * StVO 237
     * </td>
     * </tr>
     * </table>
     */
    BICYCLES_ONLY = 145,
    /**
     * HORSE_RIDERS_ONLY - Route for horse riders only.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 238.png
     * </td>
     * <td>
     * StVO 238
     * </td>
     * </tr>
     * </table>
     */
    HORSE_RIDERS_ONLY = 146,
    /**
     * PEDESTRIANS_ONLY - Route for pedestrians only.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 239.png
     * </td>
     * <td>
     * StVO 239
     * </td>
     * </tr>
     * </table>
     */
    PEDESTRIANS_ONLY = 147,
    /**
     * BICYCLES_PEDESTRIANS_SHARED_ONLY - Unsegregated route for use by bicycles and pedestrians only.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 240.png
     * </td>
     * <td>
     * StVO 240
     * </td>
     * </tr>
     * </table>
     */
    BICYCLES_PEDESTRIANS_SHARED_ONLY = 148,
    /**
     * BICYCLES_PEDESTRIANS_SEPARATED_LEFT_ONLY - Segregated route for use by bicycles and pedestrians only,
     * bicycles on the left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 241-30.png
     * </td>
     * <td>
     * StVO 241-30
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_BICYCLES_PEDESTRIANS_SEPARATED_RIGHT_ONLY
     */
    BICYCLES_PEDESTRIANS_SEPARATED_LEFT_ONLY = 149,
    /**
     * BICYCLES_PEDESTRIANS_SEPARATED_RIGHT_ONLY - Segregated route for use by bicycles and pedestrians only,
     * bicycles on the right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 241-31.png
     * </td>
     * <td>
     * StVO 241-31
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_BICYCLES_PEDESTRIANS_SEPARATED_LEFT_ONLY
     */
    BICYCLES_PEDESTRIANS_SEPARATED_RIGHT_ONLY = 150,
    /**
     * PEDESTRIAN_ZONE_BEGIN - Beginning of the pedestrian zone.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 242.1.png
     * </td>
     * <td>
     * StVO 242.1
     * </td>
     * </tr>
     * </table>
     */
    PEDESTRIAN_ZONE_BEGIN = 151,
    /**
     * PEDESTRIAN_ZONE_END - End of the pedestrian zone.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 242.2.png
     * </td>
     * <td>
     * StVO 242.2
     * </td>
     * </tr>
     * </table>
     */
    PEDESTRIAN_ZONE_END = 152,
    /**
     * BICYCLE_ROAD_BEGIN - Beginning of bicycle road.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 244.1.png
     * </td>
     * <td>
     * StVO 244.1
     * </td>
     * </tr>
     * </table>
     */
    BICYCLE_ROAD_BEGIN = 153,
    /**
     * BICYCLE_ROAD_END - End of bicycle road.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 244.2.png
     * </td>
     * <td>
     * StVO 244.2
     * </td>
     * </tr>
     * </table>
     */
    BICYCLE_ROAD_END = 154,
    /**
     * BUS_LANE - Lane for buses.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 245.png
     * </td>
     * <td>
     * StVO 245
     * </td>
     * </tr>
     * </table>
     */
    BUS_LANE = 34,
    /**
     * BUS_LANE_BEGIN - Bus only lane begin.
     * \n
     * End: \c #TYPE_BUS_LANE_END
     */
    BUS_LANE_BEGIN = 35,
    /**
     * BUS_LANE_END - Bus only lane end.
     * \n
     * Begin: \c #TYPE_BUS_LANE_BEGIN
     */
    BUS_LANE_END = 36,
    /**
     * ALL_PROHIBITED - Entry prohibited for all types of vehicles.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 250.png
     * </td>
     * <td>
     * StVO 250
     * </td>
     * </tr>
     * </table>
     */
    ALL_PROHIBITED = 37,
    /**
     * MOTORIZED_MULTITRACK_PROHIBITED - Entry prohibited for cars, trucks, and other motorized
     * multi-track vehicles.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 251.png
     * </td>
     * <td>
     * StVO 251
     * </td>
     * </tr>
     * </table>
     */
    MOTORIZED_MULTITRACK_PROHIBITED = 38,
    /**
     * TRUCKS_PROHIBITED - Entry prohibited for trucks.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 253.png
     * </td>
     * <td>
     * StVO 253
     * </td>
     * </tr>
     * </table>
     *
     * \note In the German StVO, trucks are defined as motorized
     * vehicles that are heavier than 3.5 t.
     */
    TRUCKS_PROHIBITED = 39,
    /**
     * BICYCLES_PROHIBITED - Entry prohibited for bicycles.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 254.png
     * </td>
     * <td>
     * StVO 254
     * </td>
     * </tr>
     * </table>
     */
    BICYCLES_PROHIBITED = 40,
    /**
     * MOTORCYCLES_PROHIBITED - Entry prohibited for motorcycles.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 255.png
     * </td>
     * <td>
     * StVO 255
     * </td>
     * </tr>
     * </table>
     */
    MOTORCYCLES_PROHIBITED = 41,
    /**
     * MOPEDS_PROHIBITED - Entry prohibited for mopeds.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 257-50.png
     * </td>
     * <td>
     * StVO 257-50
     * </td>
     * </tr>
     * </table>
     */
    MOPEDS_PROHIBITED = 155,
    /**
     * HORSE_RIDERS_PROHIBITED - Entry prohibited for horse riders.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 257-51.png
     * </td>
     * <td>
     * StVO 257-51
     * </td>
     * </tr>
     * </table>
     */
    HORSE_RIDERS_PROHIBITED = 156,
    /**
     * HORSE_CARRIAGES_PROHIBITED - Entry prohibited for horse carriages.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 257-52.png
     * </td>
     * <td>
     * StVO 257-52
     * </td>
     * </tr>
     * </table>
     */
    HORSE_CARRIAGES_PROHIBITED = 157,
    /**
     * CATTLE_PROHIBITED - Entry prohibited for cattles.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 257-53.png
     * </td>
     * <td>
     * StVO 257-53
     * </td>
     * </tr>
     * </table>
     */
    CATTLE_PROHIBITED = 158,
    /**
     * BUSES_PROHIBITED - Entry prohibited for buses.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 257-54.png
     * </td>
     * <td>
     * StVO 257-54
     * </td>
     * </tr>
     * </table>
     */
    BUSES_PROHIBITED = 159,
    /**
     * CARS_PROHIBITED - Entry prohibited for passenger cars.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 257-55.png
     * </td>
     * <td>
     * StVO 257-55
     * </td>
     * </tr>
     * </table>
     */
    CARS_PROHIBITED = 160,
    /**
     * CARS_TRAILERS_PROHIBITED - Entry prohibited for passenger cars with trailers.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 257-56.png
     * </td>
     * <td>
     * StVO 257-56
     * </td>
     * </tr>
     * </table>
     */
    CARS_TRAILERS_PROHIBITED = 161,
    /**
     * TRUCKS_TRAILERS_PROHIBITED - Entry prohibited for trucks with trailers.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 257-57.png
     * </td>
     * <td>
     * StVO 257-57
     * </td>
     * </tr>
     * </table>
     */
    TRUCKS_TRAILERS_PROHIBITED = 162,
    /**
     * TRACTORS_PROHIBITED - Entry prohibited for tractors.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 257-58.png
     * </td>
     * <td>
     * StVO 257-58
     * </td>
     * </tr>
     * </table>
     *
     * \note In the German StVO, tractors are defined as motorized
     * vehicles that are not allowed to, or cannot, drive faster
     * than 25 km/h.
     */
    TRACTORS_PROHIBITED = 163,
    /**
     * PEDESTRIANS_PROHIBITED - Entry prohibited for pedestrians.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 259.png
     * </td>
     * <td>
     * StVO 259
     * </td>
     * </tr>
     * </table>
     */
    PEDESTRIANS_PROHIBITED = 42,
    /**
     * MOTOR_VEHICLES_PROHIBITED - Entry prohibited for all motor vehicles.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 260.png
     * </td>
     * <td>
     * StVO 260
     * </td>
     * </tr>
     * </table>
     */
    MOTOR_VEHICLES_PROHIBITED = 43,
    /**
     * HAZARDOUS_GOODS_VEHICLES_PROHIBITED - Entry prohibited for marked vehicles transporting hazardous
     * goods.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 261.png
     * </td>
     * <td>
     * StVO 261
     * </td>
     * </tr>
     * </table>
     */
    HAZARDOUS_GOODS_VEHICLES_PROHIBITED = 164,
    /**
     * OVER_WEIGHT_VEHICLES_PROHIBITED - Weight limit (entry prohibited for vehicles over maximum
     * gross weight shown).
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 262.png
     * </td>
     * <td>
     * StVO 262
     * </td>
     * </tr>
     * </table>
     *
     * Use
     * \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the limit.
     */
    OVER_WEIGHT_VEHICLES_PROHIBITED = 165,
    /**
     * VEHICLES_AXLE_OVER_WEIGHT_PROHIBITED - Axle weight limit (entry prohibited for vehicles over weight
     * on axle shown).
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 263.png
     * </td>
     * <td>
     * StVO 263
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the limit.
     */
    VEHICLES_AXLE_OVER_WEIGHT_PROHIBITED = 166,
    /**
     * VEHICLES_EXCESS_WIDTH_PROHIBITED - Horizontal clearance (entry prohibited for vehicles wider
     * than the width shown).
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html "264-2,3.png"
     * </td>
     * <td>
     * StVO 264
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the limit.
     */
    VEHICLES_EXCESS_WIDTH_PROHIBITED = 167,
    /**
     * VEHICLES_EXCESS_HEIGHT_PROHIBITED - Vertical clearance (entry prohibited for vehicles higher than
     * the height shown).
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 265.png
     * </td>
     * <td>
     * StVO 265
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the limit.
     */
    VEHICLES_EXCESS_HEIGHT_PROHIBITED = 168,
    /**
     * VEHICLES_EXCESS_LENGTH_PROHIBITED - Length restriction (entry prohibited for vehicles or
     * combinations of vehicles longer than the length shown).
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 266.png
     * </td>
     * <td>
     * StVO 266
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the limit.
     */
    VEHICLES_EXCESS_LENGTH_PROHIBITED = 169,
    /**
     * DO_NOT_ENTER - Entry not allowed. One-way road.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 267.png
     * </td>
     * <td>
     * StVO 267
     * </td>
     * </tr>
     * </table>
     */
    DO_NOT_ENTER = 44,
    /**
     * SNOW_CHAINS_REQUIRED - Snow chains required.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 268.png
     * </td>
     * <td>
     * StVO 268
     * </td>
     * </tr>
     * </table>
     */
    SNOW_CHAINS_REQUIRED = 170,
    /**
     * WATER_POLLUTANT_VEHICLES_PROHIBITED - Entry prohibited for vehicles carrying water pollutants.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 269.png
     * </td>
     * <td>
     * StVO 269
     * </td>
     * </tr>
     * </table>
     */
    WATER_POLLUTANT_VEHICLES_PROHIBITED = 171,
    /**
     * ENVIRONMENTAL_ZONE_BEGIN - Start of area without traffic to reduce harmful air
     * pollution.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 270.1.png
     * </td>
     * <td>
     * StVO 270.1
     * </td>
     * </tr>
     * </table>
     *
     * End: \c #TYPE_ENVIRONMENTAL_ZONE_END
     */
    ENVIRONMENTAL_ZONE_BEGIN = 45,
    /**
     * ENVIRONMENTAL_ZONE_END - End of area without traffic to reduce harmful air pollution.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 270.2.png
     * </td>
     * <td>
     * StVO 270.2
     * </td>
     * </tr>
     * </table>
     *
     * Begin: \c #TYPE_ENVIRONMENTAL_ZONE_BEGIN
     */
    ENVIRONMENTAL_ZONE_END = 46,
    /**
     * NO_U_TURN_LEFT - No U turn left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 272.png
     * </td>
     * <td>
     * StVO 272
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_NO_U_TURN_RIGHT
     */
    NO_U_TURN_LEFT = 47,
    /**
     * NO_U_TURN_RIGHT - No U turn right.
     * <!--
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html abc.png
     * </td>
     * <td>
     * </td>
     * </tr>
     * </table>
     * -->
     *
     * \note This type is to be applied in left-driving countries.
     *
     * Left: \c #TYPE_NO_U_TURN_LEFT
     */
    NO_U_TURN_RIGHT = 48,
    /**
     * PRESCRIBED_U_TURN_LEFT - Prescribed U turn left.
     * \n
     * Right: \c #TYPE_PRESCRIBED_U_TURN_RIGHT
     */
    PRESCRIBED_U_TURN_LEFT = 49,
    /**
     * PRESCRIBED_U_TURN_RIGHT - Prescribed U turn right.
     * \n
     * \note This type is to be applied in left-driving countries.
     *
     * Left: \c #TYPE_PRESCRIBED_U_TURN_LEFT
     */
    PRESCRIBED_U_TURN_RIGHT = 50,
    /**
     * MINIMUM_DISTANCE_FOR_TRUCKS - Minimum safety distance for trucks.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 273.png
     * </td>
     * <td>
     * StVO 273
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the limit.
     */
    MINIMUM_DISTANCE_FOR_TRUCKS = 51,
    /**
     * SPEED_LIMIT_BEGIN - Start of speed limit.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 274-30.png
     * </td>
     * <td>
     * StVO 274
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the limit.
     *
     * End: \c #TYPE_SPEED_LIMIT_END
     */
    SPEED_LIMIT_BEGIN = 52,
    /**
     * SPEED_LIMIT_ZONE_BEGIN - Start of zone with speed limit.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 274.1.png
     * </td>
     * <td>
     * StVO 274.1
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the limit.
     *
     * End: \c #TYPE_SPEED_LIMIT_ZONE_END
     */
    SPEED_LIMIT_ZONE_BEGIN = 53,
    /**
     * SPEED_LIMIT_ZONE_END - End of zone with speed limit.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 274.2.png
     * </td>
     * <td>
     * StVO 274.2
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the limit.
     *
     * Begin: \c #TYPE_SPEED_LIMIT_ZONE_BEGIN
     */
    SPEED_LIMIT_ZONE_END = 54,
    /**
     * MINIMUM_SPEED_BEGIN - Start of mandatory minimum speed.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 275.png
     * </td>
     * <td>
     * StVO 275
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the speed.
     *
     * End: \c #TYPE_MINIMUM_SPEED_END
     */
    MINIMUM_SPEED_BEGIN = 55,
    /**
     * OVERTAKING_BAN_BEGIN - Start of overtaking ban.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 276.png
     * </td>
     * <td>
     * StVO 276
     * </td>
     * </tr>
     * </table>
     *
     * End: \c #TYPE_OVERTAKING_BAN_END
     */
    OVERTAKING_BAN_BEGIN = 56,
    /**
     * OVERTAKING_BAN_FOR_TRUCKS_BEGIN - Start of overtaking ban for trucks.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 277.png
     * </td>
     * <td>
     * StVO 277
     * </td>
     * </tr>
     * </table>
     *
     * End: \c #TYPE_OVERTAKING_BAN_FOR_TRUCKS_END
     */
    OVERTAKING_BAN_FOR_TRUCKS_BEGIN = 57,
    /**
     * SPEED_LIMIT_END - End of speed limit.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 278-60.png
     * </td>
     * <td>
     * StVO 278
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to refer to the limit.
     *
     * Begin: \c #TYPE_SPEED_LIMIT_BEGIN
     */
    SPEED_LIMIT_END = 58,
    /**
     * MINIMUM_SPEED_END - End of mandatory minimum speed.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 279.png
     * </td>
     * <td>
     * StVO 279
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to refer to the limit.
     *
     * Begin: \c #TYPE_MINIMUM_SPEED_BEGIN
     */
    MINIMUM_SPEED_END = 59,
    /**
     * OVERTAKING_BAN_END - End of overtaking ban.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 280.png
     * </td>
     * <td>
     * StVO 280
     * </td>
     * </tr>
     * </table>
     *
     * Begin: \c #TYPE_OVERTAKING_BAN_BEGIN
     */
    OVERTAKING_BAN_END = 60,
    /**
     * OVERTAKING_BAN_FOR_TRUCKS_END - End of overtaking ban for trucks.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 281.png
     * </td>
     * <td>
     * StVO 281
     * </td>
     * </tr>
     * </table>
     *
     * Begin: \c #TYPE_OVERTAKING_BAN_FOR_TRUCKS_BEGIN
     */
    OVERTAKING_BAN_FOR_TRUCKS_END = 61,
    /**
     * ALL_RESTRICTIONS_END - End of all speed and overtaking restrictions.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 282.png
     * </td>
     * <td>
     * StVO 282
     * </td>
     * </tr>
     * </table>
     */
    ALL_RESTRICTIONS_END = 62,
    /**
     * NO_STOPPING - No stopping sign.
     * <table border="0">
     * <tr>
     * <td colspan="2">
     * \image html 283.png "StVO 283"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_NO_DIRECTION
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 283-10.png "StVO 283-10"
     * </td>
     * <td>
     * \image html 283-11.png "StVO 283-11"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_LEFT
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 283-20.png "StVO 283-20"
     * </td>
     * <td>
     * \image html 283-21.png "StVO 283-21"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_RIGHT
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 283-30.png "StVO 283-30"
     * </td>
     * <td>
     * \image html 283-31.png "StVO 283-31"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_LEFT_RIGHT
     * </td>
     * </tr>
     * </table>
     */
    NO_STOPPING = 63,
    /**
     * NO_PARKING - No parking sign.
     * <table border="0">
     * <tr>
     * <td colspan="2">
     * \image html 286.png "StVO 286"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_NO_DIRECTION
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 286-10.png "StVO 286-10"
     * </td>
     * <td>
     * \image html 286-11.png "StVO 286-11"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_LEFT
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 286-20.png "StVO 286-20"
     * </td>
     * <td>
     * \image html 286-21.png "StVO 286-21"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_RIGHT
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 286-30.png "StVO 286-30"
     * </td>
     * <td>
     * \image html 286-31.png "StVO 286-31"
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_LEFT_RIGHT
     * </td>
     * </tr>
     * </table>
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN.
     *
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 299.png
     * </td>
     * <td>
     * StVO 299
     * </td>
     * </table>
     */
    NO_PARKING = 64,
    /**
     * NO_PARKING_ZONE_BEGIN - Begin of no parking zone.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 290.1.png
     * </td>
     * <td>
     * StVO 290.1
     * </td>
     * </tr>
     * </table>
     *
     * End: \c #TYPE_NO_PARKING_ZONE_END
     */
    NO_PARKING_ZONE_BEGIN = 65,
    /**
     * NO_PARKING_ZONE_END - End of no parking zone.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 290.2.png
     * </td>
     * <td>
     * StVO 290.2
     * </td>
     * </tr>
     * </table>
     *
     * Begin: \c #TYPE_NO_PARKING_ZONE_BEGIN
     */
    NO_PARKING_ZONE_END = 66,
    /**
     * RIGHT_OF_WAY_NEXT_INTERSECTION - Right of way at the next intersection.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 301.png
     * </td>
     * <td>
     * StVO 301
     * </td>
     * </tr>
     * </table>
     */
    RIGHT_OF_WAY_NEXT_INTERSECTION = 67,
    /**
     * RIGHT_OF_WAY_BEGIN - Begin of priority road with right of way.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 306.png
     * </td>
     * <td>
     * StVO 306
     * </td>
     * </tr>
     * </table>
     *
     * End: \c #TYPE_RIGHT_OF_WAY_END
     */
    RIGHT_OF_WAY_BEGIN = 68,
    /**
     * RIGHT_OF_WAY_END - End of priority road with right of way.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 307.png
     * </td>
     * <td>
     * StVO 307
     * </td>
     * </tr>
     * </table>
     *
     * Begin: \c #TYPE_RIGHT_OF_WAY_BEGIN
     */
    RIGHT_OF_WAY_END = 69,
    /**
     * PRIORITY_OVER_OPPOSITE_DIRECTION - Traffic has priority over vehicles from the opposite
     * direction.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 308.png
     * </td>
     * <td>
     * StVO 308
     * </td>
     * </tr>
     * </table>
     *
     * See also: \c #TYPE_PRIORITY_TO_OPPOSITE_DIRECTION
     */
    PRIORITY_OVER_OPPOSITE_DIRECTION = 70,
    /**
     * PRIORITY_OVER_OPPOSITE_DIRECTION_UPSIDE_DOWN - Traffic has priority over vehicles from the opposite
     * direction.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:rotate(180deg)">
     * \image html 308.png
     * </td>
     * <td>
     * StVO 308, upside down
     * </td>
     * </tr>
     * </table>
     *
     * See also: \c #TYPE_PRIORITY_OVER_OPPOSITE_DIRECTION
     */
    PRIORITY_OVER_OPPOSITE_DIRECTION_UPSIDE_DOWN = 71,
    /**
     * TOWN_BEGIN - Town entrance.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 310.png
     * </td>
     * <td>
     * StVO 310
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the town's name and
     * district, e.g. "Wilster, Kreis Steinburg".
     *
     * End: \c #TYPE_TOWN_END
     */
    TOWN_BEGIN = 72,
    /**
     * TOWN_END - Town exit.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 311.png
     * </td>
     * <td>
     * StVO 311
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the town's name and
     * district, e.g. "Wilster".
     *
     * Begin: \c #TYPE_TOWN_BEGIN
     */
    TOWN_END = 73,
    /**
     * CAR_PARKING - Parking space.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 314.png
     * </td>
     * <td>
     * StVO 314
     * </td>
     * <td>
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_NO_DIRECTION.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 314-50.png
     * </td>
     * <td>
     * StVO 314-50
     * </td>
     * <td>
     * Parking house
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_NO_DIRECTION.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 316.png
     * </td>
     * <td>
     * StVO 316
     * </td>
     * <td>
     * Park and ride
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_NO_DIRECTION. Set \c
     * TrafficSignValue::text to "P+R".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * </td>
     * <td>
     * </td>
     * <td>
     * Park and move
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_NO_DIRECTION. Set \c
     * TrafficSignValue::text to "P+M".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 317.png
     * </td>
     * <td>
     * StVO 317
     * </td>
     * <td>
     * Hiker's parking
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_NO_DIRECTION.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 318.png
     * </td>
     * <td>
     * StVO 318
     * </td>
     * <td>
     * Parking with parking disk
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_NO_DIRECTION.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 314-10.png
     * </td>
     * <td>
     * StVO 314-10
     * </td>
     * <td>
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_LEFT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 314-20.png
     * </td>
     * <td>
     * StVO 314-20
     * </td>
     * <td>
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_RIGHT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 314-30.png
     * </td>
     * <td>
     * StVO 314-30
     * </td>
     * <td>
     * </td>
     * <td>
     * Set \c Classification::direction_scope to \c
     * #DIRECTION_SCOPE_LEFT_RIGHT.
     * </td>
     * </tr>
     * </table>
     */
    CAR_PARKING = 74,
    /**
     * CAR_PARKING_ZONE_BEGIN - Begin of parking zone.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 314.1.png
     * </td>
     * <td>
     * StVO 314.1
     * </td>
     * </tr>
     * </table>
     *
     * End: \c #TYPE_CAR_PARKING_ZONE_END
     */
    CAR_PARKING_ZONE_BEGIN = 75,
    /**
     * CAR_PARKING_ZONE_END - End of parking zone.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 314.2.png
     * </td>
     * <td>
     * StVO 314.2
     * </td>
     * </tr>
     * </table>
     *
     * Begin: \c #TYPE_CAR_PARKING_ZONE_BEGIN
     */
    CAR_PARKING_ZONE_END = 76,
    /**
     * SIDEWALK_HALF_PARKING_LEFT - Parking on sidewalks half in the direction of travel left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 315-50.png
     * -->
     * </td>
     * <td>
     * StVO 315-50
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_SIDEWALK_HALF_PARKING_RIGHT
     */
    SIDEWALK_HALF_PARKING_LEFT = 172,
    /**
     * SIDEWALK_HALF_PARKING_RIGHT - Parking on sidewalks half in the direction of travel right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 315-55.png
     * </td>
     * <td>
     * StVO 315-55
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_SIDEWALK_HALF_PARKING_LEFT
     */
    SIDEWALK_HALF_PARKING_RIGHT = 173,
    /**
     * SIDEWALK_PARKING_LEFT - Parking on sidewalks completely in the direction of
     * travel left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 315-60.png
     * -->
     * </td>
     * <td>
     * StVO 315-60
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_SIDEWALK_PARKING_RIGHT
     */
    SIDEWALK_PARKING_LEFT = 174,
    /**
     * SIDEWALK_PARKING_RIGHT - Parking on sidewalks completely in direction of travel right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 315-65.png
     * -->
     * </td>
     * <td>
     * StVO 315-65
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_SIDEWALK_PARKING_LEFT
     */
    SIDEWALK_PARKING_RIGHT = 175,
    /**
     * SIDEWALK_PERPENDICULAR_HALF_PARKING_LEFT - Parking on sidewalks half, perpendicular, in the direction of
     * travel left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 315-70.png
     * -->
     * </td>
     * <td>
     * StVO 315-70
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_SIDEWALK_PERPENDICULAR_HALF_PARKING_RIGHT
     */
    SIDEWALK_PERPENDICULAR_HALF_PARKING_LEFT = 176,
    /**
     * SIDEWALK_PERPENDICULAR_HALF_PARKING_RIGHT - Parking on sidewalks half, perpendicular, in the direction of
     * travel right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 315-75.png
     * -->
     * </td>
     * <td>
     * StVO 315-75
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_SIDEWALK_PERPENDICULAR_HALF_PARKING_LEFT
     */
    SIDEWALK_PERPENDICULAR_HALF_PARKING_RIGHT = 177,
    /**
     * SIDEWALK_PERPENDICULAR_PARKING_LEFT - Parking on sidewalks, perpendicular, in the direction of
     * travel left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 315-80.png
     * -->
     * </td>
     * <td>
     * StVO 315-80
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_SIDEWALK_PERPENDICULAR_PARKING_RIGHT
     */
    SIDEWALK_PERPENDICULAR_PARKING_LEFT = 178,
    /**
     * SIDEWALK_PERPENDICULAR_PARKING_RIGHT - Parking on sidewalks, perpendicular, in the direction of
     * travel right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 315-85.png
     * -->
     * </td>
     * <td>
     * StVO 315-85
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_SIDEWALK_PERPENDICULAR_PARKING_LEFT
     */
    SIDEWALK_PERPENDICULAR_PARKING_RIGHT = 179,
    /**
     * LIVING_STREET_BEGIN - Start of area with calmed / reduced traffic / home zone.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 325.1.png
     * </td>
     * <td>
     * StVO 325.1
     * </td>
     * </tr>
     * </table>
     *
     * End: \c #TYPE_LIVING_STREET_END
     */
    LIVING_STREET_BEGIN = 77,
    /**
     * LIVING_STREET_END - End of area with calmed / reduced traffic / home zone.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 325.2.png
     * </td>
     * <td>
     * StVO 325.2
     * </td>
     * </tr>
     * </table>
     *
     * Begin: \c #TYPE_LIVING_STREET_BEGIN
     */
    LIVING_STREET_END = 78,
    /**
     * TUNNEL - Tunnel ahead.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 327.png
     * </td>
     * <td>
     * StVO 327
     * </td>
     * </tr>
     * </table>
     */
    TUNNEL = 79,
    /**
     * EMERGENCY_STOPPING_LEFT - Emergency stopping place left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 328.png
     * </td>
     * <td>
     * </td>
     * </tr>
     * </table>
     *
     * \note This type is to be applied in left-driving countries.
     *
     * Right: \c #TYPE_EMERGENCY_STOPPING_RIGHT
     */
    EMERGENCY_STOPPING_LEFT = 80,
    /**
     * EMERGENCY_STOPPING_RIGHT - Emergency stopping place right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 328.png
     * </td>
     * <td>
     * StVO 328
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_EMERGENCY_STOPPING_LEFT
     */
    EMERGENCY_STOPPING_RIGHT = 81,
    /**
     * HIGHWAY_BEGIN - Begin of highway.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 330.1.png
     * </td>
     * <td>
     * StVO 330.1
     * </td>
     * </tr>
     * </table>
     *
     * End: \c #TYPE_HIGHWAY_END
     */
    HIGHWAY_BEGIN = 82,
    /**
     * HIGHWAY_END - End of highway.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 330.2.png
     * </td>
     * <td>
     * StVO 330.2
     * </td>
     * </tr>
     * </table>
     *
     * Begin: \c #TYPE_HIGHWAY_BEGIN
     */
    HIGHWAY_END = 83,
    /**
     * EXPRESSWAY_BEGIN - Begin of expressway for motor vehicles.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 331.1.png
     * </td>
     * <td>
     * StVO 331.1
     * </td>
     * </tr>
     * </table>
     *
     * End: \c #TYPE_EXPRESSWAY_END
     */
    EXPRESSWAY_BEGIN = 84,
    /**
     * EXPRESSWAY_END - End of expressways for motor vehicles.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 331.2.png
     * </td>
     * <td>
     * StVO 331.2
     * </td>
     * </tr>
     * </table>
     *
     * Begin: \c #TYPE_EXPRESSWAY_BEGIN
     */
    EXPRESSWAY_END = 85,
    /**
     * NAMED_HIGHWAY_EXIT - Highway exit.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 332.png
     * </td>
     * <td>
     * StVO 332
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the destination
     * indicated in the sign, e.g. "Mainz Wiesbaden".
     */
    NAMED_HIGHWAY_EXIT = 183,
    /**
     * NAMED_EXPRESSWAY_EXIT - Expressway exit.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 332.1.png
     * </td>
     * <td>
     * StVO 332.1
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the destination
     * indicated in the sign, e.g. "Mainz Wiesbaden".
     */
    NAMED_EXPRESSWAY_EXIT = 184,
    /**
     * NAMED_ROAD_EXIT - Exit sign on other roads.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 332.1-20.png
     * </td>
     * <td>
     * StVO 332.1-20
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the destination
     * indicated in the sign, e.g. "Duisburg Endeninch".
     */
    NAMED_ROAD_EXIT = 185,
    /**
     * HIGHWAY_EXIT - Highway exit sign.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 333.png
     * </td>
     * <td>
     * StVO 333
     * </td>
     * </tr>
     * </table>
     */
    HIGHWAY_EXIT = 86,
    /**
     * EXPRESSWAY_EXIT - Exit from expressway (arrow sign).
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 333.1.png
     * </td>
     * <td>
     * StVO 333.1
     * </td>
     * </tr>
     * </table>
     */
    EXPRESSWAY_EXIT = 186,
    /**
     * ONEWAY_STREET - One-way street.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 353.png
     * -->
     * </td>
     * <td>
     * StVO 353  - Valid only until October 2022.
     * </td>
     * </tr>
     * </table>
     */
    ONEWAY_STREET = 187,
    /**
     * CROSSING_GUARDS - Crossing guards.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 356.png
     * </td>
     * <td>
     * StVO 356
     * </td>
     * </tr>
     * </table>
     */
    CROSSING_GUARDS = 189,
    /**
     * DEADEND - Dead-end street.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 357.png
     * </td>
     * <td>
     * StVO 357
     * </td>
     * </tr>
     * </table>
     */
    DEADEND = 190,
    /**
     * DEADEND_EXCLUDING_DESIGNATED_ACTORS - Dead-end street excluding ...
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 357-50.png
     * </td>
     * <td>
     * StVO 357-50
     * </td>
     * <td>
     * excluding pedestrians and bicycles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 357-51.png
     * </td>
     * <td>
     * StVO 357-51
     * </td>
     * <td>
     * excluding pedestrians.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 357-52.png
     * </td>
     * <td>
     * StVO 357-52
     * </td>
     * <td>
     * excluding bicycles.
     * </td>
     * </tr>
     * </table>
     */
    DEADEND_EXCLUDING_DESIGNATED_ACTORS = 191,
    /**
     * FIRST_AID_STATION - First aid station.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 358.png
     * </td>
     * <td>
     * StVO 358
     * </td>
     * </tr>
     * </table>
     */
    FIRST_AID_STATION = 194,
    /**
     * POLICE_STATION - Police station.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 363.png
     * </td>
     * <td>
     * StVO 363
     * </td>
     * </tr>
     * </table>
     */
    POLICE_STATION = 195,
    /**
     * TELEPHONE - Telephone service.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-50.png
     * </td>
     * <td>
     * StVO 365-50
     * </td>
     * <td>
     * Telephone service
     * </td>
     * <td>
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 365-51.png
     * </td>
     * <td>
     * StVO 365-51
     * </td>
     * <td>
     * Emergency telephone service
     * </td>
     * <td>
     * Use \c TrafficSignValue::text for "SOS".
     * </td>
     * </tr>
     * </table>
     */
    TELEPHONE = 196,
    /**
     * FILLING_STATION - Filling station.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-52.png
     * </td>
     * <td>
     * StVO 365-52
     * </td>
     * <td>
     * Filling station.
     * </td>
     * <td>
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 365-53.png
     * </td>
     * <td>
     * StVO 365-53
     * </td>
     * <td>
     * LPG filling station.
     * </td>
     * <td>
     * Use \c TrafficSignValue::text for "LPG".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 365-54.png
     * </td>
     * <td>
     * StVO 365-54
     * </td>
     * <td>
     * CNG filling station.
     * </td>
     * <td>
     * Use \c TrafficSignValue::text for "CNG".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 365-65.png
     * </td>
     * <td>
     * StVO 365-65
     * </td>
     * <td>
     * Charging station for electric vehicles.
     * </td>
     * <td>
     * Use \c TrafficSignValue::text for "E".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 365-66.png
     * </td>
     * <td>
     * StVO 365-66
     * </td>
     * <td>
     * H2 filling station.
     * </td>
     * <td>
     * Use \c TrafficSignValue::text for "H2".
     * </td>
     * </tr>
     * </table>
     */
    FILLING_STATION = 198,
    /**
     * HOTEL - Highway hotel.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-55.png
     * </td>
     * <td>
     * StVO 365-55
     * </td>
     * </tr>
     * </table>
     */
    HOTEL = 201,
    /**
     * INN - Highway inn.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-56.png
     * </td>
     * <td>
     * StVO 365-56
     * </td>
     * </tr>
     * </table>
     */
    INN = 202,
    /**
     * KIOSK - Highway kiosk.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-57.png
     * </td>
     * <td>
     * StVO 365-57
     * </td>
     * </tr>
     * </table>
     */
    KIOSK = 203,
    /**
     * TOILET - Toilets.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-58.png
     * </td>
     * <td>
     * StVO 365-58
     * </td>
     * </tr>
     * </table>
     */
    TOILET = 204,
    /**
     * CHAPEL - Highway chapel.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-59.png
     * </td>
     * <td>
     * StVO 365-59
     * </td>
     * </tr>
     * </table>
     */
    CHAPEL = 205,
    /**
     * TOURIST_INFO - Tourist information.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-61.png
     * </td>
     * <td>
     * StVO 365-61
     * </td>
     * </tr>
     * </table>
     */
    TOURIST_INFO = 206,
    /**
     * REPAIR_SERVICE - Roadside assistance.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-62.png
     * </td>
     * <td>
     * StVO 365-62
     * </td>
     * </tr>
     * </table>
     */
    REPAIR_SERVICE = 207,
    /**
     * PEDESTRIAN_UNDERPASS - Underpass for pedestrians.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-63.png
     * </td>
     * <td>
     * StVO 365-63
     * </td>
     * </tr>
     * </table>
     */
    PEDESTRIAN_UNDERPASS = 208,
    /**
     * PEDESTRIAN_BRIDGE - Pedestrian bridge.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-64.png
     * </td>
     * <td>
     * StVO 365-64
     * </td>
     * </tr>
     * </table>
     */
    PEDESTRIAN_BRIDGE = 209,
    /**
     * CAMPER_PLACE - Camper place.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-67.png
     * </td>
     * <td>
     * StVO 365-67
     * </td>
     * </tr>
     * </table>
     * Camper and caravan place
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 365-68.png
     * </td>
     * <td>
     * StVO 365-68
     * </td>
     * </tr>
     * </table>
     */
    CAMPER_PLACE = 213,
    /**
     * ADVISORY_SPEED_LIMIT_BEGIN - Advisory speed limit beginning.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 380.png
     * -->
     * </td>
     * <td>
     * StVO 380 - Valid only until October 2022.
     * </td>
     * </tr>
     * </table>
     *
     * \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit.
     */
    ADVISORY_SPEED_LIMIT_BEGIN = 214,
    /**
     * ADVISORY_SPEED_LIMIT_END - Advisory speed limit end.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 381.png
     * -->
     * </td>
     * <td>
     * StVO 381 - Valid only until October 2022
     * </td>
     * </tr>
     * </table>
     *
     * \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit.
     */
    ADVISORY_SPEED_LIMIT_END = 215,
    /**
     * PLACE_NAME - Road passes through the town but not its city center.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 385.png
     * </td>
     * <td>
     * StVO 385
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the town indicated in
     * the sign.
     */
    PLACE_NAME = 216,
    /**
     * TOURIST_ATTRACTION - Tourist attraction.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 386.1.png
     * </td>
     * <td>
     * StVO 386.1
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the attraction
     * indicated in the sign.
     */
    TOURIST_ATTRACTION = 217,
    /**
     * TOURIST_ROUTE - Tourist route.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 386.2.png
     * </td>
     * <td>
     * StVO 386.2
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the route indicated
     * in the sign.
     */
    TOURIST_ROUTE = 218,
    /**
     * TOURIST_AREA - Geographical area containing several tourist attractions.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 386.3.png
     * </td>
     * <td>
     * StVO 386.3
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the area indicated in
     * the sign.
     */
    TOURIST_AREA = 219,
    /**
     * SHOULDER_NOT_PASSABLE_MOTOR_VEHICLES - Shoulder unsafe for multi-track motor vehicles.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 388.png
     * -->
     * </td>
     * <td>
     * StVO 388 - Valid only until October 2022
     * </td>
     * </tr>
     * </table>
     */
    SHOULDER_NOT_PASSABLE_MOTOR_VEHICLES = 220,
    /**
     * SHOULDER_UNSAFE_TRUCKS_TRACTORS - Shoulder unsafe for vehicles with a permitted gross weight
     * over 3.5 t and for tractors.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 389.png
     * -->
     * </td>
     * <td>
     * StVO 389 - Valid only until October 2022
     * </td>
     * </tr>
     * </table>
     */
    SHOULDER_UNSAFE_TRUCKS_TRACTORS = 221,
    /**
     * TOLL_BEGIN - Toll highway beginning.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 390.png
     * </td>
     * <td>
     * StVO 390
     * </td>
     * </tr>
     * </table>
     */
    TOLL_BEGIN = 222,
    /**
     * TOLL_END - Toll highway end.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 390.2.png
     * </td>
     * <td>
     * StVO 390.2
     * </td>
     * </tr>
     * </table>
     */
    TOLL_END = 223,
    /**
     * TOLL_ROAD - Toll road.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 391.png
     * </td>
     * <td>
     * StVO 391
     * </td>
     * </tr>
     * </table>
     */
    TOLL_ROAD = 224,
    /**
     * CUSTOMS - Customs post.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 392.png
     * -->
     * </td>
     * <td>
     * StVO 392
     * </td>
     * </tr>
     * </table>
     */
    CUSTOMS = 225,
    /**
     * INTERNATIONAL_BORDER_INFO - Information sign posted at international borders.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 393.png
     * </td>
     * <td>
     * StVO 393
     * </td>
     * </tr>
     * </table>
     */
    INTERNATIONAL_BORDER_INFO = 226,
    /**
     * STREETLIGHT_RED_BAND - Red band on lamp posts indicate that streetlight does not
     * stay on all night.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 394.png "StVO 394"
     * <td>
     * \image html 394-50.png "StVO 394-50"
     * </tr>
     * </table>
     */
    STREETLIGHT_RED_BAND = 227,
    /**
     * FEDERAL_HIGHWAY_ROUTE_NUMBER - Federal Highway route number.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 401.png
     * </td>
     * <td>
     * StVO 401
     * </td>
     * </tr>
     * </table>
     */
    FEDERAL_HIGHWAY_ROUTE_NUMBER = 228,
    /**
     * HIGHWAY_ROUTE_NUMBER - Highway route number.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 405.png
     * </td>
     * <td>
     * StVO 405
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the route number
     * indicated in the sign.
     */
    HIGHWAY_ROUTE_NUMBER = 229,
    /**
     * HIGHWAY_INTERCHANGE_NUMBER - Highway interchange number (exits, three and four-way
     * interchanges).
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 406-50.png "StVO 406-50"
     * <td>
     * \image html 406-51.png "StVO 406-51"
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the route number
     * indicated in the sign.
     */
    HIGHWAY_INTERCHANGE_NUMBER = 230,
    /**
     * EUROPEAN_ROUTE_NUMBER - European route number.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 410.png
     * </td>
     * <td>
     * StVO 410
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the route number
     * indicated in the sign.
     */
    EUROPEAN_ROUTE_NUMBER = 231,
    /**
     * FEDERAL_HIGHWAY_DIRECTION_LEFT - Federal highway direction sign, left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 415-10.png
     * </td>
     * <td>
     * StVO 415-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_FEDERAL_HIGHWAY_DIRECTION_RIGHT
     */
    FEDERAL_HIGHWAY_DIRECTION_LEFT = 232,
    /**
     * FEDERAL_HIGHWAY_DIRECTION_RIGHT - Federal highway direction sign, right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 415-20.png
     * -->
     * </td>
     * <td>
     * StVO 415-20
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_FEDERAL_HIGHWAY_DIRECTION_LEFT
     */
    FEDERAL_HIGHWAY_DIRECTION_RIGHT = 233,
    /**
     * PRIMARY_ROAD_DIRECTION_LEFT - Primary road direction sign, left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 418-10.png
     * </td>
     * <td>
     * StVO 418-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_PRIMARY_ROAD_DIRECTION_RIGHT
     */
    PRIMARY_ROAD_DIRECTION_LEFT = 234,
    /**
     * PRIMARY_ROAD_DIRECTION_RIGHT - Primary road direction sign, right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 418-20.png
     * -->
     * </td>
     * <td>
     * StVO 418-20
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_PRIMARY_ROAD_DIRECTION_LEFT
     */
    PRIMARY_ROAD_DIRECTION_RIGHT = 235,
    /**
     * SECONDARY_ROAD_DIRECTION_LEFT - Secondary road direction sign, left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 419-10.png
     * </td>
     * <td>
     * StVO 419-10
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the destination
     * indicated in the sign.
     *
     * Right: \c #TYPE_SECONDARY_ROAD_DIRECTION_RIGHT
     */
    SECONDARY_ROAD_DIRECTION_LEFT = 236,
    /**
     * SECONDARY_ROAD_DIRECTION_RIGHT - Secondary road direction sign, right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 419-20.png
     * </td>
     * <td>
     * StVO 419-20
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the destination
     * indicated in the sign.
     *
     * Left: \c #TYPE_SECONDARY_ROAD_DIRECTION_LEFT
     */
    SECONDARY_ROAD_DIRECTION_RIGHT = 237,
    /**
     * DIRECTION_DESIGNATED_ACTORS_LEFT - Advance direction sign for designated type of vehicle, left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 421-10.png "StVO 421-10"
     * <td>
     * \image html 421-11.png "StVO 421-11"
     * <td>
     * \image html 421-12.png "StVO 421-12"
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_DIRECTION_DESIGNATED_ACTORS_RIGHT
     */
    DIRECTION_DESIGNATED_ACTORS_LEFT = 238,
    /**
     * DIRECTION_DESIGNATED_ACTORS_RIGHT - Advance direction sign for designated type of vehicle, right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 421-10.png
     * <td style="transform:scaleX(-1)">
     * \image html 421-11.png
     * <td style="transform:scaleX(-1)">
     * \image html 421-12.png
     * </tr>
     * <tr style="font-weight:bold">
     * <td>
     * StVO 421-20
     * <td>
     * StVO 421-21
     * <td>
     * StVO 421-22
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_DIRECTION_DESIGNATED_ACTORS_LEFT
     */
    DIRECTION_DESIGNATED_ACTORS_RIGHT = 239,
    /**
     * ROUTING_DESIGNATED_ACTORS - Routing for designated type of vehicle, left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 422-10.png "StVO 422-10"
     * <td>
     * \image html 422-12.png "StVO 422-12"
     * <td>
     * \image html 422-14.png "StVO 422-14"
     * <td>
     * \image html 422-16.png "StVO 422-16"
     * </tr>
     * </table>
     * Routing for designated type of vehicle, align left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 422-11.png "StVO 422-11"
     * <td>
     * \image html 422-13.png "StVO 422-13"
     * <td>
     * \image html 422-15.png "StVO 422-15"
     * <td>
     * \image html 422-17.png "StVO 422-17"
     * </tr>
     * </table>
     * Direction preannouncement sign for designated type of
     * vehicle, left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 442-10.png "StVO 442-10"
     * <td>
     * \image html 442-12.png "StVO 442-12"
     * <td>
     * \image html 442-13.png "StVO 442-13"
     * </tr>
     * </table>
     *
     * Routing or designated type of vehicle, right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 422-10.png
     * <td style="transform:scaleX(-1)">
     * \image html 422-12.png
     * <td style="transform:scaleX(-1)">
     * \image html 422-14.png
     * <td style="transform:scaleX(-1)">
     * \image html 422-16.png
     * </tr>
     * <tr style="font-weight:bold">
     * <td>
     * StVO 422-20
     * <td>
     * StVO 422-22
     * <td>
     * StVO 422-24
     * <td>
     * StVO 422-26
     * </tr>
     * </table>
     * Routing for designated type of vehicle, align right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 422-11.png
     * <td style="transform:scaleX(-1)">
     * \image html 422-13.png
     * <td style="transform:scaleX(-1)">
     * \image html 422-15.png
     * <td style="transform:scaleX(-1)">
     * \image html 422-17.png
     * </tr>
     * <tr style="font-weight:bold">
     * <td>
     * StVO 422-21
     * <td>
     * StVO 422-23
     * <td>
     * StVO 422-25
     * <td>
     * StVO 422-27
     * </tr>
     * </table>
     * Direction preannouncement sign for designated type of
     * vehicle, right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 442-10.png
     * <td style="transform:scaleX(-1)">
     * \image html 442-12.png
     * <td style="transform:scaleX(-1)">
     * \image html 442-13.png
     * </tr>
     * <tr style="font-weight:bold">
     * <td>
     * StVO 442-20
     * <td>
     * StVO 442-22
     * <td>
     * StVO 442-23
     * </tr>
     * </table>
     * Routing for designated type of vehicle, straight.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 422-30.png "StVO 422-30"
     * <td>
     * \image html 422-32.png "StVO 422-32"
     * <td>
     * \image html 422-34.png "StVO 422-34"
     * <td>
     * \image html 422-36.png "StVO 422-36"
     * </tr>
     * </table>
     *
     * \note OSI 4.0 will describe the actors and arrows similar to
     * the supplementary signs approach.
     */
    ROUTING_DESIGNATED_ACTORS = 240,
    /**
     * DIRECTION_TO_HIGHWAY_LEFT - Direction to highway, left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 430-10.png
     * </td>
     * <td>
     * StVO 430-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_DIRECTION_TO_HIGHWAY_RIGHT
     */
    DIRECTION_TO_HIGHWAY_LEFT = 143,
    /**
     * DIRECTION_TO_HIGHWAY_RIGHT - Direction to highway, right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 430-20.png
     * -->
     * </td>
     * <td>
     * StVO 430-20
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_DIRECTION_TO_HIGHWAY_LEFT
     */
    DIRECTION_TO_HIGHWAY_RIGHT = 108,
    /**
     * DIRECTION_TO_LOCAL_DESTINATION_LEFT - Direction sign to important local destinations, left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 432-10.png
     * </td>
     * <td>
     * StVO 432-10
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the destination
     * indicated in the sign.
     *
     * Right: \c #TYPE_DIRECTION_TO_LOCAL_DESTINATION_RIGHT
     */
    DIRECTION_TO_LOCAL_DESTINATION_LEFT = 127,
    /**
     * DIRECTION_TO_LOCAL_DESTINATION_RIGHT - Direction sign to important local destinations, right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 432-20.png
     * -->
     * </td>
     * <td>
     * StVO 432-20
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the destination
     * indicated in the sign.
     *
     * Left: \c #TYPE_DIRECTION_TO_LOCAL_DESTINATION_LEFT
     */
    DIRECTION_TO_LOCAL_DESTINATION_RIGHT = 136,
    /**
     * CONSOLIDATED_DIRECTIONS - Consolidated direction sign.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 434-50.png "StVO 434-50"
     * <td>
     * \image html 434-51.png "StVO 434-51"
     * <td>
     * \image html 434-52.png "StVO 434-52"
     * <td>
     * \image html 434-53.png "StVO 434-53"
     * </tr>
     * </table>
     */
    CONSOLIDATED_DIRECTIONS = 118,
    /**
     * STREET_NAME - Street name sign.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 437.png
     * </td>
     * <td>
     * StVO 437
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the street name.
     */
    STREET_NAME = 119,
    /**
     * DIRECTION_PREANNOUNCEMENT - Direction preannouncement sign.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 438.png
     * </td>
     * <td>
     * StVO 438
     * </td>
     * </tr>
     * </table>
     */
    DIRECTION_PREANNOUNCEMENT = 120,
    /**
     * DIRECTION_PREANNOUNCEMENT_LANE_CONFIG - Direction preannouncement sign including lane configuration.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 439.png
     * </td>
     * <td>
     * StVO 439
     * </td>
     * </tr>
     * </table>
     */
    DIRECTION_PREANNOUNCEMENT_LANE_CONFIG = 121,
    /**
     * DIRECTION_PREANNOUNCEMENT_HIGHWAY_ENTRIES - Direction preannouncement sign including highway entries.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 440.png
     * </td>
     * <td>
     * StVO 440
     * </td>
     * </tr>
     * </table>
     */
    DIRECTION_PREANNOUNCEMENT_HIGHWAY_ENTRIES = 122,
    /**
     * HIGHWAY_ANNOUNCEMENT - Highway announcement board.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 448.png
     * </td>
     * <td>
     * StVO 448
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the distance. Use \c
     * TrafficSignValue::text to denote the highway and the
     * direction indicated in the sign, e.g. "26 Duesseldorf -
     * Benrath".
     */
    HIGHWAY_ANNOUNCEMENT = 123,
    /**
     * OTHER_ROAD_ANNOUNCEMENT - Announcement board on other roads outside of highways.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 448-50.png
     * </td>
     * <td>
     * StVO 448-50
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to set the distance. Use \c
     * TrafficSignValue::text to denote the destination indicated in
     * the sign.
     */
    OTHER_ROAD_ANNOUNCEMENT = 124,
    /**
     * HIGHWAY_ANNOUNCEMENT_TRUCK_STOP - Announcement highway truck stop.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 448.1.png
     * </td>
     * <td>
     * StVO 448.1
     * </td>
     * </tr>
     * </table>
     */
    HIGHWAY_ANNOUNCEMENT_TRUCK_STOP = 125,
    /**
     * HIGHWAY_PREANNOUNCEMENT_DIRECTIONS - Highway interchange advance directional sign.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 449.png
     * </td>
     * <td>
     * StVO 449
     * </td>
     * </tr>
     * </table>
     */
    HIGHWAY_PREANNOUNCEMENT_DIRECTIONS = 126,
    /**
     * POLE_EXIT - Pole indicating highways exit in ... m.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 450-50.png "StVO 450-50"
     * <td>
     * \image html 450-51.png "StVO 450-51"
     * <td>
     * \image html 450-52.png "StVO 450-52"
     * <td>
     * \image html 450-53.png "StVO 450-53"
     * <td>
     * \image html 450-54.png "StVO 450-54"
     * <td>
     * \image html 450-55.png "StVO 450-55"
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit to specify the distance in m
     * or the displayed number of stripes (in that case, set \c
     * TrafficSignValue::value_unit to \c
     * TrafficSignValue::UNIT_NO_UNIT.).
     */
    POLE_EXIT = 88,
    /**
     * HIGHWAY_DISTANCE_BOARD - Highway distance board.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 453.png "StVO 453"
     * <td>
     * \image html 453-50.png "StVO 453-50"
     * </tr>
     * </table>
     */
    HIGHWAY_DISTANCE_BOARD = 180,
    /**
     * DETOUR_LEFT - Detour sign, pointing left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 454-10.png
     * </td>
     * <td>
     * StVO 454-10
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_DETOUR_RIGHT
     */
    DETOUR_LEFT = 181,
    /**
     * DETOUR_RIGHT - Detour sign, pointing right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 454-20.png
     * -->
     * </td>
     * <td>
     * StVO 454-20
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_DETOUR_LEFT
     */
    DETOUR_RIGHT = 182,
    /**
     * NUMBERED_DETOUR - Numbered detour route.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 455.1.png
     * </td>
     * <td>
     * StVO 455.1
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the alternative
     * routing name indicated in the sign.
     *
     * \note OSI 4.0 will describe the arrows similar to the
     * supplementary signs approach.
     */
    NUMBERED_DETOUR = 131,
    /**
     * DETOUR_BEGIN - Announcement; begin of detour.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 457.1.png
     * </td>
     * <td>
     * StVO 457.1
     * </td>
     * </tr>
     * </table>
     */
    DETOUR_BEGIN = 132,
    /**
     * DETOUR_END - End of detour.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 457.2.png
     * </td>
     * <td>
     * StVO 457.2
     * </td>
     * </tr>
     * </table>
     */
    DETOUR_END = 133,
    /**
     * DETOUR_ROUTING_BOARD - Diversion routing board.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 458.png
     * </td>
     * <td>
     * StVO 458
     * </td>
     * </tr>
     * </table>
     */
    DETOUR_ROUTING_BOARD = 134,
    /**
     * OPTIONAL_DETOUR - The sign indicates an alternative routing.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 460-50.png
     * </td>
     * <td>
     * StVO 460-50
     * </td>
     * <td>
     * The sign indicates an alternative routing, announcement.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 460-10.png
     * </td>
     * <td>
     * StVO 460-10
     * </td>
     * <td>
     * The sign indicates an alternative routing, preannouncement
     * left.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 460-11.png
     * -->
     * </td>
     * <td>
     * StVO 460-11
     * </td>
     * <td>
     * The sign indicates an alternative routing, left.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 460-12.png
     * </td>
     * <td>
     * StVO 460-12
     * </td>
     * <td>
     * The sign indicates an alternative routing, change lane left.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 460-20.png
     * -->
     * </td>
     * <td>
     * StVO 460-20
     * </td>
     * <td>
     * The sign indicates an alternative routing, preannouncement
     * right.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 460-21.png
     * -->
     * </td>
     * <td>
     * StVO 460-21
     * </td>
     * <td>
     * The sign indicates an alternative routing, right.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 460-22.png
     * -->
     * </td>
     * <td>
     * StVO 460-22
     * </td>
     * <td>
     * The sign indicates an alternative routing, lane change
     * right.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 460-30.png
     * </td>
     * <td>
     * StVO 460-30
     * </td>
     * <td>
     * The sign indicates an alternative routing, straight.
     * </td>
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::text to denote the alternative
     * routing name indicated in the sign.
     *
     * \note OSI 4.0 will describe the arrows similar to the
     * supplementary signs approach.
     */
    OPTIONAL_DETOUR = 111,
    /**
     * OPTIONAL_DETOUR_ROUTING - Provisional diversion route schematic.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 466.png
     * </td>
     * <td>
     * StVO 466
     * </td>
     * </tr>
     * </table>
     */
    OPTIONAL_DETOUR_ROUTING = 199,
    /**
     * ROUTE_RECOMMENDATION - Recommended alternate route.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 467.1-10.png
     * </td>
     * <td>
     * StVO 467.1-10
     * </td>
     * <td>
     * Set \c Classification::direction_scope as \c
     * DIRECTION_SCOPE_LEFT.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 467.1-10.png
     * </td>
     * <td>
     * StVO 467.1-20
     * </td>
     * <td>
     * Set \c Classification::direction_scope as \c
     * DIRECTION_SCOPE_RIGHT.
     * </td>
     * </tr>
     * </table>
     */
    ROUTE_RECOMMENDATION = 211,
    /**
     * ROUTE_RECOMMENDATION_END - End of recommended alternate route.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 467.2.png
     * </td>
     * <td>
     * StVO 467.2
     * </td>
     * </tr>
     * </table>
     */
    ROUTE_RECOMMENDATION_END = 212,
    /**
     * ANNOUNCE_LANE_TRANSITION_LEFT - X lanes transition, left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 501-10.png
     * -->
     * </td>
     * <td>
     * StVO 501-10
     * </td>
     * <td>
     * One associated lane.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 501-11.png
     * </td>
     * <td>
     * StVO 501-11
     * </td>
     * <td>
     * Two associated lanes.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 501-12.png
     * -->
     * </td>
     * <td>
     * StVO 501-12
     * </td>
     * <td>
     * Three associated lanes.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 505-11.png
     * </td>
     * <td>
     * (StVO 505-11)
     * </td>
     * <td>
     * Two associated lanes with restriction.
     * Restriction defined as additional main sign.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 505-12.png
     * </td>
     * <td>
     * (StVO 505-12)
     * </td>
     * <td>
     * Three associated lanes with restriction.
     * Restrictions defined as additional main sign(s).
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_ANNOUNCE_LANE_TRANSITION_RIGHT
     */
    ANNOUNCE_LANE_TRANSITION_LEFT = 192,
    /**
     * ANNOUNCE_LANE_TRANSITION_RIGHT - X lanes transition, right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 501-20.png
     * -->
     * </td>
     * <td>
     * StVO 501-20
     * </td>
     * <td>
     * One associated lane.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 501-11.png
     * </td>
     * <td>
     * StVO 501-21
     * </td>
     * <td>
     * Two associated lanes.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 501-22.png
     * -->
     * </td>
     * <td>
     * StVO 501-22
     * </td>
     * <td>
     * Three associated lanes.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 505-21.png
     * -->
     * </td>
     * <td>
     * (StVO 505-21)
     * </td>
     * <td>
     * Two associated lanes with restriction.
     * Restriction defined as additional main sign.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 505-22.png
     * -->
     * </td>
     * <td>
     * (StVO 505-22)
     * </td>
     * <td>
     * Three associated lanes with restriction.
     * Restrictions defined as additional main sign(s).
     * </td>
     * </tr>
     * </table>
     *
     * Left: \c #TYPE_ANNOUNCE_LANE_TRANSITION_LEFT
     */
    ANNOUNCE_LANE_TRANSITION_RIGHT = 193,
    /**
     * ANNOUNCE_RIGHT_LANE_END - End of X right lanes.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 531-10.png
     * </td>
     * <td>
     * StVO 531-10
     * </td>
     * </tr>
     * </table>
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN.
     *
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image tml 297.1-21.png
     * -->
     * </td>
     * <td>
     * StVO 297.1-21
     * </td>
     * </tr>
     * </table>
     */
    ANNOUNCE_RIGHT_LANE_END = 90,
    /**
     * ANNOUNCE_LEFT_LANE_END - End of X left lanes.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 531-10.png
     * </td>
     * <td>
     * StVO 531-20
     * </td>
     * </tr>
     * </table>
     *
     * As symbolic road marking \c
     * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN.
     *
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 297.1-21.png
     * -->
     * </td>
     * <td>
     * StVO 297.1-21
     * </td>
     * </tr>
     * </table>
     */
    ANNOUNCE_LEFT_LANE_END = 89,
    /**
     * ANNOUNCE_RIGHT_LANE_BEGIN - Begin of X right lanes.
     * <!--
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 545-11.png
     * </td>
     * <td>
     * (StVO 545-11)
     * </td>
     * <td>
     * Extension from two to three lanes with minimum speed by lane.
     * </td>
     * <td>
     * Restrictions defined as additional main sign(s).
     * </td>
     * </tr>
     * </table>-->
     *
     * Left: \c #TYPE_ANNOUNCE_LEFT_LANE_BEGIN
     */
    ANNOUNCE_RIGHT_LANE_BEGIN = 115,
    /**
     * ANNOUNCE_LEFT_LANE_BEGIN - Begin of X left lanes.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 545-11.png
     * </td>
     * <td>
     * (StVO 545-11)
     * </td>
     * <td>
     * Extension from two to three lanes with minimum speed by lane.
     * </td>
     * <td>
     * Restrictions defined as additional main signs.
     * </td>
     * </tr>
     * </table>
     *
     * Right: \c #TYPE_ANNOUNCE_RIGHT_LANE_BEGIN
     */
    ANNOUNCE_LEFT_LANE_BEGIN = 116,
    /**
     * ANNOUNCE_LANE_CONSOLIDATION - Announce lane consolidation.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 551-20.png
     * -->
     * </td>
     * <td>
     * StVO 551-20
     * </td>
     * <td>
     * Consolidation of lanes from multiple roads, one continuing,
     * one opening.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 551-21.png
     * </td>
     * <td>
     * StVO 551-21
     * </td>
     * <td>
     * Consolidation of lanes from multiple roads, two continuing,
     * one opening.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 551-22.png
     * -->
     * </td>
     * <td>
     * StVO 551-22
     * </td>
     * <td>
     * Consolidation of lanes from multiple roads, two continuing,
     * two opening.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 551-23.png
     * -->
     * </td>
     * <td>
     * StVO 551-23
     * </td>
     * <td>
     * Consolidation of lanes from multiple roads, three continuing,
     * two opening.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 551-24.png
     * -->
     * </td>
     * <td>
     * StVO 551-24
     * </td>
     * <td>
     * Consolidation of lanes from multiple roads, three continuing,
     * one opening.
     * </td>
     * </tr>
     * </table>
     */
    ANNOUNCE_LANE_CONSOLIDATION = 117,
    /**
     * DETOUR_CITY_BLOCK - Detour around city block.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 590-10.png
     * </td>
     * <td>
     * StVO 590-10
     * </td>
     * <td>
     * turn right, left, left
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 590-11.png
     * -->
     * </td>
     * <td>
     * StVO 590-11
     * </td>
     * <td>
     * turn right, right, right
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 590-10.png
     * </td>
     * <td>
     * </td>
     * <td>
     * turn left, right, right
     * </td>
     * </tr>
     * <tr>
     * <td>
     * </td>
     * <td>
     * </td>
     * <td>
     * turn left, left, left
     * </td>
     * </tr>
     * </table>
     */
    DETOUR_CITY_BLOCK = 142,
    /**
     * GATE - Boom gate.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 600-25.png
     * </td>
     * <td>
     * StVO 600
     * </td>
     * </tr>
     * </table>
     */
    GATE = 141,
    /**
     * POLE_WARNING - Pole for warning and guiding purposes
     * (red/white stripes - StVO 605, also StVO 628 and StVO 629).
     * <table border="0">
     * <tr>
     * <td>
     * \image html 605-10.png "StVO 605"
     * <td>
     * \image html 628-10.png "StVO 628"
     * <td>
     * \image html 629-10.png "StVO 629"
     * </tr>
     * </table>
     *
     * Variants (here X can be any of 605, 628 or 629):
     * <table border="0">
     * <tr>
     * <td>
     * StVO X-10, -12, -13 and -14
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * StVO X-11
     * </td>
     * <td>
     * Set \c Classification::direction_scope as \c
     * #DIRECTION_SCOPE_RIGHT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * StVO X-20, -22, -23 and -24
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * StVO X-21
     * </td>
     * <td>
     * Set \c Classification::direction_scope as \c
     * #DIRECTION_SCOPE_LEFT.
     * </td>
     * </tr>
     * </table>
     */
    POLE_WARNING = 91,
    /**
     * TRAFFIC_CONE - Traffic cone.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 610-41.png
     * </td>
     * <td>
     * StVO 610
     * </td>
     * </tr>
     * </table>
     */
    TRAFFIC_CONE = 140,
    /**
     * MOBILE_LANE_CLOSURE - Mobile lane closure board.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 615.png
     * </td>
     * <td>
     * StVO 615
     * </td>
     * <td>
     * no arrow
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 616-30.png
     * </td>
     * <td>
     * StVO 616-30
     * </td>
     * <td>
     * with lighted arrow, large
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 616-31.png
     * -->
     * </td>
     * <td>
     * StVO 616-31
     * </td>
     * <td>
     * with lighted arrow, small
     * </td>
     * </tr>
     * </table>
     *
     * \note Additional traffic signs are modeled as separate main
     * signs.
     */
    MOBILE_LANE_CLOSURE = 139,
    /**
     * REFLECTOR_POST - Reflector guide posts.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 620-40.png
     * </td>
     * <td>
     * StVO 620-40
     * </td>
     * <td>
     * Reflector guide posts, rectangular reflecting.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 620-41.png
     * </td>
     * <td>
     * StVO 621-40
     * </td>
     * <td>
     * Reflector guide posts, two dots reflecting.
     * </td>
     * </tr>
     * </table>
     *
     * \note No reflecting color is specified.
     */
    REFLECTOR_POST = 114,
    /**
     * DIRECTIONAL_BOARD_WARNING - Directional board used for warning and guiding purposes
     * (red/white stripes - StVO 625).
     *
     * Use the optional attribute \c Classification::direction_scope
     * to specify the direction the wedge symbols are pointing at.
     *
     * Variants (here X is any of 0, 1, 2, 3):
     * <table border="0">
     * <tr>
     * <td>
     * \image html 625-11.png
     * </td>
     * <td>
     * StVO 625-1X
     * </td>
     * <td>
     * - Set \c Classification::direction_scope as \c
     * #DIRECTION_SCOPE_LEFT.
     * - Optionally, use \c TrafficSignValue::value to specify the
     * number of wedges on the board. If you do so, set \c
     * TrafficSignValue::value_unit to \c
     * TrafficSignValue::UNIT_NO_UNIT.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 625-11.png
     * </td>
     * <td>
     * StVO 625-2X
     * </td>
     * <td>
     * - Set \c Classification::direction_scope as \c
     * DIRECTION_SCOPE_RIGHT.
     * - Optionally, use \c TrafficSignValue::value to specify the
     * number of wedges on the board. If you do so, set \c
     * TrafficSignValue::value_unit to \c
     * TrafficSignValue::UNIT_NO_UNIT.
     * </td>
     * </tr>
     * </table>
     */
    DIRECTIONAL_BOARD_WARNING = 113,
    /**
     * GUIDING_PLATE - Guiding plate.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 626-10.png
     * </td>
     * <td>
     * StVO 626-10
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 626-10.png
     * </td>
     * <td>
     * StVO 626-20
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    GUIDING_PLATE = 104,
    /**
     * GUIDING_PLATE_WEDGES - Guiding plate, wedges.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 626-30.png
     * </td>
     * <td>
     * StVO 626-30, 626-31
     * </td>
     * </tr>
     * </table>
     */
    GUIDING_PLATE_WEDGES = 105,
    /**
     * PARKING_HAZARD - Parking hazard.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 630.png
     * </td>
     * <td>
     * StVO 630-10
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c false.
     * </td>
     * </tr>
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 630.png
     * </td>
     * <td>
     * StVO 630-20
     * </td>
     * <td>
     * Set \c #vertically_mirrored to \c true.
     * </td>
     * </tr>
     * </table>
     */
    PARKING_HAZARD = 99,
    /**
     * TRAFFIC_LIGHT_GREEN_ARROW - Green arrow sign at a traffic light.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 720.png
     * </td>
     * <td>
     * StVO 720
     * </td>
     * </tr>
     * </table>
     */
    TRAFFIC_LIGHT_GREEN_ARROW = 92
}
/**
 * Definition of the direction of the traffic sign's scope.
 * Signs marked with additional arrows. (E.g. No parking sign (StVO
 * 286) to the left.)
 */
declare enum TrafficSign_MainSign_Classification_DirectionScope {
    /**
     * UNKNOWN - Direction of the sign's scope is unknown (must not be used in
     * ground truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) direction of the sign's scope. */
    OTHER = 1,
    /** NO_DIRECTION - Direction of the sign's scope is not specified. */
    NO_DIRECTION = 2,
    /** LEFT - Direction of the sign's scope for its viewer is left. */
    LEFT = 3,
    /** RIGHT - Direction of the sign's scope for its viewer is right. */
    RIGHT = 4,
    /**
     * LEFT_RIGHT - Direction of the sign's scope for its viewer is to both
     * sides.
     */
    LEFT_RIGHT = 5
}
/**
 * \brief Additional supplementary sign modifying the main sign.
 *
 * \image html OSI_SupplementarySign.svg
 */
interface TrafficSign_SupplementarySign {
    /**
     * The base parameters of the supplementary traffic sign.
     *
     * The orientation of the bounding box \c SupplementarySign::base
     * ( \c BaseStationary::orientation ) is defined as follows:
     * The z-axis of the given \c BaseStationary::orientation is the vector
     * from the bottom to the top of the supplementary traffic sign's 2D
     * image plate. (Normally it is equal to the ground truth z-axis.) The
     * x-axis of the given \c BaseStationary::orientation is view normal of
     * the supplementary traffic sign's image. This x-axis points from the
     * supplementary traffic sign's image in the direction from where a
     * 'viewer' could see the supplementary traffic sign image.
     */
    base?: BaseStationary | undefined;
    /** The classification of the supplementary traffic sign. */
    classification?: TrafficSign_SupplementarySign_Classification | undefined;
    /**
     * Opaque reference of an associated 3D model of the supplementary traffic sign.
     *
     * \note It is implementation-specific how model_references are resolved to
     * 3d models.
     */
    model_reference?: string | undefined;
}
/**
 * \brief \c Classification data for a supplementary traffic sign.
 *
 * When constructing a \c SupplementarySign, consider the use of the
 * following members:
 * - In order to include numerical values indicated in the sign,
 * use \c TrafficSignValue::value. Accompany this value with an
 * indication of its unit of measure given by \c
 * TrafficSignValue::value_unit.
 * - In order to include strings of text indicated in the sign,
 * use \c TrafficSignValue::text. The interpretation of this text is
 * left to a user-defined procedure.
 *
 * \note The definition of the sign types is thought to be independent
 * of the country, even if the images used in this documentation are
 * based on the German Road Traffic Regulations (StVO).
 */
interface TrafficSign_SupplementarySign_Classification {
    /** Variability. */
    variability?: TrafficSign_Variability | undefined;
    /**
     * Type of the supplementary sign.
     *
     * \attention Deprecated: A revision is planned for version 4.0.0 to
     * replace the type enum with a more semantically defined enumeration,
     * with the exact sign specification being relegated to the newly
     * introduced 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     */
    type?: TrafficSign_SupplementarySign_Classification_Type | undefined;
    /**
     * Additional value(s) associated with the traffic sign, e.g.
     * length, mass or starting time in time range.
     *
     * \note Field need not be set if traffic sign type does not require
     * it.
     *
     * \note OSI uses singular instead of plural for repeated field
     * names.
     */
    value?: TrafficSignValue[] | undefined;
    /**
     * The IDs of the lanes that the sign is assigned to.
     * May be multiple if the sign is valid for multiple lanes.
     *
     * \note OSI uses singular instead of plural for repeated field
     * names.
     *
     * \rules
     * refers_to: Lane
     * \endrules
     */
    assigned_lane_id?: Identifier[] | undefined;
    /**
     * This enumerator indicates a traffic actor (e.g.
     * bikes, cars, trucks and so on), that the supplementary sign
     * makes reference to.
     *
     * \attention Deprecated: A revision is planned for version 4.0.0 to
     * replace the type enum with a more semantically defined enumeration,
     * with the exact sign specification being relegated to the newly
     * introduced 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     */
    actor?: TrafficSign_SupplementarySign_Classification_Actor[] | undefined;
    /**
     * A direction arrow shown on the supplementary sign.
     *
     * \attention Deprecated: A revision is planned for version 4.0.0 to
     * replace the type enum with a more semantically defined enumeration,
     * with the exact sign specification being relegated to the newly
     * introduced 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     */
    arrow?: TrafficSign_SupplementarySign_Classification_Arrow[] | undefined;
    /**
     * Boolean flag to indicate that the supplementary traffic sign is taken out of service.
     * This can be achieved by visibly crossing the sign or covering it completely.
     */
    is_out_of_service?: boolean | undefined;
    /**
     * Country specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * Country is specified using the ISO 3166-1, alpha-2 code
     * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2, or the
     * special OpenDRIVE country for generic signs.<br>
     */
    country?: string | undefined;
    /**
     * Revision specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * The year the traffic rules came into force. <br>
     * e.g. "2017"
     */
    country_revision?: string | undefined;
    /**
     * Code specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * Code identifier according to country and country revision,
     * corresponds to the type field of OpenDRIVE. <br>
     * code is only unique in combination with #country and #country_revision.  <br>
     * e.g. http://www.vzkat.de/2017/VzKat.htm
     */
    code?: string | undefined;
    /**
     * Sub-code specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * Sub-code identifier according to country, country revision and code,
     * corresponds to the subtype field of OpenDRIVE. <br>
     * sub_code is only unique in combination with #country, #country_revision,
     * and #code.  <br>
     * e.g. http://www.vzkat.de/2017/VzKat.htm
     */
    sub_code?: string | undefined;
    /**
     * Assignment of this object to logical lanes.
     *
     * \note OSI uses singular instead of plural for repeated field
     * names.
     */
    logical_lane_assignment?: LogicalLaneAssignment[] | undefined;
}
/**
 * Definition of supplementary sign types.
 *
 * For general supplementary signs use \c #TYPE_TEXT.
 * Supplementary signs with general space restrictions use \c
 * #TYPE_SPACE. Supplementary signs with general time restrictions
 * use \c #TYPE_TIME. Supplementary signs with displayed arrow
 * directions use \c #TYPE_ARROW. Supplementary signs constraint to
 * one type of actors use \c #TYPE_CONSTRAINED_TO. Supplementary
 * signs that will exclude one type of actors use \c #TYPE_EXCEPT.
 * If supplementary signs combine contraints, restrictions, or plain
 * text, \c Type is used in descending order in the following
 * sequence: \c #TYPE_EXCEPT, \c #TYPE_CONSTRAINED_TO, \c
 * #TYPE_ARROW, \c #TYPE_TIME, \c #TYPE_SPACE, \c #TYPE_TEXT.
 *
 * \attention Deprecated: A revision is planned for version 4.0.0 to
 * replace the type enum with a more semantically defined enumeration,
 * with the exact sign specification being relegated to the newly
 * introduced 4-tupel traffic sign catalog specification as used in
 * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
 */
declare enum TrafficSign_SupplementarySign_Classification_Type {
    /**
     * UNKNOWN - Type of supplementary sign is unknown (must not be used in
     * ground truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) type of supplementary sign. */
    OTHER = 1,
    /**
     * NO_SIGN - There is no supplementary sign (must not be used in ground
     * truth).
     */
    NO_SIGN = 2,
    /**
     * TEXT - Text sign.
     * \n
     * Use it as a canvas for text-only signs:
     * - Use \c TrafficSignValue::value to indicate a numerical
     * value indicated on the sign. Accompany this value with an
     * indication of its unit of measure given by \c
     * TrafficSignValue::value_unit.
     * - Use \c TrafficSignValue::text to indicate a string of text
     * indicated on the sign.
     *
     * The following table summarizes possible configurations for
     * this kind of supplementary signs:
     *
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <th>
     * Image
     * </th>
     * <th>
     * StVO-No.
     * </th>
     * <th>
     * \c TrafficSignValue::text
     * </th>
     * <th>
     * Meaning and Remarks
     * </th>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-30.png
     * </td>
     * <td>
     * StVO 1007-30  (StVO 2017)
     * \anchor OIL_TEXT
     * </td>
     * <td>
     * &rdquo;&Ouml;lspur&rdquo;
     * </td>
     * <td>
     * Trail of oil hazard.
     * <br>
     * \note The identifier "StVO 1007-30" is currently used to
     * denote the hazard of oil trails. Prior to the edition of
     * 2017 of the Catalog of Street Signs of the Federal Road
     * Research Institute of Germany - BASt, it was used to denote a
     * restriction of the validity of the traffic sign to snowy /
     * icy conditions.
     * See \c #TYPE_SNOW.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-31.png
     * </td>
     * <td>
     * StVO 1007-31
     * </td>
     * <td>
     * "Rauch"
     * </td>
     * <td>
     * Smoke hazard.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-32.png
     * </td>
     * <td>
     * StVO 1007-32
     * </td>
     * <td>
     * "Rollsplitt"
     * </td>
     * <td>
     * Loose gravel hazard.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-33.png
     * </td>
     * <td>
     * StVO 1007-33
     * </td>
     * <td>
     * "Baustellenausfahrt"
     * </td>
     * <td>
     * Construction site exit.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-34.png
     * </td>
     * <td>
     * StVO 1007-34
     * </td>
     * <td>
     * &rdquo;Stra&szlig;enschaden&rdquo;
     * </td>
     * <td>
     * Damaged roadway.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-35.png
     * </td>
     * <td>
     * StVO 1007-35
     * </td>
     * <td>
     * "Verschmutzte Fahrbahn"
     * </td>
     * <td>
     * Dirty roadway.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-36.png
     * </td>
     * <td>
     * StVO 1007-36
     * </td>
     * <td>
     * "Sprengarbeiten"
     * </td>
     * <td>
     * Blasting.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-37.png
     * </td>
     * <td>
     * StVO 1007-37
     * </td>
     * <td>
     * "Ausfahrt"
     * </td>
     * <td>
     * Exit.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-38.png
     * </td>
     * <td>
     * StVO 1007-38
     * </td>
     * <td>
     * "Baustellen verkehr"
     * </td>
     * <td>
     * Construction vehicles traffic.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-39.png
     * </td>
     * <td>
     * StVO 1007-39
     * </td>
     * <td>
     * "fehlende Fahrbahnmarkierung"
     * </td>
     * <td>
     * Missing lane marking.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-50.png
     * </td>
     * <td>
     * StVO 1007-50
     * \anchor ACCIDENT_TEXT
     * </td>
     * <td>
     * "Unfall"
     * </td>
     * <td>
     * Accident hazard.
     * <br>
     * See \c #TYPE_ACCIDENT
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-51.png
     * </td>
     * <td>
     * StVO 1007-51
     * </td>
     * <td>
     * "Hochwasser"
     * </td>
     * <td>
     * Flood.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-52.png
     * </td>
     * <td>
     * StVO 1007-52
     * </td>
     * <td>
     * "neuer Fahrbahnbelag"
     * </td>
     * <td>
     * New road surface.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-53.png
     * </td>
     * <td>
     * StVO 1007-53
     * </td>
     * <td>
     * "Spurrinnen"
     * </td>
     * <td>
     * Wheel ruts.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-54.png
     * </td>
     * <td>
     * StVO 1007-54
     * </td>
     * <td>
     * "Linksabbieger"
     * </td>
     * <td>
     * Left-turning drivers.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-57.png
     * </td>
     * <td>
     * StVO 1007-57
     * </td>
     * <td>
     * "Kuppe"
     * </td>
     * <td>
     * Hilltop.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-58.png
     * </td>
     * <td>
     * StVO 1007-58
     * </td>
     * <td>
     * "Polizeikontrolle"
     * </td>
     * <td>
     * Police check.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-60.png
     * </td>
     * <td>
     * StVO 1007-60
     * </td>
     * <td>
     * "Seitenstreifen nicht befahrbar"
     * </td>
     * <td>
     * Side strips not passable.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-61.png
     * </td>
     * <td>
     * StVO 1007-61
     * </td>
     * <td>
     * "NEBEL"
     * </td>
     * <td>
     * Restriction of the validity of the traffic sign to foggy.
     * </td>
     * <tr>
     * <td>
     * \image html 1007-62.png
     * </td>
     * <td>
     * StVO 1007-62
     * </td>
     * <td>
     * "Zufahrt"
     * </td>
     * <td>
     * Driveway.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1008-30.png
     * </td>
     * <td>
     * StVO 1008-30
     * </td>
     * <td>
     * &rdquo;Vorfahrt ge&auml;ndert&rdquo;
     * </td>
     * <td>
     * Priority changed.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1008-31.png
     * </td>
     * <td>
     * StVO 1008-31
     * </td>
     * <td>
     * &rdquo;Verkehrsf&uuml;hrung ge&auml;ndert&rdquo;
     * </td>
     * <td>
     * Routing changed.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1008-32.png
     * </td>
     * <td>
     * StVO 1008-32
     * </td>
     * <td>
     * "Industriegebiet Schienenfahrzeuge haben Vorweg"
     * </td>
     * <td>
     * Industrial area (rail traffic has priority).
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1008-33.png
     * </td>
     * <td>
     * StVO 1008-33
     * </td>
     * <td>
     * "Hafengebiet Schienenfahrzeuge haben Vorweg"
     * </td>
     * <td>
     * Port area (rail traffic has priority).
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1008-34.png
     * </td>
     * <td>
     * StVO 1008-34
     * </td>
     * <td>
     * &rdquo;keine Wendem&ouml;glichkeit&rdquo;
     * </td>
     * <td>
     * No turning possibility.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-30n.png
     * </td>
     * <td>
     * StVO 1012-30 (StVO 2017)
     * </td>
     * <td>
     * "Ladezone"
     * </td>
     * <td>
     * Loading zone.
     * \anchor LOADING_ZONE_TEXT
     * \note The identifier "StVO 1012-30" is currently used to
     * denote a loading zone. Prior to the edition of 2017 of
     * the Catalog of Street Signs of the Federal Road Research
     * Institute of Germany - BASt, it was used to denote
     * the beginning of the validity of regulation prescribed by
     * the \c MainSign.
     * See [\c Begin](\ref BEGIN_TEXT).
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-30a.png
     * </td>
     * <td>
     * StVO 1012-30
     * </td>
     * <td>
     * "Anfang"
     * </td>
     * <td>
     * Begin
     * \anchor BEGIN_TEXT
     * \note The identifier "StVO 1012-30" is currently used to
     * denote a loading zone. Prior to the edition of 2017 of
     * the Catalog of Street Signs of the Federal Road Research
     * Institute of Germany - BASt, it was used to denote
     * the beginning of the validity of regulation prescribed by
     * the \c MainSign.
     * See [\c Loading zone](\ref LOADING_ZONE_TEXT).
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-31.png
     * </td>
     * <td>
     * StVO 1012-31
     * </td>
     * <td>
     * "Ende"
     * </td>
     * <td>
     * End.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-34.png
     * </td>
     * <td>
     * StVO 1012-34
     * </td>
     * <td>
     * &rdquo;Gr&uuml;ne Welle bei XX km/h&rdquo;
     * </td>
     * <td>
     * All green signals ("green wave") at certain speed.
     * <br>
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit (e.g. km/h) to indicate the
     * speed.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-35.png
     * </td>
     * <td>
     * StVO 1012-35
     * </td>
     * <td>
     * "bei Rot hier halten"
     * </td>
     * <td>
     * Stop at red light.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-36.png
     * </td>
     * <td>
     * StVO 1012-36
     * \anchor NOISE_PROTECTION_TEXT
     * </td>
     * <td>
     * &rdquo;L&auml;rmschutz&rdquo;
     * </td>
     * <td>
     * Noise protection.
     * <br>
     * See also:
     * [\c Noise protection with time limit](\ref NOISE_PROTECTION2)
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-37.png
     * </td>
     * <td>
     * StVO 1012-37
     * </td>
     * <td>
     * "Zuflussregelung"
     * </td>
     * <td>
     * Inflow regulation.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-38.png
     * </td>
     * <td>
     * StVO 1012-38
     * </td>
     * <td>
     * "Nebenstrecke"
     * </td>
     * <td>
     * Secondary route.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-50.png
     * </td>
     * <td>
     * StVO 1012-50
     * </td>
     * <td>
     * "Schule"
     * </td>
     * <td>
     * School.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-51.png
     * </td>
     * <td>
     * StVO 1012-51
     * </td>
     * <td>
     * "Kindergarten"
     * </td>
     * <td>
     * Kindergarten.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-52.png
     * </td>
     * <td>
     * StVO 1012-52
     * </td>
     * <td>
     * "Altenheim"
     * </td>
     * <td>
     * Retirement home.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-53.png
     * </td>
     * <td>
     * StVO 1012-53
     * </td>
     * <td>
     * "Krankenhaus"
     * </td>
     * <td>
     * Hospital.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1013-50.png
     * </td>
     * <td>
     * StVO 1013-50
     * </td>
     * <td>
     * "Seitenstreifen befahren"
     * </td>
     * <td>
     * Driving on side stripes.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1013-51.png
     * </td>
     * <td>
     * StVO 1013-51
     * </td>
     * <td>
     * &rdquo;Seitenstreifen r&auml;umen&rdquo;
     * </td>
     * <td>
     * Vacate side stripes.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1014-50.png
     * </td>
     * <td>
     * StVO 1014-50
     * </td>
     * <td>
     * A letter among B,C,D or E
     * </td>
     * <td>
     * Tunnel category according to ADR agreement.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1028-31.png
     * </td>
     * <td>
     * StVO 1028-31
     * </td>
     * <td>
     * "bis Baustelle frei"
     * </td>
     * <td>
     * Exception up to construction site.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1053-30.png
     * </td>
     * <td>
     * StVO 1053-30
     * </td>
     * <td>
     * &rdquo;Parken in gekennzeichneten Fl&auml;chen erlaubt&rdquo;
     * </td>
     * <td>
     * Parking in marked areas allowed.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1053-31.png
     * </td>
     * <td>
     * StVO 1053-31
     * </td>
     * <td>
     * "mit Parkschein"
     * </td>
     * <td>
     * With parking ticket.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1053-32.png
     * </td>
     * <td>
     * StVO 1053-32
     * </td>
     * <td>
     * &rdquo;geb&uuml;hrenpflichtig&rdquo;
     * </td>
     * <td>
     * Fees apply.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1053-34.png
     * </td>
     * <td>
     * StVO 1053-34
     * </td>
     * <td>
     * "auf dem Seitenstreifen"
     * </td>
     * <td>
     * On the shoulder.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1053-36.png
     * </td>
     * <td>
     * StVO 1053-36
     * </td>
     * <td>
     * "Durchgangsverkehr"
     * </td>
     * <td>
     * Transit traffic.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1053-52.png
     * </td>
     * <td>
     * StVO 1053-52
     * </td>
     * <td>
     * &rdquo;nur innerhalb gekennzeichneter Parkfl&auml;chen&rdquo;
     * </td>
     * <td>
     * Only within marked parking areas.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1053-53.png
     * </td>
     * <td>
     * StVO 1053-53
     * </td>
     * <td>
     * &rdquo;Parken mit Parkschein in gekennzeichneter
     * fl&auml;chen&rdquo;
     * </td>
     * <td>
     * Parking with parking permit in marked areas.
     * </td>
     * </tr>
     * </table>
     */
    TEXT = 41,
    /**
     * SPACE - Text sign with distance indication.
     * \n
     * Use it as a canvas for text signs that make reference to a
     * point or area in space:
     * - Use \c TrafficSignValue::value to include the distance
     * indicated in the sign. Accompany this value with an
     * indication of its unit of measure given by \c
     * TrafficSignValue::value_unit (e.g. m),
     * - Use \c TrafficSignValue::text to indicate the sign's
     * specific text,
     *
     * The following table summarizes possible configurations for
     * this kind of supplementary signs:
     *
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <th>
     * Image
     * </th>
     * <th>
     * StVO-No.
     * </th>
     * <th>
     * \c TrafficSignValue member(s)
     * </th>
     * <th>
     * Meaning and Remarks
     * </th>
     * </tr>
     * <tr>
     * <td>
     * \image html 1004-32.png
     * </td>
     * <td>
     * StVO 1004-32
     * </td>
     * <td>
     * "STOP" + distance
     * </td>
     * <td>
     * Stop in e.g. ... m
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1005-30.png
     * </td>
     * <td>
     * StVO 1005-30
     * </td>
     * <td>
     * &rdquo;Rei&szlig;verschluss erst in&rdquo; + distance
     * </td>
     * <td>
     * Zipper merge in e.g. ... m
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-59.png
     * </td>
     * <td>
     * StVO 1007-59
     * </td>
     * <td>
     * "Ende Seitenstreifen in" + distance
     * </td>
     * <td>
     * End of the side strip in e.g. ... m
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1013-52.png
     * </td>
     * <td>
     * StVO 1013-52
     * </td>
     * <td>
     * "Ende in" + distance
     * </td>
     * <td>
     * End in .. m
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1028-33.png
     * </td>
     * <td>
     * StVO 1028-33
     * </td>
     * <td>
     * "Zufahrt bis frei" + distance or location
     * </td>
     * <td>
     * Except up to ...
     * <br>
     * If there is a prohibition for all vehicles, the street can
     * still be used up to a certain point. To indicate the point,
     * use one of the following alternatives:
     * - A numerical value described by \c TrafficSignValue::value
     * and \c TrafficSignValue::value_unit (e.g. m) to indicate
     * the point as a distance from the sign.
     * - A text described by \c TrafficSignValue::text in order to
     * describe the point's location verbally, e.g. "Baugebiet ...".
     * </td>
     * </tr>
     * </table>
     */
    SPACE = 39,
    /**
     * TIME - Text sign with time indication.
     * \n
     * Use it as a canvas for text signs that make:
     * reference to a point in time or a time range.
     * - Use one or more \c TrafficSignValue messages to include
     * the times indicated in the sign. Accompany each value with an
     * indication of its unit of measure given by \c
     * TrafficSignValue::value_unit, e.g. h.
     * - For each \c TrafficSignValue, \c TrafficSignValue::value
     * indicates the time elapsed since midnight every day.
     * - Use the \c TrafficSignValue::text member of the
     * first \c TrafficSignValue message to indicate the sign's
     * specific text.
     *
     * \note
     * - Time interval need two \c TrafficSignValue messages,
     * one to indicate their start and one to indicate their end.
     * - In case more than one time range is required, the
     * \c TrafficSignValue::value member of the first \c
     * TrafficSignValue message is interpreted as the beginning of
     * the first interval, the \c TrafficSignValue::value member of
     * the second \c TrafficSignValue message is interpreted as the
     * end of the first interval, and so on.
     *
     * The following table summarizes possible configurations for
     * this kind of supplementary signs:
     *
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <th>
     * Image
     * </th>
     * <th>
     * StVO-No.
     * </th>
     * <th>
     * \c TrafficSignValue member(s)
     * </th>
     * <th>
     * Meaning and Remarks
     * </th>
     * </tr>
     * <tr>
     * <td>
     * \image html 1040-30.png
     * </td>
     * <td>
     * StVO 1040-30
     * </td>
     * <td>
     * Time range
     * </td>
     * <td>
     * Time range for validity of traffic sign.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1040-31.png
     * </td>
     * <td>
     * StVO 1040-31
     * \anchor StVO_1040-31
     * </td>
     * <td>
     * Two time ranges
     * </td>
     * <td>
     * Time range for validity of traffic sign - two ranges.
     * <br>
     * For each time range, include a pair of \c TrafficSignValue
     * messages according to the [\c rules above](\ref TYPE_TIME).
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1040-34.png
     * </td>
     * <td>
     * StVO 1040-34
     * </td>
     * <td>
     * "ab" + Date + Time of the day
     * </td>
     * <td>
     * Restricted from point in time.
     * <br>
     * - Use three \c TrafficSignValue messages to indicate
     * respectively the day of the month, the month of the year,
     * and the hour of the day corresponding to the start of the
     * restriction.
     * - The first two \c TrafficSignValue::value_unit should be
     * set to \c TrafficSignValue::UNIT_NO_UNIT.
     * - For the last \c TrafficSignValue, \c
     * TrafficSignValue::value indicates the time elapsed since
     * midnight of the corresponding day, and \c
     * TrafficSignValue::value_unit indicates the unit this time is
     * expressed in, e.g. in min.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1040-35.png
     * </td>
     * <td>
     * StVO 1040-35
     * \anchor NOISE_PROTECTION2
     * </td>
     * <td>
     * &rdquo;L&auml;rmschutz&rdquo; + time range
     * </td>
     * <td>
     * Noise protection with time limit.
     * <br>
     * See [\c Noise protection](\ref NOISE_PROTECTION_TEXT).
     * </tt>
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1040-36.png
     * </td>
     * <td>
     * StVO 1040-36
     * </td>
     * <td>
     * "Schulweg" + time range
     * </td>
     * <td>
     * Way to or from school with time limit.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-30.png
     * </td>
     * <td>
     * StVO 1042-30
     * </td>
     * <td>
     * "werktags"
     * </td>
     * <td>
     * Working days.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-31.png
     * </td>
     * <td>
     * StVO 1042-31
     * \anchor StVO_1042-31
     * </td>
     * <td>
     * "werktags" + time range
     * </td>
     * <td>
     * Working days with time limit.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-32.png
     * </td>
     * <td>
     * StVO 1042-32
     * </td>
     * <td>
     * "werktags" + two time ranges
     * </td>
     * <td>
     * Restricted to working days with two time intervals.
     * <br>
     * For each time range, include a pair of \c TrafficSignValue
     * messages according to the [\c rules above](\ref TYPE_TIME).
     * <br>
     * See also: [\c Two time ranges](\ref StVO_1040-31).
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-33.png
     * </td>
     * <td>
     * StVO 1042-33
     * </td>
     * <td>
     * "Mo-Fr" + time range
     * </td>
     * <td>
     * Time range for validity of traffic sign with days of the
     * week.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-34.png
     * </td>
     * <td>
     * StVO 1042-34
     * </td>
     * <td>
     * "Di,Do,Fr" + time range
     * </td>
     * <td>
     * Tuesdays, Thursdays and Fridays with time limit.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-35.png
     * </td>
     * <td>
     * StVO 1042-35
     * </td>
     * <td>
     * "an Sonn- und Feiertagen" + time range
     * </td>
     * <td>
     * Restricted times, Sundays and public holidays only.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-36.png
     * </td>
     * <td>
     * StVO 1042-36
     * </td>
     * <td>
     * &rdquo;Schulbus werktags au&szlig;er samstags&rdquo; + two
     * time ranges
     * </td>
     * <td>
     * School bus, restricted to daytimes
     * <br>
     * For each time range, include a pair of \c
     * TrafficSignValue messages according to the
     * [\c rules above](\ref TYPE_TIME).
     * <br>
     * See also: [\c Two time ranges](\ref StVO_1040-31),
     * [\c Working days except Saturdays](\ref StVO_1042-38).
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-37.png
     * </td>
     * <td>
     * StVO 1042-37
     * </td>
     * <td>
     * "Parken Sa und So erlaubt"
     * </td>
     * <td>
     * Parking on Saturdays and Sundays allowed.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-38.png
     * </td>
     * <td>
     * StVO 1042-38
     * \anchor StVO_1042-38
     * </td>
     * <td>
     * &rdquo;werktags au&szlig;er samstags&rdquo;
     * </td>
     * <td>
     * Working days except Saturdays.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-51.png
     * </td>
     * <td>
     * StVO 1042-51
     * </td>
     * <td>
     * "Sa und So"
     * </td>
     * <td>
     * Saturdays and Sundays.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1042-53.png
     * </td>
     * <td>
     * StVO 1042-53
     * </td>
     * <td>
     * "werktags Schulweg" + time range
     * </td>
     * <td>
     * Way to or from school with time limit on working days.
     * <br>
     * See also
     * [\c Working days with time limit](\ref StVO_1042-31).
     * </td>
     * </tr>
     * </table>
     */
    TIME = 26,
    /**
     * ARROW - A supplementary sign showing a direction alone.
     * \n
     * Use together with the message \c Classification::arrow. The
     * following signs can be built:
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <th>
     * Image
     * </th>
     * <th>
     * StVO-No.
     * </th>
     * <th>
     * Meaning and Remarks
     * </th>
     * </tr>
     * <tr>
     * <td>
     * \image html 1000-13.png
     * </td>
     * <td>
     * StVO 1000-13
     * </td>
     * <td>
     * Detour sign, three-quarter circle.
     * <br>
     * Set \c Classification::arrow to \c
     * Arrow::DIRECTION_CIRCLE_90_DEG_LEFT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1000-23.png
     * </td>
     * <td>
     * StVO 1000-23
     * </td>
     * <td>
     * Detour sign, one-quarter circle.
     * <br>
     * Set \c Classification::arrow to \c
     * Arrow::DIRECTION_CIRCLE_90_DEG_RIGHT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1000-30.png
     * </td>
     * <td>
     * StVO 1000-30
     * </td>
     * <td>
     * Bidirectional traffic sideways.
     * <br>
     * Use two \c Classification::arrow messages. Set one to \c
     * Arrow::DIRECTION_DIRECT_90_DEG_RIGHT and the other one to \c
     * Arrow::DIRECTION_DIRECT_90_DEG_LEFT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1000-31.png
     * </td>
     * <td>
     * StVO 1000-31
     * </td>
     * <td>
     * Bidirectional traffic back and forth.
     * <br>
     * Use two \c Classification::arrow messages. Set one to \c
     * Arrow::DIRECTION_DIRECT_0_DEG and the other one to \c
     * Arrow::DIRECTION_DIRECT_180_DEG.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1000-34.png
     * </td>
     * <td>
     * StVO 1000-34
     * </td>
     * <td>
     * Detour sign, semicircle.
     * <br>
     * Set \c Classification::arrow to \c
     * Arrow::DIRECTION_CIRCLE_0_DEG.
     * </td>
     * </tr>
     * </table>
     */
    ARROW = 30,
    /**
     * CONSTRAINED_TO - The list of traffic actors to which the main sign's
     * regulation is constrained to.
     * \n
     * Use as many members of the \c Actor enumerator as needed to
     * denote the related traffic actors.
     *
     * The following tables summarize possible configurations for
     * this kind of supplementary signs:
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <th>
     * Image
     * </th>
     * <th>
     * StVO-No.
     * </th>
     * <th>
     * \c Actor
     * </th>
     * <th>
     * Meaning and Remarks
     * </th>
     * </tr>
     * <tr>
     * <td>
     * \image html 1000-12.png
     * </td>
     * <td>
     * StVO 1000-12
     * </td>
     * <td>
     * \c #ACTOR_PEDESTRIANS
     * </td>
     * <td>
     * Use sidewalk on left side of roadway.
     * <br>
     * Set \c Classification::arrow to \c
     * Arrow::DIRECTION_DIRECT_90_DEG_LEFT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * <!--
     * \image html 1000-22.png
     * -->
     * </td>
     * <td>
     * StVO 1000-22
     * </td>
     * <td>
     * \c #ACTOR_PEDESTRIANS
     * </td>
     * <td>
     * Use sidewalk on right side of roadway.
     * <br>
     * Set \c Classification::arrow to \c
     * Arrow::DIRECTION_DIRECT_90_DEG_RIGHT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1000-32.png
     * </td>
     * <td>
     * StVO 1000-32
     * </td>
     * <td>
     * \c #ACTOR_BICYCLES
     * </td>
     * <td>
     * Bidirectional traffic bicycles sideways.
     * <br>
     * Use two \c Classification::arrow messages. Set one to \c
     * Arrow::DIRECTION_DIRECT_90_DEG_RIGHT and the other one to \c
     * Arrow::DIRECTION_DIRECT_90_DEG_LEFT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1000-33.png
     * </td>
     * <td>
     * StVO 1000-33
     * </td>
     * <td>
     * \c #ACTOR_BICYCLES
     * </td>
     * <td>
     * Bidirectional traffic bicyclesback and forth.
     * <br>
     * Use two \c Classification::arrow messages. Set one to \c
     * Arrow::DIRECTION_DIRECT_0_DEG and the other one to \c
     * Arrow::DIRECTION_DIRECT_180_DEG.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-50.png
     * </td>
     * <td>
     * StVO 1010-50
     * </td>
     * <td>
     * \c #ACTOR_MOTORIZED_MULTITRACK_VEHICLES
     * </td>
     * <td>
     * Motorized multi-track vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-51.png
     * </td>
     * <td>
     * StVO 1010-51
     * </td>
     * <td>
     * \c #ACTOR_TRUCKS
     * </td>
     * <td>
     * Trucks.
     * \note
     * - In the German StVO, trucks are defined as motorized
     * vehicles that are heavier than 3.5 t.
     * - This supplementary sign also denotes the trucks' tractor
     * units and trailers.
     * - Cars and buses with a total weight superior to 3.5 t are
     * not denoted by this. sign.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-52.png
     * </td>
     * <td>
     * StVO 1010-52
     * </td>
     * <td>
     * \c #ACTOR_BICYCLES
     * </td>
     * <td>
     * Bicycles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-53.png
     * </td>
     * <td>
     * StVO 1010-53
     * </td>
     * <td>
     * \c #ACTOR_PEDESTRIANS
     * </td>
     * <td>
     * Pedestrians.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-54.png
     * </td>
     * <td>
     * StVO 1010-54
     * </td>
     * <td>
     * \c #ACTOR_HORSE_RIDERS
     * </td>
     * <td>
     * Horse riders.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-55.png
     * </td>
     * <td>
     * StVO 1010-55
     * </td>
     * <td>
     * \c #ACTOR_CATTLE
     * </td>
     * <td>
     * Cattles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-56.png
     * </td>
     * <td>
     * StVO 1010-56
     * </td>
     * <td>
     * \c #ACTOR_TRAMS
     * </td>
     * <td>
     * Trams.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-57.png
     * </td>
     * <td>
     * StVO 1010-57
     * </td>
     * <td>
     * \c #ACTOR_BUSES
     * </td>
     * <td>
     * Buses.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-58.png
     * </td>
     * <td>
     * StVO 1010-58
     * </td>
     * <td>
     * \c #ACTOR_CARS
     * </td>
     * <td>
     * Passenger cars.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-59.png
     * </td>
     * <td>
     * StVO 1010-59
     * </td>
     * <td>
     * \c #ACTOR_CARS_WITH_TRAILERS
     * </td>
     * <td>
     * Passenger cars with trailers.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-60.png
     * </td>
     * <td>
     * StVO 1010-60
     * </td>
     * <td>
     * \c #ACTOR_TRUCKS_WITH_TRAILERS
     * </td>
     * <td>
     * Trucks with trailers.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-61.png
     * </td>
     * <td>
     * StVO 1010-61
     * </td>
     * <td>
     * \c #ACTOR_TRACTORS
     * </td>
     * <td>
     * Tractors.
     * \note In the German StVO, tractors are defined as motorized
     * vehicles that are not allowed to, or cannot, drive faster
     * than 25 km/h.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-62.png
     * </td>
     * <td>
     * StVO 1010-62
     * </td>
     * <td>
     * \c #ACTOR_MOTORCYCLES
     * </td>
     * <td>
     * Motorbikes.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-63.png
     * </td>
     * <td>
     * StVO 1010-63
     * </td>
     * <td>
     * \c #ACTOR_MOPEDS
     * </td>
     * <td>
     * Mopeds.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-64.png
     * </td>
     * <td>
     * StVO 1010-64
     * </td>
     * <td>
     * \c #ACTOR_HORSE_CARRIAGES
     * </td>
     * <td>
     * Horse carriages.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-65.png
     * </td>
     * <td>
     * StVO 1010-65
     * </td>
     * <td>
     * \c #ACTOR_EBIKES
     * </td>
     * <td>
     * E-bikes.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-66.png
     * </td>
     * <td>
     * StVO 1010-66
     * </td>
     * <td>
     * \c #ACTOR_ELECTRIC_VEHICLES
     * </td>
     * <td>
     * Electric vehicles.
     * <br>
     * See also: [\c StVO 1050-33](\ref EV_T).
     * \anchor EV_I
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-67.png
     * </td>
     * <td>
     * StVO 1010-67
     * </td>
     * <td>
     * \c #ACTOR_CAMPERS
     * </td>
     * <td>
     * Campers.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-32.png
     * </td>
     * <td>
     * StVO 1012-32
     * </td>
     * <td>
     * \c #ACTOR_BICYCLES
     * </td>
     * <td>
     * Cyclists must walk.
     * <br>
     * Set \c TrafficSignValue::text as "absteigen".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1049-11.png
     * </td>
     * <td>
     * StVO 1049-11
     * </td>
     * <td>
     * \c #ACTOR_TRACTORS
     * </td>
     * <td>
     * Overtaking of tractors allowed.
     * <br>
     * Set \c TrafficSignValue::text as
     * &rdquo;d&uuml;rfen &uuml;berholt werden&rdquo;.
     * \note In the German StVO, tractors are defined as motorized
     * vehicles that are not allowed to, or cannot, drive faster
     * than 25 km/h.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1050-30.png
     * </td>
     * <td>
     * StVO 1050-30
     * </td>
     * <td>
     * \c #ACTOR_TAXIS
     * </td>
     * <td>
     * Taxis.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1050-31.png
     * </td>
     * <td>
     * StVO 1050-31
     * </td>
     * <td>
     * \c #ACTOR_TAXIS
     * </td>
     * <td>
     * A number of taxis.
     * <br>
     * Use \c TrafficSignValue::value to indicate the number of
     * taxis. Set \c TrafficSignValue::value_unit to \c
     * TrafficSignValue::UNIT_NO_UNIT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1050-32.png
     * </td>
     * <td>
     * StVO 1050-32
     * </td>
     * <td>
     * \c #ACTOR_ELECTRIC_VEHICLES
     * </td>
     * <td>
     * Electric vehicles during the charging process.
     * <br>
     * Set \c TrafficSignValue::text as &rdquo;w&auml;hrend des
     * Ladevorgangs&rdquo;.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1050-33.png
     * </td>
     * <td>
     * StVO 1050-33
     * </td>
     * <td>
     * \c #ACTOR_ELECTRIC_VEHICLES
     * </td>
     * <td>
     * Electric vehicles.
     * <br>
     * See also: [\c StVO 1010-66](\ref EV_I).
     * \anchor EV_T
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1060-32.png
     * </td>
     * <td>
     * StVO 1060-32
     * </td>
     * <td>
     * Two actors \c #ACTOR_BUSES and \c #ACTOR_CARS_WITH_TRAILERS.
     * </td>
     * <td>
     * Buses and cars with trailers.
     * <br>
     * Set \c TrafficSignValue::text as "auch".
     * </td>
     * </tr>
     * </table>
     *
     * Also, some of the German StVO traffic signs denoting traffic
     * actors for which the main sign's regulation applies
     * exclusively can be constructed.
     *
     * \note
     * In the German StVO, these signs typically include the word
     * "Nur".
     *
     * <table cellspacing="0" ellpadding="0">
     * <tr>
     * <th>
     * Image
     * </th>
     * <th>
     * StVO-No.
     * </th>
     * <th>
     * \c
     * Actor
     * </th>
     * <th>
     * Meaning and Remarks
     * </th>
     * </tr>
     * <tr>
     * <td>
     * \image html 1044-10.png
     * </td>
     * <td>
     * StVO 1044-10
     * </td>
     * <td>
     * \c #ACTOR_DISABLED_PERSONS
     * </td>
     * <td>
     * Only disabled persons with an exceptional walking disability
     * and blind persons.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1044-11.png
     * </td>
     * <td>
     * StVO 1044-11
     * </td>
     * <td>
     * \c #ACTOR_DISABLED_PERSONS
     * </td>
     * <td>
     * Only disabled persons with parking permit.
     * <br>
     * Set \c TrafficSignValue::text as "mit Parkausweis
     * Nr. XXXX".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1044-12.png
     * </td>
     * <td>
     * StVO 1044-12
     * </td>
     * <td>
     * \c#ACTOR_DISABLED_PERSONS
     * </td>
     * <td>
     * Only disabled persons with an exceptional walking disability
     * and blind persons, with number of parking places.
     * <br>
     * Use \c TrafficSignValue::value to indicate the number of
     * parking places. Set \c TrafficSignValue::value_unit to \c
     * TrafficSignValue::UNIT_NO_UNIT. Set \c
     * TrafficSignValue::text as &rdquo;Parkst&auml;nde&rdquo;.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1044-30.png
     * </td>
     * <td>
     * StVO 1044-30
     * </td>
     * <td>
     * \c #ACTOR_RESIDENTS
     * </td>
     * <td>
     * Only residents with parking permit.
     * <br>
     * Set \c TrafficSignValue::text as "mit Parkausweis Nr. XXXX".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1048-14.png
     * </td>
     * <td>
     * StVO 1048-14
     * </td>
     * <td>
     * \c #ACTOR_TRUCKS_WITH_SEMITRAILERS
     * </td>
     * <td>
     * Only trucks with semi-trailers.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1048-15.png
     * </td>
     * <td>
     * StVO 1048-15
     * </td>
     * <td>
     * Two actors: one set to \c #ACTOR_TRUCKS_WITH_SEMITRAILERS
     * and the other one set to \c #ACTOR_TRUCKS_WITH_TRAILERS.
     * </td>
     * <td>
     * Only trucks with trailers and trucks with semi-trailers.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1048-18.png
     * </td>
     * <td>
     * StVO 1048-18
     * </td>
     * <td>
     * \c #ACTOR_RAILROAD_TRAFFIC
     * </td>
     * <td>
     * Only railroad traffic.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1048-20.png
     * </td>
     * <td>
     * StVO 1048-20
     * </td>
     * <td>
     * Two actors: one set to \c #ACTOR_CARS_WITH_TRAILERS
     * and the other one set to \c #ACTOR_TRUCKS.
     * </td>
     * <td>
     * Only trucks with trailers and trucks with semi-trailers.
     * \note
     * - In the German StVO, trucks are defined as motorized
     * vehicles that are heavier than 3.5 t.
     * - This supplementary sign also denotes the trucks'
     * tractor units and trailers.
     * - This supplementary sign excludes passenger cars and
     * buses.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1049-12.png
     * </td>
     * <td>
     * StVO 1049-12
     * </td>
     * <td>
     * \c #ACTOR_MILITARY_VEHICLES
     * </td>
     * <td>
     * Only military vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1049-13.png
     * </td>
     * <td>
     * StVO 1049-13
     * </td>
     * <td>
     * Three actors, set to respectively \c #ACTOR_TRUCKS, \c
     * #ACTOR_BUSES and \c #ACTOR_CARS_WITH_TRAILERS.
     * </td>
     * <td>
     * Only trucks, buses, passenger cars with trailers.
     * <br>
     * \note
     * - In the German StVO, trucks are defined as motorized
     * vehicles that are heavier than 3.5 t.
     * - This supplementary sign also denotes the trucks' tractor
     * units and trailers.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1052-30.png
     * </td>
     * <td>
     * StVO 1052-30
     * </td>
     * <td>
     * \c #ACTOR_HAZARDOUS_GOODS_VEHICLES
     * </td>
     * <td>
     * Only hazardous goods vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1052-31.png
     * </td>
     * <td>
     * StVO 1052-31
     * </td>
     * <td>
     * \c #ACTOR_WATER_POLLUTANT_VEHICLES
     * </td>
     * <td>
     * Only water pollutant vehicles.
     * </td>
     * </tr>
     * </table>
     *
     * In addition, some of the German StVO supplementary signs
     * with actors that receive an explicit allowance to use
     * the street or the shoulder can be constructed:
     * <table cellspacing="0" ellpadding="0">
     * <tr>
     * <th>
     * Image
     * </th>
     * <th>
     * StVO-No.
     * </th>
     * <th>
     * \c Actor
     * </th>
     * <th>
     * Meaning and Remarks
     * </th>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-10.png
     * </td>
     * <td>
     * StVO 1010-10
     * </td>
     * <td>
     * \c #ACTOR_CHILDREN
     * </td>
     * <td>
     * Children playing on the road and shoulder allowed.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-11.png
     * </td>
     * <td>
     * StVO 1010-11
     * </td>
     * <td>
     * \c #ACTOR_WINTER_SPORTSPEOPLE
     * </td>
     * <td>
     * Winter sports allowed.
     * <br>
     * Use \c TrafficSignValue::value to indicate the number
     * of taxis.
     * Set \c TrafficSignValue::value_unit to \c
     * TrafficSignValue::UNIT_NO_UNIT.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-12.png
     * </td>
     * <td>
     * StVO 1010-12
     * </td>
     * <td>
     * \c#ACTOR_TRAILERS
     * </td>
     * <td>
     * Trailers allowed.
     * \note In the German StVO, this sign states that Trailers can
     * park here without the usual two week temporal parking
     * restriction.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1010-13.png
     * </td>
     * <td>
     * StVO 1010-13
     * </td>
     * <td>
     * \c #ACTOR_CARAVANS
     * </td>
     * <td>
     * Caravans allowed.
     * \note In the German StVO, this sign states that Caravans can
     * park here without the usual two week temporal parking
     * restriction.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1040-10.png
     * </td>
     * <td>
     * StVO 1040-10
     * </td>
     * <td>
     * \c #ACTOR_WINTER_SPORTSPEOPLE
     * </td>
     * <td>
     * Winter sports within time range allowed.
     * <br>
     * In order to indicate an allowance limited by a time period,
     * use one \c TrafficSignValue message to indicate its start and
     * one \c TrafficSignValue message to indicate its end. For
     * each \c TrafficSignValue, \c TrafficSignValue::value
     * indicates the time elapsed since midnight every day, and \c
     * TrafficSignValue::value_unit indicates the unit this time is
     * expressed in, e.g. in min.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-55.png
     * </td>
     * <td>
     * StVO 1007-55
     * </td>
     * <td>
     * \c #ACTOR_WINTER_SPORTSPEOPLE
     * </td>
     * <td>
     * Ski run crosses.
     * <br>
     * Set \c TrafficSignValue::text as "kreuzt".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1007-56.png
     * </td>
     * <td>
     * StVO 1007-56
     * </td>
     * <td>
     * \c #ACTOR_WINTER_SPORTSPEOPLE
     * </td>
     * <td>
     * Ski trail.
     * <br>
     * Set \c TrafficSignValue::text as "kreuzt".
     * </td>
     * </tr>
     * </table>
     *
     * Finally, the signs
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1006-30.png
     * </td>
     * <td>
     * StVO
     * 1006-30
     * </td>
     * <td>
     * \c #ACTOR_CARS_WITH_CARAVANS
     * </td>
     * <td>
     * Slide danger for car/caravan combinations under strong winds.
     * <br>
     * Set \c TrafficSignValue::text as "Schleudergefahr".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1012-33.png
     * </td>
     * <td>
     * StVO
     * 1012-33
     * </td>
     * <td>
     * \c #ACTOR_MOPEDS
     * </td>
     * <td>
     * No mopeds.
     * <br>
     * Set \c TrafficSignValue::text as "keine".
     * </td>
     * </tr>
     * </table>
     * can be incorporated.
     */
    CONSTRAINED_TO = 46,
    /**
     * EXCEPT - The list of traffic actors for which the main sign's
     * regulation does not apply or have a special driving
     * allowance.
     * \n
     * Use as many members of the \c Actor enumerator
     * as needed to denote the excepted traffic actors:
     *
     * \note
     * In the German StVO, these signs include the word "frei".
     *
     * The following table summarizes possible configurations for
     * this kind of supplementary signs:
     *
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <th>
     * Image
     * </th>
     * <th>
     * StVO-No.
     * </th>
     * <th>
     * \c Actor
     * </th>
     * <th>
     * Meaning and Remarks
     * </th>
     * </tr>
     * <tr>
     * <td>
     * \image html 1020-11.png
     * </td>
     * <td>
     * StVO 1020-11
     * </td>
     * <td>
     * \c #ACTOR_DISABLED_PERSONS
     * </td>
     * <td>
     * Except disabled persons with parking permit.
     * <br>
     * Set \c TrafficSignValue::text as "mit Parkausweis Nr. XXXX".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1020-12.png
     * </td>
     * <td>
     * StVO 1020-12
     * </td>
     * <td>
     * Two actors: one set to \c #ACTOR_BICYCLES and the other one
     * set to \c #ACTOR_RESIDENTS.
     * </td>
     * <td>
     * Except cyclists and residents.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1020-14.png
     * </td>
     * <td>
     * StVO 1020-14
     * </td>
     * <td>
     * \c #ACTOR_WINTER_SPORTSPEOPLE
     * </td>
     * <td>
     * Except winter sportspeople.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1020-30.png
     * </td>
     * <td>
     * StVO 1020-30
     * </td>
     * <td>
     * \c #ACTOR_RESIDENTS
     * </td>
     * <td>
     * Except residents.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1020-31.png
     * </td>
     * <td>
     * StVO 1020-31
     * </td>
     * <td>
     * \c #ACTOR_RESIDENTS
     * </td>
     * <td>
     * Except residents or free parking.
     * </td>
     * <br>
     * Set \c TrafficSignValue::text as "oder Parken".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1020-32.png
     * </td>
     * <td>
     * StVO 1020-32
     * </td>
     * <td>
     * \c #ACTOR_RESIDENTS
     * </td>
     * <td>
     * Except residents with parking permit.
     * <br>
     * Set \c TrafficSignValue::text as "mit Parkausweis Nr. XXXX".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1022-10.png
     * </td>
     * <td>
     * StVO 1022-10
     * </td>
     * <td>
     * \c #ACTOR_BICYCLES
     * </td>
     * <td>
     * Except bicycles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1022-11.png
     * </td>
     * <td>
     * StVO 1022-11
     * </td>
     * <td>
     * \c #ACTOR_MOPEDS
     * </td>
     * <td>
     * Except mopeds.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1022-12.png
     * </td>
     * <td>
     * StVO 1022-12
     * </td>
     * <td>
     * \c #ACTOR_MOTORCYCLES
     * </td>
     * <td>
     * Except motorcycles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1022-13.png
     * </td>
     * <td>
     * StVO 1022-13
     * </td>
     * <td>
     * \c #ACTOR_EBIKES
     * </td>
     * <td>
     * Except e-bikes.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1022-14.png
     * </td>
     * <td>
     * StVO 1022-14
     * </td>
     * <td>
     * Two actors: one set to \c #ACTOR_BICYCLES and the other one
     * set to \c #ACTOR_MOPEDS.
     * </td>
     * <td>
     * Except bicycles and mopeds.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1022-15.png
     * </td>
     * <td>
     * StVO 1022-15
     * </td>
     * <td>
     * Two actors: one set to \c #ACTOR_EBIKES and the other one
     * set to \c #ACTOR_MOPEDS.
     * </td>
     * <td>
     * Except e-bikes and mopeds.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-10.png
     * </td>
     * <td>
     * StVO 1024-10
     * </td>
     * <td>
     * \c #ACTOR_CARS
     * </td>
     * <td>
     * Except passenger cars.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-11.png
     * </td>
     * <td>
     * StVO 1024-11
     * </td>
     * <td>
     * \c #ACTOR_CARS_WITH_TRAILERS
     * </td>
     * <td>
     * Except passenger cars with trailers.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-12.png
     * </td>
     * <td>
     * StVO 1024-12
     * </td>
     * <td>
     * \c #ACTOR_TRUCKS
     * </td>
     * <td>
     * Except trucks, their tractor unit and their trailers.
     * \note
     * - In the German StVO, trucks are defined as motorized
     * vehicles that are heavier than 3.5 t.
     * - This supplementary sign also denotes the trucks' tractor
     * units and trailers.
     * - Cars and buses with a total weight superior to 3.5 t are
     * not exempted of a rule by this sign.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-13.png
     * </td>
     * <td>
     * StVO 1024-13
     * </td>
     * <td>
     * \c #ACTOR_TRUCKS_WITH_TRAILERS
     * </td>
     * <td>
     * Except trucks with trailers.
     * \note
     * - In the German StVO, trucks are defined as motorized
     * vehicles that are heavier than 3.5 t.
     * - This supplementary sign also denotes the trucks' tractor
     * units and trailers.
     * - Cars and buses with a total weight superior to 3.5 t are
     * not exempted of a rule by this sign.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-14.png
     * </td>
     * <td>
     * StVO 1024-14
     * </td>
     * <td>
     * \c #ACTOR_BUSES
     * </td>
     * <td>
     * Except buses.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-15.png
     * </td>
     * <td>
     * StVO 1024-15
     * </td>
     * <td>
     * \c #ACTOR_RAILROAD_TRAFFIC
     * </td>
     * <td>
     * Except railroad traffic.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-16.png
     * </td>
     * <td>
     * StVO 1024-16
     * </td>
     * <td>
     * \c #ACTOR_TRAMS
     * </td>
     * <td>
     * Except trams.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-17.png
     * </td>
     * <td>
     * StVO 1024-17
     * </td>
     * <td>
     * \c #ACTOR_TRACTORS
     * </td>
     * <td>
     * Except tractors.
     * \note In the German StVO, tractors are defined as motorized
     * vehicles that are not allowed to, or cannot, drive faster
     * than 25 km/h.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-18.png
     * </td>
     * <td>
     * StVO 1024-18
     * </td>
     * <td>
     * \c #ACTOR_HORSE_CARRIAGES
     * </td>
     * <td>
     * Except horse carriages.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-19.png
     * </td>
     * <td>
     * StVO 1024-19
     * </td>
     * <td>
     * \c #ACTOR_CAMPERS
     * </td>
     * <td>
     * Except campers with a maximum allowed mass.
     * <br>
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit (e.g. t) to indicate the mass.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1024-20.png
     * </td>
     * <td>
     * StVO 1024-20
     * </td>
     * <td>
     * \c #ACTOR_ELECTRIC_VEHICLES
     * </td>
     * <td>
     * Except electric vehicles.
     * <br>
     * See also: [\c StVO 1026-61](\ref EV_EXCEPT_T).
     * \anchor EV_EXCEPT_I
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-31.png
     * </td>
     * <td>
     * StVO 1026-31
     * </td>
     * <td>
     * \c #ACTOR_BUSES
     * </td>
     * <td>
     * Except buses in occasional service.
     * <br>
     * Set \c TrafficSignValue::text as "im Gelegenheitsverkehr".
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-32.png
     * </td>
     * <td>
     * StVO 1026-32
     * </td>
     * <td>
     * \c #ACTOR_PUBLIC_TRANSPORT_VEHICLES
     * </td>
     * <td>
     * Except public transport vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-33.png
     * </td>
     * <td>
     * StVO 1026-33
     * </td>
     * <td>
     * \c #ACTOR_EMERGENCY_VEHICLES
     * </td>
     * <td>
     * Except emergency vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-34.png
     * </td>
     * <td>
     * StVO 1026-34
     * </td>
     * <td>
     * \c #ACTOR_MEDICAL_VEHICLES
     * </td>
     * <td>
     * Except medical vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-35.png
     * </td>
     * <td>
     * StVO 1026-35
     * </td>
     * <td>
     * \c #ACTOR_DELIVERY_VEHICLES
     * </td>
     * <td>
     * Except delivery vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-36.png
     * </td>
     * <td>
     * StVO 1026-36
     * </td>
     * <td>
     * \c #ACTOR_AGRICULTURAL_VEHICLES
     * </td>
     * <td>
     * Except agricultural vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-37.png
     * </td>
     * <td>
     * StVO 1026-37
     * </td>
     * <td>
     * \c #ACTOR_FORESTRY_VEHICLES
     * </td>
     * <td>
     * Except forestry vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-38.png
     * </td>
     * <td>
     * StVO 1026-38
     * </td>
     * <td>
     * Two actors: one set to \c #ACTOR_FORESTRY_VEHICLES and
     * the other one set to \c #ACTOR_AGRICULTURAL_VEHICLES.
     * </td>
     * <td>
     * Except agricultural and forestry vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-39.png
     * </td>
     * <td>
     * StVO 1026-39
     * </td>
     * <td>
     * \c #ACTOR_OPERATIONAL_AND_UTILITY_VEHICLES
     * </td>
     * <td>
     * Except operational and utility vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-60.png
     * </td>
     * <td>
     * StVO 1026-60
     * </td>
     * <td>
     * \c #ACTOR_ELECTRIC_VEHICLES
     * </td>
     * <td>
     * Except electric vehicles during the charging process.
     * <br>
     * Set \c TrafficSignValue::text as
     * &rdquo;w&auml;hrend des Ladevorgangs&rdquo;
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-61.png
     * </td>
     * <td>
     * StVO 1026-61
     * </td>
     * <td>
     * \c #ACTOR_ELECTRIC_VEHICLES
     * </td>
     * <td>
     * Except electric vehicles.
     * <br>
     * See also: [\c StVO 1024-20](\ref EV_EXCEPT_I).
     * \anchor EV_EXCEPT_T
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-62.png
     * </td>
     * <td>
     * StVO 1026-62
     * </td>
     * <td>
     * \c #ACTOR_SLURRY_TRANSPORT
     * </td>
     * <td>
     * Except slurry transport.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1026-63.png
     * </td>
     * <td>
     * StVO 1026-63
     * </td>
     * <td>
     * \c #ACTOR_EBIKES
     * </td>
     * <td>
     * Except e-bikes.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1028-30.png
     * </td>
     * <td>
     * StVO 1028-30
     * </td>
     * <td>
     * \c #ACTOR_CONSTRUCTION_VEHICLES
     * </td>
     * <td>
     * Except construction vehicles.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1028-32.png
     * </td>
     * <td>
     * StVO 1028-32
     * </td>
     * <td>
     * \c #ACTOR_RESIDENTS
     * </td>
     * <td>
     * Exception for residents up to construction site.
     * <br>
     * Set \c TrafficSignValue::text as "bis Baustelle"
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1028-34.png
     * </td>
     * <td>
     * StVO 1028-34
     * </td>
     * <td>
     * \c #ACTOR_FERRY_USERS
     * </td>
     * <td>
     * Except ferry users.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1031-50.png
     * </td>
     * <td>
     * StVO 1031-50
     * </td>
     * <td>
     * Three actors, set to respectively \c
     * #ACTOR_VEHICLES_WITH_RED_BADGES,
     * \c #ACTOR_VEHICLES_WITH_YELLOW_BADGES and \c
     * #ACTOR_VEHICLES_WITH_GREEN_BADGES
     * </td>
     * <td>
     * Vehicles with red, yellow or green badges allowed
     * \note Exemption from traffic ban according to 40(1) of the
     * Federal Immission Control Act.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1031-51.png
     * </td>
     * <td>
     * StVO 1031-51
     * </td>
     * <td>
     * Two actors, set to respectively \c
     * #ACTOR_VEHICLES_WITH_YELLOW_BADGES and \c
     * #ACTOR_VEHICLES_WITH_GREEN_BADGES
     * </td>
     * <td>
     * Vehicles with yellow or green badges allowed
     * \note Exemption from traffic ban according to 40(1) of the
     * Federal Immission Control Act.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1031-52.png
     * </td>
     * <td>
     * StVO 1031-52
     * </td>
     * <td>
     * \c #ACTOR_VEHICLES_WITH_GREEN_BADGES
     * </td>
     * <td>
     * Vehicles with green badges allowed
     * \note Exemption from traffic ban according to 40(1) of the
     * Federal Immission Control Act.
     * </td>
     * </tr>
     * </table>
     */
    EXCEPT = 45,
    /**
     * VALID_FOR_DISTANCE - Traffic sign is valid for a certain distance.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 1001-30.png "StVO 1001-30"
     * <td>
     * <!--
     * \image html 1001-31.png
     * -->
     * <td>
     * <B>
     * StVO 1001-31
     * </B>
     * <td>
     * \image html 1001-32.png "StVO 1001-32"
     * <td>
     * \image html 1001-33.png "StVO 1001-33"
     * <td>
     * \image html 1001-34.png "StVO 1001-34"
     * <td>
     * \image html 1001-35.png "StVO 1001-35"
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit (e.g. m) to indicate the
     * distance.
     */
    VALID_FOR_DISTANCE = 3,
    /**
     * PRIORITY_ROAD_BOTTOM_LEFT_FOUR_WAY - Priority road from bottom to left in the intersection.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1002-10.png
     * </td>
     * <td>
     * StVO 1002-10
     * </td>
     * </tr>
     * </table>
     */
    PRIORITY_ROAD_BOTTOM_LEFT_FOUR_WAY = 27,
    /**
     * PRIORITY_ROAD_TOP_LEFT_FOUR_WAY - Priority road from top to left in the intersection.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleY(-1)">
     * \image html 1002-10.png
     * </td>
     * <td>
     * StVO 1002-11
     * </td>
     * </tr>
     * </table>
     */
    PRIORITY_ROAD_TOP_LEFT_FOUR_WAY = 28,
    /**
     * PRIORITY_ROAD_BOTTOM_LEFT_THREE_WAY_STRAIGHT - Priority road from bottom to left, junction from above.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1002-12.png
     * </td>
     * <td>
     * StVO 1002-12
     * </td>
     * </tr>
     * </table>
     */
    PRIORITY_ROAD_BOTTOM_LEFT_THREE_WAY_STRAIGHT = 32,
    /**
     * PRIORITY_ROAD_BOTTOM_LEFT_THREE_WAY_SIDEWAYS - Priority road from bottom to left, junction from the right.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1) rotate(-90deg)">
     * \image html 1002-12.png
     * </td>
     * <td>
     * StVO 1002-13
     * </td>
     * </tr>
     * </table>
     */
    PRIORITY_ROAD_BOTTOM_LEFT_THREE_WAY_SIDEWAYS = 33,
    /**
     * PRIORITY_ROAD_TOP_LEFT_THREE_WAY_STRAIGHT - Priority road from top to left, junction from below.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleY(-1)">
     * \image html 1002-12.png
     * </td>
     * <td>
     * StVO 1002-14
     * </td>
     * </tr>
     * </table>
     */
    PRIORITY_ROAD_TOP_LEFT_THREE_WAY_STRAIGHT = 34,
    /**
     * PRIORITY_ROAD_BOTTOM_RIGHT_FOUR_WAY - Priority road from bottom to right in the intersection.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:rotate(270deg)">
     * \image html 1002-10.png
     * </td>
     * <td>
     * StVO 1002-20
     * </td>
     * </tr>
     * </table>
     */
    PRIORITY_ROAD_BOTTOM_RIGHT_FOUR_WAY = 29,
    /**
     * PRIORITY_ROAD_TOP_RIGHT_FOUR_WAY - Priority road from top to right in the intersection.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:rotate(180deg)">
     * \image html 1002-10.png
     * </td>
     * <td>
     * StVO 1002-21
     * </td>
     * </tr>
     * </table>
     */
    PRIORITY_ROAD_TOP_RIGHT_FOUR_WAY = 31,
    /**
     * PRIORITY_ROAD_BOTTOM_RIGHT_THREE_WAY_STRAIGHT - Priority road from bottom to right, junction from above.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 1002-12.png
     * </td>
     * <td>
     * StVO 1002-22
     * </td>
     * </tr>
     * </table>
     */
    PRIORITY_ROAD_BOTTOM_RIGHT_THREE_WAY_STRAIGHT = 35,
    /**
     * PRIORITY_ROAD_BOTTOM_RIGHT_THREE_WAY_SIDEWAY - Priority road from bottom to right, junction from the left.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:rotate(-90deg)">
     * \image html 1002-12.png
     * </td>
     * <td>
     * StVO 1002-23
     * </td>
     * </tr>
     * </table>
     */
    PRIORITY_ROAD_BOTTOM_RIGHT_THREE_WAY_SIDEWAY = 36,
    /**
     * PRIORITY_ROAD_TOP_RIGHT_THREE_WAY_STRAIGHT - Priority road from top to right, junction from below.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:rotate(180deg)">
     * \image html 1002-12.png
     * </td>
     * <td>
     * StVO 1002-24
     * </td>
     * </tr>
     * </table>
     */
    PRIORITY_ROAD_TOP_RIGHT_THREE_WAY_STRAIGHT = 37,
    /**
     * VALID_IN_DISTANCE - Distance to the start of validity of the traffic sign.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1004-30.png "StVO 1004-30"
     * <td>
     * \image html 1004-31.png "StVO 1004-31"
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit (e.g. m) to indicate the
     * distance.
     *
     * \note For OSI 4.0 compatibility use \c #TYPE_SPACE instead.
     */
    VALID_IN_DISTANCE = 4,
    /**
     * STOP_IN - Stop in e.g. .. m.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1004-32.png
     * </td>
     * <td>
     * StVO 1004-32
     * </td>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit (e.g. m) to indicate the
     * distance.
     *
     * \note For OSI 4.0 compatibility use \c #TYPE_SPACE instead.
     */
    STOP_IN = 25,
    /**
     * LEFT_ARROW - Direction, left-pointing.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1000-10.png
     * </td>
     * <td>
     * StVO 1000-10
     * </td>
     * </tr>
     * </table>
     *
     * \note For OSI 4.0 compatibility use \c #TYPE_ARROW instead.
     */
    LEFT_ARROW = 11,
    /**
     * LEFT_BEND_ARROW - Direction of potential danger, left-pointing.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1000-11.png
     * </td>
     * <td>
     * StVO 1000-11
     * </td>
     * </tr>
     * </table>
     *
     * \note For OSI 4.0 compatibility use \c #TYPE_ARROW instead.
     */
    LEFT_BEND_ARROW = 13,
    /**
     * RIGHT_ARROW - Direction, right-pointing.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 1000-10.png
     * </td>
     * <td>
     * StVO 1000-20
     * </td>
     * </tr>
     * </table>
     *
     * \note For OSI 4.0 compatibility use \c #TYPE_ARROW instead.
     */
    RIGHT_ARROW = 12,
    /**
     * RIGHT_BEND_ARROW - Direction of potential danger, right-pointing.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td style="transform:scaleX(-1)">
     * \image html 1000-11.png
     * </td>
     * <td>
     * StVO 1000-21
     * </td>
     * </tr>
     * </table>
     *
     * \note For OSI 4.0 compatibility use \c #TYPE_ARROW instead.
     */
    RIGHT_BEND_ARROW = 14,
    /**
     * ACCIDENT - Accident hazard.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 1006-31.png
     * </td>
     * <td>
     * StVO 1006-31
     * </td>
     * </tr>
     * </table>
     *
     * See also: [\c TYPE_TEXT](\ref ACCIDENT_TEXT).
     */
    ACCIDENT = 40,
    /**
     * SNOW - Restriction of the validity of the traffic sign to snowy /
     * icy conditions.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * <!--
     * \image html 1007-30.png
     * -->
     * </td>
     * <td>
     * StVO 1007-30
     * </td>
     * </tr>
     * </table>
     *
     * \note The identifier "StVO 1007-30" was used to denote a
     * restriction of the validity of the traffic sign to snowy /
     * icy conditions until the edition of 2013 of the official
     * Catalog of Street Signs of the Federal Road Research
     * Institute of Germany - BASt. Since the edition corresponding
     * to 2017, "StVO 1007-30" is used to denote the hazard of oil
     * trails. See [\c TYPE_OIL](\ref OIL_TEXT).
     */
    SNOW = 9,
    /**
     * FOG - Restriction of the validity of the traffic sign to foggy
     * conditions.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1007-61.png
     * </td>
     * <td>
     * StVO 1007-61
     * </td>
     * </tr>
     * </table>
     *
     * \note For OSI 4.0 compatibility use \c #TYPE_TEXT instead.
     */
    FOG = 8,
    /**
     * ROLLING_HIGHWAY_INFORMATION - Information on rolling highway.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1010-14.png
     * </td>
     * <td>
     * StVO 1010-14
     * </td>
     * </tr>
     * </table>
     */
    ROLLING_HIGHWAY_INFORMATION = 48,
    /**
     * SERVICES - Information about services.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1010-15.png
     * </td>
     * <td>
     * StVO 1010-15
     * </td>
     * </tr>
     * </table>
     */
    SERVICES = 47,
    /**
     * TIME_RANGE - Time range for validity of traffic sign.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 1040-30.png "StVO 1040-30"
     * <td>
     * \image html 1042-33.png "StVO 1042-33"
     * </tr>
     * </table>
     *
     * - Use one \c TrafficSignValue message to indicate the start
     * of the time range and one \c TrafficSignValue message to
     * indicate the end of the time range. For each \c
     * TrafficSignValue, \c TrafficSignValue::value indicates
     * the time elapsed since midnight each day, and \c
     * TrafficSignValue::value_unit indicates the unit this time is
     * expressed in, e.g. in min.
     * - If including start and end days of the week, include two
     * additional \c TrafficSignValue messages. For these messages,
     * use \c TrafficSignValue::value_unit as \c
     * TrafficSignValue::UNIT_NO_UNIT and \c
     * TrafficSignValue::value as an \c integer from 1 to 7,
     * where 1 denotes Monday and 7 denotes Sunday.
     *
     * \note For OSI 4.0 compatibility use \c #TYPE_TIME instead.
     */
    TIME_RANGE = 5,
    /**
     * PARKING_DISC_TIME_RESTRICTION - Parking disc restrictions.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1040-32.png
     * </td>
     * <td>
     * StVO 1040-32
     * </td>
     * <td>
     * Parking disc restriction
     * </td>
     * <td>
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit (e.g. min) to indicate the
     * allowed duration of parking.
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1040-33.png
     * </td>
     * <td>
     * StVO 1040-33
     * </td>
     * <td>
     * Parking disc restriction for marked parking areas
     * </td>
     * <td>
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit (e.g. min) to indicate the
     * allowed duration of parking. Set \c TrafficSignValue::text
     * to &rdquo;in gekennzeichneten Fl&auml;chen&rdquo;.
     * </td>
     * </tr>
     * </table>
     */
    PARKING_DISC_TIME_RESTRICTION = 43,
    /**
     * WEIGHT - Restriction of the validity of the traffic sign depending on
     * the vehicle's weight.
     * <table border="0">
     * <tr>
     * <td>
     * \image html 1053-33.png "StVO 1053-33"
     * <td>
     * \image html 1053-37.png "StVO 1053-37"
     * <td>
     * \image html 1060-33.png "StVO 1060-33"
     * </tr>
     * </table>
     *
     * Use \c TrafficSignValue::value and \c
     * TrafficSignValue::value_unit (e.g. in t) to indicate the
     * weight.
     */
    WEIGHT = 6,
    /**
     * WET - If "wet surface".
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1053-35.png
     * </td>
     * <td>
     * StVO 1053-35
     * </td>
     * </tr>
     * </table>
     */
    WET = 44,
    /**
     * PARKING_CONSTRAINT - Parking constraints.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1053-38.png
     * </td>
     * <td>
     * StVO 1053-38
     * </td>
     * <td>
     * pull in crosswise
     * </td>
     * </tr>
     * <tr>
     * <td>
     * \image html 1053-39.png
     * </td>
     * <td>
     * StVO 1053-39
     * </td>
     * <td>
     * pull in diagonally
     * </td>
     * </tr>
     * </table>
     */
    PARKING_CONSTRAINT = 42,
    /**
     * NO_WAITING_SIDE_STRIPES - No parking, also on verges/shoulder.
     * <table cellspacing="0" cellpadding="0">
     * <tr>
     * <td>
     * \image html 1060-31.png
     * </td>
     * <td>
     * StVO 1060-31
     * </td>
     * </tr>
     * </table>
     */
    NO_WAITING_SIDE_STRIPES = 38,
    /**
     * RAIN - Restriction of the validity of the traffic sign to wet /
     * rainy conditions.
     *
     * (No German StVO-Nr., Austrian StVO 1960 supplementary sign
     * g).
     */
    RAIN = 7,
    /**
     * SNOW_RAIN - Combined restriction of the validity of the traffic sign to
     * rainy or snowy conditions denoted by a single supplementary
     * sign (instead of two signs of \c #TYPE_RAIN and \c #TYPE_SNOW
     * respectively).
     *
     * (StVO -, Austria)
     */
    SNOW_RAIN = 10,
    /** NIGHT - Valid at night. */
    NIGHT = 19,
    /** STOP_4_WAY - Stop 4 way. */
    STOP_4_WAY = 21,
    /**
     * TRUCK - Trucks.
     *
     * \note For OSI 4.0 compatibility use the message \c Actor
     * instead.
     */
    TRUCK = 15,
    /**
     * TRACTORS_MAY_BE_PASSED - Tractors may be passed.
     *
     * \note For OSI 4.0 compatibility use the message \c Actor
     * instead.
     */
    TRACTORS_MAY_BE_PASSED = 16,
    /**
     * HAZARDOUS - Vehicles transporting hazardous goods.
     *
     * \note For OSI 4.0 compatibility use the message \c Actor
     * instead.
     */
    HAZARDOUS = 17,
    /**
     * TRAILER - Trailers.
     *
     * \note For OSI 4.0 compatibility use the message \c Actor
     * instead.
     */
    TRAILER = 18,
    /**
     * ZONE - Zone.
     *
     * \note For OSI 4.0 compatibility use the message \c Actor
     * instead.
     */
    ZONE = 20,
    /**
     * MOTORCYCLE - Motorcycles.
     *
     * \note For OSI 4.0 compatibility use the message \c Actor
     * instead.
     */
    MOTORCYCLE = 22,
    /**
     * MOTORCYCLE_ALLOWED - Motorcycles allowed.
     *
     * \note For OSI 4.0 compatibility use the message \c Actor
     * instead.
     */
    MOTORCYCLE_ALLOWED = 23,
    /**
     * CAR - Cars.
     *
     * \note For OSI 4.0 compatibility use the message \c Actor
     * instead.
     */
    CAR = 24
}
/**
 * Definition of the traffic actors the supplementary sign makes
 * reference to. E.g. bikes, trucks, cars, etc.
 */
declare enum TrafficSign_SupplementarySign_Classification_Actor {
    /** UNKNOWN - An unknown actor */
    UNKNOWN = 0,
    /** OTHER - Other actor (specified but known) */
    OTHER = 1,
    /** NO_ACTOR - The actor is not specified */
    NO_ACTOR = 2,
    /** AGRICULTURAL_VEHICLES - Agricultural vehicles */
    AGRICULTURAL_VEHICLES = 3,
    /** BICYCLES - Bicycles */
    BICYCLES = 4,
    /** BUSES - Buses */
    BUSES = 5,
    /** CAMPERS - Campers */
    CAMPERS = 6,
    /** CARAVANS - Caravans */
    CARAVANS = 7,
    /** CARS - Cars */
    CARS = 8,
    /** CARS_WITH_CARAVANS - Cars with caravans */
    CARS_WITH_CARAVANS = 9,
    /** CARS_WITH_TRAILERS - Cars with trailers */
    CARS_WITH_TRAILERS = 10,
    /** CATTLE - Cattles */
    CATTLE = 11,
    /** CHILDREN - Children */
    CHILDREN = 12,
    /** CONSTRUCTION_VEHICLES - Construction vehicles */
    CONSTRUCTION_VEHICLES = 13,
    /** DELIVERY_VEHICLES - Delivery vehicles */
    DELIVERY_VEHICLES = 14,
    /** DISABLED_PERSONS - Disabled persons */
    DISABLED_PERSONS = 15,
    /** EBIKES - E-bikes */
    EBIKES = 16,
    /** ELECTRIC_VEHICLES - Electric vehicles */
    ELECTRIC_VEHICLES = 17,
    /** EMERGENCY_VEHICLES - Emergency vehicles */
    EMERGENCY_VEHICLES = 18,
    /** FERRY_USERS - Ferry users */
    FERRY_USERS = 19,
    /** FORESTRY_VEHICLES - Forestry vehicles */
    FORESTRY_VEHICLES = 20,
    /** HAZARDOUS_GOODS_VEHICLES - Hazardous goods vehicles */
    HAZARDOUS_GOODS_VEHICLES = 21,
    /** HORSE_CARRIAGES - Horse carriages */
    HORSE_CARRIAGES = 22,
    /** HORSE_RIDERS - Horse riders */
    HORSE_RIDERS = 23,
    /** INLINE_SKATERS - Inline skaters */
    INLINE_SKATERS = 24,
    /** MEDICAL_VEHICLES - Medical vehicles */
    MEDICAL_VEHICLES = 25,
    /** MILITARY_VEHICLES - Military vehicles */
    MILITARY_VEHICLES = 26,
    /** MOPEDS - Mopeds */
    MOPEDS = 27,
    /** MOTORCYCLES - Motorcycles */
    MOTORCYCLES = 28,
    /** MOTORIZED_MULTITRACK_VEHICLES - Motorized multi-track vehicles */
    MOTORIZED_MULTITRACK_VEHICLES = 29,
    /** OPERATIONAL_AND_UTILITY_VEHICLES - Operational and utility vehicles */
    OPERATIONAL_AND_UTILITY_VEHICLES = 30,
    /** PEDESTRIANS - Pedestrians */
    PEDESTRIANS = 31,
    /** PUBLIC_TRANSPORT_VEHICLES - Public transport vehicles */
    PUBLIC_TRANSPORT_VEHICLES = 32,
    /** RAILROAD_TRAFFIC - Railroad traffic */
    RAILROAD_TRAFFIC = 33,
    /**
     * RESIDENTS - Residents
     *
     * \note In the German StVO, typically denoted with the text
     * "Anlieger" or "Bewohner"
     */
    RESIDENTS = 34,
    /** SLURRY_TRANSPORT - Slurry transport */
    SLURRY_TRANSPORT = 35,
    /** TAXIS - Taxis */
    TAXIS = 36,
    /**
     * TRACTORS - Tractors
     *
     * \note In the German StVO, tractors are defined as
     * motorized vehicles that are not allowed to, or cannot,
     * drive faster than 25 km/h
     */
    TRACTORS = 37,
    /** TRAILERS - Trailers */
    TRAILERS = 38,
    /** TRAMS - Trams */
    TRAMS = 39,
    /**
     * TRUCKS - Trucks
     *
     * \note
     * In the German StVO, trucks are defined as
     * motorized vehicles that are heavier than 3.5 t
     */
    TRUCKS = 40,
    /** TRUCKS_WITH_SEMITRAILERS - Trucks with semi-trailers */
    TRUCKS_WITH_SEMITRAILERS = 41,
    /** TRUCKS_WITH_TRAILERS - Trucks with trailers */
    TRUCKS_WITH_TRAILERS = 42,
    /** VEHICLES_WITH_GREEN_BADGES - Vehicles with green badges */
    VEHICLES_WITH_GREEN_BADGES = 43,
    /** VEHICLES_WITH_RED_BADGES - Vehicles with red badges */
    VEHICLES_WITH_RED_BADGES = 44,
    /** VEHICLES_WITH_YELLOW_BADGES - Vehicles with yellow badges */
    VEHICLES_WITH_YELLOW_BADGES = 45,
    /** WATER_POLLUTANT_VEHICLES - Water pollutant vehicles */
    WATER_POLLUTANT_VEHICLES = 46,
    /** WINTER_SPORTSPEOPLE - Winter sportspeople */
    WINTER_SPORTSPEOPLE = 47
}
/** \brief An arrow denoting a direction shown on the traffic sign. */
interface TrafficSign_SupplementarySign_Classification_Arrow {
    /**
     * The IDs of the lanes the arrow applies to
     *
     * \rules
     * refers_to: Lane
     * \endrules
     */
    lane_id?: Identifier[] | undefined;
    /** The direction to which the arrow points to */
    direction?: TrafficSign_SupplementarySign_Classification_Arrow_Direction[] | undefined;
}
/** The direction to which the arrow points to */
declare enum TrafficSign_SupplementarySign_Classification_Arrow_Direction {
    /**
     * UNKNOWN - Direction of sign is unknown (must not be used in ground
     * truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (specified but known) direction. */
    OTHER = 1,
    /** NO_DIRECTION - No arrow direction is specified. */
    NO_DIRECTION = 2,
    /**
     * DIRECT_0_DEG - An arrow pointing straight ahead in the direction of
     * driving.
     */
    DIRECT_0_DEG = 3,
    /**
     * DIRECT_45_DEG_RIGHT - A straight arrow pointing 45 degrees to the right in the
     * direction of driving.
     */
    DIRECT_45_DEG_RIGHT = 4,
    /**
     * DIRECT_45_DEG_LEFT - A straight arrow pointing 45 degrees to the left in the
     * direction of driving.
     */
    DIRECT_45_DEG_LEFT = 5,
    /**
     * DIRECT_90_DEG_RIGHT - A straight arrow pointing 90 degrees to the right in the
     * direction of driving.
     */
    DIRECT_90_DEG_RIGHT = 6,
    /**
     * DIRECT_90_DEG_LEFT - A straight arrow pointing 90 degrees to the left in the
     * direction of driving.
     */
    DIRECT_90_DEG_LEFT = 7,
    /**
     * DIRECT_135_DEG_RIGHT - A straight arrow pointing 135 degrees to the right in the
     * direction of driving.
     */
    DIRECT_135_DEG_RIGHT = 8,
    /**
     * DIRECT_135_DEG_LEFT - A straight arrow pointing 135 degrees to the left in the
     * direction of driving.
     */
    DIRECT_135_DEG_LEFT = 9,
    /**
     * DIRECT_180_DEG - A straight arrow pointing opposite to the direction of
     * driving.
     */
    DIRECT_180_DEG = 10,
    /**
     * TURN_45_DEG_RIGHT - A curved arrow pointing 45 degrees to the right in the
     * direction of driving.
     */
    TURN_45_DEG_RIGHT = 11,
    /**
     * TURN_45_DEG_LEFT - A curved arrow pointing 45 degrees to the left in the
     * direction of driving.
     */
    TURN_45_DEG_LEFT = 12,
    /**
     * TURN_90_DEG_RIGHT - A curved arrow pointing 90 degrees to the right in the
     * direction of driving.
     */
    TURN_90_DEG_RIGHT = 13,
    /**
     * TURN_90_DEG_LEFT - A curved arrow pointing 90 degrees to the left in the
     * direction of driving.
     */
    TURN_90_DEG_LEFT = 14,
    /**
     * TURN_135_DEG_RIGHT - A curved arrow pointing 135 degrees to the right in the
     * direction of driving.
     */
    TURN_135_DEG_RIGHT = 15,
    /**
     * TURN_135_DEG_LEFT - A curved arrow pointing 135 degrees to the left in the
     * direction of driving.
     */
    TURN_135_DEG_LEFT = 16,
    /** TURN_180_DEG_RIGHT - A u-turn arrow towards the right. */
    TURN_180_DEG_RIGHT = 17,
    /** TURN_180_DEG_LEFT - A u-turn arrow towards the left. */
    TURN_180_DEG_LEFT = 18,
    /**
     * CIRCLE_0_DEG - An arrow that includes a fraction of a circle and points
     * forward in the direction of driving. Used typically for
     * roundabouts.
     */
    CIRCLE_0_DEG = 19,
    /**
     * CIRCLE_45_DEG_RIGHT - An arrow that includes a fraction of a circle and points
     * in 45 degrees to the right in the direction of driving.
     * Used typically for roundabouts.
     */
    CIRCLE_45_DEG_RIGHT = 20,
    /**
     * CIRCLE_45_DEG_LEFT - An arrow that includes a fraction of a circle and points
     * in 45 degrees to the left in the direction of driving.
     * Used typically for roundabouts.
     */
    CIRCLE_45_DEG_LEFT = 21,
    /**
     * CIRCLE_90_DEG_RIGHT - An arrow that includes a fraction of a circle and points
     * in 90 degrees to the right in the direction of driving.
     * Used typically for roundabouts.
     */
    CIRCLE_90_DEG_RIGHT = 22,
    /**
     * CIRCLE_90_DEG_LEFT - An arrow that includes a fraction of a circle and points
     * in 90 degrees to the left in the direction of driving.
     * Used typically for roundabouts.
     */
    CIRCLE_90_DEG_LEFT = 23,
    /**
     * CIRCLE_135_DEG_RIGHT - An arrow that includes a fraction of a circle and points
     * in 135 degrees to the right in the direction of driving.
     * Used typically for roundabouts.
     */
    CIRCLE_135_DEG_RIGHT = 24,
    /**
     * CIRCLE_135_DEG_LEFT - An arrow that includes a fraction of a circle and points
     * in 135 degrees to the left in the direction of driving.
     * Used typically for roundabouts.
     */
    CIRCLE_135_DEG_LEFT = 25,
    /**
     * CIRCLE_180_DEG - An arrow that includes a fraction of a circle and points
     * in the opposite to the direction of driving. Can be used
     * in detours in roundabouts.
     */
    CIRCLE_180_DEG = 26,
    /**
     * KEEP_LEFT_TO_TURN_0_DEG - An arrow that includes a fraction of a square and points
     * forward in direction of driving. Can be used for detours
     * where you have to use a separate left lane to drive
     * ahead.
     */
    KEEP_LEFT_TO_TURN_0_DEG = 27,
    /**
     * KEEP_RIGHT_TO_TURN_0_DEG - An arrow that includes a fraction of a square and points
     * forward in direction of driving. Can be used for detours
     * where you have to use a separate right lane to drive
     * ahead.
     */
    KEEP_RIGHT_TO_TURN_0_DEG = 28,
    /**
     * KEEP_LEFT_TO_TURN_90_DEG_RIGHT - An arrow that includes a fraction of a square and points
     * in 90 degrees to the right in direction of driving. Can
     * be used for detours where you have to use a separate left
     * lane to turn right.
     */
    KEEP_LEFT_TO_TURN_90_DEG_RIGHT = 29,
    /**
     * KEEP_RIGHT_TO_TURN_90_DEG_LEFT - An arrow that includes a fraction of a square and points
     * in 90 degrees to the right in direction of driving. Can
     * be used for detours where you have to use a separate
     * right lane to turn left.
     */
    KEEP_RIGHT_TO_TURN_90_DEG_LEFT = 30,
    /**
     * KEEP_LEFT_DRIVE_BACK_TO_TURN_90_DEG_RIGHT - An arrow that includes a fraction of a square and points
     * in 90 degrees to the right in direction of driving. Can
     * be used for detours where you have to use a separate left
     * lane and you have to drive back to turn right.
     */
    KEEP_LEFT_DRIVE_BACK_TO_TURN_90_DEG_RIGHT = 31,
    /**
     * KEEP_RIGHT_DRIVE_BACK_TO_TURN_90_DEG_LEFT - An arrow that includes a fraction of a square and points
     * in 90 degrees to the right in direction of driving. Can
     * be used for detours where you have to use a separate
     * right lane and you have to drive back to turn left.
     */
    KEEP_RIGHT_DRIVE_BACK_TO_TURN_90_DEG_LEFT = 32
}

/**  */
interface RoadMarking {
    /**
     * The ID of the road marking.
     *
     * \rules
     * is_set
     * \endrules
     */
    id?: Identifier | undefined;
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
    base?: BaseStationary | undefined;
    /** The classification data for the road marking. */
    classification?: RoadMarking_Classification | undefined;
    /**
     * Optional external reference to the road-marking source.
     *
     * The external reference points to the source of the surface marking, if it
     * is derived from one or more objects or external references. An example
     * here is the reference to the signal defined in a OpenDRIVE map.
     *
     * For example, to reference a signal defined in an OpenDRIVE map
     * the items should be set as follows:
     * * reference = URI to map, can remain empty if identical with definition
     *               in \c GroundTruth::map_reference
     * * type = "net.asam.opendrive"
     * * identifier[0] = id of t_road_signals_signal
     *
     * \note With OpenDRIVE, surface markings can also be defined as objects.
     *       In this case, the associated object is usually referenced within
     *       OpenDRIVE using the reference t_road_signals_signal_reference.
     *       An additional reference to the object is therefore not necessary.
     *
     * \note For non-ASAM Standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note The value has to be repeated, because one lane segment may be
     *       derived from more than one origin segment. Multiple sources
     *       may be added as reference as well, for example, a map and sensors.
     */
    source_reference?: ExternalReference[] | undefined;
    /**
     * The visual color of the material of the road marking.
     *
     * \note This does not represent the semantic classification but the visual
     * appearance. For semantic classification of the road marking use the color
     * field in \c Classification.
     */
    color_description?: ColorDescription | undefined;
}
/** \brief \c Classification data for a road surface marking. */
interface RoadMarking_Classification {
    /** The type of the road marking. */
    type?: RoadMarking_Classification_Type | undefined;
    /**
     * Traffic sign as road marking (color image, monochrome image or
     * character string).
     *
     * \note Field is set if ( \c #type == \c #TYPE_PAINTED_TRAFFIC_SIGN or
     * \c #TYPE_SYMBOLIC_TRAFFIC_SIGN or \c #TYPE_TEXTUAL_TRAFFIC_SIGN ).
     *
     * \note Field need not be set (or set to \c #TYPE_OTHER)
     * if road marking type (\c #type) does not require it.
     *
     * \attention Deprecated: A revision is planned for version 4.0.0 to
     * replace the type enum with a more semantically defined enumeration,
     * with the exact sign specification being relegated to the newly
     * introduced 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * \rules
     * check_if this.type is_greater_than_or_equal_to 2 else do_check is_set
     * check_if this.type is_less_than_or_equal_to 4 else do_check is_set
     * \endrules
     */
    traffic_main_sign_type?: TrafficSign_MainSign_Classification_Type | undefined;
    /**
     * \note Field need not be set (or set to \c #COLOR_OTHER)
     * if road marking type does not require it (e.g. for \c #type ==
     * \c #TYPE_PAINTED_TRAFFIC_SIGN).
     *
     * \rules
     * check_if this.type is_equal_to 2 else do_check is_set
     * check_if this.monochrome_color is_equal_to 1 else do_check is_set
     * \endrules
     */
    monochrome_color?: RoadMarking_Classification_Color | undefined;
    /**
     * Additional value associated with the road marking, e.g. value of the
     * speed limit.
     *
     * \note Field need not be set if road marking type does not require it.
     *
     * \note OSI 3 uses \c #value_text and not \c TrafficSignValue for
     * simple chars.
     */
    value?: TrafficSignValue | undefined;
    /**
     * Additional text value as road marking, e.g. BUS, TAXI etc.
     *
     * \note Field need not be set if road marking type does not require it.
     */
    value_text?: string | undefined;
    /**
     * The ID(s) of the lane(s) that the road marking is assigned to.
     * May be multiple if the road marking goes across multiple lanes.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     *
     * \rules
     * refers_to: Lane
     * \endrules
     */
    assigned_lane_id?: Identifier[] | undefined;
    /**
     * Boolean flag to indicate that the road marking is taken out of service.
     * This can be achieved by visibly crossing the road marking with stripes,
     * or completely covering a road marking making it not visible.
     *
     * \image html OSI_RoadMaking_is_out_of_service.jpg width=800px
     */
    is_out_of_service?: boolean | undefined;
    /**
     * Country specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * Country is specified using the ISO 3166-1, alpha-2 code
     * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2, or the
     * special OpenDRIVE country for generic signs.<br>
     *
     * \rules
     * check_if this.type is_greater_than_or_equal_to 2 else do_check is_set
     * check_if this.type is_less_than_or_equal_to 4 else do_check is_set
     * \endrules
     */
    country?: string | undefined;
    /**
     * Revision specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * The year the traffic rules came into force. <br>
     * e.g. "2017"
     *
     * \note Field is set if ( \c #type == \c #TYPE_PAINTED_TRAFFIC_SIGN or
     * \c #TYPE_SYMBOLIC_TRAFFIC_SIGN or \c #TYPE_TEXTUAL_TRAFFIC_SIGN ).
     *
     * \note Field need not be set (or set to \c #TYPE_OTHER)
     * if road marking type (\c #type) does not require it.
     *
     * \rules
     * check_if this.type is_greater_than_or_equal_to 2 else do_check is_set
     * check_if this.type is_less_than_or_equal_to 4 else do_check is_set
     * \endrules
     */
    country_revision?: string | undefined;
    /**
     * Code specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * Code identifier according to country and country revision,
     * corresponds to the type field of OpenDRIVE. <br>
     * code is only unique in combination with #country and #country_revision.  <br>
     * e.g. http://www.vzkat.de/2017/VzKat.htm
     *
     * \note Field is set if ( \c #type == \c #TYPE_PAINTED_TRAFFIC_SIGN or
     * \c #TYPE_SYMBOLIC_TRAFFIC_SIGN or \c #TYPE_TEXTUAL_TRAFFIC_SIGN ).
     *
     * \note Field need not be set (or set to \c #TYPE_OTHER)
     * if road marking type (\c #type) does not require it.
     *
     * \rules
     * check_if this.type is_greater_than_or_equal_to 2 else do_check is_set
     * check_if this.type is_less_than_or_equal_to 4 else do_check is_set
     * \endrules
     */
    code?: string | undefined;
    /**
     * Sub-code specification of the traffic sign catalog specification
     * that identifies the actual traffic sign. This is part of the
     * 4-tupel traffic sign catalog specification as used in
     * <a href="https://releases.asam.net/OpenDRIVE/1.6.0/ASAM_OpenDRIVE_BS_V1-6-0.html#_signals">OpenDRIVE</a>.
     *
     * Sub-code identifier according to country, country revision and code,
     * corresponds to the subtype field of OpenDRIVE. <br>
     * sub_code is only unique in combination with #country, #country_revision,
     * and #code.  <br>
     * e.g. http://www.vzkat.de/2017/VzKat.htm
     *
     * \note Field is set if ( \c #type == \c #TYPE_PAINTED_TRAFFIC_SIGN or
     * \c #TYPE_SYMBOLIC_TRAFFIC_SIGN or \c #TYPE_TEXTUAL_TRAFFIC_SIGN ).
     *
     * \note Field need not be set (or set to \c #TYPE_OTHER)
     * if road marking type (\c #type) does not require it.
     *
     * \rules
     * check_if this.type is_greater_than_or_equal_to 2 else do_check is_set
     * check_if this.type is_less_than_or_equal_to 4 else do_check is_set
     * \endrules
     */
    sub_code?: string | undefined;
    /**
     * Assignment of this object to logical lanes.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    logical_lane_assignment?: LogicalLaneAssignment[] | undefined;
}
/** Definition of road marking types. */
declare enum RoadMarking_Classification_Type {
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
    GENERIC_TEXT = 7
}
/**
 * Definition of semantic road marking colors
 *
 * \note The color types represent the semantic classification of
 * road markings only. They do not represent an actual visual appearance.
 */
declare enum RoadMarking_Classification_Color {
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
    /** ORANGE - Marking with orange color. */
    ORANGE = 9
}

/**
 * \brief A road marking in the environment as detected by the sensor.
 *
 * \image html OSI_DetectedRoadMarking.svg
 *
 * The figure shows two STOP road markings (\c
 * DetectedRoadMarking::CandidateRoadMarking::classification). STOP \c
 * RoadMarking::Classification::type == \c
 * RoadMarking::Classification::TYPE_TEXTUAL_TRAFFIC_SIGN is marked, STOP \c
 * RoadMarking::Classification::type == \c
 * RoadMarking::Classification::TYPE_SYMBOLIC_TRAFFIC_SIGN is not marked.
 *
 * The parent frame of a detected road marking is the virtual sensor coordinate
 * system.
 *
 * /note The virtual sensor coordinate system is relative to the vehicle coordinate
 * system which has its origin in the center of the rear axle of the ego
 * vehicle. This means if virtual sensor mounting position and orientation are
 * set to (0,0,0) the virtual sensor coordinate system coincides with the
 * vehicle coordinate system.
 */
interface DetectedRoadMarking {
    /** Common information of one detected item. */
    header?: DetectedItemHeader | undefined;
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
    base?: BaseStationary | undefined;
    /**
     * The root mean squared error of the base parameters of the detected
     * road marking. \c RoadMarking::base has to be identical for
     * all \c #candidate road markings.
     */
    base_rmse?: BaseStationary | undefined;
    /**
     * A list of candidates for this road marking as estimated by the
     * sensor.
     */
    candidate?: DetectedRoadMarking_CandidateRoadMarking[] | undefined;
    /**
     * The visual color of the material of the road marking.
     *
     * \note This does not represent the semantic classification but the visual
     * appearance. For semantic classification of the road marking use the color
     * field in \c CandidateRoadMarking::classification.
     */
    color_description?: ColorDescription | undefined;
}
/**
 * \brief A candidate for a detected road marking as estimated by the
 * sensor.
 */
interface DetectedRoadMarking_CandidateRoadMarking {
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
    probability?: number | undefined;
    /**
     * The classification of the road marking.
     *
     * \note IDs, which are referenced in this message, usually
     * reference to \c DetectedXXX::tracking_id IDs.
     */
    classification?: RoadMarking_Classification | undefined;
}

/**
 * \brief A traffic light.
 *
 * \image html OSI_TrafficLight.svg
 *
 * One traffic light message defines a single 'bulb' and not a box of several
 * bulbs, e.g. red, yellow, green are three separate traffic lights.
 */
interface TrafficLight {
    /**
     * The ID of the traffic light.
     *
     * \rules
     * is_globally_unique
     * is_set
     * \endrules
     */
    id?: Identifier | undefined;
    /**
     * The base parameters of the traffic light.
     *
     * \c BaseStationary::orientation x-axis is view normal of the traffic
     * light's icon.
     */
    base?: BaseStationary | undefined;
    /** The classification data for the traffic light. */
    classification?: TrafficLight_Classification | undefined;
    /**
     * Opaque reference of an associated 3D model of the traffic light.
     *
     * \note It is implementation-specific how model_references are resolved to
     * 3d models.
     */
    model_reference?: string | undefined;
    /**
     * Optional external reference to the traffic light source.
     *
     * The external reference points to the source of the traffic light, if it
     * is derived from one or more objects or external references.
     *
     * For example, to reference a signal defined in an OpenDRIVE map
     * the items should be set as follows:
     * * reference = URI to map, can remain empty if identical with definition
     *               in \c GroundTruth::map_reference
     * * type = "net.asam.opendrive"
     * * identifier[0] = id of t_road_signals_signal
     *
     * \note For non-ASAM Standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note The value has to be repeated, because one lane segment may be
     *       derived from more than one origin segment. Multiple sources
     *       may be added as reference as well, for example, a map and sensors.
     */
    source_reference?: ExternalReference[] | undefined;
    /**
     * The visual color of the traffic light.
     *
     * \note This does not represent the semantic classification but the visual
     * appearance.  For semantic classification of the traffic light use the color
     * field in \c Classification.
     */
    color_description?: ColorDescription | undefined;
}
/** \brief \c Classification data for a traffic light. */
interface TrafficLight_Classification {
    /**
     * The semantic color of the traffic light.
     *
     * \note The color types represent the semantic color classification of a
     * traffic light only. They do not represent an actual visual appearance.
     *
     * \note If the color of the traffic light is known (from history or
     * geometrical arrangement) and the state \c #mode is
     * \c #MODE_OFF then \c #color could remain unchanged.
     * If traffic light displays images in different colors and traffic
     * light is off ( \c #mode =  \c #MODE_OFF), then \c #color = \c
     * #COLOR_OTHER .
     */
    color?: TrafficLight_Classification_Color | undefined;
    /** The icon of the traffic light. */
    icon?: TrafficLight_Classification_Icon | undefined;
    /** The operating mode of the traffic light. */
    mode?: TrafficLight_Classification_Mode | undefined;
    /**
     * The value of the countdown counter.
     * Unit: % or s
     *
     * \note Set value only if traffic light bulb is a countdown counter.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    counter?: number | undefined;
    /**
     * The IDs of the lanes that the traffic light is assigned to.
     * Might be multiple if the traffic light is valid for multiple driving
     * lanes.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     *
     * \rules
     * refers_to: Lane
     * \endrules
     */
    assigned_lane_id?: Identifier[] | undefined;
    /**
     * Boolean flag to indicate that the traffic light is taken out of service.
     * This can be achieved by visibly crossing the light, covering it completely
     * or switching the traffic light off.
     */
    is_out_of_service?: boolean | undefined;
    /**
     * Assignment of this object to logical lanes.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    logical_lane_assignment?: LogicalLaneAssignment[] | undefined;
}
/**
 * Definition of semantic colors for traffic lights.
 *
 * \note The color types represent the semantic classification of a traffic light
 * only. They do not represent an actual visual appearance.
 */
declare enum TrafficLight_Classification_Color {
    /** UNKNOWN - Color is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) color. */
    OTHER = 1,
    /** RED - Red light. */
    RED = 2,
    /** YELLOW - Orange-yellow light. */
    YELLOW = 3,
    /** GREEN - Green light. */
    GREEN = 4,
    /** BLUE - Blue light. */
    BLUE = 5,
    /** WHITE - White light. */
    WHITE = 6
}
/** Definition of traffic light bulb icon. */
declare enum TrafficLight_Classification_Icon {
    /** UNKNOWN - Unknown icon of traffic light (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) icon of traffic light. */
    OTHER = 1,
    /**
     * NONE - This is a normal traffic light without specification of e.g.
     * direction.
     */
    NONE = 2,
    /** ARROW_STRAIGHT_AHEAD - This traffic light applies to the lane straight ahead. */
    ARROW_STRAIGHT_AHEAD = 3,
    /** ARROW_LEFT - This traffic light applies to left turns. */
    ARROW_LEFT = 4,
    /** ARROW_DIAG_LEFT - This traffic light applies to diagonal left turns. */
    ARROW_DIAG_LEFT = 5,
    /**
     * ARROW_STRAIGHT_AHEAD_LEFT - This traffic light applies to a lane allowing to drive straight
     * ahead or to turn left.
     */
    ARROW_STRAIGHT_AHEAD_LEFT = 6,
    /** ARROW_RIGHT - This traffic light applies to right turns. */
    ARROW_RIGHT = 7,
    /** ARROW_DIAG_RIGHT - This traffic light applies to diagonal right turns. */
    ARROW_DIAG_RIGHT = 8,
    /**
     * ARROW_STRAIGHT_AHEAD_RIGHT - This traffic light applies to a lane allowing to drive straight
     * ahead or to turn right.
     */
    ARROW_STRAIGHT_AHEAD_RIGHT = 9,
    /**
     * ARROW_LEFT_RIGHT - This traffic light applies to a lane allowing to turn left or
     * right.
     */
    ARROW_LEFT_RIGHT = 10,
    /**
     * ARROW_DOWN - This traffic light indicates that the assigned lane is open for
     * driving.
     */
    ARROW_DOWN = 11,
    /**
     * ARROW_DOWN_LEFT - This traffic light indicates a necessary lane change to the left
     * ahead.
     */
    ARROW_DOWN_LEFT = 12,
    /**
     * ARROW_DOWN_RIGHT - This traffic light indicates a necessary lane change to the right
     * ahead.
     */
    ARROW_DOWN_RIGHT = 13,
    /**
     * ARROW_CROSS - This traffic light indicates that the assigned lane is not open
     * for driving.
     */
    ARROW_CROSS = 14,
    /** PEDESTRIAN - This traffic light is valid for pedestrians. */
    PEDESTRIAN = 15,
    /** WALK - This traffic light is valid for pedestrians with letters 'walk'. */
    WALK = 16,
    /**
     * DONT_WALK - This traffic light is valid for pedestrians with letters 'don't
     * walk'.
     */
    DONT_WALK = 17,
    /** BICYCLE - This traffic light is valid for bicyclists. */
    BICYCLE = 18,
    /** PEDESTRIAN_AND_BICYCLE - This traffic light is valid for pedestrians and bicyclists. */
    PEDESTRIAN_AND_BICYCLE = 19,
    /** COUNTDOWN_SECONDS - This traffic light counter in second. */
    COUNTDOWN_SECONDS = 20,
    /** COUNTDOWN_PERCENT - This traffic light counter in percent. */
    COUNTDOWN_PERCENT = 21,
    /**
     * TRAM - This traffic light is valid for
     * trams.
     *
     * \note There is no detailed traffic light specification for trams
     * and buses at the moment.
     */
    TRAM = 22,
    /**
     * BUS - This traffic light is valid for
     * buses.
     *
     * \note There is no detailed traffic light specification for trams
     * and buses at the moment.
     */
    BUS = 23,
    /**
     * BUS_AND_TRAM - This traffic light is valid for
     * buses and trams.
     *
     * \note There is no detailed traffic light specification for trams
     * and buses at the moment.
     */
    BUS_AND_TRAM = 24
}
/** Definition of light modes for traffic lights. */
declare enum TrafficLight_Classification_Mode {
    /** UNKNOWN - Mode is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) mode. */
    OTHER = 1,
    /** OFF - Traffic light is off. */
    OFF = 2,
    /** CONSTANT - Light is on and not flashing. */
    CONSTANT = 3,
    /** FLASHING - Light is flashing. */
    FLASHING = 4,
    /** COUNTING - Light is counting. */
    COUNTING = 5
}

/**
 * \brief A traffic light in the environment as detected by the sensor.
 *
 * \image html OSI_DetectedTrafficLight.svg
 *
 * One detected traffic light message defines a single 'bulb' and not a box of
 * several bulbs, e.g. red, yellow, green are three separate detected traffic
 * lights.
 *
 * The parent frame of a detected traffic light is the virtual sensor coordinate
 * system.
 *
 * /note The virtual sensor coordinate system is relative to the vehicle coordinate
 * system which has its origin in the center of the rear axle of the ego
 * vehicle. This means if virtual sensor mounting position and orientation are
 * set to (0,0,0) the virtual sensor coordinate system coincides with the
 * vehicle coordinate system.
 */
interface DetectedTrafficLight {
    /** Common information of one detected item. */
    header?: DetectedItemHeader | undefined;
    /**
     * The base parameters of the traffic light.
     *
     * \c BaseStationary::orientation x-axis is view normal of the traffic
     * light's icon.
     */
    base?: BaseStationary | undefined;
    /**
     * The root mean squared error of the base parameters of the detected
     * traffic light's geometry. \c TrafficLight::base has to be identical
     * for all \c #candidate traffic lights.
     */
    base_rmse?: BaseStationary | undefined;
    /**
     * A list of candidates for this traffic light as estimated by the
     * sensor.
     */
    candidate?: DetectedTrafficLight_CandidateTrafficLight[] | undefined;
    /**
     * The visual color of the traffic light.
     *
     * \note This does not represent the semantic classification but the visual
     * appearance.  For semantic classification of the traffic light use the color
     * field in \c CandidateTrafficLight::classification.
     */
    color_description?: ColorDescription | undefined;
}
/**
 * \brief A candidate for a detected traffic light as estimated by
 * the sensor.
 */
interface DetectedTrafficLight_CandidateTrafficLight {
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
    probability?: number | undefined;
    /**
     * The classification of one traffic light that define this candidate.
     *
     * \note IDs, which are referenced in this message, usually
     * reference to \c DetectedXXX::tracking_id IDs.
     */
    classification?: TrafficLight_Classification | undefined;
}

/**
 * \brief A traffic sign in the environment as detected by the sensor.
 *
 * \image html OSI_DetectedSign.svg
 *
 * The parent frame of a detected traffic sign is the virtual sensor coordinate
 * system.
 *
 * \note The virtual sensor coordinate system is relative to the vehicle coordinate
 * system which has its origin in the center of the rear axle of the ego
 * vehicle. This means if virtual sensor mounting position and orientation are
 * set to (0,0,0) the virtual sensor coordinate system coincides with the
 * vehicle coordinate system.
 */
interface DetectedTrafficSign {
    /** Common information of one detected item. */
    header?: DetectedItemHeader | undefined;
    /** The main sign as detected by the sensor. */
    main_sign?: DetectedTrafficSign_DetectedMainSign | undefined;
    /** A list of additional supplementary sign(s) as detected by the sensor. */
    supplementary_sign?: DetectedTrafficSign_DetectedSupplementarySign[] | undefined;
}
/**
 * \brief Candidates for a detected main sign as estimated by the sensor.
 *
 * \image html OSI_DetectedMainSign.svg
 */
interface DetectedTrafficSign_DetectedMainSign {
    /**
     * A list of candidates for this traffic sign as estimated by the
     * sensor.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    candidate?: DetectedTrafficSign_DetectedMainSign_CandidateMainSign[] | undefined;
    /**
     * The base parameters of the traffic sign.
     *
     * The orientation of the bounding box \c #base
     * ( \c BaseStationary::orientation ) is defined as follows:
     *
     * The z-axis of the given \c BaseStationary::orientation is the vector
     * from the bottom to the top of the traffic sign's 2D image plate.
     * (Normally it is equal to the ground truth z-axis.)
     *
     * The x-axis of the given \c BaseStationary::orientation is view
     * normal of the traffic sign's image.
     *
     * This x-axis points from the traffic sign's image in the direction
     * from where a 'viewer' could see the traffic sign image.
     */
    base?: BaseStationary | undefined;
    /**
     * The root mean squared error of the base parameters of the detected
     * traffic sign. \c TrafficSign::MainSign::base has to be identical for
     * all \c #candidate traffic signs.
     */
    base_rmse?: BaseStationary | undefined;
    /** The estimated geometry of the traffic sign. */
    geometry?: DetectedTrafficSign_DetectedMainSign_Geometry | undefined;
}
/** Definition of traffic sign geometries. */
declare enum DetectedTrafficSign_DetectedMainSign_Geometry {
    /**
     * UNKNOWN - Geometry of the traffic sign is unknown (must not be used in
     * ground truth).
     */
    UNKNOWN = 0,
    /** OTHER - Geometry of the traffic sign is unspecified (but known). */
    OTHER = 1,
    /** CIRCLE - Traffic sign has a circular geometry. (0 corners) */
    CIRCLE = 2,
    /**
     * TRIANGLE_TOP - Traffic sign has a triangular geometry pointing to the top. (3
     * corners)
     */
    TRIANGLE_TOP = 3,
    /** TRIANGLE_DOWN - Traffic sign has a triangular geometry pointing down. (3 corners) */
    TRIANGLE_DOWN = 4,
    /** SQUARE - Traffic sign has a square geometry. (4 corners) */
    SQUARE = 5,
    /**
     * POLE - Traffic sign that has a pole geometry. (height is bigger than
     * width e.g. pole indicating highways exit in xx m). (4 corners)
     */
    POLE = 6,
    /**
     * RECTANGLE - Traffic sign has a rectangle geometry. (width is bigger than
     * height e.g. one-way) (4 corners)
     */
    RECTANGLE = 7,
    /**
     * PLATE - Traffic sign that has an oversize rectangle geometry. (4 corners)
     * E.g. direction plates on highway or city signs.
     */
    PLATE = 8,
    /** DIAMOND - Traffic sign has a diamond geometry. (4 corners) */
    DIAMOND = 9,
    /**
     * ARROW_LEFT - Traffic sign has a geometry of an arrow pointing to the left. (5
     * corners)
     */
    ARROW_LEFT = 10,
    /**
     * ARROW_RIGHT - Traffic sign has a geometry of an arrow pointing to the right. (5
     * corners)
     */
    ARROW_RIGHT = 11,
    /** OCTAGON - Traffic sign has an octagon geometry. (8 corners) */
    OCTAGON = 12
}
/**
 * \brief A candidate for a detected main sign as estimated by the
 * sensor.
 */
interface DetectedTrafficSign_DetectedMainSign_CandidateMainSign {
    /**
     * The estimated probability that this candidate is the true value.
     *
     * \note The sum of all \c #probability must be one. This
     * probability is given under the condition of \c
     * DetectedItemHeader::existence_probability.
     *
     * \rules
     * is_less_than_or_equal_to: 1
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    probability?: number | undefined;
    /**
     * The classification of one main sign that defines this candidate.
     *
     * \note IDs, which are referenced in this message, usually
     * reference to \c DetectedXXX::tracking_id IDs.
     */
    classification?: TrafficSign_MainSign_Classification | undefined;
}
/**
 * \brief Candidates for all detected supplementary signs of one traffic
 * sign as estimated by the sensor.
 *
 * \image html OSI_DetectedSupplementarySign.svg
 */
interface DetectedTrafficSign_DetectedSupplementarySign {
    /**
     * The definition of one of more supplementary signs that together
     * define this candidate.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    candidate?: DetectedTrafficSign_DetectedSupplementarySign_CandidateSupplementarySign[] | undefined;
    /**
     * The base parameters of the supplementary traffic sign.
     *
     * The orientation of the bounding box \c SupplementarySign::base
     * ( \c BaseStationary::orientation ) is defined as follows:
     * The z-axis of the given \c BaseStationary::orientation is the vector
     * from the bottom to the top of the supplementary traffic sign's 2D
     * image plate. (Normally it is equal to the ground truth z-axis.) The
     * x-axis of the given \c BaseStationary::orientation is view normal of
     * the supplementary traffic sign's image. This x-axis points from the
     * supplementary traffic sign's image in the direction from where a
     * 'viewer' could see the supplementary traffic sign image.
     */
    base?: BaseStationary | undefined;
    /**
     * The root mean squared error of the base parameters of the detected
     * supplementary traffic sign. \c #candidate
     * \c TrafficSign::SupplementarySign::base has to be identical for all
     * \c #candidate supplementary traffic signs.
     */
    base_rmse?: BaseStationary | undefined;
}
/**
 * \brief A candidate for a detected supplementary sign as estimated by
 * the sensor.
 */
interface DetectedTrafficSign_DetectedSupplementarySign_CandidateSupplementarySign {
    /**
     * The estimated probability that this candidate is the true value.
     *
     * \note The sum of all \c #probability must be one. This
     * probability is given under the condition of \c
     * DetectedItemHeader::existence_probability.
     *
     * \rules
     * is_less_than_or_equal_to: 1
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    probability?: number | undefined;
    /**
     * The classification of one of more supplementary signs that
     * together define this candidate.
     *
     * \note IDs, which are referenced in this message, usually
     * reference to \c DetectedXXX::tracking_id IDs.
     */
    classification?: TrafficSign_SupplementarySign_Classification | undefined;
}

/**
 * \brief The interface version number.
 *
 * The field denoting the version number. This needs to be set by the
 * sender to the actual OSI version that is to be sent.  Code wanting to
 * access the version number of the OSI code base can access a FileOptions,
 * which has the proper values, like this:
 *
 * \code
 * auto currentInterfaceVersion =
 *   InterfaceVersion::descriptor()->file()->options().GetExtension(current_interface_version);
 * \endcode
 *
 * If a message with all components set to the default value 0 is
 * received, this indicates that either that the message was sent by
 * a version 2.2.0 or earlier release, or that the sender did not
 * properly set the version components prior to sending.
 *
 * Increments will happen as part of changes to the whole interface.
 * The meaning of different InterfaceVersions is defined in [1].
 *
 * \par Reference:
 * [1] Open Simulation Interface. (2020, January 25). <em>README</em>. Retrieved January 25, 2020, from https://opensimulationinterface.github.io/osi-documentation/open-simulation-interface/README.html
 */
interface InterfaceVersion {
    /** Major version number. */
    version_major?: number | undefined;
    /** Minor version number. */
    version_minor?: number | undefined;
    /** Patch version number. */
    version_patch?: number | undefined;
}

/** Definition of a basic detection classifications. */
declare enum DetectionClassification {
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
    UNDERDRIVABLE = 5
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
interface FeatureData {
    /**
     * The interface version used by the sender (i.e. the simulation
     * environment).
     */
    version?: InterfaceVersion | undefined;
    /** Radar detections for multiple radar sensors (sensor fusion). */
    radar_sensor?: RadarDetectionData[] | undefined;
    /** Lidar detections for multiple lidar sensors (sensor fusion). */
    lidar_sensor?: LidarDetectionData[] | undefined;
    /**
     * Ultrasonic detections for multiple ultrasonic sensors (sensor fusion).
     *
     * \note Required for ultrasonic sensors: Detections will be send by the
     * emitting ultrasonic sensor, including all indirect detections received
     * by neighboring sensors.
     */
    ultrasonic_sensor?: UltrasonicDetectionData[] | undefined;
    /** Camera detections for multiple camera sensors (sensor fusion). */
    camera_sensor?: CameraDetectionData[] | undefined;
}
/** \brief The header attributes of each sensor's detection list. */
interface SensorDetectionHeader {
    /**
     * Time stamp at which the measurement was taken (not the time at which it
     * was processed or at which it is transmitted) in the global synchronized
     * time.
     *
     * \note See \c SensorData::timestamp and
     * \c SensorData::last_measurement_time for detailed discussions on the
     * semantics of time-related fields.
     */
    measurement_time?: Timestamp | undefined;
    /**
     * Monotonous counter to identify the exact cycle.
     * In general the detection function is called periodically and
     * \c #cycle_counter corresponds to the number of periods.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    cycle_counter?: number | undefined;
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
    mounting_position?: MountingPosition | undefined;
    /**
     * The origin/orientation of the sensor frame represents the current
     * mounting pose to the best knowledge of the sensor. The estimation of the
     * 6D pose given by the calibration. The uncertainty of this estimation is
     * given with the corresponding 6D root mean squared error. The estimation
     * of the current origin does not include effects due to short-time
     * dynamics, such as pitch angles from braking, but includes long-time
     * calibration values, such as pitch angles from luggage in the trunk.
     */
    mounting_position_rmse?: MountingPosition | undefined;
    /**
     * Data Qualifier expresses to what extent the content of this event can be
     * relied on.
     */
    data_qualifier?: SensorDetectionHeader_DataQualifier | undefined;
    /**
     * The current number of valid detections in the detections list.
     *
     * \note This value has to be set if the list contains invalid detections.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    number_of_valid_detections?: number | undefined;
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
    sensor_id?: Identifier | undefined;
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
declare enum SensorDetectionHeader_DataQualifier {
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
    INVALID = 7
}
/**
 * The extended qualifier describes the reason (not the effect) why the
 * event data qualifier, \c #data_qualifier, is reduced or not available.
 */
declare enum SensorDetectionHeader_ExtendedQualifier {
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
    BEGINNING_BLOCKAGE = 12
}
/** \brief Data from one radar sensor including a list of detections. */
interface RadarDetectionData {
    /** Header attributes of radar detection from one radar sensor. */
    header?: SensorDetectionHeader | undefined;
    /** List of radar detections constituting the radar detection list. */
    detection?: RadarDetection[] | undefined;
}
/** \brief A radar detection. */
interface RadarDetection {
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
    existence_probability?: number | undefined;
    /**
     * ID of the detected object this detection is associated to.
     *
     * \note ID = MAX(uint64) indicates no reference to an object.
     *
     * \rules
     * refers_to: DetectedObject
     * \endrules
     */
    object_id?: Identifier | undefined;
    /**
     * Measured position of the detection given in spherical coordinates in the
     * sensor coordinate system.
     */
    position?: Spherical3d | undefined;
    /** Root mean squared error of the measured position of the detection. */
    position_rmse?: Spherical3d | undefined;
    /**
     * Radial velocity of the detection positive in direction to the sensor.
     *
     * Unit: m/s
     */
    radial_velocity?: number | undefined;
    /**
     * Root mean squared error of the object measured radial velocity.
     *
     * Unit: m/s
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    radial_velocity_rmse?: number | undefined;
    /**
     * The radar cross section (RCS) of the radar detection.
     *
     * Unit: dB m^2
     */
    rcs?: number | undefined;
    /**
     * The signal to noise ratio (SNR) of the radar detection.
     *
     * Unit: dB
     */
    snr?: number | undefined;
    /**
     * Describes the possibility whether more than one object may have led to
     * this detection.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 1
     * \endrules
     */
    point_target_probability?: number | undefined;
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
    ambiguity_id?: Identifier | undefined;
    /** Basic classification of the detection. */
    classification?: DetectionClassification | undefined;
}
/** \brief Data from one lidar sensor including a list of detections. */
interface LidarDetectionData {
    /** Header attributes of lidar detection from one lidar sensor. */
    header?: SensorDetectionHeader | undefined;
    /** List of lidar detections. */
    detection?: LidarDetection[] | undefined;
}
/** \brief A point or vertical line in a lidar point cloud. */
interface LidarDetection {
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
    existence_probability?: number | undefined;
    /**
     * ID of the detected object this detection is associated to.
     *
     * \note ID = MAX(uint64) indicates no reference to an object.
     *
     * \rules
     * refers_to: DetectedObject
     * \endrules
     */
    object_id?: Identifier | undefined;
    /**
     * Measured position of the detection given in spherical coordinates in the
     * sensor coordinate system.
     */
    position?: Spherical3d | undefined;
    /** Root mean squared error of the measured position of the detection. */
    position_rmse?: Spherical3d | undefined;
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
    height?: number | undefined;
    /**
     * Root mean squared error of the object height.
     *
     * Unit: m
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    height_rmse?: number | undefined;
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
    intensity?: number | undefined;
    /**
     * The free space probability in the range [0.0, 1.0] from the origin of the
     * sensor up to this detection, as given by the distance.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 1
     * \endrules
     */
    free_space_probability?: number | undefined;
    /** Basic classification of the detection. */
    classification?: DetectionClassification | undefined;
    /** Lambertian reflectivity. */
    reflectivity?: number | undefined;
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
    echo_pulse_width?: number | undefined;
    /**
     * Radial velocity of the detection positive in direction to the sensor.
     *
     * Unit: m/s
     */
    radial_velocity?: number | undefined;
    /** ID of the corresponding lidar beam. */
    beam_id?: Identifier | undefined;
}
/** \brief Specific header extension for ultrasonic sensors. */
interface UltrasonicDetectionSpecificHeader {
    /**
     * Maximal range of the ultrasonic sensor.
     *
     * Unit: m
     */
    max_range?: number | undefined;
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
interface UltrasonicDetectionData {
    /** Header attributes of ultrasonic detection from one ultrasonic sensor. */
    header?: SensorDetectionHeader | undefined;
    /**
     * Additional header attributes of ultrasonic detection from one ultrasonic
     * sensor.
     */
    specific_header?: UltrasonicDetectionSpecificHeader | undefined;
    /** List of ultrasonic detections. */
    detection?: UltrasonicDetection[] | undefined;
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
interface UltrasonicDetection {
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
    existence_probability?: number | undefined;
    /**
     * ID of the detected object this detection is associated to.
     *
     * \note ID = MAX(uint64) indicates no reference to an object.
     *
     * \rules
     * refers_to: DetectedObject
     * \endrules
     */
    object_id?: Identifier | undefined;
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
interface UltrasonicIndirectDetection {
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
    existence_probability?: number | undefined;
    /**
     * ID of the detected object this detection is associated to.
     *
     * \note ID = MAX(uint64) indicates no reference to an object.
     *
     * \rules
     * refers_to: DetectedObject
     * \endrules
     */
    object_id?: Identifier | undefined;
    /**
     * First parameter b of an ellipsoid equation.
     *
     * Unit: m
     */
    ellipsoid_radial?: number | undefined;
    /**
     * Second parameter b of an ellipsoid equation.
     *
     * Unit: m
     */
    ellipsoid_axial?: number | undefined;
    /**
     * The ID of the sensor's receiver. Sender ID is stored in the header \c
     * SensorDetectionHeader.
     */
    receiver_id?: Identifier | undefined;
    /**
     * The vector to the receiver's origin in sending ultrasonic sensor frame.
     * The vector is also the direction of \c #ellipsoid_axial.
     */
    receiver_origin?: Vector3d | undefined;
}
/** \brief Specific header extension for camera sensors. */
interface CameraDetectionSpecificHeader {
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
interface CameraDetectionData {
    /** Header attributes of camera detection from one camera sensor. */
    header?: SensorDetectionHeader | undefined;
    /** Additional header attributes of camera detection from one camera sensor. */
    specific_header?: CameraDetectionSpecificHeader | undefined;
    /** List of camera detections. */
    detection?: CameraDetection[] | undefined;
    /** List of points which are used by detections. */
    point?: CameraPoint[] | undefined;
}
/** \brief Camera detection from the sensor. */
interface CameraDetection {
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
    existence_probability?: number | undefined;
    /**
     * ID of the detected object this detection is associated to.
     *
     * \note ID = MAX(uint64) indicates no reference to an object.
     *
     * \rules
     * refers_to: DetectedObject
     * \endrules
     */
    object_id?: Identifier | undefined;
    /**
     * Difference to the base timestamp \c
     * SensorDetectionHeader::measurement_time.
     *
     * The timestamp of this detection :=
     * \c SensorDetectionHeader::measurement_time + \c #time_difference.
     */
    time_difference?: Timestamp | undefined;
    /** Definition of the image shape type of this detection. */
    image_shape_type?: CameraDetection_ImageShapeType | undefined;
    /**
     * The defined shape is background.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_background?: boolean | undefined;
    /**
     * The defined shape is foreground.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_foreground?: boolean | undefined;
    /**
     * The defined shape is flat.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_flat?: boolean | undefined;
    /**
     * The defined shape is upright.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_upright?: boolean | undefined;
    /**
     * The defined shape is ground.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_ground?: boolean | undefined;
    /**
     * The defined shape is sky.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_sky?: boolean | undefined;
    /**
     * The defined shape is vegetation.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_vegetation?: boolean | undefined;
    /**
     * The defined shape is a road.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_road?: boolean | undefined;
    /**
     * The defined shape is a non-driving lane (e.g. sidewalk).
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_non_driving_lane?: boolean | undefined;
    /**
     * The defined shape is non-road (e.g. traffic island).
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_non_road?: boolean | undefined;
    /**
     * The defined shape is a stationary object.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_stationary_object?: boolean | undefined;
    /**
     * The defined shape is a possible moving object.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_moving_object?: boolean | undefined;
    /**
     * The defined shape is a landmark.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_landmark?: boolean | undefined;
    /**
     * The defined shape is a traffic sign.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_traffic_sign?: boolean | undefined;
    /**
     * The defined shape is a traffic light.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_traffic_light?: boolean | undefined;
    /**
     * The defined shape is a road marking sign.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_road_marking?: boolean | undefined;
    /**
     * The defined shape is a vehicle.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_vehicle?: boolean | undefined;
    /**
     * The defined shape is a pedestrian.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_pedestrian?: boolean | undefined;
    /**
     * The defined shape is an animal.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_animal?: boolean | undefined;
    /**
     * The defined shape is a pedestrian seen by the sensor from the front.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_pedestrian_front?: boolean | undefined;
    /**
     * The defined shape is a pedestrian seen by the sensor from the side.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_pedestrian_side?: boolean | undefined;
    /**
     * The defined shape is a pedestrian seen by the sensor from the rear.
     * The probability for this classification is at least
     * \c #shape_classification_probability.
     */
    shape_classification_pedestrian_rear?: boolean | undefined;
    /**
     * This probability defines the minimum probability for each selected
     * shape classification.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 1
     * \endrules
     */
    shape_classification_probability?: number | undefined;
    /**
     * The dominant color of the shape.
     *
     * \attention DEPRECATED: This color enum will be removed in version
     * 4.0.0. Use the field \c #color_description (\c ColorDescription)
     * instead.
     */
    color?: CameraDetection_Color | undefined;
    /**
     * The probability of the shape's color.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 1
     * \endrules
     */
    color_probability?: number | undefined;
    /**
     * If one shape has different shape classifications and shape classification
     * probability or color and color probability, all detections in this cycle
     * have the same ambiguity ID.
     *
     * \note ID = MAX(uint64) indicates no reference to an object.
     */
    ambiguity_id?: Identifier | undefined;
    /** Index of the first point in the camera detection. */
    first_point_index?: number | undefined;
    /**
     * Number of points which defines the shape.
     * \c #image_shape_type may restrict the number of possible values.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    number_of_points?: number | undefined;
    /** The dominant color of the shape. */
    color_description?: ColorDescription | undefined;
}
/**
 * Definition of shape dominant color.
 *
 * \attention DEPRECATED: This color enum will be removed in version
 * 4.0.0. Use \c ColorDescription instead.
 */
declare enum CameraDetection_Color {
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
    REFLECTIVE = 11
}
/** Definition of different image shape types. */
declare enum CameraDetection_ImageShapeType {
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
    POINT_CLOUD = 7
}
/** \brief Camera point from the sensor. */
interface CameraPoint {
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
    existence_probability?: number | undefined;
    /**
     * Measured point referred by one camera detection given in spherical
     * coordinates in the sensor coordinate system.
     */
    point?: Spherical3d | undefined;
    /** Root mean squared error of the measured point. */
    point_rmse?: Spherical3d | undefined;
}

/** Definition of basic logical detection classifications. */
declare enum LogicalDetectionClassification {
    /** UNKNOWN - Logical detection is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) logical detection. */
    OTHER = 1,
    /**
     * INVALID - Invalid logical detection, not to be used for object tracking, of unspecified
     * type (none of the other types applies).
     */
    INVALID = 2,
    /** CLUTTER - Clutter (noise, spray, rain, fog etc.). */
    CLUTTER = 3,
    /** OVERDRIVABLE - Over-drivable (ground etc.). */
    OVERDRIVABLE = 4,
    /** UNDERDRIVABLE - Under-drivable (sign gantry etc.). */
    UNDERDRIVABLE = 5
}
/**
 * \brief Processed data from one or multiple sensors as a list of logical detections.
 * Logical detections are derived from sensor detections in a logical model through processing steps like fusion filtering, tracking etc.
 *
 * All information is given with respect to the reference frame of the logical/virtual sensor
 * \c SensorView::mounting_position (e.g. center of rear axle of the ego car) in Cartesian coordinates.
 */
interface LogicalDetectionData {
    /**
     * The interface version used by the sender (i.e. the simulation
     * environment).
     *
     * \rules
     * is_set
     * \endrules
     */
    version?: InterfaceVersion | undefined;
    /** Header attributes of fused detections from multiple sensors and sensor types. */
    header?: LogicalDetectionDataHeader | undefined;
    /**
     * Logical detections consisting of transformed (and potentially fused)
     * detections from one or multiple sensors and sensor types.
     *
     * The parent frame of a logical detection is the virtual sensor coordinate
     * system specified by \c SensorView::mounting_position .
     *
     * /note The virtual sensor coordinate system is relative to the vehicle
     * coordinate system which has its origin in the center of the rear axle of
     * the ego vehicle. This means if virtual sensor mounting position and
     * orientation are set to (0,0,0) the virtual sensor coordinate system
     * coincides with the vehicle coordinate system.
     */
    logical_detection?: LogicalDetection[] | undefined;
}
/** \brief The header attributes of each sensor's logical detections list. */
interface LogicalDetectionDataHeader {
    /**
     * Time stamp at which the transformation and optional fusion was finished in the global synchronized time.
     *
     * \note See \c SensorData::timestamp and
     * \c SensorData::last_measurement_time for detailed discussions on the
     * semantics of time-related fields.
     */
    logical_detection_time?: Timestamp | undefined;
    /**
     * Data Qualifier expresses to what extent the content of this event can be
     * relied on.
     */
    data_qualifier?: LogicalDetectionDataHeader_DataQualifier | undefined;
    /**
     * The current number of valid detections in the logical detections list.
     *
     * \note This value has to be set if the list contains invalid logical detections.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    number_of_valid_logical_detections?: number | undefined;
    /**
     * The ID(s) of the sensor(s) that produced the detections for transformation
     * and - in case of multiple sensors - fusion into logical detections.
     */
    sensor_id?: Identifier[] | undefined;
}
/**
 * Data qualifier communicates the overall availability of the
 * interface.
 */
declare enum LogicalDetectionDataHeader_DataQualifier {
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
    INVALID = 7
}
/** \brief A logical detection that could be based on multiple sensors and sensor types. */
interface LogicalDetection {
    /**
     * Existence probability of the logical detection
     *
     * \note Use as confidence measure where a low value means less confidence
     * and a high value indicates strong confidence.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 1
     * \endrules
     */
    existence_probability?: number | undefined;
    /**
     * ID of the detected object this logical detection is associated to.
     *
     * \note ID = MAX(uint64) indicates no reference to an object.
     *
     * \rules
     * refers_to: DetectedObject
     * \endrules
     */
    object_id?: Identifier | undefined;
    /**
     * Measured position of the logical detection given in cartesian coordinates
     * in the virtual sensor coordinate system.
     *
     * Unit: m
     */
    position?: Vector3d | undefined;
    /** Root mean squared error of the measured position of the logical detection. */
    position_rmse?: Vector3d | undefined;
    /**
     * Velocity of the logical detection given in cartesian coordinates in the
     * virtual sensor coordinate system.
     *
     * Unit: m/s
     */
    velocity?: Vector3d | undefined;
    /**
     * Root mean squared error of the logical detection's velocity.
     *
     * Unit: m/s
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    velocity_rmse?: Vector3d | undefined;
    /**
     * Intensity or equivalent value of the logical detection's echo.
     *
     * Unit: %
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 100
     * \endrules
     */
    intensity?: number | undefined;
    /**
     * The signal to noise ratio (SNR) of the logical detection.
     *
     * Unit: dB
     */
    snr?: number | undefined;
    /**
     * Describes the possibility whether more than one object may have led to
     * this logical detection.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 1
     * \endrules
     */
    point_target_probability?: number | undefined;
    /**
     * The ID(s) of the sensor(s) that produced the detection(s) for transformation
     * and - in case of multiple sensors - fusion into the single logical detection.
     *
     * \note One logical detection can originate from multiple sensors.
     */
    sensor_id?: Identifier[] | undefined;
    /** Basic classification of the logical detection. */
    classification?: LogicalDetectionClassification | undefined;
    /**
     * Echo pulse width of the logical detection's echo.
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
    echo_pulse_width?: number | undefined;
}

/**
 * \brief The conditions of the environment.
 *
 * Definition of light, weather conditions and other environmental conditions.
 *
 * \note These conditions apply locally around the host vehicle.
 */
interface EnvironmentalConditions {
    /** The ambient illumination of the environment. */
    ambient_illumination?: EnvironmentalConditions_AmbientIllumination | undefined;
    /** The time of day at the host vehicles location. */
    time_of_day?: EnvironmentalConditions_TimeOfDay | undefined;
    /**
     * The unix timestamp describes the time and date at the host vehicle's
     * location, referring to UTC.
     *
     * The Unix epoch (or Unix time or POSIX time or Unix timestamp) is
     * the number of seconds that have elapsed since January 1, 1970
     * (midnight UTC/GMT [1]), not counting leap seconds [2].
     * Historically, the origin of UNIX system time was referred to as
     * "00:00:00 GMT, January 1, 1970" [2]. Literally speaking the epoch
     * is Unix time 0 (midnight 1/1/1970), but 'epoch' is often used as
     * a synonym for 'Unix time'. Many Unix systems store epoch dates as
     * a signed 32-bit integer, which might cause problems on January 19,
     * 2038 (known as the Year 2038 problem or Y2038).
     *
     * \note You can convert the timestamp using the following [routines
     * sorted by languages](https://www.epochconverter.com/#code).
     *
     * \par References:
     * [1] ITU Radiocommunication Assembly. (2002). <em>Recommendation  ITU-R  TF.460-6 Standard-frequency and time-signal emissions</em>. (Rec.  ITU-R  TF.460-6). Retrieved January 25, 2020, from http://www.itu.int/dms_pubrec/itu-r/rec/tf/R-REC-TF.460-6-200202-I!!PDF-E.pdf \n
     * [2] The Open Group. (2018). <em>POSIX.1-2017</em> The Open Group Base Specifications Issue 7, 2018 edition. IEEE Std 1003.1-2017 (Revision of IEEE Std 1003.1-2008). Retrieved January 25, 2020, from https://pubs.opengroup.org/onlinepubs/9699919799/xrat/contents.html
     */
    unix_timestamp?: number | undefined;
    /**
     * Atmospheric pressure in Pascal at z=0.0 in world frame (about 101325
     * Pa).
     *
     * Unit: Pa
     *
     * \rules
     * is_greater_than_or_equal_to: 80000
     * is_less_than_or_equal_to: 120000
     * \endrules
     */
    atmospheric_pressure?: number | undefined;
    /**
     * Temperature in Kelvin at z=0.0 in world frame.
     *
     * Unit: K
     *
     * \rules
     * is_greater_than_or_equal_to: 170
     * is_less_than_or_equal_to: 340
     * \endrules
     */
    temperature?: number | undefined;
    /**
     * Relative humidity in at z=0.0 in world frame.
     *
     * Note that physically more relevant measures, like absolute or specific
     * humidity can be easily derived from relative_humidity, given that the
     * temperature and atmospheric_pressure are known.
     *
     * Unit: %
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than_or_equal_to: 100
     * \endrules
     */
    relative_humidity?: number | undefined;
    /** Description of the precipitation. */
    precipitation?: EnvironmentalConditions_Precipitation | undefined;
    /** Description of the fog. */
    fog?: EnvironmentalConditions_Fog | undefined;
    /**
     * Optional external reference to the environmental condition sources.
     *
     * \note For OpenDRIVE and OpenSCENARIO there is no direct counterpart.
     *
     * \note For non-ASAM standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note The value has to be repeated because one object may be derived
     *       from more than one origin source, for example, from a scenario file
     *       and from sensors.
     */
    source_reference?: ExternalReference[] | undefined;
    /** Description of the clouds. */
    clouds?: EnvironmentalConditions_CloudLayer | undefined;
    /** Description of the wind. */
    wind?: EnvironmentalConditions_Wind | undefined;
    /** Description of the sun. */
    sun?: EnvironmentalConditions_Sun | undefined;
}
/**
 * Definition of discretized precipitation states according to [1].
 * (I = Intensity of precipitation in mm per hour mm/h)
 *
 * \par Reference:
 * [1] Paulat, M., Frei, C., Hagen, M. & Wernli, H. (2008). A gridded dataset of hourly precipitation in Germany: Its construction, climatology and application. <em>Meteorologische Zeitschrift</em>. Vol. 17, No. 6. pp. 719-732. Berlin, Stuttgart, Germany. https://doi.org/10.1127/0941-2948/2008/0332
 */
declare enum EnvironmentalConditions_Precipitation {
    /**
     * UNKNOWN - Intensity of precipitation is unknown (must not be used in ground
     * truth).
     */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) intensity of precipitation. */
    OTHER = 1,
    /** NONE - No precipitation, when I in [0,0.1[ mm/h */
    NONE = 2,
    /** VERY_LIGHT - Very light intensity of precipitation, when I in [0.1,0.5[ mm/h */
    VERY_LIGHT = 3,
    /** LIGHT - Light intensity of precipitation, when I in [0.5,1.9[ mm/h */
    LIGHT = 4,
    /** MODERATE - Moderate intensity of precipitation, when I in [1.9,8.1[ mm/h */
    MODERATE = 5,
    /** HEAVY - Heavy intensity of precipitation, when I in [8.1,34[ mm/h */
    HEAVY = 6,
    /** VERY_HEAVY - Very heavy intensity of precipitation, when I in [34,149[ mm/h */
    VERY_HEAVY = 7,
    /** EXTREME - Extreme intensity of precipitation, when I in [149,infinity[ mm/h */
    EXTREME = 8
}
/**
 * Definition of discretized fog states according to [1].
 * The bandwidth of thick and dense fog was adjusted to fit the German StVO
 * regarding rear fog lights [2, 3].
 * (V = Visibility in m)
 *
 * Visibility is defined as the length of the atmosphere over which a beam
 * of light travels before its luminous flux is reduced to 5% of its
 * original value (definition used by the Meteorological Office [4]).
 * This is approximately equivalent to visibility measured in terms of the
 * contrast of a distant object against its background.
 *
 * \par References:
 * [1] Shepard, F. D. (1996). <em>Reduced visibility due to fog on the highway.</em> Transportation Research Board, National Research Council (Ed.). National Academy Press. Washington, D.C., USA. ISBN 0-309-06006-0. \n
 * [2] Strassenverkehrs-Ordnung (StVO) as of dated  March 06, 2013 (BGBl. I S. 367), lastly changed by article 4a of the order from June 06, 2019 (BGBl. I S. 756). \n
 * [3] stvo.de. (2013, April 01). <em>StVO Par. 17 Beleuchtung</em>. Retrieved January 25, 2020, from https://www.stvo.de/strassenverkehrsordnung/101-17-beleuchtung \n
 * [4] Meteorological Office UK. (2020). <em>Homepage of the Meteorological Office - How we measure visibility</em>. Retrieved January 25, 2020, from http://www.metoffice.gov.uk/guide/weather/observations-guide/how-we-measure-visibility
 */
declare enum EnvironmentalConditions_Fog {
    /** UNKNOWN - Visibility is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) fog intensity. */
    OTHER = 1,
    /** EXCELLENT_VISIBILITY - Excellent visibility, when V in [40000,infinity[ m */
    EXCELLENT_VISIBILITY = 2,
    /** GOOD_VISIBILITY - Good visibility, when V in [10000,40000[ m */
    GOOD_VISIBILITY = 3,
    /** MODERATE_VISIBILITY - Moderate visibility, when V in [4000,10000[ m */
    MODERATE_VISIBILITY = 4,
    /** POOR_VISIBILITY - Poor visibility, when V in [2000,4000[ m */
    POOR_VISIBILITY = 5,
    /** MIST - Mist, when V in [1000,2000[ m */
    MIST = 6,
    /** LIGHT - Fog, when V in [200,1000[ m */
    LIGHT = 7,
    /** THICK - Thick fog, when V in [50,200[ m */
    THICK = 8,
    /**
     * DENSE - Dense fog, when V in [0,50[ m
     * (allowed to use rear fog light according to [3])
     */
    DENSE = 9
}
/**
 * Definition of discretized ambient illumination states:
 * Ambient light is any light in the vehicle's environment that is not
 * emitted by the vehicle itself. It can include sun/moon light, light from
 * other cars, street lights etc.
 *
 * lx ("lux") is the SI unit of luminance or illumination of an area of exact
 * one square meter, which is equal to one lumen per square meter 1 lx =
 * 1 lm/m^2 [1].
 * lm ("lumen") is the SI derived unit of luminous flux and a measure of
 * the total quantity of visible light emitted by a source. The lumen is
 * defined in relation to cd ("candela") as 1 lm = 1 cd sr, where sr
 * denotes steradian, the unit of solid angle used in 3D geometry analogous
 * to the radian [1].
 *
 * Categorization is done based on natural day/night time illuminance levels
 * [2] and standards for required lighting levels on roads [2, 3, 4, 5].
 *
 * \par References:
 * [1] DIN Deutsches Institut fuer Normung e. V. (1982). <em>DIN 5031-3 Strahlungsphysik im optischen Bereich und Lichttechnik - Groessen, Formelzeichen und Einheiten der Lichttechnik</em>. (DIN 5031-3:1982-03). Berlin, Germany. \n
 * [2] National Optical Astronomy Observatory. (2015, December 02). <em>Recommended Light Levels</em>. Retrieved January 25, 2020, from https://www.noao.edu/education/QLTkit/ACTIVITY_Documents/Safety/LightLevels_outdoor+indoor.pdf \n
 * [3] Wang, Y. & Zou, Y., (2016, March). <em>Study on Illumination for State Highways</em>. Washington State Department of Transportation. Retrieved January 25, 2020, from http://www.wsdot.wa.gov/research/reports/fullreports/847.1.pdf \n
 * [4] Laperriere, A. (2011, May). <em>LED street lighting in the municipality of Saint-Gedeon-de-Beauce within the framework of advanced lighting technologies</em>. Retrieved January 25, 2020, from http://sslnet.ca/wp-content/uploads/2011/10/LTE-RT-2011-0076-Anglais.pdf \n
 * [5] Crabb, G. I., Beaumont, R. & Webster, D. (2008, October 17). <em>Review of the class and quality of street lighting</em>. Transport Research Laboratory. Retrieved January 25, 2020, from http://courtneystrong.com/wp-content/uploads/2017/07/css-sl1-class-and-quality-of-street-lighting.pdf
 */
declare enum EnvironmentalConditions_AmbientIllumination {
    /** UNKNOWN - Ambient illumination is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) ambient illumination. */
    OTHER = 1,
    /**
     * LEVEL1 - Level 1 illumination in ]0.001, 0.01[ lx. \n
     * E.g. Night with no artificial light.
     *
     * \note Use \c #AMBIENT_ILLUMINATION_LEVEL1 if illumination is less
     * than 0.001 lx.
     */
    LEVEL1 = 2,
    /**
     * LEVEL2 - Level 2 illumination in [0.01, 1[ lx. \n
     * E.g. Night full moon / Deep twilight.
     */
    LEVEL2 = 3,
    /**
     * LEVEL3 - Level 3 illumination in [1, 3[ lx. \n
     * E.g. Deep to average twilight / Minimum lighting on local low
     * pedestrian conflict roads.
     */
    LEVEL3 = 4,
    /**
     * LEVEL4 - Level 4 illumination in [3, 10[ lx. \n
     * E.g. Average to full twilight / Minimum lighting on collector roads /
     * Minimum lighting on major and expressway roads with low to average
     * pedestrian conflict.
     */
    LEVEL4 = 5,
    /**
     * LEVEL5 - Level 5 illumination in [10, 20[ lx. \n
     * E.g. Minimum lighting on major and expressway roads with high
     * pedestrian conflict.
     */
    LEVEL5 = 6,
    /**
     * LEVEL6 - Level 6 illumination in [20, 400[ lx. \n
     * E.g. Roads with more lighting / Very dark overcast day to sunrise or
     * sunset on a clear day.
     */
    LEVEL6 = 7,
    /**
     * LEVEL7 - Level 7 illumination in [400, 1000[ lx. \n
     * E.g. Sunrise or sunset on a clear day / Overcast day.
     */
    LEVEL7 = 8,
    /**
     * LEVEL8 - Level 8 illumination in [1000, 10000[ lx. \n
     * E.g. Average to full daylight.
     */
    LEVEL8 = 9,
    /**
     * LEVEL9 - Level 9 illumination in [10000, 120000[ lx. \n
     * E.g. Full daylight to intense sunlight.
     *
     * \note Use \c #AMBIENT_ILLUMINATION_LEVEL9 if illumination is more
     * than 120000 lx
     */
    LEVEL9 = 10
}
/**
 * \brief The time of day at a specified location.
 *
 * \note In general the global position of the parent frame should be
 * obtainable in order to derive the local time.
 * This information can be calculated from the \c #unix_timestamp in
 * combination with \c #osi3::GroundTruth::proj_string and the position of
 * the corresponding \c #osi3::BaseStationary or \c #osi3::BaseMoving .
 */
interface EnvironmentalConditions_TimeOfDay {
    /**
     * The number of seconds in s that have passed since midnight local time.
     * Used e.g. for determining the current state of the circadian rhythm
     * of a driver.
     *
     * \note No changes of daylight saving time or time zones are
     * considered.
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * is_less_than: 86400
     * \endrules
     */
    seconds_since_midnight?: number | undefined;
}
/** \brief Description of a cloud layer. */
interface EnvironmentalConditions_CloudLayer {
    /** Properties of a cloud layer given by fractional cloud cover levels. */
    fractional_cloud_cover?: EnvironmentalConditions_CloudLayer_FractionalCloudCover | undefined;
}
/**
 * Defines the fractional cloud cover [1] given by observation of total cloud amount in eights (oktas) of the sky.
 *
 * For visual alignment please see reference [2].
 *
 * The total degree of coverage indicates how much of the sky is covered with clouds altogether.
 * 0 oktas means that there are no traces of clouds in the sky,
 * 8 oktas means that the sky is completely covered with clouds and no sky blue can be recognized.
 *
 * \par References:
 * [1] CIE engl. International Commission on Illumination. (2020). <em>CIE S017:2020 ILV: Intl. Lighting Vocabulary, 2nd edn.</em>. Retrieved March 8, 2022, from https://cie.co.at/eilvterm/17-29-116 \n
 * [2] UBC The University of British Columbia. (2018). <em>ATSC 113 Weather for Sailing, Flying & Snow Sports</em>. Retrieved March 8, 2022, from https://www.eoas.ubc.ca/courses/atsc113/flying/met_concepts/01-met_concepts/01c-cloud_coverage/index.html
 */
declare enum EnvironmentalConditions_CloudLayer_FractionalCloudCover {
    /** UNKNOWN - Fractional cloud cover level is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /** OTHER - Other (unspecified but known) fractional cloud cover level. */
    OTHER = 1,
    /** ZERO_OKTAS - 0/8 of the sky is covered with clouds. */
    ZERO_OKTAS = 2,
    /** ONE_OKTAS - 1/8 of the sky is covered with clouds. */
    ONE_OKTAS = 3,
    /** TWO_OKTAS - 2/8 of the sky is covered with clouds. */
    TWO_OKTAS = 4,
    /** THREE_OKTAS - 3/8 of the sky is covered with clouds. */
    THREE_OKTAS = 5,
    /** FOUR_OKTAS - 4/8 of the sky is covered with clouds. */
    FOUR_OKTAS = 6,
    /** FIVE_OKTAS - 5/8 of the sky is covered with clouds. */
    FIVE_OKTAS = 7,
    /** SIX_OKTAS - 6/8 of the sky is covered with clouds. */
    SIX_OKTAS = 8,
    /** SEVEN_OKTAS - 7/8 of the sky is covered with clouds. */
    SEVEN_OKTAS = 9,
    /** EIGHT_OKTAS - 8/8 of the sky is covered with clouds. */
    EIGHT_OKTAS = 10,
    /** SKY_OBSCURED - Sky obscured, describes situations where the sky is not perceivable, e.g. in dense fog. */
    SKY_OBSCURED = 11
}
/** \brief Defines wind properties. */
interface EnvironmentalConditions_Wind {
    /**
     * The origin direction of the wind (not the target direction) in the ground/xy-plane of the
     * world coordinate system. Corresponds to the heading/yaw angle, counted counterclockwise.
     * 0 pointing north. If north is not explicitly defined via \c #osi3::GroundTruth::proj_string,
     * then north is pointing in y-axis direction. The default orientation (x, y, z) is easting, northing, up [1].
     *
     * \note 0: north; +pi/2: west; pi: south, 3/2 pi: east.
     *
     * Unit: rad
     *
     * The preferred angular range is [0, 2pi].
     *
     * \par References:
     * [1] PROJ contributors. (2019). <em>PROJ coordinate transformation software library</em>. Open Source Geospatial Foundation. Retrieved January 25, 2019, from https://proj.org/usage/projections.html
     */
    origin_direction?: number | undefined;
    /**
     * The wind speed.
     *
     * Unit: m/s
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    speed?: number | undefined;
}
/** \brief Properties of the sun. */
interface EnvironmentalConditions_Sun {
    /**
     * Azimuth of the sun, counted counterclockwise.
     * 0 pointing north. If north is not explicitly defined via \c #osi3::GroundTruth::proj_string,
     * then north is pointing in y-axis direction. The default orientation (x, y, z) is easting, northing, up [1].
     * The point of observation is defined to be the global coordinate system's origin.
     *
     * \note 0: north; +pi/2: west; pi: south, 3/2 pi: east.
     *
     * Unit: rad
     *
     * The preferred angular range is [0, 2pi].
     *
     * \par References:
     * [1] PROJ contributors. (2019). <em>PROJ coordinate transformation software library</em>. Open Source Geospatial Foundation. Retrieved January 25, 2019, from https://proj.org/usage/projections.html
     */
    azimuth?: number | undefined;
    /**
     * Solar elevation angle.
     * The elevation angle is positive when the sun is above the xy-plane, negative when
     * the sun is below the xy-plane.
     * The point of observation is defined to be the global coordinate system's origin.
     *
     * \note 0: xy-plane; +pi/2: zenith; -pi/2: nadir.
     *
     * Unit: rad
     *
     * The preferred angular range is [-pi/2, +pi/2].
     */
    elevation?: number | undefined;
    /**
     * Illuminance of the sun, direct sunlight is around 100000 lx.
     *
     * Unit: lx
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    intensity?: number | undefined;
}

/**
 * \brief Boundary line of a LogicalLane
 *
 * Similar to a LaneBoundary, but with a reference line and ST positions.
 *
 * A logical lane boundary describes the boundary between two logical lanes. As
 * such, there will always be exactly one logical lane boundary between two
 * lanes at a given S position. Contrary to that, there can be 0 to N physical
 * lane boundaries (i.e. type LaneBoundary) between two logical lanes at a
 * given S position.
 *
 * If there are multiple physical lane boundaries at one S position between two
 * lanes (think of a solid-broken marking, which would be described by two
 * LaneBoundary objects, one for the solid lane marking, one for the broken lane
 * marking), then the single LogicalLaneBoundary describing the boundary between
 * two logical lanes should be between the physical boundaries.
 *
 * A logical lane boundary consists of a list of \link LogicalBoundaryPoint
 * LogicalBoundaryPoints\endlink. Each point has a XYZ and an ST coordinate.
 * The XYZ coordinates describe the position and height of the boundary in the
 * world.
 *
 * Notes on design decisions:
 * - The LogicalLaneBoundary has ST coordinates, and is thus a separate type
 *   from LaneBoundary.
 *   Advantages of this decision:
 *   - Calculations like getting the lane width at a position are easy, since
 *     one can just get the boundary points of the left and right boundary at
 *     the desired S position (via linear interpolation), and calculate the
 *     width from the two points. Also getting something like the distance to
 *     the lane border is very easy.
 *   - No centerline of the lane is necessary, since this can very easily be
 *     generated from the boundaries.
 *   Disadvantages of this decision:
 *   - %Lane boundaries cannot be shared with physical lanes. This results in
 *     more data needed. This can mostly be mitigated by only transmitting the
 *     lane boundaries during initialization (e.g. via the OSMP GroundTruthInit
 *     message).
 * - The LogicalLaneBoundary contains all data directly which an agent model is
 *   likely to need. It does not include information normally only used by
 *   sensor models (e.g. the exact length of the color markings on the road).
 *   This information can be gotten from the physical lane referenced in the
 *   LogicalLane, if needed.
 */
interface LogicalLaneBoundary {
    /**
     * The ID of the lane boundary.
     *
     * \rules
     * is_globally_unique
     * is_set
     * \endrules
     */
    id?: Identifier | undefined;
    /**
     * Points making up the lane boundary.
     *
     * The boundary must be defined in the same direction as the reference
     * line. So S positions should increase along the line. Note that S
     * positions will not always increase strictly monotonically.
     * Example:
     * <pre>
     *                |---------\
     *                |          \
     *  /---boundary--|           \\------------
     * /
     * ---------- reference line --------------
     * </pre>
     * At the place where the boundary suddenly increases, two points will have
     * the same S coordinate.
     *
     * If the boundary approximates a curve (e.g. a cubic function in
     * OpenDRIVE), the points must be chosen in a way that the lateral distance
     * to the ideal line does not exceed 5cm. As shown in the following image:
     *
     * \image html line_approximation_error.svg "Approximation error"
     * Approximation error green line.
     *
     * The Z error (difference in Z height between #boundary_line and the
     * "real" line) must not exceed 2cm. This is a stricter requirement than
     * for errors in the XY plane, because Z differences between lanes
     * influence driving very much.
     *
     * Note: if two lanes have different Z heights (e.g. a driving lane is
     * beside a sidewalk, where the sidewalk is 10cm higher than the road),
     * then these lanes cannot share a boundary, since their boundaries have
     * different Z heights.
     */
    boundary_line?: LogicalLaneBoundary_LogicalBoundaryPoint[] | undefined;
    /**
     * The reference line for this boundary.
     *
     * The reference line is used as a coordinate system for this boundary.
     * All points of this LogicalLaneBoundary must have S coordinates in the
     * range [\c sStart,\c sEnd].
     *
     * The reference line should roughly have the same shape as the boundary (so
     * roughly parallel to the lane middle), so that S coordinates continually
     * increase along the boundary.
     *
     * \rules
     * refers_to: ReferenceLine
     * \endrules
     */
    reference_line_id?: Identifier | undefined;
    /**
     * Reference to the physical lane boundary or boundaries that make up this
     * logical boundary.
     *
     * Rules and notes:
     * - This list is empty if there are no physical lane boundaries to delimit
     *   a lane.
     * - In the common case, this will contain one physical boundary.
     * - This list contains several lane boundaries if there are several physical
     *   lane boundaries at one S position (e.g. both a broken and a solid
     *   line).
     * - If there are several lane boundaries, they must be listed in increasing
     *   T order (i.e. from right to left in reference line direction).
     *   Rationale: this makes it easier to determine e.g. rules on lane
     *   changes, which depend on the T order of the lanes.
     * - Whenever physical lane boundaries begin or end, or switch their T
     *   position (if there are multiple physical lane boundaries), a new
     *   LogicalLaneBoundary must be created.
     * - The referenced LaneBoundary objects may be longer than the
     *   LogicalLaneBoundary which references them, but must never be shorter.
     *
     * Example:
     * <pre>
     *       Lane 1
     *  --------a------------------ - - - -c- - - -           ----&gt;
     *  \- - - -b- - - -
     *       Lane -1
     * </pre>
     *
     * This shows the boundary between lane 1 and lane -1, with the reference
     * line going from left to right. First there is a solid-broken line (a and
     * b), then there is only a solid line (a), then there is a broken line
     * (c). There would be three LogicalLaneBoundary objects between Lane1 and
     * Lane2: the first would reference first b and then a, the second would
     * reference only a, and the third would reference c.
     *
     * \rules
     * refers_to: LaneBoundary
     * \endrules
     */
    physical_boundary_id?: Identifier[] | undefined;
    /**
     * The passing rules, insomuch as they can be determined just from road
     * markings.
     */
    passing_rule?: LogicalLaneBoundary_PassingRule | undefined;
    /**
     * Optional external reference to the lane boundary source.
     *
     * \note For OpenDRIVE, there is no direct possibility to reference the
     *       RoadMark, as there is no unique identifier in this sub-object.
     *
     * \note For non-ASAM Standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note The value has to be repeated because one object may be derived
     *       from more than one origin source, for example, from a scenario file
     *       and from sensors.
     */
    source_reference?: ExternalReference[] | undefined;
}
/**
 * Passing rule of the LogicalLaneBoundary.
 *
 * This describes how vehicles are legally allowed to move across the
 * LogicalLaneBoundary. The PassingRule is determined solely based
 * on the semantics of (physical) lane boundaries, not on any signs
 * (i.e. it may be overridden by signs).
 */
declare enum LogicalLaneBoundary_PassingRule {
    /** UNKNOWN - Passing rule is unknown (must not be used in ground truth). */
    UNKNOWN = 0,
    /**
     * OTHER - Passing rule fits neither of the other categories.
     *
     * Example: this type needs to be used if passing depends on the agent
     * type, e.g. if cars may change lane, but trucks may not.
     *
     * This value is also used between LogicalLanes where the traffic
     * regulations do not say anything about passing rules (e.g. for a
     * LogicalLaneBoundary between LogicalLanes of TYPE_NORMAL
     * and TYPE_CURB or between LogicalLanes of TYPE_BORDER and
     * TYPE_SHOULDER) .
     */
    OTHER = 1,
    /**
     * NONE_ALLOWED - No passing is allowed (neither from left to right nor from right to
     * left).
     */
    NONE_ALLOWED = 2,
    /**
     * INCREASING_T - Only passing in increasing T direction allowed. Passing is allowed
     * from one lane to the other if the points on the target lane have
     * larger T values than points on the source lane (at the same S
     * position). In reference line direction (but not necessarily in
     * driving direction), this means changing from right to left is
     * allowed.
     */
    INCREASING_T = 3,
    /**
     * DECREASING_T - Only passing in decreasing T direction allowed. Passing is allowed
     * from one lane to the other if the points on the target lane have
     * smaller T values than points on the source lane (at the same S
     * position). In reference line direction (but not necessarily in
     * driving direction), this means changing from left to right is
     * allowed.
     */
    DECREASING_T = 4,
    /**
     * BOTH_ALLOWED - Passing is allowed in both directions (left to right and right to
     * left).
     */
    BOTH_ALLOWED = 5
}
/** \brief A point on the boundary */
interface LogicalLaneBoundary_LogicalBoundaryPoint {
    /** The position of the \c LaneBoundaryPoint. */
    position?: Vector3d | undefined;
    /**
     * S position of the LaneBoundaryPoint, measured along the parent's
     * reference_line_id.
     */
    s_position?: number | undefined;
    /**
     * T position of the LaneBoundaryPoint, measured along the parent's
     * reference_line_id.
     */
    t_position?: number | undefined;
}
/**
 * \brief A logical lane in the road network.
 *
 * A logical lane is part of a road. Compared to a physical lane (OSI type
 * \c Lane), its existence doesn't hinge on the existence of road markings. So
 * e.g. a road with two driving directions but no road markings in-between
 * would be presented as two \link LogicalLane LogicalLanes\endlink, but only
 * one Lane. So one Lane can consist of multiple \link LogicalLane
 * LogicalLanes\endlink. E.g. on intersections, each driving path is one
 * LogicalLane, but the whole area is one \c Lane of type \link
 * osi3::Lane::Classification::TYPE_INTERSECTION \c TYPE_INTERSECTION \endlink.
 *
 * Outside of intersections, logical lanes are constructed such that each point on
 * the road belongs to at least one (typically: exactly one) logical lane. So
 * there are no gaps between logical lanes, and no areas that don't belong to a
 * logical lane.
 *
 * If OSI is generated from OpenDRIVE, then \link LogicalLane
 * LogicalLanes\endlink map directly to OpenDRIVE lanes. However, it is allowed
 * to merge multiple consecutive (in S direction) OpenDRIVE lanes with the same
 * type into one OSI LogicalLane: if an OpenDRIVE lane has a single successor,
 * which has the same lane type, and this successor has only one predecessor
 * (so no lane merging or splitting) then the two lanes may be presented as one
 * continuous LogicalLane. This may be done recursively.
 *
 * The \link ReferenceLine reference line\endlink pointed to by
 * #reference_line_id defines an ST coordinate system for the lane. This ST
 * coordinate system is used to describe positions on the lane.
 *
 * ## Example
 *
 * The example below shows two logical lanes on an intersection, with a focus
 * on the left-turn lane (\c l1):
 * \image html OSI_LogicalLane1.png "Two logical lanes on an intersection"
 *
 * Assumptions not shown in the image:
 * - This is right-hand traffic (and thus vehicles on \c l1 drive from the bottom
 *   to the left, vehicles on \c l2 drive from right to left).
 * - The yellow line is a ReferenceLine, defined starting at the bottom, and
 *   going to the left.
 *
 * Some features shown in the image relative to \c l1:
 * - The yellow line is the ReferenceLine of \c l1 . The ReferenceLine can be
 *   shared with other lanes.  Because the ReferenceLine has the same direction
 *   as the driving direction of \c l1 in this example,
 *   <code>#move_direction == #MOVE_DIRECTION_INCREASING_S</code>.
 * - The red line marks the area where \c l2 is left of
 *   \c l1 - this info is recorded in #left_adjacent_lane of \c l1.
 * - The red area is the area where \c l2 overlaps \c l1. This is recorded in
 *   #overlapping_lane of \c l1.
 *
 * The image below shows the same two lanes, but from the perspective of \c l2:
 * \image html OSI_LogicalLane2.png "Two logical lanes on an intersection"
 *
 * Assumptions not shown in the image:
 * - The yellow line is a ReferenceLine, defined starting at the right, going
 *   to the left.
 *
 * Some features shown in the image relative to \c l2:
 * - The yellow line is the ReferenceLine of \c l2 . The ReferenceLine can be
 *   shared with other lanes.  Because the ReferenceLine has the same direction
 *   as the driving direction of \c l2 in this example,
 *   <code>#move_direction == #MOVE_DIRECTION_INCREASING_S</code>.
 * - The green line marks the area where \c l1 is right of
 *   \c l2 - this info is recorded in #right_adjacent_lane of \c l2.
 * - The red area is the area where \c l1 overlaps \c l2. This is recorded in
 *   #overlapping_lane of \c l1.
 *
 * As can be seen in the images, the two highlighted lanes are neighbors for
 * part of their length, but it makes no sense for them to have the same
 * reference line, since they diverge significantly.
 *
 * Note: all the relations shown above are also defined outside of intersections.
 */
interface LogicalLane {
    /**
     * The ID of the logical lane.
     *
     * \note Note ID is global unique.
     *
     * \rules
     * is_globally_unique
     * \endrules
     */
    id?: Identifier | undefined;
    /** The type of the logical lane. */
    type?: LogicalLane_Type | undefined;
    /**
     * Optional external reference to the lane source.
     *
     * The external reference points to the source of the lane, if it is derived
     * from one or more objects or external references.
     *
     * For example, to reference a lane defined in an OpenDRIVE map
     * the items should be set as follows:
     * * reference = URI to map, can remain empty if identical with definition
     *               in \c GroundTruth::map_reference
     * * type = "net.asam.opendrive"
     * * identifier[0] = id of t_road
     * * identifier[1] = s of t_road_lanes_laneSection
     * * identifier[2] = id of t_road_lanes_laneSection_left_lane,
     *                         t_road_lanes_laneSection_right_lane
     *
     * \note For non-ASAM Standards, it is implementation-specific how
     *       source_reference is resolved.
     *
     * \note The value has to be repeated, because one lane segment may be
     *       derived from more than one origin segment. Multiple sources
     *       may be added as reference as well, for example, a map and sensors.
     */
    source_reference?: ExternalReference[] | undefined;
    /**
     * Reference to the physical lanes this logical lane belongs to.
     *
     * This makes it possible to get detailed information on the physical lane
     * properties, e.g. the visual colors of the boundaries, the road
     * condition, etc..
     *
     * Note: a logical lane may consist of several physical lanes (in a row).
     * At any one S position, a logical lane should only reference one physical
     * lane. Several logical lanes may reference the same physical lane (see
     * drawing below).
     *
     * Logical lanes should not extend beyond intersections. All logical lanes
     * on intersections should end at the latest at the border of the
     * intersection.
     *
     * Example:
     * <pre>
     * ---------------------------------
     *  l1                       l2
     * ----------    l3        ---------
     *  l4                       l5
     * ---------------------------------
     * </pre>
     *
     * In this case, we have five physical lanes: l1, l2, l4 and l5 where a
     * lane marking is present. And l3 is one lane covering the whole road
     * (because no road marking is present).
     *
     * This would typically be presented as two logical lanes:
     * - One encompassing l1, part of l3, and l2
     * - The other encompassing l4, part of l3 and l5
     *
     * In this example, both logical lanes would reference l3. Their shared
     * LogicalLaneBoundary would cut through the middle of l3.
     *
     * physical_lane_reference does not give any information how much of the
     * area of a physical lane is covered by a logical lane.
     *
     * For LogicalLanes without a correspondence to a Lane.Classification.Subtype
     * (i.e. TYPE_MEDIAN, TYPE_CURB, TYPE_TRAM, TYPE_RAIL) this field has no value.
     *
     * \rules
     * refers_to: Lane
     * \endrules
     */
    physical_lane_reference?: LogicalLane_PhysicalLaneReference[] | undefined;
    /**
     * The \link ReferenceLine reference line\endlink for this logical lane
     *
     * The reference line is used as a coordinate system on this lane.
     *
     * The reference line should roughly have the same shape as the lane, so
     * that S coordinates continually increase/decrease along the lane. It is
     * not required that the reference line has the same direction as the
     * driving direction of the lane.
     *
     * Neighboring lanes (i.e. lanes that are neighbors and whose directions
     * do not diverge significantly) are strongly encouraged to reference the
     * same ReferenceLine, so that vehicles that are next to each other on
     * neighboring lanes have comparable S positions.
     *
     * The S coordinate of the reference line makes it easy to find e.g. which
     * object is next on a lane, using the LogicalLaneAssignment of the
     * objects.
     *
     * The reference trajectory must be sampled such that there are no two
     * positions on the lane more than 5cm apart with the same ST coordinate.
     *
     * \rules
     * refers_to: ReferenceLine
     * \endrules
     */
    reference_line_id?: Identifier | undefined;
    /**
     * Start S position of the lane.
     *
     * Must be in range [\c sStart,\c sEnd] of the reference line.
     */
    start_s?: number | undefined;
    /**
     * End S position of the lane.
     *
     * Must be in range [\c sStart,\c sEnd] of the reference line.
     *
     * Requirement: #end_s > #start_s
     */
    end_s?: number | undefined;
    /** Definition of the intended driving direction. */
    move_direction?: LogicalLane_MoveDirection | undefined;
    /**
     * Lanes that are directly right of this lane, without gap or overlap.
     *
     * "Right" is in definition direction (not driving direction), so right lanes
     * have smaller T coordinates.
     * Entries must be ordered: first by #start_s, then by #end_s.
     *
     * The XY positions of the polyline generated by the LogicalLaneBoundaries
     * of adjacent lanes must match up to a small error (5cm).
     * Typically adjacent lanes will share a LogicalLaneBoundary, but this will
     * not always be true. Examples: on intersections, it might be hard to generate
     * data such that lanes that are adjacent for a short length share a
     * LogicalLaneBoundary for this length; also different LogicalLaneBoundaries
     * are needed if the lanes have different heights at their boundaries (e.g.
     * road adjacent to a sidewalk).
     */
    right_adjacent_lane?: LogicalLane_LaneRelation[] | undefined;
    /**
     * Lanes that are directly left of this lane, without gap or overlap.
     *
     * "Left" is in definition direction (not driving direction), so left lanes
     * have larger T coordinates.
     * Entries must be ordered: first by #start_s, then by #end_s.
     *
     * The XY positions of the polyline generated by the LogicalLaneBoundaries
     * of adjacent lanes must match up to a small error (5cm).
     * Typically adjacent lanes will share a LogicalLaneBoundary, but this will
     * not always be true. Examples: on intersections, it might be hard to generate
     * data such that lanes that are adjacent for a short length share a
     * LogicalLaneBoundary for this length; also different LogicalLaneBoundaries
     * are needed if the lanes have different heights at their boundaries (e.g.
     * road adjacent to a sidewalk).
     */
    left_adjacent_lane?: LogicalLane_LaneRelation[] | undefined;
    /**
     * Lanes that partially or completely overlap this lane.
     *
     * Only overlaps laterally larger than 5cm are considered overlaps for the
     * purpose of this relation.
     *
     * This will typically contain a lot of entries on intersections, but might
     * also be used outside of intersections (e.g. if a #TYPE_BIKING lane
     * overlaps a #TYPE_NORMAL lane).
     *
     * Entries must be ordered: first by #start_s, then by #end_s.
     */
    overlapping_lane?: LogicalLane_LaneRelation[] | undefined;
    /**
     * Right boundary of this lane.
     *
     * References to LogicalLaneBoundary elements.
     * All LogicalLaneBoundary elements referenced here must refer to the same
     * ReferenceLine as this lane.
     * The boundaries together must cover the whole length of the lane (the
     * range \[#start_s,#end_s\]) without gap or overlap. The boundaries must be
     * stored in ascending order, starting with the smallest S position.
     * Consecutive boundaries must share a point: the last point of the
     * previous boundary must be identical to the first point of the next
     * boundary.
     *
     * Note: the referenced boundaries may have points outside of
     * \[#start_s,#end_s\] (e.g. a boundary may extend beyond the end of a lane).
     *
     * Note: A curb is a type of LogicalLane and of LaneBoundary.
     * If LogicalLane.Type == TYPE_CURB, by convention this
     * field references the respective LaneBoundary of TYPE_CURB
     * identically to the left_boundary_id of this LogicalLane.
     *
     * \rules
     * refers_to: LogicalLaneBoundary
     * \endrules
     */
    right_boundary_id?: Identifier[] | undefined;
    /**
     * Left boundary of this lane.
     *
     * References to LogicalLaneBoundary elements.
     * All LogicalLaneBoundary elements referenced here must refer to the same
     * ReferenceLine as this lane.
     * The boundaries together must cover the whole length of the lane (the
     * range \[#start_s,#end_s\]) without gap or overlap. The boundaries must be
     * stored in ascending order, starting with the smallest S position.
     * Consecutive boundaries must share a point: the last point of the
     * previous boundary must be identical to the first point of the next
     * boundary.
     *
     * Note: the referenced boundaries may have points outside of
     * \[#start_s,#end_s\] (e.g. a boundary may extend beyond the end of a lane).
     *
     * Note: A curb is a type of LogicalLane and of LaneBoundary.
     * If LogicalLane.Type == TYPE_CURB, by convention this
     * field references the respective LaneBoundary of TYPE_CURB.
     * identically to the right_boundary_id of this LogicalLane.
     *
     * \rules
     * refers_to: LogicalLaneBoundary
     * \endrules
     */
    left_boundary_id?: Identifier[] | undefined;
    /**
     * Lanes that directly are connected to this lane at the beginning.
     *
     * "Beginning" is relative to the reference line, so connections at #start_s.
     *
     * Lane predecessors and successors shall only be used to connect lanes if
     * a physical connection at the beginning or end of both lanes exist. Both
     * lanes have a non-zero width at the connection point and they are
     * semantically connected.
     *
     * A lane may have several predecessors e.g. on intersections, or if a wide
     * lane splits into two, or two merge into one.
     */
    predecessor_lane?: LogicalLane_LaneConnection[] | undefined;
    /**
     * Lanes that directly are connected to this lane at the end.
     *
     * "End" is relative to the reference line, so connections at #end_s.
     *
     * Lane predecessors and successors shall only be used to connect lanes if
     * a physical connection at the beginning or end of both lanes exist. Both
     * lanes have a non-zero width at the connection point and they are
     * semantically connected.
     *
     * A lane may have several successors e.g. on intersections, or if a wide
     * lane splits into two, or two merge into one.
     */
    successor_lane?: LogicalLane_LaneConnection[] | undefined;
    /** Name of the street this lane belongs to. */
    street_name?: string | undefined;
    /** A list of traffic rules on the lane. */
    traffic_rule?: LogicalLane_TrafficRule[] | undefined;
}
/**
 * Definition of available lane types.
 *
 * This is mostly aligned with OpenDRIVE, except that lane types modeling
 * access restrictions (e.g. "taxi") are not made available here. These are
 * already deprecated in OpenDRIVE.  To support this, access restrictions
 * should be added later, in alignment with OpenDRIVE.
 */
declare enum LogicalLane_Type {
    /** UNKNOWN - %Lane of unknown type. Do not use in ground truth. */
    UNKNOWN = 0,
    /** OTHER - Any other type of lane. */
    OTHER = 1,
    /**
     * NORMAL - A normal driving lane.
     * Example: Lanes with IDs l1, l2, l3 and l4 in image \ref
     * HighwayExit.
     * This matches the OpenDRIVE type "driving".
     *
     * Note: a lane with OpenDRIVE type "bidirectional" will have an OSI
     * type of TYPE_NORMAL, with <code>#move_direction ==
     * #MOVE_DIRECTION_BOTH_ALLOWED</code>.
     */
    NORMAL = 2,
    /**
     * BIKING - A lane that is designated for bicycles
     * Note that biking lanes that cross the road (e.g. on an intersection)
     * are also labeled with this type.
     */
    BIKING = 3,
    /**
     * SIDEWALK - A lane that is designated for pedestrians (sidewalk).
     * Note that pedestrian lanes that cross the road (e.g. on an
     * intersection) are also labeled with this type.
     */
    SIDEWALK = 4,
    /** PARKING - A lane with parking spaces. */
    PARKING = 5,
    /**
     * STOP - A hard shoulder on motorways for emergency stops.
     * Example: Lane l5 in image \ref
     * HighwayExit.
     */
    STOP = 6,
    /** RESTRICTED - A lane on which cars should not drive. */
    RESTRICTED = 7,
    /** BORDER - A hard border on the edge of a road. */
    BORDER = 8,
    /** SHOULDER - A soft border on the edge of a road. */
    SHOULDER = 9,
    /**
     * EXIT - A deceleration lane in parallel to the main road.
     * Example: Lane l6 in image \ref
     * HighwayExit.
     */
    EXIT = 10,
    /** ENTRY - An acceleration lane in parallel to the main road. */
    ENTRY = 11,
    /** ONRAMP - A ramp from rural or urban roads joining a motorway. */
    ONRAMP = 12,
    /** OFFRAMP - A ramp leading off a motorway onto rural or urban roads. */
    OFFRAMP = 13,
    /** CONNECTINGRAMP - A ramp that connect two motorways. */
    CONNECTINGRAMP = 14,
    /**
     * MEDIAN - A lane that sits between driving lanes
     * that lead in opposite directions. It is
     * typically used to separate traffic in
     * towns on large roads.
     */
    MEDIAN = 15,
    /**
     * CURB - Curb stones. Curb stones have a different
     * height than the adjacent drivable lanes.
     */
    CURB = 16,
    /**
     * RAIL - A rail lane. This lane covers the area a train needs to drive along
     * its rails.
     * #overlapping_lane then describes where a train crosses other lanes.
     */
    RAIL = 17,
    /**
     * TRAM - A tram lane. This lane covers the area a tram needs to drive along
     * its rails.
     * #overlapping_lane then describes where a tram crosses other lanes.
     */
    TRAM = 18
}
/**
 * Describes in which direction moving objects may typically move along a
 * lane.
 *
 * This describes the allowed typical driving direction on a lane, or (in
 * the case of pedestrian) the allowed walking direction.
 *
 * Note: Allowed overtaking (e.g. on country roads) does not automatically
 * make a lane bidirectional, since vehicles may normally only drive in the
 * other direction during the overtake maneuver, not for longer periods of
 * time.
 */
declare enum LogicalLane_MoveDirection {
    /** UNKNOWN - Move direction is unknown. Do not use in ground truth. */
    UNKNOWN = 0,
    /**
     * OTHER - Move direction fits neither of the other categories.
     *
     * Example: a lane where cars may only drive in one direction, but
     * bikes may drive in both.
     */
    OTHER = 1,
    /**
     * INCREASING_S - Objects may move in increasing S direction.
     *
     * This means they move in the same direction as the reference line.
     */
    INCREASING_S = 2,
    /**
     * DECREASING_S - Objects may move in decreasing S direction.
     *
     * This means they move in the opposite direction as the reference line.
     */
    DECREASING_S = 3,
    /** BOTH_ALLOWED - Objects may move in both directions. */
    BOTH_ALLOWED = 4
}
/** \brief Reference to a physical lane. */
interface LogicalLane_PhysicalLaneReference {
    /**
     * Id of the physical lane referenced.
     *
     * \rules
     * refers_to: Lane
     * \endrules
     */
    physical_lane_id?: Identifier | undefined;
    /** S position on the logical lane where the physical lane starts. */
    start_s?: number | undefined;
    /**
     * S position on the logical lane where the physical lane ends.
     *
     * Requirement: #end_s > #start_s
     */
    end_s?: number | undefined;
}
/** \brief Connection to another lane (predecessor or successor) */
interface LogicalLane_LaneConnection {
    /**
     * Id of the other logical lane that is connected.
     *
     * \rules
     * refers_to: LogicalLane
     * \endrules
     */
    other_lane_id?: Identifier | undefined;
    /**
     * If true: LaneConnection is at the beginning of the other lane
     * If false: LaneConnection is a the end of the other lane
     */
    at_begin_of_other_lane?: boolean | undefined;
}
/** \brief Relation of this lane to another logical lane */
interface LogicalLane_LaneRelation {
    /**
     * Id of the other logical lane.
     *
     * \rules
     * refers_to: LogicalLane
     * \endrules
     */
    other_lane_id?: Identifier | undefined;
    /** Start s position of the relation. */
    start_s?: number | undefined;
    /**
     * End s position of the relation.
     *
     * Requirement: #end_s > #start_s
     */
    end_s?: number | undefined;
    /**
     * Start s position of the relation on the other lane.
     *
     * This is the same place as #start_s, but measured along the reference
     * line of the other lane.
     */
    start_s_other?: number | undefined;
    /**
     * End s position of the relation on the other lane.
     *
     * This is the same place as #end_s, but measured along the reference
     * line of the other lane.
     *
     * Note: #end_s_other might be smaller than #start_s_other
     */
    end_s_other?: number | undefined;
}
/**
 * Describes traffic rules on a lane.
 * The traffic rule can thereby be induced by regulations, traffic signs
 * or by other means. If the modeled traffic rule is induced by a traffic sign
 * the information should be identical with the respective traffic sign.
 *
 * Note: Every instance should be corresponding to only one specific rule.
 * The type of the traffic rule should be set using the respective field.
 * Additionally, every message should contain the traffic rule validity information
 * and the respective field for the respective traffic rule type.
 * In case of traffic rule (priority) conflicts for rules of the same type that
 * can not be depicted using the traffic rule validity only the currently
 * valid rule should be provided.
 *
 * Note: Each traffic rule corresponds to only one lane. If the traffic rule
 * is also valid on adjacent/successor/predecessor lanes it needs to be
 * specified for each lane individually.
 *
 * \brief Logical Model of a traffic rule on a lane.
 */
interface LogicalLane_TrafficRule {
    /**
     * The type of the traffic rule.
     *
     * This specifies the type of the traffic rule to be modeled.
     * Based on the type the respective message containing the information
     * corresponding to the traffic rule should be filled.
     */
    traffic_rule_type?: LogicalLane_TrafficRule_TrafficRuleType | undefined;
    /** The validity information of the traffic rule. */
    traffic_rule_validity?: LogicalLane_TrafficRule_TrafficRuleValidity | undefined;
    /** Traffic rule information for traffic rule of type speed limit. */
    speed_limit?: LogicalLane_TrafficRule_SpeedLimit | undefined;
}
/** The type of the the traffic rule. */
declare enum LogicalLane_TrafficRule_TrafficRuleType {
    /** SPEED_LIMIT - Traffic rule is of type speed limit */
    SPEED_LIMIT = 0
}
/** \brief Validity information for a traffic rule. */
interface LogicalLane_TrafficRule_TrafficRuleValidity {
    /**
     * The starting point of the traffic rule validity on the lane.
     * Must be in range [\c sStart,\c sEnd] of the reference line.
     *
     * Note: The traffic rule applies only to traffic with notional
     * direction of travel from the start_s coordinate towards
     * the end_s coordinate. For unidirectional lanes this must
     * match the direction of travel as specified by the
     * move_direction field of the logical lane. For bidirectional
     * lanes this allows the specification of separate rules for
     * each direction of travel.
     */
    start_s?: number | undefined;
    /**
     * The ending point of the traffic rule validity on the lane.
     * Must be in range [\c sStart,\c sEnd] of the reference line.
     */
    end_s?: number | undefined;
    /**
     * List of traffic participant types for which the speed limit is valid.
     * If the traffic rule validity is independent of the vehicle type
     * the list should be empty.
     */
    valid_for_type?: LogicalLane_TrafficRule_TrafficRuleValidity_TypeValidity[] | undefined;
}
/** \brief Type of traffic participant for which a rule is valid. */
interface LogicalLane_TrafficRule_TrafficRuleValidity_TypeValidity {
    /** The type of object for which the traffic rule is valid. */
    type?: MovingObject_Type | undefined;
    /**
     * Vehicle classification type for traffic participants.
     *
     * Should be set to TYPE_UNKNOWN if type is not TYPE_VEHICLE
     * or the rule is valid for all vehicle types.
     */
    vehicle_type?: MovingObject_VehicleClassification_Type | undefined;
    /**
     * Role of traffic participant.
     *
     * Should be set to ROLE_UNKNOWN if type is not TYPE_VEHICLE
     * or the rule is valid for all vehicle roles.
     */
    vehicle_role?: MovingObject_VehicleClassification_Role | undefined;
}
/** \brief Speed limit on a lane. */
interface LogicalLane_TrafficRule_SpeedLimit {
    /**
     * The value of the speed limit.
     * The unit field in the TrafficSignValue message may only be set to
     * units associated with velocities and must not be UNKNOWN.
     *
     * Note: All speed limits are to be modeled this way, independent
     * of how they are induced.
     */
    speed_limit_value?: TrafficSignValue | undefined;
}

/**
 * \brief A reference line for defining a non-Euclidean ST coordinate system
 *
 * A reference line is a 3D polyline, used for generating a non-Euclidean
 * ST coordinate system.
 *
 * \note This ST coordinate system is specific to OSI and not to be confused with
 *       similar definitions in other standards like OpenDRIVE or OpenSCENARIO 1.x.
 *       Nevertheless the goal of this definition is to approximate the source
 *       coordinates (e.g. OpenDRIVE).
 *
 * Notes on design decisions:
 * - This is a polyline, and not some more complex curve. The advantage of a
 *   polyline is that it is very simple to generate from various map formats,
 *   and it is also easy to handle. The downside is that a polyline has no
 *   direct curvature, and even the angle is not continuous (only C0 smooth).
 *   In the author's experience, the benefits of a polyline outweigh the costs.
 */
interface ReferenceLine {
    /**
     * The ID of the reference line.
     *
     * \note Note ID is global unique.
     *
     * \rules
     * is_globally_unique
     * is_set
     * \endrules
     */
    id?: Identifier | undefined;
    /** The type of the reference line. */
    type?: ReferenceLine_Type | undefined;
    /**
     * Points comprising the polyline.
     *
     * At least two points must be given.
     * The polyline is defined as the lines between consecutive points.
     * Each point has an S coordinate. Other attributes might be set, depending
     * on the type of the polyline (see Type).
     *
     * ## Rules on the S position
     *
     * There are a few requirements on the S position:
     * - Later points in the list must have strictly larger S coordinates than
     *   earlier points.
     * - For consecutive points, the S difference between them  must be at
     *   least as large as the 2D Euclidean distance between the points (2D
     *   distance == Euclidean distance between the points taking only X and Y
     *   into account).
     * - The S distance between two points may be larger than the 2D Euclidean
     *   distance, but should be not much larger. It is allowed to be larger if
     *   the underlying reference line (e.g. in an OpenDRIVE map) is a curve,
     *   and thus the sampled reference line has a smaller length than the original
     *   curve.
     *
     * Together, these rules allow directly putting OpenDRIVE S coordinates
     * into an OSI ReferenceLine.
     *
     * If the reference line approximates a curve (e.g. a clothoid in
     * OpenDRIVE), the points must be chosen in a way that the lateral distance
     * to the ideal line does not exceed 5cm. As shown in the following image:
     *
     * \image html line_approximation_error.svg "Approximation error"
     * Approximation error green line.
     *
     * Between two ReferenceLinePoints, both the world coordinate and the S
     * coordinate is interpolated linearly. So each S value uniquely describes
     * a point on the polyline.
     *
     * ## Extending the coordinate system infinitely
     *
     * For the purpose of this discussion, let's call the S position of the
     * first point \c sStart, and the S position of the last point \c sEnd.
     *
     * For some purposes, S positions outside the normally defined range (i.e.
     * outside [\c sStart,\c sEnd]) need to be defined. For this purpose, the
     * first line of the polyline is infinitely extended in negative S
     * direction.  Similarly, the last line of the polyline is infinitely
     * extended beyond the last point. The S value of points outside [\c
     * sStart,\c sEnd] is defined by the Euclidean 2D distance from the start
     * or end point, respectively.  So if <code>sStart = 15</code>, and a point
     * is on the line extended from the start position, with a 2D Euclidean
     * distance of 10 from the first point, then it has an S position of 5.
     *
     * A point is "before" the reference line, if its s coordinate is < \c sStart.
     * A point is "after" the reference line, if its s coordinate is > \c sEnd.
     *
     * ## Adding T coordinates
     *
     * To describe points that are not directly on the polyline, a T coordinate
     * is added. T is the signed 2D distance between the point to describe (P)
     * and a projected point (P_proj) on the polyline. There are two ways of
     * defining this point, depending on the ReferenceLine::Type (see below).
     *
     * The T coordinate of the point in question is then defined as
     * <code>hypot(P.X-P_proj.X,P.Y-P_proj.Y)</code>. The projected point P_proj
     * might either be on a line segment or at an edge between two line segments.
     * The distance is positive if the point is left of the polyline (in
     * definition direction), negative if it is right of it. The S position of
     * such a point outside the reference line is the same as the S value of the
     * projected point on the polyline.
     *
     * ## Nearest point (TYPE_POLYLINE)
     *
     * The projection point is the nearest point on the polyline (this point might
     * either be on a line segment or at an edge between two line segments).
     *
     * Notes:
     * - The "nearest point on the polyline" is determined in 3D (even if the
     *   resulting T value is only the 2D distance), in order to choose the
     *   correct point for 3D curves (think reference lines for roads in parking
     *   decks).
     * - If there are several "nearest points", the one with the smallest S
     *   coordinate on the polyline is chosen.
     *
     * Example:
     * \image html OSI_ReferenceLine1.svg "S, T calculation using nearest point"
     *
     * This shows a reference line (consisting of three points), and five points
     * not on the reference line.
     *
     * - For \c P1, the situation is clear, since there is exactly one nearest
     *   point on the polyline. The resulting ST coordinate uniquely maps back
     *   to \c P1.
     * - \c P2 has multiple points "nearest points" on the polyline.
     *   As can be seen here, two  ST coordinates map to \c P2 (red and gray
     *   dotted line).  Following the rules above, the one with the smallest S
     *   value is chosen (the red dotted line).
     * - \c P3 has a unique "nearest point" on the polyline. However, multiple
     *   points map to the same ST coordinate as that of \c P3, e.g. \c P4
     *   (drawn in gray).
     * - Finally, \c P5 shows how the reference line is extended infinitely for
     *   points that are "outside" the reference line.
     *
     * ## T axis definition (TYPE_POLYLINE_WITH_T_AXIS)
     *
     * The T axes of the two ReferenceLinePoints of each ReferenceLine segment
     * define a sector (or strip if parallel) of the plane. A point is associated
     * with the segment if it lies within this sector. For points being
     * associated with multiple segments, the actual segment to consider is
     * determined by the shortest 3D Euclidean distance between the point and the
     * segments in question.
     *
     * The T axis (projecting axis) is the line going through P and the
     * intersection point (I). I is defined as the intersection of both
     * T axes of two consecutive ReferenceLinePoints (see example and
     * image below for illustration).
     *
     * Special cases:
     * 1. If both T axes of the consecutive ReferenceLinePoint are parallel (so
     *    no intersection point exists), the resulting T axis orientation is equal
     *    to the T axis of these ReferenceLinePoints.
     * 2. For the extended lines outside the defined range the projection axis is
     *    parallel to the T axis of the respective end point.
     *
     * ## Rules on the T axis
     *
     * For the T axis at a specific ReferenceLinePoint the following rules apply:
     * - The T axis shall be close to the angle bisector (to the left in S
     *   direction) of the neighboring ReferenceLine segments.
     * - Small deviations from the angle bisector are allowed (e.g. to represent
     *   the T axis of OpenDRIVE, which is perpendicular to the OpenDRIVE
     *   reference line).
     * - The T axis must be located inside the sectors spanned by rotating the
     *   normal of one neighboring ReferenceLine segment into the normal of the
     *   other ReferenceLine segment on the shortest way.
     * - The T axis in the first and the last point of a ReferenceLine has to be
     *   perpendicular to the first and last segment of the ReferenceLine,
     *   respectively.
     *
     * Example:
     * \image html OSI_ReferenceLine2.svg "S, T calculation using T axis"
     *
     * This shows a reference line (consisting of three points \c R0, \c R1 and
     * \c R2) and two points (\c P1 and \c P2) not part of the reference line.
     *
     * Calculation of ST for \c P1:
     * - Calculate the intersection point \c I of the T axes of \c R0 and \c R1.
     * - As \c P1 lies in the sector defined by these T axes it is considered part
     *   of the reference line section between \c R0 and \c R1.
     * - The point \c P1 is projected onto the line segment [\c R0, \c R1] via the
     *   straight line through \c I (by calculating the intersection of the line
     *   segment and the projection axis), resulting in point \c P1_proj.
     *   If the T axes are parallel, projection is applied in the direction of
     *   these axes.
     * - The S coordinate of \c P1 is the S coordinate of \c P1_proj
     * - The T coordinate of \c P1 is the signed Euclidean distance to \c P1_proj.
     *
     * Calculation of \c P2 follows the same pattern.
     *
     * ## Defining angles
     *
     * Sometimes an angle to a reference line is needed. This shall be defined
     * as follows:
     * First the projected point on the polyline is determined, as described
     * below. If this point is on a line segment, then the angle is calculated
     * relative to the line segment on which the reference point lays.
     * If the projected point is at the edge between line segments, then the
     * angle of the following line shall be chosen.
     *
     * ## Converting between world coordinates and ST coordinates
     *
     * The above rules define an ST coordinate system across the whole XY plane.
     * Every XY position has an ST coordinate, but not necessarily a unique ST
     * coordinate.
     *
     * The sampling of the polyline must be chosen such that the error
     * when converting coordinates is "small enough". The exact needed
     * precision is defined for each user, where the reference line is
     * referenced.
     *
     * ## Creating reference lines
     *
     * When OSI is generated from OpenDRIVE, typically the reference lines will
     * be taken directly from the road reference lines in OpenDRIVE, and
     * sampled according to the accuracy requirements outlined above.
     *
     * Other map formats may not have reference lines, so they will have to be
     * synthesized by the tool generating OSI data. A few guidelines on this
     * process:
     *
     * - The reference line should follow the road
     * - It is preferable to have the reference line in the center of the road
     *   (e.g. on a highway, it should be in the middle between the two driving
     *   directions). Rationale: this makes S differences better approximate
     *   Euclidean distances, compared to having the reference line at one side
     *   of a curvy road.
     *
     * ## Various notes
     *
     * Notes on OpenDRIVE compatibility:
     * Ideally, one would want the polyline to be fully compatible with
     * OpenDRIVE, so that calculations done for OpenDRIVE directly match those
     * in OSI. There are a few difficulties with this:
     * - The T coordinate is nearly the same as for OpenDRIVE, but
     *   unfortunately not perfectly. In OpenDRIVE, if the road is tilted using
     *   superelevation, then the t coordinate system is tilted along, so the T
     *   coordinate is no longer calculated in the XY plane (as proposed for
     *   OSI). It doesn't seem feasible to implement the same tilting for OSI,
     *   so simulation tools will have to consider superelevation and convert
     *   the T coordinate accordingly: <code>t_OSI = t_OpenDRIVE *
     *   cos(alpha)</code>, where alpha is the superelevation angle.
     * - The angle will not be perfectly the same, due to the use of line
     *   segments in OSI, and curves in OpenDRIVE. In the authors opinion, the
     *   difference will be negligible if the #poly_line is suitably sampled.
     *
     * Notes on design decisions:
     * - The S coordinate is included directly, both for OpenDRIVE
     *   compatibility, and to speed up calculations.
     * - The rules on S coordinates (e.g. the calculation in 2D space) are
     *   there to ensure OpenDRIVE compatibility.
     * - The rules on T coordinates are there to ensure OpenDRIVE compatibility
     *   for lanes without superelevation, and to make it easier to convert
     *   between OSI and OpenDRIVE in case superelevation is present.
     */
    poly_line?: ReferenceLine_ReferenceLinePoint[] | undefined;
}
/**
 * ReferenceLine types
 *
 * ReferenceLinePoints might be interpreted differently depending on the type
 * of the ReferenceLine.
 *
 * See also: "Adding T coordinates"
 */
declare enum ReferenceLine_Type {
    /**
     * POLYLINE - ReferenceLine is a polyline, where the coordinates of points are
     * calculated by projection onto the nearest point on the line.
     *
     * \attention DEPRECATED: Due to the shortcomings documented below, this
     *            type will be removed in 4.0.0.
     */
    POLYLINE = 0,
    /**
     * POLYLINE_WITH_T_AXIS - ReferenceLine is a polyline, where the coordinates of points are
     * calculated using the T axis definition.
     *
     * \note If this type is used, ReferenceLinePoint::t_axis_yaw must be set.
     */
    POLYLINE_WITH_T_AXIS = 1
}
/** \brief A point on the reference line */
interface ReferenceLine_ReferenceLinePoint {
    /** A world position */
    world_position?: Vector3d | undefined;
    /** S position on the reference line */
    s_position?: number | undefined;
    /**
     * Yaw angle of the T axis in the world coordinate system
     *
     * When converting from formats like OpenDRIVE, the yaw angle is equal to
     * the angle of the normal to the reference line in the sampled point.
     *
     * Also see image "S, T coordinates" at #poly_line for reference.
     *
     * \note This field is only set if the type of the reference line is
     *       TYPE_POLYLINE_WITH_T_AXIS.
     */
    t_axis_yaw?: number | undefined;
}

/**
 * \brief The ground truth information from the simulation environment.
 *
 * This ground truth information is supposed to describe the whole simulated
 * environment around any simulated vehicle. For each simulated host vehicle
 * (there may be one or multiple), define an area around the vehicle which
 * is greater than the combined field of views (FOV) of all obstructed sensors
 * in the vehicle. The ground truth data is supposed to describe the convex
 * hull of all such areas w.r.t. a global simulation coordinate system.
 *
 * The simulation coordinate system may change during the simulation if and
 * only if all coordinates w.r.t. this coordinate system are also changed.
 *
 * The data has to be sent at a rate defined by the receiving partner. When
 * sending, values with default values might be left default in order to improve
 * performance.
 *
 * To provide a complete interface, all fields of all contained messages must be
 * properly set unless specifically stated in the field's definition that the
 * field may remain unset.
 *
 * In enums (e.g. types) the unknown (first / default) value is not allowed to
 * be used in the ground truth interface.
 *
 * \image html OSI_GroundTruth.svg "Ground Truth"
 */
interface GroundTruth {
    /**
     * The interface version used by the sender (i.e. the simulation
     * environment).
     *
     * \rules
     * is_set
     * \endrules
     */
    version?: InterfaceVersion | undefined;
    /**
     * The data timestamp of the simulation environment. The zero time point is
     * arbitrary but must be identical for all messages.
     * Recommendation: Zero time point for start point of the simulation.
     *
     * \note Zero time point does not need to coincide with the UNIX epoch.
     *
     * \note For ground truth data this timestamp coincides both with the
     * notional simulation time the data applies to and the time it was sent
     * (there is no inherent latency for ground truth data, as opposed to
     * sensor data).
     *
     * \rules
     * is_set
     * \endrules
     */
    timestamp?: Timestamp | undefined;
    /**
     * The ID of the host vehicle object referencing to \c MovingObject .
     *
     * \note This ID has to be filled and is not optional!
     *
     * \rules
     * refers_to: MovingObject
     * is_set
     * \endrules
     */
    host_vehicle_id?: Identifier | undefined;
    /**
     * The list of stationary objects (excluding traffic signs and traffic
     * lights).
     */
    stationary_object?: StationaryObject[] | undefined;
    /** The list of all other moving objects including all (host) vehicles. */
    moving_object?: MovingObject[] | undefined;
    /** The list of traffic signs. */
    traffic_sign?: TrafficSign[] | undefined;
    /** The list of traffic lights. */
    traffic_light?: TrafficLight[] | undefined;
    /**
     * The list of road surface markings (lane markings are excluded and
     * defined as \c LaneBoundary).
     */
    road_marking?: RoadMarking[] | undefined;
    /** The list of lane boundaries. */
    lane_boundary?: LaneBoundary[] | undefined;
    /** The list of lanes forming a road network. */
    lane?: Lane[] | undefined;
    /** The list of passengers in the (host) vehicle(s). */
    occupant?: Occupant[] | undefined;
    /** Conditions of the environment. */
    environmental_conditions?: EnvironmentalConditions | undefined;
    /**
     * The ISO country code in 3 digit numeric format according to:
     * ISO Code 3166/1 [1].
     * E.g. Germany = 276, USA = 840.
     *
     * \par Reference:
     * [1] ISO International Organization for Standardization. (2013). <em>ISO 3166-1 Codes for the representation of names of countries and their subdivisions - Part 1: Country codes</em>. (ISO 3166-1:2013). Geneva, Switzerland.
     *
     * \rules
     * is_iso_country_code
     * \endrules
     */
    country_code?: number | undefined;
    /**
     * Projection string that allows to transform all coordinates in GroundTruth
     * into a different cartographic projection after the \c proj_frame_offset
     * has been applied.
     *
     * The string follows the PROJ rules for projections [1].
     *
     * \par Reference:
     * [1] PROJ contributors. (2019). <em>PROJ coordinate transformation software library</em>. Open Source Geospatial Foundation. Retrieved January 25, 2019, from https://proj.org/usage/projections.html
     */
    proj_string?: string | undefined;
    /**
     * Opaque reference of a map.
     *
     * \note Origin and orientation of the map have to coincide with the
     * inertial coordinate frame of the ground truth.
     *
     * \note It is implementation-specific how map_reference is resolved.
     */
    map_reference?: string | undefined;
    /**
     * Opaque reference of an associated 3D model.
     *
     * The model covers the static parts of the environment that are not
     * provided as individual models referenced from ground truth objects
     * like moving or stationary objects.
     *
     * \note Origin and orientation of the model have to coincide with the
     * inertial coordinate frame of the ground truth.
     *
     * \note It is implementation-specific how model_references are resolved to
     * 3d models. The parts the world model contains are also implementation-specific.
     * For example, the world model can either contain street geometries or
     * derives street geometries automatically from a map reference.
     */
    model_reference?: string | undefined;
    /** Reference lines used by LogicalLane */
    reference_line?: ReferenceLine[] | undefined;
    /** Logical lane boundaries used by LogicalLane */
    logical_lane_boundary?: LogicalLaneBoundary[] | undefined;
    /** Logical lanes used e.g. by traffic agents */
    logical_lane?: LogicalLane[] | undefined;
    /** Coordinate frame offset to be used for PROJ transformations. */
    proj_frame_offset?: GroundTruth_ProjFrameOffset | undefined;
}
/**
 * \brief Coordinate frame offset to transform from OSI's global coordinate
 * system to a coordinate reference system to be used for given PROJ
 * transformations.
 *
 * If an offset is defined, always apply the \c proj_frame_offset on
 * global OSI coordinates before applying any transformations defined in
 * \c proj_string.
 *
 * To apply the offset, global coordinates are first translated by the given
 * positional offset (x,y,z). Then, the yaw angle is used to rotate around
 * the new origin.
 *
 * The offset is applied on global OSI coordinates using an affine
 * transformation with rotation around z-axis:
 *
 * xWorld = xOSI * cos(yaw) - yOSI * sin(yaw) + xOffset
 *
 * yWorld = xOSI * sin(yaw) + yOSI * cos(yaw) + yOffset
 *
 * zWorld = zOSI + zOffset
 *
 * If no yaw is provided (recommended), the formulas simplify to:
 *
 * xWorld = xOSI + xOffset
 *
 * yWorld = yOSI + yOffset
 *
 * zWorld = zOSI + zOffset
 */
interface GroundTruth_ProjFrameOffset {
    /** Positional offset for relocation of the coordinate frame. */
    position?: Vector3d | undefined;
    /**
     * Yaw/heading angle for re-orientation of the coordinate frame around
     * the z-axis.
     */
    yaw?: number | undefined;
}

/**
 * \brief A route in the road network
 *
 * A route is an e.g. planned or suggested path for an agent to travel from one
 * location to another within the road network. It is composed of a list of route
 * segments, which form a continuous path through the road network and should be
 * traversed in the order they are listed.
 * The route allows the simulation environment to provide agents with high level
 * path information, similar to that of a map or a navigation system, without the
 * need for the agent model to perform complex path planning on its own. This
 * allows for an efficient control of the agent's general direction, while
 * simultaneously giving it enough freedom on how to traverse the path.
 *
 * ## Example
 *
 * The example below shows the \link Route route\endlink of a vehicle.
 *
 * \image html OSI_Planned_Route.png "Route" width=850px
 *
 * The route is composed of three \link RouteSegment route segments\endlink RS1-3,
 * each indicated by a yellow outline. Two of the route segments
 * (RS2 and RS3) only contain a single \link LogicalLaneSegment logical lane segment\endlink
 * (highlighted in blue), while RS1 is composed of three
 * logical lane segments (green, blue and red).
 */
interface Route {
    /**
     * The unique id of the route.
     *
     * \note This field is mandatory.
     *
     * \note This id must be unique within all route messages exchanged with
     * one traffic participant.
     *
     * \rules
     * is_set
     * \endrules
     */
    route_id?: Identifier | undefined;
    /**
     * Route segments that form the route of an agent.
     *
     * Consecutive segments should be connected without gaps, meaning that the
     * two of them should form a continuous area.
     */
    route_segment?: Route_RouteSegment[] | undefined;
}
/**
 * \brief A segment of a logical lane.
 *
 * \note The LogicalLaneSegment allows that start_s > end_s.
 * If start_s < end_s, then the traffic agent should traverse the
 * segment in the logical lane's reference line definition direction.
 * If end_s > start_s, then the traffic agent should traverse the
 * segment in the opposite of the logical lane's reference line
 * definition direction.
 */
interface Route_LogicalLaneSegment {
    /**
     * The ID of the logical lane this segment belongs to.
     *
     * \rules
     * refers_to: LogicalLane
     * \endrules
     */
    logical_lane_id?: Identifier | undefined;
    /** S position on the logical lane where the segment starts. */
    start_s?: number | undefined;
    /** S position on the logical lane where the segment ends. */
    end_s?: number | undefined;
}
/**
 * \brief A segment of a route.
 *
 * A route segment describes a segment of a traffic agent's route through the
 * logical lanes of the road network.
 *
 * Each time there is a successor-predecessor relation between the logical
 * lanes along the route (i.e. a logical lane ends, and is continued by another
 * logical lane, e.g. at a junction border), a new RouteSegment starts. The
 * RouteSegment then lists the logical lane segments that can be used to
 * travel through this space of the road.
 *
 * Together, the listed logical lane segments should form a continuous area,
 * where the traffic agent can move freely. These will mostly be parallel
 * lanes, though lanes may overlap (e.g. if one lane splits into two on a
 * junction). In general, the logical lane segments in a RouteSegment will
 * have the same length, though there are exceptions (e.g. if a lane
 * widening occurs, the newly appearing lane will have a shorter length).
 *
 * Typically a route segment will be either
 * - a set of parallel lanes between two junctions, or
 * - parallel lanes on an intersection with the same driving direction
 *
 * ## Example
 *
 * Consider the \link RouteSegment route segment\endlink between two intersections,
 * shown in the image below.
 *
 * \image html OSI_Route_Segment.png "RouteSegment" width=850px
 *
 * In the example, a single route segment RS with three
 * \link LogicalLaneSegment logical lane segments\endlink LL1, LL2 and LL3 is
 * shown. The segments are indicated by the green, blue and red highlighted areas,
 * one for each underlying logical lane The starting
 * s-position of each segment is indicated by the yellow dotted line and the s- prefix
 * (note that the start of LL2 lies further to the left, outside of the image),
 * while the ending s-position of all segments is shown by the yellow dotted line e-RS.
 *
 * As it can be seen in the example, all logical lane segments are parallel,
 * but two of them are opening at a later position, so their starting
 * s-positions will be different.
 */
interface Route_RouteSegment {
    /**
     * Logical lane segments that form a route segment.
     *
     * The logical lane segments of a route segment should be connected without
     * gaps, meaning that, together, the lane segments should form a continuous
     * area.
     */
    lane_segment?: Route_LogicalLaneSegment[] | undefined;
}

/**
 * \brief Host vehicle data is about the perception of the vehicle about its own internal states.
 * It captures the knowledge the vehicle has internally, which can differ from the actual or global truth for various reasons.
 * This message can also be understood as an interface container for the signals of a rest bus simulation.
 *
 * It consists of different messages categorizing the vehicle in:
 * Basics, powertrain, brake system, steering, wheels and localization.
 *
 * \image html OSI_HostVehicle.svg
 */
interface HostVehicleData {
    /** The interface version used by the sender. */
    version?: InterfaceVersion | undefined;
    /**
     * The timestamp of the host vehicle data. Zero time is arbitrary but must be
     * identical for all messages. Zero time does not need to coincide with
     * the unix epoch. Recommended is the starting time point of the
     * simulation or measurement.
     *
     * \note This is the point in time that the host vehicle data message becomes
     * available as snapshot from the board net information.
     */
    timestamp?: Timestamp | undefined;
    /** The ID of the host vehicle in any associated GroundTruth data. */
    host_vehicle_id?: Identifier | undefined;
    /**
     * Deprecated: Will be removed in next major release. Moved to vehicle_localization.
     * Current estimated location based on GPS- and related navigation sensors.
     *
     * \note Note that dimension and base_polygon need not be set.
     */
    location?: BaseMoving | undefined;
    /**
     * Deprecated: Will be removed in next major release. Moved to vehicle_localization.
     * Current estimated location error based on GPS and related navigation
     * sensors.
     *
     * \note Note that dimension and base_polygon need not be set.
     */
    location_rmse?: BaseMoving | undefined;
    /** The basic parameters and overall states of the vehicle. */
    vehicle_basics?: HostVehicleData_VehicleBasics | undefined;
    /** Interface regarding the powertrain. */
    vehicle_powertrain?: HostVehicleData_VehiclePowertrain | undefined;
    /** Interface regarding the brake system. */
    vehicle_brake_system?: HostVehicleData_VehicleBrakeSystem | undefined;
    /** Interface regarding the steering. */
    vehicle_steering?: HostVehicleData_VehicleSteering | undefined;
    /** Interface regarding the internal wheel states. */
    vehicle_wheels?: HostVehicleData_VehicleWheels | undefined;
    /** Interface regarding the localization. */
    vehicle_localization?: HostVehicleData_VehicleLocalization | undefined;
    /**
     * State of any automated driving functions.
     *
     * This can include:
     *  - information presented to the driver, for example, parking sensors
     *  - warnings raised by the vehicle, for example, forward collision warning
     *  - corrective action taken by the vehicle, for example, auto emergency braking
     *  - full level 4 self driving systems
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    vehicle_automated_driving_function?: HostVehicleData_VehicleAutomatedDrivingFunction[] | undefined;
    /** Interface regarding the vehicle motion. */
    vehicle_motion?: HostVehicleData_VehicleMotion | undefined;
    /** Currently planned route of the vehicle */
    route?: Route | undefined;
}
/** \brief Base parameters and overall states of the vehicle. */
interface HostVehicleData_VehicleBasics {
    /**
     * The total mass of the vehicle (curb weight).
     *
     * Unit: kg
     *
     * \par Reference:
     * Paragraph 42 of the German Road Traffic Admission Regulations (StVZO).
     */
    curb_weight?: number | undefined;
    /** The operating state of the vehicle. */
    operating_state?: HostVehicleData_VehicleBasics_OperatingState | undefined;
}
/**
 * Possible operating states of the vehicle.
 * It is user specific which states are used and how their transitions work.
 */
declare enum HostVehicleData_VehicleBasics_OperatingState {
    /** UNKNOWN - The operating state is unknown. */
    UNKNOWN = 0,
    /** OTHER - The operating state is another one. */
    OTHER = 1,
    /**
     * SLEEP - The minimum electrical state of the vehicle (and its ECUs).
     * Usually the driver has left the vehicle a while ago.
     */
    SLEEP = 2,
    /**
     * STANDBY - Cabin lights and entertainment are off. The vehicle can not be driven.
     * Some ECUs are still operating and not in their minimum electrical sate.
     * Usually the driver has left (and closed) the vehicle recently.
     */
    STANDBY = 3,
    /**
     * BOARDING - Some features of the vehicle are available e.g. cabin lights.
     * Entertainment is off and the vehicle can not be driven.
     * Usually the driver wants to enter or leave the vehicle.
     */
    BOARDING = 4,
    /**
     * ENTERTAINMENT - Entertainment, navigation or similar systems can be used by the driver.
     * The vehicle can not be driven.
     * Usually the driver sits in the vehicle before or after a drive.
     */
    ENTERTAINMENT = 5,
    /** DRIVING - The electrical state that is necessary to drive the vehicle. */
    DRIVING = 6,
    /** DIAGNOSTIC - The electrical state that is necessary for analysis and diagnostics. */
    DIAGNOSTIC = 7
}
/** \brief State description of the powertrain. */
interface HostVehicleData_VehiclePowertrain {
    /**
     * Position of the acceleration pedal.
     * Range: 0-1 (Unpressed - fully pressed)
     */
    pedal_position_acceleration?: number | undefined;
    /**
     * Position of the clutch pedal.
     * Range: 0-1 (Unpressed - fully pressed)
     */
    pedal_position_clutch?: number | undefined;
    /**
     * The actual gear of the transmission.
     * For example, a gear lever can be on "D" and the transmission on "4", but not the
     * other way around.
     *
     * The sign of this field is linked to the gear's mode as following:
     * - zero: neutral position
     * - positive: driving forward mode
     * - negative: reverse mode (generally -1, but few vehicles have more than 1
     *   reverse mode gears)
     */
    gear_transmission?: number | undefined;
    /** Information about the motor(s). */
    motor?: HostVehicleData_VehiclePowertrain_Motor[] | undefined;
}
/** \brief A description of the motor states. */
interface HostVehicleData_VehiclePowertrain_Motor {
    /** The type of the motor. */
    type?: HostVehicleData_VehiclePowertrain_Motor_Type | undefined;
    /**
     * Revolutions per minute of the motor.
     *
     * Unit: 1/min
     */
    rpm?: number | undefined;
    /**
     * Torque of the motor.
     *
     * Unit: N*m
     */
    torque?: number | undefined;
}
/** Definition which type of motor is used. */
declare enum HostVehicleData_VehiclePowertrain_Motor_Type {
    /** UNKNOWN - The motor type is unknown. */
    UNKNOWN = 0,
    /** OTHER - It is another motor type. */
    OTHER = 1,
    /** OTTO - A motor working after the principle of Nicolaus Otto. */
    OTTO = 2,
    /** DIESEL - A motor working after the principle of Rudolf Diesel. */
    DIESEL = 3,
    /** ELECTRIC - A motor working electric. */
    ELECTRIC = 4
}
/** \brief The focus here is on the description of the brake system. */
interface HostVehicleData_VehicleBrakeSystem {
    /**
     * Position of the brake pedal.
     * Range: 0-1 (Unpressed - fully pressed)
     */
    pedal_position_brake?: number | undefined;
}
/** \brief The focus here is on the description of the steering train. */
interface HostVehicleData_VehicleSteering {
    /** Description of the steering wheel. */
    vehicle_steering_wheel?: VehicleSteeringWheel | undefined;
}
/** \brief The focus here is on the description of internal wheel states. */
interface HostVehicleData_VehicleWheels {
    /**
     * Description of each wheel.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    wheel_data?: HostVehicleData_VehicleWheels_WheelData[] | undefined;
}
/** \brief The focus here is on the description of internal wheel states. */
interface HostVehicleData_VehicleWheels_WheelData {
    /**
     * The axle which contains this wheel. A value of 0 represents the
     * foremost axle of the vehicle, with higher numbers ascending
     * towards the rearmost axle.
     */
    axle?: number | undefined;
    /**
     * The index of the wheel on the axle, counted in positive y- direction,
     * that is, right-to-left.
     *
     * For example, on a standard 2-axle, 4-wheel car, the rear-right
     * wheel would be (axle=1, index=0).
     * This concept also works for twin tires.
     */
    index?: number | undefined;
    /**
     * Rotation rate of the wheel based on the processed output of the hall sensor measurements at the wheel.
     * The rotation rate around the y-axis with respect to the wheel's coordinate system.
     *
     * Unit: rad/s.
     *
     * The sign convention is defined using the right-hand rule.
     * It is applied on the y-axis of the vehicle's reference system, that is, the center of bounding box.
     * Counterclockwise is positive and clockwise is negative.
     *
     * \image html OSI_RotationRate.svg
     * \note The vehicle's reference coordinate system is only used to determine the sign convention of the rotation rate.
     */
    rotation_rate?: number | undefined;
    /**
     * Contains the longitudinal, measured slip of the tire.
     * \par References:
     * [1] kfz-tech.de, Schlupf, Retrieved June 30, 2021, from https://www.kfz-tech.de/Biblio/Formelsammlung/Schlupf.htm
     *
     * Unit: %
     *
     * The sign convention is defined using the right-hand rule.
     * It is applied on the y-axis of the vehicle's reference system, that is, the center of bounding box.
     * Counterclockwise is positive and clockwise is negative.
     */
    slip?: number | undefined;
}
/**
 * \brief Current calculated and estimated location that can be based on GNSS and related navigation sensors.
 * This message does not contain the individual sensor values of the sensor technology.
 *
 * This message contains the most accurate information the vehicle knows about its position
 * available in the on-board network.
 * Because of this the values can differ from the "true" values calculated out of
 * GroundTruth::proj_string, GroundTruth::MovingObject::BaseMoving::position, GroundTruth::host_vehicle_id.
 *
 * This data uses the reference point coincident with the center (x,y,z) of the bounding box.
 */
interface HostVehicleData_VehicleLocalization {
    /**
     * Most accurate position information of the vehicle available in the on-board network
     * measured in context to the global coordinate system.
     */
    position?: Vector3d | undefined;
    /**
     * Most accurate orientation information of the vehicle available in the on-board network
     * measured in context to the global coordinate system.
     */
    orientation?: Orientation3d | undefined;
    /** Most accurate geodetic information of the vehicle available in the on-board network. */
    geodetic_position?: GeodeticPosition | undefined;
}
/**
 * \brief Current calculated and estimated motion related information.
 *
 * This message contains the most accurate information the vehicle knows about its motion
 * including vehicle dynamics and control related information available in the on-board network,
 * which can differ from the "true" values calculated out of the ground truth.
 *
 * This data uses the reference point coincident with the middle (in x, y and z) of rear axle
 * under neutral load conditions as defined in \c MovingObject::VehicleAttributes::bbcenter_to_rear.
 */
interface HostVehicleData_VehicleMotion {
    /**
     * Most accurate position of the vehicle available in the on-board network
     * measured in the cartesian global coordinate system.
     */
    position?: Vector3d | undefined;
    /**
     * Most accurate orientation information of the vehicle available in the on-board network
     * measured on the vehicle coordinate system in context of the global inertial system.
     */
    orientation?: Orientation3d | undefined;
    /**
     * Most accurate velocity information of the vehicle, available in the on-board network
     * measured on the vehicle coordinate system in context of the global inertial system.
     */
    velocity?: Vector3d | undefined;
    /**
     * Most accurate orientation rate of the vehicle, available in the on-board network
     * measured on the vehicle coordinate system in context of the global inertial system.
     */
    orientation_rate?: Orientation3d | undefined;
    /**
     * Most accurate acceleration information of the vehicle, available in the on-board network
     * measured on the vehicle coordinate system in context of the global inertial system.
     */
    acceleration?: Vector3d | undefined;
    /**
     * Most accurate curvature currently followed by vehicle and available in the on-board network
     *
     * Unit: m^-1
     */
    current_curvature?: number | undefined;
}
/** \brief State of one automated driving function on the host vehicle. */
interface HostVehicleData_VehicleAutomatedDrivingFunction {
    /** The particular driving function being reported about. */
    name?: HostVehicleData_VehicleAutomatedDrivingFunction_Name | undefined;
    /**
     * Custom driving function name.
     *
     * Only used if name is set to NAME_OTHER.
     */
    custom_name?: string | undefined;
    /**
     * The state of the function.
     *
     * This is whether the function has actually been triggered, for
     * example, a warning has been raised, or additional braking is
     * in effect.
     */
    state?: HostVehicleData_VehicleAutomatedDrivingFunction_State | undefined;
    /**
     * Custom state.
     *
     * Only used if the state is set to STATE_OTHER.
     */
    custom_state?: string | undefined;
    /** Whether, and how, the driver has overridden this function. */
    driver_override?: HostVehicleData_VehicleAutomatedDrivingFunction_DriverOverride | undefined;
    /**
     * Custom detail.
     *
     * An opaque set of key-value pairs which capture any user specific
     * details that may be relevant.  This could include details about
     * how a warning was raised (dashboard, audible, etc.) or it could
     * be about settings which would influence evaluation, such as
     * sensitivity settings.
     */
    custom_detail?: KeyValuePair[] | undefined;
}
/**
 * A list of possible automated driving features.
 *
 * \note This can span (in theory) from Level 0 all the way to Level 5.
 *
 * \par References:
 * [1] CLEARING THE CONFUSION: Recommended Common Naming for Advanced Driver Assistance Technologies, SAE International, Retrieved October 22, 2021, from https://www.sae.org/binaries/content/assets/cm/content/miscellaneous/adas-nomenclature.pdf
 * [2] Automated Driving, German Association of the Automotive Industry (VDA), Retrieved October 22, 2021, from https://www.vda.de/en/topics/innovation-and-technology/automated-driving/automated-driving
 */
declare enum HostVehicleData_VehicleAutomatedDrivingFunction_Name {
    /** UNKNOWN - Unknown feature, should not be used. */
    UNKNOWN = 0,
    /** OTHER - Custom feature, see custom_name. */
    OTHER = 1,
    /** BLIND_SPOT_WARNING - Blind spot warning. */
    BLIND_SPOT_WARNING = 2,
    /** FORWARD_COLLISION_WARNING - Forward collision warning. */
    FORWARD_COLLISION_WARNING = 3,
    /** LANE_DEPARTURE_WARNING - Lane departure warning. */
    LANE_DEPARTURE_WARNING = 4,
    /** PARKING_COLLISION_WARNING - Parking collision warning. */
    PARKING_COLLISION_WARNING = 5,
    /** REAR_CROSS_TRAFFIC_WARNING - Rear cross-traffic warning */
    REAR_CROSS_TRAFFIC_WARNING = 6,
    /** AUTOMATIC_EMERGENCY_BRAKING - Automatic emergency braking */
    AUTOMATIC_EMERGENCY_BRAKING = 7,
    /** AUTOMATIC_EMERGENCY_STEERING - Emergency steering */
    AUTOMATIC_EMERGENCY_STEERING = 8,
    /** REVERSE_AUTOMATIC_EMERGENCY_BRAKING - Reverse automatic emergency braking */
    REVERSE_AUTOMATIC_EMERGENCY_BRAKING = 9,
    /** ADAPTIVE_CRUISE_CONTROL - Adaptive cruise control */
    ADAPTIVE_CRUISE_CONTROL = 10,
    /** LANE_KEEPING_ASSIST - Lane keeping assist */
    LANE_KEEPING_ASSIST = 11,
    /** ACTIVE_DRIVING_ASSISTANCE - Active driving assistance */
    ACTIVE_DRIVING_ASSISTANCE = 12,
    /** BACKUP_CAMERA - Backup camera */
    BACKUP_CAMERA = 13,
    /** SURROUND_VIEW_CAMERA - Surround view camera */
    SURROUND_VIEW_CAMERA = 14,
    /** ACTIVE_PARKING_ASSISTANCE - Active parking assistance */
    ACTIVE_PARKING_ASSISTANCE = 15,
    /** REMOTE_PARKING_ASSISTANCE - Remote parking assistance */
    REMOTE_PARKING_ASSISTANCE = 16,
    /** TRAILER_ASSISTANCE - Trailer assistance */
    TRAILER_ASSISTANCE = 17,
    /** AUTOMATIC_HIGH_BEAMS - Automatic high beams */
    AUTOMATIC_HIGH_BEAMS = 18,
    /** DRIVER_MONITORING - Driver monitoring */
    DRIVER_MONITORING = 19,
    /** HEAD_UP_DISPLAY - Head up display */
    HEAD_UP_DISPLAY = 20,
    /** NIGHT_VISION - Night vision */
    NIGHT_VISION = 21,
    /** URBAN_DRIVING - Urban driving */
    URBAN_DRIVING = 22,
    /** HIGHWAY_AUTOPILOT - Highway autopilot. */
    HIGHWAY_AUTOPILOT = 23,
    /** CRUISE_CONTROL - Cruise control. */
    CRUISE_CONTROL = 24,
    /** SPEED_LIMIT_CONTROL - Speed limit control */
    SPEED_LIMIT_CONTROL = 25
}
/**
 * The state that the feature is in.
 *
 * \note Not all of these will be applicable for all vehicles
 * and features.
 */
declare enum HostVehicleData_VehicleAutomatedDrivingFunction_State {
    /** UNKNOWN - An unknown state, this should not be used. */
    UNKNOWN = 0,
    /**
     * OTHER - Used for custom states not covered by the definitions below.
     *
     * A string state can be specified in custom_state.
     */
    OTHER = 1,
    /** ERRORED - The function has thrown an error in some way that renders it ineffective. */
    ERRORED = 2,
    /**
     * UNAVAILABLE - The function cannot be used due to unfulfilled preconditions,
     * for example it is a highway only feature and the vehicle is in
     * an urban environment.
     */
    UNAVAILABLE = 3,
    /**
     * AVAILABLE - The function can be used as all preconditions are satisfied, but
     * it hasn't been enabled.
     */
    AVAILABLE = 4,
    /**
     * STANDBY - The function is available but conditions have not caused it to be
     * triggered, for example, no vehicles in front to trigger a forward collision warning.
     */
    STANDBY = 5,
    /**
     * ACTIVE - The function is currently active, for example, a warning is being
     * shown to the driver, or emergency braking is being applied/
     */
    ACTIVE = 6
}
/**
 * \brief Driver override information
 *
 * Information about whether and how and driver may have overridden
 * an automated driving function.
 */
interface HostVehicleData_VehicleAutomatedDrivingFunction_DriverOverride {
    /**
     * The feature has been overridden by a driver action.
     *
     * \note If false, the rest of this message should be ignored.
     */
    active?: boolean | undefined;
    /** What driver inputs have caused the override. */
    override_reason?: HostVehicleData_VehicleAutomatedDrivingFunction_DriverOverride_Reason[] | undefined;
}
/** Ways in which a driver could override a driving function. */
declare enum HostVehicleData_VehicleAutomatedDrivingFunction_DriverOverride_Reason {
    /** BRAKE_PEDAL - The driver has applied sufficient input via the break pedal. */
    BRAKE_PEDAL = 0,
    /** STEERING_INPUT - The driver has applied sufficient steering input. */
    STEERING_INPUT = 1
}

/**
 * \brief The configuration settings for the \c SensorView to be provided
 * by the environment simulation.
 *
 * This message can be provided by the sensor model to the environment
 * simulation, in which case it describes the input configuration that
 * is desired by the sensor model. In response the environment simulation
 * will configure the input and provide a new message of this type, which
 * describes the actual configuration that it is going to employ. The two
 * can and will differ, when either the environment simulation does not
 * support a given requested configuration, and/or when the requested
 * configuration allowed for multiple alternatives, in which case the set
 * configuration will only contain the alternative chosen.
 *
 * It should be noted that this message is not intended to provide for
 * parametrization of a generic sensor model, but rather for the automatic
 * configuration of an environment simulation in order to supply the
 * necessary input to it, depending on its actual configuration.
 * Mechanisms to parametrize sensor models are currently packaging-specific,
 * i.e. they depend on the packaging mechanism chosen:  For FMU-packaging
 * the parametrization can be implemented using normal FMU parameters,
 * and the requested \c SensorViewConfiguration can depend on those parameter
 * values by being defined as a calculatedParameter.
 *
 * The sensor-technology specific configurations are intended to allow
 * sensor models to use useful sensor modeling base capabilities of the
 * environment simulation (e.g. ray tracing engines, camera/lens image
 * generation), which need configuration by the sensor model to supply
 * suitable data. The specified details are not directly related to
 * sensor details, but rather provide the necessary base machinery
 * setup so that the data provided is suitable to model the sensor to
 * a sufficient degree of fidelity internally. For example the number
 * of rays parameters for the Lidar configuration does not match one to
 * one with the number of laser rays a lidar sensor might cast, but
 * rather specifies the number of rays being cast by a ray
 * casting/tracing engine, which might be many more than the physical
 * rays being cast at any point in time.
 *
 * This also implies that for sensors that have dynamically varying
 * characteristics (e.g. switching between wide and narrow focus,
 * switching update rates, etc.), the basic approach is to specify
 * the maximum amount of data needed at all times here, and internally
 * select the data that is needed at any point in time.
 *
 * In order to optimize the workload and bandwidth needed for sensor
 * simulation, OSI packaging mechanisms can specify the ability to
 * exchange \c SensorViewConfiguration messages not only prior to
 * simulation startup, but also dynamically during simulation runs,
 * thereby allowing dynamic input configuration switching to only
 * request data that is needed in the current sensor mode. However
 * this is more or less only a resource optimization strategy, and
 * since providing fine-grained information like this can reveal
 * internal characteristics of the sensor and/or sensor model, will
 * not always be the preferred approach for reasons of IP protection.
 */
interface SensorViewConfiguration {
    /**
     * The interface version used by the sender (simulation environment).
     *
     * \rules
     * is_set
     * \endrules
     */
    version?: InterfaceVersion | undefined;
    /**
     * The ID of the sensor at host vehicle's mounting_position.
     *
     * This is the ID of the virtual sensor, to be used in its detected
     * object output; it is distinct from the IDs of its physical detectors,
     * which are used in the detected features.
     *
     * The ID is to be provided by the environment simulation, the sensor
     * model is not in a position to provide a useful default value.
     *
     * \rules
     * is_set
     * \endrules
     */
    sensor_id?: Identifier | undefined;
    /**
     * The virtual mounting position of the sensor (origin and orientation
     * of the sensor coordinate system) given in vehicle coordinates [1].
     * The virtual position pertains to the sensor as a whole, regardless
     * of the actual position of individual physical detectors, and governs
     * the sensor-relative coordinates in detected objects of the sensor
     * as a whole. Individual features detected by individual physical
     * detectors are governed by the actual physical mounting positions
     * of the detectors, as indicated in the technology-specific sub-views
     * and sub-view configurations.
     *
     * \arg \b x-direction of sensor coordinate system: sensor viewing direction
     * \arg \b z-direction of sensor coordinate system: sensor (up)
     * \arg \b y-direction of sensor coordinate system: perpendicular to x and z
     * right hand system
     *
     * \par Reference:
     * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
     *
     * \note The origin of vehicle's coordinate system in world frame is
     * ( \c MovingObject::base . \c BaseMoving::position +
     * Inverse_Rotation_yaw_pitch_roll( \c MovingObject::base . \c
     * BaseMoving::orientation) * \c
     * MovingObject::VehicleAttributes::bbcenter_to_rear) . The orientation of
     * the vehicle's coordinate system is equal to the orientation of the
     * vehicle's bounding box \c MovingObject::base . \c
     * BaseMoving::orientation. \note A default position can be provided by the
     * sensor model (e.g. to indicate the position the model was validated for),
     * but this is optional; the environment simulation must provide a valid
     * mounting position (based on the vehicle configuration) when setting the
     * view configuration.
     */
    mounting_position?: MountingPosition | undefined;
    /** The root mean squared error of the mounting position. */
    mounting_position_rmse?: MountingPosition | undefined;
    /**
     * Field of View in horizontal orientation of the sensor.
     *
     * This determines the limit of the cone of interest of ground truth
     * that the simulation environment has to provide.
     * Viewing range: [- \c #field_of_view_horizontal/2,  \c
     * #field_of_view_horizontal/2] azimuth in the sensor frame as defined in \c
     * Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_horizontal?: number | undefined;
    /**
     * Field of View in vertical orientation of the sensor.
     *
     * This determines the limit of the cone of interest of ground truth
     * that the simulation environment has to provide.
     * Viewing range: [- \c #field_of_view_vertical/2,  \c
     * #field_of_view_vertical/2] elevation in the sensor frame at zero azimuth
     * as defined in \c Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_vertical?: number | undefined;
    /**
     * Maximum range of the sensor
     *
     * This determines the limit of the cone of interest of ground truth
     * that the simulation environment has to provide.
     *
     * Unit: m
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    range?: number | undefined;
    /**
     * The update cycle time of the sensor model.
     *
     * This specifies the rate at which the sensor model is provided with
     * new input data.
     *
     * Unit: s
     * \note In the case of FMU packaging this will correspond to the
     * communication step size.
     */
    update_cycle_time?: Timestamp | undefined;
    /**
     * Initial update cycle offset of the sensor model.
     *
     * This specifies the initial offset (i.e. initial delay) of the
     * sensor model update cycle that the simulation should take into
     * account. It is defined against a simulation start time of 0:
     * i.e. an initial offset of 0.008s would mean, that the initial
     * update of sensor input data to the model should occur at 0+0.008s,
     * and then update_cycle_time after that, etc. If the simulation
     * start time of the simulation is non-zero, then the offset still
     * has to be interpreted against a 0 start time, and not simply
     * added on top of the start time: e.g. if the simulation starts at
     * 0.030s, and the update cycle time is 0.020s, then the first
     * update to the sensor input should happen at 0.048s, or 0.018s
     * after simulation start. This convention is needed to ensure
     * stable phase position of the offset in the case of changing
     * simulation start times, e.g. for partial re-simulation.
     *
     * Unit: s
     */
    update_cycle_offset?: Timestamp | undefined;
    /**
     * Simulation Start time
     *
     * This specifies the simulation start time that the Simulation
     * has chosen. This field has no defined meaning if provided by
     * the sensor model.
     *
     * Unit: s
     */
    simulation_start_time?: Timestamp | undefined;
    /**
     * Omit Static Information
     *
     * This flag specifies whether \c GroundTruth information that
     * was already provided using a GroundTruthInit parameter (e.g. <a href="https://opensimulationinterface.github.io/osi-antora-generator/asamosi/latest/sensor-model/spec/ground_truth_init_parameters.html">OSMP GroundTruthInit</a>)
     * at initialization time shall be omitted from the \c SensorView
     * ground truth information.
     *
     * Setting the \c #omit_static_information field allows a clear split
     * between the dynamic simulation data, which is contained in ground truth
     * messages with the \c #omit_static_information flag, and the static
     * simulation data, which is contained in the (OSMP) GroundTruthInit.
     */
    omit_static_information?: boolean | undefined;
    /** Generic Sensor View Configuration(s). */
    generic_sensor_view_configuration?: GenericSensorViewConfiguration[] | undefined;
    /** Radar-specific Sensor View Configuration(s). */
    radar_sensor_view_configuration?: RadarSensorViewConfiguration[] | undefined;
    /** Lidar-specific Sensor View Configuration(s). */
    lidar_sensor_view_configuration?: LidarSensorViewConfiguration[] | undefined;
    /** Camera-specific Sensor View Configuration(s). */
    camera_sensor_view_configuration?: CameraSensorViewConfiguration[] | undefined;
    /** Ultrasonic-specific Sensor View Configuration(s). */
    ultrasonic_sensor_view_configuration?: UltrasonicSensorViewConfiguration[] | undefined;
}
/**
 * \brief The configuration settings for the Generic Sensor View to be provided
 * by the environment simulation.
 */
interface GenericSensorViewConfiguration {
    /**
     * The ID of the sensor at host vehicle's mounting_position.
     *
     * This is the ID of the physical sensor, to be used in its detected
     * features output; it is distinct from the ID of its virtual sensor.
     *
     * The ID is to be provided by the environment simulation, the sensor
     * model is not in a position to provide a useful default value.
     */
    sensor_id?: Identifier | undefined;
    /**
     * The physical mounting position of the sensor (origin and orientation
     * of the sensor coordinate system) given in vehicle coordinates [1].
     * The physical position pertains to this detector individually, and
     * governs the sensor-relative coordinates in features detected by this
     * detector.
     *
     * \arg \b x-direction of sensor coordinate system: sensor viewing direction
     * \arg \b z-direction of sensor coordinate system: sensor (up)
     * \arg \b y-direction of sensor coordinate system: perpendicular to x and z
     * right hand system
     *
     * \par Reference:
     * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
     *
     * \note The origin of vehicle's coordinate system in world frame is
     * ( \c MovingObject::base . \c BaseMoving::position +
     * Inverse_Rotation_yaw_pitch_roll( \c MovingObject::base . \c
     * BaseMoving::orientation) * \c
     * MovingObject::VehicleAttributes::bbcenter_to_rear) . The orientation of
     * the vehicle's coordinate system is equal to the orientation of the
     * vehicle's bounding box \c MovingObject::base . \c
     * BaseMoving::orientation. \note A default position can be provided by the
     * sensor model (e.g. to indicate the position the model was validated for),
     * but this is optional; the environment simulation must provide a valid
     * mounting position (based on the vehicle configuration) when setting the
     * view configuration.
     */
    mounting_position?: MountingPosition | undefined;
    /** The root mean squared error of the mounting position. */
    mounting_position_rmse?: MountingPosition | undefined;
    /**
     * Field of View in horizontal orientation of the physical sensor.
     *
     * Viewing range: [- \c #field_of_view_horizontal/2,  \c
     * #field_of_view_horizontal/2] azimuth in the sensor frame as defined in \c
     * Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_horizontal?: number | undefined;
    /**
     * Field of View in vertical orientation of the physical sensor.
     *
     * Viewing range: [- \c #field_of_view_vertical/2,  \c
     * #field_of_view_vertical/2] elevation in the sensor frame at zero azimuth
     * as defined in \c Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_vertical?: number | undefined;
}
/**
 * \brief The configuration settings for the Radar Sensor View to be provided
 * by the environment simulation.
 */
interface RadarSensorViewConfiguration {
    /**
     * The ID of the sensor at host vehicle's mounting_position.
     *
     * This is the ID of the physical sensor, to be used in its detected
     * features output; it is distinct from the ID of its virtual sensor.
     *
     * The ID is to be provided by the environment simulation, the sensor
     * model is not in a position to provide a useful default value.
     */
    sensor_id?: Identifier | undefined;
    /**
     * The physical mounting position of the sensor (origin and orientation
     * of the sensor coordinate system) given in vehicle coordinates [1].
     * The physical position pertains to this detector individually, and
     * governs the sensor-relative coordinates in features detected by this
     * detector.
     *
     * \arg \b x-direction of sensor coordinate system: sensor viewing direction
     * \arg \b z-direction of sensor coordinate system: sensor (up)
     * \arg \b y-direction of sensor coordinate system: perpendicular to x and z
     * right hand system
     *
     * \par Reference:
     * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
     *
     * \note The origin of vehicle's coordinate system in world frame is
     * ( \c MovingObject::base . \c BaseMoving::position +
     * Inverse_Rotation_yaw_pitch_roll( \c MovingObject::base . \c
     * BaseMoving::orientation) * \c
     * MovingObject::VehicleAttributes::bbcenter_to_rear) . The orientation of
     * the vehicle's coordinate system is equal to the orientation of the
     * vehicle's bounding box \c MovingObject::base . \c
     * BaseMoving::orientation. \note A default position can be provided by the
     * sensor model (e.g. to indicate the position the model was validated for),
     * but this is optional; the environment simulation must provide a valid
     * mounting position (based on the vehicle configuration) when setting the
     * view configuration.
     */
    mounting_position?: MountingPosition | undefined;
    /** The root mean squared error of the mounting position. */
    mounting_position_rmse?: MountingPosition | undefined;
    /**
     * Field of View in horizontal orientation of the physical sensor.
     *
     * Viewing range: [- \c #field_of_view_horizontal/2,  \c
     * #field_of_view_horizontal/2] azimuth in the sensor frame as defined in \c
     * Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_horizontal?: number | undefined;
    /**
     * Field of View in vertical orientation of the physical sensor.
     *
     * Viewing range: [- \c #field_of_view_vertical/2,  \c
     * #field_of_view_vertical/2] elevation in the sensor frame at zero azimuth
     * as defined in \c Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_vertical?: number | undefined;
    /**
     * Number of rays to cast across horizontal field of view (azimuth).
     *
     * \note This is a characteristic of the ray tracing engine of the
     * environment simulation, not a direct characteristic of the sensor.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    number_of_rays_horizontal?: number | undefined;
    /**
     * Number of rays to cast across vertical field of view (elevation).
     *
     * \note This is a characteristic of the ray tracing engine of the
     * environment simulation, not a direct characteristic of the sensor.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    number_of_rays_vertical?: number | undefined;
    /**
     * Maximum number of interactions to take into account.
     *
     * \note This is a characteristic of the ray tracing engine of the
     * environment simulation, not a direct characteristic of the sensor.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    max_number_of_interactions?: number | undefined;
    /**
     * Emitter Frequency.
     *
     * This information can be used by a ray tracing engine to calculate
     * doppler shift information and take into account differences in
     * refraction and reflection. For doppler shift calculations the
     * sensor model can of course always provide a nominal frequency and
     * adjust the resulting doppler shift information to actual frequency
     * through frequency adjustments. For material and geometry interaction
     * purposes the frequency is also relevant.
     *
     * Unit: Hz
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    emitter_frequency?: number | undefined;
    /** This represents the TX antenna diagram */
    tx_antenna_diagram?: RadarSensorViewConfiguration_AntennaDiagramEntry[] | undefined;
    /** This represents the RX antenna diagram */
    rx_antenna_diagram?: RadarSensorViewConfiguration_AntennaDiagramEntry[] | undefined;
}
/**
 * \brief The radar antenna diagram.
 *
 * \note Rotation is defined analog Spherical3d
 */
interface RadarSensorViewConfiguration_AntennaDiagramEntry {
    /**
     * Horizontal deflection (azimuth) of entry in sensor/antenna
     * coordinates.
     *
     * Unit: rad
     */
    horizontal_angle?: number | undefined;
    /**
     * Vertical deflection (elevation) of entry in sensor/antenna
     * coordinates.
     *
     * Unit: rad
     */
    vertical_angle?: number | undefined;
    /**
     * Response of antenna at this point (positive dB is gain,
     * negative dB is attenuation).
     *
     * Unit: dB
     */
    response?: number | undefined;
}
/**
 * \brief The configuration settings for the Lidar Sensor View to be provided
 * by the environment simulation.
 */
interface LidarSensorViewConfiguration {
    /**
     * The ID of the sensor at host vehicle's mounting_position.
     *
     * This is the ID of the physical sensor, to be used in its detected
     * features output; it is distinct from the ID of its virtual sensor.
     *
     * The ID is to be provided by the environment simulation, the sensor
     * model is not in a position to provide a useful default value.
     */
    sensor_id?: Identifier | undefined;
    /**
     * The physical mounting position of the sensor (origin and orientation
     * of the sensor coordinate system) given in vehicle coordinates [1].
     * The physical position pertains to this detector individually, and
     * governs the sensor-relative coordinates in features detected by this
     * detector.
     *
     * \arg \b x-direction of sensor coordinate system: sensor viewing direction
     * \arg \b z-direction of sensor coordinate system: sensor (up)
     * \arg \b y-direction of sensor coordinate system: perpendicular to x and z
     * right hand system
     *
     * \par Reference:
     * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
     *
     * \note The origin of vehicle's coordinate system in world frame is
     * ( \c MovingObject::base . \c BaseMoving::position +
     * Inverse_Rotation_yaw_pitch_roll( \c MovingObject::base . \c
     * BaseMoving::orientation) * \c
     * MovingObject::VehicleAttributes::bbcenter_to_rear) . The orientation of
     * the vehicle's coordinate system is equal to the orientation of the
     * vehicle's bounding box \c MovingObject::base . \c
     * BaseMoving::orientation. \note A default position can be provided by the
     * sensor model (e.g. to indicate the position the model was validated for),
     * but this is optional; the environment simulation must provide a valid
     * mounting position (based on the vehicle configuration) when setting the
     * view configuration.
     */
    mounting_position?: MountingPosition | undefined;
    /** The root mean squared error of the mounting position. */
    mounting_position_rmse?: MountingPosition | undefined;
    /**
     * Field of View in horizontal orientation of the physical sensor.
     *
     * Viewing range: [- \c #field_of_view_horizontal/2,  \c
     * #field_of_view_horizontal/2] azimuth in the sensor frame as defined in \c
     * Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_horizontal?: number | undefined;
    /**
     * Field of View in vertical orientation of the physical sensor.
     *
     * Viewing range: [- \c #field_of_view_vertical/2,  \c
     * #field_of_view_vertical/2] elevation in the sensor frame at zero azimuth
     * as defined in \c Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_vertical?: number | undefined;
    /**
     * Number of rays to cast across horizontal field of view.
     *
     * \note This is a characteristic of the ray tracing engine of the
     * environment simulation, not a direct characteristic of the sensor.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    number_of_rays_horizontal?: number | undefined;
    /**
     * Number of rays to cast across vertical field of view.
     *
     * \note This is a characteristic of the ray tracing engine of the
     * environment simulation, not a direct characteristic of the sensor.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    number_of_rays_vertical?: number | undefined;
    /**
     * Maximum number of interactions to take into account.
     *
     * \note This is a characteristic of the ray tracing engine of the
     * environment simulation, not a direct characteristic of the sensor.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    max_number_of_interactions?: number | undefined;
    /**
     * Emitter Frequency.
     *
     * This information can be used by a ray tracing engine to calculate
     * doppler shift information and take into account differences in
     * refraction and reflection. For doppler shift calculations the
     * sensor model can of course always provide a nominal frequency and
     * adjust the resulting doppler shift information to actual frequency
     * through frequency adjustments. For material and geometry interaction
     * purposes the frequency is also relevant.
     *
     * Unit: Hz
     *
     * \rules
     * is_greater_than_or_equal_to: 0
     * \endrules
     */
    emitter_frequency?: number | undefined;
    /**
     * Number of pixels in frame.
     *
     * This field includes the number of pixels in each frame
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    num_of_pixels?: number | undefined;
    /**
     * Ray tracing data.
     *
     * The directions unit vectors describing the Lidar's raster transmission
     * directions. Length is num_of_pixels \note data is in Lidar's coordinate
     * system
     */
    directions?: Vector3d[] | undefined;
    /**
     * Ray tracing data.
     *
     * The time offset in microseconds of every measurement from each frame
     * timestamp. Length is num_of_pixels
     */
    timings?: number[] | undefined;
}
/**
 * \brief The configuration settings for the Camera Sensor View to be provided
 * by the environment simulation.
 */
interface CameraSensorViewConfiguration {
    /**
     * The ID of the sensor at host vehicle's mounting_position.
     *
     * This is the ID of the physical sensor, to be used in its detected
     * features output; it is distinct from the ID of its virtual sensor.
     *
     * The ID is to be provided by the environment simulation, the sensor
     * model is not in a position to provide a useful default value.
     */
    sensor_id?: Identifier | undefined;
    /**
     * The physical mounting position of the sensor (origin and orientation
     * of the sensor coordinate system) given in vehicle coordinates [1].
     * The physical position pertains to this detector individually, and
     * governs the sensor-relative coordinates in features detected by this
     * detector.
     *
     * \arg \b x-direction of sensor coordinate system: sensor viewing direction
     * \arg \b z-direction of sensor coordinate system: sensor (up)
     * \arg \b y-direction of sensor coordinate system: perpendicular to x and z
     * right hand system
     *
     * \par Reference:
     * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
     *
     * \note The origin of vehicle's coordinate system in world frame is
     * ( \c MovingObject::base . \c BaseMoving::position +
     * Inverse_Rotation_yaw_pitch_roll( \c MovingObject::base . \c
     * BaseMoving::orientation) * \c
     * MovingObject::VehicleAttributes::bbcenter_to_rear) . The orientation of
     * the vehicle's coordinate system is equal to the orientation of the
     * vehicle's bounding box \c MovingObject::base . \c
     * BaseMoving::orientation. \note A default position can be provided by the
     * sensor model (e.g. to indicate the position the model was validated for),
     * but this is optional; the environment simulation must provide a valid
     * mounting position (based on the vehicle configuration) when setting the
     * view configuration.
     */
    mounting_position?: MountingPosition | undefined;
    /** The root mean squared error of the mounting position. */
    mounting_position_rmse?: MountingPosition | undefined;
    /**
     * Field of View in horizontal orientation of the physical sensor.
     *
     * Viewing range: [- \c #field_of_view_horizontal/2,  \c
     * #field_of_view_horizontal/2] azimuth in the sensor frame as defined in \c
     * Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_horizontal?: number | undefined;
    /**
     * Field of View in vertical orientation of the physical sensor.
     *
     * Viewing range: [- \c #field_of_view_vertical/2,  \c
     * #field_of_view_vertical/2] elevation in the sensor frame at zero azimuth
     * as defined in \c Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_vertical?: number | undefined;
    /**
     * Number of pixels to produce across horizontal field of view.
     *
     * \note This is a characteristic of the rendering engine of the
     * environment simulation, not a direct characteristic of the sensor.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    number_of_pixels_horizontal?: number | undefined;
    /**
     * Number of pixels to produce across horizontal field of view.
     *
     * \note This is a characteristic of the rendering engine of the
     * environment simulation, not a direct characteristic of the sensor.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    number_of_pixels_vertical?: number | undefined;
    /**
     * Format for image data (includes number, kind and format of channels).
     *
     * In the message provided by the sensor model, this field can
     * be repeated and all values are acceptable to the model, with
     * the most acceptable value being listed first, and the remaining
     * values indicating alternatives in descending order of preference.
     *
     * In the message provided to the sensor model, this field must
     * contain exactly one value, indicating the format of the image
     * data being provided by the simulation environment - which must
     * be one of the values the sensor model requested - or there
     * must be no value, indicating that the simulation environment
     * cannot provide image data in one of the requested formats.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    channel_format?: CameraSensorViewConfiguration_ChannelFormat[] | undefined;
    /**
     * Number of samples per pixel.
     *
     * \note This is a characteristic of the ray tracing engine of the
     * environment simulation, not a direct characteristic of the sensor.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    samples_per_pixel?: number | undefined;
    /**
     * Maximum number of interactions to take into account.
     *
     * \note This is a characteristic of the ray tracing engine of the
     * environment simulation, not a direct characteristic of the sensor.
     *
     * \rules
     * is_greater_than_or_equal_to: 1
     * \endrules
     */
    max_number_of_interactions?: number | undefined;
    /**
     * In use-cases where a spectral ray-tracer is used, this message
     * determines the range of the wavelength and its desired number
     * of samples.
     */
    wavelength_data?: WavelengthData[] | undefined;
    /**
     * Indicates if and how the the pixel data is ordered
     *
     * The default value (PIXEL_ORDER_DEFAULT) indicates standard image
     * pixel order (left-to-right, top-to-bottom). The other values can
     * be used to indicate/request mirroring (right to left or bottom to top).
     *
     * \note For rotations of the pixel data, use the camera coordinate system.
     */
    pixel_order?: CameraSensorViewConfiguration_PixelOrder | undefined;
}
/**
 * Pixel layout
 *
 * Pixel layout documents the order of pixels in the \c image_data
 * in CameraSensorView.
 *
 * \note this enum does not contain an entry to do mirroring upside down
 * and left-to-right at the same time, because this is equivalent to a
 * 180-degree rotation, which should be indicated in the sensor coordinate
 * system.
 */
declare enum CameraSensorViewConfiguration_PixelOrder {
    /**
     * DEFAULT - Pixel data is not mirrored (Default).
     * Pixels are ordered left-to-right, top-to-bottom.
     */
    DEFAULT = 0,
    /**
     * OTHER - Known pixel order that is not supported by OSI.
     * Consider proposing an additional format if using
     * \c #PIXEL_ORDER_OTHER.
     */
    OTHER = 1,
    /**
     * RIGHT_LEFT_TOP_BOTTOM - Pixels are ordered right-to-left, top-to-bottom.
     * Pixel data is mirrored along the vertical axis.
     * The image is mirrored left-to-right.
     */
    RIGHT_LEFT_TOP_BOTTOM = 2,
    /**
     * LEFT_RIGHT_BOTTOM_TOP - Pixels are ordered left-to-right, bottom-to-top.
     * Pixel data is mirrored along the horizontal axis.
     * The image is mirrored top-to-bottom.
     */
    LEFT_RIGHT_BOTTOM_TOP = 3
}
/** Channel format. */
declare enum CameraSensorViewConfiguration_ChannelFormat {
    /** UNKNOWN - Type of channel format is unknown (must not be used). */
    UNKNOWN = 0,
    /**
     * OTHER - Unspecified but known channel format.
     * Consider proposing an additional format if using
     * \c #CHANNEL_FORMAT_OTHER.
     */
    OTHER = 1,
    /** MONO_U8_LIN - Single Luminance Channel UINT8 Linear. */
    MONO_U8_LIN = 2,
    /** MONO_U16_LIN - Single Luminance Channel UINT16 Linear. */
    MONO_U16_LIN = 3,
    /** MONO_U32_LIN - Single Luminance Channel UINT32 Linear. */
    MONO_U32_LIN = 4,
    /** MONO_F32_LIN - Single Luminance Channel Single Precision FP Linear. */
    MONO_F32_LIN = 5,
    /** RGB_U8_LIN - Packed RGB Channels (no padding) UINT8 Linear. */
    RGB_U8_LIN = 6,
    /** RGB_U16_LIN - Packed RGB Channels (no padding) UINT16 Linear. */
    RGB_U16_LIN = 7,
    /** RGB_U32_LIN - Packed RGB Channels (no padding) UINT32 Linear. */
    RGB_U32_LIN = 8,
    /** RGB_F32_LIN - Packed RGB Channels (no padding) Single Precision FP Linear. */
    RGB_F32_LIN = 9,
    /** BAYER_BGGR_U8_LIN - Bayer BGGR Channels UINT8 FP Linear. */
    BAYER_BGGR_U8_LIN = 10,
    /** BAYER_BGGR_U16_LIN - Bayer BGGR Channels UINT16 FP Linear. */
    BAYER_BGGR_U16_LIN = 11,
    /** BAYER_BGGR_U32_LIN - Bayer BGGR Channels UINT32 FP Linear. */
    BAYER_BGGR_U32_LIN = 12,
    /** BAYER_BGGR_F32_LIN - Bayer BGGR Channels Single Precision FP Linear. */
    BAYER_BGGR_F32_LIN = 13,
    /** BAYER_RGGB_U8_LIN - Bayer RGGB Channels UINT8 FP Linear. */
    BAYER_RGGB_U8_LIN = 14,
    /** BAYER_RGGB_U16_LIN - Bayer RGGB Channels UINT16 FP Linear. */
    BAYER_RGGB_U16_LIN = 15,
    /** BAYER_RGGB_U32_LIN - Bayer RGGB Channels UINT32 FP Linear. */
    BAYER_RGGB_U32_LIN = 16,
    /** BAYER_RGGB_F32_LIN - Bayer RGGB Channels Single Precision FP Linear. */
    BAYER_RGGB_F32_LIN = 17,
    /** RCCC_U8_LIN - Red Clear Clear Clear Channels UINT8 FP Linear. */
    RCCC_U8_LIN = 18,
    /** RCCC_U16_LIN - Red Clear Clear Clear Channels UINT16 FP Linear. */
    RCCC_U16_LIN = 19,
    /** RCCC_U32_LIN - Red Clear Clear Clear Channels UINT32 FP Linear. */
    RCCC_U32_LIN = 20,
    /** RCCC_F32_LIN - Red Clear Clear Clear Channels Single Precision FP Linear. */
    RCCC_F32_LIN = 21,
    /** RCCB_U8_LIN - Red Clear Clear Blue Channels UINT8 FP Linear. */
    RCCB_U8_LIN = 22,
    /** RCCB_U16_LIN - Red Clear Clear Blue Channels UINT16 FP Linear. */
    RCCB_U16_LIN = 23,
    /** RCCB_U32_LIN - Red Clear Clear Blue Channels UINT32 FP Linear. */
    RCCB_U32_LIN = 24,
    /** RCCB_F32_LIN - Red Clear Clear Blue Channels Single Precision FP Linear. */
    RCCB_F32_LIN = 25
}
/**
 * \brief The configuration settings for the Ultrasonic Sensor View to be
 * provided by the environment simulation.
 */
interface UltrasonicSensorViewConfiguration {
    /**
     * The ID of the sensor at host vehicle's mounting_position.
     *
     * This is the ID of the physical sensor, to be used in its detected
     * features output; it is distinct from the ID of its virtual sensor.
     *
     * The ID is to be provided by the environment simulation, the sensor
     * model is not in a position to provide a useful default value.
     */
    sensor_id?: Identifier | undefined;
    /**
     * The physical mounting position of the sensor (origin and orientation
     * of the sensor coordinate system) given in vehicle coordinates [1].
     * The physical position pertains to this detector individually, and
     * governs the sensor-relative coordinates in features detected by this
     * detector.
     *
     * \arg \b x-direction of sensor coordinate system: sensor viewing direction
     * \arg \b z-direction of sensor coordinate system: sensor (up)
     * \arg \b y-direction of sensor coordinate system: perpendicular to x and z
     * right hand system
     *
     * \par Reference:
     * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
     *
     * \note The origin of vehicle's coordinate system in world frame is
     * ( \c MovingObject::base . \c BaseMoving::position +
     * Inverse_Rotation_yaw_pitch_roll( \c MovingObject::base . \c
     * BaseMoving::orientation) * \c
     * MovingObject::VehicleAttributes::bbcenter_to_rear) . The orientation of
     * the vehicle's coordinate system is equal to the orientation of the
     * vehicle's bounding box \c MovingObject::base . \c
     * BaseMoving::orientation. \note A default position can be provided by the
     * sensor model (e.g. to indicate the position the model was validated for),
     * but this is optional; the environment simulation must provide a valid
     * mounting position (based on the vehicle configuration) when setting the
     * view configuration.
     */
    mounting_position?: MountingPosition | undefined;
    /** The root mean squared error of the mounting position. */
    mounting_position_rmse?: MountingPosition | undefined;
    /**
     * Field of View in horizontal orientation of the physical sensor.
     *
     * Viewing range: [- \c #field_of_view_horizontal/2,  \c
     * #field_of_view_horizontal/2] azimuth in the sensor frame as defined in \c
     * Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_horizontal?: number | undefined;
    /**
     * Field of View in vertical orientation of the physical sensor.
     *
     * Viewing range: [- \c #field_of_view_vertical/2,  \c
     * #field_of_view_vertical/2] elevation in the sensor frame at zero azimuth
     * as defined in \c Spherical3d.
     *
     * Unit: rad
     */
    field_of_view_vertical?: number | undefined;
}

/**
 * \brief The sensor view is derived from \c GroundTruth and used as
 * input to sensor models.
 *
 * The sensor view information is supposed to provide input to sensor
 * models for simulation of actual real sensors.
 * All information regarding the environment is given with respect to
 * the virtual sensor coordinate system specified in
 * \c SensorView::mounting_position, except for the individual physical
 * technology-specific data, which is given with respect to the physical
 * sensor coordinate system specified in the corresponding physical sensor's
 * \c #mounting_position, and the \c #global_ground_truth, which is given in
 * global coordinates.
 *
 * When simulating multiple distinct sensors, each sensor can consume an
 * individual copy of the \c SensorView interface. This allows an independent
 * treatment of the sensors.
 *
 * Alternatively combined sensor models can also consume one combined
 * \c SensorView, with either combined or separate \c SensorData outputs,
 * depending on model architecture.
 */
interface SensorView {
    /**
     * The interface version used by the sender (simulation environment).
     *
     * \rules
     * is_set
     * \endrules
     */
    version?: InterfaceVersion | undefined;
    /**
     * The data timestamp of the simulation environment. Zero time is arbitrary
     * but must be identical for all messages. Zero time does not need to
     * coincide with the UNIX epoch. Recommended is the starting time point of
     * the simulation.
     *
     * \note For sensor view data this timestamp coincides both with the
     * notional simulation time the data applies to and the time it was sent
     * (there is no inherent latency for sensor view data, as opposed to
     * sensor data).
     *
     * \rules
     * is_set
     * \endrules
     */
    timestamp?: Timestamp | undefined;
    /**
     * The ID of the sensor at host vehicle's \c #mounting_position.
     *
     * This is the ID of the virtual sensor, to be used in its detected
     * object output; it is distinct from the IDs of its physical detectors,
     * which are used in the detected features.
     *
     * \rules
     * is_set
     * \endrules
     */
    sensor_id?: Identifier | undefined;
    /**
     * The virtual mounting position of the sensor (origin and orientation of
     * the sensor frame). Both origin and orientation are given in and with
     * respect to the host vehicle coordinate system [1].
     *
     * The virtual position pertains to the sensor as a whole, regardless of the
     * actual position of individual physical detectors, and governs the
     * sensor-relative coordinates in detected objects of the sensor as a whole.
     * Individual features detected by individual physical detectors are
     * governed by the actual physical mounting positions of the detectors, as
     * indicated in the technology-specific sub-views and sub-view
     * configurations.
     *
     * \arg \b x-direction of sensor coordinate system: sensor viewing direction
     * \arg \b z-direction of sensor coordinate system: sensor (up)
     * \arg \b y-direction of sensor coordinate system: perpendicular to x and z
     * right hand system
     *
     * \par Reference:
     * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
     *
     * \note This field is usually static during the simulation.
     * \note The origin of vehicle's coordinate system in world frame is
     * ( \c MovingObject::base . \c BaseMoving::position +
     * Inverse_Rotation_yaw_pitch_roll( \c MovingObject::base . \c
     * BaseMoving::orientation) * \c
     * MovingObject::VehicleAttributes::bbcenter_to_rear) . The orientation of
     * the vehicle's coordinate system is equal to the orientation of the
     * vehicle's bounding box \c MovingObject::base . \c
     * BaseMoving::orientation.
     *
     * \rules
     * is_set
     * \endrules
     */
    mounting_position?: MountingPosition | undefined;
    /** The root mean squared error of the mounting position. */
    mounting_position_rmse?: MountingPosition | undefined;
    /**
     * Host vehicle data.
     *
     * Host vehicle data is data that the host vehicle knows about itself,
     * e.g. from location sensors, internal sensors and ECU bus data, etc.,
     * that is made available to sensors as input.
     */
    host_vehicle_data?: HostVehicleData | undefined;
    /**
     * Ground truth w.r.t. global coordinate system.
     *
     * This is the ground truth that is provided to the sensor model by the
     * simulation environment. It may be filtered as per the requirements of
     * the sensor model as expressed by the \c SensorViewConfiguration
     * message(s) that where exchanged during the simulation initialization
     * phase.
     *
     * \note The host vehicle is always contained in the ground truth provided,
     * regardless of any filtering. The ground truth MUST contain at least as
     * much of the ground truth data, as is requested by the sensor model, but
     * MAY always contain more data, since the filtering is intended only as
     * an optimization mechanism, not as a replacement of a proper sensor
     * field of view modeling.
     */
    global_ground_truth?: GroundTruth | undefined;
    /**
     * The ID of the host vehicle in the \c #global_ground_truth data.
     *
     * \rules
     * refers_to: 'MovingObject'
     * is_set
     * \endrules
     */
    host_vehicle_id?: Identifier | undefined;
    /** Generic SensorView(s). */
    generic_sensor_view?: GenericSensorView[] | undefined;
    /** Radar-specific SensorView(s). */
    radar_sensor_view?: RadarSensorView[] | undefined;
    /** Lidar-specific SensorView(s). */
    lidar_sensor_view?: LidarSensorView[] | undefined;
    /** Camera-specific SensorView(s). */
    camera_sensor_view?: CameraSensorView[] | undefined;
    /** Ultrasonic-specific SensorView(s). */
    ultrasonic_sensor_view?: UltrasonicSensorView[] | undefined;
}
/**
 * \brief Definition of the generic sensor view.
 *
 * Generic sensor view data.
 */
interface GenericSensorView {
    /** Generic view configuration valid at the time the data was created. */
    view_configuration?: GenericSensorViewConfiguration | undefined;
}
/**
 * \brief Definition of the radar sensor view.
 *
 * Radar specific sensor view data.
 */
interface RadarSensorView {
    /** Radar view configuration valid at the time the data was created. */
    view_configuration?: RadarSensorViewConfiguration | undefined;
    /**
     * Ray tracing data.
     *
     * This field includes one entry for each ray, in left-to-right,
     * top-to-bottom order (think of scan lines in a TV).
     */
    reflection?: RadarSensorView_Reflection[] | undefined;
}
/** \brief Definition of the radar reflection. */
interface RadarSensorView_Reflection {
    /**
     * Relative signal level of the reflection.
     *
     * This takes the combined antenna diagram (losses in TX and RX)
     * as well as the signal losses due to scattering and absorption
     * into account, and will, when multiplied by TX power yield the
     * actual RX power.
     *
     * Unit: dB
     */
    signal_strength?: number | undefined;
    /**
     * Time of flight.
     *
     * This is the time of flight of the reflection, which is directly
     * proportional to the distance traveled.
     *
     * Unit: s
     */
    time_of_flight?: number | undefined;
    /**
     * Doppler shift.
     *
     * Shift in frequency based on the specified TX frequency.
     *
     * Unit: Hz
     */
    doppler_shift?: number | undefined;
    /**
     * TX horizontal angle (azimuth).
     *
     * Horizontal angle of incidence of the source of the reflection
     * at the TX antenna.
     *
     * Unit: rad
     */
    source_horizontal_angle?: number | undefined;
    /**
     * TX vertical angle (elevation).
     *
     * Vertical angle of incidence of the source of the reflection
     * at the TX antenna.
     *
     * Unit: rad
     */
    source_vertical_angle?: number | undefined;
}
/**
 * \brief Definition of the lidar sensor view.
 *
 * Lidar specific sensor view data.
 */
interface LidarSensorView {
    /** Lidar view configuration valid at the time the data was created. */
    view_configuration?: LidarSensorViewConfiguration | undefined;
    /**
     * Ray tracing data.
     *
     * This field includes one entry for each ray, in left-to-right,
     * top-to-bottom order (think of scan lines in a TV).
     */
    reflection?: LidarSensorView_Reflection[] | undefined;
}
/** \brief Definition of the lidar reflection. */
interface LidarSensorView_Reflection {
    /**
     * Relative signal level of the reflection.
     *
     * This takes the signal losses due to scattering and absorption
     * into account, and will, when multiplied by TX power yield the
     * potential RX power (disregarding any other RX/TX losses).
     *
     * Unit: dB
     */
    signal_strength?: number | undefined;
    /**
     * Time of flight.
     *
     * This is the time of flight of the reflection, which is directly
     * proportional to the distance traveled.
     *
     * Unit: s
     */
    time_of_flight?: number | undefined;
    /**
     * Doppler shift.
     *
     * Shift in frequency based on the specified TX frequency.
     *
     * Unit: Hz
     */
    doppler_shift?: number | undefined;
    /**
     * normal to surface angle.
     *
     * The normal of the transmitted beam to the object, road marking, etc.
     * encounter. \note data is in Lidar coordinate system
     *
     * Unit: unit vector
     */
    normal_to_surface?: Vector3d | undefined;
    /**
     * ID of the detected object this reflection is associated to.
     * can be used for ray tracing debug
     *
     * \note ID = MAX(uint64) indicates no reference to an object.
     */
    object_id?: Identifier | undefined;
}
/**
 * \brief Definition of the camera sensor view.
 *
 * Camera specific sensor view data.
 */
interface CameraSensorView {
    /** Camera view configuration valid at the time the data was created. */
    view_configuration?: CameraSensorViewConfiguration | undefined;
    /**
     * Raw image data.
     *
     * The raw image data in the memory layout specified by the camera
     * sensor input configuration. The pixel order is specified in
     * CameraSensorViewConfiguration.pixel_order with the
     * default value PIXEL_ORDER_DEFAULT (i.e. left-to-right, top-to-bottom).
     */
    image_data?: Uint8Array | undefined;
}
/**
 * \brief Definition of the ultrasonic sensor view.
 *
 * Ultrasonic specific sensor view data.
 */
interface UltrasonicSensorView {
    /** Ultrasonic view configuration valid at the time the data was created. */
    view_configuration?: UltrasonicSensorViewConfiguration | undefined;
}

/** \brief The header attributes of each detected entity. */
interface DetectedEntityHeader {
    /**
     * Time stamp at which the measurement was taken (not the time at which it
     * was processed or at which it is transmitted) in the global synchronized
     * time.
     *
     * \note See \c SensorData::timestamp and \c
     * SensorData::last_measurement_time for detailed discussions on the
     * semantics of time-related fields.
     */
    measurement_time?: Timestamp | undefined;
    /** Continuous up counter to identify the cycle. */
    cycle_counter?: number | undefined;
    /**
     * Data Qualifier expresses to what extent the content of this event can be
     * relied on.
     */
    data_qualifier?: DetectedEntityHeader_DataQualifier | undefined;
}
/**
 * Data qualifier communicates the overall availability of the
 * interface.
 */
declare enum DetectedEntityHeader_DataQualifier {
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
    TEMPORARY_AVAILABLE = 6
}
/**
 * \brief The sensor information derived from \c GroundTruth and processed by
 * sensor-models.
 *
 * The sensor information is supposed to imitate the output of real sensors.
 * All information regarding the environment is given with respect to
 * the virtual sensor coordinate system specified in
 * \c SensorData::mounting_position, except for feature data, which is given
 * with respect to the physical sensor coordinate system specified in the
 * corresponding physical sensor's coordinate system.
 *
 * When simulating multiple distinct sensors, each sensor can produce an
 * individual copy of the \c SensorData interface. This allows an independent
 * treatment of the sensors.
 *
 * Sensor fusion models can consolidate multiple \c SensorData interfaces into
 * one consolidated \c SensorData interface.  This can happen either in
 * separate logical models, consuming and producing \c SensorData interfaces,
 * or it can happen as part of a combined sensor/logical model, that consumes
 * \c SensorView interfaces and directly produces one consolidated \c SensorData
 * output.
 */
interface SensorData {
    /**
     * The interface version used by the sender.
     *
     * \rules
     * is_set
     * \endrules
     */
    version?: InterfaceVersion | undefined;
    /**
     * The timestamp of the sensor data. Zero time is arbitrary but must be
     * identical for all messages. Zero time does not need to coincide with
     * the unix epoch. Recommended is the starting time point of the
     * simulation.
     *
     * \note This is the point in time that the sensor data message becomes
     * available to the rest of the system (i.e. the driving functions), so
     * it corresponds with the sending time and thus takes the latency of
     * internal processing of the sensor into account. Latencies of bus
     * communications, etc., that occur after the sensor output have to be
     * applied on top of this, if needed.
     *
     * The time that the actual measurement was performed (which will usually
     * correspond with the timestamp of the \c GroundTruth the sensor model
     * processed to arrive at these results) can be found in the additional
     * field \c SensorData::last_measurement_time.
     *
     * For an ideal zero latency sensor the two timestamps would be the same
     * and would correspond with the timestamp from the current \c GroundTruth
     * message.
     *
     * For a sensor model that does not know its own internal latencies (e.g.
     * a dumb sensor with no internal time concept), the two timestamps might
     * also be identical, but delayed from the \c GroundTruth timestamp.
     *
     * \rules
     * is_set
     * \endrules
     */
    timestamp?: Timestamp | undefined;
    /**
     * The sensors estimated location of the host vehicle
     *
     * \note This value is only set by sensors that are able to
     * provide an own estimation of the host vehicle location.
     * \note Note that dimension and base_polygon need not be set.
     * \note The parent frame of \c host_vehicle_location is the sensor frame.
     */
    host_vehicle_location?: BaseMoving | undefined;
    /**
     * The sensors estimated location error of the host vehicle
     *
     * \note This value is only set by sensors that are able to
     * provide an own estimation of the host vehicle location.
     * \note Note that dimension and base_polygon need not be set.
     * \note The parent frame of \c host_vehicle_location_rmse is the sensor
     * frame.
     */
    host_vehicle_location_rmse?: BaseMoving | undefined;
    /**
     * The ID of the sensor at host vehicle's mounting_position.
     *
     * This is the ID of the virtual sensor, to be used in its detected
     * object output; it is distinct from the IDs of its physical detectors,
     * which are used in the detected features.
     *
     * \rules
     * is_set
     * \endrules
     */
    sensor_id?: Identifier | undefined;
    /**
     * The virtual mounting position of the sensor (origin and orientation
     * of the sensor coordinate system) given in vehicle coordinates [1].
     * The virtual position pertains to the sensor as a whole, regardless
     * of the actual position of individual physical detectors, and governs
     * the sensor-relative coordinates in detected objects of the sensor
     * as a whole.  Individual features detected by individual physical
     * detectors are governed by the actual physical mounting positions
     * of the detectors, as indicated in the technology-specific sub-views
     * and sub-view configurations.
     *
     * \arg \b x-direction of sensor coordinate system: sensor viewing direction
     * \arg \b z-direction of sensor coordinate system: sensor (up)
     * \arg \b y-direction of sensor coordinate system: perpendicular to x and z
     * right hand system
     *
     * \par Reference:
     * [1] DIN Deutsches Institut fuer Normung e. V. (2013). <em>DIN ISO 8855 Strassenfahrzeuge - Fahrzeugdynamik und Fahrverhalten - Begriffe</em>. (DIN ISO 8855:2013-11). Berlin, Germany.
     *
     * \note This field is usually static during the simulation.
     * \note The origin of vehicle's coordinate system in world frame is
     * ( \c MovingObject::base . \c BaseMoving::position +
     * Inverse_Rotation_yaw_pitch_roll( \c MovingObject::base . \c
     * BaseMoving::orientation) * \c
     * MovingObject::VehicleAttributes::bbcenter_to_rear) . The orientation of
     * the vehicle's coordinate system is equal to the orientation of the
     * vehicle's bounding box \c MovingObject::base . \c
     * BaseMoving::orientation.
     *
     * \rules
     * is_set
     * \endrules
     */
    mounting_position?: MountingPosition | undefined;
    /** The root mean squared error of the mounting position. */
    mounting_position_rmse?: MountingPosition | undefined;
    /**
     * Sensor view w.r.t. the sensor coordinate system
     *
     * This provides a copy of the \c SensorView data received by the sensor
     * for reference purposes.  For complex sensors or logic models this
     * can be multiple copies.
     */
    sensor_view?: SensorView[] | undefined;
    /**
     * The timestamp of the last real-world measurement (e.g. GT input) that
     * this set of sensor data takes into account. This in effect is the last
     * time instance of reality the measurements correspond to. See field
     * \c SensorData::timestamp for a detailed discussion. This value is also
     * the upper bound to the \c DetectedEntityHeader::measurement_time and the
     * feature data \c SensorDetectionHeader::measurement_time fields.
     */
    last_measurement_time?: Timestamp | undefined;
    /** General information about the \c DetectedStationaryObject . */
    stationary_object_header?: DetectedEntityHeader | undefined;
    /** The list of stationary objects (e.g. landmarks) detected by the sensor. */
    stationary_object?: DetectedStationaryObject[] | undefined;
    /** General information about the \c DetectedMovingObject . */
    moving_object_header?: DetectedEntityHeader | undefined;
    /**
     * The list of moving objects detected by the sensor as perceived by
     * the sensor.
     */
    moving_object?: DetectedMovingObject[] | undefined;
    /** General information about the \c DetectedTrafficSign . */
    traffic_sign_header?: DetectedEntityHeader | undefined;
    /** The list of traffic signs detected by the sensor. */
    traffic_sign?: DetectedTrafficSign[] | undefined;
    /** General information about the \c DetectedTrafficLight . */
    traffic_light_header?: DetectedEntityHeader | undefined;
    /** The list of traffic lights detected by the sensor. */
    traffic_light?: DetectedTrafficLight[] | undefined;
    /** General information about the \c DetectedRoadMarking . */
    road_marking_header?: DetectedEntityHeader | undefined;
    /**
     * The list of road markings detected by the sensor.
     * This excludes lane boundary markings.
     */
    road_marking?: DetectedRoadMarking[] | undefined;
    /** General information about the \c DetectedLaneBoundary . */
    lane_boundary_header?: DetectedEntityHeader | undefined;
    /** The list of lane boundary markings detected by the sensor. */
    lane_boundary?: DetectedLaneBoundary[] | undefined;
    /** General information about the \c DetectedLane . */
    lane_header?: DetectedEntityHeader | undefined;
    /** The list of lanes detected by the sensor */
    lane?: DetectedLane[] | undefined;
    /** General information about the \c DetectedOccupant . */
    occupant_header?: DetectedEntityHeader | undefined;
    /** The list of occupants of the host vehicle */
    occupant?: DetectedOccupant[] | undefined;
    /**
     * Low level feature data interface.
     *
     * Low Level feature data is optionally provided by sensor models that
     * model sensors giving access to this low level data, i.e. data prior to
     * object hypothesis and tracking.
     */
    feature_data?: FeatureData | undefined;
    /**
     * Logical detection data interface.
     *
     * Logical detection data are provided by a transformation
     * (and optional sensor fusion)
     * performed by a sensor model or a logical model
     * that fuses multiple sensors and/or sensor types
     * into a single reference frame
     * of the so called logical/virtual sensor.
     * Therefore, all information is given with respect to
     * the reference frame of the logical/virtual sensor
     * \c SensorView::mounting_position (e.g. center of rear axle of the ego car)
     * in cartesian coordinates.
     */
    logical_detection_data?: LogicalDetectionData | undefined;
    /** Virtual detection area of the sensor */
    virtual_detection_area?: SensorData_VirtualDetectionArea | undefined;
    /**
     * The system time of the modeled source of the sensor data, given
     * in UTC (Unix Epoch timestamp).
     *
     * The system time can be used to transmit the internal time of the
     * simulated component that supplies the sensor data, which might
     * not coincide with the simulation time as transmitted in the
     * timestamp field. Example use cases include recorded data traces
     * or the simulation of time synchronization mechanisms and errors.
     */
    system_time?: Timestamp | undefined;
}
/**
 * \brief Virtual detection area of a sensor
 *
 * The virtual detection area describes the nominal area the sensor is capable of covering
 * in its current operating mode, without taking occlusion or other statistical effects into account.
 * This information can be used for visualization or other development purposes as a rough guide
 * to nominal sensor performance.
 *
 * It is described by a set of polygons in cartesian coordinates as a pragmatic approximation for
 * the rough shapes expected.
 */
interface SensorData_VirtualDetectionArea {
    /**
     * List of polygons. Each polygon represents a surface of the virtual detection area
     * and is given with respect to the virtual sensor coordinate system.
     */
    polygon?: Polygon3d[] | undefined;
}

/**
 * \brief (Time) Series of \c SensorData messages that may be used for data
 * recording or internal buffering by some sensor models.
 */
interface SensorDataSeries {
    /** List of sensor data messages for subsequent time steps. */
    sensor_data?: SensorData[] | undefined;
}
/**
 * \brief List of sensors where each element contains a time series of
 * \c SensorData messages.
 */
interface SensorDataSeriesList {
    /** List of sensor data for multiple sensors at subsequent time steps. */
    sensor?: SensorDataSeries[] | undefined;
}

/**
 * \brief This message is intended as an interface between a
 * motion-planning function and the actuator management.
 * The motion-planning function can thereby be a representation of a
 * highly-automated driving function, a human driving behavior model, etc.
 *
 * The motion-planning function can either send a desired future trajectory or a desired
 * future state. The message can be defined by an additional variable.
 *
 * \note The coordinate system is defined as right-handed.
 * All coordinates and orientations are relative to the global coordinate system.
 * The reference point of the vehicle is the middle of the rear axis.
 * Units are m for positions, m/s for velocities, and m/s^2 for accelerations.
 */
interface MotionRequest {
    /**
     * The interface version used by the sender (simulation environment).
     *
     * \rules
     * is_set
     * \endrules
     */
    version?: InterfaceVersion | undefined;
    /**
     * The data timestamp of the simulation environment.
     * A reference to \c Timestamp message.
     *
     * \rules
     * is_set
     * \endrules
     */
    timestamp?: Timestamp | undefined;
    /**
     * Define the type that is used to specify the motion request.
     * This must be set. Additionally, the field corresponding to the specified
     * option must be set.
     */
    motion_request_type?: MotionRequest_MotionRequestType | undefined;
    /**
     * Defines a desired state.
     * If the output option is set to DESIRED_STATE, this field must be set.
     */
    desired_state?: MotionRequest_DesiredState | undefined;
    /**
     * Defines a desired trajectory.
     * If the output option is set to DESIRED_TRAJECTORY, this field must be set.
     */
    desired_trajectory?: MotionRequest_DesiredTrajectory | undefined;
}
/**
 * Define different options for function output.
 * Each option corresponds to a field in the message.
 */
declare enum MotionRequest_MotionRequestType {
    /** DESIRED_STATE - Desired state calculated by the function. */
    DESIRED_STATE = 0,
    /** TRAJECTORY - Desired trajectory calculated by the function. */
    TRAJECTORY = 1
}
/**
 * \brief The desired state is calculated by the function as a result of
 * the motion planning stack.
 *
 * The actuator management is supposed to reach the desired state at the
 * specified time.
 */
interface MotionRequest_DesiredState {
    /** A reference to \c Timestamp message. */
    timestamp?: Timestamp | undefined;
    /** Intended position to be reached in in x-, y-, and z-direction. */
    position?: Vector3d | undefined;
    /** Intended orientation to be reached containing yaw, pitch and roll angle. */
    orientation?: Orientation3d | undefined;
    /**
     * Intended velocity to be reached in in x-, y-, and z-direction.
     *
     * Unit: m/s
     */
    velocity?: Vector3d | undefined;
    /**
     * Intended acceleration to be reached in x-, y-, and z-direction.
     *
     * Unit: m/s^2
     */
    acceleration?: Vector3d | undefined;
}
/**
 * \brief Defined trajectory desired by the function.
 *
 * This trajectory is the result of the trajectory planning step in the function.
 * The task of the actuator management is to follow this trajectory as closely as possible.
 * The timestamps inside the trajectory must be defined in global simulation time.
 *
 * \note The trajectory is kept as a separate message for future extensions.
 */
interface MotionRequest_DesiredTrajectory {
    /**
     * The trajectory consists of intended position (x, y, and z) and
     * orientation (yaw, pitch and roll) of intended state to be reached.
     * A reference to \c StatePoint message.
     *
     * \note The position within the trajectory point references to the
     * middle point of the rear axis.
     */
    trajectory_point?: StatePoint[] | undefined;
}

/**
 * \brief The streaming update interface enables simulation entities to send
 * partial updates to other modules that favor performance (especially latency)
 * over data completeness/consistency (e.g. visualization applications).
 *
 * Static and/or non-relevant objects can be omitted as required for the
 * specific use case. Adding an object's unique id to the repeated field \c
 * obsolete_id indicates that it will no longer be updated from then on.
 *
 * \note The receiver of partial streaming update messages can only rely on the
 * most up-to-date information at the corresponding timestamp. E.g. omitting
 * objects does not indicate static behavior but it may be sufficient for the
 * use case to update certain objects at a later point in time.
 */
interface StreamingUpdate {
    /**
     * The interface version used by the sender.
     *
     * \rules
     * is_set
     * \endrules
     */
    version?: InterfaceVersion | undefined;
    /**
     * The data timestamp where the information of contained objects is calculated.
     *
     * Zero time is arbitrary but must be identical for all messages.
     * Zero time does not need to coincide with the UNIX epoch.
     * Recommended is the starting time point of the simulation.
     *
     * \rules
     * is_set
     * \endrules
     */
    timestamp?: Timestamp | undefined;
    /**
     * The list of stationary objects (excluding traffic signs and traffic
     * lights).
     */
    stationary_object_update?: StationaryObject[] | undefined;
    /** The list of moving objects. */
    moving_object_update?: MovingObject[] | undefined;
    /** The list of traffic signs. */
    traffic_sign_update?: TrafficSign[] | undefined;
    /** The list of traffic lights. */
    traffic_light_update?: TrafficLight[] | undefined;
    /** Conditions of the environment. */
    environmental_conditions_update?: EnvironmentalConditions | undefined;
    /**
     * Host vehicle data.
     *
     * Host vehicle data is data that the host vehicle knows about itself,
     * e.g. from location sensors, internal sensors and ECU bus data, etc.,
     * that is made available to sensors as input.
     *
     * The ID inside this message allows an association to moving object data.
     */
    host_vehicle_data_update?: HostVehicleData[] | undefined;
    /**
     * Entities that will no longer be updated, because they are considered
     * obsolete by the sender.
     *
     * \note IDs are globally unique.
     */
    obsolete_id?: Identifier[] | undefined;
}

/**
 * \brief The scenario engine provides control commands in the traffic command
 * message to traffic participant models. The control commands are based on
 * the scenario.
 *
 * \note This interface is currently just a placeholder and will be
 * changed in experimental ways to support basic scenario execution.
 * In the future this interface shall be aligned with the level of
 * atomic actions as described in OpenSCENARIO 1.0 or later.
 */
interface TrafficCommand {
    /**
     * The interface version used by the sender (scenario engine).
     *
     * \rules
     * is_set
     * \endrules
     */
    version?: InterfaceVersion | undefined;
    /**
     * The data timestamp of the simulation environment. Zero time is arbitrary
     * but must be identical for all messages. Zero time does not need to
     * coincide with the UNIX epoch. It is recommended to use zero timestamp as
     * the starting time point of the simulation.
     *
     * \note For traffic command data the timestamp coincides both with
     * the notional simulation time the data applies to and the time it was sent
     * There is no inherent latency for traffic command data, as opposed
     * to sensor data.
     *
     * \rules
     * is_set
     * \endrules
     */
    timestamp?: Timestamp | undefined;
    /**
     * The ID of this traffic participant.
     *
     * \rules
     * is_set
     * \endrules
     */
    traffic_participant_id?: Identifier | undefined;
    /**
     * Commanded traffic action(s) if any.
     *
     * \note If more than one action is supplied in one command message
     * all actions are executed in parallel.
     */
    action?: TrafficAction[] | undefined;
}
/**
 * \brief Atomic traffic actions to be performed.
 *
 * The transmitted commands are the atomic traffic actions described by
 * this message.
 *
 * \note This message is notionally a multiple choice selection, that is, only
 * certain combinations of atomic traffic actions shall be transmitted within
 * certain time intervals, for example, for plausibility reasons. The restrictions
 * regarding that are not part of this message, yet are seen as a task of the
 * scenario description, for example, OpenSCENARIO.
 *
 * \note All traffic actions are sent only once just before they are about
 * to start. This is also true, if their execution is expected to
 * take simulation time. To inform the traffic participant
 * model that certain actions must or shall be terminated, there are
 * explicit actions nested inside this message (AbortActionsAction,
 * EndActionsAction), which hold a reference to the respective actions.
 * Furthermore, there exists a \c TrafficCommandUpdate message for the
 * traffic participant to report back on potentially dismissed actions.
 */
interface TrafficAction {
    /** A FollowTrajectoryAction. */
    follow_trajectory_action?: TrafficAction_FollowTrajectoryAction | undefined;
    /** A FollowPathAction. */
    follow_path_action?: TrafficAction_FollowPathAction | undefined;
    /** An AcquireGlobalPositionAction. */
    acquire_global_position_action?: TrafficAction_AcquireGlobalPositionAction | undefined;
    /** A LaneChangeAction. */
    lane_change_action?: TrafficAction_LaneChangeAction | undefined;
    /** A SpeedAction. */
    speed_action?: TrafficAction_SpeedAction | undefined;
    /** An AbortActionsAction. */
    abort_actions_action?: TrafficAction_AbortActionsAction | undefined;
    /** An EndActionsAction. */
    end_actions_action?: TrafficAction_EndActionsAction | undefined;
    /** A CustomAction. */
    custom_action?: TrafficAction_CustomAction | undefined;
    /** A LongitudinalDistanceAction. */
    longitudinal_distance_action?: TrafficAction_LongitudinalDistanceAction | undefined;
    /** A LaneOffsetAction. */
    lane_offset_action?: TrafficAction_LaneOffsetAction | undefined;
    /** A LateralDistanceAction. */
    lateral_distance_action?: TrafficAction_LateralDistanceAction | undefined;
    /** A TeleportAction. */
    teleport_action?: TrafficAction_TeleportAction | undefined;
}
/** Definition of following mode. */
declare enum TrafficAction_FollowingMode {
    /**
     * POSITION - Following mode position forces the traffic participant to
     * follow a path/trajectory explicitly, disregarding any internal
     * constraints, for example, steering dynamics.
     */
    POSITION = 0,
    /**
     * FOLLOW - Following mode follow allows the traffic participant to
     * treat a path/trajectory as a target, to be achieved as closely
     * as possible while retaining any internal constraints,
     * for example, steering dynamics.
     */
    FOLLOW = 1
}
/** Definition of dynamic shapes. */
declare enum TrafficAction_DynamicsShape {
    /** UNSPECIFIED - Shape is unspecified. */
    UNSPECIFIED = 0,
    /** LINEAR - Shape is linear. */
    LINEAR = 1,
    /** CUBIC - Shape is cubic. */
    CUBIC = 2,
    /** SINUSOIDAL - Shape is sinusoidal. */
    SINUSOIDAL = 3,
    /** STEP - Shape is a step function. */
    STEP = 4
}
/** \brief The action header */
interface TrafficAction_ActionHeader {
    /**
     * The unique id of the action.
     *
     * \note This field is mandatory.
     *
     * \note This id must be unique within all traffic command
     * messages exchanged with one traffic participant.
     *
     * \rules
     * is_set
     * \endrules
     */
    action_id?: Identifier | undefined;
}
/**
 * \brief DynamicConstraints
 *
 * This message is used in Longitudinal and Lateral Distance Actions as
 * constraints on the TrafficParticipant not allowing them to exceed/drop below
 * certain speeds/acceleration levels.
 */
interface TrafficAction_DynamicConstraints {
    /**
     * Maximum acceleration the distance controller is allowed to use for keeping distance.
     *
     * Unit: m/s^2
     */
    max_acceleration?: number | undefined;
    /**
     * Maximum deceleration the distance controller is allowed to use for keeping distance.
     *
     * Unit: m/s^2
     */
    max_deceleration?: number | undefined;
    /**
     * Maximum speed the distance controller is allowed to use for keeping distance.
     *
     * Unit: m/s
     */
    max_speed?: number | undefined;
}
/**
 * \brief Follow trajectory action.
 *
 * Controls a traffic participant to follow a trajectory using vertices
 * with timings. It specifies the motion in space as a function of time.
 *
 * \note The StatePoint messages in trajectory_point requires a
 * specified timestamp.
 *
 * \note This action is aligned with the FollowTrajectoryAction of
 * OpenSCENARIO 1.0 using a 4/7D trajectory with shape Polyline.
 */
interface TrafficAction_FollowTrajectoryAction {
    /** The action header. */
    action_header?: TrafficAction_ActionHeader | undefined;
    /**
     * A list of trajectory StatePoints.
     *
     * Set the timestamp fields and position fields for all
     * trajectory points. The orientation fields can be set
     * depending on the constrain_orientation field being true.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    trajectory_point?: StatePoint[] | undefined;
    /**
     * Constrain the orientation of the traffic participant as specified
     * by the trajectory points.
     *
     * This boolean flag defines whether orientation values supplied in
     * the trajectory points (if any) shall be used to constrain the
     * orientation of the traffic participant or not.
     */
    constrain_orientation?: boolean | undefined;
    /**
     * Specify the following mode that should be employed in executing
     * the trajectory.
     */
    following_mode?: TrafficAction_FollowingMode | undefined;
}
/**
 * \brief Follow path action.
 *
 * Controls a traffic participant to follow a path using vertices. It
 * specifies the motion in space independent of time.
 *
 * \note The StatePoint messages in path_point only requires a specified
 * position field. The orientation can be set optionally. Any
 * timestamp StatePoint values are ignored.
 *
 * \note This action is aligned with the FollowTrajectoryAction of
 * OpenSCENARIO 1.0 using a 3/6D trajectory with shape Polyline.
 */
interface TrafficAction_FollowPathAction {
    /** The action header */
    action_header?: TrafficAction_ActionHeader | undefined;
    /**
     * A list of path StatePoints
     *
     * Set the position fields for all path points.
     * The timestamp field are not required and ignored.
     * The orientation fields can be set depending on the constrain_orientation
     * field being true.
     *
     * \note OSI uses singular instead of plural for repeated field names.
     */
    path_point?: StatePoint[] | undefined;
    /**
     * Constrain the orientation of the traffic participant as specified
     * by the path points.
     *
     * This boolean flag defines whether orientation values supplied in
     * the path points shall be used to constrain the orientation
     * of the traffic participant or not.
     */
    constrain_orientation?: boolean | undefined;
    /**
     * Specify the following mode that should be employed in executing
     * the path.
     */
    following_mode?: TrafficAction_FollowingMode | undefined;
}
/**
 * \brief Acquire global position action.
 *
 * This action assigns a route to a traffic participant. The route
 * assigned will be the shortest route (along roads or satisfying any
 * other constraints a traffic participant is operating under) between
 * the traffic participant's current position and the position specified.
 *
 * As with all routing actions, the exact way this route is achieved is
 * under the control of the traffic participant model.
 *
 * \note This action is aligned with the AcquirePositionAction of
 * OpenSCENARIO 1.0 using a WorldPosition position argument.
 */
interface TrafficAction_AcquireGlobalPositionAction {
    /** The action header. */
    action_header?: TrafficAction_ActionHeader | undefined;
    /**
     * Position in the global coordinate system.
     *
     * The position refers to the center (x,y,z) of the bounding box.
     *
     * \note Remark: The definition of the reference point follows the
     * specification of the \c BaseMoving message.
     */
    position?: Vector3d | undefined;
    /**
     * Orientation in the global coordinate system.
     *
     * This is optional. If no orientation is given, the end orientation
     * is under control of the traffic participant.
     */
    orientation?: Orientation3d | undefined;
}
/**
 * \brief Lane change action.
 *
 * This action assigns a lane change to a traffic participant. The fields
 * of this message enable different levels of constraint for the traffic
 * participant depending on the use case. In case the constraints are
 * supposed to be small, the dynamics shape or even the duration and
 * the distance for the lane change can be omitted.
 *
 * \note This action is aligned with LaneChangeAction of OpenSCENARIO 1.0
 * defining the targeted lane and optionally the parametrization of the
 * lane change.
 */
interface TrafficAction_LaneChangeAction {
    /** The action header. */
    action_header?: TrafficAction_ActionHeader | undefined;
    /**
     * Targeted lane relative to the current lane.
     *
     * Convention: +1 means to the right, -1 means to the left.
     */
    relative_target_lane?: number | undefined;
    /**
     * Specified shape of the lane change action.
     * If the shape is unspecified (enum value 0), the shape of the
     * lane change is open to the traffic participant model.
     */
    dynamics_shape?: TrafficAction_DynamicsShape | undefined;
    /**
     * Duration of the lane change.
     *
     * A value of 0.0 (the default value) imposes no constraint
     * on the duration, unless the dynamics shape is a step function,
     * where an immediate step is effected.
     *
     * Unit: s
     */
    duration?: number | undefined;
    /**
     * Distance of the lane change.
     *
     * A value of 0.0 (the default value) imposes no constraint
     * on the distance, unless the dynamics shape is a step function,
     * where an immediate step is effected.
     *
     * Unit: m
     */
    distance?: number | undefined;
}
/**
 * \brief Speed action.
 *
 * This action assigns a targeted speed to a traffic participant.
 * The action can be constrained by specifying the dynamics
 * shape or even the duration and the distance of the acceleration /
 * deceleration process.
 *
 * \note This action is aligned with SpeedAction of OpenSCENARIO 1.0
 * defining the targeted speed and optionally the parametrization of the
 * speed transition.
 */
interface TrafficAction_SpeedAction {
    /** The action header */
    action_header?: TrafficAction_ActionHeader | undefined;
    /** Targeted absolute speed. */
    absolute_target_speed?: number | undefined;
    /**
     * Specified transition shape of the speed change action.
     * If the shape is unspecified (enum value 0), the shape of the
     * speed change is open to the traffic participant model.
     */
    dynamics_shape?: TrafficAction_DynamicsShape | undefined;
    /**
     * Duration of the speed change.
     *
     * A value of 0.0 (the default value) imposes no constraint
     * on the duration, unless the dynamics shape is a step function,
     * where an immediate step is effected.
     *
     * Unit: s
     */
    duration?: number | undefined;
    /**
     * Distance of the speed change.
     *
     * A value of 0.0 (the default value) imposes no constraint
     * on the distance, unless the dynamics shape is a step function,
     * where an immediate step is effected.
     *
     * Unit: m
     */
    distance?: number | undefined;
}
/**
 * \brief AbortActionsAction.
 *
 * This action tells a traffic participant that it should immediately
 * abort the execution of other actions referenced within this action.
 * In contrast to the EndActionsAction this action forces a hard
 * termination of the referenced actions.
 */
interface TrafficAction_AbortActionsAction {
    /** The action header */
    action_header?: TrafficAction_ActionHeader | undefined;
    /**
     * Actions which must be aborted immediately.
     *
     * These fields hold the action ids of the actions that must be
     * aborted immediately.
     */
    target_action_id?: Identifier[] | undefined;
}
/**
 * \brief End actions action.
 *
 * This action tells a traffic participant that the execution of the
 * referenced actions is regarded as successfully performed. The
 * termination of the referenced actions is allowed to be performed
 * gracefully.
 */
interface TrafficAction_EndActionsAction {
    /** The action header */
    action_header?: TrafficAction_ActionHeader | undefined;
    /**
     * Actions which are regarded as successfully executed.
     *
     * These fields hold the action ids of the actions that are regarded
     * as successfully executed and shall be terminated gracefully.
     */
    target_action_id?: Identifier[] | undefined;
}
/**
 * \brief Custom Action.
 *
 * This action assigns a custom command to a traffic participant.
 * The syntax and semantics of this action is implementation defined.
 * It is entirely up to each individual traffic participant which
 * custom commands it supports, if any, and how they must be phrased.
 *
 * \note This action is aligned with CustomCommandAction of OpenSCENARIO 1.0
 * providing a customizable user defined action.
 */
interface TrafficAction_CustomAction {
    /** The Action Header. */
    action_header?: TrafficAction_ActionHeader | undefined;
    /**
     * The custom command given to the traffic participant. Used to convey a specific instruction
     * (for example, "exit_highway"), or event (for example, "left_indicator_activated").
     *
     * \note This corresponds to the content of the OpenSCENARIO 1.0 CustomCommandAction field.
     */
    command?: string | undefined;
    /**
     * The type of the custom command given to the traffic participant. Can be used to simplify
     * how commands are grouped. For example, the command_type could be "sensor_failure" and the
     * command value could be "front_right_camera".  This avoids long commands, like
     * "sensor_failure: front_right_camera".
     *
     * \note This corresponds to the "type" attribute of the OpenSCENARIO 1.0 CustomCommandAction.
     */
    command_type?: string | undefined;
}
/**
 * \brief Longitudinal Distance Action
 *
 * The action tells the (host) traffic participant to reach a certain longitudinal distance
 * relative to a target traffic participant. The longitudinal distance is defined as the distance
 * along the centerline of the lane, on which the (host) traffic participant is currently located.
 * The interpolation strategy between centerline points for calculating
 * that distance along the centerline is open to the traffic participant modeler.
 *
 * \note This action is aligned with LongitudinalDistanceAction of OpenSCENARIO 1.0
 * defining the reference traffic participant and the distance.
 *
 * \note Limitation: This concept currently only works for lanes with a centerline, i.e. for lanes
 * of TYPE_DRIVING, not for lanes of TYPE_NONDRIVING or TYPE_INTERSECTION.
 */
interface TrafficAction_LongitudinalDistanceAction {
    /** Action Header of the message */
    action_header?: TrafficAction_ActionHeader | undefined;
    /** Unique Id of the reference traffic participant to which the distance is defined. */
    target_traffic_participant_id?: Identifier | undefined;
    /**
     * The distance to reach along the lane
     *
     * Unit: m
     */
    distance?: number | undefined;
    /**
     * Determine the measurement of longitudinal distance between the traffic
     * participant receiving this action and the reference traffic
     * participant.
     * True: Longitudinal distance is measured using the distance between closest bounding box points.
     * False: Longitudinal distance is measured using the distance between the center of each object's bounding box.
     */
    freespace?: boolean | undefined;
    /**
     * Define whether the traffic participant should only reach the distance once
     * or if it should also keep the distance after having reached it.
     * True: the traffic participant shall approach the reference participant
     * and follow with the distance specified until the action is aborted (communicate with AbortActionsAction).
     * False: the action ends as soon as the traffic participant has reached
     * the specified distance (communicate with EndActionsAction).
     */
    follow?: boolean | undefined;
    /**
     * Parameter that assigns either unlimited dynamics (if omitted)
     * or limited maxAcceleration/maxDeceleration/maxSpeed to the action.
     */
    dynamic_constraints?: TrafficAction_DynamicConstraints | undefined;
}
/**
 * \brief Lateral Distance Action
 *
 * The action tells the (host) traffic participant to reach a certain lateral distance relative to
 * a target traffic participant. The lateral distance is defined along an imaginative perpendicular line
 * with respect to the centerline of the current (host) traffic participant's lane.
 * The interpolation strategy between centerline points for calculating that distance along the imaginative
 * perpendicular line is open to the traffic participant modeler.
 *
 * \note This action is aligned with LateralDistanceAction of OpenSCENARIO 1.0
 * defining the reference traffic participant and the distance.
 *
 * \note Limitation: This concept currently only works for lanes with a centerline, i.e. for lanes
 * of TYPE_DRIVING, not for lanes of TYPE_NONDRIVING or TYPE_INTERSECTION.
 */
interface TrafficAction_LateralDistanceAction {
    /** Action Header of the message */
    action_header?: TrafficAction_ActionHeader | undefined;
    /** Id of the reference entity the lateral distance shall be kept to. */
    target_traffic_participant_id?: Identifier | undefined;
    /**
     * Lateral distance value.
     *
     * Unit: m
     */
    distance?: number | undefined;
    /**
     * Determine the measurement of lateral distance between the traffic
     * participant receiving this action and the reference traffic
     * participant.
     * True: Lateral distance is measured using the distance between closest bounding box points.
     * False: Lateral distance is measured using the distance between the center of each object's bounding box.
     */
    freespace?: boolean | undefined;
    /**
     * Define whether the traffic participant should only reach the distance once
     * or if it should also keep the distance after having reached it.
     * True: the traffic participant shall approach the reference participant
     * and follow with the distance specified until the action is aborted (communicate with AbortActionsAction).
     * False: the action ends as soon as the traffic participant has reached
     * the specified distance (communicate with EndActionsAction).
     */
    follow?: boolean | undefined;
    /**
     * Parameter that assigns either unlimited dynamics (if omitted)
     * or limited maxAcceleration/maxDeceleration/maxSpeed to the action.
     */
    dynamic_constraints?: TrafficAction_DynamicConstraints | undefined;
}
/**
 * \brief Lane Offset Action
 *
 * This action assigns a targeted lane offset to a traffic participant.
 * The action can be constrained by specifying the dynamics shape of the
 * lateral transition profile.
 *
 * \note This action is aligned with LaneOffsetAction of OpenSCENARIO 1.0.
 */
interface TrafficAction_LaneOffsetAction {
    /** The Action Header */
    action_header?: TrafficAction_ActionHeader | undefined;
    /**
     * Targeted lane offset in meters relative to the centerline of the
     * current traffic participant's lane. Positive values mean left of the centerline,
     * negative values mean right of the centerline.
     *
     * Unit: m
     */
    target_lane_offset?: number | undefined;
    /**
     * Specified transition shape of reaching the lane offset.
     * If the shape is unspecified (enum value 0), the shape of the
     * transition is open to the traffic participant model.
     */
    dynamics_shape?: TrafficAction_DynamicsShape | undefined;
}
/**
 * \brief Teleport Action
 *
 * This Action allows to immediately place a traffic participant to
 * another position.
 *
 * \note This action is aligned with the TeleportAction of
 * OpenSCENARIO 1.0 using a WorldPosition position argument.
 */
interface TrafficAction_TeleportAction {
    /** The Action Header */
    action_header?: TrafficAction_ActionHeader | undefined;
    /**
     * Position in the global coordinate system.
     *
     * The position refers to the center (x,y,z) of the bounding box.
     *
     * \note Remark: The definition of the reference point follows the
     * specification of the \c BaseMoving message.
     */
    position?: Vector3d | undefined;
    /**
     * Orientation in the global coordinate system.
     *
     * This is optional, if no orientation is given, the end orientation
     * is under control of the traffic participant.
     */
    orientation?: Orientation3d | undefined;
}

/**
 * \brief This message enables the traffic participant model to send updates
 * to the scenario engine about the execution of its received \c TrafficCommand input.
 * While traffic actions are usually executed successfully by the traffic participant,
 * there may be actions which the traffic participant is not able to execute
 * either for capability or situation-specific reasons.
 *
 * This message allows a traffic participant to send feedback if an action
 * cannot happen as requested by the \c TrafficCommand. Currently, it is out of
 * scope to standardize the exact reason for non-executability or failed execution
 * because the reason can have multiple explanations. The responsibility for deciding
 * about successful or unsuccessful scenario execution lies fully on the side of the
 * scenario engine.
 *
 * \note This interface is currently just a placeholder and could be
 * changed in experimental ways to support semantics of upcoming OpenSCENARIO
 * versions.
 */
interface TrafficCommandUpdate {
    /**
     * The interface version used by the sender (traffic participant model).
     *
     * \rules
     * is_set
     * \endrules
     */
    version?: InterfaceVersion | undefined;
    /**
     * The data timestamp of the simulation environment. Zero time is arbitrary
     * but must be identical for all messages. Zero time does not need to
     * coincide with the UNIX epoch. It is recommended to use zero timestamp as
     * the starting time point of the simulation.
     *
     * \rules
     * is_set
     * \endrules
     */
    timestamp?: Timestamp | undefined;
    /**
     * The ID of this traffic participant which must coincide with a prior sent ID, cf.
     * \c TrafficCommand::traffic_participant_id.
     *
     * \rules
     * is_set
     * \endrules
     */
    traffic_participant_id?: Identifier | undefined;
    /**
     * Actions which a traffic participant dismisses and which are not yet ended or
     * aborted by the scenario engine (via a \c TrafficCommand::action.end_actions_action or a
     * \c TrafficCommand::action.abort_actions_action).
     * Thus, the valid time interval for this action is after the \c TrafficCommand::timestamp
     * for the respective action, which tells a traffic participant to perform an action, has
     * been sent, but must not be after a \c TrafficCommand::timestamp of the respective End-Actions-Action
     * or Abort-Actions-Action, which tells a traffic participant to end or abort that action.
     *
     * Furthermore, a \c TrafficCommand::action.end_actions_action or a
     * \c TrafficCommand::action.abort_actions_action must not be sent after this action
     * (the \c TrafficCommandUpdate::dismissed_action) for a respective action has been sent.
     *
     * \note If more than one dismissed action is supplied it means that
     * multiple actions are regarded as dismissed.
     */
    dismissed_action?: TrafficCommandUpdate_DismissedAction[] | undefined;
}
/** \brief Action which a traffic participant dismisses. */
interface TrafficCommandUpdate_DismissedAction {
    /**
     * Dismissed traffic action id from the perspective of this traffic participant, if any.
     *
     * \note A dismissed traffic action id identifies a \c TrafficCommand::action which cannot be executed or
     * completed by the traffic participant. This field must have the same value as the
     * \c ActionHeader::action_id of a prior sent \c TrafficCommand and must correspond
     * to the same traffic participant.
     */
    dismissed_action_id?: Identifier | undefined;
    /**
     * Information about the reason of failure.
     *
     * \note This is a custom, informal string without a standardized meaning.
     */
    failure_reason?: string | undefined;
}

/**
 * \brief The traffic update message is provided by traffic participant
 * models to provide updates to their position, state and future
 * trajectory back to the simulation environment. The message is
 * designed to update data of exactly one traffic participant,
 * optionally with an attached trailer.
 *
 * \note For reasons of convenience and consistency, the updated
 * information is provided as a MovingObject.  Certain fields of this
 * sub-message are not required to be set and will be ignored by the
 * simulation environment, because they are static information.
 * Instead of creating a separate message type for only the non-static
 * information, re-use existing message.
 */
interface TrafficUpdate {
    /**
     * The interface version used by the sender (traffic participant model).
     *
     * \rules
     * is_set
     * \endrules
     */
    version?: InterfaceVersion | undefined;
    /**
     * The data timestamp of the simulation environment. Zero time is arbitrary
     * but must be identical for all messages. Zero time does not need to
     * coincide with the UNIX epoch. Recommended is the starting time point of
     * the simulation.
     *
     * \note For moving object update data the timestamp coincides both with
     * the notional simulation time the data applies to and the time it was sent.
     * There is no inherent latency for moving object update data, as opposed
     * to sensor data.
     *
     * \rules
     * is_set
     * \endrules
     */
    timestamp?: Timestamp | undefined;
    /**
     * Updated traffic participant data
     *
     * \note It is not expected that static fields are populated. If they
     * are, they may be ignored by the receiver of this message, for example, dimensions,
     * or vehicle category.  All dynamic fields should be populated where known,
     * for example, velocity, light states, or future trajectory.
     *
     * \note The field is repeated because it is possible to have a trailer attached to
     * a vehicle, see MovingObject::VehicleClassification::has_trailer and
     * MovingObject::VehicleClassification::trailer_id.
     */
    update?: MovingObject[] | undefined;
    /**
     * Internal state for each vehicle.
     *
     * This is an optional field as internal state may not be known or relevant,
     * for example, a trailer might not have any internal state.
     * It is also allowed to only specify internal_state for a subset of the
     * objects referenced in the update.
     *
     * \note This covers any information which cannot be externally perceived
     * and therefore cannot be included in messages available in ground truth.
     *
     * \note The id field from this should match the id in the update field
     * above where the same vehicle is being referenced.
     */
    internal_state?: HostVehicleData[] | undefined;
}

export { type BaseMoving, type BaseStationary, type BoundingBox, BoundingBox_Type, type CameraDetection, type CameraDetectionData, type CameraDetectionSpecificHeader, CameraDetection_Color, CameraDetection_ImageShapeType, type CameraPoint, type CameraSensorView, type CameraSensorViewConfiguration, CameraSensorViewConfiguration_ChannelFormat, CameraSensorViewConfiguration_PixelOrder, type CameraSpecificObjectData, type ColorCMYK, type ColorDescription, type ColorGrey, type ColorHSV, type ColorLUV, type ColorRGB, type ColorRGBIR, type DetectedEntityHeader, DetectedEntityHeader_DataQualifier, type DetectedItemHeader, DetectedItemHeader_MeasurementState, type DetectedLane, type DetectedLaneBoundary, type DetectedLaneBoundary_CandidateLaneBoundary, type DetectedLane_CandidateLane, type DetectedMovingObject, type DetectedMovingObject_CandidateMovingObject, DetectedMovingObject_MovementState, DetectedMovingObject_ReferencePoint, type DetectedOccupant, type DetectedOccupant_CandidateOccupant, type DetectedRoadMarking, type DetectedRoadMarking_CandidateRoadMarking, type DetectedStationaryObject, type DetectedStationaryObject_CandidateStationaryObject, type DetectedTrafficLight, type DetectedTrafficLight_CandidateTrafficLight, type DetectedTrafficSign, type DetectedTrafficSign_DetectedMainSign, type DetectedTrafficSign_DetectedMainSign_CandidateMainSign, DetectedTrafficSign_DetectedMainSign_Geometry, type DetectedTrafficSign_DetectedSupplementarySign, type DetectedTrafficSign_DetectedSupplementarySign_CandidateSupplementarySign, DetectionClassification, type Dimension3d, type EnvironmentalConditions, EnvironmentalConditions_AmbientIllumination, type EnvironmentalConditions_CloudLayer, EnvironmentalConditions_CloudLayer_FractionalCloudCover, EnvironmentalConditions_Fog, EnvironmentalConditions_Precipitation, type EnvironmentalConditions_Sun, type EnvironmentalConditions_TimeOfDay, type EnvironmentalConditions_Wind, type ExternalReference, type FeatureData, type GenericSensorView, type GenericSensorViewConfiguration, type GeodeticPosition, type GroundTruth, type GroundTruth_ProjFrameOffset, type HostVehicleData, type HostVehicleData_VehicleAutomatedDrivingFunction, type HostVehicleData_VehicleAutomatedDrivingFunction_DriverOverride, HostVehicleData_VehicleAutomatedDrivingFunction_DriverOverride_Reason, HostVehicleData_VehicleAutomatedDrivingFunction_Name, HostVehicleData_VehicleAutomatedDrivingFunction_State, type HostVehicleData_VehicleBasics, HostVehicleData_VehicleBasics_OperatingState, type HostVehicleData_VehicleBrakeSystem, type HostVehicleData_VehicleLocalization, type HostVehicleData_VehicleMotion, type HostVehicleData_VehiclePowertrain, type HostVehicleData_VehiclePowertrain_Motor, HostVehicleData_VehiclePowertrain_Motor_Type, type HostVehicleData_VehicleSteering, type HostVehicleData_VehicleWheels, type HostVehicleData_VehicleWheels_WheelData, type Identifier, type InterfaceVersion, type KeyValuePair, type Lane, type LaneBoundary, type LaneBoundary_BoundaryPoint, LaneBoundary_BoundaryPoint_Dash, type LaneBoundary_Classification, LaneBoundary_Classification_Color, LaneBoundary_Classification_Type, type Lane_Classification, type Lane_Classification_LanePairing, type Lane_Classification_RoadCondition, Lane_Classification_Subtype, Lane_Classification_Type, type LidarDetection, type LidarDetectionData, type LidarSensorView, type LidarSensorViewConfiguration, type LidarSensorView_Reflection, type LidarSpecificObjectData, type LogicalDetection, LogicalDetectionClassification, type LogicalDetectionData, type LogicalDetectionDataHeader, LogicalDetectionDataHeader_DataQualifier, type LogicalLane, type LogicalLaneAssignment, type LogicalLaneBoundary, type LogicalLaneBoundary_LogicalBoundaryPoint, LogicalLaneBoundary_PassingRule, type LogicalLane_LaneConnection, type LogicalLane_LaneRelation, LogicalLane_MoveDirection, type LogicalLane_PhysicalLaneReference, type LogicalLane_TrafficRule, type LogicalLane_TrafficRule_SpeedLimit, LogicalLane_TrafficRule_TrafficRuleType, type LogicalLane_TrafficRule_TrafficRuleValidity, type LogicalLane_TrafficRule_TrafficRuleValidity_TypeValidity, LogicalLane_Type, type MotionRequest, type MotionRequest_DesiredState, type MotionRequest_DesiredTrajectory, MotionRequest_MotionRequestType, type MountingPosition, type MovingObject, type MovingObject_MovingObjectClassification, type MovingObject_PedestrianAttributes, type MovingObject_PedestrianAttributes_Bone, MovingObject_PedestrianAttributes_Bone_Type, MovingObject_Type, type MovingObject_VehicleAttributes, type MovingObject_VehicleAttributes_WheelData, type MovingObject_VehicleClassification, type MovingObject_VehicleClassification_LightState, MovingObject_VehicleClassification_LightState_BrakeLightState, MovingObject_VehicleClassification_LightState_GenericLightState, MovingObject_VehicleClassification_LightState_IndicatorState, MovingObject_VehicleClassification_Role, MovingObject_VehicleClassification_Type, type Occupant, type Occupant_Classification, Occupant_Classification_Seat, Occupant_Classification_SteeringControl, type Orientation3d, type Pedalry, type Polygon3d, type RadarDetection, type RadarDetectionData, type RadarSensorView, type RadarSensorViewConfiguration, type RadarSensorViewConfiguration_AntennaDiagramEntry, type RadarSensorView_Reflection, type RadarSpecificObjectData, type ReferenceLine, type ReferenceLine_ReferenceLinePoint, ReferenceLine_Type, type RoadMarking, type RoadMarking_Classification, RoadMarking_Classification_Color, RoadMarking_Classification_Type, type Route, type Route_LogicalLaneSegment, type Route_RouteSegment, type SensorData, type SensorDataSeries, type SensorDataSeriesList, type SensorData_VirtualDetectionArea, type SensorDetectionHeader, SensorDetectionHeader_DataQualifier, SensorDetectionHeader_ExtendedQualifier, type SensorView, type SensorViewConfiguration, type SpatialSignalStrength, type Spherical3d, type StatePoint, type StationaryObject, type StationaryObject_Classification, StationaryObject_Classification_Color, StationaryObject_Classification_Density, type StationaryObject_Classification_EmittingStructureAttribute, StationaryObject_Classification_Material, StationaryObject_Classification_Type, type StreamingUpdate, type Timestamp, type TrafficAction, type TrafficAction_AbortActionsAction, type TrafficAction_AcquireGlobalPositionAction, type TrafficAction_ActionHeader, type TrafficAction_CustomAction, type TrafficAction_DynamicConstraints, TrafficAction_DynamicsShape, type TrafficAction_EndActionsAction, type TrafficAction_FollowPathAction, type TrafficAction_FollowTrajectoryAction, TrafficAction_FollowingMode, type TrafficAction_LaneChangeAction, type TrafficAction_LaneOffsetAction, type TrafficAction_LateralDistanceAction, type TrafficAction_LongitudinalDistanceAction, type TrafficAction_SpeedAction, type TrafficAction_TeleportAction, type TrafficCommand, type TrafficCommandUpdate, type TrafficCommandUpdate_DismissedAction, type TrafficLight, type TrafficLight_Classification, TrafficLight_Classification_Color, TrafficLight_Classification_Icon, TrafficLight_Classification_Mode, type TrafficSign, type TrafficSignValue, TrafficSignValue_Unit, type TrafficSign_MainSign, type TrafficSign_MainSign_Classification, TrafficSign_MainSign_Classification_DirectionScope, TrafficSign_MainSign_Classification_Type, type TrafficSign_SupplementarySign, type TrafficSign_SupplementarySign_Classification, TrafficSign_SupplementarySign_Classification_Actor, type TrafficSign_SupplementarySign_Classification_Arrow, TrafficSign_SupplementarySign_Classification_Arrow_Direction, TrafficSign_SupplementarySign_Classification_Type, TrafficSign_Variability, type TrafficUpdate, type UltrasonicDetection, type UltrasonicDetectionData, type UltrasonicDetectionSpecificHeader, type UltrasonicIndirectDetection, type UltrasonicSensorView, type UltrasonicSensorViewConfiguration, type UltrasonicSpecificObjectData, type UltrasonicSpecificObjectData_Signalway, UltrasonicSpecificObjectData_Trend, UltrasonicSpecificObjectData_TrilaterationStatus, type Vector2d, type Vector3d, type VehicleSteeringWheel, type WavelengthData };
