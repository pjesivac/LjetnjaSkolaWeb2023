// By value

let a = 10;

function change(b) {
  b = 20;
}

change(a);
console.log(a); // Outputs: 10

// By reference

let obj = { value: 10 };

function change(o) {
  o.value = 20;
}

change(obj);
console.log(obj.value); // Outputs: 20
