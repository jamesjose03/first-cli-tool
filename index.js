const mycli = require('commander')
const defineBanner = require('node-banner')

const showBanner = async() => {
    await defineBanner('First CLI', 'My first CLI-tool');
}
const reply = word => {
    console.log("\n Reply: " + word);
}

const collect = (val,arr) => {
    arr.push(val);
    return arr;
}
mycli
.option('-u, --username <name>', `specify the user's name`)
.option('-s, --silent', `disable output`)
.action(async() => {
    await showBanner();
    if(!mycli.silent){
        const name =  ` \n Hello ${
            typeof mycli.username === 'string' ? mycli.username : 'world'
        }`
        reply(name);
    }
})
mycli.parse(process.argv)