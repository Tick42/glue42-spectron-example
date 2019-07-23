Glue()                      //initialize Glue42
    .then((glue42) => {
        window.glue = glue42
    })
    .catch(console.log);

// app functionality
let values = document.getElementsByName("values");
setInterval("fakeData(values)", 2000);

function fakeData(values) {
    [...values].map(v => v.textContent = (Math.random() * 100).toFixed(2) + " units");
}