import React, { useState } from 'react';
import Register from '../components/Login_Logout/Register';
import { db, collection, addDoc } from '../components/Firebase/firebaseconfig';

function RegisterPage() {
    const [users, setUsers] = useState([]);

    // Hàm để thêm người dùng vào Firestore
    const addUser = async (user) => {
        try {
            // Thêm tài liệu mới vào bộ sưu tập 'users'
            const docRef = await addDoc(collection(db, 'users'), {
                name: user.name,
                email: user.email,
                username: user.username,
                password: user.password, // Nếu bạn cần mã hóa mật khẩu, hãy thực hiện tại đây
            });
            console.log('User added with ID: ', docRef.id);

            // Cập nhật danh sách người dùng trong state
            setUsers([...users, user]);
        } catch (e) {
            console.error('Error adding user: ', e);
        }
    };

    return (
        <div className="ResgisterPage-page">
            <Register addUser={addUser} />
        </div>
    );
}

export default RegisterPage;
