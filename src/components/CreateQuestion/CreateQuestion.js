// src/QuestionForm.js
import React, { useState } from 'react';
import { db, collection, addDoc } from '../../components/Firebase/firebaseconfig';
import '../../index.css';

const QuestionForm = () => {
  const [questions, setQuestions] = useState('');
  const [options, setOptions] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tách dữ liệu dựa trên dấu phân cách
    const questionList = questions.split('\n').filter(q => q.trim() !== '');
    const optionList = options.split('\n').map(o => o.split(',').map(opt => opt.trim()).filter(opt => opt !== ''));
    const answerList = correctAnswers.split(',').map(a => a.trim()).filter(a => a !== '');

    try {
      // Gửi dữ liệu từng câu hỏi vào Firestore
      for (let i = 0; i < questionList.length; i++) {
        const newQuestionRef = collection(db, 'questions'); // Sử dụng collection thay cho db.collection
        const questionText = questionList[i];
        const optionsText = optionList[i] || [];
        const correctAnswer = answerList[i] || '';

        await addDoc(newQuestionRef, {
          question: questionText,
          options: optionsText,
          correctAnswer: correctAnswer
        });
      }

      // Xóa dữ liệu sau khi gửi
      setQuestions('');
      setOptions('');
      setCorrectAnswers('');
      alert('Câu hỏi đã được thêm thành công!');
    } catch (error) {
      console.error('Lỗi khi thêm câu hỏi:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <div className="question-form-container">
      <h1>Nhập Câu Hỏi</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Câu hỏi (Mỗi câu hỏi trên một dòng):</label>
          <textarea
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            rows="5"
            required
          />
        </div>
        <div>
          <label>Tùy chọn (Mỗi câu hỏi có các tùy chọn trên một dòng, phân cách bằng dấu phẩy):</label>
          <textarea
            value={options}
            onChange={(e) => setOptions(e.target.value)}
            rows="5"
            required
          />
        </div>
        <div>
          <label>Đáp án đúng (Nhập đáp án đúng cho mỗi câu hỏi, phân cách bằng dấu phẩy):</label>
          <input
            type="text"
            value={correctAnswers}
            onChange={(e) => setCorrectAnswers(e.target.value)}
            required
          />
        </div>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
};

export default QuestionForm;
