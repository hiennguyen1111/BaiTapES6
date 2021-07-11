export class ThongTinNguoiNhap {
  ten = "";
  ho = "";
  email = "";
  soDienThoai = "";
  ngayThangNamSinh = "";
  diaChi = "";
  thongTinDiChuyen = "";
  loaiNhiem = "";

  constructor() {}
  hienThiThongTin = () => {
    return `
        <div class="noiDungHienThi" >
                                <ul class="list-group mb-3">
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h3 class="my-0">Tên</h3>
                                        </div>
                                        <span id="ten" XXX='AAA' name="ten" class="text-muted">${this.ten}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h3 class="my-0">Họ</h3>
                                        </div>
                                        <span id="ho" name="ho" class="text-muted">${this.ho}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h3 class="my-0">Email</h3>
                                        </div>
                                        <span id="email" name="email" class="text-muted">${this.email}
                                        </span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h3 class="my-0">Số Điện Thoại</h3>
                                        </div>
                                        <span id="soDienThoai" name="soDienThoai" class="text-muted">${this.soDienThoai}
                                        </span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h3 class="my-0">Ngày Tháng Năm Sinh</h3>
                                        </div>
                                        <div class="form-date-group">
                                            <div class="form-date-item">
                            
                                                <span id="ngay" name="ngay" class="text-muted">${this.ngay}</span>
                                            </div>
                                            <div class="form-date-item">
                                                
                                                <span id="thang" name="thang" class="text-muted">${this.thang}</span>
                                            </div>
                                            <div class="form-date-item">
                                                
                                                <span id="nam" name="nam" class="text-muted">${this.nam}</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h3 class="my-0">Địa Chỉ</h3>
                                        </div>
                                        <span id="diaChi" name="diaChi" class="text-muted">${this.diaChi}
                                        </span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h3 class="my-0">Thông Tin Di Chuyển</h3>
                        
                                            <span name="thongTinDiChuyen" id="thongTinDiChuyen" class="text-muted">${this.thongTinDiChuyen}
                                            </span>
                                        </div>
                        
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h3 class="my-0">Phân Loại F</h3>
                                        </div>
                                        <span id="loaiNhiem" name="loaiNhiem" class="text-muted">${this.loaiNhiem}
                                        </span>
                                    </li>
                                </ul>
                            </div>
        `;
  };
}
