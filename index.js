const mycli = require('commander')

const reply = word => {
    console.log("Reply: " + word);
}

const collect = (val,arr) => {
    arr.push(val);
    return arr;
}
mycli
.option('-u, --username <name>', `specify the user's name`)
.option('-s, --silent', `disable output`)
.action(() => {
    if(!mycli.silent){
        const name =  `Hello ${
            typeof mycli.username === 'string' ? mycli.username : 'world'
        }`
        reply(name);
    }
})
mycli.parse(process.argv)