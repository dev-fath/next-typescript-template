import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.humaxmobility.evinfra',
  appName: 'next-ev-infra-clone',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    url: 'http://10.0.15.53:3000'
  }
};

export default config;
