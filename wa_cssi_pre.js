/*
* Set Web Analytics variables for for CSSI sites
*/
var wa_production_report_suite = 'ncicssi-strategicscientificinitiatives';
var wa_dev_report_suite = 'ncicssi-strategicscientificinitiativ-dev';
var wa_channel = '';
var wa_search_function_name = '';
var wa_production_url_match = '';
var currentHostname = location.hostname.toLowerCase();
var wa_linkInternalFilters = 'javascript:,' + currentHostname;
var page_URL = document.URL;
var wa_p30 = '';
var wa_p44 = '';

// Set channel, search name, and prod URL 
if (page_URL.indexOf('cssi.cancer.gov') != -1) {
    wa_channel = 'CSSI - OD';
    wa_search_function_name = 'CSSI - OD - Search';
    wa_production_url_match = 'cssi.cancer.gov';
}
else if (page_URL.indexOf('imat.cancer.gov') != -1) {
    wa_channel = 'CSSI - IMAT';
    wa_search_function_name = 'CSSI - IMAT - Search';
    wa_production_url_match = 'imat.cancer.gov';
}
else if (page_URL.indexOf('nano.cancer.gov') != -1) {
    wa_channel = 'CSSI - Nano';
    wa_search_function_name = 'CSSI - Nano - Search';
    wa_production_url_match = 'nano.cancer.gov';
}
else if (page_URL.indexOf('ncl.cancer.gov') != -1) {
    wa_channel = 'CSSI - NCL';
    wa_search_function_name = 'CSSI - NCL - Search';
    wa_production_url_match = 'ncl.cancer.gov';
}
else if (page_URL.indexOf('physics.cancer.gov') != -1) {
    wa_channel = 'CSSI - Physics';
    wa_search_function_name = 'CSSI - Physics - Search';
    wa_production_url_match = 'physics.cancer.gov';
}
else if (page_URL.indexOf('proteomics.cancer.gov') != -1) {
    wa_channel = 'CSSI - Proteomics';
    wa_search_function_name = 'CSSI - Proteomics - Search';
    wa_production_url_match = 'proteomics.cancer.gov';
}
else {
    wa_channel = 'CSSI dev';
    wa_search_function_name = 'CSSI dev search';
}

// Set Prod or Dev suite depending on URL
if (page_URL.indexOf(wa_production_url_match) != -1 && wa_production_url_match.length > 0)
    var s_account = wa_production_report_suite;
else
    var s_account = wa_dev_report_suite;

var pageNameOverride = currentHostname + location.pathname.toLowerCase();
