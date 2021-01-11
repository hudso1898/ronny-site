# ronny-site
Professional portfolio/course site for Ronny Bazan

## Local Setup

1. Run `npm install` (if you don't have npm, download it) to install project dependencies
2. Run `ionic serve` to start a development server (Also download the ionic CLI if you don't have it, but npm install should do it for you)
3. Most assets are configured for a deployment to a /bazanr/ document root. For a local dev server, change the 'base' attribute in `index.html` to '/' instead of '/bazanr/'. Make sure to change it back before you build! Also, all assets pull from that directory, so keep that in mind.

## Building and deploying

1. Run `ionic build --prod` in the project directory.
2. The built code will be included in the www/ directory. You can zip all this content up using `cd www && zip site.sip * -r`
3. Copy the zip file to the server and unzip it in the website directory. Overwrite any existing files if necessary.
