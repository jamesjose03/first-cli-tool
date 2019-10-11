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
.option('-a, --age [age]', `specify the user's age`)
.action(async() => {
    await showBanner();
    if(!mycli.silent){
        const name =  ` \n Hello ${
            typeof mycli.username === 'string' ? mycli.username : 'world'
        }`
        reply(name);
        const age = `\n  ${typeof mycli.age === 'string' ? `You are ${mycli.age} years old` : 'Your age is your privacy'}`
        reply(age);
    }
})
.command('time')
.alias('t')
.description('show the local time')
.action(() => {
    const now = new Date(Date.now())
    console.log('Current time is: '+ now.toLocaleTimeString())
  })
mycli.parse(process.argv)