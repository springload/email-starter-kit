# NZ Festival email templates [![Codeship Status for springload/festival_email_templates](https://app.codeship.com/projects/a73e1ac0-7051-0135-accf-6ebbf3e26980/status?branch=master)](https://app.codeship.com/projects/243065)

> Campaign Monitor templates for New Zealand Festival.

| Templates |
|-----------|
|[Main Festival template](templates/main-festival) |
|[Themed variation for Article Magazine](templates/article-magazine) |
|[Themed variation for Culture Club](templates/culture-club) |
|[Themed variation for Culture Club, auto response](templates/culture-club-auto-response) |

## Installation

> Clone the project on your computer, and install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm).

From the command-line:

```sh
cd ~/Development/sites/
git clone git@github.com:springload/festival_email_templates.git
cd festival_email_templates
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
