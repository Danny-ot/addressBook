//  Business Logic For The AddressBook
    //Constructor for the addressbook
function AddressBook(){
    this.contacts = {

    }
    this.contactId = 0;
    this.owner ={

    }
}

    //Method For Creating Contact Id
AddressBook.prototype.assignId = function(){
    this.contactId += 1
    return this.contactId
};

    //Method for Adding contacts
AddressBook.prototype.addContacts = function(contact){
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
};

    //Method For Finding Contacts
AddressBook.prototype.findContacts = function(id){
    if(this.contacts[id] !== undefined){
        return this.contacts[id]
    }
    return false
};

    //Method For Deleting Contacts
AddressBook.prototype.deleteContact = function(id){
    if(this.contacts[id] === undefined){
        return false
    }
    delete this.contacts[id]
    return true
};
    //Methos For Adding the Owner
AddressBook.prototype.addOwner = function(owner){
    this.owner[owner.firstName] = owner; 
}

// Business Logic For The Contacts 
function Contacts(firstName , lastName , phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}
Contacts.prototype.fullName = function(){
    return this.firstName + " " + this.lastName
};

// Business logic for the owner
function Owner(firstName , lastName , phoneNumber , age , nationality){
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.phoneNumber = phoneNumber;
    this.age = age;
}