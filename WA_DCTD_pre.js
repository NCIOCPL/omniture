var wa_production_report_suite = 'ncidctd-cancertreatmentanddiagnosis';
var wa_dev_report_suite = 'ncidctd-cancertreatmentdiagnosis-dev';
var wa_channel = 'DCTD - Main';
var wa_search_function_name = 'DCTD - Main Search';
var wa_production_url_match = 'dctd.cancer.gov';
var wa_production_linkInternalFilters = 'javascript:,dctd.cancer.gov';
var wa_dev_linkInternalFilters = 'javascript:,dctd-dev.cancer.gov';

if (document.URL.indexOf(wa_production_url_match) != -1)
    // production 
    var s_account=wa_production_report_suite;
else 
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();