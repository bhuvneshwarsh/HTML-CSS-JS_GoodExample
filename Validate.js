function Validate()
        {
            var name = document.getElementById("Name").value;
            var dob = document.getElementById("DOB").value;
            var email = document.getElementById("email").value;
            var address = document.getElementById("address").value;
            var num = document.getElementById("number").value;
            
            if(name=="" || name== null)
            {
                alert("Please Enter Name!");
                document.applicationForm.name.focus();
                return false;
            }
            if(dob=="" || dob== null)
            {
                alert("Please Enter DOB!");
                document.applicationForm.dob.focus();
                return false;
            }
            if(email=="" || email== null)
            {
                alert("Please Enter Email!");
                document.applicationForm.email.focus();
                return false;
            }
            if(address=="" || address== null)
            {
                alert("Please Enter Address!");
                document.applicationForm.address.focus();
                return false;
            }
            if(num=="" || num== null)
            {
                alert("Please Enter Phone!");
                document.applicationForm.num.focus();
                return false;
            }
            
            
            
            // if(dob=="" || dob==null ) 
            // {
            //     alert("Please Enter Last Name!");
            //     document.applicationForm.dob.focus();
            //     return false;
            // }

            var flag= confirm("Do you want to submit?");

            if(flag==true)
            {
                
            }

        }
