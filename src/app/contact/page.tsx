/* =======================================
 * お問い合わせ
 * URL: src/app/contact/page.tsx
 * Created: 2025-06-12
 * Last updated: 2025-06-12
 * ======================================= */

'use client';

import React, { useState, useRef } from 'react';
import PageHead from '@/components/common/PageHead';
import bgImage from '@/assets/images/title-contact-bg.webp';
import styles from '@/styles/PageContact.module.scss';
import Modal from '@/components/Modal';

export default function PageContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false); // 確認画面フラグ
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダル制御

  const topRef = useRef<HTMLDivElement | null>(null);

  // **確認ボタンの処理**
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus('必須項目を入力してください');
      return;
    }

    setIsConfirming(true); // 確認画面へ
    setStatus('');
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  // **修正ボタンの処理（入力画面に戻る）**
  const handleEdit = () => {
    setIsConfirming(false);
  };

  // **送信処理**
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch(
        'https://demo-kyukan-kumamoto.tuna-pic.co.jp/backend/contact.php',
        {
          method: 'POST',
          body: formData,
        }
      );

      const result = await response.json();
      // console.log('サーバーレスポンス:', result);

      if (result.success) {
        setStatus('');
        setIsModalOpen(true); // モーダルを開く
        setTimeout(() => setIsModalOpen(false), 3000); // 3秒後に自動閉じる
        setName('');
        setEmail('');
        setMessage('');
        setIsConfirming(false); // 入力画面に戻す
      } else {
        setStatus(result.error || '送信に失敗しました。');
      }
    } catch (error) {
      console.error('エラー:', error);
      setStatus('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHead title="お問い合わせ" backgroundImage={bgImage} />

      <section className={styles.containerContact}>
        <article>
          <p className={styles.H3Sidebar}>
            ご相談・ご質問等ございましたら、
            <br /> お気軽にお問い合わせください。
          </p>
          <form
            className={styles.blockForm}
            onSubmit={isConfirming ? handleSubmit : handleConfirm}
          >
            {isConfirming ? (
              // ✅ 確認画面
              <div className={styles.statusConfirm}>
                <p>入力内容を確認してください。</p>
                <div>{name}</div>
                <div>{email}</div>
                <div>{message}</div>
                <div className={styles.box_btn}>
                  <button type="button" onClick={handleEdit}>
                    修正する
                  </button>
                  <button type="submit" disabled={loading}>
                    {loading ? '送信中…' : '送信'}
                  </button>
                </div>
              </div>
            ) : (
              // ✅ 入力画面
              <dl className={styles.blockForm}>
                <div className={styles.formName}>
                  <dt className={styles.formRequired}>お名前</dt>
                  <dd>
                    <div className={styles.boxName}>
                      <h4>氏名</h4>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="お名前"
                      />
                    </div>
                  </dd>
                </div>

                <div>
                  <dt className={styles.formRequired}>メールアドレス</dt>
                  <dd>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="メールアドレス"
                    />
                  </dd>
                </div>

                <div>
                  <dt className={styles.formRequired}>お問い合わせ内容</dt>
                  <dd>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="お問い合わせ内容を入力してください"
                    />
                  </dd>
                </div>
                <div className={styles.box_btn}>
                  <button type="submit">確 認</button>
                </div>
              </dl>
            )}
            <p>{status}</p>
          </form>
        </article>
      </section>
      {/* ✅ モーダル表示 */}
      {isModalOpen && (
        <Modal
          message="お問い合わせが送信されました。"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
