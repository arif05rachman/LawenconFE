function popeyeOlive() {
    let nummber = 100
    for (let i = 0; i < nummber.length; i++) {
        if (i%3 === 0 && i%5 === 0) {
            console.log(i+1, "Giant")
        }else if (i%3 === 0) {
            console.log(i+1, "Popeye")
        }else if (i%5 === 0) {
            console.log(i+1, "Olive")
        }else{
            console.log(i+1)
        }
    }
}