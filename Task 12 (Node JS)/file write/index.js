// const fs = require('fs');
// const path = require('path');

const { dirname } = require('path');
const path = require('path');


// fs.readFile('./files/starter.txt', 'utf8', (err, data)=>{
//     if (err) throw err;
//     console.log(data)
// })

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })



// fs.readFile('./files/helo.txt', 'utf8', (err, data)=>{
//     if (err) throw err;
//     console.log(data)
// })


// write text 
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err)=>{
//     if (err) throw err;
//     console.log('write is complete')
// })

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'This is text file' , (err)=>{
//     if (err) throw err;
//     console.log('This is append file')
// })


// Modify file or change or add text in file

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err)=>{
//     if (err) throw err;
//     console.log('write is complete');
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nText is modified' , (err)=>{
//         if (err) throw err;
//         console.log('Text is modify sucessfully')
//     })
// })


// Rename file 

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
//     if (err) throw err;
//     console.log('write is complete');
//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//         if (err) throw err;
//         console.log('change file name sucessfully')
//     })
// })


// exit on uncaught errors
// process.on('uncaughtException', err =>{
//     console.error(`There was an uncaught error: ${err}`);
//     process.exit(1)
// })



// unsing promises 

const fsPromises = require('fs').promises;


const fileOps = async ()=>{
    try{
        // read file 
        // const data = await fsPromises.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf8');
        // console.log(data);

        // write file 
        await fsPromises.writeFile(path.join(__dirname, 'files', 'createNew.txt'), 'New File create');

        // modify file 

        await fsPromises.appendFile(path.join(__dirname, 'files', 'createNew.txt'), "\n\n new file with adding new text");

        // delete file 

        // await fsPromises.unlink(path.join(__dirname, 'files', 'lorem.txt'));

        // change name of file 

        await fsPromises.rename(path.join(__dirname, 'files', 'test.txt'), (__dirname, 'files', 'changename.txt'));



    }
    catch(err){
        console.log(err)
    }

}

fileOps();