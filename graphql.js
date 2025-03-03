/**
 * @typedef {Object} API
 * @property {AirPollution} airPollution - Provides access to air pollution data, including current, forecast, and historical values.
 * @property {Current} current - Fetch the current weather data for a specific latitude and longitude.
 * 
 * - `input`: Latitude and longitude coordinates for the city or location.
 * - `options`: Optional parameters like units and language.
 * 
 * The response includes information about temperature, wind speed, weather conditions, and more.
 * @property {Forecast} forecast - Provides weather forecasts for up to 30 days.
 * @property {Geocoding} geocoding - Provides access to geocoding-related queries.
 * @property {OneCall} oneCall
 * @property {Array<RoadRisk>} [roadRisk] - Retrieves road risk information based on location and time.
 * This helps assess potential hazards such as slippery roads, fog, or other
 * weather-related risks that may affect driving conditions.
 * @property {TriggerQuery} [trigger] - The trigger query allows you to fetch triggers and historical data related to weather conditions.
 */

/**
 * Provides air pollution data, including current, forecasted, and historical values.
 * @typedef {Object} AirPollution
 * @property {AirPollutionPayload} current - Retrieves current air pollution data based on latitude and longitude.
 * Returns pollutant concentrations and the Air Quality Index (AQI).
 * @property {AirPollutionPayload} forecast - Provides an air pollution forecast for the next few days
 * based on latitude and longitude.
 * @property {AirPollutionPayload} history - Fetches historical air pollution data for a given location and time range.
 * Useful for analyzing past air quality trends.
 */

/**
 * Input parameters for retrieving historical air pollution data.
 * @typedef {Object} AirPollutionHistoryInput
 * @property {number} end - End timestamp in Unix format (UTC) for historical data retrieval.
 * @property {number} lat - Latitude coordinate of the location.
 * @property {number} lon - Longitude coordinate of the location.
 * @property {number} start - Start timestamp in Unix format (UTC) for historical data retrieval.
 */

/**
 * Response object for air pollution data, including pollutant concentrations and AQI.
 * @typedef {Object} AirPollutionList
 * @property {Components} components - Concentration of various air pollutants at the recorded time.
 * @property {number} dt - Timestamp in Unix format (UTC) representing the recorded air pollution data.
 * @property {AirPollutionMain} main - Overall air quality index (AQI) at the recorded time.
 */

/**
 * Represents the overall air quality index (AQI).
 * @typedef {Object} AirPollutionMain
 * @property {number} aqi - Air Quality Index (AQI) value.
 * - 1: Good
 * - 2: Fair
 * - 3: Moderate
 * - 4: Poor
 * - 5: Very Poor
 */

/**
 * Payload for air pollution data, including historical, current, or forecasted values.
 * @typedef {Object} AirPollutionPayload
 * @property {Coord} coord - Coordinates of the location where air pollution data was retrieved.
 * @property {Array<AirPollutionList>} list - A list of air pollution records containing pollutant concentrations and the Air Quality Index (AQI) at specific timestamps.
 */

/**
 * @typedef {Object} City
 * @property {Coord} coord - Coordinates of the city (latitude and longitude).
 * @property {string} country - City country code (e.g., "US" for the United States, "IN" for India).
 * @property {number} [id] - Unique city identifier. - DEPRECATED: Please note that built-in geocoder functionality has been deprecated.
 * @property {string} [name] - City name (e.g., "London"). - DEPRECATED: Please note that built-in geocoder functionality has been deprecated.
 * @property {number} population - City population (the number of people living in the city).
 * @property {number} sunrise - The sunrise time in UTC (seconds since 1970-01-01).
 * @property {number} sunset - The sunset time in UTC (seconds since 1970-01-01).
 * @property {number} timezone - The timezone of the city, in UTC offset (e.g., 0 for UTC, -5 for Eastern Standard Time).
 */

/**
 * @typedef {Object} CloudCover
 * @property {number} [afternoon]
 */

/**
 * @typedef {Object} Clouds
 * @property {number} [all] - The cloudiness percentage, indicating the proportion of the sky covered by clouds.
 */

/**
 * Represents the concentration of various air pollutants in the atmosphere.
 * Measured in micrograms per cubic meter (µg/m³).
 * @typedef {Object} Components
 * @property {number} co - Carbon monoxide (CO) concentration in the air.
 * @property {number} nh3 - Ammonia (NH₃) concentration in the air.
 * @property {number} no - Nitric oxide (NO) concentration in the air.
 * @property {number} no2 - Nitrogen dioxide (NO₂) concentration in the air.
 * @property {number} o3 - Ozone (O₃) concentration in the air.
 * @property {number} pm2_5 - Particulate matter with a diameter of 2.5 micrometers or smaller (PM2.5).
 * Fine particles that can cause respiratory health issues.
 * @property {number} pm10 - Particulate matter with a diameter of 10 micrometers or smaller (PM10).
 * Larger airborne particles that can affect air quality and health.
 * @property {number} so2 - Sulfur dioxide (SO₂) concentration in the air.
 */

/**
 * @typedef {Object} Conditions
 * @property {string} _id - The unique identifier for the condition.
 * @property {number} amount - The amount for the condition expression (e.g., a temperature threshold).
 * @property {string} expression - The expression used to evaluate the condition (e.g., greater than, less than).
 * @property {string} name - The name of the condition, e.g., "temperature", "humidity".
 */

/**
 * @typedef {Object} Coord
 * @property {number} [lat] - City geographic location, expressed as latitude (y-axis).
 * @property {number} [lon] - City geographic location, expressed as longitude (x-axis).
 */

