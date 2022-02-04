let addressBook = new AddressBook();

// Function For The Displaying Of Contacts
function displayContents(addressb) {
    let conDatabase = $("#contact-database");
    let htmlString = "";
    Object.keys(addressb.contacts).forEach(function (key) {
        const contact = addressb.findContacts(key);
        htmlString += "<li class = 'mt-3 data' id = " + contact.id + ">" + contact.fullName() + "</li>"
    })
    conDatabase.html(htmlString)
}

//Function For Attaching Contact Listener
function attachContactListener() {

    //For The li listener
    $("ul#contact-database").on("click", "li", function () {
        showContacts(this.id);
    })

    $("ul#show-searched").on("click", "li", function () {
        showContacts(this.id)
    })

    //For The Delete Listener
    $("#delete-contacts-button").on("click", ".deleteButton", function () {
        addressBook.deleteContact(this.id);
        $("#show-contacts").hide();
        displayContents(addressBook);
    })
}

//Function For Showing Contacts
function showContacts(id) {
    let contact = addressBook.findContacts(id);
    $("#show-contacts").show();
    $(".firstname").html(contact.firstName);
    $(".lastname").html(contact.lastName);
    $(".phone-no").html(contact.phoneNumber);
    $(".nationality").html(contact.nationality);
    let button = $("#delete-contacts-button");
    button.empty();
    button.append("<button class = 'deleteButton btn btn-light' id = " + contact.id + ">Delete</button>")
}

$(document).ready(function () {
    attachContactListener();

    //Owners-form
    $("#owner-form").submit(function (event) {
        event.preventDefault();
        let firstName = $("#owner-firstname").val();
        let lastName = $("#owner-lastname").val();
        let phoneNumber = $("#owner-phone").val();
        let nationality = $("#owner-nationality").val();
        let dob = $("#owner-dob").val();

        let owner = new Owner(firstName, lastName, phoneNumber, dob, nationality);
        if (firstName === "" || lastName === "" || phoneNumber === "" || nationality === "" || dob === "") {
            $(".warn").show();
        } else {
            $(".warn").hide();
            addressBook.addOwner(owner);

            const fullName = addressBook.owner[Object.keys(addressBook.owner)[0]].fullName();
            const ownerNationality = addressBook.owner[Object.keys(addressBook.owner)[0]].nationality;
            const ownerDob = addressBook.owner[Object.keys(addressBook.owner)[0]].dob;
            const ownerPhone = addressBook.owner[Object.keys(addressBook.owner)[0]].phoneNumber;

            $("#owner-database-fullName").text(fullName)
            $("#owner-database-nationality").text(ownerNationality);
            $("#owner-database-dob").text(ownerDob);
            $("#owner-database-phone").text(ownerPhone);

            $(".form-owner").hide();
            $("#add-con").show();
        }


    })

    //Add Button
    $("#add").click(function () {
        $(".database").hide();
        $(".form-contacts").toggle();

    })



    //Contacts Form 
    $("#contact-form").submit(function (event) {
        event.preventDefault();
        let firstName = $("#contact-firstname").val();
        let lastName = $("#contact-lastname").val();
        let phoneNumber = $("#contact-phone").val();
        let nationality = $("#contact-nationality").val();

        let contact = new Contacts(firstName, lastName, phoneNumber, nationality);
        if (firstName === "" || lastName === "" || phoneNumber === "" || nationality === "") {
            $(".warn").show();
        } else {
            $(".warn").hide();
            addressBook.addContacts(contact);
            displayContents(addressBook);
            $(".form-contacts").hide();
            $("#contact-firstname").val("");
            $("#contact-lastname").val("");
            $("#contact-phone").val("");
            $("#contact-nationality").val("");
        }



    })

    //Database Click Method
    $("#database").click(function () {
        $(".form-contacts").hide();
        $(".database").toggle();

    })


    $("#select-btn").click(function () {
        const databaseValue = $("#database-select").find(":selected").text();
        if (databaseValue == "Owner") {
            $(".my-contact-database").hide();
            $(".owner-database").show();
        } else if (databaseValue == "Contacts") {
            $(".owner-database").hide();
            $(".my-contact-database").show();
            $("ul#show-searched").hide();
            $("ul#contact-database").show();

        } else {
            $(".owner-database").hide();
            $(".my-contact-database").hide();
        }



    })

    $("#search").click(function () {
        let htmlElement = $("ul#show-searched");
        let htmlString = "";
        let searchedInput = $("#searched-input").val();
        let contact = addressBook.findContacts(searchedInput);
        if (contact === false) {
            htmlString = "<li class = 'mt-3 data'>There is no such contact</li>";
        } else {
            htmlString = "<li class = 'mt-3 data' id = " + contact.id + ">" + contact.fullName() + "</li>";

        }
        $("ul#contact-database").hide();
        htmlElement.show();
        htmlElement.html(htmlString);
    })


})


