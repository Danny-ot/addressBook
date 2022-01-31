let addressBook = new AddressBook();

$(document).ready(function () {


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

    // Function For The Displaying Of Contacts
    function displayContents(addressb) {
        let conDatabase = $(".contact-database");
        let htmlString = "";
        Object.keys(addressb.contacts).forEach(function (key) {
            const contact = addressb.findContacts(key);
            htmlString += "<li class = 'col-md-4 mt-3 data' id = " + contact.id + "><p><b>Contact Id: </b>" + "" + contact.id + "</p><p><b>Full Name: </b>" + contact.fullName() + "</p><p><b>PhoneNumber: </b>" + contact.phoneNumber + "</p><p><b>Nationality: </b>" + contact.nationality + "</p></li>"
        })
        conDatabase.html(htmlString)
    }



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
            displayContents(addressBook)
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
        } else {
            $(".owner-database").hide();
            $(".my-contact-database").show();
        }



    })

    //Search And Delete And All UIL
    $("#search").click(function () {
        let searchCon = $("#del-sea").val();
        const contact = addressBook.findContacts(searchCon);
        $(".contact-database").hide();
        if (contact ===  false) {
            $("#searched-con").html("<li class = 'col-md-4 mt-3 data'><b> Contact does not exist</b></li>")
        } else {
            $("#searched-con").html("<li class = 'col-md-4 mt-3 data' id = " + contact.id + "><p><b>Contact Id: </b>" + "" + contact.id + "</p><p><b>Full Name: </b>" + contact.fullName() + "</p><p><b>PhoneNumber: </b>" + contact.phoneNumber + "</p><p><b>Nationality: </b>" + contact.nationality + "</p></li>")
        }
        $("#searched-con").show();
    })

    $("#all").click(function () {
        $("#searched-con").hide();
        $(".contact-database").show();
    })

    $("#delete").click(function () {
        let deleteCon = $("#del-sea").val();
        addressBook.deleteContact(deleteCon);
        $(" #" +deleteCon).remove();
    })



})


