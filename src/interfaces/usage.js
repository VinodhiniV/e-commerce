const myInterface = require('./myInterface');
const Foo = require('./foo');

function doInc(obj){
  const interface = obj[myInterface];

  if (interface === undefined) {
    throw new Error('Object does not support the interface.');
  }
  interface.inc();
  console.log(interface.SomeValue());
}

const counter = new Foo(1);

doInc(counter);