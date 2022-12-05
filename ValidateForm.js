function ValidateForm()
{
    var intro = document.forms["DemoForm"]["Intro"];

    // var ma = document.forms["DemoForm"]["male"];
    // var fe = document.forms["DemoForm"]["female"];

    //var ma = 
    var fe = document.getElementById("female").value;

    if(document.DemoForm.intro.value=="" || document.DemoForm.intro.value==null)
    {
        alert("Please write about yourself!");
        document.DemoForm.intro.focus();
        return false;
    }

    if(document.getElementById("male").checked()==false )
    {
        alert("Please write about yourself!");
        document.DemoForm.intro.focus();
        return false;
    }
        

    // var checkmale = document.DemoForm.getElementById("male").value;
    // var checkfemale = document.DemoForm.getElementById("female").value;

    // if(checkmale==null || checkmale=="" && checkfemale==null || checkfemale=="")
    // {
    //     alert("Please select gender!");
    // }



}
