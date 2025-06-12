/* =======================================
 * FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-06-10
 * Last updated: 2025-06-10
 * ======================================= */
import styles from '@/styles/components/common/Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.webp';

const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.MovePageTop}>
        <Link href="#Header" className={styles.pageTop}></Link>
      </div>
      <article>
        <div className={styles.boxLogo}>
          <Image src={Logo} alt="株式会社久環" />
        </div>
        <nav>
          <Link href="/" className={styles.itemLink}>
            TOP
          </Link>
          <Link href="#" className={styles.itemLink}>
            解体業
          </Link>
          <Link href="#" className={styles.itemLink}>
            解体実績
          </Link>
          <Link href="#" className={styles.itemLink}>
            産業廃棄物
          </Link>
          <Link href="#" className={styles.itemLink}>
            会社情報／保有機材
          </Link>
          <Link href="/contact/" className={styles.itemLink}>
            お問い合わせ
          </Link>
        </nav>
      </article>
      <dl>
        <div>
          <dt>本社</dt>
          <dd>
            <address>
              <span>〒867-0006</span>
              熊本県水俣市白浜町9-28
            </address>
            <a href="tel:0966621484">0966-62-1484</a>
          </dd>
        </div>
        <div>
          <dt>中間処理場</dt>
          <dd>
            <address>
              <span>〒867-0034</span>
              熊本県水俣市袋字山神迫 1639-39
            </address>
            <a href="tel:0966689453">0966-68-9453</a>
          </dd>
        </div>
        <div>
          <dt>熊本営業所</dt>
          <dd>
            <address>
              <span>〒862-0910</span>
              熊本市東区健軍本町51-15
            </address>
            <a href="tel:0962376140">096-237-6140</a>
          </dd>
        </div>
      </dl>
      <div className={styles.copyright}>
        @2022 Kyukan Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
