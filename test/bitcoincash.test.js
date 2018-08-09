/* global describe, it */

// var assert = require('assert')
// var bscript = require('../src/script')
// var ECPair = require('../src/ecpair')
// var NETWORKS = require('../src/networks')
// var TransactionBuilder = require('../src/transaction_builder')
// var Transaction = require('../src/transaction')

var assert = require('assert')
var baddress = require('../src/address')
var bscript = require('../src/script')
var btemplates = require('../src/templates')
var ops = require('bitcoin-ops')
var ecpair = require('../src/ecpair')

var BigInteger = require('bigi')
var ECPair = require('../src/ecpair')
var Transaction = require('../src/transaction')
var TransactionBuilder = require('../src/transaction_builder')
var NETWORKS = require('../src/networks')
var bip32 = require('bip32')

// describe('TransactionBuilder', function () {
//   var network = NETWORKS['testnet']
//   it('cashtestcase3', function () {
//     var value = 1000
//     var txid = '40c8a218923f23df3692530fa8e475251c50c7d630dccbdfbd92ba8092f4aa13'
//     var vout = 0
//
//     var wif = 'cTNwkxh7nVByhc3i7BH6eaBFQ4yVs6WvXBGBoA9xdKiorwcYVACc'
//     var keyPair = ECPair.fromWIF(wif, network)
//
//     var pk = keyPair.getPublicKeyBuffer()
//     var spk = bscript.pubKey.output.encode(pk)
//
//     var txb = new TransactionBuilder(network)
//     txb.addInput(txid, vout, Transaction.DEFAULT_SEQUENCE, spk)
//     txb.addOutput('mzDktdwPcWwqg8aZkPotx6aYi4mKvDD7ay', value)
//     txb.enableBitcoinCash(true)
//     txb.setVersion(2)
//
//     var hashType = Transaction.SIGHASH_ALL | Transaction.SIGHASH_BITCOINCASHBIP143
//
//     txb.sign(0, keyPair, null, hashType, value)
//
//     var tx = txb.build()
//     var hex = tx.toHex()
//     assert.equal('020000000113aaf49280ba92bddfcbdc30d6c7501c2575e4a80f539236df233f9218a2c8400000000049483045022100c5874e39da4dd427d35e24792bf31dcd63c25684deec66b426271b4043e21c3002201bfdc0621ad4237e8db05aa6cad69f3d5ab4ae32ebb2048f65b12165da6cc69341ffffffff0100f2052a010000001976a914cd29cc97826c37281ac61301e4d5ed374770585688ac00000000', hex)
//   })
// })

function test() {
    node = bip32.fromBase58('xprv9z2U6FLEAnhaP2jcfjPS9NdKesVwQyZosTzHJaGJ98xqgQdqqUthnPE1nLiR7njDuiak5RdkWtmVXBn6jzFpiabaRpcjc1fWuMHvyFgMDLn')
    const alice = ecpair.fromWIF(node.derivePath('0/0').toWIF())
    console.log(alice.getAddress())
    const txb = new TransactionBuilder()
    txb.enableBitcoinCash(true)

    var hashType = Transaction.SIGHASH_ALL | Transaction.SIGHASH_BITCOINCASHBIP143
    txb.setVersion(2)
    txb.addInput('ea917b8f928f3404989b64ec527034bd50f8cc301c316692c52a00d11df42851', 0)
    txb.addOutput('1EcPhH9WfStnd9dZSgNCLPwcCHz6QDk53r', 10000)
    txb.addOutput('18yxTsPe7YLoG254oMacFniegR1uXu7vwo', 2010195)
    txb.sign(0, alice, null, hashType, 2020695)

    console.log(txb.build().toHex())
}

test()
