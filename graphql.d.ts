export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Api = {
  __typename?: 'API';
  /** Provides access to air pollution data, including current, forecast, and historical values. */
  airPollution: AirPollution;
  /**
   * Fetch the current weather data for a specific latitude and longitude.
   *
   * - `input`: Latitude and longitude coordinates for the city or location.
   * - `options`: Optional parameters like units and language.
   *
   * The response includes information about temperature, wind speed, weather conditions, and more.
   */
  current: Current;
  /** Provides weather forecasts for up to 30 days. */
  forecast: Forecast;
  /** Provides access to geocoding-related queries. */
  geocoding: Geocoding;
  /**
   * Retrieves road risk information based on location and time.
   * This helps assess potential hazards such as slippery roads, fog, or other
   * weather-related risks that may affect driving conditions.
   */
  roadRisk: Array<RoadRisk>;
  /** The trigger query allows you to fetch triggers and historical data related to weather conditions. */
  trigger?: Maybe<TriggerQuery>;
};


export type ApiCurrentArgs = {
  input: LatLonInput;
  options?: InputMaybe<CurrentOptions>;
};


export type ApiRoadRiskArgs = {
  input: RoadRiskInput;
};

/** Provides air pollution data, including current, forecasted, and historical values. */
export type AirPollution = {
  __typename?: 'AirPollution';
  /**
   * Retrieves current air pollution data based on latitude and longitude.
   * Returns pollutant concentrations and the Air Quality Index (AQI).
   */
  current: AirPollutionPayload;
  /**
   * Provides an air pollution forecast for the next few days
   * based on latitude and longitude.
   */
  forecast: AirPollutionPayload;
  /**
   * Fetches historical air pollution data for a given location and time range.
   * Useful for analyzing past air quality trends.
   */
  history: AirPollutionPayload;
};


/** Provides air pollution data, including current, forecasted, and historical values. */
export type AirPollutionCurrentArgs = {
  input: LatLonInput;
};


/** Provides air pollution data, including current, forecasted, and historical values. */
export type AirPollutionForecastArgs = {
  input: LatLonInput;
};


/** Provides air pollution data, including current, forecasted, and historical values. */
export type AirPollutionHistoryArgs = {
  input: AirPollutionHistoryInput;
};

/** Input parameters for retrieving historical air pollution data. */
export type AirPollutionHistoryInput = {
  /** End timestamp in Unix format (UTC) for historical data retrieval. */
  end: Scalars['Int']['input'];
  /** Latitude coordinate of the location. */
  lat: Scalars['String']['input'];
  /** Longitude coordinate of the location. */
  lon: Scalars['String']['input'];
  /** Start timestamp in Unix format (UTC) for historical data retrieval. */
  start: Scalars['Int']['input'];
};

/** Response object for air pollution data, including pollutant concentrations and AQI. */
export type AirPollutionList = {
  __typename?: 'AirPollutionList';
  /** Concentration of various air pollutants at the recorded time. */
  components: Components;
  /** Timestamp in Unix format (UTC) representing the recorded air pollution data. */
  dt: Scalars['Int']['output'];
  /** Overall air quality index (AQI) at the recorded time. */
  main: AirPollutionMain;
};

/** Represents the overall air quality index (AQI). */
export type AirPollutionMain = {
  __typename?: 'AirPollutionMain';
  /**
   * Air Quality Index (AQI) value.
   * - 1: Good
   * - 2: Fair
   * - 3: Moderate
   * - 4: Poor
   * - 5: Very Poor
   */
  aqi: Scalars['Int']['output'];
};

/** Payload for air pollution data, including historical, current, or forecasted values. */
export type AirPollutionPayload = {
  __typename?: 'AirPollutionPayload';
  /** Coordinates of the location where air pollution data was retrieved. */
  coord: Coord;
  /** A list of air pollution records containing pollutant concentrations and the Air Quality Index (AQI) at specific timestamps. */
  list: Array<AirPollutionList>;
};

export type City = {
  __typename?: 'City';
  /** Coordinates of the city (latitude and longitude). */
  coord: Coord;
  /** City country code (e.g., "US" for the United States, "IN" for India). */
  country: Scalars['String']['output'];
  /**
   * Unique city identifier.
   * @deprecated Please note that built-in geocoder functionality has been deprecated.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /**
   * City name (e.g., "London").
   * @deprecated Please note that built-in geocoder functionality has been deprecated.
   */
  name?: Maybe<Scalars['String']['output']>;
  /** City population (the number of people living in the city). */
  population: Scalars['Int']['output'];
  /** The sunrise time in UTC (seconds since 1970-01-01). */
  sunrise: Scalars['Int']['output'];
  /** The sunset time in UTC (seconds since 1970-01-01). */
  sunset: Scalars['Int']['output'];
  /** The timezone of the city, in UTC offset (e.g., 0 for UTC, -5 for Eastern Standard Time). */
  timezone: Scalars['Int']['output'];
};

export type Clouds = {
  __typename?: 'Clouds';
  /** The cloudiness percentage, indicating the proportion of the sky covered by clouds. */
  all?: Maybe<Scalars['Int']['output']>;
};

/**
 * Represents the concentration of various air pollutants in the atmosphere.
 * Measured in micrograms per cubic meter (µg/m³).
 */
export type Components = {
  __typename?: 'Components';
  /** Carbon monoxide (CO) concentration in the air. */
  co: Scalars['Float']['output'];
  /** Ammonia (NH₃) concentration in the air. */
  nh3: Scalars['Float']['output'];
  /** Nitric oxide (NO) concentration in the air. */
  no: Scalars['Float']['output'];
  /** Nitrogen dioxide (NO₂) concentration in the air. */
  no2: Scalars['Float']['output'];
  /** Ozone (O₃) concentration in the air. */
  o3: Scalars['Float']['output'];
  /**
   * Particulate matter with a diameter of 2.5 micrometers or smaller (PM2.5).
   * Fine particles that can cause respiratory health issues.
   */
  pm2_5: Scalars['Float']['output'];
  /**
   * Particulate matter with a diameter of 10 micrometers or smaller (PM10).
   * Larger airborne particles that can affect air quality and health.
   */
  pm10: Scalars['Float']['output'];
  /** Sulfur dioxide (SO₂) concentration in the air. */
  so2: Scalars['Float']['output'];
};

