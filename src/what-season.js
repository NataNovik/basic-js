const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
    if (!date) return "Unable to determine the time of year!";

    const timestamp = Date.parse(date.toString());

    if ( Object.prototype.toString.call(date) === "[object Date]" ) {
        if (date instanceof Date && !isNaN(date) && !isNaN(timestamp)) {


            let season;
            switch (date.getMonth()) {
                case 11:
                case 0:
                case 1:
                    season = "winter";
                    break;
                case 2:
                case 3:
                case 4:
                    season = "spring";
                    break;
                case 5:
                case 6:
                case 7:
                    season = "summer";
                    break;
                default:
                    season = "autumn";
                    break;
            }
            return season;
        } else {
            throw Error("Invalid date!")
        }
    } else {

        throw Error("Invalid date!")
    }
}

module.exports = {
  getSeason
};
