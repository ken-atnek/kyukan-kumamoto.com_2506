/* =======================================
 * TOPページ
 * URL: /app/page.tsx
 * Created: 2025-06-10
 * Last updated: 2025-06-12
 * ======================================= */
import styles from '@/styles/PageTop.module.scss';
import BlockContact from '@/components/common/BlockContact';
import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import featureImage01 from '@/assets/images/top/feature/feature01.webp';
import featureImage02 from '@/assets/images/top/feature/feature02.webp';
import featureImage03 from '@/assets/images/top/feature/feature03.webp';
import ContainerSlide from '@/components/top/ContainerSlide';
import PageTitle from '@/components/common/PageTitle';
import Link from 'next/link';
export const generateMetadata = (): Metadata => {
  return {
    title: '熊本・水俣の解体工事なら株式会社久環｜プラント・特殊構造物も対応',
    description:
      '株式会社久環は一般建造物の解体だけにとどまらず、プラントや発電所などの特殊設備・建造物の解体に長けております。”次に繋げる解体”を意識し、解体だけでなくその後の土地造成等の施工体制も保持。どんな建造物もお客様のニーズに即した形で安全に対応いたします。また、産業廃棄物中間処理場を保有しており、産業処理まで一貫して対応いたします。',
  };
};

const featureList = [
  {
    image: featureImage01,
    title: '一般解体から特殊解体まで',
    description:
      '一般建造物の解体だけにとどまらず、プラントや発電所などの特殊設備・建造物の解体に長けております。\n”次に繋げる解体”を意識し、解体だけでなくその後の土地造成等の施工体制も保持。どんな建造物もお客様のニーズに即した形で安全に対応いたします。',
    linkTitle: '解体業について',
    linkUrl: '/service1/',
  },
  {
    image: featureImage02,
    title: '産業処理まで一貫して対応',
    description:
      '弊社は産業廃棄物中間処理場を保有。\nさまざまな品目の処理を行う設備が整えております。',
    linkTitle: '産業廃棄物について',
    linkUrl: '/service2/',
  },
  {
    image: featureImage03,
    title: '保有重機と施設',
    description:
      'ご依頼に迅速にお応えするために、木造家屋から高層ビル、大型プラント等の解体に特化した機材や土地造成、廃棄物処理場といった豊富な機材・施設保有しております。',
    linkTitle: '保有機材について',
    linkUrl: '#',
  },
];
export default function Home() {
  return (
    <>
      <section className={styles.containerHead}>
        <article>
          <h2>次世代へ繋ぐ、解体工事</h2>
          <p>
            熊本・水俣で解体業を営んでいる私たちにとって、安全に解体することはもちろん環境に配慮した形で処理をすることまでこそが責任だと考えています。
            <br />
            特別な解体に関しても長年の経験を基に安全に対応いたします。
          </p>
        </article>
      </section>
      <ContainerSlide />
      <section className={styles.containerFeature}>
        <article>
          <PageTitle title="久環の特徴" titleEn="feature" />
          <ul className={styles.listFeature}>
            {featureList.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div className={styles.wrapDetail}>
                  <h4>{item.title}</h4>
                  <p>
                    {item.description.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <Link href={item.linkUrl} className="item-link">
                    <span>{item.linkTitle}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <BlockContact />
    </>
  );
}
