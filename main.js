// converted to UnArrow Function 
async function fetchData() {


    await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
        .then(res => res.json())
        .then((result) => {
            result.items.map(items => {
                //console loging the Title 
                console.log(items.volumeInfo.title)
                // console loging the Descriptions
                console.log(items.volumeInfo.description)

            })
        }),
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error);
        }

}

function timing(){
    document.getElementById("timeout_text").innerHTML = "<p style='color:orange'>The timeout has been started</p>";
    setTimeout(()=> document.getElementById("timeout_text").innerHTML =
         "<p style='color:green'>The timeout has been triggered!</p>", 3000)
}

function clear_timing(){
    clearTimeout()
    document.getElementById("timeout_text").innerHTML = "<p style='color:blue'>The timeout has been cleared</p>"
}


fetchData()