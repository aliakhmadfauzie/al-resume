import { personalInfo } from '../data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="header-logo">
          {personalInfo.name}
        </a>
        <nav className="header-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
