function upDate(previewPic) {
    /* 
      Tham số `previewPic` đại diện cho thẻ <img> mà chuột đang di vào (chính là biến `this` truyền từ HTML).
    */

    // 1. Kiểm tra xem sự kiện có hoạt động không bằng console.log
    console.log("Sự kiện rê chuột (hover) đã kích hoạt!");

    // 2. In thông tin alt và src của hình ảnh đang di chuột qua
    console.log("Alt của ảnh:", previewPic.alt);
    console.log("Source của ảnh:", previewPic.src);

    // 3. Lấy phần tử có id là "image"
    let imageDiv = document.getElementById("image");

    // 4. Thay đổi văn bản hiển thị thành thuộc tính alt của ảnh đang hover
    imageDiv.innerHTML = previewPic.alt;

    // 5. Thay đổi ảnh nền (background-image) thành đường dẫn src của ảnh đang hover
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    /* 
      Hàm này khôi phục trang về trạng thái ban đầu khi chuột rời khỏi ảnh.
    */

    // 1. Lấy phần tử có id là "image"
    let imageDiv = document.getElementById("image");

    // 2. Đặt lại ảnh nền về giá trị ban đầu (rỗng)
    imageDiv.style.backgroundImage = "url('')";

    // 3. Đặt lại văn bản hiển thị ban đầu
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị tại đây.";
}