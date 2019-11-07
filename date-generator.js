var moment = require('moment');
module.exports = function () {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}