export type Conditions = {
  __typename?: 'Conditions';
  /** The unique identifier for the condition. */
  _id: Scalars['String']['output'];
  /** The amount for the condition expression (e.g., a temperature threshold). */
  amount: Scalars['Int']['output'];
  /** The expression used to evaluate the condition (e.g., greater than, less than). */
  expression: Scalars['String']['output'];
  /** The name of the condition, e.g., "temperature", "humidity". */
  name: Scalars['String']['output'];
};

export type Coord = {
  __typename?: 'Coord';
  /** City geographic location, expressed as latitude (y-axis). */
  lat: Scalars['Float']['output'];
  /** City geographic location, expressed as longitude (x-axis). */
  lon: Scalars['Float']['output'];
};

export type Current = {
  __typename?: 'Current';
  /** The base of the weather data, representing the measurement system used (e.g., "stations"). */
  base: Scalars['String']['output'];
  /** Cloudiness data, representing the percentage of the sky covered by clouds. */
  clouds?: Maybe<Clouds>;
  /** The status code from the API response, where 200 is successful and other values represent errors. */
  cod: Scalars['Int']['output'];
  /** The coordinates of the location, including latitude and longitude. */
  coord: Coord;
  /** The time of the data calculation in UTC, expressed as a Unix timestamp. */
  dt: Scalars['Int']['output'];
  /** A unique identifier for the city or location. */
  id: Scalars['Int']['output'];
  /** Main weather parameters, such as temperature, pressure, humidity, and others. */
  main?: Maybe<Main>;
  /** The name of the city or location. */
  name: Scalars['String']['output'];
  /** Rain data, representing the rainfall in the last hour (if available). */
  rain?: Maybe<CurrentRain>;
  /** Snow data, representing the snowfall in the last hour (if available). */
  snow?: Maybe<CurrentSnow>;
  /** The system information about the location, including sunrise and sunset times. */
  sys: Sys;
  /** The timezone offset in seconds from UTC. */
  timezone: Scalars['Int']['output'];
  /** The visibility distance in meters. */
  visibility?: Maybe<Scalars['Int']['output']>;
  /** A list of weather conditions for the location, including weather type (e.g., clear, rainy, stormy). */
  weather: Array<Weather>;
  /** Wind data, including wind speed, direction, and gusts. */
  wind?: Maybe<Wind>;
};

export type CurrentOptions = {
  /** The language in which the weather data should be returned (e.g., "en" for English, "fr" for French). */
  lang?: InputMaybe<LangInput>;
  /** The unit system for the weather data. Can be "metric" (Celsius), "imperial" (Fahrenheit), or "standard" (Kelvin). */
  units?: InputMaybe<Units>;
};

export type CurrentRain = {
  __typename?: 'CurrentRain';
  /** The amount of rainfall over the last hour, measured in millimeters. */
  one_hour?: Maybe<Scalars['Float']['output']>;
};

export type CurrentSnow = {
  __typename?: 'CurrentSnow';
  /** The amount of snowfall over the last hour, measured in millimeters. */
  one_hour?: Maybe<Scalars['Float']['output']>;
};

/** Represents location details retrieved using a direct search query. */
export type Direct = {
  __typename?: 'Direct';
  /** Country code in ISO 3166 format. */
  country?: Maybe<Scalars['String']['output']>;
  /** Latitude coordinate of the location. */
  lat: Scalars['Float']['output'];
  /** Localized names of the location in various languages. */
  local_names?: Maybe<LocalNames>;
  /** Longitude coordinate of the location. */
  lon: Scalars['Float']['output'];
  /** Name of the location (e.g., city or town). */
  name?: Maybe<Scalars['String']['output']>;
  /** Name of the state or region where the location is situated. */
  state?: Maybe<Scalars['String']['output']>;
};

/** Input parameters for direct geocoding queries. */
export type DirectInput = {
  /** Limit the number of results returned (default: no limit). */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Name of the location (e.g., city or town) to search for. */
  q: Scalars['String']['input'];
};

export type FeelsLike = {
  __typename?: 'FeelsLike';
  /** "Feels-like" temperature during the day, in degrees Celsius. */
  day?: Maybe<Scalars['Float']['output']>;
  /** "Feels-like" temperature during the evening, in degrees Celsius. */
  eve?: Maybe<Scalars['Float']['output']>;
  /** "Feels-like" temperature during the morning, in degrees Celsius. */
  morn?: Maybe<Scalars['Float']['output']>;
  /** "Feels-like" temperature during the night, in degrees Celsius. */
  night?: Maybe<Scalars['Float']['output']>;
};

export type Forecast = {
  __typename?: 'Forecast';
  /**
   * 5 day forecast is available at any location on the globe. It includes weather forecast data with 3-hour step.
   *
   * Parameters:
   * - `input`: The latitude and longitude of the location.
   * - `options`: Additional parameters like units and language.
   */
  five: Forecast5;
  /**
   * Hourly forecast for 4 days (96 timestamps).
   * Provides temperature, humidity, wind speed, and weather conditions for each hour.
   */
  hourly: HourlyForecast;
  /** Retrieves a 16-day weather forecast based on latitude and longitude. */
  sixteen: Forecast16;
  /**
   * Retrieves a 30-day climate forecast based on latitude and longitude.
   * Provides daily average temperatures and other long-term weather indicators.
   */
  thirty: Forecast30;
};


export type ForecastFiveArgs = {
  input: LatLonInput;
  options?: InputMaybe<Forecast5Options>;
};


export type ForecastHourlyArgs = {
  input: LatLonInput;
  options?: InputMaybe<HourlyForecastOptions>;
};


export type ForecastSixteenArgs = {
  input: LatLonInput;
  options?: InputMaybe<Forecast16Options>;
};


export type ForecastThirtyArgs = {
  input: LatLonInput;
  options?: InputMaybe<Forecast30Options>;
};

/** Represents the 5-day weather forecast data. */
export type Forecast5 = {
  __typename?: 'Forecast5';
  /** The city for which the forecast is generated. */
  city: City;
  /** The number of forecasted time slots returned. */
  cnt: Scalars['Int']['output'];
  /** The response code from the API. */
  cod: Scalars['String']['output'];
  /** A list of forecast entries, each representing weather data for a specific time period. */
  list: Array<Forecast5List>;
  /** A system message, which can be ignored in most cases. */
  message: Scalars['Int']['output'];
};

