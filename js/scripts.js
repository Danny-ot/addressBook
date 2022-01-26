//  Business Logic For The AddressBook
function AddressBook(){
    this.contacts = {

    }
}

// Business Logic For The Contacts 
function Contacts(firstName , lastName , phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}
Contacts.prototype.fullName = function(){
    return this.firstName + " " + this.lastName
}