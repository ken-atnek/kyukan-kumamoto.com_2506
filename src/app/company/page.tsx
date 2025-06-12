/* =======================================
 *会社情報 / 保有機材
 * URL: src/app/company/page.tsx
 * Created: 2025-06-12
 * Last updated: 2025-06-12
 * ======================================= */
import styles from '@/styles/PageCompany.module.scss';
import PageHead from '@/components/common/PageHead';
import bgImage from '@/assets/images/title-company-bg.webp';
import BlockContact from '@/components/common/BlockContact';
import Equipment from '@/assets/images/company/equipment.webp';
import PageTitle from '@/components/common/PageTitle';
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
export const generateMetadata = (): Metadata => {
  return {
    title: '会社情報・保有機材｜熊本・水俣の建物解体なら株式会社久環',
    description:
      '株式会社久環の会社概要と保有機材・施設のご紹介ページです。迅速で確実な解体工事と産業廃棄物処理を実現するために、豊富な機材と中間処理場を保有。熊本・水俣を中心に、安全かつ適正な施工と処理体制で地域社会に貢献します。',
  };
};

export default function CompanyPage() {
  return (
    <>
      <PageHead title="会社情報 / 保有機材" backgroundImage={bgImage} />
      <section className={styles.container01}>
        <article>
          <PageTitle title="代表挨拶" titleEn="GREETING" />
          <div className={styles.boxGreeting}>
            <h4>地域と共に～</h4>
            <p>
              株式会社久環は平成9年の創業以来、住宅、ビル、プラントなどにおける総合解体工事業を基に、次代ニーズにこたえていけるよう挑戦を続けて参りました。
              <br />
              土木工事事業におきまして熊本県南、鹿児島北薩を拠点とし、造成工事・災害復旧工事等の実績を重ねております。現在も総合建設業として、解体工事業・土木工事業の革新に努め、安全と技術力を高めるべく、社員一丸となって日夜奮闘しております。
              <br />
              さらに昨今の環境・循環社会への意識の高まりを私自身強く感じており、次代に繋がる廃棄物の処理にも力を入れていきます。適正処理及びリサイクルをテーマとして、水俣市・津奈木町・芦北町の皆様と共に成長を続けていきます。
              <br />
              変化・革新の流れが著しい現代社会において、地域に密着した企業として資源循環型社会の構築に、寄与していく所存です。皆様のなお一層のご指導、ご愛顧をお願い申し上げます。
            </p>
            <div className={styles.name}>
              <span>代表取締役社長</span>
              橋本 義一
            </div>
          </div>
        </article>
        <article>
          <PageTitle title="会社概要" titleEn="COMPANY" />
          <div className={styles.boxCompany}>
            <dl>
              <dt>称号</dt>
              <dd>株式会社久環</dd>
            </dl>
            <dl>
              <dt>資本金</dt>
              <dd>20,000,000円</dd>
            </dl>
            <dl>
              <dt>代表者</dt>
              <dd>代表取締役　橋本 義一</dd>
            </dl>
            <dl>
              <dt>設立</dt>
              <dd>平成9年6月6日</dd>
            </dl>
            <dl>
              <dt>所在地</dt>
              <dd className={styles.wrapAddress}>
                <div>
                  <p>本社</p>
                  <address>
                    <span>〒867-0006</span>
                    熊本県水俣市白浜町9番28号
                  </address>
                </div>
                <div>
                  <p>中間処理場</p>
                  <address>
                    <span>〒867-0034</span>
                    熊本県水俣市袋字山神迫1639番39
                  </address>
                </div>
                <div>
                  <p>熊本営業所</p>
                  <address>
                    <span>〒862-0910</span>
                    熊本市東区健軍本町51-15
                  </address>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>連絡先</dt>
              <dd className={styles.wrapTel}>
                <div>
                  本社TEL<a href="tel:0966621484">0966-62-1484</a>
                </div>
                <div>
                  本社FAX<a href="tel:0966621747">0966-62-1747</a>
                </div>
                <div>
                  中間処理場TEL<a href="tel:0966689453">0966-68-9453</a>
                </div>
                <div>
                  中間処理場FAX<a href="tel:0966689454">0966-68-9454</a>
                </div>
                <div>
                  熊本営業所TEL <a href="tel:0962376140">096-237-6140</a>
                </div>
                <div>
                  熊本営業所FAX<a href="tel:0962376141">096-237-6141</a>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>従業員数</dt>
              <dd>24名</dd>
            </dl>
            <dl>
              <dt>事業内容</dt>
              <dd className={styles.wrapDetails}>
                <p>解体工事業</p>
                <p>建設工事業</p>
                <p>産業廃棄物・一般廃棄物処理業</p>
              </dd>
            </dl>
            <dl>
              <dt>営業経歴</dt>
              <dd className={styles.wrapHistory}>
                <ul>
                  <li>
                    <span>平成11年11月</span>
                    熊本県産業廃棄物収集運搬業許可取得
                  </li>
                  <li>
                    <span>平成11年12月</span>
                    鹿児島県産業廃棄物収集運搬業許可取得
                  </li>
                  <li>
                    <span>平成12年 2月</span>
                    宮崎県産業廃棄物収集運搬業許可取得
                  </li>
                  <li>
                    <span>平成13年11月</span>
                    熊本県一般建築業許可取得(建設業、土木業、とび業・大工)
                  </li>
                  <li>
                    <span>平成17年11月</span>
                    熊本県公安委員会古物証許可取得
                  </li>
                  <li>
                    <span>平成18年 1月</span>
                    熊本県産業廃棄物処分業許可取得
                  </li>
                  <li>
                    <span>平成18年 2月</span>
                    水俣市一般廃棄物処理業(収集運搬業・処分業)許可取得
                  </li>
                  <li>
                    <span>平成19年10月</span>
                    芦北町一般廃棄物処分業許可取得
                  </li>
                  <li>
                    <span>平成20年 2月</span>
                    津奈木町一般廃棄物処理業許可取得
                  </li>
                  <li>
                    <span>平成30年12月</span>
                    熊本県特定建設業許可取得
                  </li>
                  <li>
                    <span>令和 3年 8月</span>
                    大分県産業廃棄物収集運搬業許可取得
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </article>
      </section>
      <section className={styles.container02} id="containerEquipment">
        <article>
          <PageTitle title="保有機材" titleEn="EQUIPMENT" />
          <div className={styles.boxContents}>
            <div className={styles.wrapDetails}>
              <dl>
                <dt>解体用保有重機</dt>
                <dd>
                  <div>
                    <span>0.7㎥～1.0㎥クラス</span>
                    ４台
                  </div>
                  <div>
                    <span>0.45㎥～0.5㎥クラス</span>
                    ３台
                  </div>
                  <div>
                    <span>0.2㎥～0.3㎥クラス </span>
                    ４台
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>車両</dt>
                <dd>
                  <div>
                    <span>10ｔダンプ</span>
                    ５台
                  </div>
                  <div>
                    <span>4ｔダンプ </span>
                    ４台
                  </div>
                  <div>
                    <span>2ｔダンプ</span>
                    ４台
                  </div>
                </dd>
              </dl>
            </div>
            <Image src={Equipment} alt="工事現場" />
          </div>
        </article>
      </section>
      <BlockContact />
    </>
  );
}