/** Represents a single forecast entry with weather details for a specific time. */
export type Forecast5List = {
  __typename?: 'Forecast5List';
  /** The cloudiness percentage. */
  clouds?: Maybe<Clouds>;
  /** The timestamp (Unix time) for the forecast entry. */
  dt: Scalars['Int']['output'];
  /** The date and time of the forecast entry. */
  dt_txt?: Maybe<Scalars['String']['output']>;
  /** The perceived temperature (feels-like temperature). */
  feels_like?: Maybe<FeelsLike>;
  /** Represents a single forecast entry with weather details for a specific time. */
  main: Forecast5Main;
  /** The probability of precipitation (0 to 1). */
  pop?: Maybe<Scalars['Float']['output']>;
  /** The forecasted rain volume. */
  rain?: Maybe<Forecast5Rain>;
  /** The forecasted snow volume. */
  snow?: Maybe<Forecast5Snow>;
  /** Part of the day (n - night, d - day) */
  sys?: Maybe<Forecast5Sys>;
  /** The actual temperature forecasted. */
  temp?: Maybe<Temp>;
  /** The visibility distance in meters. */
  visibility?: Maybe<Scalars['Int']['output']>;
  /** A list of weather conditions applicable to this forecast entry. */
  weather: Array<Weather>;
  /** Wind data, including wind speed, direction, and gusts. */
  wind?: Maybe<Wind>;
};

/** Represents the forecasted temperature for a specific time. */
export type Forecast5Main = {
  __typename?: 'Forecast5Main';
  /** The "feels-like" temperature in degrees Celsius. */
  feels_like?: Maybe<Scalars['Float']['output']>;
  /** The atmospheric pressure at ground level in hPa. */
  grnd_level?: Maybe<Scalars['Int']['output']>;
  /** The humidity percentage. */
  humidity?: Maybe<Scalars['Int']['output']>;
  /** The atmospheric pressure in hPa. */
  pressure?: Maybe<Scalars['Int']['output']>;
  /** The atmospheric pressure at sea level in hPa. */
  sea_level?: Maybe<Scalars['Int']['output']>;
  /** The temperature in degrees Celsius. */
  temp?: Maybe<Scalars['Float']['output']>;
  /** The temperature coefficient. */
  temp_kf?: Maybe<Scalars['Float']['output']>;
  /** The maximum temperature in degrees Celsius. */
  temp_max?: Maybe<Scalars['Float']['output']>;
  /** The minimum temperature in degrees Celsius. */
  temp_min?: Maybe<Scalars['Float']['output']>;
};

/** Input parameters for fetching the 5-day weather forecast. */
export type Forecast5Options = {
  /** The number of forecast data points to return. */
  cnt?: InputMaybe<Scalars['Int']['input']>;
  /** The language for the API response. */
  lang?: InputMaybe<LangInput>;
  /** The units of measurement (e.g., metric, imperial). */
  units?: InputMaybe<Units>;
};

/** Represents the forecasted rain volume for a three-hour period. */
export type Forecast5Rain = {
  __typename?: 'Forecast5Rain';
  /** The amount of rain in millimeters for a three-hour period. */
  three_hour?: Maybe<Scalars['Float']['output']>;
};

/** Represents the forecasted snow volume for a three-hour period. */
export type Forecast5Snow = {
  __typename?: 'Forecast5Snow';
  /** The amount of snow in millimeters for a three-hour period. */
  three_hour?: Maybe<Scalars['Float']['output']>;
};

export type Forecast5Sys = {
  __typename?: 'Forecast5Sys';
  /** Part of the day (n - night, d - day) */
  pod?: Maybe<Scalars['String']['output']>;
};

/** Represents the full 16-day weather forecast response. */
export type Forecast16 = {
  __typename?: 'Forecast16';
  /** Details about the city for which the forecast is provided. */
  city?: Maybe<City>;
  /** Number of forecast days returned in the response. */
  cnt?: Maybe<Scalars['Int']['output']>;
  /** Response code from the API (e.g., "200" for success). */
  cod?: Maybe<Scalars['String']['output']>;
  /** List of daily forecasts for up to 16 days. */
  list?: Maybe<Array<Maybe<Forecast16List>>>;
  /** Additional API response message or error description. */
  message?: Maybe<Scalars['Float']['output']>;
};

/** Represents a single day's weather forecast in the 16-day forecast. */
export type Forecast16List = {
  __typename?: 'Forecast16List';
  /** Cloudiness percentage, ranging from 0 to 100. */
  clouds?: Maybe<Scalars['Int']['output']>;
  /** Wind direction, expressed in degrees (meteorological). */
  deg?: Maybe<Scalars['Int']['output']>;
  /** The timestamp of the forecasted data in Unix format (UTC). */
  dt?: Maybe<Scalars['Int']['output']>;
  /** Temperature values that indicate how the temperature feels to the human body. */
  feels_like?: Maybe<FeelsLike>;
  /** Wind gust speed, measured in meters per second. */
  gust?: Maybe<Scalars['Float']['output']>;
  /** Humidity percentage, ranging from 0 to 100. */
  humidity?: Maybe<Scalars['Int']['output']>;
  /** Probability of precipitation, represented as a float between 0 and 1. */
  pop?: Maybe<Scalars['Float']['output']>;
  /** Atmospheric pressure on the sea level, measured in hPa (hectopascals). */
  pressure?: Maybe<Scalars['Int']['output']>;
  /** Expected amount of rain, measured in millimeters. */
  rain?: Maybe<Scalars['Float']['output']>;
  /** Expected amount of snowfall, measured in millimeters. */
  snow?: Maybe<Scalars['Float']['output']>;
  /** Wind speed, measured in meters per second. */
  speed?: Maybe<Scalars['Float']['output']>;
  /** The time of sunrise for the given day in Unix format (UTC). */
  sunrise?: Maybe<Scalars['Int']['output']>;
  /** The time of sunset for the given day in Unix format (UTC). */
  sunset?: Maybe<Scalars['Int']['output']>;
  /** Temperature details, including daily, minimum, and maximum values. */
  temp?: Maybe<Temp>;
  /** An array of weather condition details, such as description and icon. */
  weather?: Maybe<Array<Maybe<Weather>>>;
};

