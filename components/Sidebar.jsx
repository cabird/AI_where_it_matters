const { useState } = React;

window.Sidebar = function Sidebar({ config, onTaskClick }) {
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
                style={{ cursor: 'default' }}
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
                                    {category.tasks.map(task => {
                                        // Find matching task data from chartData to get full data for modal
                                        const taskData = window.chartData?.find(ct =>
                                            ct.task.toLowerCase().includes(task.name.toLowerCase().split(' ')[0]) ||
                                            task.name.toLowerCase().includes(ct.task.toLowerCase())
                                        );

                                        return (
                                            <li
                                                key={task.id}
                                                className="task-item"
                                                onClick={() => taskData && onTaskClick(taskData)}
                                            >
                                                {task.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
