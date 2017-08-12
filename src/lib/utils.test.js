/* global describe, it, expect */

const convertFrontMatterDate = require('./utils')

/**
 * convertFrontMatterDate
 */

describe('convertFrontMatterDate', () => {
  it('should return a formatted date', () => {
    const testDate = '2017-07-18T13:35:13.234Z'
    const outputDate = '18-Jul-2017'
    const testDate2 = '2017-10-09T03:49:16.408Z'
    const outputDate2 = '9-Oct-2017'
    expect(convertFrontMatterDate(testDate)).toMatch(outputDate)
    expect(convertFrontMatterDate(testDate2)).toMatch(outputDate2)
  })
})