/**
 * @typedef {Object} Current
 * @property {string} base - The base of the weather data, representing the measurement system used (e.g., "stations").
 * @property {Clouds} [clouds] - Cloudiness data, representing the percentage of the sky covered by clouds.
 * @property {number} cod - The status code from the API response, where 200 is successful and other values represent errors.
 * @property {Coord} coord - The coordinates of the location, including latitude and longitude.
 * @property {number} dt - The time of the data calculation in UTC, expressed as a Unix timestamp.
 * @property {number} id - A unique identifier for the city or location.
 * @property {Main} [main] - Main weather parameters, such as temperature, pressure, humidity, and others.
 * @property {string} name - The name of the city or location.
 * @property {CurrentRain} [rain] - Rain data, representing the rainfall in the last hour (if available).
 * @property {CurrentSnow} [snow] - Snow data, representing the snowfall in the last hour (if available).
 * @property {Sys} sys - The system information about the location, including sunrise and sunset times.
 * @property {number} timezone - The timezone offset in seconds from UTC.
 * @property {number} [visibility] - The visibility distance in meters.
 * @property {Array<Weather>} [weather] - A list of weather conditions for the location, including weather type (e.g., clear, rainy, stormy).
 * @property {Wind} [wind] - Wind data, including wind speed, direction, and gusts.
 */

/**
 * @typedef {Object} CurrentAndForecast
 * @property {Array<WeatherAlert>} [alerts]
 * @property {CurrentWeather} [current]
 * @property {Array<DailyForecast>} [daily]
 * @property {Array<CurrentAndForecastHourlyForecast>} [hourly]
 * @property {number} lat
 * @property {number} lon
 * @property {Array<MinutelyForecast>} [minutely]
 * @property {string} timezone
 * @property {number} timezone_offset
 */

/**
 * @typedef {Object} CurrentAndForecastHourlyForecast
 * @property {number} clouds
 * @property {number} dew_point
 * @property {number} dt
 * @property {number} feels_like
 * @property {number} humidity
 * @property {number} pop
 * @property {number} pressure
 * @property {CurrentAndForecastRain} [rain]
 * @property {CurrentAndForecastSnow} [snow]
 * @property {number} temp
 * @property {number} uvi
 * @property {number} [visibility]
 * @property {Array<WeatherCondition>} weather
 * @property {number} wind_deg
 * @property {number} [wind_gust]
 * @property {number} wind_speed
 */

/**
 * @typedef {Object} CurrentAndForecastOptions
 * @property {LangInput} [lang]
 * @property {Units} [units]
 */

/**
 * @typedef {Object} CurrentAndForecastRain
 * @property {number} [one_hour]
 */

/**
 * @typedef {Object} CurrentAndForecastSnow
 * @property {number} [one_hour]
 */

/**
 * @typedef {Object} CurrentOptions
 * @property {LangInput} [lang] - The language in which the weather data should be returned (e.g., "en" for English, "fr" for French).
 * @property {Units} [units] - The unit system for the weather data. Can be "metric" (Celsius), "imperial" (Fahrenheit), or "standard" (Kelvin).
 */

/**
 * @typedef {Object} CurrentRain
 * @property {number} [one_hour] - The amount of rainfall over the last hour, measured in millimeters.
 */

/**
 * @typedef {Object} CurrentSnow
 * @property {number} [one_hour] - The amount of snowfall over the last hour, measured in millimeters.
 */

/**
 * @typedef {Object} CurrentWeather
 * @property {number} clouds
 * @property {number} dew_point
 * @property {number} dt
 * @property {number} feels_like
 * @property {number} humidity
 * @property {number} pressure
 * @property {CurrentAndForecastRain} [rain]
 * @property {CurrentAndForecastSnow} [snow]
 * @property {number} [sunrise]
 * @property {number} [sunset]
 * @property {number} temp
 * @property {number} uvi
 * @property {number} visibility
 * @property {Array<WeatherCondition>} weather
 * @property {number} wind_deg
 * @property {number} [wind_gust]
 * @property {number} wind_speed
 */

/**
 * @typedef {Object} DailyForecast
 * @property {number} clouds
 * @property {number} dew_point
 * @property {number} dt
 * @property {DailyTemperature} feels_like
 * @property {number} humidity
 * @property {number} moon_phase
 * @property {number} moonrise
 * @property {number} [moonset]
 * @property {number} pop
 * @property {number} pressure
 * @property {number} [rain]
 * @property {number} [snow]
 * @property {string} [summary]
 * @property {number} sunrise
 * @property {number} sunset
 * @property {DailyTemperature} temp
 * @property {number} uvi
 * @property {Array<WeatherCondition>} weather
 * @property {number} wind_deg
 * @property {number} [wind_gust]
 * @property {number} wind_speed
 */

/**
 * @typedef {Object} DailyTemperature
 * @property {number} [day]
 * @property {number} [eve]
 * @property {number} [max]
 * @property {number} [min]
 * @property {number} [morn]
 * @property {number} [night]
 */

/**
 * @typedef {Object} Data
 * @property {number} [clouds]
 * @property {number} [dew_point]
 * @property {number} [dt]
 * @property {number} [feels_like]
 * @property {number} [humidity]
 * @property {number} [pressure]
 * @property {TimeMachineRain} [rain]
 * @property {TimeMachineSnow} [snow]
 * @property {number} [sunrise]
 * @property {number} [sunset]
 * @property {number} [temp]
 * @property {number} [uvi]
 * @property {number} [visibility]
 * @property {Array<Weather>} weather
 * @property {number} [wind_deg]
 * @property {number} [wind_speed]
 */

/**
 * @typedef {Object} DaySummary
 * @property {CloudCover} [cloud_cover]
 * @property {string} [code]
 * @property {string} [date]
 * @property {Humidity} [humidity]
 * @property {number} [lat]
 * @property {number} [lon]
 * @property {string} [message]
 * @property {Array<(string|null|undefined)>} [parameters]
 * @property {Precipitation} [precipitation]
 * @property {Pressure} [pressure]
 * @property {Temperature} [temperature]
 * @property {string} [tz]
 * @property {string} [units]
 * @property {Wind} [wind]
 */

