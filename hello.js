let name = "process.argv[3]";
console.log(`Hello ${name}`);
console.log(`Goodbye ${name}`);
let myArgs = process.argv.slice(2);
console.log(myArgs.join(' '));
switch (myArgs[0]) {
case 'insult':
console.log(`${myArgs[1]} smells quite badly.`);
break;
case 'compliment':
console.log(`${myArgs[1]} is really cool`);
break;
default:
console.log('Sorry, that is not something I know how to do.');
}
