var wa_production_report_suite = 'ncicssi-strategicscientificinitiatives';
var wa_dev_report_suite = 'ncicssi-strategicscientificinitiativ-dev';
var wa_channel = 'CSSI – Nano';
var wa_search_function_name = 'CSSI - Nano - Search';
var wa_production_url_match = 'nano.cancer.gov';
var wa_dev_url_match = 'nano-dev.cancer.gov';
var wa_production_linkInternalFilters = 'javascript:,nano.cancer.gov';
var wa_dev_linkInternalFilters = 'javascript:,nano-dev.cancer.gov';

if (document.URL.indexOf(wa_production_url_match) != -1)
    // production 
    var s_account=wa_production_report_suite;
else 
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();
