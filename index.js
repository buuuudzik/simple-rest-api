const http = require('http');
const url = require('url');

const httpPort = 3000;

const server = http.createServer(function(req, res) {
    
    // Parse url
    const parsedUrl = url.parse(req.url, true);

    const {pathname} = parsedUrl;
    const trimmedPath = pathname.replace(/^\/+|\/+$/g, '');

    const mainPath = trimmedPath.split('/')[0];
    if (mainPath === 'hello') {
        res.writeHead(200);
        res.end(JSON.stringify({message: 'You accessed the best API in the small village, but the best;)'}));
    } else if (mainPath === 'balance') {
        const balance = 2000;
        res.writeHead(200);
        res.end(JSON.stringify({balance, currency: '$'}));
    } else {
        // notFound
        res.writeHead(404);
        res.end('');
    };

    res.writeHead(200);
});

server.listen(httpPort, () => {
    console.log(`Server listens on port ${httpPort}`);
});