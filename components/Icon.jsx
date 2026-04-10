const { useRef, useEffect } = React;

Explorer.Icon = function Icon({ name, size = 20, color = "currentColor", className = '', style = {}, ...props }) {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current && window.lucide) {
      const iconDef = window.lucide[name];
      if (!iconDef) {
        console.error('Icon "' + name + '" not found in Lucide');
        return;
      }
      const iconElement = window.lucide.createElement(iconDef);
      if (iconElement) {
        iconElement.setAttribute('width', size);
        iconElement.setAttribute('height', size);
        iconRef.current.innerHTML = '';
        iconRef.current.appendChild(iconElement);
      }
    }
  }, [name, size]);

  return React.createElement('span', {
    ref: iconRef,
    className,
    style: { display: 'inline-flex', alignItems: 'center', color, ...style },
    ...props
  });
};
