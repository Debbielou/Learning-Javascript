function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000); // Simulate a delay of 2 seconds
    });
}

async function fetchData() {
    const result = await getData();
    console.log(result);
}
fetchData();