import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector, useDispatch } from 'react-redux';
import { MoveTask } from '../TodoCounterSlice/TodoCounterSlice'; // Import the MoveTask action

const ItemType = 'TASK';

// Draggable Task Component
function Task({ task }) {
    const [, dragRef] = useDrag({
        type: ItemType,
        item: { id: task.id, stage: task.stage },
    });

    return (
        <div
            ref={dragRef}
            className="p-3 mb-2 border rounded shadow-sm bg-white"
        >
            <strong>{task.title}</strong>
            <p className="text-dark">{task.description}</p>
        </div>
    );
}

// Droppable Stage Component
function Stage({ stage, tasks, moveTask }) {
    const [, dropRef] = useDrop({
        accept: ItemType,
        drop: (item) => {
            if (item.stage !== stage) {
                moveTask(item.id, stage);
            }
        },
    });

    return (
        <div
            ref={dropRef}
            className="min-vh-50 p-3 bg-light rounded shadow-sm"
        >
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}

function TodoThreeStages() {
    const tasks = useSelector((state) => state.Data.Tasks); // Update selector to match your slice name
    const dispatch = useDispatch();

    // Organize tasks into stages
    const stages = {
        todo: tasks.filter((task) => task.stage === 'todo'),
        'in-process': tasks.filter((task) => task.stage === 'in-process'),
        complete: tasks.filter((task) => task.stage === 'complete'),
    };

    // Function to move a task to a new stage
    const moveTask = (taskId, newStage) => {
        dispatch(MoveTask({ id: taskId, newStage })); // Use the MoveTask action from the slice
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="container-fluid">
                <div className="row">
                    {Object.keys(stages).map((stage) => (
                        <div key={stage} className="col-12 col-md-4">
                            <div className="card">
                                <div
                                    className={`card-header ${
                                        stage === 'todo'
                                            ? 'bg-info'
                                            : stage === 'in-process'
                                            ? 'bg-warning'
                                            : 'bg-success'
                                    } text-black`}
                                >
                                    <h5>
                                        {stage === 'todo'
                                            ? 'TODO'
                                            : stage === 'in-process'
                                            ? 'In Process'
                                            : 'Complete'}
                                    </h5>
                                </div>
                                <Stage
                                    stage={stage}
                                    tasks={stages[stage]}
                                    moveTask={moveTask}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DndProvider>
    );
}

export default TodoThreeStages;
