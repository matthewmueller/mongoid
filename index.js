/**
 * Module Dependencies
 */

ObjectId = require('bson').ObjectID;

/**
 * Export `oid`
 */

module.exports = oid;

/**
 * Initialize `oid`
 *
 * @param {String} str hex string
 * @return {ObjectId}
 * @api public
 */

function oid(str) {
  return new ObjectId(str);
}
