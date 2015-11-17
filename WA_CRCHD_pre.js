var wa_production_report_suite = 'ncicrdcd-reducecancerhealthdisparities';
var wa_dev_report_suite = 'ncicrdcd-reducecahealthdisparities-dev';
var wa_channel = 'CRCHD';
var wa_search_function_name = 'CRCHD Search';
var wa_production_url_match = 'crchd.cancer.gov';
var wa_dev_url_match = 'crchdpreview.cancer.gov';
var wa_production_linkInternalFilters = 'javascript:,crchd.cancer.gov';
var wa_dev_linkInternalFilters = 'javascript:,crchdpreview.cancer.gov';

if (document.URL.indexOf(wa_production_url_match) != -1)
    // production 
    var s_account=wa_production_report_suite;
else 
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();

