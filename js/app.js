alert("                                     🎊Congratulations!🎊\n                            🤑\tyou won a lamborghini❗\t🤑\n                    💰click ok and proceed to the next level!!!💰");
var userName, userGender, userAge, isDriver, isWorking, isMarried
userName = userGender = userAge = isDriver = isWorking = isMarried = "invalid"

var proceed1 = confirm("You are few steps away from your lamborghini❗ click:\n ✔️okay to proceed❗\n or\n ❌cancel to skip in case you are a rich guy❗");
if (proceed1 == true) {

    var userName = prompt("Good Job you are a smart guy❗\n now start fill answers one by one❗\n 🆔 Please enter your FULL name:");
    if (userName === "" || userName.length < 10) {
        var proceed2 = confirm("🤬You left your FULL name form empty, or your FULL name less than 10 letters, you may not get your lamborghini❗🤬\n ✔️click ok to continue without name\n or\n ❌cancel to back and enter your name❗");
        if (proceed2 == true) {
            userName = "invalid"
        } else {
            var userName = prompt("🆔 Please enter your FULL name again❗:");
            if (userName === "" || userName.length < 5) {
                alert("🤬...Well... Mr/Mrs UNKOWN, maybe you feel funny❗ never mind we will proceed you without a name🤬");
                userName = "invalid"
            }
        }
    }

    var userGender = prompt("⚤ Please enter your gender:");
    if (userGender != "male" && userGender != "female") {
        var proceed3 = confirm("🤬The answer must be one of those options🤬:\n 👦🏻 male\n 👧🏻 female\n click:\n ✔️ok to continue without gender info. \n ❌cancel to try again❗");
        if (proceed3 == true) {
            userGender = "invalid"
        } else {
            var userGender = prompt("⚤ Please enter your gender again❗");
            if (userGender != "male" && userGender != "female") {
                alert("👾👽🤖 You can't be a human with this IQ🤖👽👾\n bots & aliens can't win a lamborghini❗\n never mind we will proceed you without a name..🤬");
                userGender = "invalid"

            }
        }
    }

    var userAge = prompt("👶Please enter your Age👶");
    if (userAge <= 0 || userAge > 100) {
        var proceed4 = confirm("❗OMG❗YOU HAVE NOT BEEN CREATED YET, or you just left your grave⚰️ or entered invalid value,\n if you entered your age wrong by mistake click:\n ❌cancel to try again❗.\n or\n ✔️ok to continue without an Age info");
        if (proceed4 == true) {
            userAge = "invalid"
        } else {
            var userAge = prompt("👶Please enter your Age👶 again❗");
            if (userAge <= 0 || userAge > 100) {
                alert("👾👽🤖 You can't be a human with this IQ🤖👽👾\n bots & aliens can't win a lamborghini❗\n but never mind we will proceed you without an Age info..🤬");
                userAge = "invalid"

            }
        }
    }

    alert("🍀🍀🍀🍀🍀Great Job for now🍀🍀🍀🍀🍀\n Now try to answer with ✔️yes || ❌no\n on the followung 3 questions,\n in case you don't like to answer any of them for any reason just leave it empty");

    var isDriver = prompt("do you have a driver's license? ✔️yes || ❌no");
    var isWorking = prompt("do you have a job currently? ✔️yes || ❌no");
    var isMarried = prompt("are you married currently? ✔️yes || ❌no");
    if (isDriver !== "yes" && isDriver !== "Yes" && isDriver !== "YES" && isDriver !== "no" && isDriver !== "No" && isDriver !== "NO") { isDriver = "invalid" }
    if (isWorking !== "yes" && isWorking !== "Yes" && isWorking !== "YES" && isWorking !== "no" && isWorking !== "No" && isWorking !== "NO") { isWorking = "invalid" }
    if (isMarried !== "yes" && isMarried !== "Yes" && isMarried !== "YES" && isMarried !== "no" && isMarried !== "No" && isMarried !== "NO") { isMarried = "invalid" }
}
var userData = [userName, userGender, userAge, isDriver, isWorking, isMarried];

switch (userGender) {
    case "invalid":
        alert("\t\t\t\t\t\t\t\tUSER DATA\t\t\t\t\t\t\t\t\n" + "Full Name" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[0] + "\n Gender" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[1] + "\n Age" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[2] + "\n License" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[3] + "\n Emplyed" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[4] + "\n Married" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[5]);
        break;
    case "female":
        alert("\t\t\t\t\t\t\t\tUSER DATA\t\t\t\t\t\t\t\t\n" + "Ms " + "Full Name" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[0] + "\n Gender" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[1] + "\n Age" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[2] + "\n License" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[3] + "\n Emplyed" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[4] + "\n Married" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[5]);
        break;
    case "male":
        alert("\t\t\t\t\t\t\t\tUSER DATA\t\t\t\t\t\t\t\t\n" + "Mr " + "Full Name" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[0] + "\n Gender" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[1] + "\n Age" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[2] + "\n License" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[3] + "\n Emplyed" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[4] + "\n Married" + ":" + "\t\t\t\t\t\t\t\t\t\t\t\t" + userData[5]);
        break;
}
for (let i = 0; i < userData.length; i++) {
    console.log(userData[i]);
}
