// src/TestInput.js
import React, { useState, useEffect } from 'react';
import { db, collection, getDocs } from '../components/Firebase/firebaseconfig';

const TestInput = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'questions'));
        const questionsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuestions(questionsData);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu câu hỏi:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleChange = (questionId, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value
    }));
  };

  const calculateResults = () => {
    let topik = 0;
    const totalQuestions = questions.length; // 10 câu hỏi
    const numParts = 2; // 2 phần
    const questionsPerPart = totalQuestions / numParts; // 5 câu hỏi mỗi phần
    let correctCounts = Array(numParts).fill(0);
    let totalCounts = Array(numParts).fill(0);
  
    questions.forEach(q => {
      const partIndex = Math.floor((q.id - 1) / questionsPerPart); // Chia phần
      console.log(`Question ID: ${q.id}, Answer: ${answers[q.id]}, Correct Answer: ${q.correctAnswer}`); // Debugging
  
      if (answers[q.id] === q.correctAnswer) {
        correctCounts[partIndex]++;
      }
      totalCounts[partIndex]++;
    });
  
    for (let i = 0; i < numParts; i++) {
      const percentage = (correctCounts[i] / totalCounts[i]) * 100;
      console.log(`Part ${i + 1}: ${correctCounts[i]} correct out of ${totalCounts[i]} total - Percentage: ${percentage}%`); // Debugging
      if (percentage >= 60) {
        topik++;
      }
    }
  
    return topik;
  };

  const handleSubmit = () => {
    const result = calculateResults();
    alert(`Kết quả của bạn là TOPIK ${result}`);
  };

  return (
    <div className="input-survey-container">
      <h1>Bài test đầu vào</h1>
      <div className="test-questions">
        {questions.map(q => (
          <div key={q.id}>
            <h3>{q.question}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
              {q.options.map(option => (
                <div key={option} style={{ flex: '1 1 45%', margin: '5px' }}>
                  <label>
                    <input
                      type="radio"
                      name={q.id}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={() => handleChange(q.id, option)}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="testinput-button-container" onClick={handleSubmit}>
          Hoàn Thành Khảo Sát
        </button>
      </div>
    </div>
  );
};

export default TestInput;
