var wa_production_report_suite = 'ncittc-technologytransfercenter';
var wa_dev_report_suite = 'ncittc-technologytransfercenter-dev';
var wa_channel = 'Tech Transfer Center';
var wa_search_function_name = 'Tech Transfer Center Search';
var wa_production_url_match = 'nano.cancer.gov';
var linkInternalFiltersOverride = 'javascript:,ttc.nci.nih.gov,google3.nci.nih.gov';
var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();

if (document.URL.indexOf(wa_production_url_match) != -1) {
    // production 
    var s_account=wa_production_report_suite;
    var wa_is_production_report_suite = true;
}
else {
    // non-production
    var s_account=wa_dev_report_suite;
}
