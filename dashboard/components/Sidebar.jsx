const { useState } = React;

window.Sidebar = function Sidebar({ config, selectedTask, onTaskSelect }) {
    // Initialize expanded state for all category groups and categories
    const initialExpandedState = {};
    config.categoryGroups.forEach(group => {
        initialExpandedState[group.id] = true;
        group.categories.forEach(cat => {
            initialExpandedState[cat.id] = true;
        });
    });

    const [expandedItems, setExpandedItems] = useState(initialExpandedState);

    const toggleItem = (itemId) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    return (
        <div className="sidebar">
            <div
                className="sidebar-header"
                onClick={() => onTaskSelect(null)}
                style={{ cursor: 'pointer' }}
            >
                <h1>Developer AI Preferences</h1>
                <p>Research Dashboard</p>
            </div>

            {config.categoryGroups.map(group => (
                <div key={group.id} className="category-group">
                    <div
                        className="group-header"
                        onClick={() => toggleItem(group.id)}
                    >
                        {expandedItems[group.id] ? '▼' : '▶'} {group.name}
                    </div>

                    {expandedItems[group.id] && group.categories.map(category => (
                        <div key={category.id} className="category">
                            <div
                                className="category-header"
                                onClick={() => toggleItem(category.id)}
                            >
                                {expandedItems[category.id] ? '▼' : '▶'} {category.name}
                            </div>

                            {expandedItems[category.id] && (
                                <ul className="task-list">
                                    {category.tasks.map(task => (
                                        <li
                                            key={task.id}
                                            className={`task-item ${selectedTask?.id === task.id ? 'active' : ''}`}
                                            onClick={() => onTaskSelect(task)}
                                        >
                                            {task.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
