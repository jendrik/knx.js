/**
* knx.js - a KNX protocol stack in pure Javascript
* (C) 2016-2017 Elias Karakoulakis
*/

const knx = require('../..');
const test = require('tape');
const util = require('util');
const options = require('./wiredtest-options.js');

Error.stackTraceLimit = Infinity;

/*
           ==========                ==================
 this is a WIRED test and requires a real KNX IP router on the LAN
           ==========                ==================
 to run all tests: $ WIREDTEST=1 npm test
 to run one test : $ WIREDTEST=1 node test/wiredtests/<test>.js
*/
if (process.env.hasOwnProperty('WIREDTEST')) {

  function setupDatapoint(groupadress, statusga) {
    var dp = new knx.Datapoint({
      ga: groupadress,
      status_ga: statusga,
      dpt: "DPT1.001",
      autoread: true
    }, connection);
    dp.on('change', (oldvalue, newvalue) => {
      console.log("**** %s current value: %j", groupadress, newvalue);
      console.log("options.ga==%s", dp.options.ga);
    });
    return dp;
  }
  var connection = knx.Connection({
  //  debug: true,
    //forceTunneling: true,
    minimumDelay: 100,
    handlers: {
      connected: function() {
        console.log('===========\nConnected!\n===========');
        setupDatapoint('1/1/0', '1/1/100');
        setupDatapoint('1/1/1', '1/1/101');
        setupDatapoint('1/1/2', '1/1/102');
        setupDatapoint('1/1/3', '1/1/103');
        setupDatapoint('1/1/4', '1/1/104');
        setupDatapoint('1/1/5', '1/1/105');
        setupDatapoint('1/1/6', '1/1/106');
        setupDatapoint('1/1/7', '1/1/107');
        dp8 = setupDatapoint('1/1/8', '1/1/108');
  /*      setTimeout(function () {
          dp8.write(1);
          setTimeout(function () {
            dp8.write(0);
          }, 3000);
        }, 3000); */
      },
      event: function (evt, src, dest, value) {
        console.log("%s ===> %s <===, src: %j, dest: %j, value: %j",
          new Date().toISOString().replace(/T/, ' ').replace(/Z$/, ''),
          evt, src, dest, value
        );
      },
    }
  });
}