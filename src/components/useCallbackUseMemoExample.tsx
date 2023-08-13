import React, { useState, useCallback, useMemo, FunctionComponent, useEffect } from 'react';

type Task = {
    id: number;
    title: string;
    completed: boolean;
};
type Props = {
    userId: string
}
const usersTasks: any = {
    '1': [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: false },
        { id: 3, title: 'Task 3', completed: false },
        { id: 4, title: 'Task 4', completed: false },
    ]
}
// Simple example assuming we receiving props that are not related to the component state
const UseCallbackUseMemoExample: FunctionComponent<Props> = ({ userId }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    useEffect(() => {
        // we will imagine that here we will fire get request to the server
        setTasks(usersTasks[userId])
    }, [userId])
    const completedTasks = useMemo(() => {
        //if we will not use memo on each render we will generate new list
        return tasks.filter(task => task.completed);
    }, [tasks]);

    const toggleCompletion = useCallback((id: number) => {
        //to avoid reference change between renders
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }, []);

    return (
        <>
            <h2>Completed Tasks: {completedTasks.length}</h2>
            {tasks.map(task => (
                <button key={task.id} onClick={() => toggleCompletion(task.id)}>
                    {task.title} - Click to {task.completed ? 'completed' : 'incomplete'}
                </button>
            ))}
        </>
    );
};

export default UseCallbackUseMemoExample;
