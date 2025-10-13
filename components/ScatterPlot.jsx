// Interactive scatter plot component using Recharts
window.ScatterPlot = function ScatterPlot({ onPointClick, isModalOpen }) {
  const { useState, useEffect, useRef } = React;
  const containerRef = useRef(null);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [activePayload, setActivePayload] = useState(null);
  const [activeCoordinate, setActiveCoordinate] = useState(null);
  const [isInteractionLocked, setIsInteractionLocked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 900);
  const [showMobileChart, setShowMobileChart] = useState(false);

  // Determine if device is mobile based on screen width, not window width
  // This won't be affected by viewport changes
  const isActuallyMobile = typeof window !== 'undefined' ? window.screen.width < 768 : false;

  // Update window width on resize (only when not showing mobile chart)
  useEffect(() => {
    const handleResize = () => {
      // Don't update width if we're showing the mobile chart modal
      if (!showMobileChart) {
        setWindowWidth(window.innerWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showMobileChart]);

  // Manage viewport zoom for mobile chart
  useEffect(() => {
    if (isActuallyMobile && showMobileChart) {
      // Store original viewport
      const viewport = document.querySelector('meta[name="viewport"]');
      const originalContent = viewport.content;

      // Set viewport for zoomable chart
      viewport.content = 'width=900, initial-scale=1.0, minimum-scale=0.3, maximum-scale=3.0, user-scalable=yes';

      // Scroll to top-left when modal opens
      window.scrollTo(0, 0);

      // Restore original viewport when closing
      return () => {
        viewport.content = originalContent;
      };
    }
  }, [isActuallyMobile, showMobileChart]);

  // Check if Recharts is loaded
  if (!window.Recharts) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading chart library...</div>;
  }

  const { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ReferenceDot, Label, ResponsiveContainer, Symbols } = window.Recharts;

  // Responsive size - desktop: 900px, mobile: fit to screen with padding
  const chartSize = isActuallyMobile ? Math.min(windowWidth - 40, 600) : 900;
  const fontSize = isActuallyMobile ? 10 : 12;
  const labelFontSize = isActuallyMobile ? 10 : 14;
  const quadrantFontSize = isActuallyMobile ? 16 : 28;
  const pointSize = isActuallyMobile ? 6 : 8;

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
          fontSize={fontSize}
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
    // On desktop, close mobile chart view if open (shouldn't happen but just in case)
    // On mobile, keep the chart view open so it's there when report closes
    if (!isActuallyMobile && showMobileChart) {
      setShowMobileChart(false);
    }
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

  // Legend component
  const LegendContent = () => (
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
      padding: isActuallyMobile ? '8px 10px' : '10px 14px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      display: isActuallyMobile ? 'flex' : 'block',
      gap: isActuallyMobile ? '12px' : '0',
      flexWrap: isActuallyMobile ? 'wrap' : 'nowrap',
      justifyContent: 'center'
    }}>
      {categories.map((cat, idx) => (
        <div key={cat} style={{ display: 'flex', alignItems: 'center', marginBottom: isActuallyMobile ? '0' : (idx < categories.length - 1 ? '8px' : '0') }}>
          <svg width={isActuallyMobile ? '12' : '16'} height={isActuallyMobile ? '12' : '16'} style={{ marginRight: '6px', flexShrink: 0 }}>
            {renderLegendShape(categoryShapes[cat], categoryColors[cat], isActuallyMobile ? 10 : 12)}
          </svg>
          <span style={{ fontSize: isActuallyMobile ? '11px' : '13px', color: '#4a5568', whiteSpace: 'nowrap' }}>{cat}</span>
        </div>
      ))}
    </div>
  );

  // Mobile tap-to-view button
  if (isActuallyMobile && !showMobileChart) {
    return (
      <div style={{ width: '100%', padding: '0 20px' }}>
        <button
          onClick={() => setShowMobileChart(true)}
          style={{
            width: '100%',
            padding: '40px 20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 30px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          <div>Tap to View Interactive Chart</div>
          <div style={{ fontSize: '14px', fontWeight: '400', opacity: '0.9' }}>Zoom, pinch, pan, and tap data points for reports</div>
        </button>
      </div>
    );
  }

  // Mobile full-screen chart modal
  if (isActuallyMobile && showMobileChart) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'white',
        zIndex: 9999
      }}>
        {/* Header with close button */}
        <div style={{
          position: 'sticky',
          top: 0,
          background: 'white',
          borderBottom: '1px solid #e0e0e0',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 10
        }}>
          <button
            onClick={() => setShowMobileChart(false)}
            style={{
              width: '36px',
              height: '36px',
              border: 'none',
              background: 'transparent',
              color: '#4a5568',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            ✕
          </button>
          <div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#1a202c' }}>Interactive Chart</div>
            <div style={{ fontSize: '12px', color: '#718096', marginTop: '4px' }}>Pinch to zoom in/out • Scroll to explore • Tap on a data point to see an in-depth report</div>
          </div>
        </div>

        {/* Legend */}
        <div style={{ padding: '15px 20px' }}>
          <LegendContent />
        </div>

        {/* Chart */}
        <div ref={containerRef} style={{ width: '900px', height: '900px', background: 'white', padding: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '100px',
              zIndex: 10
            }}>
              <LegendContent />
            </div>
            <ScatterChart
              key={isModalOpen ? 'modal-open' : 'modal-closed'}
              width={900}
              height={900}
              margin={{ top: 20, right: 10, bottom: 60, left: 10 }}
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
                tick={{ fill: '#000', fontSize: 12 }}
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
                tick={{ fill: '#000', fontSize: 12 }}
              >
                <Label
                  value="Current AI usage (z-score)"
                  angle={-90}
                  position="middle"
                  offset={25}
                  style={{ fill: '#000', fontSize: 14 }}
                />
              </YAxis>
              <ReferenceLine x={0} stroke="#666" strokeDasharray="5 5" strokeWidth={1} />
              <ReferenceLine y={0} stroke="#666" strokeDasharray="5 5" strokeWidth={1} />
              <ReferenceDot x={-1.0} y={0.2} r={0} label={{ value: "SUSTAIN", position: "top", fill: "#6b7280", fontSize: 28, fontWeight: 600, opacity: 0.4, textAnchor: "bottom", dominantBaseline: "bottom" }} />
              <ReferenceDot x={1.0} y={0.2} r={0} label={{ value: "IMPROVE", position: "top", fill: "#6b7280", fontSize: 28, fontWeight: 600, opacity: 0.4, textAnchor: "bottom", dominantBaseline: "bottom" }} />
              <ReferenceDot x={-1.0} y={-1.8} r={0} label={{ value: "DE-PRIORITIZE", position: "top", fill: "#6b7280", fontSize: 28, fontWeight: 600, opacity: 0.4, textAnchor: "bottom", dominantBaseline: "bottom" }} />
              <ReferenceDot x={1.0} y={-1.8} r={0} label={{ value: "BUILD", position: "top", fill: "#6b7280", fontSize: 28, fontWeight: 600, opacity: 0.4, textAnchor: "bottom", dominantBaseline: "bottom" }} />
              <Tooltip
                active={isTooltipActive}
                payload={activePayload}
                coordinate={activeCoordinate}
                content={<CustomTooltip />}
                cursor={{ strokeDasharray: '3 3' }}
                isAnimationActive={false}
              />
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
      </div>
    );
  }

  // Desktop view
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
      <div ref={containerRef} style={{ width: chartSize + 'px', height: chartSize + 'px', background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 30px rgba(0, 0, 0, 0.1)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Custom Legend - desktop only, positioned absolutely */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '100px',
        zIndex: 10
      }}>
        <LegendContent />
      </div>

      <ScatterChart
        key={isModalOpen ? 'modal-open' : 'modal-closed'}
        width={chartSize}
        height={chartSize}
        margin={{ top: isActuallyMobile ? 10 : 20, right: isActuallyMobile ? 5 : 10, bottom: isActuallyMobile ? 40 : 60, left: isActuallyMobile ? 5 : 10 }}
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
          tick={{ fill: '#000', fontSize: fontSize }}
        >
          <Label
            value="Openness to AI support (z-score)"
            position="bottom"
            offset={isActuallyMobile ? 5 : 20}
            style={{ fill: '#000', fontSize: labelFontSize }}
          />
        </XAxis>

        <YAxis
          type="number"
          dataKey="z_usage"
          name="Current AI usage"
          domain={[-2, 2]}
          stroke="#000"
          tick={{ fill: '#000', fontSize: fontSize }}
        >
          <Label
            value="Current AI usage (z-score)"
            angle={-90}
            position="middle"
            offset={isActuallyMobile ? 15 : 25}
            style={{ fill: '#000', fontSize: labelFontSize }}
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
            fontSize: quadrantFontSize,
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
            fontSize: quadrantFontSize,
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
            fontSize: quadrantFontSize,
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
            fontSize: quadrantFontSize,
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
    </div>
  );
};
