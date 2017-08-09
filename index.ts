const greeting = (name: string) => `Hello ${name}`

console.log(greeting("World"));
console.log(greeting(100)); // Expect error
console.log(greeting(null)); // Expect error