const scriptMain = require('./script-main')
const scriptSub = require('./script-sub')

main()

function main () {
  if (process.env.SCRIPT === 'main.js') {
    scriptMain()
  } else if (process.env.SCRIPT === 'sub.js') {
    scriptSub()
  } else {
    throw new TypeError(`invalid SCRIPT env: ${process.env.SCRIPT}`)
  }
}
