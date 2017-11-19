/**
* knx.js - a KNX protocol stack in pure Javascript
* (C) 2016-2017 Elias Karakoulakis
*/

/*
  define the required options for running wired tests
*/
module.exports = {
  // your KNX IP router UNICAST ip address
  ipAddr: '192.168.8.4',
  // the physical address used by the wired tests
  physAddr: '14.14.14',
  // a DPT1 group address pair (binary status) to test write/read/respond
  dpt1_status_ga:  '1/1/1',
  dpt1_control_ga: '1/1/101',
  // a DPT9 group address (temperature) that should be able to respond to a GroupValue_Read request
  dpt9_temperature_status_ga: '0/0/15',
  // a DPT 9 control and its status GA
  dpt9_timer_control_ga: '4/1/4',
  dpt9_timer_status_ga: '4/1/3',
  // a DPT1 group address that should also be able to respond to a GroupValue_Read request
  wired_test_control_ga: '5/0/0'
}