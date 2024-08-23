import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import RestoreAccount from './RestoreAccount.js';

function ForgetPass()
{
    return(
        <><a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Có phải bạn quên mật khẩu?</a>
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
                                <label for="recipient-name" class="col-form-label">Nhập email của bạn để khôi phục mật khẩu</label>
                                <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <RestoreAccount/>
                    </div>
                </div>
            </div>
        </div></>
    );
}
export default ForgetPass;