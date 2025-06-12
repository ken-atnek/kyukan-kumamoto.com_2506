/* =======================================
 * 産業廃棄物業
 * URL: src/app/service2/page.tsx
 * Created: 2025-06-12
 * Last updated: 2025-06-12
 * ======================================= */
import styles from '@/styles/PageService2.module.scss';
import PageHead from '@/components/common/PageHead';
import bgImage from '@/assets/images/title-service2-bg.webp';
import BlockContact from '@/components/common/BlockContact';
import Facilities01 from '@/assets/images/service2/facilities01.webp';
import Facilities02 from '@/assets/images/service2/facilities02.webp';
import Facilities03 from '@/assets/images/service2/facilities03.webp';
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
export const generateMetadata = (): Metadata => {
  return {
    title:
      '産業廃棄物の中間処理・収集運搬｜熊本・水俣の建物解体なら株式会社久環',
    description:
      '株式会社久環は熊本・水俣エリアを中心に、産業廃棄物の収集運搬および中間処理に対応。自社の中間処理施設を保有し、多様な廃棄物に対応可能。安全かつ適正な処理体制で、企業の廃棄物管理を強力にサポートします。',
  };
};
type Facility = {
  image: StaticImageData;
  title: string;
  description?: string;
};

const facilitiesList: Facility[] = [
  {
    image: Facilities01,
    title: '中間処理場',
  },
  {
    image: Facilities02,
    title: '持込処理・収集運搬',
    description:
      '持ち込みでの処理、収集に伺っての運搬も行っております。\n詳細はお気軽にお問合せください。',
  },
  {
    image: Facilities03,
    title: '再生品販売',
    description:
      '処理を行ったものは資源循環のため、再生品や各種原料として製造・販売を行っています。\n・木くず（燃料チップ等）\n・コンクリート・アスファルト（再生クラッシャラン）',
  },
];
export default function Service2Page() {
  return (
    <>
      <PageHead title="産業廃棄物業" backgroundImage={bgImage} />
      <section className={styles.container01}>
        <div className={styles.headTitle}>久環の廃棄物処理</div>
        <p className={styles.headComment}>
          弊社では産業廃棄物中間処理場を保有。
          <br />
          解体から処理までのワンストップ化を実現しています。
        </p>
        <article className={styles.blockFacilities}>
          <h3>保有施設</h3>
          <ul className={styles.listFacilities}>
            {facilitiesList.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div className={styles.wrapDetail}>
                  <h4>{item.title}</h4>
                  {item.description && (
                    <p>
                      {item.description.split('\n').map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <section className={styles.container02}>
        <article>
          <h3>処理可能品</h3>
          <dl>
            <div>
              <dt>破砕・分級</dt>
              <dd>
                <ul>
                  <li>
                    金属くず（ガラスくず、コンクリートくず及びがれき類に付着するものに限ります。）
                  </li>
                  <li>ガラスくず、コンクリートくず及び陶磁器くず</li>
                  <li>
                    がれき類
                    <span className={styles.notice}>
                      アスベスト関連、廃石膏ボード、自動車破砕物、水銀関係は除く
                    </span>
                  </li>
                </ul>
              </dd>
            </div>
            <div>
              <dt>破砕・分別</dt>
              <dd>
                <ul>
                  <li>紙くず</li>
                  <li>繊維くず</li>
                  <li>ガラスくず</li>
                  <li>コンクリートくず及び陶磁器くず</li>
                  <li>がれき類（廃石膏ボード）</li>
                </ul>
              </dd>
            </div>
            <div>
              <dt>破砕</dt>
              <dd>
                <ul>
                  <li>木くず</li>
                  <li>
                    廃プラスチック類
                    <span className={styles.notice}>
                      アスベスト関連、廃石膏ボード、自動車破砕物、水銀関係は除く
                    </span>
                  </li>
                </ul>
              </dd>
            </div>
            <div>
              <dt>選別</dt>
              <dd>
                <ul>
                  <li>紙くず</li>
                  <li>木くず</li>
                  <li>繊維くず</li>
                  <li>金属くず</li>
                  <li>ガラスくず</li>
                  <li>コンクリートくず及び陶磁器くず</li>
                  <li>がれき類</li>
                  <li>
                    廃プラスチック類
                    <span className={styles.notice}>
                      アスベスト関連、廃石膏ボード、自動車破砕物、水銀関係は除く
                    </span>
                  </li>
                </ul>
              </dd>
            </div>
            <div>
              <dt>焼却</dt>
              <dd>
                <ul>
                  <li>紙くず</li>
                  <li>木くず</li>
                  <li>
                    繊維くず
                    <span className={styles.notice}>
                      アスベスト関連、廃石膏ボード、自動車破砕物、水銀関係は除く
                    </span>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </article>
        <article>
          <h3>許可証関係</h3>
          <nav>
            <a
              href="/data/pdf/Transportation_PermitsR6.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>産業廃棄物収集運搬許可証</span>
            </a>
            <a
              href="/data/pdf/obj20250407094605939101.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>産業廃棄物処分許可証</span>
            </a>
          </nav>
        </article>
      </section>
      <BlockContact />
    </>
  );
}
