import { ThongTinNguoiNhap } from "../models/ThongTin.js";

export class KhaiBaoThongTin {
    
    arrKhaiBao = [];
    constructor () {

    }

    themThongTin = (thongTin) => {
        this.arrKhaiBao.push(thongTin);
    }

    layThongTin = (soDienThoai) => {
        let thongTin = this.arrKhaiBao.find(objectThongTin => objectThongTin.soDienThoai === soDienThoai);
        if(thongTin) {
            return thongTin;
        }
        return undefined;
    }

    capNhatThongTin = (so, thongTinCapNhat) => {
        let thongTin = this.arrKhaiBao.find(objectThongTin => objectThongTin.soDienThoai === so);
        if(thongTin) {
            //Cách 1 cập nhật từng giá trị
            // monAn.tenMon = monAnCapNhat.tenMon;
            // monAn.giaMon = monAnCapNhat.giaMon;
            //Cách 2 duyệt thuộc tính động es6
            for(let keyThongTin in thongTin) {
                thongTin[keyThongTin] = thongTinCapNhat[keyThongTin];
            }
        }
    }

    taoTin = () => {
        //map: map là hàm dùng để tạo ra 1 mảng mới từ mảng ban đầu
        // [{mon:1,tenMon:'ten mon',gia:''},{mon:2,tenMon:'goi',gia:''}, ]
        // ['<tr></tr>','<tr></tr>','<tr></tr>']
        let arrResult = this.arrKhaiBao.map((thongTin, index) => {
            return `
                <tr>
                    <td>${thongTin.ten}</td>
                    <td>${thongTin.ho}</td>
                    <td>${thongTin.email}</td>
                    <td>${thongTin.soDienThoai}</td>
                    <td>${thongTin.ngay}</td>
                    <td>${thongTin.thang}</td>
                    <td>${thongTin.nam}</td>
                    <td>${thongTin.diaChi}</td>
                    <td>${thongTin.thongTinDiChuyen}</td>
                    <td>${thongTin.loaiNhiem ? 'F0' : 'F1'}</td>
                    <td>
                        <button onclick="xoaThongTin('${thongTin.phoneNumber}')">Xoá</button>
                        <button data-toggle="modal" data-target="#exampleModal" onclick="chinhSua('${thongTin.phoneNumber}')" >Chỉnh sửa</button>
                    </td>
                </tr>
            `
        });
        return arrResult;
    }
    renderTin = (idTable) => {
        let arrHtmlTin = this.taoTin();// ['<tr></tr>','<tr></tr>']
        //foreach(callback): Foreach nhận vào 1 callback có 2 tham số (phần tử của mảng, vị trí phần tử đó) hàm này sẽ chạy n lần dựa vào n phần tử của mảng
        let content = '';
        arrHtmlTin.forEach((htmlTrThongTin, index) => {
            content += htmlTrThongTin;
        });
        document.getElementById(idTable).innerHTML = content;
    }

    luuStorage = () => {
        //Biến dữ liệu arrMenu thành chuỗi
        let stringTin = JSON.stringify(this.arrThongTin);
        //Lưu chuỗi vào localstorage
        localStorage.setItem('thongTinNguoiDienForm', stringMenu);

    }
    layStorage = () => {
        //Kiểm tra trong localstorage có dữ liệu thì lấy dữ liệu từ localstorage ra gán cho thuộc tính menu
        if (localStorage.getItem('thongTinNguoiDienForm')) {
            let stringMenu = localStorage.getItem('thongTinNguoiDienForm');
            this.arrThongTin = JSON.parse(stringMenu);
        }
    }
}