/** Options for customizing the 16-day weather forecast request. */
export type Forecast16Options = {
  /** Number of days to retrieve (maximum 16). */
  cnt?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Language for weather descriptions.
   * Example: "en" for English, "es" for Spanish.
   */
  lang?: InputMaybe<LangInput>;
  /**
   * Unit format for temperature and wind speed.
   * Example: "metric" (Celsius, m/s) or "imperial" (Fahrenheit, mph).
   */
  units?: InputMaybe<Units>;
};

/** Represents the 30-day weather forecast response. */
export type Forecast30 = {
  __typename?: 'Forecast30';
  /** Details about the city for which the forecast is provided. */
  city?: Maybe<City>;
  /** Response code from the API (e.g., "200" for success). */
  cod?: Maybe<Scalars['String']['output']>;
  /**
   * List of daily forecasts for up to 30 days.
   * Each entry contains temperature, weather conditions, and other atmospheric details.
   */
  list?: Maybe<Array<Maybe<Forecast16List>>>;
  /** Additional API response message or error description. */
  message?: Maybe<Scalars['Float']['output']>;
};

/** Options for customizing the 30-day weather forecast request. */
export type Forecast30Options = {
  /** Number of days to retrieve (maximum 30). */
  cnt?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Language for weather descriptions.
   * Example: "en" for English, "es" for Spanish.
   */
  lang?: InputMaybe<LangInput>;
  /**
   * Unit format for temperature and wind speed.
   * Example: "metric" (Celsius, m/s) or "imperial" (Fahrenheit, mph).
   */
  units?: InputMaybe<Units>;
};

/** Provides geocoding services, including direct, reverse, and ZIP code-based lookups. */
export type Geocoding = {
  __typename?: 'Geocoding';
  /** Searches for a location by name, returning latitude, longitude, and country details. */
  direct: Array<Direct>;
  /** Performs reverse geocoding using latitude and longitude to find a location. */
  reverse: Array<Reverse>;
  /** Finds location details based on a given ZIP code. */
  zip: Zip;
};


/** Provides geocoding services, including direct, reverse, and ZIP code-based lookups. */
export type GeocodingDirectArgs = {
  input?: InputMaybe<DirectInput>;
};


/** Provides geocoding services, including direct, reverse, and ZIP code-based lookups. */
export type GeocodingReverseArgs = {
  input?: InputMaybe<ReverseInput>;
};


/** Provides geocoding services, including direct, reverse, and ZIP code-based lookups. */
export type GeocodingZipArgs = {
  zip: Scalars['String']['input'];
};

export type Geometry = {
  __typename?: 'Geometry';
  /** The coordinates of the geometry, represented as an array of arrays for complex shapes. */
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>>>;
  /** The type of geometry (e.g., "Polygon", "Point", etc.). */
  type?: Maybe<Scalars['String']['output']>;
};

export type GurafuHeader = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum GurafuPathMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT'
}

export enum GurafuPlan {
  Basic = 'BASIC',
  Mega = 'MEGA',
  Pro = 'PRO',
  Ultra = 'ULTRA'
}

export type GurafuResolverInput = {
  /** The name of the interface or union type. */
  abstractTypeName: Scalars['String']['input'];
  /** The conditions to resolve the type. */
  conditions: Array<UnionResolverCondition>;
};

export type HistoryQuery = {
  __typename?: 'HistoryQuery';
  /** Fetch a specific trigger history event using the trigger ID and history ID. */
  get?: Maybe<Trigger>;
  /** Fetch a list of past trigger events associated with a specific trigger ID. */
  list?: Maybe<Array<Maybe<Trigger>>>;
};


export type HistoryQueryGetArgs = {
  historyId?: InputMaybe<Scalars['ID']['input']>;
  triggerId: Scalars['ID']['input'];
};


export type HistoryQueryListArgs = {
  triggerId: Scalars['ID']['input'];
};

/** Represents the hourly weather forecast response. */
export type HourlyForecast = {
  __typename?: 'HourlyForecast';
  /** Details about the city for which the forecast is provided. */
  city?: Maybe<City>;
  /** Number of forecasted hours returned in the response. */
  cnt?: Maybe<Scalars['Int']['output']>;
  /** Response code from the API (e.g., "200" for success). */
  cod?: Maybe<Scalars['String']['output']>;
  /** List of hourly forecast data, including temperature, weather conditions, and atmospheric details. */
  list?: Maybe<Array<Maybe<Forecast5List>>>;
  /** Additional API response message or error description. */
  message?: Maybe<Scalars['Int']['output']>;
};

/** Options for customizing the hourly weather forecast request. */
export type HourlyForecastOptions = {
  /** Number of hours to retrieve in the forecast. */
  cnt?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Language for weather descriptions.
   * Example: "en" for English, "es" for Spanish.
   */
  lang?: InputMaybe<LangInput>;
  /**
   * Unit format for temperature and wind speed.
   * Example: "metric" (Celsius, m/s) or "imperial" (Fahrenheit, mph).
   */
  units?: InputMaybe<Units>;
};

export type IArea = {
  /** The unique identifier for the area, used to identify geographical regions. */
  _id: Scalars['ID']['output'];
  /** The coordinates for the area in GeoJSON format. */
  coordinates: Scalars['JSON']['output'];
  /** The type of the area, such as Point, MultiPoint, Polygon, or MultiPolygon. */
  type: TriggerType;
};

export enum LangInput {
  Af = 'af',
  Ar = 'ar',
  Az = 'az',
  Be = 'be',
  Bg = 'bg',
  Ca = 'ca',
  Cz = 'cz',
  Da = 'da',
  De = 'de',
  El = 'el',
  En = 'en',
  Eu = 'eu',
  Fa = 'fa',
  Fi = 'fi',
  Fr = 'fr',
  Gl = 'gl',
  He = 'he',
  Hi = 'hi',
  Hr = 'hr',
  Hu = 'hu',
  Id = 'id',
  Is = 'is',
  It = 'it',
  Ja = 'ja',
  Kr = 'kr',
  Ku = 'ku',
  La = 'la',
  Lt = 'lt',
  Mk = 'mk',
  Nl = 'nl',
  No = 'no',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt_br',
  Ro = 'ro',
  Ru = 'ru',
  Sk = 'sk',
  Sl = 'sl',
  Sq = 'sq',
  Sr = 'sr',
  Th = 'th',
  Tr = 'tr',
  Vi = 'vi',
  ZhCn = 'zh_cn',
  ZhTw = 'zh_tw',
  Zu = 'zu'
}

