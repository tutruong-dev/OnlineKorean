import React from "react";
function Program() {
    return (
      <div className="footer-frame">
        <h4>Chương trình</h4>
        <ul>
          <li><a href="/Listening">Nghe</a></li> {/* Cập nhật href Toi Trang Khóa Học Nghe */}
          <li><a href="/Speaking">Nói</a></li>{/* Cập nhật href Toi Trang Khóa Học Nói */}
          <li><a href="/Reading">Đọc</a></li>{/* Cập nhật href Toi Trang Khóa Học Đọc*/}
          <li><a href="/Writing">Viết</a></li>{/* Cập nhật href Toi Trang Khóa Học Viết */}
          <li><a href="/Topik">Topik</a></li>{/* Cập nhật href Toi Trang Khóa Học Topik */}
        </ul>
      </div>
    );
  }
  
  export default Program;