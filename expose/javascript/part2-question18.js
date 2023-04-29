function timePrinter() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}

setInterval(timePrinter, 1000)