export type LatLonInput = {
  /** Latitude coordinate (e.g., "34.0522"). */
  lat: Scalars['String']['input'];
  /** Longitude coordinate (e.g., "-118.2437"). */
  lon: Scalars['String']['input'];
};

/**
 * Represents localized names of locations in various languages.
 * Each field corresponds to a language code, such as:
 * - `en`: English
 * - `fr`: French
 * - `es`: Spanish
 * - `zh`: Chinese
 * - `ru`: Russian
 * - and many more...
 */
export type LocalNames = {
  __typename?: 'LocalNames';
  ab?: Maybe<Scalars['String']['output']>;
  af?: Maybe<Scalars['String']['output']>;
  am?: Maybe<Scalars['String']['output']>;
  an?: Maybe<Scalars['String']['output']>;
  ar?: Maybe<Scalars['String']['output']>;
  /** Name of the location in ASCII characters. */
  ascii?: Maybe<Scalars['String']['output']>;
  av?: Maybe<Scalars['String']['output']>;
  ay?: Maybe<Scalars['String']['output']>;
  az?: Maybe<Scalars['String']['output']>;
  ba?: Maybe<Scalars['String']['output']>;
  be?: Maybe<Scalars['String']['output']>;
  bg?: Maybe<Scalars['String']['output']>;
  bh?: Maybe<Scalars['String']['output']>;
  bi?: Maybe<Scalars['String']['output']>;
  bm?: Maybe<Scalars['String']['output']>;
  bn?: Maybe<Scalars['String']['output']>;
  bo?: Maybe<Scalars['String']['output']>;
  br?: Maybe<Scalars['String']['output']>;
  bs?: Maybe<Scalars['String']['output']>;
  ca?: Maybe<Scalars['String']['output']>;
  ce?: Maybe<Scalars['String']['output']>;
  co?: Maybe<Scalars['String']['output']>;
  cs?: Maybe<Scalars['String']['output']>;
  cu?: Maybe<Scalars['String']['output']>;
  cv?: Maybe<Scalars['String']['output']>;
  cy?: Maybe<Scalars['String']['output']>;
  da?: Maybe<Scalars['String']['output']>;
  de?: Maybe<Scalars['String']['output']>;
  ee?: Maybe<Scalars['String']['output']>;
  el?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  eo?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  et?: Maybe<Scalars['String']['output']>;
  eu?: Maybe<Scalars['String']['output']>;
  fa?: Maybe<Scalars['String']['output']>;
  /** Feature name associated with the location. */
  feature_name?: Maybe<Scalars['String']['output']>;
  ff?: Maybe<Scalars['String']['output']>;
  fi?: Maybe<Scalars['String']['output']>;
  fj?: Maybe<Scalars['String']['output']>;
  fo?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  fy?: Maybe<Scalars['String']['output']>;
  ga?: Maybe<Scalars['String']['output']>;
  gd?: Maybe<Scalars['String']['output']>;
  gl?: Maybe<Scalars['String']['output']>;
  gn?: Maybe<Scalars['String']['output']>;
  gu?: Maybe<Scalars['String']['output']>;
  gv?: Maybe<Scalars['String']['output']>;
  ha?: Maybe<Scalars['String']['output']>;
  he?: Maybe<Scalars['String']['output']>;
  hi?: Maybe<Scalars['String']['output']>;
  hr?: Maybe<Scalars['String']['output']>;
  ht?: Maybe<Scalars['String']['output']>;
  hu?: Maybe<Scalars['String']['output']>;
  hy?: Maybe<Scalars['String']['output']>;
  ia?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ie?: Maybe<Scalars['String']['output']>;
  ig?: Maybe<Scalars['String']['output']>;
  io?: Maybe<Scalars['String']['output']>;
  is?: Maybe<Scalars['String']['output']>;
  it?: Maybe<Scalars['String']['output']>;
  ja?: Maybe<Scalars['String']['output']>;
  jv?: Maybe<Scalars['String']['output']>;
  ka?: Maybe<Scalars['String']['output']>;
  kk?: Maybe<Scalars['String']['output']>;
  kl?: Maybe<Scalars['String']['output']>;
  km?: Maybe<Scalars['String']['output']>;
  kn?: Maybe<Scalars['String']['output']>;
  ko?: Maybe<Scalars['String']['output']>;
  ku?: Maybe<Scalars['String']['output']>;
  kv?: Maybe<Scalars['String']['output']>;
  kw?: Maybe<Scalars['String']['output']>;
  ky?: Maybe<Scalars['String']['output']>;
  lb?: Maybe<Scalars['String']['output']>;
  li?: Maybe<Scalars['String']['output']>;
  ln?: Maybe<Scalars['String']['output']>;
  lo?: Maybe<Scalars['String']['output']>;
  lt?: Maybe<Scalars['String']['output']>;
  lv?: Maybe<Scalars['String']['output']>;
  mg?: Maybe<Scalars['String']['output']>;
  mi?: Maybe<Scalars['String']['output']>;
  mk?: Maybe<Scalars['String']['output']>;
  ml?: Maybe<Scalars['String']['output']>;
  mn?: Maybe<Scalars['String']['output']>;
  mr?: Maybe<Scalars['String']['output']>;
  ms?: Maybe<Scalars['String']['output']>;
  mt?: Maybe<Scalars['String']['output']>;
  my?: Maybe<Scalars['String']['output']>;
  na?: Maybe<Scalars['String']['output']>;
  ne?: Maybe<Scalars['String']['output']>;
  nl?: Maybe<Scalars['String']['output']>;
  nn?: Maybe<Scalars['String']['output']>;
  no?: Maybe<Scalars['String']['output']>;
  nv?: Maybe<Scalars['String']['output']>;
  ny?: Maybe<Scalars['String']['output']>;
  oc?: Maybe<Scalars['String']['output']>;
  om?: Maybe<Scalars['String']['output']>;
  or?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  pa?: Maybe<Scalars['String']['output']>;
  pl?: Maybe<Scalars['String']['output']>;
  ps?: Maybe<Scalars['String']['output']>;
  pt?: Maybe<Scalars['String']['output']>;
  qu?: Maybe<Scalars['String']['output']>;
  rm?: Maybe<Scalars['String']['output']>;
  ro?: Maybe<Scalars['String']['output']>;
  ru?: Maybe<Scalars['String']['output']>;
  sa?: Maybe<Scalars['String']['output']>;
  sc?: Maybe<Scalars['String']['output']>;
  sd?: Maybe<Scalars['String']['output']>;
  se?: Maybe<Scalars['String']['output']>;
  sh?: Maybe<Scalars['String']['output']>;
  si?: Maybe<Scalars['String']['output']>;
  sk?: Maybe<Scalars['String']['output']>;
  sl?: Maybe<Scalars['String']['output']>;
  sm?: Maybe<Scalars['String']['output']>;
  sn?: Maybe<Scalars['String']['output']>;
  so?: Maybe<Scalars['String']['output']>;
  sq?: Maybe<Scalars['String']['output']>;
  sr?: Maybe<Scalars['String']['output']>;
  st?: Maybe<Scalars['String']['output']>;
  su?: Maybe<Scalars['String']['output']>;
  sv?: Maybe<Scalars['String']['output']>;
  sw?: Maybe<Scalars['String']['output']>;
  ta?: Maybe<Scalars['String']['output']>;
  te?: Maybe<Scalars['String']['output']>;
  tg?: Maybe<Scalars['String']['output']>;
  th?: Maybe<Scalars['String']['output']>;
  tk?: Maybe<Scalars['String']['output']>;
  tl?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  tr?: Maybe<Scalars['String']['output']>;
  tt?: Maybe<Scalars['String']['output']>;
  tw?: Maybe<Scalars['String']['output']>;
  ug?: Maybe<Scalars['String']['output']>;
  uk?: Maybe<Scalars['String']['output']>;
  ur?: Maybe<Scalars['String']['output']>;
  uz?: Maybe<Scalars['String']['output']>;
  vi?: Maybe<Scalars['String']['output']>;
  vo?: Maybe<Scalars['String']['output']>;
  wa?: Maybe<Scalars['String']['output']>;
  wo?: Maybe<Scalars['String']['output']>;
  yi?: Maybe<Scalars['String']['output']>;
  yo?: Maybe<Scalars['String']['output']>;
  zh?: Maybe<Scalars['String']['output']>;
  zu?: Maybe<Scalars['String']['output']>;
};

