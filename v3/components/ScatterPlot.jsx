const { useState } = React;

Explorer.ScatterPlot = function ScatterPlot({ onPointClick, highlightedCategory, onCategoryHover, hoveredTask }) {
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [activePayload, setActivePayload] = useState(null);
  const [activeCoordinate, setActiveCoordinate] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  if (!window.Recharts) return <div style={{ padding: 40, textAlign: 'center', color: '#78716c' }}>Loading chart...</div>;

  const { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ReferenceDot, Label } = window.Recharts;
  const categories = ['Development', 'Quality-Risk', 'Design-Planning', 'Infra-Ops', 'Meta-work'];
  const meta = window.categoryMeta;
  const data = window.chartData || [];
  const size = 780;

  const dataByCategory = categories.reduce((acc, c) => { acc[c] = data.filter(d => d.category === c); return acc; }, {});

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div className="scatter-tooltip">
          <p className="scatter-tooltip-task">{d.fullName}</p>
          <p className="scatter-tooltip-category">{meta[d.category]?.label}</p>
          <p className="scatter-tooltip-data">Support: {d.z_support.toFixed(2)} · Usage: {d.z_usage.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  const PointWithLabel = (props) => {
    const { cx, cy, payload, fill } = props;
    if (typeof cx !== 'number' || typeof cy !== 'number' || !payload) return null;
    const offset = payload.labelOffset || { dx: 0, dy: -16 };
    const dim = highlightedCategory && highlightedCategory !== payload.category;
    const isHovered = hoveredTask && hoveredTask === payload.task;
    const r = isHovered ? 10 : 7;
    return (
      <g style={{ opacity: dim ? 0.2 : 1, transition: 'opacity 0.25s', cursor: 'pointer' }}>
        <circle cx={cx} cy={cy} r={r} fill={fill} stroke={isHovered ? '#1c1917' : 'white'} strokeWidth={isHovered ? 3 : 2} />
        <text x={cx + offset.dx} y={cy + offset.dy} fill="#44403c" fontSize={11} fontWeight={isHovered ? 700 : 400} fontFamily="Outfit, sans-serif" textAnchor="middle" dominantBaseline="middle" style={{ pointerEvents: 'none' }}>{payload.task}</text>
      </g>
    );
  };

  return (
    <div className="scatter-panel">
      <div className="scatter-intro">
        <h3>Openness vs. Usage</h3>
        <p>Click a data point for detailed analysis. Hover categories to filter.</p>
      </div>
      <div className="legend-bar">
        {categories.map(c => (
          <div key={c} className={`legend-chip${highlightedCategory === c ? ' legend-chip-active' : ''}`}
            style={highlightedCategory === c ? { color: meta[c]?.color, borderColor: meta[c]?.color } : {}}
            onMouseEnter={() => onCategoryHover && onCategoryHover(c)}
            onMouseLeave={() => onCategoryHover && onCategoryHover(null)}>
            <div className="legend-chip-dot" style={{ background: meta[c]?.color }} />
            {meta[c]?.label}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ScatterChart width={size} height={size} margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
          onMouseMove={s => { if (isLocked) return; if (s?.isTooltipActive) { setIsTooltipActive(true); setActivePayload(s.activePayload); setActiveCoordinate(s.activeCoordinate); } else { setIsTooltipActive(false); setActivePayload(null); setActiveCoordinate(null); } }}
          onMouseLeave={() => { setIsTooltipActive(false); setActivePayload(null); setActiveCoordinate(null); }}
          onMouseEnter={() => setIsLocked(false)}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis type="number" dataKey="z_support" domain={[-2, 2]} stroke="#a8a29e" tick={{ fill: '#78716c', fontSize: 11, fontFamily: 'JetBrains Mono' }}>
            <Label value="Openness to AI support (z-score)" position="bottom" offset={20} style={{ fill: '#78716c', fontSize: 13, fontFamily: 'Outfit' }} />
          </XAxis>
          <YAxis type="number" dataKey="z_usage" domain={[-2, 2]} stroke="#a8a29e" tick={{ fill: '#78716c', fontSize: 11, fontFamily: 'JetBrains Mono' }}>
            <Label value="Current AI usage (z-score)" angle={-90} position="middle" offset={25} style={{ fill: '#78716c', fontSize: 13, fontFamily: 'Outfit' }} />
          </YAxis>
          <ReferenceLine x={0} stroke="#d6d3d1" strokeDasharray="5 5" />
          <ReferenceLine y={0} stroke="#d6d3d1" strokeDasharray="5 5" />
          <ReferenceDot x={-1} y={0.5} r={0} label={{ value: "SUSTAIN", fill: "#d6d3d1", fontSize: 20, fontWeight: 600, fontFamily: 'Outfit' }} />
          <ReferenceDot x={1} y={0.5} r={0} label={{ value: "IMPROVE", fill: "#d6d3d1", fontSize: 20, fontWeight: 600, fontFamily: 'Outfit' }} />
          <ReferenceDot x={-1} y={-1.7} r={0} label={{ value: "DE-PRIORITIZE", fill: "#d6d3d1", fontSize: 20, fontWeight: 600, fontFamily: 'Outfit' }} />
          <ReferenceDot x={1} y={-1.7} r={0} label={{ value: "BUILD", fill: "#d6d3d1", fontSize: 20, fontWeight: 600, fontFamily: 'Outfit' }} />
          <Tooltip active={isTooltipActive} payload={activePayload} coordinate={activeCoordinate} content={<CustomTooltip />} isAnimationActive={false} />
          {categories.map(c => <Scatter key={c} data={dataByCategory[c]} fill={meta[c]?.color} shape={<PointWithLabel />} onClick={d => { setIsTooltipActive(false); setIsLocked(true); onPointClick && onPointClick(d); }} isAnimationActive={false} size={300} />)}
        </ScatterChart>
      </div>
    </div>
  );
};
