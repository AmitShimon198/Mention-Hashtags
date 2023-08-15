import React, { useState, useCallback, useMemo, FunctionComponent, useEffect } from 'react';

type Task = {
    id: number;
    title: string;
    completed: boolean;
};
export enum Permissions {
    READ = "READ",
    Write = "WRITE",
}
type Props = {
    userId: string;
    permission: Permissions;
}
const usersTasks: any = {
    '1': [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: false },
        { id: 3, title: 'Task 3', completed: false },
        { id: 4, title: 'Task 4', completed: false },
    ]
}
// Simple example assuming we receiving props that are not related to the component computation
const UseCallbackUseMemoExample: FunctionComponent<Props> = ({ userId, permission }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    useEffect(() => {
        // we will imagine that here we will fire get request to the server
        setTasks(usersTasks[userId])
    }, [userId])
    const completedTasks = useMemo(() => {
        //if we will not use memo on each render we will recompute the completed Tasks
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

    const canModify = permission === Permissions.Write;
    return (
        <>
            <h2>Completed Tasks: {completedTasks.length}</h2>
            {/**If this is a heavy list we will consider to optimize to part to, but for the simple example its ok :) */}
            {tasks.map(task => (
                <button disabled={!canModify} key={task.id} onClick={() => toggleCompletion(task.id)}>
                    {task.title} - Click to {task.completed ? 'completed' : 'incomplete'}
                </button>
            ))}
        </>
    );
};

export default UseCallbackUseMemoExample;
