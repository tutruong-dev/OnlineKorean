import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../index.css';

// Import hình ảnh từ thư mục src
import hocImage from '../../Img/Blog/hoc.jpg';
import calendarImage from '../../Img/Blog/lich.png';

function Sidebar() {
  // Trạng thái để quản lý việc hiển thị lịch (true/false)
  const [showSchedule, setShowSchedule] = useState(false);

  // Trạng thái để lưu trữ ngày được chọn từ lịch
  const [selectedDate, setSelectedDate] = useState(null);

  // Trạng thái để lưu ghi chú của người dùng
  const [note, setNote] = useState('');

  // Trạng thái lưu trữ tất cả các ghi chú, dưới dạng một object với ngày làm key
  const [notes, setNotes] = useState({});

  // Hàm xử lý khi người dùng bấm vào nút hiển thị lịch, chuyển đổi giữa hiển thị và ẩn lịch
  const handleScheduleClick = () => {
    setShowSchedule(!showSchedule);
  };

  // Hàm xử lý khi ngày trong lịch được thay đổi
  const handleDateChange = (date) => {
    setSelectedDate(date);  // Cập nhật ngày được chọn
    setNote(notes[date.toDateString()] || '');  // Kiểm tra và tải ghi chú nếu có, nếu không có thì trả về chuỗi rỗng
  };

  // Hàm xử lý khi ghi chú thay đổi (cập nhật trạng thái note)
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  // Hàm xử lý khi người dùng lưu ghi chú, ghi chú được lưu lại trong trạng thái notes
  const handleSaveNote = () => {
    setNotes(prevNotes => ({
      ...prevNotes,  // Sao chép các ghi chú trước đó
      [selectedDate.toDateString()]: note  // Thêm hoặc cập nhật ghi chú cho ngày đã chọn
    }));
    alert(`Note saved for ${selectedDate.toDateString()}`);  // Thông báo rằng ghi chú đã được lưu
    setNote('');  // Xóa ghi chú hiện tại sau khi lưu
  };

  // Hàm này trả về một dấu chỉ thị đặc biệt (note-indicator) nếu có ghi chú cho ngày đó
  const tileContent = ({ date, view }) => {
    if (view === 'month' && notes[date.toDateString()]) {
      return <div className="note-indicator"></div>;  // Hiển thị dấu chỉ nếu có ghi chú
    }
  };

  return (
    <div className="sidebar">
      {/* Phần hiển thị danh sách các khóa học */}
      <div className="sidebar-section">
        <h2>Các Khóa Học Của Bạn</h2>
        <ul>
          <li><button>Khóa giao tiếp 3</button></li>
          <li><button>Khóa luyện nói sơ cấp</button></li>
          <li><button>Khóa luyện thi topik I</button></li>
          <li><button>Khóa luyện thi topik II</button></li>
          <li><button>Khóa luyện nói</button></li>
          <li><button>Khóa ôn tập</button></li>
        </ul>
      </div>

      {/* Phần hiển thị các khóa học khác gần đây */}
      <div className="sidebar-section recent-courses">
        <h2>Các Khóa Học Khác Gần Đây</h2>
        <ul>
          <li><button><img src={hocImage} alt="Luyện Nói Nâng Cao" /><span>Luyện Nói Nâng Cao</span></button></li>
          <li><button><img src={hocImage} alt="Luyện Thi Topik III" /><span>Luyện Thi Topik III</span></button></li>
          <li><button><img src={hocImage} alt="Khóa Luyện Đọc Trung Cấp" /><span>Khóa Luyện Đọc Trung Cấp</span></button></li>
        </ul>
      </div>

      {/* Phần hiển thị lịch trình của người dùng */}
      <div className="sidebar-section schedule-section">
        <h2>Lịch Trình Của Bạn</h2>
        <button className="schedule-button" onClick={handleScheduleClick}>
          <img src={calendarImage} alt="Calendar" />
        </button>
        {showSchedule && (  // Nếu trạng thái showSchedule là true, hiển thị lịch
          <div className="schedule-details">
            <Calendar
              onChange={handleDateChange}  // Cập nhật ngày được chọn khi người dùng chọn trên lịch
              tileContent={tileContent}  // Hiển thị các chỉ thị cho các ngày có ghi chú
            />
            {selectedDate && (  // Nếu người dùng đã chọn một ngày, hiển thị khung ghi chú
              <div className="note-section">
                <p>Note for {selectedDate.toDateString()}:</p>
                <textarea value={note} onChange={handleNoteChange} placeholder="Enter your note..." />
                <button onClick={handleSaveNote}>Save Note</button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Phần hiển thị các nút độc lập cho các tính năng khác */}
      <div className="sidebar-section standalone-buttons">
        <button onClick={() => alert('Tạo Lớp Học Mới')}>Tạo Lớp Học Mới</button>
        <button onClick={() => alert('Tạo Khảo Sát')}>Tạo Khảo Sát</button>
        <button onClick={() => alert('Thông Báo')}>Thông Báo</button>
      </div>
    </div>
  );
}

export default Sidebar;
