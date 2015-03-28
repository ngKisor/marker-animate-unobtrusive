﻿/* global google */

var testHelper = testHelper || {};

//returns event spy {changes, listener, dispose}
testHelper.spyEvent = function (instance, eventName, valueFunc) {
	'use strict';
	
    var result = {
        listener: google.maps.event.addListener(instance, eventName, function () {
            result.changes.push({ value: valueFunc.call(instance) });
        }),
        changes: [],
        dispose: function () {
            google.maps.event.removeListener(result.listener);
            result.listener = null;
            result.changes = [];
        }
    };
	
    return result;
};
