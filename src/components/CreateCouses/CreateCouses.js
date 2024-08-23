import React, { useState } from 'react';
import { db, storage } from '../Firebase/firebaseconfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import '../../index.css';

const CreateCoursePage = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [courseType, setCourseType] = useState('online'); // Default to online course
  const [courseImage, setCourseImage] = useState(null);
  const [courseVideos, setCourseVideos] = useState([]); // Chứa danh sách các video

  const handleImageChange = (e) => {
    setCourseImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setCourseVideos(Array.from(e.target.files)); // Lưu các video được chọn
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn form gửi dữ liệu theo cách mặc định

    const courseData = {
      courseName,
      courseDescription,
      courseCategory,
      coursePrice,
      courseType,
    };

    try {
      // Xử lý tải lên hình ảnh
      if (courseType === 'online' && courseImage) {
        const imageRef = ref(storage, `course-images/${courseImage.name}`);
        await uploadBytes(imageRef, courseImage);
        const imageUrl = await getDownloadURL(imageRef);
        courseData.courseImage = imageUrl;
      }

      // Xử lý tải lên video
      if (courseType === 'video' && courseVideos.length > 0) {
        const videoUrls = [];
        for (const video of courseVideos) {
          const videoRef = ref(storage, `course-videos/${video.name}`);
          await uploadBytes(videoRef, video);
          const videoUrl = await getDownloadURL(videoRef);
          videoUrls.push(videoUrl);
        }
        courseData.courseVideos = videoUrls;
      }

      // Lưu dữ liệu khóa học vào Firestore
      await addDoc(collection(db, 'courses'), courseData);
      alert('Khóa học đã được lưu thành công!');

      // Reset form sau khi gửi
      setCourseName('');
      setCourseDescription('');
      setCourseCategory('');
      setCoursePrice('');
      setCourseType('online');
      setCourseImage(null);
      setCourseVideos([]);
    } catch (error) {
      console.error('Lỗi khi lưu khóa học:', error);
      alert('Có lỗi xảy ra khi lưu khóa học.');
    }
  };

  return (
    <div className="create-course-page">
      <div className="create-course-container">
        <h1 className="create-course-title">Tạo Khóa Học Mới</h1>
        <form className="create-course-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tên khóa học"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
          <textarea
            placeholder="Mô tả khóa học"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
          />
          <select
            value={courseCategory}
            onChange={(e) => setCourseCategory(e.target.value)}
            required
          >
            <option value="">Chọn danh mục</option>
            <option value="Nghe">Nghe</option>
            <option value="Nói">Nói</option>
            <option value="Đọc">Đọc</option>
            <option value="Viết">Viết</option>
            <option value="Topik">Topik</option>
          </select>
          <input
            type="number"
            placeholder="Giá khóa học"
            value={coursePrice}
            onChange={(e) => setCoursePrice(e.target.value)}
            required
          />
          <select
            value={courseType}
            onChange={(e) => setCourseType(e.target.value)}
            required
          >
            <option value="online">Khóa học trực tuyến</option>
            <option value="video">Khóa học video thu sẵn</option>
          </select>

          {/* Hiển thị input khác nhau tùy theo loại khóa học */}
          {courseType === 'online' && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          )}

          {courseType === 'video' && (
            <input
              type="file"
              accept="video/*"
              multiple
              onChange={handleVideoChange}
              required
            />
          )}
        </form>
        <div className="buttonCouse-container">
          <button type="submit" className="create-course-button" onClick={handleSubmit}>
            Lưu khóa học
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePage;
