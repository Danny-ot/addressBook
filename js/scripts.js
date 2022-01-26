//  Business Logic For The AddressBook
    //Constructor for the addressbook
function AddressBook(){
    this.contacts = {

    }
    this.contactId = 0;
}

    //Method For Creating Contact Id
AddressBook.prototype.assignId = function(){
    this.contactId += 1
    return this.contactId
}

    //Method for Adding contacts
AddressBook.prototype.addContacts = function(contact){
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
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