export type Main = {
  __typename?: 'Main';
  /** The "feels-like" temperature in degrees Celsius. */
  feels_like?: Maybe<Scalars['Float']['output']>;
  /** Atmospheric pressure at the ground level, in hPa (hectopascals). */
  grnd_level?: Maybe<Scalars['Int']['output']>;
  /** Humidity percentage in the air. */
  humidity?: Maybe<Scalars['Int']['output']>;
  /** Atmospheric pressure at the sea level, in hPa (hectopascals). */
  pressure?: Maybe<Scalars['Int']['output']>;
  /** Atmospheric pressure at the sea level, in hPa (hectopascals). */
  sea_level?: Maybe<Scalars['Int']['output']>;
  /** Temperature in degrees Celsius (Kelvin for default unit). */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Temperature coefficient, used for indicating adjustments (e.g., for air pressure in weather models). */
  temp_kf?: Maybe<Scalars['Float']['output']>;
  /** Maximum temperature at the moment (usually for the day). */
  temp_max?: Maybe<Scalars['Float']['output']>;
  /** Minimum temperature at the moment (usually for the day). */
  temp_min?: Maybe<Scalars['Float']['output']>;
};

export type MultiPoint = IArea & {
  __typename?: 'MultiPoint';
  /** Represents a multi-point area. A set of multiple points in 2D space. */
  _id: Scalars['ID']['output'];
  coordinates: Scalars['JSON']['output'];
  /** The multi-point coordinates, represented as a 2D array of float pairs (longitude, latitude). */
  multi_point_coordinates?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>;
  type: TriggerType;
};

export type MultiPolygon = IArea & {
  __typename?: 'MultiPolygon';
  /** Represents a multi-polygon area. A collection of multiple polygons. */
  _id: Scalars['ID']['output'];
  coordinates: Scalars['JSON']['output'];
  /** The multi-polygon coordinates, represented as a 4D array of float values (multiple polygons with coordinates for each). */
  multi_polygon_coordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>>>>>;
  type: TriggerType;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Mutation to access the API with an appid (API key) for weather-related mutation operations. */
  api?: Maybe<MutationApi>;
};


export type MutationApiArgs = {
  appid?: InputMaybe<Scalars['String']['input']>;
};

export type MutationApi = {
  __typename?: 'MutationAPI';
  /** The trigger mutation allows you to add, update, and delete triggers related to weather conditions. */
  trigger?: Maybe<TriggerMutation>;
};

export type Point = IArea & {
  __typename?: 'Point';
  /** Represents a point area. A single set of coordinates in 2D space (longitude, latitude). */
  _id: Scalars['ID']['output'];
  coordinates: Scalars['JSON']['output'];
  /** The point coordinates, represented as an array of floats (longitude, latitude). */
  point_coordinates?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  type: TriggerType;
};

export type Polygon = IArea & {
  __typename?: 'Polygon';
  /** Represents a polygon area. A closed shape with multiple points (e.g., a rectangle or triangle). */
  _id: Scalars['ID']['output'];
  coordinates: Scalars['JSON']['output'];
  /** The polygon coordinates, represented as a 3D array of float values (longitude, latitude, and potentially altitude). */
  polygon_coordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>>>;
  type: TriggerType;
};

export type PolygonWithHole = IArea & {
  __typename?: 'PolygonWithHole';
  /** Represents a polygon area with a hole inside it. The hole is defined by a second set of points. */
  _id: Scalars['ID']['output'];
  coordinates: Scalars['JSON']['output'];
  /** The polygon with hole coordinates, represented as a 3D array with two sets of points: one for the outer polygon and one for the hole. */
  polygon_with_hole_coordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>>>;
  type: TriggerType;
};

export type Query = {
  __typename?: 'Query';
  /** Query to access the API with an appid (API key) for weather data. */
  api?: Maybe<Api>;
  /** Test query to check if the server is running. */
  ping: Scalars['String']['output'];
};


export type QueryApiArgs = {
  appid?: InputMaybe<Scalars['String']['input']>;
};

