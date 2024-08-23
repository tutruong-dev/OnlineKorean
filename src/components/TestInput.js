import React from "react";

const TestInput = () => {
    return(
        <div className="input-survey-container">
            <h1>Bài test đầu vào</h1>
            <div className="test-questions">
                <h2>※ [1～2]다음을 듣고 (보기)와 같이 ( )에 알맞은 것을 고르십시오.
                </h2>
                <h3>1. ( )이에요.(3점)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="1" value="travel" />
                            발
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="1" value="marriage" />
                            말 
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="1" value="hobby" />
                            칼 
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="1" value="hobby" />
                            달
                        </label>
                    </div>
                </div>

                <h3>2. ( )가 있어요.(4점)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="2" value="study" />
                            기미
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="2" value="work" />
                            구미
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="2" value="travel" />
                            개미
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="2" value="marriage" />
                            거미
                        </label>
                    </div>
                </div>

                <h2>※ [3～6]다음을 듣고 (보기)와 같이 물음에 맞는 대답을 고르십시오. </h2>
                <h3>3. (3점)
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="3" value="study" />
                            네,구두가 커요
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="3" value="work" />
                            네,구두가 없어요.
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="3" value="travel" />
                            아니요,구두가 많아요. 
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="3" value="marriage" />
                            아니요,구두가 아니에요
                        </label>
                    </div>
                </div>

                <h3>4. (4점) </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="4" value="study" />
                            주말에 가요.
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="4" value="work" />
                            극장에 가요.
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="4" value="travel" />
                            친구가 가요

                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="4" value="marriage" />
                            걸어서 가요.
                        </label>
                    </div>
                </div>

                <h3>5. (3점)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="5" value="study" />
                            네,과자가 비싸요
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="5" value="work" />
                            네,과자가 있어요. 
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="5" value="travel" />
                            아니요,과자를 샀어요. 
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="5" value="marriage" />
                            아니요,과자를 안 좋아해요.
                        </label>
                    </div>
                </div>
                    <h3>6. (4점) </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                        <div style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input type="radio" name="6" value="study" />
                                두 명이에요. 
                            </label>
                        </div>
                        <div style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input type="radio" name="6" value="work" />
                                남동생이에요.
                            </label>
                        </div>
                        <div style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input type="radio" name="6" value="travel" />
                                한국에 있어요.
                            </label>
                        </div>
                        <div style={{ flex: '1 1 45%', margin: '5px'}}>
                            <label>
                                <input type="radio" name="6" value="marriage" />
                                가족을 만나요.
                            </label>
                        </div>
                    </div>

                <h2>※ [7～8]다음을 듣고 (보기)와 같이 다음 말에 이어지는 것을 고르십시오.(각 4점)</h2>
                <h3>7</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="7" value="study" />
                            괜찮습니다. 
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="7" value="work" />
                            반갑습니다.
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="7" value="travel" />
                            고맙습니다.
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="7" value="marriage" />
                            그렇습니다.
                        </label>
                    </div>
                </div>
                <h3>8</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="8" value="study" />
                            다음에 올게요.  
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="8" value="work" />
                            잘 다녀오세요.
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="8" value="travel" />
                            만나서 반가워요.
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="8" value="marriage" />
                            잠깐만 기다리세요.
                        </label>
                    </div>
                </div>
                <h2>※ [9～11]여기는 어디입니까?(보기)와 같이 알맞은 것을 고르십시오.</h2>
                <h3>9. (3점)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="9" value="study" />
                            교실 
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="9" value="work" />
                            시장
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="9" value="travel" />
                            빵집 
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="9" value="marriage" />
                            서점
                        </label>
                    </div>
                </div>
                <h3>10.(3점)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="10" value="study" />
                            호텔 
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="10" value="work" />
                            극장
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="10" value="travel" />
                            병원 
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="10" value="marriage" />
                            회사
                        </label>
                    </div>
                </div>
                <button className="testinput-button-container">Hoàn Thành Khảo Sát</button>
            </div>
        </div>
    )
}

export default TestInput;