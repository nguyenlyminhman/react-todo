import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editItem: {}
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addNote(title, content) {
        let itemNote = {}
            itemNote.title = title;
            itemNote.content = content;
        if (this.state.editItem.id) {
            itemNote.id = this.state.editItem.id
            this.props.editNoteData(itemNote)
        } else {
            this.props.addNoteData(itemNote)
        }

    }

    cancel = () => {
        this.props.cancelNoteForm()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            editItem: nextProps.editItem
        })
    }
    componentDidMount() {
        this.setState({
            editItem: this.props.editItem
        })
    }

    render() {
        return (
            <div className="col-4">
                <h3>Note Information</h3>
                <form>
                    <div className="form-group">
                        <label >Title</label>
                        <input onChange={(event) => this.isChange(event)} type="text" name='title' id='title'
                            defaultValue={this.state.editItem.title}
                            className="form-control" placeholder='title' aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label >Content</label>
                        <textarea onChange={(event) => this.isChange(event)} type="text" name='content' id='content'
                            defaultValue={this.state.editItem.content}
                            className="form-control" placeholder='content' aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <button type="reset" onClick={() => this.addNote(this.state.title, this.state.content)}
                            className="btn btn-outline-primary btn-block">Save</button>
                        <button type="reset" onClick={() => this.cancel()}
                            className="btn btn-outline-warning btn-block">Cancel</button>
                    </div>
                </form>
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
        cancelNoteForm: () => {
            dispatch({ type: "CANCEL_ADD_NOTE" })
        },
        addNoteData: (item) => {
            dispatch({ type: "ADD_NOTE", item })
        },
        editNoteData: (item) => {
            dispatch({ type: "EDITED_NOTE", item })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);