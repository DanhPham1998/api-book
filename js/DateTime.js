function gettime() {
    let today = new Date();
    let date =
        today.getDate().toString().padStart(2, "0") +
        "/" +
        ("0" + (today.getMonth() + 1)).toString().padStart(2, "0") +
        "/" +
        today.getFullYear();
    let time =
        today.getHours().toString().padStart(2, "0") +
        ":" +
        today.getMinutes().toString().padStart(2, "0") +
        ":" +
        today.getSeconds().toString().padStart(2, "0");
    let dateTime = date + " " + time;
    return dateTime;
}
module.exports = gettime;
