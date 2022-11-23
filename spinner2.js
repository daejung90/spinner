const symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\', ];
let interval = 200;

let setInterval = function (){
    for (let i = 0; i < symbols.length; i++){
    setTimeout(() => {
        process.stdout.write('\r' + symbols[i] + '  ')
    }, interval)
    interval += 700
}
}
setInterval(symbols)
// setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);
//   setTimeout(() => {
//     process.stdout.write('\r\\  ');
//   }, 700);