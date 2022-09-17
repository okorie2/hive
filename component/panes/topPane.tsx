import Image from "next/image";
import styles from "../../pages/chat/chat.module.css";
import React from "react";

export default function TopPane() {
  let user;
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user") || "");
  }
  console.log(user, "user");
  const username = user?.data?.user?.username;
  return (
    <div className={styles.nav}>
      <div className={styles.active}>
        <div className={styles.spot}></div>
        <div className={styles.hive}>Hive</div>
      </div>

      <div className={styles.navlist}>
        <div id={styles.profile}>
          <Image src="/svgs/profile.svg" alt="profile" width={22} height={16} />
        </div>
      </div>
      <div className={styles.navlist}>
        <div className={styles.holder}>
          <Image
            src="/svgs/settings.svg"
            alt="settings"
            width={22}
            height={16}
          />
        </div>
      </div>
      <div className={styles.navlist}>
        <div className={styles.holder}>
          <Image src="/svgs/help.svg" alt="help" width={22} height={16} />
        </div>
      </div>
      <div className={styles.navlist}>
        <div>
          <Image src="/svgs/avi.svg" alt="profile" width={36} height={36} />
        </div>
      </div>
      <div className={styles.user}>{username}</div>
    </div>
  );
}
