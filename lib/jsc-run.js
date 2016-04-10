var cp = require('child_process')
var jsc = require('./jsc');


cp.execFile(jsc.path, ['lib/jsc/examples/debug.js'], function (err, stdout, stderr) {
//  if (err) {
//    console.error('Error', err)
    //deferred.reject(err)
//  } else {
    //deferred.resolve(extractedPath)
    console.log('Output', stdout, stderr);
//  }
});
