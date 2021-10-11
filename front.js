const http = require('http')

http.createServer((req, res) => {
    res.write("un 1ér msg dans un server web  ")
    if (req.url == '/home') {
        res.write(`  url is : ${req.url}`)
        res.end();
    } else {
        res.write("Ahh; c'est une autre page")
        res.end();
    }
}).listen(3000)
