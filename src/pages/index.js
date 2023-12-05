import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

const temp = { x: 1 };

export const getServerSideProps = async (context) => {
  console.log(process.platform);
  if (process.env.SETUP === 'raspberry_pi') {
    var sensor = require('ds18x20');
    var temp = sensor.get(process.env.DS18B20_SENSOR);
    return {
      props: { temp: temp },
    };
  }
  if (process.env.SETUP === 'macos') {
    return {
      props: { x: 2.22 },
    };
  } else {
    return {
      props: { x: 'no environment variable set' },
    };
  }
};
export default function Index(props) {
  const router = useRouter();
  console.log(props);
  const refreshData = () => {
    router.replace(router.asPath, undefined, { shallow: true });
  };

  useEffect(() => {
    setInterval(refreshData, 15_000);
  });

  return (
    <div>
      <h1>🌡️ {props.x}</h1>
      <h2></h2>
    </div>
  );
}
