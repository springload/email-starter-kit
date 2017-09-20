#Email starter kit 

Coding for HTML emails is like coding for Internet browsers from 10 years ago. 
Picture a website from a decade ago: that’s the level of design complexity we can reasonably shoot for.
Tables Are Your Best Friend

> Campaign Monitor template starter kit.

|Important links|
|---------------|
|[name](link here)|


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

First, have a look at the Campaign Monitor's [template building documentation](https://www.campaignmonitor.com/create/) and guidelines on [CSS support in email clients](https://www.campaignmonitor.com/css/).

```sh
# Start the server.
npm run start
```

## Publishing the templates

```sh
# Prepare the templates for deployment
npm run deploy
```

For designer 

600px wide

Bugs you need to be aware of

outlook does not like #ffffff but if you change it to #fffffe then it will work :) 
Cache strings break in campaign monitor
If you want to use retina images you need to declare a m

USING RETINA IMAGES IN OUTLOOK

Some versions of Microsoft Outlook still display the retina images at their full size, despite the explicit sizes set by the width and height attributes. To get around this, you can include a max-width rule in the style attribute of the image.

DO NOT USE * it can cause all sorts of mess, in this case it will cause the height of the images to be 20px;

.footer *  {
	line-height:20px;
}

browser support: 

| x             | x           | x  |
| ------------- |:-------------:| -----:|
| x             | x             |       |
| x             | x             |       |
| x             | x             |       |
