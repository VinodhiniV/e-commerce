const myInterface = require('./myInterface');
 
class Foo {
    constructor(value) {
        this.value = value;
        console.log(this.value)
    }
 
    _inc () {
        console.log('i m in inc(). this.value is ',this.value);
        this.value = this.value + 1;
    }
 
    abcd = function _getValue () {
        console.log('i m in get value()');
        return this.value;
    }
 
    // set value(input){
    //     console.log('i m in set value()');
    //     this.value = input;
    // }

    get [myInterface]() {
        return {
            inc: this._inc,
            SomeValue: () => {
                return this.abcd();
            }
        };
    }
}
 
module.exports= Foo;