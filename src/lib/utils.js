/**
* convert frontmatter.date to human readable date
 * @return {str} Formatted date: DD-MMM-YYYY
 */
function convertFrontMatterDate (unformattedDate) {
  if (unformattedDate === undefined || unformattedDate === null) {
    return `at some point in time`
  } else {
    const numDate = unformattedDate.split('T', 1)
    const convYear = numDate.toString().substring(0, 4)
    const convMth = numDate.toString().substring(5, 7)
    const convDay = numDate.toString().substring(8, 10)

    for (const prop in months) {
      if (prop === convMth) {
        const month = months[prop]
        const outputDate = `${convDay}-${month}-${convYear}`
        return outputDate
      }
    }
  }
}

const months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
}

module.exports = convertFrontMatterDate
