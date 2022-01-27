let addressBook = new AddressBook();

$(document).ready(function(){
    $("#owner-form").submit(function(event){
        event.preventDefault();
        let firstName = $("#owner-firstname").val();
        let lastName = $("#owner-lastname").val();
        let phoneNumber = $("#owner-phone").val();
        let nationality = $("#owner-nationality").val();
        let dob = $("#owner-dob").val();

        let owner = new Owner(firstName , lastName , phoneNumber , dob , nationality);
        if(firstName === "" || lastName === "" || phoneNumber === "" || nationality === "" || dob === ""){
            
        }
        addressBook.addOwner(owner)

    })
})