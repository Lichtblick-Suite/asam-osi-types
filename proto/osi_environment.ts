// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: osi_environment.proto

/* eslint-disable */
import { type ExternalReference } from "./osi_common";

/**
 * \brief The conditions of the environment.
 *
 * Definition of light, weather conditions and other environmental conditions.
 *
 * \note These conditions apply locally around the host vehicle.
 */
export interface EnvironmentalConditions {
  /** The ambient illumination of the environment. */
  ambient_illumination?:
    | EnvironmentalConditions_AmbientIllumination
    | undefined;
  /** The time of day at the host vehicles location. */
  time_of_day?:
    | EnvironmentalConditions_TimeOfDay
    | undefined;
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
  unix_timestamp?:
    | number
    | undefined;
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
  atmospheric_pressure?:
    | number
    | undefined;
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
  temperature?:
    | number
    | undefined;
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
  relative_humidity?:
    | number
    | undefined;
  /** Description of the precipitation. */
  precipitation?:
    | EnvironmentalConditions_Precipitation
    | undefined;
  /** Description of the fog. */
  fog?:
    | EnvironmentalConditions_Fog
    | undefined;
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
  source_reference?:
    | ExternalReference[]
    | undefined;
  /** Description of the clouds. */
  clouds?:
    | EnvironmentalConditions_CloudLayer
    | undefined;
  /** Description of the wind. */
  wind?:
    | EnvironmentalConditions_Wind
    | undefined;
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
export enum EnvironmentalConditions_Precipitation {
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
  EXTREME = 8,
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
export enum EnvironmentalConditions_Fog {
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
  DENSE = 9,
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
export enum EnvironmentalConditions_AmbientIllumination {
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
  LEVEL9 = 10,
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
export interface EnvironmentalConditions_TimeOfDay {
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
export interface EnvironmentalConditions_CloudLayer {
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
export enum EnvironmentalConditions_CloudLayer_FractionalCloudCover {
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
  SKY_OBSCURED = 11,
}

/** \brief Defines wind properties. */
export interface EnvironmentalConditions_Wind {
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
  origin_direction?:
    | number
    | undefined;
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
export interface EnvironmentalConditions_Sun {
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
  azimuth?:
    | number
    | undefined;
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
  elevation?:
    | number
    | undefined;
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
