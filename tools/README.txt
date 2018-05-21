This folder contains everything needed to deploy files to the static.cancer.gov on PROD. The contents of this folder can be deployed from anywhere in the target machine's filesystem.

== General deployment steps ==
1. EXPORT the following SVN location and all of its contents to a local folder: https://my-svn-url.gov/svn/oce_wcmteam/Tools/Web-Analytics/Omniture/deploy/
2. In the local folder, export your analytics development branch (e.g.https://my-svn-url.gov/svn/oce_wcmteam/Tools/Web-Analytics/Omniture/branches/mybranch) into the "WebAnalytics" folder. You may also choose not to export and just add the files manually; if this is the case, verify that the folder structure is correct. 
3. Copy the local folder to the target machine.
4. On the target machine, open the folder and double-click "AnalyticsDeploy.bat" to kick of the PowerShell script and deploy the analytics code.

== Powershell script ==
The Powershell script does the following:
	- robocopies the WebAnalytics folder from the folder containing the script to the site filesystem 
		- copies all files, including subdirectories
		- copies file data, attributes, and timestamps
		- copies directory timestamps

Note: the filepath specified in AnalyticsDeploy.ps1 is for PROD. If testing this script on a different tier, be sure to check the filepath for the /Static/WebAnalytics folder and change the local copy of AnalyticsDeploy.ps1 to use the correct path. 