/**
 * @typedef {Object} DaySummaryInput
 * @property {string} date
 * @property {number} lat
 * @property {number} lon
 */

/**
 * Represents location details retrieved using a direct search query.
 * @typedef {Object} Direct
 * @property {string} [country] - Country code in ISO 3166 format.
 * @property {number} lat - Latitude coordinate of the location.
 * @property {LocalNames} [local_names] - Localized names of the location in various languages.
 * @property {number} lon - Longitude coordinate of the location.
 * @property {string} [name] - Name of the location (e.g., city or town).
 * @property {string} [state] - Name of the state or region where the location is situated.
 */

/**
 * Input parameters for direct geocoding queries.
 * @typedef {Object} DirectInput
 * @property {number} [limit] - Limit the number of results returned (default: no limit).
 * @property {string} q - Name of the location (e.g., city or town) to search for.
 */

/**
 * @typedef {Object} FeelsLike
 * @property {number} [day] - "Feels-like" temperature during the day, in degrees Celsius.
 * @property {number} [eve] - "Feels-like" temperature during the evening, in degrees Celsius.
 * @property {number} [morn] - "Feels-like" temperature during the morning, in degrees Celsius.
 * @property {number} [night] - "Feels-like" temperature during the night, in degrees Celsius.
 */

/**
 * @typedef {Object} Forecast
 * @property {Forecast5} five - 5 day forecast is available at any location on the globe. It includes weather forecast data with 3-hour step.
 * 
 * Parameters:
 * - `input`: The latitude and longitude of the location.
 * - `options`: Additional parameters like units and language.
 * @property {HourlyForecast} hourly - Hourly forecast for 4 days (96 timestamps).
 * Provides temperature, humidity, wind speed, and weather conditions for each hour.
 * @property {Forecast16} sixteen - Retrieves a 16-day weather forecast based on latitude and longitude.
 * @property {Forecast30} thirty - Retrieves a 30-day climate forecast based on latitude and longitude.
 * Provides daily average temperatures and other long-term weather indicators.
 */

/**
 * Represents the 5-day weather forecast data.
 * @typedef {Object} Forecast5
 * @property {City} city - The city for which the forecast is generated.
 * @property {number} cnt - The number of forecasted time slots returned.
 * @property {string} cod - The response code from the API.
 * @property {Array<Forecast5List>} list - A list of forecast entries, each representing weather data for a specific time period.
 * @property {number} message - A system message, which can be ignored in most cases.
 */

/**
 * Represents a single forecast entry with weather details for a specific time.
 * @typedef {Object} Forecast5List
 * @property {Clouds} [clouds] - The cloudiness percentage.
 * @property {number} dt - The timestamp (Unix time) for the forecast entry.
 * @property {string} [dt_txt] - The date and time of the forecast entry.
 * @property {FeelsLike} [feels_like] - The perceived temperature (feels-like temperature).
 * @property {Main} main - Represents a single forecast entry with weather details for a specific time.
 * @property {number} [pop] - The probability of precipitation (0 to 1).
 * @property {Forecast5Rain} [rain] - The forecasted rain volume.
 * @property {Forecast5Snow} [snow] - The forecasted snow volume.
 * @property {Forecast5Sys} [sys] - Part of the day (n - night, d - day)
 * @property {Temp} [temp] - The actual temperature forecasted.
 * @property {number} [visibility] - The visibility distance in meters.
 * @property {Array<Weather>} weather - A list of weather conditions applicable to this forecast entry.
 * @property {Wind} [wind] - Wind data, including wind speed, direction, and gusts.
 */

/**
 * Input parameters for fetching the 5-day weather forecast.
 * @typedef {Object} Forecast5Options
 * @property {number} [cnt] - The number of forecast data points to return.
 * @property {LangInput} [lang] - The language for the API response.
 * @property {Units} [units] - The units of measurement (e.g., metric, imperial).
 */

/**
 * Represents the forecasted rain volume for a three-hour period.
 * @typedef {Object} Forecast5Rain
 * @property {number} [three_hour] - The amount of rain in millimeters for a three-hour period.
 */

/**
 * Represents the forecasted snow volume for a three-hour period.
 * @typedef {Object} Forecast5Snow
 * @property {number} [three_hour] - The amount of snow in millimeters for a three-hour period.
 */

/**
 * @typedef {Object} Forecast5Sys
 * @property {string} [pod] - Part of the day (n - night, d - day)
 */

/**
 * Represents the full 16-day weather forecast response.
 * @typedef {Object} Forecast16
 * @property {ForecastCity} [city] - Details about the city for which the forecast is provided.
 * @property {number} [cnt] - Number of forecast days returned in the response.
 * @property {string} [cod] - Response code from the API (e.g., "200" for success).
 * @property {Array<Forecast16List>} [list] - List of daily forecasts for up to 16 days.
 * @property {number} [message] - Additional API response message or error description.
 */

/**
 * Represents a single day's weather forecast in the 16-day forecast.
 * @typedef {Object} Forecast16List
 * @property {number} [clouds] - Cloudiness percentage, ranging from 0 to 100.
 * @property {number} [deg] - Wind direction, expressed in degrees (meteorological).
 * @property {number} [dt] - The timestamp of the forecasted data in Unix format (UTC).
 * @property {FeelsLike} [feels_like] - Temperature values that indicate how the temperature feels to the human body.
 * @property {number} [gust] - Wind gust speed, measured in meters per second.
 * @property {number} [humidity] - Humidity percentage, ranging from 0 to 100.
 * @property {number} [pop] - Probability of precipitation, represented as a float between 0 and 1.
 * @property {number} [pressure] - Atmospheric pressure on the sea level, measured in hPa (hectopascals).
 * @property {number} [rain] - Expected amount of rain, measured in millimeters.
 * @property {number} [snow] - Expected amount of snowfall, measured in millimeters.
 * @property {number} [speed] - Wind speed, measured in meters per second.
 * @property {number} [sunrise] - The time of sunrise for the given day in Unix format (UTC).
 * @property {number} [sunset] - The time of sunset for the given day in Unix format (UTC).
 * @property {Temp} [temp] - Temperature details, including daily, minimum, and maximum values.
 * @property {Array<(Weather|null|undefined)>} [weather] - An array of weather condition details, such as description and icon.
 */

