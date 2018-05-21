This folder contains everything needed to deploy analytics files to a staticxxx.cancer.gov webserver. The contents of this folder can be deployed from anywhere in the target machine's filesystem.

## General deployment steps ##
1. Copy the files to be deployed into a local folder.
   1. If the deployment includes analytics files for WCMS/CDE, create a [front-end build](https://github.com/NCIOCPL/wcms-front-end/releases), move the built analytics files into a folder named _WCMS_, then move that folder into the local folder above.
2. From https://github.com/NCIOCPL/web-analytics/tree/master/tools, copy _AnalyticsDeploy.bat_ and _AnalyticsDeploy.ps1_ to the local folder.
3. Upload the local folder to the network drive or some other accessible location for deployment.
4. Copy the local folder to the target machine.
5. On the target machine, open the folder and double-click _AnalyticsDeploy.bat_ to kick off the PowerShell script and deploy the analytics code.

## Powershell script ##
The Powershell script does the following:
* Robocopies the WebAnalytics folder from the folder containing the script to the site filesystem 
    * Copies all files, including subdirectories
    * Copies file data, attributes, and timestamps
    * Copies directory timestamps