// var arr = { "937": "Maharastra", "625": "Karnataka", "950": "Punjab", "621": "Assam", "727": "Andhra Pradesh", "801": "Odisha", "920": "Dehli", "921": "Gujarat", "999": "Haryana", "750": "Rajastan", "850": "Himachal Pradesh", "953": "Uttarakhand", "725": "Jharkhand", "825": "Chhattisgarh", "925": "Kerala", "675": "Tamil Nadu", "775": "Madhya Pradesh", "875": "West Bengal", "975": "Bihar", "699": "Uttar Pradesh", "799": "Chandigarh", "899": "Telangana", "666": "Jammu & Kashmir", "777": "Tripura", "888": "Meghalaya", "645": "Goa", "745": "Arunachal Pradesh", "845": "Manipur", "945": "Mizoram", "638": "Sikkim", "790": "Puducerry", "615": "Nagaland", "734": "Andaman & Nicobar Islands", "816": "Dadra & Nagar Haveli", "909": "Daman & Diu", "861": "Lakshadweep" };

// function createCombo() {
//     var combo = document.getElementById("combo");
//     for (obj in arr) {

//         var opt = document.createElement('option');
//         opt.value = obj;
//         opt.innerHTML = arr[obj];
//         combo.appendChild(opt);
//     }
// }

var states = {
    "Lakshadweep": { "start": 100, "end": 125 },
    "Daman & Diu": { "start": 126, "end": 150 },
    "Dadra & Nagar Haveli": { "start": 151, "end": 175 },
    "Andaman & Nicobar Islands": { "start": 176, "end": 200 },
    "Nagaland": { "start": 201, "end": 225 },
    "Puducerry": { "start": 226, "end": 250 },
    "Sikkim": { "start": 251, "end": 275 },
    "Mizoram": { "start": 276, "end": 300 },
    "Manipur": { "start": 301, "end": 325 },
    "Arunachal Pradesh": { "start": 326, "end": 350 },
    "Goa": { "start": 351, "end": 375 },
    "Meghalaya": { "start": 376, "end": 400 },
    "Tripura": { "start": 401, "end": 425 },
    "Jammu & Kashmir": { "start": 426, "end": 450 },
    "Telangana": { "start": 451, "end": 475 },
    "Chandigarh": { "start": 476, "end": 500 },
    "Uttar Pradesh": { "start": 501, "end": 525 },
    "Bihar": { "start": 526, "end": 550 },
    "West Bengal": { "start": 551, "end": 575 },
    "Madhya Pradesh": { "start": 576, "end": 600 },
    "Tamil Nadu": { "start": 601, "end": 625 },
    "Kerala": { "start": 626, "end": 650 },
    "Chhattisgarh": { "start": 651, "end": 675 },
    "Jharkhand": { "start": 676, "end": 700 },
    "Uttarakhand": { "start": 701, "end": 725 },
    "Himachal Pradesh": { "start": 726, "end": 750 },
    "Rajastan": { "start": 751, "end": 775 },
    "Haryana": { "start": 776, "end": 800 },
    "Gujarat": { "start": 801, "end": 825 },
    "Dehli": { "start": 826, "end": 850 },
    "Odisha": { "start": 851, "end": 875 },
    "Andhra Pradesh": { "start": 876, "end": 900 },
    "Karnataka": { "start": 901, "end": 925 },
    "Assam": { "start": 926, "end": 950 },
    "Punjab": { "start": 951, "end": 975 },
    "Maharastra": { "start": 976, "end": 999 }
}

