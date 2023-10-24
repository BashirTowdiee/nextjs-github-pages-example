// components/MobileApps.tsx

import Image from 'next/image';
import appIcon from './app-icon.png';
import styles from '../styles/apps.module.css';
const MobileApps = () => {
  const fetchVersion = (elementId: string, platform: string) => {
    fetch(`./version.txt?v=${Date.now()}`)
      .then((response) => response.text())
      .then((version) => {
        const versionElement = document.getElementById(elementId);
        if (versionElement) versionElement.textContent = version;
      })
      .catch((error) => {
        console.error('Error fetching version:', error);
      });
  };

  fetchVersion('ios-version', 'ios');
  fetchVersion('android-version', 'android');

  return (
    <div className={styles.container}>
      <div className={styles.appIconContainer}>
        <Image
          className={styles.appIcon}
          height={150}
          width={150}
          layout="fixed"
          src={appIcon}
          alt="App Image"
        />
      </div>
      <div className={styles.appInfoContainer}>
        <div className={styles.appInfo}>
          <h2 className={styles.appName}>iOS Mobile App</h2>
          <p className={styles.appSubtitle}>
            Version: <span id="ios-version">Loading...</span>
          </p>
          <div className={styles.appButtonContainer}>
            <a
              href="https://apps.apple.com/us/app/instagram/id389801252?itsct=apps_box_badge&amp;itscg=30200"
              className={styles.appButton}
            >
              <Image
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1286323200"
                alt="Download on the App Store"
                width={250}
                height={83}
              />
            </a>
            <a className={styles.downloadButton} href="./ios.txt" download>
              Download iOS Artifact
            </a>
          </div>
        </div>
        <div className={styles.appInfo}>
          <h2 className={styles.appName}>Android Mobile App</h2>
          <p className={styles.appSubtitle}>
            Version: <span id="android-version">Loading...</span>
          </p>
          <div className={styles.appButtonContainer}>
            <a
              href="https://play.google.com/store/apps/details?id=com.twitter.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              className={styles.appButtonAndroid}
            >
              <Image
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                width={250}
                height={83}
              />
            </a>
            <a className={styles.downloadButton} href="./android.txt" download>
              Download Android Artifact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
