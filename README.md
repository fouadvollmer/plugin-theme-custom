# Theme Customizations

Add custom code to the [Fouad Vollmer Custom Theme](https://github.com/fouadvollmer/theme).

## Installation

The plugin comes with support for local development and a deployment pipeline for production.

### Local – Best Practice 

Fork the repository and clone it to a desired directory outside your local wordpress project.

``` sh
git clone git@github.com:<YOUR-USERNAME>/plugin-theme-custom.git
```

Symlink the plugin to the wordpress plugin folder.

``` sh
ln -s your/plugin/path/plugin-theme-custom wordpress/plugin/folder/plugin-theme-custom
```

You should now see the plugin in the Wordpress plugins directory. [Usage](#usage)

### Production – Github Actions

You can deploy your custom code to a server with the predefined deploy action inside the .github/workflows folder. Make sure you have ssh access to your server.

Add the necessary repository secrets.

**REMOTE_HOST**
> Server address

**REMOTE_USER**
> Servers ssh username

**REMOTE_PORT**
> Servers ssh port

**REMOTE_TARGET**
> Location of the wordpress folder on your server e.g. disk/wordpress/

**REMOTE_PRIVATE_KEY**
> RSA Private Key you're using to connect with your server

To trigger the deploy action you can whether create a branch with the name "live" and push your changes to it, or you're using the workflow dispatch button in the github actions menu.

## Usage

`npm run start` will start the auto-build development mode.

`npm run build:dev` will build the code for development once.

`npm run build:prod` will build a production version of the plugin code and place it inside a dist folder.
