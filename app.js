// making variables of button and inputs
let username;
let password;
const btn_login = document.querySelector("#log-in");
const btn_createaccount = document.querySelector("#create-account");

// adding event listners
btn_login.addEventListener("click", function(){
    username = document.querySelector("#username").value;
    password = document.querySelector("#password").value;
    alert(`Your username is ${username} and password is ${password}`)

})
btn_createaccount.addEventListener("click", function(){
    window.open("https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569870%7Cb%7Ccreate%20new%20account%20facebook%7C&placement=&creative=589460569870&keyword=create%20new%20account%20facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221432%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-298831209497%26loc_physical_ms%3D9299354%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAm4WsBhCiARIsAEJIEzWzeRN_3mUEm0zEw5daOGT-6EiGAJkRVVdcy5M6061yqGW56dso2ZUaApf6EALw_wcB");
})