// Configuration requirements
var env = require('./environment.js');
var baseUrl = env.serverBaseUrl;

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    allScriptsTimeout: 31000,
    getPageTimeout: 25000,
    
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000
    },

    baseUrl: baseUrl,

    specs: [
        './Tests/ZooAdoption.spec.js'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // headless browser option (un-)comment to see it in a actual browser or not
            // args: ['--headless', '--disable-gpu', '--window-size=1920,1080'] 
        }
    },
    directConnect: true
};