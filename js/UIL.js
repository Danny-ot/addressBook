let addressBook = new AddressBook();

$(document).ready(function(){


    //Owners-form
    $("#owner-form").submit(function(event){
        event.preventDefault();
        let firstName = $("#owner-firstname").val();
        let lastName = $("#owner-lastname").val();
        let phoneNumber = $("#owner-phone").val();
        let nationality = $("#owner-nationality").val();
        let dob = $("#owner-dob").val();

        let owner = new Owner(firstName , lastName , phoneNumber , dob , nationality);
        if(firstName === "" || lastName === "" || phoneNumber === "" || nationality === "" || dob === ""){
            $(".warn").show();
        }else{
            $(".warn").hide();
            addressBook.addOwner(owner)
            $(".form-owner").hide();
            $("#add-con").show();
        }
        

    })

    //Add Button
    $("#add").click(function(){
        $(".form-contacts").show();
        
    })

    //Contacts Form 
    $("#contact-form").submit(function(event){
        event.preventDefault();
        let firstName = $("#contact-firstname").val();
        let lastName = $("#contact-lastname").val();
        let phoneNumber = $("#contact-phone").val();
        let nationality = $("#contact-nationality").val();

        let contact = new Contacts(firstName , lastName , phoneNumber , nationality);
        if(firstName === "" || lastName === "" || phoneNumber === "" || nationality === "" ){
            $(".warn").show();
        }else{
            $(".warn").hide();
            addressBook.addContacts(contact)
            $(".form-contacts").hide();
                    }
        

    })


})