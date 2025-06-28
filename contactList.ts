// Basic types and annotations study 
// Primitive annotations
let title: string = "My Contacts"
let maxContacts: number = 5;
let showActiveOnly: boolean = true;

// Object "shape" via a type alias 
type Contact = {
    name: string;
    email: string;
    age?: number;  //optional property   
    isActive: boolean;
};

// Array of contacts (shorthand)
let contacts: Contact[] = [
    { name: "Alice", email: "alice@example.com", isActive: true },
    { name: "Bob", email: "bob@example.com", age: 30, isActive: false}
];

// Generic form
let moreContacts: Array<Contact> = [
    { name: "Carol", email: "carol@example.com", age: 40, isActive: true}
];

// Function signatures
// Explicit annotations on parameters and return type
// Keep in mind that c is
function addContact(c: Contact): void {
    if (contacts.length < maxContacts) {
        contacts.push(c);
    } else {
        console.log("Max contacts reached");
    }
};

// Inferred return type (TS knows that this returns a string[])
const getActiveEmails = (list: Contact[]): string[] => 
    // "c" is inferred as "Contact" and return type inferred as "string[]"
    list.filter(c => c.isActive).map(c => c.email)

// Using everything
addContact({ name: "Dave", email: "dave@example.com", age: 21, isActive: true });
console.log("Active emails: ", getActiveEmails(contacts));