/**
 * Options for customizing the 16-day weather forecast request.
 * @typedef {Object} Forecast16Options
 * @property {number} [cnt] - Number of days to retrieve (maximum 16).
 * @property {LangInput} [lang] - Language for weather descriptions.
 * Example: "en" for English, "es" for Spanish.
 * @property {Units} [units] - Unit format for temperature and wind speed.
 * Example: "metric" (Celsius, m/s) or "imperial" (Fahrenheit, mph).
 */

/**
 * Represents the 30-day weather forecast response.
 * @typedef {Object} Forecast30
 * @property {ForecastCity} [city] - Details about the city for which the forecast is provided.
 * @property {number} [cnt] - Number of forecast days returned in the response.
 * @property {string} [code] - Response code from the API (e.g., "200" for success).
 * @property {Array<Forecast30List>} [list] - List of daily forecasts for up to 30 days.
 * Each entry contains temperature, weather conditions, and other atmospheric details.
 * @property {number} [message] - Additional API response message or error description.
 */

/**
 * @typedef {Object} Forecast30List
 * @property {number} [clouds]
 * @property {number} [deg]
 * @property {number} dt
 * @property {FeelsLike} [feels_like]
 * @property {number} [humidity]
 * @property {number} [pressure]
 * @property {number} [rain]
 * @property {number} [snow]
 * @property {number} [speed]
 * @property {number} [sunrise]
 * @property {number} [sunset]
 * @property {Temp} [temp]
 * @property {Array<Weather>} [weather]
 */

/**
 * Options for customizing the 30-day weather forecast request.
 * @typedef {Object} Forecast30Options
 * @property {number} [cnt] - Number of days to retrieve (maximum 30).
 * @property {LangInput} [lang] - Language for weather descriptions.
 * Example: "en" for English, "es" for Spanish.
 * @property {Units} [units] - Unit format for temperature and wind speed.
 * Example: "metric" (Celsius, m/s) or "imperial" (Fahrenheit, mph).
 */

/**
 * @typedef {Object} ForecastCity
 * @property {Coord} coord - Coordinates of the city (latitude and longitude).
 * @property {string} country - City country code (e.g., "US" for the United States, "IN" for India).
 * @property {number} [id] - Unique city identifier. - DEPRECATED: Please note that built-in geocoder functionality has been deprecated.
 * @property {string} [name] - City name (e.g., "London"). - DEPRECATED: Please note that built-in geocoder functionality has been deprecated.
 * @property {number} population - City population (the number of people living in the city).
 * @property {number} timezone - The timezone of the city, in UTC offset (e.g., 0 for UTC, -5 for Eastern Standard Time).
 */

/**
 * @typedef {Object} ForecastHourlyList
 * @property {Clouds} [clouds] - The cloudiness percentage.
 * @property {number} dt - The timestamp (Unix time) for the forecast entry.
 * @property {string} [dt_txt] - The date and time of the forecast entry.
 * @property {FeelsLike} [feels_like] - The perceived temperature (feels-like temperature).
 * @property {Main} main - Represents a single forecast entry with weather details for a specific time.
 * @property {number} [pop] - The probability of precipitation (0 to 1).
 * @property {ForecastHourlyRain} [rain] - The forecasted rain volume.
 * @property {ForecastHourlySnow} [snow] - The forecasted snow volume.
 * @property {ForecastHourlySys} [sys] - Part of the day (n - night, d - day)
 * @property {Temp} [temp] - The actual temperature forecasted.
 * @property {number} [visibility] - The visibility distance in meters.
 * @property {Array<Weather>} weather - A list of weather conditions applicable to this forecast entry.
 * @property {Wind} [wind] - Wind data, including wind speed, direction, and gusts.
 */

/**
 * @typedef {Object} ForecastHourlyRain
 * @property {number} [one_hour] - The amount of rain in millimeters for a three-hour period.
 */

/**
 * @typedef {Object} ForecastHourlySnow
 * @property {number} [one_hour] - The amount of snow in millimeters for a three-hour period.
 */

/**
 * @typedef {Object} ForecastHourlySys
 * @property {string} [pod] - Part of the day (n - night, d - day)
 */

/**
 * Provides geocoding services, including direct, reverse, and ZIP code-based lookups.
 * @typedef {Object} Geocoding
 * @property {Array<Direct>} direct - Searches for a location by name, returning latitude, longitude, and country details.
 * @property {Array<Reverse>} reverse - Performs reverse geocoding using latitude and longitude to find a location.
 * @property {Zip} zip - Finds location details based on a given ZIP code.
 */

/**
 * @typedef {Object} Geometry
 * @property {Array<(Array<(Array<(number|null|undefined)>|null|undefined)>|null|undefined)>} [coordinates] - The coordinates of the geometry, represented as an array of arrays for complex shapes.
 * @property {string} [type] - The type of geometry (e.g., "Polygon", "Point", etc.).
 */

/**
 * @typedef {Object} GurafuHeader
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef {("DELETE"|"GET"|"POST"|"PUT")} GurafuPathMethod
 */

/**
 * @typedef {("BASIC"|"MEGA"|"PRO"|"ULTRA")} GurafuPlan
 */

/**
 * @typedef {Object} GurafuResolverInput
 * @property {string} abstractTypeName - The name of the interface or union type.
 * @property {Array<UnionResolverCondition>} conditions - The conditions to resolve the type.
 */

