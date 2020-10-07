import { NoteData } from './FirebaseConfig';
import React, { Component } from 'react';
import NoteItem from './NoteItem';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteItem: []
        }
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        NoteData.on('value', (note) => {
            let arrData = [];
            note.forEach(ele => {
                arrData.push({
                    id: ele.key,
                    title: ele.val().title,
                    content: ele.val().content
                })
            });
            this.setState({
                noteItem: arrData
            })
        })
    }

    getData = () => {
        return this.state.noteItem.map((val, key) => {
            return <NoteItem key={key} id={val.id} title={val.title} content={val.content} />
        })
    }

    render() {
        return (
            <div className="col">
                <div className="mt-4" id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
        );
    }
}

export default NoteList;