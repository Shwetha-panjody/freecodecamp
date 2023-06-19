function load() {
    event.preventDefault();
    document.getElementsByClassName('overlay')[0].style.display = "flex";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";

    setTimeout(() => {
        validate()
        document.getElementsByTagName('body')[0].style.overflow = "auto";
        document.getElementsByClassName('overlay')[0].style.display = "none";
    }, 2000);

}
document.getElementById('number').addEventListener("keypress", function (evt) {
    if (evt.key < '0' || evt.key > '9') //other than number
    {
        evt.preventDefault();
    }
    else if (parseInt(document.getElementById('number').value) > 102) {
        evt.preventDefault();
    }
    else {
        document.getElementById('age_err1').style.display = "none";
        document.getElementById('age_err2').style.display = "none";
    }
});

function validf(num) {
    switch (num) {
        case 1:
            document.getElementById('name_err1').style.display = "none";
            document.getElementById('name_err2').style.display = "none";
            break;
        case 2:
            document.getElementById('email_err1').style.display = "none";
            document.getElementById('email_err2').style.display = "none";
            break;
        case 3:
            document.getElementById('password_err1').style.display = "none";
            document.getElementById('password_err2').style.display = "none";
            break;
        case 4:
            document.getElementById('age_err1').style.display = "none";
            document.getElementById('age_err2').style.display = "none";
            break;
        case 5:
            document.getElementById('dropdown_err1').style.display = "none";
            break;
        case 6:
            document.getElementById('vcl_err3').style.display = "none";
            break;
        case 7:
            document.getElementById('vcl_err1').style.display = "none";
            document.getElementById('vcl_err2').style.display = "none";
            break;


    }
}
function validate() {
    // event.preventDefault()
    function userdata(name, email, password, age, role, recommand, vehicle, suggetion) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        this.role = role;
        this.recommand = recommand;
        this.vehicle = vehicle;
        this.suggetion = suggetion;
    }

    let name, email, password, age, role, recommand, vehicle, suggetion, survey_form;
    let vc = 0;

    name = document.getElementById('name').value;

    //-----------------------------name validation----------------------------------
    if (name == "") {
        document.getElementById('name_err1').style.display = "block";
        document.getElementById('name_err2').style.display = "none";
    }
    else if (!(/^[a-zA-Z]{1,14}$/.test(name))) {
        document.getElementById('name_err2').style.display = "block";
        document.getElementById('name_err1').style.display = "none";
    }
    else {
        vc++;
    }



    email = document.getElementById('email').value;

    //-----------------------------email validation----------------------------------
    if (email == "") {
        document.getElementById('email_err1').style.display = "block";
        document.getElementById('email_err2').style.display = "none";
    }
    else if (!(/[a-z]{1}[a-z0-9]{1,}@gmail[.]com/ig.test(email))) {
        document.getElementById('email_err2').style.display = "block";
        document.getElementById('email_err1').style.display = "none";
    }
    else {
        vc++;
    }


    password = document.getElementById('password').value;
    //-----------------------------password validation----------------------------------
    if (password == "") {
        document.getElementById('password_err1').style.display = "block";
        document.getElementById('password_err2').style.display = "none";
    }
    else if (!(/^.*(?=.{6,12})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@ "]).*$/.test(password))) {
        document.getElementById('password_err2').style.display = "block";
        document.getElementById('password_err1').style.display = "none";
    } else {
        vc++;
    }


    age = document.getElementById('number').value;
    // /^[0-9]{2,3}$/

    //-----------------------------age validation----------------------------------

    if (age == "") {
        document.getElementById('age_err1').style.display = "block";
        document.getElementById('age_err2').style.display = "none";
    }
    else if (age < 18 || age > 102) {
        document.getElementById('age_err2').style.display = "block";
        document.getElementById('age_err1').style.display = "none";
    } else {
        vc++;
    }


    role = document.getElementById('dropdown').value;
    //-----------------------------role validation----------------------------------
    if (role == "") {
        document.getElementById('dropdown_err1').style.display = "block";
    }
    else {
        document.getElementById('dropdown_err1').style.display = "none";
        vc++;
    }


    //-----------------------------recommand validation----------------------------------

    const checked = document.querySelector("input[name='recmd']:checked");

    if (!checked) {
        document.getElementById('vcl_err3').style.display = "block";
    }
    else {
        recommand = document.querySelector("input[name='recmd']:checked").value;
        document.getElementById('vcl_err3').style.display = "none";
        vc++;
    }


    vehicle = [];

    let v1, v2, v3, v4;
    v1 = document.getElementById('vehicle1');
    v2 = document.getElementById('vehicle2');
    v3 = document.getElementById('vehicle3');
    v4 = document.getElementById('vehicle4');

    if (v1.checked == false && v2.checked == false && v3.checked == false && v4.checked == false) {
        document.getElementById('vcl_err1').style.display = "block";
    }
    else if ((v1.checked == true || v2.checked == true || v3.checked == true) && v4.checked == true) {
        document.getElementById('vcl_err2').style.display = "block";
    }
    else {
        if (v1.checked == true) vehicle.push("bike");
        if (v2.checked == true) vehicle.push("car");
        if (v3.checked == true) vehicle.push("boat");
        if (v4.checked == true) vehicle.push("No vehicle");

        document.getElementById('vcl_err1').style.display = "none";
        document.getElementById('vcl_err2').style.display = "none";
        vc++;
    }

    suggetion = document.getElementById('sugg').value;

    var data1 = new userdata(name, email, password, age, role, recommand, vehicle, suggetion);

    if (vc == 7) {

        confirm("Name : " + data1.name + "\nEmail : " + data1.email + "\nAge : " + data1.age + "\nRole : " + data1.role + "\nRecommand : " + data1.recommand + "\nVehicle : " + data1.vehicle + "\nSuggetion : " + data1.suggetion)
        window.location.reload()
    }

    console.log(vc)
}