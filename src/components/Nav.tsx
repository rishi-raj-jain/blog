import { useEffect, useState } from 'react';
import { config } from '@/config/global'

export default function Nav() {
  const [current, setCurrent] = useState('');

  useEffect(() => {
    const nav = window.location.pathname.split('/')[1];
    setCurrent('/' + nav || '/');
  }, []);

  return (
    <nav className="flex space-x-5">
      {
        config.navs.map((nav) => {
          return (
            <a
              key={nav.url}
              href={nav.url}
              onClick={() => setCurrent(nav.url)}
              className={`decoration-wavy underline-offset-8 self-end ${nav.url === current ? 'underline' : ''}`}
            >
              {nav.title}
            </a>
          );
        })
      }
    </nav>
  )
}
