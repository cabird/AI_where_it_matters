const { useState, useEffect } = React;

Observatory.NavBar = function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Determine active section
      const sections = ['paper-two', 'chat', 'paper-one'];
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'paper-one', label: 'The Map' },
    { id: 'chat', label: 'Ask' },
    { id: 'paper-two', label: 'The Systems' },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 72; // nav height
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar-solid' : ''}`}>
      <div className="navbar-inner">
        <a
          href="#"
          className="navbar-brand"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          Observatory
        </a>

        <div className="navbar-links">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar-link${activeSection === link.id ? ' navbar-link-active' : ''}`}
              onClick={(e) => handleClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#chat"
          className="navbar-chat-btn"
          onClick={(e) => handleClick(e, 'chat')}
        >
          Chat with Papers
        </a>
      </div>
    </nav>
  );
};
