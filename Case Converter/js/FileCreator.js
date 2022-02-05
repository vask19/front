let saveFileButton = document.getElementById("save-text-file");
let fileName = "text"
saveFileButton.addEventListener("click",function () {
    console.log()
    download("text.txt", textarea.value);
});


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

