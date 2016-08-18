const SeaLion = require('sea-lion');
const seaLion = new SeaLion();
const Dion = require('dion');
const dion = new Dion(seaLion);
const path = require('path');
const appDir = process.cwd()
const port = 8080
//const port = process.env.npm_package_config_port

const serveTute = dion.serveDirectory(path.join(appDir,'/app'),  {
            '.js': 'application/javascript',
            '.html': 'text/html',
            '.css': 'text/css',
            '.gif': 'image/gif',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.svg': 'image/svg+xml',
            '.woff': 'application/font-woff',
            '.woff2': 'application/font-woff2',
            '.ttf': 'font/opentype'
        });

seaLion.add({
    '/`path...`': {
        GET: serveTute
    }
});

require('http').createServer(seaLion.createHandler()).listen(port);
console.log('Dirname: ',__dirname,', process.cwd',appDir,', listening on port ', port
);
