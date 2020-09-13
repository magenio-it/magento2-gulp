# A NEW MAGENTO2 GULP FILE
![GitHub release](https://img.shields.io/github/release/magenio-it/magento2-gulp.svg?label=Magento2%20Gulp)

## Requirements 

![Generic badge](https://img.shields.io/badge/Magento-2-red)
![Generic badge](https://img.shields.io/badge/Magento%20composer%20installer-*-yellow)
![Generic badge](https://img.shields.io/badge/Node.js-^10.0-green)
![Generic badge](https://img.shields.io/badge/npm-^6.0-red)

## Why Use this gulp file 
This new file was born from the need to **speed up** the work of the frontend developer on Magento2.

The slowness with which the standard gruntfile processes and compiles files is well known.

For this reason, this file eliminates unnecessary scripts and allows you to set a single theme in the config to speed up both the **watch** process and the **less compile** process.

In addition, the **"superwatch"** mode has been added which allows you to synchronize the js, font, img and template files in the pub **without necessarily running the exec command every time**.


## Comparison with grunt
![exec comparison](https://www.magenio.com/content/uploads/gulpm2/exec.png)
![Less comparison](https://www.magenio.com/content/uploads/gulpm2/less.png)

*these statistics were obtained with magento in a local environment inside a docker container. Times could change depending on the type of environment. The purpose of the comparison however is to show the potential time gain with the same task*

## Installation
1. Update your composer.json file:
```
“require-dev”: {
	...
	“antoniocarboni/magento2-gulp”:"2.0.*”
},

 "repositories": [
    { "type": "vcs", "url":  "https://github.com/magenio-it/magento2-gulp" }
    ],
    
```
2. Run composer update
3. Install node.js
4. Rename `package.gulp.json.sample` to `package.json`
5. Run `npm install`
6. Install gulp globally using `npm install -g gulp-cli`
7. Define your gulp configuration in `dev/gulp-configs.js` using the file sample gulp-configs.sample.js

## configs.js structure
The file `gulp-configs.js` for this gulpfile has some options:

### options
- `debug`: enable verbose mode (true/false)
- `liveReload`: enable LiveReload Plugin (true/false)
- `browsersync`: enable Browsersync Plugin (true/false)
- `cache-disable`: cache to keep disabled to default on developer mode
### less
- `sourcemap`: creates sourcemap during less compilation (true/false)
- `singletheme`: if set, the less task will only watch the specified theme to improve the speed of compile

### watch
### supwatch
- `extensionPermitted`:  specific extensions to check for create symlinks on pub/static directory
- `folderCustomTheme`: directory where custom theme is located.  For now superwatch works only with single custom theme at a time. Use 'app' for custom theme in app/design/ or 'Vendorname/themename' for custom theme managed with composer
- `notifyAll`: notify changes for files that don't require the symlink on pub/static
- `notifyExt`: add specific file extensions filter for notifications
### exec
- `enableDefaultTask`: if set, task deploy without arguments uses a default task set (true/false)
- `defaultTask`:  default task to run if enableDefaultTask is enabled
- `staticFolderToClear`: set full path of pub/static theme to clear before to soure theme deploy.
- `singletheme`: if set, the exec task will only run for the specified theme to improve the speed of symlink creation

### browsersync
for more informations & all configurations visit [https://browsersync.io/docs](https://browsersync.io/docs) 

## Tasks List 
- `prepare-dev`: set developer mode, clear cache & disable specific cache (options.cache-disable)
- `default`: run less task
- `less`: compiles LESS files. Parameters:
- - `--[nometema]`: compile only for specific theme
- `watch`: Watch for file changes and run processing task
- - `--[nometema]`: watch only specific theme (if less config "singletheme" is true this options isn't necessary)
- `superwatch`: Watch less files and create and delete symlinks automatically on pub/static without run 'exec' command
- `browser-sync`: reload the browser page
- `exec`: clean pub/static and executes dev:source-theme:deploy command
- `cache-disable`: disable specific cache
- `cache-clear`: clear Magento2 Cache
- `developer`: set Magento2 to developer mode


## Usage
To obtain maximum speed in daily frontend work we recommend:
- use the config sample file by changing the values on the less and exec config with your theme name (options: singleTheme, defaultTask, staticFolderToClear)
- first time, use prepare-dev to clean cache and set developer mode, then  use gulp exec to clean pub/static and create symlinks
- use gulp superwatch and enjoy :)

## Common issues
1. When using the superwatch and adding or removing a less file, gulp will no longer see the changes of that file until the superwatch task is restarted.
2. migrate gulp and all dependencies to gulp 4.0 
