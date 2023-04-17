'use client'
import NextLink from 'next/link';

interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    icon?: React.ReactNode;

  }
  
  const Link = ({ href, className, children,icon }: LinkProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {pathname} =  typeof window !==undefined ? window.location :{pathname:null}
    return (
        <li className={`flex items-center space-x-1 text-blue-500 hover:text-blue-700 ${pathname==href ? 'text-red-300':''}`}>
            <NextLink href={href}>
          {icon && <i className="material-icons">{icon}</i>}
           {/* <span className="material-icons">add</span> */}
          <span>{children}</span>
      </NextLink>
        </li>
    );
  };
  
  export default Link;