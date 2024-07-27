'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation'

import styles from './Navbar.module.css';

const Navbar = () => {

   const pathname = usePathname();

   const navItems = [
      { label: 'Dashboard', path: '/dashboard', icon: 'bi-house-door' },
      { label: 'Openings', path: '/openings', icon: 'bi-book' },
      { label: 'Profile', path: '/profile', icon: 'bi-person' }
   ];

   return (
     <nav className={styles.navbar}>
      <div className={styles.navBarHeader}>
         <h1 className={styles.appName}>
            <Link href='/../dashboard' className={styles.logout}>
               Openings<b>Tutor</b>
            </Link>
         </h1>
      </div>
      <ul className={styles.ul}>
         {navItems.map((item, index) => (
            <li key={index} className={styles.navElement}>
               <Link href={item.path} className={`${styles.navButton} ${pathname === item.path ? styles.active : ""}`}>
                  <i className={`bi ${styles.navIcon} ${pathname === item.path ? `${item.icon}-fill` : item.icon}`}></i>
                  {item.label}
               </Link>
            </li>
         ))}
      </ul>
     </nav>
   );
};

export default Navbar;
