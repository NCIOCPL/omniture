This folder contains everything needed to deploy analytics files to a staticxxx.cancer.gov webserver. The contents of this folder can be deployed from anywhere in the target machine's filesystem.

## General deployment steps ##
1. Create a local deployment folder.
2. In the deployment folder, create a folder named __WebAnalytics__.
3. Copy the files to be deployed into the WebAnalytics folder.
   1. If the deployment includes analytics files for WCMS/CDE, create a [front-end build](https://github.com/NCIOCPL/wcms-front-end/releases), move the built analytics files into a folder named __WCMS__, then move that folder into the WebAnalytics folder.
4. From https://github.com/NCIOCPL/web-analytics/tree/master/tools, copy __AnalyticsDeploy.bat__ and __AnalyticsDeploy.ps1__ to the deployment folder root.
5. Upload the deployment folder to the network drive or some other accessible location for deployment.
6. Copy the deployment folder to the target machine.
7. On the target machine, open the deployment folder and double-click __AnalyticsDeploy.bat__ to kick off the PowerShell script and deploy the analytics code.

## Powershell script ##
The Powershell script does the following:
* Robocopies the WebAnalytics folder from the folder containing the script to the site filesystem 
    * Copies all files, including subdirectories
    * Copies file data, attributes, and timestamps
    * Copies directory timestamps