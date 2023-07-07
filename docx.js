document.getElementById('wordInput').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const arrayBuffer = e.target.result;

        const options = {
            convertImage: mammoth.images.imgElement(function (image) {
                return image.read("base64");
            })
        };
        mammoth.extractRawText({ arrayBuffer: arrayBuffer }, options)
            .then(function (result) {
                const html = result.value;
                input.value = html;
            })
            .done();
    };
    reader.readAsArrayBuffer(file);
}
document.getElementById('wordInput1').addEventListener('change', handleFileSelect1, false);

function handleFileSelect1(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const arrayBuffer = e.target.result;

        const options = {
            convertImage: mammoth.images.imgElement(function (image) {
                return image.read("base64");
            })
        };
        mammoth.extractRawText({ arrayBuffer: arrayBuffer }, options)
            .then(function (result) {
                const html = result.value;
                input1.value = html;
            })
            .done();
    };
    reader.readAsArrayBuffer(file);
}