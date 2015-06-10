var flatten = require('..')
  , assert = require('assert')


var testArray = [0, 1, [1, 2], 5]
var testArrayFlat = [0, 1, 1, 2, 5]

describe("flattenArray", function() {
  it('should merge nested arrays', function() {
    var flattened = flatten.flattenArray(testArray)
    assert.deepEqual(flattened, testArrayFlat)
  })
  it('should handle empty arrays', function() {
    var flattened = flatten.flattenArray([])
    assert.deepEqual(flattened, [])
  })
})