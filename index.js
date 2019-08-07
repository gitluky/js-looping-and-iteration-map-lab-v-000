// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  const lowerCasedDrivers = drivers.map( function (driver) {
    console.log(driver.toLowerCase());
    return driver.toLowerCase();
  });
  return lowerCasedDrivers;
}
