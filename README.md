# keyonbio

_Penetration testing phishing Single Sign On portal for Arcadia University._

## Introduction

Keyonbio is a project developed by Adam Spera and Brey Rivera for penetration testing through phishing using a clone of the onbiokey signle sign on portal.

## Usage & Installation

If you want to test the concept on your own, you can use teh following intructions to do so...

1. Start a Oracle Cloud virtual machine.
2. Git clone https://github.com/AdamSpera/nodeacle.git
3. Run ```sudo ./RunProgram.sh``` in the terminal to start the config tool.
4. Enter the name of your project folder and the primary node file to initiate configuration.
- During the configuration proccess, be sure to accept any promts given by the installed softwares.
_Note: If you intend to clone your project repository to another directory (not /ubuntu/home/) you can chnage the node service file by editing the RunProgram.sh file._
5. Git clone https://github.com/AdamSpera/keyonbio.git
6. Run ```npm install express mysql dotenv```
7. Run ```sudo systemctl start nodeserver.service``` to start the runnign service.

_Node: To hook up a databse, create a .env file with the coorisponding database credentials._

## Contributions

Thank you to everybody who helped create the Keyonbio project possible!

_Made by: Adam T Spera & Brey H Rivera_