/**
 * @typedef {Object} HistoryQuery
 * @property {Trigger} [get] - Fetch a specific trigger history event using the trigger ID and history ID.
 * @property {Array<(Trigger|null|undefined)>} [list] - Fetch a list of past trigger events associated with a specific trigger ID.
 */

/**
 * Represents the hourly weather forecast response.
 * @typedef {Object} HourlyForecast
 * @property {City} [city] - Details about the city for which the forecast is provided.
 * @property {number} [cnt] - Number of forecasted hours returned in the response.
 * @property {string} [cod] - Response code from the API (e.g., "200" for success).
 * @property {Array<ForecastHourlyList>} [list] - List of hourly forecast data, including temperature, weather conditions, and atmospheric details.
 * @property {number} [message] - Additional API response message or error description.
 */

/**
 * Options for customizing the hourly weather forecast request.
 * @typedef {Object} HourlyForecastOptions
 * @property {number} [cnt] - Number of hours to retrieve in the forecast.
 * @property {LangInput} [lang] - Language for weather descriptions.
 * Example: "en" for English, "es" for Spanish.
 * @property {Units} [units] - Unit format for temperature and wind speed.
 * Example: "metric" (Celsius, m/s) or "imperial" (Fahrenheit, mph).
 */

/**
 * @typedef {Object} Humidity
 * @property {number} [afternoon]
 */

/**
 * @typedef {Object} IArea
 * @property {string} _id - The unique identifier for the area, used to identify geographical regions.
 * @property {JSON} coordinates - The coordinates for the area in GeoJSON format.
 * @property {TriggerType} type - The type of the area, such as Point, MultiPoint, Polygon, or MultiPolygon.
 */

/**
 * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
 * @typedef {*} JSON
 */

/**
 * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
 * @typedef {*} JSONObject
 */

/**
 * @typedef {("af"|"ar"|"az"|"be"|"bg"|"ca"|"cz"|"da"|"de"|"el"|"en"|"eu"|"fa"|"fi"|"fr"|"gl"|"he"|"hi"|"hr"|"hu"|"id"|"is"|"it"|"ja"|"kr"|"ku"|"la"|"lt"|"mk"|"nl"|"no"|"pl"|"pt"|"pt_br"|"ro"|"ru"|"sk"|"sl"|"sq"|"sr"|"th"|"tr"|"vi"|"zh_cn"|"zh_tw"|"zu")} LangInput
 */

/**
 * @typedef {Object} LatLonInput
 * @property {number} lat - Latitude coordinate (e.g., "34.0522").
 * @property {number} lon - Longitude coordinate (e.g., "-118.2437").
 */

/**
 * Represents localized names of locations in various languages.
 * Each field corresponds to a language code, such as:
 * - `en`: English
 * - `fr`: French
 * - `es`: Spanish
 * - `zh`: Chinese
 * - `ru`: Russian
 * - and many more...
 * @typedef {Object} LocalNames
 * @property {string} [ab]
 * @property {string} [af]
 * @property {string} [am]
 * @property {string} [an]
 * @property {string} [ar]
 * @property {string} [ascii] - Name of the location in ASCII characters.
 * @property {string} [av]
 * @property {string} [ay]
 * @property {string} [az]
 * @property {string} [ba]
 * @property {string} [be]
 * @property {string} [bg]
 * @property {string} [bh]
 * @property {string} [bi]
 * @property {string} [bm]
 * @property {string} [bn]
 * @property {string} [bo]
 * @property {string} [br]
 * @property {string} [bs]
 * @property {string} [ca]
 * @property {string} [ce]
 * @property {string} [co]
 * @property {string} [cs]
 * @property {string} [cu]
 * @property {string} [cv]
 * @property {string} [cy]
 * @property {string} [da]
 * @property {string} [de]
 * @property {string} [ee]
 * @property {string} [el]
 * @property {string} [en]
 * @property {string} [eo]
 * @property {string} [es]
 * @property {string} [et]
 * @property {string} [eu]
 * @property {string} [fa]
 * @property {string} [feature_name] - Feature name associated with the location.
 * @property {string} [ff]
 * @property {string} [fi]
 * @property {string} [fj]
 * @property {string} [fo]
 * @property {string} [fr]
 * @property {string} [fy]
 * @property {string} [ga]
 * @property {string} [gd]
 * @property {string} [gl]
 * @property {string} [gn]
 * @property {string} [gu]
 * @property {string} [gv]
 * @property {string} [ha]
 * @property {string} [he]
 * @property {string} [hi]
 * @property {string} [hr]
 * @property {string} [ht]
 * @property {string} [hu]
 * @property {string} [hy]
 * @property {string} [ia]
 * @property {string} [id]
 * @property {string} [ie]
 * @property {string} [ig]
 * @property {string} [io]
 * @property {string} [is]
 * @property {string} [it]
 * @property {string} [ja]
 * @property {string} [jv]
 * @property {string} [ka]
 * @property {string} [kk]
 * @property {string} [kl]
 * @property {string} [km]
 * @property {string} [kn]
 * @property {string} [ko]
 * @property {string} [ku]
 * @property {string} [kv]
 * @property {string} [kw]
 * @property {string} [ky]
 * @property {string} [lb]
 * @property {string} [li]
 * @property {string} [ln]
 * @property {string} [lo]
 * @property {string} [lt]
 * @property {string} [lv]
 * @property {string} [mg]
 * @property {string} [mi]
 * @property {string} [mk]
 * @property {string} [ml]
 * @property {string} [mn]
 * @property {string} [mr]
 * @property {string} [ms]
 * @property {string} [mt]
 * @property {string} [my]
 * @property {string} [na]
 * @property {string} [ne]
 * @property {string} [nl]
 * @property {string} [nn]
 * @property {string} [no]
 * @property {string} [nv]
 * @property {string} [ny]
 * @property {string} [oc]
 * @property {string} [om]
 * @property {string} [or]
 * @property {string} [os]
 * @property {string} [pa]
 * @property {string} [pl]
 * @property {string} [ps]
 * @property {string} [pt]
 * @property {string} [qu]
 * @property {string} [rm]
 * @property {string} [ro]
 * @property {string} [ru]
 * @property {string} [sa]
 * @property {string} [sc]
 * @property {string} [sd]
 * @property {string} [se]
 * @property {string} [sh]
 * @property {string} [si]
 * @property {string} [sk]
 * @property {string} [sl]
 * @property {string} [sm]
 * @property {string} [sn]
 * @property {string} [so]
 * @property {string} [sq]
 * @property {string} [sr]
 * @property {string} [st]
 * @property {string} [su]
 * @property {string} [sv]
 * @property {string} [sw]
 * @property {string} [ta]
 * @property {string} [te]
 * @property {string} [tg]
 * @property {string} [th]
 * @property {string} [tk]
 * @property {string} [tl]
 * @property {string} [to]
 * @property {string} [tr]
 * @property {string} [tt]
 * @property {string} [tw]
 * @property {string} [ug]
 * @property {string} [uk]
 * @property {string} [ur]
 * @property {string} [uz]
 * @property {string} [vi]
 * @property {string} [vo]
 * @property {string} [wa]
 * @property {string} [wo]
 * @property {string} [yi]
 * @property {string} [yo]
 * @property {string} [zh]
 * @property {string} [zu]
 */

