var wa_production_report_suite = 'nciod-nciofficeofthedirector';
var wa_dev_report_suite = 'nciod-nciofficeofthedirector-dev';
var wa_channel = 'OD - Research Resources';
var wa_search_function_name = 'Research Resources - Search';
var wa_production_url_match = 'resresources.nci.nih.gov';
var wa_linkInternalFilters = 'javascript:,';
var currentHostname = location.hostname.toLowerCase();
wa_linkInternalFilters += currentHostname;
var wa_is_production_report_suite = false;
var wa_p30 = "";
var wa_p44 = "";
var wa_hier2 = "";
var page_URL = document.URL;

if (page_URL.indexOf(wa_production_url_match) != -1) {
    // production
    var s_account = wa_production_report_suite;
}
else {
    // non-production
    var s_account = wa_dev_report_suite;
}
	
var pageNameOverride = currentHostname + location.pathname.toLowerCase();