function showProviderDetails() {
    var phone_no = document.getElementById("phone_no").value;
    if (phone_no.match(/^\([0-9]{3}\)\-[0-9]{3}\-[0-9]{4}$/)) {
        document.getElementById('note3').style.visibility = "hidden";
        var providername = "";
        var statename = "";

        var providerPattern = /\([0-9]{3}\)/g;
        var provider = providerPattern.exec(phone_no);
        var providerno = provider[0];
        providerno = providerno.substring(1, 4)
        console.log(providerno);
        if (providerno >= 621 && providerno <= 799) {
            providername = "jio";
        }
        else if (providerno >= 801 && providerno <= 920) {
            providername = "idea";
        }
        else if (providerno >= 921 && providerno <= 999) {
            providername = "vodafone";
        }
        else {
            document.getElementById("providerLogo").src = "";
            document.getElementById("stateName").valye = "";
            document.getElementById('Phone-details').style.visibility = "hidden";
            document.getElementById('note3').style.visibility = "visible";
            document.getElementById("note3").innerHTML = "Invalid Provider No (***) must <br>between 621-999.<br>Format is (provider no)-state no-****";
        }

        if (providername != "") {
            let statepattern = /\-[0-9]{3}\-/;
            let stdetails = statepattern.exec(phone_no);

            var stateno = stdetails[0];
            stateno = stateno.substring(1, 4);

            for(obj in states)
            {
                 // console.log(states[obj]["start"]+" "+states[obj]["end"]);
                if(stateno>=states[obj]["start"] && stateno<=states[obj]["end"])
                {
                    statename = obj;
                    break;
                }
            }

            console.log("State Name:"+statename);
            if(statename != "")
            {
                if(providername == "jio")
                {
                    document.getElementById('Phone-details').style.visibility = "visible";
                    document.getElementById("providerLogo").src = "Images/jio.png";
                    document.getElementById("stateName").innerHTML = statename;
                    document.getElementById("note3").innerHTML = "";
                }
                else if(providername == "idea")
                {
                    document.getElementById('Phone-details').style.visibility = "visible";
                    document.getElementById("providerLogo").src = "Images/idea.png";
                    document.getElementById("stateName").innerHTML = statename;
                    document.getElementById("note3").innerHTML = "";
                }
                else if(providername == "vodafone")
                {
                    document.getElementById('Phone-details').style.visibility = "visible";
                    document.getElementById("providerLogo").src = "Images/vodafone.png";
                    document.getElementById("stateName").innerHTML = statename;
                    document.getElementById("note3").innerHTML = "";
                }
                
            }
            // for (obj in arr) {
            //     if (obj == stateno) {
            //         // statename = arr[obj];
            //         // // document.getElementById('note3').style.visibility = "hidden";
            //         // document.getElementById('note3').innerHTML = "";
            //         // break;
            //         console.log("State Macth");
            //         statename = arr[obj];
            //         if (providername == "jio") {
            //             document.getElementById('Phone-details').style.visibility = "visible";
            //             document.getElementById("providerLogo").src = "Images/jio.png";
            //             document.getElementById("stateName").innerHTML = statename;
            //             document.getElementById("note3").innerHTML = "";
            //         }
            //         else if (providername == "idea") {
            //             document.getElementById('Phone-details').style.visibility = "visible";
            //             document.getElementById("providerLogo").src = "Images/idea.png";
            //             document.getElementById("stateName").innerHTML = statename;
            //             document.getElementById("note3").innerHTML = "";
            //         }
            //         else if (providername == "vodafone") {
            //             document.getElementById('Phone-details').style.visibility = "visible";
            //             document.getElementById("providerLogo").src = "Images/vodafone.png";
            //             document.getElementById("stateName").innerHTML = statename;
            //             document.getElementById("note3").innerHTML = "";
            //         }
            //         break;
            //     }
            //     else {
            //         document.getElementById('Phone-details').style.visibility = "hidden";
            //         document.getElementById('note3').style.visibility = "visible";
            //         document.getElementById("note3").innerHTML = "Invalid State No *** please <br>use above suggestion list box.<br>Format is (provider no)-state no-****";
            //         // return false;
            //         console.log("State Not Macth");
            //     }
            // }

        }
    }
    else {
        document.getElementById('Phone-details').style.visibility = "hidden";
        document.getElementById('note3').style.visibility = "visible";
        document.getElementById("note3").innerHTML = "Invalid Phone Number<br>(contains 10 number).";
    }
}

// function showStateDetails() {
//     var combo = document.getElementById("combo");
//     document.getElementById("state-details").innerHTML = "State code of " + combo.options[combo.selectedIndex].text + " is " + combo.value;
//     document.getElementById("state-details").style.visibility = "visible";
// }

