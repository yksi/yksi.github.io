### Monoupper app is an application manager.

## Installation

### Linux
Use wget utility to install monoupper on your pc
```bash
sudo wget krushelnytskyi.github.io/bin/linux/monoupper -O /usr/bin/monoupper | sudo chmod a+x /usr/bin/monoupper
```

### Windows



## Usage
For now there are 2 basic commands in console application (`list` and `install`)

Base list usage
```bash
$ monoupper list
zend-base-app
php-base-app
```

In the result we can see list of applications slugs. This slugs can be used to install those application

This is example of installation command
```bash
$ monoupper install app-name /path/to/install
```

Main feature of monoupper is formatting source code. Format instructions stored in `monoupper.json` file in a root of application repository. For example, we want to create index.php with some custom title.

The folder structure going to look like
```
/index.php
/monoupper.json
```

In a `index.php` we have to use `<[{` as open format variable tag and `}]>` as close tag. For example:
```php 
<html>
  <head>
    <title>
      <[{index.php.title}]>
    </title>
  </head>
</html>
```

In our `monoupper.json`:
```json
{
  "fields": {
    "index.php": {
      "title": "[A-Za-z]+"
    } 
  }
}
```

The first key is `fields` - general information about our format variables. Next key is custom, recommended to use filename for more information. and the lowest key is *variable name*. Filename key and variable name key must be concatenated with `.`_(dot symbol)_ in the project source code.

So, imagine, that our project has name `php-base-app`. To install project use `install` command.
```bash
$ monoupper install php-base-app my-site
This is monoupper application to download base apps.
Press Ctrl+D to exit
Provide fields details.
Value of "index.php.title": Monoupper Site
2017/03/06 13:44:24 Saving file index.php (72)B
2017/03/06 13:44:24 Saving file monoupper.json (65)B
```
Of course you can use multiple keys in monoupper.json file.

All application sources are stored in repositories of project
https://bitbucket.org/account/user/monoupper/projects/MON
