import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";

import {
  Nav,
  Navlist,
  Tugrid,
  Left,
  Right,
  Mid,
  Trigrid,
  Box,
  Smc,
  Tod,
  TodGrid,
  Rii,
  FeatureHeader,
  MiniGrid,
  Bullet,
  FeatureText,
  FeatureSpan,
  Center,
  Cent,
  Active,
  Spot,
  Hive,
  Footer,
} from "./homeStyles";
export default function Home() {
  return (
    <>
      <Nav>
        <div className="active">
          <div className="spot">
            <Image
              src="/svgs/logohighlight.svg"
              alt="logo"
              height={30}
              width={30}
            />
          </div>
          <div className="hiveright">Hive</div>
        </div>
        <Navlist>About</Navlist>
        <Navlist>Business</Navlist>
        <Navlist>FAQs</Navlist>
        <Navlist>Contact</Navlist>
        <Navlist>
          <Link href="/auth/signIn/signin">
            <a>

            <button>Log in</button>
            </a>
          </Link>
        </Navlist>
      </Nav>

      <section>
        <Tugrid>
          <Left>
            <h1>Connect with your family and friends anytime, anyday</h1>
            <p>
              Enjoy amazing features and instant messaging that connects you to
              the people you love and care about.
            </p>

            <Link href="/auth/signUp/signup" >
              <a>

              <button>Create an account</button>
              </a>
            </Link>
          </Left>
          <Right>
            <Image
              src="/svgs/Mac.svg"
              height={430} // Desired size with correct aspect ratio
              width={430}
              alt="imag"
            />
          </Right>
        </Tugrid>
      </section>
      <Mid>
        <div>
          <h2>Why People Love Hive</h2>
        </div>
        <Trigrid>
          <div>
            <Box>
              <Smc>
                <Image
                  src="/svgs/Vector1.svg"
                  height={23} // Desired size with correct aspect ratio
                  width={34}
                  alt="imag"
                />
              </Smc>
            </Box>
            <h4>instant</h4>
            <p>
              Send instant messages to your family
              <br /> and loved ones
            </p>
          </div>
          <div>
            <Box>
              <Smc>
                <Image
                  src="/svgs/Vector2.svg"
                  height={23} // Desired size with correct aspect ratio
                  width={34}
                  alt="imag"
                />
              </Smc>
            </Box>
            <h4>Secure</h4>
            <p>
              Your chats are end to end encrypted
              <br /> and private{" "}
            </p>
          </div>
          <div>
            <Box>
              <Smc>
                <Image
                  src="/svgs/Vector3.svg"
                  height={23} // Desired size with correct aspect ratio
                  width={34}
                  alt="imag"
                />
              </Smc>
            </Box>
            <h4>fun</h4>
            <p>
              Enjoy amazing fun features that <br />
              makes your messaging pleasurable
            </p>
          </div>
        </Trigrid>
      </Mid>

      <Tod>
        <FeatureHeader>
          <span>Enjoy Amazing Features</span>
        </FeatureHeader>
        <TodGrid>
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
          <Rii>
            <MiniGrid>
              <Bullet>
                <Image
                  src="/svgs/featureicon1.svg"
                  alt="feature1"
                  height={50}
                  width={50}
                />
              </Bullet>
              <FeatureText>
                <b>Disappearing messages</b>
                <br />
                <FeatureSpan>
                  <span>
                    Set your messages to disappear at a pre-defined time
                  </span>
                </FeatureSpan>
              </FeatureText>
            </MiniGrid>
            <MiniGrid>
              <Bullet>
                <Image
                  src="/svgs/featureicon2.svg"
                  alt="feature2"
                  height={50}
                  width={50}
                />
              </Bullet>
              <FeatureText>
                <b>Video call up to 20 people</b>
                <FeatureSpan>
                  <span>
                    {" "}
                    Nothing is more fun than more people on the video chat!
                  </span>
                </FeatureSpan>
              </FeatureText>
            </MiniGrid>
            <MiniGrid>
              <Bullet>
                <Image
                  src="/svgs/featureicon3.svg"
                  alt="feature3"
                  height={50}
                  width={50}
                />
              </Bullet>
              <FeatureText>
                <b>Schedule your messages for later</b>
                <FeatureSpan>
                  <span>Send messages whether you are busy or asleep</span>
                </FeatureSpan>
              </FeatureText>
            </MiniGrid>
            <MiniGrid>
              <Bullet>
                <Image
                  src="/svgs/featureicon4.svg"
                  alt="feature4"
                  height={50}
                  width={50}
                />
              </Bullet>
              <FeatureText>
                <b>Groups search</b>
                <FeatureSpan>
                  <span> 128gb worth of free space for 2months</span>
                </FeatureSpan>
              </FeatureText>
            </MiniGrid>
          </Rii>
        </TodGrid>
      </Tod>
      <Center>
        <Cent>
          <Active>
            <Spot>
              <Image
                src="/svgs/logooutline.svg"
                alt="logo"
                height={30}
                width={30}
              />
            </Spot>
            <Hive>Hive</Hive>
          </Active>
          <div className="activetext">
            <p>
              The new way to connect with the people
              <br /> you care about
            </p>

            <Link href="/auth/signUp/signup" passHref>
              <button>Create an account</button>
            </Link>
          </div>
        </Cent>
      </Center>
      <Footer>
        <div className="ftGrid">
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
        <div className="copy">Hive © 2021 </div>
      </Footer>
    </>
  );
}
