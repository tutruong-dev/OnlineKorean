
import React from 'react';

function RestoreAccount()
{
    return(
        <><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Tiếp tục</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Khôi phục mật khẩu</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Nhập OTP đã gửi ở email bạn vừa nhập</label>
                                <input type="text" class="form-control" id="recipient-name"/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>    
                        <button type="button" class="btn btn-primary" href="./Login.js">Khôi phục</button>                   
                    </div>
                </div>
            </div>
        </div></>
    );
}
export default RestoreAccount;