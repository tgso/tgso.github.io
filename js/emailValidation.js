


// $('#someForm').on('submit', function(e) {
//         e.preventDefault();

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function submitEmail(){

        //get the name field value
        var name = $('#name');
        //get the name field value
        var email = $('#email');
        //get the comments
        var comments = $('#comments');
                    
        var levelSelector = document.getElementById("level");
        var level = levelSelector.options[levelSelector.selectedIndex].value;

        //validation

        var nameEmpty = name.val().trim() == "";
        var emailEmpty = email.val().trim() == "";
        var levelEmpty = level == "disable";
        var emailFormatInvalid = !validateEmail(email.val());
        
        if(nameEmpty || emailEmpty || levelEmpty || emailFormatInvalid){

            if(nameEmpty){
                document.getElementById("name").style.borderColor = "red";
                document.getElementById("nameError").style.display = "unset";
            }else{
                document.getElementById("name").style.borderColor = "#CCCCCC";
                document.getElementById("nameError").style.display = "none";
            }

            if(emailEmpty){
                document.getElementById("email").style.borderColor = "red";
                document.getElementById("emailError").style.display = "unset";
                document.getElementById("emailInvalidError").style.display = "none";
            }else if(emailFormatInvalid){
                document.getElementById("email").style.borderColor = "red";
                document.getElementById("emailError").style.display = "none";
                 document.getElementById("emailInvalidError").style.display = "unset";
            }else{
                document.getElementById("email").style.borderColor = "#CCCCCC";
                document.getElementById("emailError").style.display = "none";
                document.getElementById("emailInvalidError").style.display = "none";
            }

            if(levelEmpty){
                document.getElementById("level").style.borderColor = "red";
                document.getElementById("levelError").style.display = "unset";
            }else{
                document.getElementById("level").style.borderColor = "#CCCCCC";
                document.getElementById("levelError").style.display = "none";
            }

        }else{
            document.getElementById("name").style.borderColor = "#CCCCCC";
            document.getElementById("nameError").style.display = "none";
            document.getElementById("email").style.borderColor = "#CCCCCC";
            document.getElementById("emailError").style.display = "none";
            document.getElementById("level").style.borderColor = "#CCCCCC";
            document.getElementById("levelError").style.display = "none";
            console.log('success'); 

            //send to formspree
            $.ajax({
                url:'https://formspree.io/jello.aelj@gmail.com',
                method:'POST',
                data: {name:name.val(),
                    _replyto:email.val(),
                     email:email.val(),
                    comments:comments.val(),
                    Japaneselevel:level,
                    _subject:'JELLO-AELJ REGISTRATION REQUEST (from website)'},
                dataType:"json",
                success:function() {
                    $('#name').val("");
                    $('#email').val("");
                    $('#comments').val("");
                    var element = document.getElementById('level');
                    element.value = 'disable';
                    alert('Thank you for your registration!')
                }

            });     
        }



        
};

