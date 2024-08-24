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
    const correctCounts = {
      part1: 0,
      part2: 0,
      part3: 0
    };

    const part1Questions = [1, 2, 3, 4];
    const part2Questions = [5, 6, 7, 8];
    const part3Questions = [9, 10, 11, 12];

    part1Questions.forEach(id => {
      if (answers[id] === questions.find(q => q.id === id)?.correctAnswer) {
        correctCounts.part1++;
      }
    });

    part2Questions.forEach(id => {
      if (answers[id] === questions.find(q => q.id === id)?.correctAnswer) {
        correctCounts.part2++;
      }
    });

    part3Questions.forEach(id => {
      if (answers[id] === questions.find(q => q.id === id)?.correctAnswer) {
        correctCounts.part3++;
      }
    });

    const { part1, part2, part3 } = correctCounts;
    
    if (part1 >= 4 && part2 >= 4 && part3 >= 4) {
      return 3;
    } else if (part1 >= 4 && part2 >= 4) {
      return 2;
    } else if (part1 >= 4) {
      return 1; 
    } else {
      return 0; 
    }
  };

  const handleSubmit = () => {
    const result = calculateResults();
    alert(`Kết quả của bạn là TOPIK ${result}`);
  };

  return (
    <div className="input-Test-container">
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
          Hoàn Thành Bài Test
        </button>
      </div>
    </div>
  );
};

export default TestInput;
