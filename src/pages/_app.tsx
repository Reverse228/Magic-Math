import { roboto_Mono } from "@utils/fonts";

import type { AppProps } from "next/app";

import "../styles/Global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto_Mono.className}>
      <Component {...pageProps} />
    </div>
  );
}