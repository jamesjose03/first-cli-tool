const mycli = require('commander')
mycli.action(() => {
    console.log('Hello World')
})
mycli.parse(process.argv)