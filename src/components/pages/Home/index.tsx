import AboutAuthorSection from "./Components/About";
import HomeBannerSection from "./Components/Banner";
import CoachingSection from "./Components/Coaching";
import FeedBackSection from "./Components/Feedback";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <HomeBannerSection />

      <AboutAuthorSection />

      <CoachingSection />

      <FeedBackSection />
    </div>
  );
};

export default HomePage;
