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
            $(".form-contacts").hide();
        }


    })

    //Database Click Method
    $("#database").click(function () {
        $(".form-contacts").hide();
        $(".database").toggle();

    })

    
    $("#select-btn").click(function(){
        const databaseValue = $("#database-select").find(":selected").text();
    if (databaseValue == "Owner"){
        $(".my-contact-database").hide();
        $(".owner-database").show();
    }else{
        $(".owner-database").hide();
        $(".my-contact-database").show();
    }
        


    })



})


