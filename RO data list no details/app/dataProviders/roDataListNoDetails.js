var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    url: '//testtap.telerik.com/bs-api/v1/',

    appId: '9gc21c8uq6x0k0f9',
    scheme: 'https'
});

// START_CUSTOM_CODE_roDataListNoDetails
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_roDataListNoDetails
module.exports = provider;