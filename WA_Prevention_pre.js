var wa_production_report_suite = 'ncidcp-cancerprevention';
var wa_dev_report_suite = 'ncidcp-cancerprevention-dev';
var wa_channel = 'DCP';
var wa_search_function_name = 'DCP Search';
var wa_production_url_match = 'dcp.cancer.gov,prevention.cancer.gov';
var wa_production_linkInternalFilters = 'javascript:,dcp.cancer.gov';
var wa_dev_linkInternalFilters = 'javascript:,dcpint.cancer.gov';

//if (document.URL.indexOf(wa_production_url_match) != -1)
if (wa_production_url_match.indexOf(document.URL) != 0)
    // production 
    var s_account=wa_production_report_suite;
else
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();
if(pageNameOverride.toLowerCase() == "dcp.cancer.gov/home")
	pageNameOverride = "dcp.cancer.gov/";
	