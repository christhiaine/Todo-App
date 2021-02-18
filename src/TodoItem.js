import { render } from '@testing-library/react';
import React from 'react';


export default function TodoList() {
        return(
            <div className="todo-item">
                <input type="checkbox" />
                <p>Placeholder text here</p>
            </div>
        );
}