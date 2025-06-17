// Immediately Invoked Function Expressions (IIFE)

(function hello() {
    //named IIFE
    console.log(`db connected`);
    
})();

( (name) => console.log(`db connected to ${name}`) )("Pratham");

( (name) => {
    console.log(`hello ${name}`);
    
})("Pratham")