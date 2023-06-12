const wordInput = document.getElementById('wordInput');
const wordInput1 = document.getElementById('wordInput1');

var wordContent;
var wordContent1;

// Đặt sự kiện 'change' khi người dùng chọn một tệp cho wordInput
wordInput.addEventListener('change', (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file instanceof Blob) {
        const reader = new FileReader();
        reader.onload = function (event) {
            wordContent = event.target.result;
            input.value = wordContent;
            console.log(wordContent);
        };

        reader.onerror = function (event) {
            console.error('Lỗi khi đọc tệp.', event.target.error);
        };

        reader.readAsText(file);
    } else {
        console.error('Vui lòng chọn một file cho wordInput.');
    }
});

// Đặt sự kiện 'change' khi người dùng chọn một tệp cho wordInput1
wordInput1.addEventListener('change', (event) => {
    const fileInput1 = event.target;
    const file1 = fileInput1.files[0];

    if (file1 instanceof Blob) {
        const reader1 = new FileReader();
        reader1.onload = function (event) {
            wordContent1 = event.target.result;
            input1.value = wordContent1;
            console.log(wordContent1);
        };

        reader1.onerror = function (event) {
            console.error('Lỗi khi đọc tệp.', event.target.error);
        };

        reader1.readAsText(file1);
    } else {
        console.error('Vui lòng chọn một file cho wordInput1.');
    }
});
