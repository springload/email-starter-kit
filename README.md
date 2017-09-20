> Email starter kit 

Coding for HTML emails is like coding for Internet browsers from 10 years ago. 
Picture a website from a decade ago: that’s the level of design complexity we can reasonably shoot for.
Tables Are Your Best Friend


|Important links|
|---------------|
|[template building documentation](https://www.campaignmonitor.com/create/)|
|[CSS support in email clients](https://www.campaignmonitor.com/css/)|

## Installation

> Clone the project on your computer, and install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm).

From the command-line:

```sh
cd ~/Development/sites/
git clone git@github.com:springload/email_starter_kit.git
cd email_starter_kit
# Install the required Node and npm versions.
nvm install
# Then, install all project dependencies.
npm install
```

## Working on the project

```sh
# Start the server.
npm run start
```

## Publishing the templates

```sh
# Prepare the templates for deployment
npm run deploy
```

#For designers

600px wide

#For developers

Bugs you need to be aware of

Cache strings break when importing a template into campaign monitor

USING RETINA IMAGES IN OUTLOOK

Some versions of Microsoft Outlook still display the retina images at their full size, despite the explicit sizes set by the width and height attributes. To get around this, you can include a max-width rule in the style attribute of the image.

DO NOT USE * it can cause all sorts of mess

browser support that this starter kit has been tested in: 

| x             | x           | x  |
| ------------- |:-------------:| -----:|
| x             | x             |       |
| x             | x             |       |
| x             | x             |       |
