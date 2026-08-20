// Đổi màu nền
const button = document.getElementById("changeColor");

const colors = [
    "#f2f2f2",
    "#dff6ff",
    "#fff1d6",
    "#e8dfff",
    "#dfffe2"
];

let colorIndex = 0;

button.addEventListener("click", function () {
    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    document.body.style.background = colors[colorIndex];
});


// Hộp liên hệ
const contactButton = document.getElementById("contactButton");
const contactBox = document.getElementById("contactBox");
const closeContact = document.getElementById("closeContact");

contactButton.addEventListener("click", function () {
    contactBox.style.display = "block";
});

closeContact.addEventListener("click", function () {
    contactBox.style.display = "none";
});