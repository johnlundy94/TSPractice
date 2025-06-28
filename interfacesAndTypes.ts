// Type Alias got an object shape. Defines a reusable custom type for a user. "type" can be used for objects, unions, intersections, primitives, etc.
type User = {
    id: number;
    name: string;
    age: number;
};

// Interface for a similar object shape. Interfaces are best for shapes and support declaration merging
interface Product {
    id: number;
    name: string;
    price: number;
};

// Extending types vs. extending interfaces
//      - Type extension uses intersections (&)
//      - Interface extension uses "extends"

// Create a new type by intersecting User with extra properties
type Admin = User & {
    role: "admin" | "superadmin";
};

// Extend the Product interface via declaration merging
interface Product {
    description?: string;
};

// Union type Alias
// Defines a set of allowed string literals
type Status = "pending" | "active" | "archived";

// Function type alias
// Captures the signature of a formatting function
type Formatter = (input: string) => string;

const uppercase: Formatter = (input) => input.toUpperCase();

// Using the Interface in a function signature
// The parameter p must satisfy the Product interface
function printProduct(p: Product): void {
    const desc = p.description ? `- ${p.description}`: "";
    console.log(`${p.name} costs $${p.price} ${desc}`)
};

// Class implementing an interface
class StoreProduct implements Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public description?: string
    ) {}
}

function printName(u: User | Admin): void {
    const nameUppercase = uppercase(u.name)
    console.log(nameUppercase)
}

// Sample usage: 
const alice: User = { id: 1, name: "Alice", age: 23};
const bob: Admin = { id: 2, name: "Bob", role: "admin", age: 30}
printName(alice)
printName(bob)
const currentStatus: Status = "active";

const laptop = new StoreProduct(101, "Laptop", 9999, "Expensive")
printProduct(laptop)

// Demonstrate merged interface on Product
const book: Product = { id: 102, name: "Book", price: 9999, description: "Also expensive"}
printProduct(book)

