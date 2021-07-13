const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/cucumber-reports",  // ** Path of .json file **//
    reportPath: "cypress/cucumber-reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "91",
        },
        device: "Local test machine",
        platform: {
            name: "ubuntu",
            version: "20.04.2 LTS",
        },
    }
});