//onblur events on name,email and phone number fields 
function maskedName(full_name)
{
    if(full_name.value !="")
    {
        if (full_name.value.match(/^[a-zA-Z]{4,}\s+([a-zA-Z]{4,}\s*)+$/))
        {
            document.getElementById("note1").innerHTML = "";
        }
        else
        {
            document.getElementById('note1').style.visibility = "visible";
            document.getElementById("note1").innerHTML = "only alphabets and spaces allowed, <br>min two words each <br>with min 4 chars";
        }
    }
    else
    {
        document.getElementById('note1').style.visibility = "visible";
        document.getElementById("note1").innerHTML = "Please Enter Name Here";
    }
}

function maskedEmail(email){
    // if(email.value != "")
    // {
        if(email.value.match(/^\w+[a-zA-Z]+([\.!#$%'*+-\/=?^_`{|}~]?\w+)*@\w*[a-zA-z]+([\-]?\w+)*(\.[a-zA-Z]{2,3})+$/))
        {
            document.getElementById("note2").innerHTML = "";
        }
        else{
            document.getElementById('note2').style.visibility = "visible";
            document.getElementById("note2").innerHTML = "Invalid Email";
        }
    // }
    // else
    // {
    //     document.getElementById('note2').style.visibility = "visible";
    //     document.getElementById("note2").innerHTML = "Please Enter Email Here";
    // }
}
function maskedPhoneNumber(phone_no) {
    var x = phone_no.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    phone_no.value = !x[2] ? x[1] : '(' + x[1] + ')-' + x[2] + (x[3] ? '-' + x[3] : '');
    console.log(x);
    console.log(phone_no.value);
}

function submitData() {
    var name = document.getElementById("full_name").value;
    var email = document.getElementById("email").value;
    var phone_no = document.getElementById("phone_no").value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone NO: " + phone_no);
    if (name.match(/^[a-zA-Z]{4,}\s+([a-zA-Z]{4,}\s*)+$/)) 
    {
        console.log("Valid Name");
        document.getElementById("note1").innerHTML = "";
        if (email.match(/^\w+[a-zA-Z]+([\.!#$%'*+-\/=?^_`{|}~]?\w+)*@\w*[a-zA-z]+([\-]?\w+)*(\.[a-zA-Z]{2,3})+$/)) 
        {
            console.log("Valid Email ID");
            document.getElementById("note2").innerHTML = "";
            var phone_no = document.getElementById("phone_no").value;
            if (phone_no.match(/^\([0-9]{3}\)\-[0-9]{3}\-[0-9]{4}$/)) 
            {
                console.log("Valid Phone Number Success");
                document.getElementById("note3").innerHTML = "";
                let otp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
                console.log(otp);
                //Email Code for sending otp(Not Working)
                var subject = "For Verification Pixel6 Assignment";
                var message = "Thank you for your inquiry<br>.OTP for verfication is " + otp + "<br> Do Not share OTP with anyone";

                Email.send({
                    SecureToken: "03e1b454-eab3-4eef-8595-c636c808267c",
                    To: email,
                    From: "pmca83440@gmail.com",
                    Subject: subject,
                    Body: message
                }).then(
                    message => {
                        //console.log (message);
                        if (message == 'OK') {
                            console.log('Your mail has been send. Thank you for connecting.');
                            sessionStorage.setItem("Name", name);
                            sessionStorage.setItem("Email", email);
                            sessionStorage.setItem("Otp", otp);
                            location.href = "verification.html";
                        }
                        else {
                            console.error(message);
                            console.log('There is error at sending message. ')

                        }
                    });
            }
            else {
                console.log("Invalid Phone No");
                document.getElementById('note3').style.visibility = "visible";
                document.getElementById("note3").innerHTML = "Please Enter Phone Number.<br>Format is (provider no)-state no-****";
            }
        }
        else {
            console.log("Invalid Email");
            document.getElementById('note2').style.visibility = "visible";
            document.getElementById("note2").innerHTML = "Please Enter Email Address Here.";
        }
    }
    else {
        console.log("Invalid Name");
        document.getElementById('note1').style.visibility = "visible";
        document.getElementById("note1").innerHTML = "Please Enter Name Here.";
    }
}


