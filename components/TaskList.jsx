const { useState } = React;
const { Icon } = Explorer;

Explorer.TaskList = function TaskList({ onTaskClick, hoveredTask, onTaskHover }) {
  const data = window.chartData || [];
  const meta = window.categoryMeta;
  const categories = ['Development', 'Quality-Risk', 'Design-Planning', 'Infra-Ops', 'Meta-work'];

  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = data.filter(d => d.category === cat);
    return acc;
  }, {});

  const [expandedCat, setExpandedCat] = useState('Development');

  return (
    <div className="task-list-panel">
      <div className="task-list-header">
        <Icon name="FileText" size={14} style={{ marginRight: 6 }} />
        <span>Task Reports</span>
      </div>
      <div className="task-list-hint">Click any task to read its qualitative analysis</div>
      <div className="task-list-body">
        {categories.map(cat => (
          <div key={cat} className="task-list-group">
            <button
              className={`task-list-cat${expandedCat === cat ? ' task-list-cat-open' : ''}`}
              onClick={() => setExpandedCat(expandedCat === cat ? null : cat)}
              style={{ '--cat-color': meta[cat]?.color }}
            >
              <span className="task-list-cat-dot" style={{ background: meta[cat]?.color }} />
              <span className="task-list-cat-label">{meta[cat]?.label}</span>
              <span className="task-list-cat-count">{grouped[cat]?.length}</span>
              <Icon name={expandedCat === cat ? 'ChevronDown' : 'ChevronRight'} size={13} color="var(--text-400)" />
            </button>
            {expandedCat === cat && grouped[cat]?.map(task => (
              <button
                key={task.task}
                className={`task-list-item${hoveredTask === task.task ? ' task-list-item-hover' : ''}`}
                onClick={() => onTaskClick(task)}
                onMouseEnter={() => onTaskHover && onTaskHover(task.task)}
                onMouseLeave={() => onTaskHover && onTaskHover(null)}
              >
                <span className="task-list-item-name">{task.fullName}</span>
                <Icon name="ArrowRight" size={12} className="task-list-item-arrow" />
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
