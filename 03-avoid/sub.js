const http = require('http')

main()

function main () {
  const server = http.createServer()

  server.on('request', (_, res) => {
    const content = 'sub.js'

    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Content-Length': content.length,
    })

    res.write(content)
    res.end()
  })

  server.on('error', (err) => {
    console.error(err)
  })

  server.listen(process.env.PORT)
}
