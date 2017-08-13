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
    const outputDate2 = '09-Oct-2017'
    expect(convertFrontMatterDate(testDate)).toMatch(outputDate)
    expect(convertFrontMatterDate(testDate2)).toMatch(outputDate2)
  })

  it('should return a str if arg is undefined', () => {
    const testDate = null
    const output = 'at some point in time'
    const testDate2 = undefined
    const output2 = 'at some point in time'
    expect(convertFrontMatterDate(testDate)).toMatch(output)
    expect(convertFrontMatterDate(testDate2)).toMatch(output2)
  })
})
