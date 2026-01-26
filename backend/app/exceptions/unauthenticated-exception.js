const BaseExceptions = require('./base-exception')

class UnauthenticatedException extends BaseExceptions {

    constructor(message = 'You need to be authenticated to perform this action', status = 401) {
        super(message, status)
    }
}

module.exports = UnauthenticatedException