export type RequestBodyConstraint = {
  /** The field to replace. */
  jsonPath: Scalars['String']['input'];
  /** The maximum value of the date. */
  maxDate?: InputMaybe<Scalars['String']['input']>;
  /** The maximum length of the string. */
  maxLength?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum value of the number. */
  maxValue?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum value of the date. */
  minDate?: InputMaybe<Scalars['String']['input']>;
  /** The minimum length of the string. */
  minLength?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum value of the number. */
  minValue?: InputMaybe<Scalars['Int']['input']>;
  /** The pattern to match the string. */
  pattern?: InputMaybe<Scalars['String']['input']>;
  /** The values the string can be. */
  stringValues?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RequestBodyKeyReplacement = {
  /** The field to replace. */
  jsonPath: Scalars['String']['input'];
  /** The replacement key. */
  newKey: Scalars['String']['input'];
};

/** Represents location details retrieved using latitude and longitude. */
export type Reverse = {
  __typename?: 'Reverse';
  /** Country code in ISO 3166 format. */
  country?: Maybe<Scalars['String']['output']>;
  /** Latitude coordinate of the location. */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Localized names of the location in various languages. */
  local_names?: Maybe<LocalNames>;
  /** Longitude coordinate of the location. */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Name of the location (e.g., city or town). */
  name?: Maybe<Scalars['String']['output']>;
  /** Name of the state or region where the location is situated. */
  state?: Maybe<Scalars['String']['output']>;
};

/** Input parameters for reverse geocoding queries. */
export type ReverseInput = {
  /** Latitude coordinate for the reverse geocoding lookup. */
  lat: Scalars['String']['input'];
  /** Limit the number of results returned (default: no limit). */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Longitude coordinate for the reverse geocoding lookup. */
  lon: Scalars['String']['input'];
};

/** Represents the state and temperature of the road at a given location. */
export type Road = {
  __typename?: 'Road';
  /**
   * Numerical representation of the road state, where different values may indicate
   * conditions such as dry, wet, icy, or snow-covered.
   */
  state?: Maybe<Scalars['Int']['output']>;
  /** Temperature of the road surface in degrees Celsius. */
  temp?: Maybe<Scalars['Float']['output']>;
};

/** Represents road risk data, including weather conditions, road state, and alerts. */
export type RoadRisk = {
  __typename?: 'RoadRisk';
  /** List of alerts indicating potential hazards due to weather or road conditions. */
  alerts: Array<RoadRiskAlert>;
  /** Coordinates (latitude, longitude) of the location for which the road risk data applies. */
  coord: Array<Scalars['Float']['output']>;
  /** Timestamp in Unix format (UTC) representing the time for which the data is provided. */
  dt: Scalars['Int']['output'];
  /** Information about the road state and surface temperature. */
  road?: Maybe<Road>;
  /** Weather conditions affecting road risk at the given location. */
  weather: RoadRiskWeather;
};

/** Represents an alert related to road risk conditions. */
export type RoadRiskAlert = {
  __typename?: 'RoadRiskAlert';
  /** Type of event causing the alert, such as heavy rain, ice, or fog. */
  event?: Maybe<Scalars['String']['output']>;
  /** Severity level of the event. Higher values indicate more severe conditions. */
  event_level?: Maybe<Scalars['Int']['output']>;
  /** Name of the sender issuing the alert. */
  sender_name?: Maybe<Scalars['String']['output']>;
};

/** Input parameters for retrieving road risk data. */
export type RoadRiskInput = {
  /** List of track points containing location coordinates and timestamps to assess road risk. */
  tracks: Array<TrackInput>;
};

/** Represents the weather conditions that impact road risk. */
export type RoadRiskWeather = {
  __typename?: 'RoadRiskWeather';
  /**
   * Dew point temperature in degrees Celsius, indicating the temperature at which air
   * becomes saturated with moisture and condensation begins.
   */
  dew_point?: Maybe<Scalars['Float']['output']>;
  /** Intensity of precipitation (rain or snow) in millimeters per hour (mm/h). */
  precipitation_intensity: Scalars['Float']['output'];
  /** Current air temperature in degrees Celsius. */
  temp: Scalars['Float']['output'];
  /** Wind direction in degrees, where 0° represents north, 90° east, 180° south, and 270° west. */
  wind_deg: Scalars['Int']['output'];
  /** Wind speed at the given location, measured in meters per second (m/s). */
  wind_speed: Scalars['Float']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  /** The country code associated with the city or location, for example, "US" for the United States or "IN" for India. */
  country?: Maybe<Scalars['String']['output']>;
  /** An identifier for the system. This ID is specific to the data provider system. */
  id?: Maybe<Scalars['Int']['output']>;
  /** The sunrise time in UTC, expressed as seconds since the Unix epoch (1970-01-01). */
  sunrise?: Maybe<Scalars['Int']['output']>;
  /** The sunset time in UTC, expressed as seconds since the Unix epoch (1970-01-01). */
  sunset?: Maybe<Scalars['Int']['output']>;
  /** The type of the system. Represents information about the data provider system. */
  type?: Maybe<Scalars['Int']['output']>;
};

export type Temp = {
  __typename?: 'Temp';
  /** Daytime temperature, in degrees Celsius. */
  day?: Maybe<Scalars['Float']['output']>;
  /** Evening temperature, in degrees Celsius. */
  eve?: Maybe<Scalars['Float']['output']>;
  /** Maximum temperature for the day, in degrees Celsius. */
  max?: Maybe<Scalars['Float']['output']>;
  /** Minimum temperature for the day, in degrees Celsius. */
  min?: Maybe<Scalars['Float']['output']>;
  /** Morning temperature, in degrees Celsius. */
  morn?: Maybe<Scalars['Float']['output']>;
  /** Nighttime temperature, in degrees Celsius. */
  night?: Maybe<Scalars['Float']['output']>;
};

export type TimePeriod = {
  __typename?: 'TimePeriod';
  /** The end time period for the trigger, defined with a specific expression and amount. */
  end: TriggersStartEnd;
  /** The start time period for the trigger, defined with a specific expression and amount. */
  start: TriggersStartEnd;
};

export enum TimePeriodExpression {
  /** The condition will be met after the specified time. */
  After = 'after',
  /** The condition will be met before the specified time. */
  Before = 'before',
  /** The condition will be met exactly at the specified time. */
  Exact = 'exact'
}

/** Represents a track point containing latitude, longitude, and timestamp. */
export type TrackInput = {
  /** Timestamp in Unix format (UTC) for which the road risk data is requested. */
  dt: Scalars['Int']['input'];
  /** Latitude coordinate of the location to assess. */
  lat: Scalars['String']['input'];
  /** Longitude coordinate of the location to assess. */
  lon: Scalars['String']['input'];
};

export type Trigger = {
  __typename?: 'Trigger';
  /** The unique identifier for the trigger. */
  _id: Scalars['ID']['output'];
  /** The version of the trigger. */
  _v: Scalars['Int']['output'];
  /** The alerts associated with this trigger, stored as a JSON object. */
  alerts: Scalars['JSONObject']['output'];
  /** A list of geographical areas associated with the trigger. */
  area: Array<IArea>;
  /** A list of conditions that must be met for the trigger to be activated. */
  conditions: Array<Conditions>;
  /** The time period for which the trigger is valid. This includes both start and end times. */
  time_period: TimePeriod;
};

export type TriggerAreaInput = {
  coordinates?: InputMaybe<Scalars['JSON']['input']>;
  multi_point_coordinates?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>>>;
  multi_polygon_coordinates?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>>>>>>>;
  point_coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  polygon_coordinates?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>>>>>;
  polygon_with_hole_coordinates?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>>>>>;
  /** Defines the area for the trigger. The type of the area (e.g., Point, MultiPoint, Polygon, MultiPolygon) and the coordinates. */
  type: TriggerType;
};

export type TriggerConditionInput = {
  /** The amount for the condition expression (e.g., a temperature threshold). */
  amount: Scalars['Int']['input'];
  /** The expression used to evaluate the condition (e.g., greater than, less than). */
  expression: Scalars['String']['input'];
  /** The name of the condition, e.g., "temperature", "humidity". */
  name: Scalars['String']['input'];
};

export type TriggerInput = {
  /** The area or geographical regions associated with the trigger. */
  area: Array<TriggerAreaInput>;
  /** A list of conditions that must be met for the trigger to be activated. */
  conditions: Array<TriggerConditionInput>;
  /** The time period during which the trigger is valid. */
  time_period: TriggerTimePeriodInput;
};

export type TriggerMutation = {
  __typename?: 'TriggerMutation';
  /** Add a new trigger with the specified input data. */
  add?: Maybe<Trigger>;
  /** Delete a trigger using the specified trigger ID. */
  delete?: Maybe<Trigger>;
  /** Update an existing trigger using the provided trigger ID and new input data. */
  update?: Maybe<Trigger>;
};


export type TriggerMutationAddArgs = {
  input: TriggerInput;
};


export type TriggerMutationDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type TriggerMutationUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<TriggerInput>;
};

