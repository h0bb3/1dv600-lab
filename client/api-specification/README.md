####To generate a new version of the api, open the .apid file and edit according to the API Blueprint format 1A.
https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md

####Install Node and run:
sudo npm install -g aglio

####Cd to the directory where the files is located and run the following command:
aglio -i api-specification.apid -o api-specification.html

#### Copy the file to the java-server and the node-server folders before distributing to the students.

