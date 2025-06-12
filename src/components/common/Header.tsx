/* =======================================
 * HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-06-10
 * Last updated: 2025-06-10
 * ======================================= */
'use client';
import styles from '@/styles/components/common/Header.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.webp';
import { usePathname } from 'next/navigation';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  // メニューが開いている間はスクロールを防ぐ
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 外側をクリックしたらメニューを閉じる
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById('headerNav')?.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setIsScrolled(window.scrollY > 150);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Run once on mount in case already scrolled
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.containerHeader} ${isScrolled ? styles.isActive : ''}`}
      id="Header"
    >
      <div className={styles.headComment}>
        <span>株式会社久環</span>
        一般解体から特殊解体、産業廃棄まで幅広く対応しております。お気軽にお問合せください。
      </div>
      <article>
        <Link href="/" className={styles.linkH1}>
          <h1>
            <Image src={Logo} alt="株式会社久環" />
          </h1>
        </Link>
        <nav
          id="headerNav"
          className={`${isOpen ? styles['is-open'] : ''} ${
            !isOpen ? styles.closing : ''
          }`}
        >
          <Link
            href="/"
            className={`${styles.itemLink} ${pathname === '/' ? styles.isActive : ''}`}
            onClick={closeMenu}
          >
            TOP
          </Link>
          <Link
            href="/service1/"
            className={`${styles.itemLink} ${pathname === '/service1/' ? styles.isActive : ''}`}
            onClick={closeMenu}
          >
            解体業
          </Link>
          <Link
            href="/works/"
            className={`${styles.itemLink} ${pathname === '/works/' ? styles.isActive : ''}`}
            onClick={closeMenu}
          >
            解体実績
          </Link>
          <Link
            href="/service2/"
            className={`${styles.itemLink} ${pathname === '/service2/' ? styles.isActive : ''}`}
            onClick={closeMenu}
          >
            産業廃棄物
          </Link>
          <Link
            href="/company/"
            className={`${styles.itemLink} ${pathname === '/company/' ? styles.isActive : ''}`}
            onClick={closeMenu}
          >
            会社情報／保有機材
          </Link>
          <Link
            href="/contact/"
            className={`${styles.itemLink} ${pathname === '/contact/' ? styles.isActive : ''}`}
            onClick={closeMenu}
          >
            お問い合わせ
          </Link>
        </nav>
      </article>
      <button
        className={`${styles.hamburgerButton} ${
          isOpen ? styles['is-open'] : ''
        }`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
