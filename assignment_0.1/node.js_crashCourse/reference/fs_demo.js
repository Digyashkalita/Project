const fs = require('fs')
const path = require('path');


//create folder 
/*fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
    if(err) throw err;
    console.log('folder created...')
});
folder created...
*/

//create and write to file hello.txt
 /*
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
'Hello World!',
err =>{//err is a callback function
    if (err) throw err;
    console.log('File written to...')

     //append file with 'I love node' 
     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
     '\nI Love Node.js',
     err =>{
         if (err) throw err;
         console.log('File written to...')
         }
        );
    }
   );
*/
// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8',(err, data) =>{
//     if (err) throw err;
//     console.log(data);
//     }
//    );


//Rename file
   fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'helloWorld.txt'),(err) =>{
    if (err) throw err;
    console.log('File renamed...');
    });