/**
 * @typedef {Object} Main
 * @property {number} [feels_like] - The "feels-like" temperature in degrees Celsius.
 * @property {number} [grnd_level] - Atmospheric pressure at the ground level, in hPa (hectopascals).
 * @property {number} [humidity] - Humidity percentage in the air.
 * @property {number} [pressure] - Atmospheric pressure at the sea level, in hPa (hectopascals).
 * @property {number} [sea_level] - Atmospheric pressure at the sea level, in hPa (hectopascals).
 * @property {number} [temp] - Temperature in degrees Celsius (Kelvin for default unit).
 * @property {number} [temp_kf] - Temperature coefficient, used for indicating adjustments (e.g., for air pressure in weather models).
 * @property {number} [temp_max] - Maximum temperature at the moment (usually for the day).
 * @property {number} [temp_min] - Minimum temperature at the moment (usually for the day).
 */

/**
 * @typedef {Object} Max
 * @property {number} [direction]
 * @property {number} [speed]
 */

/**
 * @typedef {Object} MinutelyForecast
 * @property {number} dt
 * @property {number} precipitation
 */

/**
 * @typedef {Object} MultiPoint
 * @property {string} _id - Represents a multi-point area. A set of multiple points in 2D space.
 * @property {JSON} coordinates
 * @property {Array<(Array<(number|null|undefined)>|null|undefined)>} [multi_point_coordinates] - The multi-point coordinates, represented as a 2D array of float pairs (longitude, latitude).
 * @property {TriggerType} type
 */

/**
 * @typedef {Object} MultiPolygon
 * @property {string} _id - Represents a multi-polygon area. A collection of multiple polygons.
 * @property {JSON} coordinates
 * @property {Array<(Array<(Array<(Array<(number|null|undefined)>|null|undefined)>|null|undefined)>|null|undefined)>} [multi_polygon_coordinates] - The multi-polygon coordinates, represented as a 4D array of float values (multiple polygons with coordinates for each).
 * @property {TriggerType} type
 */

/**
 * @typedef {Object} Mutation
 * @property {MutationAPI} [api] - Mutation to access the API with an appid (API key) for weather-related mutation operations.
 */

/**
 * @typedef {Object} MutationAPI
 * @property {TriggerMutation} [trigger] - The trigger mutation allows you to add, update, and delete triggers related to weather conditions.
 */

/**
 * @typedef {Object} OneCall
 * @property {CurrentAndForecast} currentAndForecast
 * @property {DaySummary} daySummary
 * @property {Overview} overview
 * @property {TimeMachine} timeMachine
 */

/**
 * @typedef {Object} OneCallOptions
 * @property {LangInput} [lang]
 * @property {Units} [units]
 */

/**
 * @typedef {Object} Overview
 * @property {string} [date]
 * @property {number} lat
 * @property {number} lon
 * @property {string} [tz]
 * @property {string} [units]
 * @property {string} [weather_overview]
 */

/**
 * @typedef {Object} OverviewOptions
 * @property {string} [date]
 * @property {Units} [units]
 */

/**
 * @typedef {Object} Point
 * @property {string} _id - Represents a point area. A single set of coordinates in 2D space (longitude, latitude).
 * @property {JSON} coordinates
 * @property {Array<(number|null|undefined)>} [point_coordinates] - The point coordinates, represented as an array of floats (longitude, latitude).
 * @property {TriggerType} type
 */

/**
 * @typedef {Object} Polygon
 * @property {string} _id - Represents a polygon area. A closed shape with multiple points (e.g., a rectangle or triangle).
 * @property {JSON} coordinates
 * @property {Array<(Array<(Array<(number|null|undefined)>|null|undefined)>|null|undefined)>} [polygon_coordinates] - The polygon coordinates, represented as a 3D array of float values (longitude, latitude, and potentially altitude).
 * @property {TriggerType} type
 */

/**
 * @typedef {Object} PolygonWithHole
 * @property {string} _id - Represents a polygon area with a hole inside it. The hole is defined by a second set of points.
 * @property {JSON} coordinates
 * @property {Array<(Array<(Array<(number|null|undefined)>|null|undefined)>|null|undefined)>} [polygon_with_hole_coordinates] - The polygon with hole coordinates, represented as a 3D array with two sets of points: one for the outer polygon and one for the hole.
 * @property {TriggerType} type
 */

/**
 * @typedef {Object} Precipitation
 * @property {number} [total]
 */

/**
 * @typedef {Object} Pressure
 * @property {number} [afternoon]
 */

/**
 * @typedef {Object} Query
 * @property {API} [api] - Query to access the API with an appid (API key) for weather data.
 * @property {string} ping - Test query to check if the server is running.
 */

