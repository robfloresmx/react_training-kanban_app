import React from 'react'
import Note from './Note'

export default({notes, onDelete=() => {}}) => (
    <ul>
        {notes.map(note=>
            <li key={note.id}>
                <Note 
                onDelete={onDelete.bind(null, note.id)}
                task={note.task} />
            </li>
        )}
    </ul>
)