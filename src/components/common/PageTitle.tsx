/* =======================================
 * ページタイトル
 * URL: src/components/common/PageTitle.tsx
 * Created: 2025-06-12
 * Last updated: 2025-06-12
 * ======================================= */

import styles from '@/styles/components/common/PageTitle.module.scss';
type PageHeadProps = {
  titleEn: string;
  title: string;
};

const PageTitle = ({ title, titleEn }: PageHeadProps) => {
  return (
    <>
      <div className={styles.blockTitle}>
        <h3>{title}</h3>
        <div className={styles.titleEn}>{titleEn}</div>
      </div>
    </>
  );
};
export default PageTitle;
