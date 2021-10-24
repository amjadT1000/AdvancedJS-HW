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


fetchData()
var timeOut;

function timeOutTest() {
    document.getElementById('timeout_text').innerHTML = "The timeout has been started..."
    document.getElementById('timeout_text').style = ""
    timeOut = setTimeout(() => {
        document.getElementById('timeout_text').innerHTML = "The timeout has been triggered!"
        document.getElementById('timeout_text').style = "color:green;"
    }, 3000)
}


function clearTimeOutTest() {
    clearTimeout(timeOut)
    document.getElementById('timeout_text').innerHTML = "The timeout has been cleared!"
    document.getElementById('timeout_text').style = "color:blue;"
}