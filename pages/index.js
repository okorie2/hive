import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";

import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <nav>
        <div className={styles.nav}>
          <div className={styles.active}>
            <div className={styles.spot}></div>
            <div className={styles.hiveright}>Hive</div>
          </div>
          <div className={styles.navlist}>About</div>
          <div className={styles.navlist}>Business</div>
          <div className={styles.navlist}>FAQs</div>
          <div className={styles.navlist}>Contact</div>
          <div className={styles.navlist}>
            <button>
              <Link href="/auth/signin">
                <a>Log in</a>
              </Link>
            </button>
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
            <button>
              <Link href="/auth/signup">
                <a>Create an account</a>
              </Link>
            </button>
          </div>
          <div className={styles.right}>
            <Image
              src="/Mac.svg"
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
                  src="/Vector1.svg"
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
                  src="/Vector2.svg"
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
                  src="/Vector3.svg"
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
        <div className={styles.todGrid}>
          <div>
            <div>
              <Image
                src="/Man.svg"
                height={414} // Desired size with correct aspect ratio
                width={414}
                alt="imag"
              />
            </div>
          </div>
          <div className={styles.rii}>
            <h4>Enjoy Amazing Features</h4>
            <div className={styles.miniGrid}>
              <div className={styles.bullet}></div>
              <div>
                <p>
                  <b>
                    <b>Disappearing mvessages</b>
                  </b>{" "}
                  <br />
                  Set your messages to disappear at a pre-defined time
                </p>
              </div>
            </div>
            <div className={styles.miniGrid}>
              <div className={styles.bullet}></div>
              <div>
                <p>
                  <b>Video call upto 20 people</b> <br />
                  Nothing is more fun than more people on the video chat!
                </p>
              </div>
            </div>
            <div className={styles.miniGrid}>
              <div className={styles.bullet}></div>
              <div>
                <p>
                  <b>Schedule your messages for later</b> <br />
                  Send messages whether you are busy or asleep
                </p>
              </div>
            </div>
            <div className={styles.miniGrid}>
              <div className={styles.bullet}></div>
              <div>
                <p>
                  <b>Groups search</b> <br />
                  128gb worth of free space for 2months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.center}>
        <div className={styles.cent}>
          <div className={styles.active}>
            <div className={styles.spot}></div>
            <div>Hive</div>
          </div>
          <div>
            <p>
              The new way to connect with the people
              <br /> you care about
            </p>
            <button className={styles.btn}>
              <Link href="/auth/signup">
                <a>Create an accountt</a>
              </Link>
            </button>{" "}
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
            <p>Terms and Consitions</p>
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
