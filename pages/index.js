import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";

import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { handleAuth } from "../redux/actions/auth";
import { useEffect } from "react";
export default function Home() {
  return (
    <>
      <nav>
        <div className={styles.nav}>
          <div className={styles.active}>
            <div className={styles.spot}>
              <Image
                src="/svgs/logohighlight.svg"
                alt="logo"
                height={30}
                width={30}
              />
            </div>
            <div className={styles.hiveright}>Hive</div>
          </div>
          <div className={styles.navlist}>About</div>
          <div className={styles.navlist}>Business</div>
          <div className={styles.navlist}>FAQs</div>
          <div className={styles.navlist}>Contact</div>
          <div className={styles.navlist}>
            <Link href="/auth/signin">
              <button>Log in</button>
            </Link>
          </div>
        </div>
      </nav>
      <section>
        <div className={styles.tuGrid}>
          <div className={styles.left}>
            <h1>Connect with your family and friends anytime, anyday</h1>
            <p>
              Enjoy amazing features and instant messaging that connects you to
              the people you love and care about.
            </p>

            <Link href="/auth/signup">
              <button>Create an account</button>
            </Link>
          </div>
          <div className={styles.right}>
            <Image
              src="/svgs/Mac.svg"
              height={430} // Desired size with correct aspect ratio
              width={430}
              alt="imag"
            />
          </div>
        </div>
      </section>
      <section className={styles.mid}>
        <div>
          <h2>Why People Love Hive</h2>
        </div>
        <div className={styles.triGrid}>
          <div>
            <div className={styles.box}>
              <div className={styles.smc}>
                <Image
                  src="/svgs/Vector1.svg"
                  height={23} // Desired size with correct aspect ratio
                  width={34}
                  alt="imag"
                />
              </div>
            </div>
            <h4>instant</h4>
            <p>
              Send instant messages to your family
              <br /> and loved ones
            </p>
          </div>
          <div>
            <div className={styles.box}>
              <div className={styles.smc}>
                <Image
                  src="/svgs/Vector2.svg"
                  height={23} // Desired size with correct aspect ratio
                  width={34}
                  alt="imag"
                />
              </div>
            </div>
            <h4>Secure</h4>
            <p>
              Your chats are end to end encrypted
              <br /> and private{" "}
            </p>
          </div>
          <div>
            <div className={styles.box}>
              <div className={styles.smc}>
                <Image
                  src="/svgs/Vector3.svg"
                  height={23} // Desired size with correct aspect ratio
                  width={34}
                  alt="imag"
                />
              </div>
            </div>
            <h4>fun</h4>
            <p>
              Enjoy amazing fun features that <br />
              makes your messaging pleasurable
            </p>
          </div>
        </div>
      </section>

      <section className={styles.tod}>
        <div className={styles.featureheader}>
          <span>Enjoy Amazing Features</span>
        </div>
        <div className={styles.todGrid}>
          <div>
            <div>
              <Image
                src="/svgs/Man.svg"
                height={414} // Desired size with correct aspect ratio
                width={414}
                alt="imag"
              />
            </div>
          </div>
          <div className={styles.rii}>
            <div className={styles.miniGrid}>
              <div className={styles.bullet}>
                <Image
                  src="/svgs/featureicon1.svg"
                  alt="feature1"
                  height={50}
                  width={50}
                />
              </div>
              <div className={styles.featuretext}>
                <b>Disappearing messages</b>
                <br />
                <div className={styles.featurespan}>
                  <span>
                    Set your messages to disappear at a pre-defined time
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.miniGrid}>
              <div className={styles.bullet}>
                <Image
                  src="/svgs/featureicon2.svg"
                  alt="feature2"
                  height={50}
                  width={50}
                />
              </div>
              <div className={styles.featuretext}>
                <b>Video call up to 20 people</b>
                <div className={styles.featurespan}>
                  <span>
                    {" "}
                    Nothing is more fun than more people on the video chat!
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.miniGrid}>
              <div className={styles.bullet}>
                <Image
                  src="/svgs/featureicon3.svg"
                  alt="feature3"
                  height={50}
                  width={50}
                />
              </div>
              <div className={styles.featuretext}>
                <b>Schedule your messages for later</b>
                <div className={styles.featurespan}>
                  <span>Send messages whether you are busy or asleep</span>
                </div>
              </div>
            </div>
            <div className={styles.miniGrid}>
              <div className={styles.bullet}>
                <Image
                  src="/svgs/featureicon4.svg"
                  alt="feature4"
                  height={50}
                  width={50}
                />
              </div>
              <div className={styles.featuretext}>
                <b>Groups search</b>
                <div className={styles.featurespan}>
                  <span> 128gb worth of free space for 2months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.center}>
        <div className={styles.cent}>
          <div className={styles.active}>
            <div className={styles.spot}>
              <Image
                src="/svgs/logooutline.svg"
                alt="logo"
                height={30}
                width={30}
              />
            </div>
            <div className={styles.hive}>Hive</div>
          </div>
          <div className={styles.activetext}>
            <p>
              The new way to connect with the people
              <br /> you care about
            </p>

            <Link href="/auth/signup">
              <button className={styles.btn}>Create an account</button>
            </Link>
          </div>
        </div>
      </section>
      <footer className={styles.ft}>
        <div className={styles.ftGrid}>
          <div>
            <h4>Menu</h4>
            <p>About</p>
            <p>Business</p>
            <p>FAQs</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Legal</h4>
            <p>Terms and Conditions</p>
            <p>Privacy</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>Help</p>
            <p>Email</p>
          </div>
          <div>
            <h4>Connect with us</h4>
            <ul>
              <li>
                <TwitterIcon />
              </li>
              <li>
                <GitHubIcon />
              </li>
              <li>
                <FacebookTwoToneIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copy}>Hive © 2021 </div>
      </footer>
    </>
  );
}
