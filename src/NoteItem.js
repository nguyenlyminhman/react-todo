import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#note" + this.props.id} aria-expanded="true" aria-controls="noteContent">
                            {this.props.title}
                        </a>

                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info">Sửa</button>
                            <button className="btn btn-outline-danger">Xóa</button>
                        </div>
                    </h5>
                </div>
                <div id={"note" + this.props.id} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteItem;