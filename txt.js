// Lấy tham chiếu đến phần tử input có id là "fileInput"
const fileInput = document.getElementById('fileInput');
var fileContent;
// Đặt sự kiện 'change' khi người dùng chọn một tệp
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Đọc nội dung của tệp văn bản
    reader.readAsText(file);

    // Xử lý khi đọc tệp hoàn tất
    reader.onload = () => {
        fileContent = reader.result;
        input.value = fileContent;
        console.log(fileContent); // Hoặc gán giá trị vào biến khác
    };

    // Xử lý khi có lỗi xảy ra trong quá trình đọc tệp
    reader.onerror = () => {
        console.error('Lỗi khi đọc tệp.');
    };
});
const fileInput1 = document.getElementById('fileInput1');
var fileContent1;
// Đặt sự kiện 'change' khi người dùng chọn một tệp
fileInput1.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Đọc nội dung của tệp văn bản
    reader.readAsText(file);

    // Xử lý khi đọc tệp hoàn tất
    reader.onload = () => {
        fileContent1 = reader.result;
        input1.value = fileContent1;
        console.log(fileContent1); // Hoặc gán giá trị vào biến khác
    };

    // Xử lý khi có lỗi xảy ra trong quá trình đọc tệp
    reader.onerror = () => {
        console.error('Lỗi khi đọc tệp.');
    };
});