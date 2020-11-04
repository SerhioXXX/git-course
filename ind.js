var a = 2;

var test = {
  a: 1,
  b: function () {console.log('function', this.a);},
  c: () => {
    console.log('arrow-function', this.a);
}
}

test.b();

// ?
test.c();
//
//
// // ?
var rebind_b = test.b;
rebind_b();

// ?
var rebind_c = test.c;
rebind_c();