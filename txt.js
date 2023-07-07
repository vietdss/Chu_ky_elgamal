
let fileContent;
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        fileContent = reader.result;
        input.value = fileContent;
        console.log(fileContent);
    };
    reader.onerror = () => {
        console.error('Lỗi khi đọc tệp.');
    };
});

let fileContent1;
fileInput1.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        fileContent1 = reader.result;
        input1.value = fileContent1;
        console.log(fileContent1);
    };
    reader.onerror = () => {
        console.error('Lỗi khi đọc tệp.');
    };
});

let fileContent2;
fileChuKy.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        fileContent2 = reader.result;
        chuKy1.value = fileContent2;
        console.log(fileContent2);
    };
    reader.onerror = () => {
        console.error('Lỗi khi đọc tệp.');
    };
});