/* =======================================
 * お問い合わせブロック
 * URL: src/components/common/BlockContact.tsx
 * Created: 2025-06-11
 * Last updated: 2025-06-11
 * ======================================= */

import styles from '@/styles/components/common/BlockContact.module.scss';
import Link from 'next/link';

const BlockContact = () => {
  return (
    <section className={styles.blockContact}>
      <article>
        <div className={styles.boxTitle}>
          <h3>お問い合わせ</h3>
          <span className={styles.sidebarH3}>contact</span>
          <p>
            ご相談・ご質問等ございましたら、
            <br />
            お気軽にお問い合わせください。
          </p>
        </div>
        <div className={styles.boxContact}>
          <a href="tel:0966621484" className={styles.linkTel}>
            0966-62-1484
          </a>
          <Link href="#" className="item-link">
            <span>お問い合わせ</span>
          </Link>
        </div>
      </article>
    </section>
  );
};
export default BlockContact;
