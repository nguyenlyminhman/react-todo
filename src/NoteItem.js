import React, { Component } from 'react';
import { connect } from 'react-redux';


class NoteItem extends Component {
    editNote = () => {
        this.props.editNoteData();
        this.props.getEditNoteData(this.props.noteInfo)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#note" + this.props.id} aria-expanded="true" aria-controls="noteContent">
                            {this.props.title}
                        </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info" onClick={() => this.editNote()}>Sửa</button>
                            <button className="btn btn-outline-danger">Xóa</button>
                        </div>
                    </h5>
                </div>
                <div id={"note" + this.props.id} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit,
        editItem: state.editItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editNoteData: (item) => {
            dispatch({ type: "EDIT_NOTE", item })
        },
        getEditNoteData: (objEdit) => {
            dispatch({ type: "GET_EDIT_NOTE", objEdit })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);