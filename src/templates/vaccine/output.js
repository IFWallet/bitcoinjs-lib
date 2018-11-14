// PUBKEY OP_CHECKDATASIG

var bscript = require('../../script')
var types = require('../../types')
var typeforce = require('typeforce')
var OPS = require('bitcoin-ops')

function check (script) {
  var buffer = bscript.compile(script)

  return buffer.length === 67 &&
    buffer[0] === 0x41 &&
    buffer[66] === OPS.OP_CHECKDATASIG
}
check.toJSON = function () { return 'avccine for ABC output' }

function encode (pubkey) {
  // typeforce(types.pubkey, pubkey)

  return bscript.compile([
    pubkey,
    OPS.OP_CHECKDATASIG
  ])
}

module.exports = {
  check: check,
  encode: encode
}
