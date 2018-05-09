/*
* Set Web Analytics variables for for GDC sites
*/
var wa_production_report_suite = 'ncidctd-cancertreatmentanddiagnosis,ncienterprise';
var wa_dev_report_suite = 'ncidctd-cancertreatmentdiagnosis-dev,ncienterprise-dev';
var wa_channel = '';
var wa_search_function_name = '';
var wa_production_url_match = '';
var currentHostname = location.hostname.toLowerCase();
var wa_linkInternalFilters = 'javascript:,' + currentHostname;
var page_URL = document.URL;

// Set channel, search name, and prod URL 
if (page_URL.indexOf('dctd.cancer.gov') != -1) {	
    wa_channel = 'DCTD - Main';
    wa_search_function_name = 'DCTD - Main Search';
    wa_production_url_match = 'dctd.cancer.gov';
}
else if (page_URL.indexOf('imaging.cancer.gov') != -1) {	
    wa_channel = 'DCTD - Imaging';
    wa_search_function_name = 'DCTD - Imaging Search';
    wa_production_url_match = 'imaging.cancer.gov';
}
else if (page_URL.indexOf('nciformulary.cancer.gov') != -1){
    wa_channel = 'DCTD - Forumulary';
    wa_search_function_name = 'DCTD - Formulary Search';
    wa_production_url_match = 'nciformulary.cancer.gov';
}
else if (page_URL.indexOf('cdp.cancer.gov') != -1){
    wa_channel = 'DCTD - CDP';
    wa_search_function_name = 'DCTD - CDP Search';
    wa_production_url_match = 'cdp.cancer.gov';
}
else if (page_URL.indexOf('ctep.cancer.gov') != -1){
    wa_channel = 'DCTD - CTEP';
    wa_search_function_name = 'DCTD - CTEP Search';
    wa_production_url_match = 'ctep.cancer.gov';
}
else if (page_URL.indexOf('dtp.cancer.gov') != -1){
    wa_channel = 'DCTD - DTP';
    wa_search_function_name = 'DCTD - DTP Search';
    wa_production_url_match = 'dtp.cancer.gov';
}
else if (page_URL.indexOf('rrp.cancer.gov') != -1){
    wa_channel = 'DCTD - RRP';
    wa_search_function_name = 'DCTD - RRP Search';
    wa_production_url_match = 'rrp.cancer.gov';
}
else if (page_URL.indexOf('cam.cancer.gov') != -1){
    wa_channel = 'DCTD - CAM';
    wa_search_function_name = 'DCTD - CAM Search';
    wa_production_url_match = 'cam.cancer.gov';
}
else if (page_URL.indexOf('dtc.cancer.gov') != -1){
    wa_channel = 'DCTD - DTC';
    wa_search_function_name = 'DCTD - DTC Search';
    wa_production_url_match = 'dtc.cancer.gov';
}
else {	
    wa_channel = 'DCTD dev';
    wa_search_function_name = 'DCTD search dev';
}

// Set Prod or Dev suite depending on URL
if (page_URL.indexOf(wa_production_url_match) != -1 && wa_production_url_match.length > 0)
    var s_account = wa_production_report_suite;
else
    var s_account = wa_dev_report_suite;

var pageNameOverride = currentHostname + location.pathname.toLowerCase();