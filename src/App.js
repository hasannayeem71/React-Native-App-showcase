import assets from "./assets";
import { Download, Features, SectionWrapper } from "./components";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs Start selling & Growing."
        description="Buy, store, collect NFTs, Exchange and earn crypto. 
      Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace "
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is build using Expo Which runs natively on Andrio and iOS. You can easyly get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The First screen lists all the NFTs while the second one shows the details of a sepeific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download codeLink="https://github.com/hasannayeem71/nft-market-place-react-native" />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made With love by <span className="bold">Mahmudul Hasan Nayeem</span>
        </p>
      </div>
    </>
  );
};

export default App;
