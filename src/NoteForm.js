import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);

    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addNote(title, content){
        let itemNote = {}
        itemNote.title = title;
        itemNote.content = content;
        this.props.addNoteData(itemNote)
    }

    render() {
        return (
            <div className="col-4">
                <h3>Note List</h3>
                <form>
                    <div className="form-group">
                        <label >Note title</label>
                        <input onChange={(event) => this.isChange(event)} type="text" name='title' id='title'
                            className="form-control" placeholder='title' aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label >Note title</label>
                        <textarea onChange={(event) => this.isChange(event)} type="text" name='content' id='content'
                            className="form-control" placeholder='content' aria-describedby="helpId" />
                    </div>
                    <button type="reset" onClick={()=>this.addNote(this.state.title, this.state.content)}
                    
                    className="btn btn-primary btn-block">Save</button>
                </form>
            </div>
        );
    } 
}

const mapStateToProps = (state, ownProps) => {
    return {
        testNote: state.testNote
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNoteData: (item) => {
            dispatch({type:"ADD_NOTE", item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);