/**
 * @typedef {Object} RequestBodyConstraint
 * @property {string} jsonPath - The field to replace.
 * @property {string} [maxDate] - The maximum value of the date.
 * @property {number} [maxLength] - The maximum length of the string.
 * @property {number} [maxValue] - The maximum value of the number.
 * @property {string} [minDate] - The minimum value of the date.
 * @property {number} [minLength] - The minimum length of the string.
 * @property {number} [minValue] - The minimum value of the number.
 * @property {string} [pattern] - The pattern to match the string.
 * @property {Array<(string|null|undefined)>} [stringValues] - The values the string can be.
 */

/**
 * @typedef {Object} RequestBodyKeyReplacement
 * @property {string} jsonPath - The field to replace.
 * @property {string} newKey - The replacement key.
 */

/**
 * Represents location details retrieved using latitude and longitude.
 * @typedef {Object} Reverse
 * @property {string} [country] - Country code in ISO 3166 format.
 * @property {number} [lat] - Latitude coordinate of the location.
 * @property {LocalNames} [local_names] - Localized names of the location in various languages.
 * @property {number} [lon] - Longitude coordinate of the location.
 * @property {string} [name] - Name of the location (e.g., city or town).
 * @property {string} [state] - Name of the state or region where the location is situated.
 */

/**
 * Input parameters for reverse geocoding queries.
 * @typedef {Object} ReverseInput
 * @property {number} lat - Latitude coordinate for the reverse geocoding lookup.
 * @property {number} [limit] - Limit the number of results returned (default: no limit).
 * @property {number} lon - Longitude coordinate for the reverse geocoding lookup.
 */

/**
 * Represents the state and temperature of the road at a given location.
 * @typedef {Object} Road
 * @property {number} [state] - Numerical representation of the road state, where different values may indicate
 * conditions such as dry, wet, icy, or snow-covered.
 * @property {number} [temp] - Temperature of the road surface in degrees Celsius.
 */

/**
 * Represents road risk data, including weather conditions, road state, and alerts.
 * @typedef {Object} RoadRisk
 * @property {Array<RoadRiskAlert>} [alerts] - List of alerts indicating potential hazards due to weather or road conditions.
 * @property {Array<number>} [coord] - Coordinates (latitude, longitude) of the location for which the road risk data applies.
 * @property {number} [dt] - Timestamp in Unix format (UTC) representing the time for which the data is provided.
 * @property {Road} [road] - Information about the road state and surface temperature.
 * @property {RoadRiskWeather} [weather] - Weather conditions affecting road risk at the given location.
 */

/**
 * Represents an alert related to road risk conditions.
 * @typedef {Object} RoadRiskAlert
 * @property {string} [event] - Type of event causing the alert, such as heavy rain, ice, or fog.
 * @property {number} [event_level] - Severity level of the event. Higher values indicate more severe conditions.
 * @property {string} [sender_name] - Name of the sender issuing the alert.
 */

/**
 * Input parameters for retrieving road risk data.
 * @typedef {Object} RoadRiskInput
 * @property {Array<TrackInput>} track - List of track points containing location coordinates and timestamps to assess road risk.
 */

/**
 * Represents the weather conditions that impact road risk.
 * @typedef {Object} RoadRiskWeather
 * @property {number} [dew_point] - Dew point temperature in degrees Celsius, indicating the temperature at which air
 * becomes saturated with moisture and condensation begins.
 * @property {number} [precipitation_intensity] - Intensity of precipitation (rain or snow) in millimeters per hour (mm/h).
 * @property {number} [temp] - Current air temperature in degrees Celsius.
 * @property {number} [wind_deg] - Wind direction in degrees, where 0° represents north, 90° east, 180° south, and 270° west.
 * @property {number} [wind_speed] - Wind speed at the given location, measured in meters per second (m/s).
 */

/**
 * @typedef {Object} Sys
 * @property {string} [country] - The country code associated with the city or location, for example, "US" for the United States or "IN" for India.
 * @property {number} [id] - An identifier for the system. This ID is specific to the data provider system.
 * @property {number} [sunrise] - The sunrise time in UTC, expressed as seconds since the Unix epoch (1970-01-01).
 * @property {number} [sunset] - The sunset time in UTC, expressed as seconds since the Unix epoch (1970-01-01).
 * @property {number} [type] - The type of the system. Represents information about the data provider system.
 */

/**
 * @typedef {Object} Temp
 * @property {number} [day] - Daytime temperature, in degrees Celsius.
 * @property {number} [eve] - Evening temperature, in degrees Celsius.
 * @property {number} [max] - Maximum temperature for the day, in degrees Celsius.
 * @property {number} [min] - Minimum temperature for the day, in degrees Celsius.
 * @property {number} [morn] - Morning temperature, in degrees Celsius.
 * @property {number} [night] - Nighttime temperature, in degrees Celsius.
 */

/**
 * @typedef {Object} Temperature
 * @property {number} [afternoon]
 * @property {number} [evening]
 * @property {number} [max]
 * @property {number} [min]
 * @property {number} [morning]
 * @property {number} [night]
 */

/**
 * @typedef {Object} TimeMachine
 * @property {Array<Data>} data
 * @property {number} lat
 * @property {number} lon
 * @property {string} timezone
 * @property {number} timezone_offset
 */

/**
 * @typedef {Object} TimeMachineInput
 * @property {number} dt
 * @property {number} lat
 * @property {number} lon
 */

/**
 * @typedef {Object} TimeMachineRain
 * @property {number} [one_hour]
 */

/**
 * @typedef {Object} TimeMachineSnow
 * @property {number} [one_hour]
 */

/**
 * @typedef {Object} TimePeriod
 * @property {TriggersStartEnd} end - The end time period for the trigger, defined with a specific expression and amount.
 * @property {TriggersStartEnd} start - The start time period for the trigger, defined with a specific expression and amount.
 */

