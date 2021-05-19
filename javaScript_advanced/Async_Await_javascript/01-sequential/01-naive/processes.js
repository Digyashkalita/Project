const util = require("util");
const wait = util.promisify(setTimeout);

module.exports ={
    async process01(){
        console.log("Process 01 started");
        console.time("Processes 01 ended");
        await wait(5000);
        console.time("Process 01 ended");
        console.log();
        return 'Process01-value';
    },

    async process02(){
        console.log("Process 02 started");
        console.time("Process 02 ended")
        await wait(3000);
        console.time("Process 02 ended");
        console.log();
        return 'Process02-value'
    }
}

