export type TriggerQuery = {
  __typename?: 'TriggerQuery';
  /** Fetch a specific trigger by its ID. */
  get?: Maybe<Trigger>;
  /** Fetch historical data related to triggers. */
  history?: Maybe<HistoryQuery>;
  /** Fetch a list of triggers based on the app ID. */
  list?: Maybe<Array<Maybe<Trigger>>>;
};


export type TriggerQueryGetArgs = {
  id: Scalars['ID']['input'];
};

export type TriggerStartEndInput = {
  /** The amount of time (in the specified units) for the time period. */
  amount: Scalars['Int']['input'];
  /** The time period expression, such as exact, before, or after. */
  expression: TimePeriodExpression;
};

export type TriggerTimePeriodInput = {
  /** The end time period for the trigger. */
  end: TriggerStartEndInput;
  /** The start time period for the trigger. */
  start: TriggerStartEndInput;
};

export enum TriggerType {
  /** Represents a multi-point area, defined by a set of multiple coordinates. */
  MultiPoint = 'MultiPoint',
  /** Represents a multi-polygon area, defined by multiple polygons. */
  MultiPolygon = 'MultiPolygon',
  /** Represents a point area, defined by a single set of coordinates (longitude, latitude). */
  Point = 'Point',
  /** Represents a polygon area, defined by a closed set of coordinates. */
  Polygon = 'Polygon'
}

export type TriggersStartEnd = {
  __typename?: 'TriggersStartEnd';
  /** The amount of time (in the specified units) for the time period. */
  amount: Scalars['Int']['output'];
  /** The time period expression, such as exact, before, or after. */
  expression: TimePeriodExpression;
};

export type UnionResolverCondition = {
  /** The value to compare. */
  arrayLength?: InputMaybe<Scalars['Int']['input']>;
  /** The value to compare. */
  equals?: InputMaybe<Scalars['JSON']['input']>;
  /** The JSON path to the field to compare. */
  jsonPath: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export enum Units {
  /** Imperial unit for temperature in Fahrenheit, wind speed in miles per hour, and pressure in inches of mercury. */
  Imperial = 'imperial',
  /** Metric unit for temperature in Celsius, wind speed in meters per second, and pressure in hPa. */
  Metric = 'metric',
  /** Standard unit for temperature, pressure, and wind speed. */
  Standard = 'standard'
}

export type Weather = {
  __typename?: 'Weather';
  /** Detailed description of the weather condition within the group. */
  description?: Maybe<Scalars['String']['output']>;
  /** Icon identifier that represents the weather condition, used for fetching corresponding weather icons. */
  icon?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the weather condition (e.g., 200 for thunderstorm). */
  id?: Maybe<Scalars['Int']['output']>;
  /** Group of weather parameters, such as Rain, Snow, Extreme, etc. */
  main?: Maybe<Scalars['String']['output']>;
};

export type Wind = {
  __typename?: 'Wind';
  /** Wind direction in degrees. A meteorological measurement where 0° is north, 90° is east, 180° is south, and 270° is west. */
  deg?: Maybe<Scalars['Int']['output']>;
  /**
   * Wind gust speed in the specified unit.
   * Unit default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
   */
  gust?: Maybe<Scalars['Float']['output']>;
  /**
   * Wind speed in the specified unit.
   * Unit default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
   */
  speed?: Maybe<Scalars['Float']['output']>;
};

/** Represents location details for a given ZIP code. */
export type Zip = {
  __typename?: 'Zip';
  /** Country code in ISO 3166 format (e.g., "US" for the United States). */
  country?: Maybe<Scalars['String']['output']>;
  /** Latitude coordinate of the location. */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude coordinate of the location. */
  lon?: Maybe<Scalars['Float']['output']>;
  /** The name of the location (e.g., city or town). */
  name?: Maybe<Scalars['String']['output']>;
  /** The postal or ZIP code of the location. */
  zip?: Maybe<Scalars['String']['output']>;
};
