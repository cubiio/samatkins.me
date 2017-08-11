/* global describe, it, expect */

const convertFrontMatterDate = require('./utils')

/**
 * convertFrontMatterDate
 */

describe('convertFrontMatterDate', () => {
  it('should return a human readable date', () => {
    const testDate = '2017-07-18T13:35:13.234Z'
    const outputDate = '18-Jul-2017'
    // const expectedDate = expect.stringContaining('18-Jul-2017')
    expect(convertFrontMatterDate(testDate)).toMatch(outputDate)
  })
})

// 2017-07-14T03:49:16.408Z
