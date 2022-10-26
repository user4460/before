import "../lib/firebase";
import "../lib/authentication";
import { RecoilRoot } from "recoil";
import "../styles/globals.scss";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp
