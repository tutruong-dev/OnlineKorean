import React from "react";
function Program() {
    return (
      <div className="footer-frame">
        <h4>Chương trình</h4>
        <ul>
          <li><a href="/listening">Nghe</a></li> {/* Cập nhật href Toi Trang Khóa Học Nghe */}
          <li><a href="/speaking">Nói</a></li>{/* Cập nhật href Toi Trang Khóa Học Nói */}
          <li><a href="/reading">Đọc</a></li>{/* Cập nhật href Toi Trang Khóa Học Đọc*/}
          <li><a href="/writing">Viết</a></li>{/* Cập nhật href Toi Trang Khóa Học Viết */}
          <li><a href="/topik">Topik</a></li>{/* Cập nhật href Toi Trang Khóa Học Topik */}
        </ul>
      </div>
    );
  }
  
  export default Program;