/**
 * @typedef {("after"|"before"|"exact")} TimePeriodExpression
 */

/**
 * Represents a track point containing latitude, longitude, and timestamp.
 * @typedef {Object} TrackInput
 * @property {number} dt - Timestamp in Unix format (UTC) for which the road risk data is requested.
 * @property {number} lat - Latitude coordinate of the location to assess.
 * @property {number} lon - Longitude coordinate of the location to assess.
 */

/**
 * @typedef {Object} Trigger
 * @property {string} _id - The unique identifier for the trigger.
 * @property {number} _v - The version of the trigger.
 * @property {JSONObject} alerts - The alerts associated with this trigger, stored as a JSON object.
 * @property {Array<IArea>} area - A list of geographical areas associated with the trigger.
 * @property {Array<Conditions>} conditions - A list of conditions that must be met for the trigger to be activated.
 * @property {TimePeriod} time_period - The time period for which the trigger is valid. This includes both start and end times.
 */

/**
 * @typedef {Object} TriggerAreaInput
 * @property {JSON} [coordinates]
 * @property {Array<(Array<(number|null|undefined)>|null|undefined)>} [multi_point_coordinates]
 * @property {Array<(Array<(Array<(Array<(number|null|undefined)>|null|undefined)>|null|undefined)>|null|undefined)>} [multi_polygon_coordinates]
 * @property {Array<(number|null|undefined)>} [point_coordinates]
 * @property {Array<(Array<(Array<(number|null|undefined)>|null|undefined)>|null|undefined)>} [polygon_coordinates]
 * @property {Array<(Array<(Array<(number|null|undefined)>|null|undefined)>|null|undefined)>} [polygon_with_hole_coordinates]
 * @property {TriggerType} type - Defines the area for the trigger. The type of the area (e.g., Point, MultiPoint, Polygon, MultiPolygon) and the coordinates.
 */

/**
 * @typedef {Object} TriggerConditionInput
 * @property {number} amount - The amount for the condition expression (e.g., a temperature threshold).
 * @property {string} expression - The expression used to evaluate the condition (e.g., greater than, less than).
 * @property {string} name - The name of the condition, e.g., "temperature", "humidity".
 */

/**
 * @typedef {Object} TriggerInput
 * @property {Array<TriggerAreaInput>} area - The area or geographical regions associated with the trigger.
 * @property {Array<TriggerConditionInput>} conditions - A list of conditions that must be met for the trigger to be activated.
 * @property {TriggerTimePeriodInput} time_period - The time period during which the trigger is valid.
 */

/**
 * @typedef {Object} TriggerMutation
 * @property {Trigger} [add] - Add a new trigger with the specified input data.
 * @property {Trigger} [update] - Update an existing trigger using the provided trigger ID and new input data.
 */

/**
 * @typedef {Object} TriggerQuery
 * @property {Trigger} [get] - Fetch a specific trigger by its ID.
 * @property {HistoryQuery} history - Fetch historical data related to triggers.
 * @property {Array<(Trigger|null|undefined)>} [list] - Fetch a list of triggers based on the app ID.
 */

/**
 * @typedef {Object} TriggerStartEndInput
 * @property {number} amount - The amount of time (in the specified units) for the time period.
 * @property {TimePeriodExpression} expression - The time period expression, such as exact, before, or after.
 */

/**
 * @typedef {Object} TriggerTimePeriodInput
 * @property {TriggerStartEndInput} end - The end time period for the trigger.
 * @property {TriggerStartEndInput} start - The start time period for the trigger.
 */

/**
 * @typedef {("MultiPoint"|"MultiPolygon"|"Point"|"Polygon")} TriggerType
 */

/**
 * @typedef {Object} TriggersStartEnd
 * @property {number} amount - The amount of time (in the specified units) for the time period.
 * @property {TimePeriodExpression} expression - The time period expression, such as exact, before, or after.
 */

/**
 * @typedef {Object} UnionResolverCondition
 * @property {number} [arrayLength] - The value to compare.
 * @property {JSON} [equals] - The value to compare.
 * @property {string} jsonPath - The JSON path to the field to compare.
 * @property {string} [type]
 */

/**
 * @typedef {("imperial"|"metric"|"standard")} Units
 */

/**
 * @typedef {Object} Weather
 * @property {string} description - Detailed description of the weather condition within the group.
 * @property {string} [icon] - Icon identifier that represents the weather condition, used for fetching corresponding weather icons.
 * @property {number} id - Unique identifier for the weather condition (e.g., 200 for thunderstorm).
 * @property {string} main - Group of weather parameters, such as Rain, Snow, Extreme, etc.
 */

/**
 * @typedef {Object} WeatherAlert
 * @property {string} description
 * @property {number} end
 * @property {string} event
 * @property {string} sender_name
 * @property {number} start
 * @property {Array<(string|null|undefined)>} tags
 */

/**
 * @typedef {Object} WeatherCondition
 * @property {string} description
 * @property {string} icon
 * @property {number} id
 * @property {string} main
 */

/**
 * @typedef {Object} Wind
 * @property {number} [deg] - Wind direction in degrees. A meteorological measurement where 0° is north, 90° is east, 180° is south, and 270° is west.
 * @property {number} [gust] - Wind gust speed in the specified unit.
 * Unit default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
 * @property {Max} [max]
 * @property {number} [speed] - Wind speed in the specified unit.
 * Unit default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
 */

/**
 * Represents location details for a given ZIP code.
 * @typedef {Object} Zip
 * @property {string} [country] - Country code in ISO 3166 format (e.g., "US" for the United States).
 * @property {number} [lat] - Latitude coordinate of the location.
 * @property {number} [lon] - Longitude coordinate of the location.
 * @property {string} [name] - The name of the location (e.g., city or town).
 * @property {string} [zip] - The postal or ZIP code of the location.
 */