/* =======================================
 * 解体業
 * URL: src/app/service1/page.tsx
 * Created: 2025-06-12
 * Last updated: 2025-06-12
 * ======================================= */
import styles from '@/styles/PageService1.module.scss';
import PageHead from '@/components/common/PageHead';
import bgImage from '@/assets/images/title-service1-bg.webp';
import BlockContact from '@/components/common/BlockContact';
import List0101 from '@/assets/images/service1/list01-01.webp';
import List0102 from '@/assets/images/service1/list01-02.webp';
import List0201 from '@/assets/images/service1/list02-01.webp';
import List0202 from '@/assets/images/service1/list02-02.webp';
import List0301 from '@/assets/images/service1/list03-01.webp';
import List0302 from '@/assets/images/service1/list03-02.webp';
import List04 from '@/assets/images/service1/list04.webp';
import type { Metadata } from 'next';
import Image from 'next/image';
import { buildCanonicalUrl } from '@/lib/site';

export const generateMetadata = (): Metadata => {
  return {
    title: '解体工事サービス｜熊本・水俣の建物解体なら株式会社久環',
    description:
      '熊本・水俣エリアを中心に、建物解体・特殊構造物の撤去を安全かつ迅速に対応いたします。株式会社久環では、解体から廃棄物処理・土地造成まで一貫対応。工場やプラントの特殊解体にも豊富な実績があります。',
    alternates: {
      canonical: buildCanonicalUrl('/service1/'),
    },
  };
};

export default function Service1Page() {
  return (
    <>
      <PageHead title="解体業" backgroundImage={bgImage} />
      <section className={styles.containerContents}>
        <p className={styles.headComment}>
          熊本・水俣で解体業を営んでいる私たちにとって、
          <br />
          安全に解体することはもちろん、環境に配慮した形で処理をすることまでこそが責任だと考えています。
          <br />
          特別な解体に関しても長年の経験を基に安全に対応いたします。
        </p>
        <article className={styles.blockDetail01}>
          <h3>鉄筋コンクリート造解体</h3>
          <span className={styles.sidebarH3}>RC造解体</span>
          <div className={styles.boxImage}>
            <Image src={List0101} alt="RC造解体1" />
            <Image src={List0102} alt="RC造解体2" />
          </div>
        </article>
        <article className={styles.blockDetail02}>
          <h3>鉄骨造解体</h3>
          <span className={styles.sidebarH3}>S造解体</span>
          <div className={styles.boxImage}>
            <Image src={List0201} alt="S造解体1" />
            <Image src={List0202} alt="S造解体2" />
          </div>
        </article>
        <article className={styles.blockDetail03}>
          <h3>木造建物解体</h3>
          <div className={styles.boxImage}>
            <Image src={List0301} alt="木造建物解体1" />
            <Image src={List0302} alt="木造建物解体2" />
          </div>
        </article>
        <article className={styles.blockDetail04}>
          <h3>特殊解体</h3>
          <div className={styles.boxDetails}>
            <Image src={List04} alt="特殊解体" />
            <div className={styles.wrapContents}>
              <h4>
                大規模プラント・発電所・焼却炉などの
                <br />
                特殊施設解体
              </h4>
              <h5>久環だからできる特殊解体</h5>
              <p>
                弊社は高層ビル、焼却炉、大型プラント施設といった大型の建造物の実績は豊富です。あらゆる現場に柔軟に対応できる重機、特殊車両の種類を幅広く揃えています。
                <br />
                国家資格を保有する技術者や、特殊な技術を職人が、チームとなってどんな案件にも柔軟に対応します。
              </p>
            </div>
          </div>
        </article>
      </section>
      <BlockContact />
    </>
  );
}
