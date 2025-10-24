// Icon components using Lucide
const Icon = ({ name, size = 20, className = '', ...props }) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (ref.current && window.lucide) {
            const iconElement = window.lucide.createElement(window.lucide[name]);
            if (iconElement) {
                // Set size
                iconElement.setAttribute('width', size);
                iconElement.setAttribute('height', size);

                // Clear and append
                ref.current.innerHTML = '';
                ref.current.appendChild(iconElement);
            }
        }
    }, [name, size]);

    return React.createElement('span', { ref, className, ...props });
};

// Export specific icons for the chat modal
window.UserIcon = (props) => React.createElement(Icon, { name: 'User', ...props });
window.BotIcon = (props) => React.createElement(Icon, { name: 'Bot', ...props });
window.SendIcon = (props) => React.createElement(Icon, { name: 'Send', ...props });
