// Interactive scatter plot component using Recharts
window.ScatterPlot = function ScatterPlot({ onPointClick, isModalOpen }) {
  const { useState, useEffect, useRef } = React;
  const containerRef = useRef(null);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [activePayload, setActivePayload] = useState(null);
  const [activeCoordinate, setActiveCoordinate] = useState(null);
  const [isInteractionLocked, setIsInteractionLocked] = useState(false);

  // Check if Recharts is loaded
  if (!window.Recharts) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading chart library...</div>;
  }

  const { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ReferenceDot, Label, ResponsiveContainer, Symbols } = window.Recharts;

  // Fixed size
  const chartSize = 900;

  // Category colors - professional, aesthetic-friendly
  const categoryColors = {
    'Development': '#4A90E2',
    'Quality-Risk': '#50C878',
    'Design-Planning': '#F5A623',
    'Infra-Ops': '#9B59B6',
    'Meta-work': '#E74C3C'
  };

  // Category shapes (using Recharts shape types)
  const categoryShapes = {
    'Development': 'circle',
    'Quality-Risk': 'square',
    'Design-Planning': 'triangle',
    'Infra-Ops': 'diamond',
    'Meta-work': 'wye'
  };

  // Get data from window.chartData
  const data = window.chartData || [];

  // Group data by category for multiple Scatter components
  const categories = ['Development', 'Quality-Risk', 'Design-Planning', 'Infra-Ops', 'Meta-work'];

  const dataByCategory = categories.reduce((acc, category) => {
    acc[category] = data.filter(d => d.category === category);
    return acc;
  }, {});

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="scatter-tooltip">
          <p className="scatter-tooltip-task">{data.fullName}</p>
          <p className="scatter-tooltip-category">Category: {data.category}</p>
          <p className="scatter-tooltip-data">
            Support: {data.z_support.toFixed(2)}, Usage: {data.z_usage.toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  // Handle chart mouse movement
  const handleChartMouseMove = (state) => {
    // If interaction is locked by a click, ignore mouse movements
    if (isInteractionLocked) {
      return;
    }

    // Normal tooltip activation logic
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

  // Handle chart mouse leave
  const handleChartMouseLeave = () => {
    setIsTooltipActive(false);
    setActivePayload(null);
    setActiveCoordinate(null);
  };

  // Handle chart mouse enter - reset the interaction lock
  const handleChartMouseEnter = () => {
    setIsInteractionLocked(false);
  };

  // Custom shape renderer that includes the label
  const PointWithLabel = (props) => {
    const { cx, cy, payload, fill } = props;

    if (typeof cx !== 'number' || typeof cy !== 'number' || !payload) {
      return null;
    }

    const { task, category, labelOffset } = payload;
    const shapeType = categoryShapes[category];
    const offset = labelOffset || { dx: 10, dy: 10 };

    // Define size explicitly in pixels
    const pointSize = 8;

    const renderShape = () => {
      const shapeProps = { fill, stroke: 'white', strokeWidth: 1 };

      switch (shapeType) {
        case 'circle':
          return <circle cx={cx} cy={cy} r={pointSize} {...shapeProps} />;
        case 'square':
          return (
            <rect
              x={cx - pointSize}
              y={cy - pointSize}
              width={pointSize * 2}
              height={pointSize * 2}
              {...shapeProps}
            />
          );
        case 'triangle':
          const h = pointSize * Math.sqrt(3);
          const points = `${cx},${cy - (h * 2) / 3} ${cx - pointSize},${cy + h / 3} ${cx + pointSize},${cy + h / 3}`;
          return <polygon points={points} {...shapeProps} />;
        case 'diamond':
          const diamondPoints = `${cx},${cy - pointSize} ${cx + pointSize},${cy} ${cx},${cy + pointSize} ${cx - pointSize},${cy}`;
          return <polygon points={diamondPoints} {...shapeProps} />;
        case 'wye':
          // Pentagon shape
          const pentagonPoints = [];
          for (let i = 0; i < 5; i++) {
            const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2; // Start from top
            const x = cx + pointSize * Math.cos(angle);
            const y = cy + pointSize * Math.sin(angle);
            pentagonPoints.push(`${x},${y}`);
          }
          return <polygon points={pentagonPoints.join(' ')} {...shapeProps} />;
        default:
          return <circle cx={cx} cy={cy} r={pointSize} {...shapeProps} />;
      }
    };

    return (
      <g>
        {renderShape()}
        <text
          x={cx + offset.dx}
          y={cy + offset.dy}
          fill="#1a202c"
          fontSize="12"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ pointerEvents: 'none' }}
        >
          {task}
        </text>
      </g>
    );
  };

  // Handle point click
  const handleClick = (data) => {
    // Immediately hide the tooltip
    setIsTooltipActive(false);
    // Lock the interaction to prevent re-activation from onMouseMove
    setIsInteractionLocked(true);
    if (onPointClick) {
      onPointClick(data);
    }
  };

  // Render legend shape
  const renderLegendShape = (shapeType, color, size = 10) => {
    const half = size / 2;
    const shapeProps = { fill: color, stroke: 'white', strokeWidth: 1 };

    switch (shapeType) {
      case 'circle':
        return <circle cx={half} cy={half} r={half} {...shapeProps} />;
      case 'square':
        return <rect x={0} y={0} width={size} height={size} {...shapeProps} />;
      case 'triangle':
        const h = size * Math.sqrt(3) / 2;
        const points = `${half},0 ${size},${h} 0,${h}`;
        return <polygon points={points} {...shapeProps} />;
      case 'diamond':
        const diamondPoints = `${half},0 ${size},${half} ${half},${size} 0,${half}`;
        return <polygon points={diamondPoints} {...shapeProps} />;
      case 'wye':
        const pentagonPoints = [];
        for (let i = 0; i < 5; i++) {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          const x = half + half * Math.cos(angle);
          const y = half + half * Math.sin(angle);
          pentagonPoints.push(`${x},${y}`);
        }
        return <polygon points={pentagonPoints.join(' ')} {...shapeProps} />;
      default:
        return <circle cx={half} cy={half} r={half} {...shapeProps} />;
    }
  };

  return (
    <div ref={containerRef} style={{ width: chartSize + 'px', height: chartSize + 'px', background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 30px rgba(0, 0, 0, 0.1)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Custom Legend */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '100px',
        background: 'rgba(255, 255, 255, 0.95)',
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        padding: '10px 14px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 10
      }}>
        {categories.map((cat, idx) => (
          <div key={cat} style={{ display: 'flex', alignItems: 'center', marginBottom: idx < categories.length - 1 ? '8px' : '0' }}>
            <svg width="16" height="16" style={{ marginRight: '8px', flexShrink: 0 }}>
              {renderLegendShape(categoryShapes[cat], categoryColors[cat], 12)}
            </svg>
            <span style={{ fontSize: '13px', color: '#4a5568', whiteSpace: 'nowrap' }}>{cat}</span>
          </div>
        ))}
      </div>

      <ScatterChart
        key={isModalOpen ? 'modal-open' : 'modal-closed'}
        width={chartSize}
        height={chartSize}
        margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
        onMouseMove={handleChartMouseMove}
        onMouseLeave={handleChartMouseLeave}
        onMouseEnter={handleChartMouseEnter}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

        <XAxis
          type="number"
          dataKey="z_support"
          name="Openness to AI support"
          domain={[-2, 2]}
          stroke="#000"
          tick={{ fill: '#000' }}
        >
          <Label
            value="Openness to AI support (z-score)"
            position="bottom"
            offset={20}
            style={{ fill: '#000', fontSize: 14 }}
          />
        </XAxis>

        <YAxis
          type="number"
          dataKey="z_usage"
          name="Current AI usage"
          domain={[-2, 2]}
          stroke="#000"
          tick={{ fill: '#000' }}
        >
          <Label
            value="Current AI usage (z-score)"
            angle={-90}
            position="middle"
            offset={50}
            style={{ fill: '#000', fontSize: 14 }}
          />
        </YAxis>

        {/* Reference lines at zero */}
        <ReferenceLine x={0} stroke="#666" strokeDasharray="5 5" strokeWidth={1} />
        <ReferenceLine y={0} stroke="#666" strokeDasharray="5 5" strokeWidth={1} />

        {/* Quadrant labels using ReferenceDot for data coordinate positioning */}
        <ReferenceDot
          x={-1.0}
          y={0.2}
          r={0}
          label={{
            value: "SUSTAIN",
            position: "top",
            fill: "#6b7280",
            fontSize: 28,
            fontWeight: 600,
            opacity: 0.4,
            textAnchor: "bottom",
            dominantBaseline: "bottom"
          }}
        />
        <ReferenceDot
          x={1.0}
          y={0.2}
          r={0}
          label={{
            value: "IMPROVE",
            position: "top",
            fill: "#6b7280",
            fontSize: 28,
            fontWeight: 600,
            opacity: 0.4,
            textAnchor: "bottom",
            dominantBaseline: "bottom"
          }}
        />
        <ReferenceDot
          x={-1.0}
          y={-1.8}
          r={0}
          label={{
            value: "DE-PRIORITIZE",
            position: "top",
            fill: "#6b7280",
            fontSize: 28,
            fontWeight: 600,
            opacity: 0.4,
            textAnchor: "bottom",
            dominantBaseline: "bottom"
          }}
        />
        <ReferenceDot
          x={1.0}
          y={-1.8}
          r={0}
          label={{
            value: "BUILD",
            position: "top",
            fill: "#6b7280",
            fontSize: 28,
            fontWeight: 600,
            opacity: 0.4,
            textAnchor: "bottom",
            dominantBaseline: "bottom"
          }}
        />

        <Tooltip
          active={isTooltipActive}
          payload={activePayload}
          coordinate={activeCoordinate}
          content={<CustomTooltip />}
          cursor={{ strokeDasharray: '3 3' }}
          isAnimationActive={false}
        />

        {/* Render a Scatter component for each category */}
        {categories.map(category => (
          <Scatter
            key={category}
            name={category}
            data={dataByCategory[category]}
            fill={categoryColors[category]}
            shape={<PointWithLabel />}
            onClick={handleClick}
            isAnimationActive={false}
            size={300}
          />
        ))}
      </ScatterChart>
    </div>
  );
};
