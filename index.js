// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  const lowerCasedDrivers = drivers.map( function (driver) {
    return driver.toLowerCase();
  });
  return lowerCasedDrivers;
}

function nameToAttributes (drivers) {
  const driversObject = []
  let firstName = ''
  let lastName = ''
  
  drivers.map( function (driver) {
    
    let i = 0;  
    while (i < driver.length){
      if (driver[i] === " ") {
        break;
      }
      i++;
    }
    console.log(i);
    console.log(driver.slice(0,i));
    return Object.assign({}, { firstName: driver.slice(0,i) }, { lastName: driver.slice(i+1) });

  })
}
