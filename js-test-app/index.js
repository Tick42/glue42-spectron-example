const values = document.getElementsByName("values");

setInterval(fakeData, 2000);

function fakeData() {
    [...values].map(v => v.textContent = (Math.random() * 100).toFixed(2) + " units");
};

const init = async () => {
    window.glue = await Glue();
    console.log(`Glue42 initialized successfully!\nGlue42 version: ${glue.version}`);
};

init().catch(console.error);