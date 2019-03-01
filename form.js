
//validate mail

        function validateEmail()
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
  //validate password     
  function validatepwd()
  {
          let password = document.getElementById('pwd');    
          let passwordformat =  /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*).{8,}$/;
          if (!passwordformat.test(password.value)) 
          {
              alert('Please enter a valid password');
             
              return false; 
          }
          else{
              
          return true;
          }
          

  }
  //