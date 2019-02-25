


        function ValidateEmail()
        {
                let email = document.getElementById('email');    
                let mailformat =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!mailformat.test(email.value)) 
                {
                    alert('Please enter a valid email address');
                   
                    return false; 
                }
                else{
                    
                return true;
                }
                

        }
       