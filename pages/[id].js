import { useState } from 'react';

import Head from 'next/head';
import { useMantineColorScheme } from '@mantine/core';

import { useRouter } from 'next/router';

import EventTag from '../components/EventTag';
import MainLayout from '../layouts/MainLayout';

const Event = () => {
  const { colorScheme } = useMantineColorScheme();
  const isThemeDark = colorScheme === 'dark';
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>مونده</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <MainLayout>
        <div style={{ padding: '20px 10px 20px 10px', fontWeight: 'normal' }}>
          <div style={{ marginBottom: '30px' }}>
            <p style={{ fontSize: '23px', color: '#8C8C8C', margin: '5px 0' }}>
              چند روز مانده تا؟
            </p>
            <h1
              style={{
                margin: '0',
                fontWeight: 'normal',
                fontSize: '42px',
              }}
            >
              جمعه سیاه
            </h1>
            <p
              style={{
                color: '#2767d4',
                margin: '10px 0 5px 0',
                fontSize: '14px',
              }}
            >
              دوشنبه، 21 مهر 1400
            </p>
            <p style={{ color: '#2767d4', margin: '0', fontSize: '14px' }}>
              ساعت 21:00
            </p>
            <div style={{ margin: '15px 0' }}>
              <EventTag color="#2767d4">تعطیل</EventTag>
              <EventTag color="#3D22C7">جام جهانی</EventTag>
            </div>
          </div>
          <div
            style={{ display: 'flex' }}
            className="eventpage__detail-container"
          >
            <div
              style={{
                flex: 1,
                textAlign: 'justify',
                backgroundColor: isThemeDark ? '#141517' : '#cac6c1',
                borderRadius: '5px',
                padding: '10px 15px',
                marginLeft: '10px',
              }}
            >
              <h2 style={{ fontWeight: 300, fontSize: '17px', margin: '0' }}>
                جمعهٔ سیاه (به انگلیسی: Black Friday) حراج جمعه در آمریکا روز
                بعد از روز که عملاً آخرین جمعهٔ ماه نوامبر به‌شمار رفته و آغاز
                آیین خرید برای کریسمس حساب در واقع جمعهٔ سیاه، یک روز تعطیل نیست
                جمعهٔ سیاه (به انگلیسی: Black Friday) حراج جمعه در آمریکا روز
                بعد از روز که عملاً آخرین جمعهٔ ماه نوامبر به‌شمار رفته و آغاز
                آیین خرید برای کریسمس حساب در واقع جمعهٔ سیاه، یک روز تعطیل نیست
              </h2>
            </div>
            <div style={{ flex: 1, textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ marginRight: '-20px' }}>
                <span style={{ fontSize: '90px' }}>125</span>
                <span style={{ fontSize: '30px' }}>روز</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span>
                  <span style={{ fontSize: '35px' }}>15</span>
                  <span style={{ fontSize: '16px' }}>ساعت</span>
                </span>
                <span style={{ margin: '0 30px' }}>
                  <span style={{ fontSize: '35px' }}>35</span>
                  <span style={{ fontSize: '16px' }}>دقیقه</span>
                </span>
                <span>
                  <span style={{ fontSize: '35px' }}>04</span>
                  <span style={{ fontSize: '16px' }}>ثانیه</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Event;
