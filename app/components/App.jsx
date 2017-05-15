import React from 'react'
import Notes from './Notes'
import uuid from 'uuid'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        };
        this.addNote = this.addNote.bind(this);
    }
    render() {
        return(
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes notes={this.state.notes} />
            </div>
        );
    }
    addNote() {
        /** It would be possible to write this function in an imperative style.
         * I.e. through 'this.state.notes.push' and then
         * 'this.setState({notes: this.state.note})' to commit.
         * 
         * The instructor tends to favor functional style whenever it makes sense.
         * Even though it might take more code sometimes, the benefits (easy to understand, no side effects)
         * more than make up for it.
         * 
         * Libraries, such as Immutable.js take this idea further.
         */
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New Task'
            }])
        });
    }
}