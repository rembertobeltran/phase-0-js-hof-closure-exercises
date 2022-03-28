function forEach(array, callback) {
  for(let i = 0; i<array.length; i++) {
    callback(array[i], i, array)
  }
}

const arr = [1, 2, 3]
const fun = function(num) {
  console.log(num)
}

function map(array, callback) {
  const newArr = []
  for (let i = 0; i < array.length; i++){
      newArr.push(callback(array[i]))
  }
  return newArr
}

function filter(arr, callback) {
  const newArr = []
  for(let i = 0; i < arr.length; i++){
    if (callback(arr[i]) === true) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
  

function every(arr, callback) {
  for (item of arr) {
    if (callback(item) === false) {
      return false
    }
  }
  return true
  
}


function some(arr, callback) {
  for (item of arr) {
    if (callback(item) === true) {
      return true
    }
  }
  return false
}

function majority(arr, callback) {
  const major = Math.floor((arr.length / 2) + 1) 
  const newArr = []
  for (item of arr) {
    if (callback(item) === true) {
      newArr.push(item)
    }
  }
  if(newArr.length >= major) {
    return true
  } else {
    return false
  }

}

function once(callback) {
  let isCalled = false
  let value;
  return function(args) {
    if(isCalled) return value
    isCalled = true
    value = callback(args)
    return value
  }
}

function groupBy(arr, callback) {
  const object = {}
  for (item of arr) {
    let key = callback(item)
    if (object[key]) {
      object[key].push(item)
    } else {
      object[key] = [item]
    }
  } 
  return object

}

function arrayToObject(arr, callback) {
  let object = {}
  for (item of arr) {
    object[item] = callback(item)
  } 
  return object

}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};