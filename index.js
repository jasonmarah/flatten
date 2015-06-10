function flattenArray(arr)  {
  if(arr.length > 1)
    return JSON.stringify(arr).replace(/[\]\[]/g, '').split(',').map(Number)
  return []
}

module.exports = {
  flattenArray :  flattenArray
}