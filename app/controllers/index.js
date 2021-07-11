import {ThongTinNguoiNhap} from "../models/ThongTin.js";
// import {KhaiBaoThongTin} from "../controllers/KhaiBaoThongTin.js";

let thongtin = new ThongTinNguoiNhap();

document.querySelector('.signup-form .actions ul li:last-child a').onclick = () => {
    //Tạo đối tượng chứa thông tin người dùng nhập từ giao diện
    let thongTin = new ThongTinNguoiNhap();
    //Truy xuất đến tất cả các input,select để lấy thông tin người dùng nhập từ giao diện
    let arrTagInput = document.querySelectorAll('#infoForm1 input, infoForm2 input, #infoForm2 select');
    for (let input of arrTagInput) {
        //Mỗi lần duyệt 1 taginput lấy ra name và value
        let { name, value } = input;
        //Gán giá trị value dựa vào name(thuộc tính) cho object thông tin
        thongTin[name] = value;
    }
    console.log('arrTagInput', arrTagInput);
    console.log('thongTin', thongTin);
    //Cách 2: Dùng oop
    document.querySelector('.noiDungHienThi').innerHTML = thongTin.hienThiThongTin();

    // thongtin.themThongTin(thongTin);

}

