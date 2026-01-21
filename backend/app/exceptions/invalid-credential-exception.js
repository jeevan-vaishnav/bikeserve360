const BaseExceptions = require('./base-exception')

class InvalidCredentialException extends BaseExceptions {

    constructor(message = 'Invalid login creditials!', status = 403) {
        super(message, status)
    }
}

module.exports = InvalidCredentialException