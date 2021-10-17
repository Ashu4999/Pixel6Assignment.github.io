var attempt;
var name = sessionStorage.getItem("Name");
var email = sessionStorage.getItem("Email");
var otp = sessionStorage.getItem("Otp");
function getUserDetails() {
    attempt = 3;
    document.getElementById("new_otp").value = "";
    var firstname = "";
    for (i = 0; i < name.length; i++) {
        if (name[i] == " ") {
            break;
        }
        firstname = firstname + name[i];
    }

    console.log("Name= " + name + " Email=" + email + " OTP=" + otp);
    document.getElementById("user-infomation").innerHTML = "Dear " + firstname + " <br> Thank you for your inquiry. A 4 digit verification number has been sent to your Email Id " + email + ", please enter in the following box and submit for confirmation";
}

function verify() {
    var new_otp = document.getElementById("new_otp").value;
    if(new_otp!="")
    {
        if(new_otp.replace(/\D/g, '').match(/^[0-9]{4}/))
        {
            if (attempt >= 1) {
                if (otp == new_otp) {
                    location.href = "http://pixel6.co/";
                }
                else {
                    attempt--;
                    console.log("Attempt " + attempt);
                    if (attempt == 0) {
                        location.href = "http://pixel6.co/abcd";
                        return;
                    }
                    document.getElementById("attempt-info").innerHTML = "Wrong OTP<br>" + (attempt) + " left.";
                }
            }
        }
        else
        {
            document.getElementById("attempt-info").innerHTML = "Please Enter Valid OTP<br>OTP must contains 4 Digit";
        }
    }
    else
    {
        document.getElementById("attempt-info").innerHTML = "Please Enter OTP";
    }
    
    // else
    // {
    //     location.href = "Pixel6/notfound404.html";
    // }
}

function maskedOTP(new_otp) {
    // var x = new_otp.value.replace(/\D/g, '').match(/^[0-9]{1,4}/);
    var x = new_otp.value.replace(/\D/g, '').match(/^[0-9]{1,4}/);
    console.log(x);
    new_otp.value = !x ? "" : x[0];
    // console.log(x);
    // console.log(x[0]);
    // new_otp.value = x[0];
}