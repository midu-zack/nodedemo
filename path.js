var path = require('path')

const p = '/home/Desktop/nodejs/test.text'

console.log(path.basename(p));
console.log(path.dirname(p));
console.log(path.extname(p));  //file nde extance labikan
console.log(path.join('/King off'));
console.log(path.parse(p));//dirctory path ne divid cheydh labikum
