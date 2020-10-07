import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="note1">
                            Ghi chú 1
                                </a>

                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info">Sửa</button>
                            <button className="btn btn-outline-danger">Xóa</button>
                        </div>
                    </h5>
                </div>
                <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        lorem 1
                            </div>
                </div>
            </div>
        );
    }
}

export default NoteItem;