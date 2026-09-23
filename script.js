function upDate(previewPic) {
    // 1. Kiểm tra sự kiện
    console.log("Đã di chuột qua ảnh:", previewPic.alt);

    // 2. Lấy khung hiển thị lớn
    let imageDiv = document.getElementById("image");

    // 3. Cập nhật chữ hiển thị thành tên loài mèo (lấy từ thuộc tính alt)
    imageDiv.innerHTML = previewPic.alt;

    // 4. Cập nhật ảnh nền thành hình ảnh loài mèo tương ứng
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Lấy khung hiển thị lớn
    let imageDiv = document.getElementById("image");

    // Đặt lại ảnh nền về rỗng
    imageDiv.style.backgroundImage = "url('')";

    // Đặt lại văn bản về câu thông báo ban đầu
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị tại đây.";
}