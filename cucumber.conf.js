// Configuration requirements
var env = require('./environment.js');
var baseUrl = env.serverBaseUrl;

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    allScriptsTimeout: 31000,
    getPageTimeout: 25000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    baseUrl: baseUrl,
    specs: [
        'features/*.feature'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // headless browser option (un-)comment to see it in a actual browser or not
            // args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
        }
    },
    directConnect: true,

    cucumberOpts: {
        require: [
            'features/step_definitions/stepDefinitions.js'
        ],
        tags: false,
        format: 'json:.tmp/results.json',
        profile: false,
        'no-source': true,
        keepAlive: false
    },

    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            // removeExistingJsonReportFile: true
        },
        package: require.resolve('selenium-webdriver')
    }]

};