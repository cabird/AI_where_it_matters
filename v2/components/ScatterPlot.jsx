const { useState, useRef } = React;

Observatory.ScatterPlot = function ScatterPlot({ onPointClick, onCategoryHover, highlightedCategory }) {
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [activePayload, setActivePayload] = useState(null);
  const [activeCoordinate, setActiveCoordinate] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  if (!window.Recharts) {
    return <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>Loading chart...</div>;
  }

  const { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ReferenceDot, Label } = window.Recharts;

  const categories = ['Development', 'Quality-Risk', 'Design-Planning', 'Infra-Ops', 'Meta-work'];
  const meta = window.categoryMeta;
  const data = window.chartData || [];
  const chartSize = 800;
  const pointSize = 8;

  const dataByCategory = categories.reduce((acc, cat) => {
    acc[cat] = data.filter(d => d.category === cat);
    return acc;
  }, {});

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div className="scatter-tooltip">
          <p className="scatter-tooltip-task">{d.fullName}</p>
          <p className="scatter-tooltip-category">{meta[d.category]?.label || d.category}</p>
          <p className="scatter-tooltip-data">
            Support: {d.z_support.toFixed(2)} · Usage: {d.z_usage.toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  const PointWithLabel = (props) => {
    const { cx, cy, payload, fill } = props;
    if (typeof cx !== 'number' || typeof cy !== 'number' || !payload) return null;

    const { task, category, labelOffset } = payload;
    const offset = labelOffset || { dx: 0, dy: -16 };
    const isHighlighted = !highlightedCategory || highlightedCategory === category;
    const opacity = isHighlighted ? 1 : 0.2;

    return (
      <g style={{ opacity, transition: 'opacity 0.3s ease' }}>
        <circle cx={cx} cy={cy} r={pointSize} fill={fill} stroke="white" strokeWidth={1.5} />
        <text
          x={cx + offset.dx}
          y={cy + offset.dy}
          fill="#1a1d25"
          fontSize={11}
          fontFamily="IBM Plex Sans, sans-serif"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ pointerEvents: 'none' }}
        >
          {task}
        </text>
      </g>
    );
  };

  const handleClick = (d) => {
    setIsTooltipActive(false);
    setIsLocked(true);
    if (onPointClick) onPointClick(d);
  };

  const handleMouseMove = (state) => {
    if (isLocked) return;
    if (state && state.isTooltipActive) {
      setIsTooltipActive(true);
      setActivePayload(state.activePayload);
      setActiveCoordinate(state.activeCoordinate);
    } else {
      setIsTooltipActive(false);
      setActivePayload(null);
      setActiveCoordinate(null);
    }
  };

  return (
    <div>
      <div className="legend-container">
        {categories.map(cat => (
          <div
            key={cat}
            className="legend-item"
            style={{ cursor: 'pointer', opacity: (!highlightedCategory || highlightedCategory === cat) ? 1 : 0.4 }}
            onMouseEnter={() => onCategoryHover && onCategoryHover(cat)}
            onMouseLeave={() => onCategoryHover && onCategoryHover(null)}
          >
            <div className="legend-dot" style={{ background: meta[cat]?.color }} />
            <span>{meta[cat]?.label || cat}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ScatterChart
          width={chartSize}
          height={chartSize}
          margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { setIsTooltipActive(false); setActivePayload(null); setActiveCoordinate(null); }}
          onMouseEnter={() => setIsLocked(false)}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
          <XAxis type="number" dataKey="z_support" name="Openness" domain={[-2, 2]} stroke="#4a5061" tick={{ fill: '#4a5061', fontSize: 11, fontFamily: 'IBM Plex Mono' }}>
            <Label value="Openness to AI support (z-score)" position="bottom" offset={20} style={{ fill: '#4a5061', fontSize: 13, fontFamily: 'IBM Plex Sans' }} />
          </XAxis>
          <YAxis type="number" dataKey="z_usage" name="Usage" domain={[-2, 2]} stroke="#4a5061" tick={{ fill: '#4a5061', fontSize: 11, fontFamily: 'IBM Plex Mono' }}>
            <Label value="Current AI usage (z-score)" angle={-90} position="middle" offset={25} style={{ fill: '#4a5061', fontSize: 13, fontFamily: 'IBM Plex Sans' }} />
          </YAxis>
          <ReferenceLine x={0} stroke="#9ca3af" strokeDasharray="5 5" strokeWidth={1} />
          <ReferenceLine y={0} stroke="#9ca3af" strokeDasharray="5 5" strokeWidth={1} />
          <ReferenceDot x={-1} y={0.5} r={0} label={{ value: "SUSTAIN", fill: "#9ca3af", fontSize: 22, fontWeight: 600, opacity: 0.35, fontFamily: 'IBM Plex Sans' }} />
          <ReferenceDot x={1} y={0.5} r={0} label={{ value: "IMPROVE", fill: "#9ca3af", fontSize: 22, fontWeight: 600, opacity: 0.35, fontFamily: 'IBM Plex Sans' }} />
          <ReferenceDot x={-1} y={-1.7} r={0} label={{ value: "DE-PRIORITIZE", fill: "#9ca3af", fontSize: 22, fontWeight: 600, opacity: 0.35, fontFamily: 'IBM Plex Sans' }} />
          <ReferenceDot x={1} y={-1.7} r={0} label={{ value: "BUILD", fill: "#9ca3af", fontSize: 22, fontWeight: 600, opacity: 0.35, fontFamily: 'IBM Plex Sans' }} />
          <Tooltip active={isTooltipActive} payload={activePayload} coordinate={activeCoordinate} content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} isAnimationActive={false} />
          {categories.map(cat => (
            <Scatter key={cat} name={cat} data={dataByCategory[cat]} fill={meta[cat]?.color} shape={<PointWithLabel />} onClick={handleClick} isAnimationActive={false} size={300} />
          ))}
        </ScatterChart>
      </div>
    </div>
  );
};
