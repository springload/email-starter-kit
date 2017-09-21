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

if you want your email to render well in every email client, stick to using a width of 600px. Plus this is what our default starter kit uses.

#For developers

Please if you come across any of your own please document them here 

< Bugs you need to be aware of

Divs have positioning and box model issues in different clients, in particular those that use Microsoft Word (Outlook) to render. You can use divs if you want but safer to code like it’s the 90's and stick to tables.

#ffffff instead of #fff

In general it’s easier to stick with standard system fonts. That includes Helvetica, Arial etc.

However, we can use web fonts like Google fonts. You should put them behind a WebKit conditional media query otherwise Outlook will mess up your type e.g.

If you want to use margins you need to have a capital M for example Margin: 30px; as this is the only way it works in Outlook
Inline CSS instead of stylesheets

Cache strings break when importing a template into campaign monitor

Images always need the width defined 

USING RETINA IMAGES IN OUTLOOK

Some versions of Microsoft Outlook still display the retina images at their full size, despite the explicit sizes set by the width and height attributes. To get around this, you can include a max-width rule in the style attribute of the image.

DO NOT USE * it can cause all sorts of mess

browser support that this starter kit has been tested in: 

| x             | x           | x  |
| ------------- |:-------------:| -----:|
| x             | x             |       |
| x             | x             |       |
| x             | x             |       |
