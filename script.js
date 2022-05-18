let files = ["Success", "Success", "Success"];
let myProccess1 = new Promise(function (resolve, reject) {
    let box = document.getElementById("text1");
    box.innerText = "loading...";
    setTimeout(function () {
        resolve();
        reject();
    }, 3000);

});

myProccess1.then(
    function () {
        document.getElementById("text1").innerHTML = files[0];
        clearInterval(myInterval);
    },
    function (error) {
        document.getElementById("file1").innerHTML = "error" + error;
    }
);

myInterval =
    setInterval(printStatus, 1000);
function printStatus() {
    console.log(myProccess1);
};

let myProccess2 = new Promise(function (resolve, reject) {
    let box1 = document.getElementById("text2");
    box1.innerText = "loading...";
    setTimeout(function () {
        resolve();
        reject();
    }, 5000);

});

myProccess2.then(
    function () {
        document.getElementById("text2").innerHTML = files[1];
        clearInterval(myInterval2);
    },
    function () {
        document.getElementById("file2").innerHTML = "error";
    }
);

myInterval2 =
    setInterval(printStatus, 1000);
function printStatus() {
    console.log(myProccess2);
};


let myProccess3 = new Promise(function (resolve, reject) {
    let box2 = document.getElementById("text3");
    box2.innerText = "loading...";
    setTimeout(function () {
        resolve();
        reject();
    }, 7000);

});

myProccess3.then(
    function () {
        document.getElementById("text3").innerHTML = files[2];
        clearInterval(myInterval3);
    },
    function () {
        document.getElementById("file3").innerHTML = "error";
    }
);

myInterval3 =
    setInterval(printStatus, 1000);
function printStatus() {
    console.log(myProccess3);
};


