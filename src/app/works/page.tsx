/* =======================================
 * 解体実績
 * URL: src/app/works/page.tsx
 * Created: 2025-06-12
 * Last updated: 2025-06-12
 * ======================================= */
import styles from '@/styles/PageService1.module.scss';
import PageHead from '@/components/common/PageHead';
import bgImage from '@/assets/images/title-works-bg.webp';
import BlockContact from '@/components/common/BlockContact';
import List01 from '@/assets/images/works/list01.webp';
import List02 from '@/assets/images/works/list02.webp';
import List03 from '@/assets/images/works/list03.webp';
import List04 from '@/assets/images/works/list04.webp';
import List05 from '@/assets/images/works/list05.webp';
import List06 from '@/assets/images/works/list06.webp';
import type { Metadata } from 'next';
import Image from 'next/image';

export const generateMetadata = (): Metadata => {
  return {
    title: '解体実績｜熊本・水俣の建物解体なら株式会社久環',
    description:
      '株式会社久環が熊本・水俣エリアで手がけた解体工事の実績をご紹介します。鉄骨造や木造住宅、プラント・特殊施設まで、多様な施工例を写真とともに掲載。安全性と迅速性を兼ね備えた解体技術をご確認ください。',
  };
};

export default function WorksPage() {
  return (
    <>
      <PageHead title="解体実績" backgroundImage={bgImage} />
      <section className={styles.containerContents}>
        <article className={styles.blockWorks}>
          <h3>一般解体事例</h3>
          <div className={styles.boxImage}>
            <Image src={List01} alt="解体工事01" />
            <Image src={List02} alt="解体工事02" />
            <Image src={List03} alt="解体工事03" />
            <Image src={List04} alt="解体工事04" />
            <Image src={List05} alt="解体工事05" />
            <Image src={List06} alt="解体工事06" />
          </div>
        </article>
      </section>
      <BlockContact />
    </>
  );
}
