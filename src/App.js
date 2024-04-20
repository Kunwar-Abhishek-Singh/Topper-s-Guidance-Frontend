import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Pages/First_page/First_page';
import SecondPage from './Pages/Second_page/Second_page';
// import Signup_page from './Pages/Fourth_page/Signup_page';
import ThirdPage from './Pages/Third_page/Third_page';
import ProfileDashBoardLayout from './Pages/Dashboard/Profile_Dashboard_Layout';
import Dashboard from './Outlet_Routes/Dashboard/Dashboard';
import TopperProfile from './Outlet_Routes/Topper_Profile/Topper_Profile';
import Videos from './Outlet_Routes/Guidance/Videos/Videos';
import Articles from './Outlet_Routes/Guidance/Articles/Articles';
// import Poscasts from './Outlet_Routes/Guidance/Podcasts/Poscasts';
// import SscCglTier1 from './Outlet_Routes/Schedule/SSC_CGL_Tier_1/SSC_CGL_Tier_1';
import SSCCGLTier2 from './Outlet_Routes/Schedule/SSC_CGL_Tier_2/SSC_CGL_Tier_2';
import SSCCHSLTier1 from './Outlet_Routes/Schedule/SSC _CHSL_Tier_1/SSC_CHSL_Tier_1';
import SSCCGLTier1Books from './Outlet_Routes/Books/SSC_CGL_Tier_1/SSC_CGL_Tier_1_Books';
import SSCCGLTier2Books from './Outlet_Routes/Books/SSC_CGL_Tier_2/SSC_CGL_Tier_2_Books';
import SSCCHSLTier1Books from './Outlet_Routes/Books/SSC _CHSL_Tier_1/SSC_CHSL_Tier_1_Books';
import SSCCHSLTier2Books from './Outlet_Routes/Books/SSC_CHSL_Tier_2/SSC_CHSL_Tier_2_Books';
import Courses from './Outlet_Routes/Courses/Courses_By_Me_Free/Courses';
import CoursesByMePaid from './Outlet_Routes/Courses/Courses_By_Me_Paid/Courses_By_Me_Paid';
import FreeStudyFromYoutube from './Outlet_Routes/Courses/Free_Study_From_Youtube/Free_Study_From_Youtube';
import PaidCoursesOfOthers from './Outlet_Routes/Courses/Paid_Courses_Of_Others/Paid_Courses_Of_Others';
// import QuizCreatedByMeFree from './Outlet_Routes/Tests/Quiz_Created_By_Me_Free/Quiz_Created_By_Me_Free';
// import TestsCreatedByMe from './Outlet_Routes/Tests/Tests_Created_By_Me/SscTestSeries';
import TestsSeriesRecommendation from './Outlet_Routes/Tests/Tests_Series_Recommendation/Tests_Series_Recommendation';
import TestsAnalysisGuidance from './Outlet_Routes/Tests/Tests_Analysis_Guidance/Tests_Analysis_Guidance';
import DigitalBooksPaid from './Outlet_Routes/Ebooks_Study_Material/Digital_Books_Paid/Digital_Books_Paid';
import MyNotesFree from './Outlet_Routes/Ebooks_Study_Material/My_Notes_Free/My_Notes_Free';
import MyNotesPaid from './Outlet_Routes/Ebooks_Study_Material/My_Notes_Paid/My_Notes_Paid';

import PYQPDFFree from './Outlet_Routes/Ebooks_Study_Material/PYQ_PDF_Free/PYQ_PDF_Free';
import PyqpdfLayout from './Outlet_Routes/Ebooks_Study_Material/PYQ_PDF_Free/Pyq_pdf_Layout';
import PYQPDFFreeA from './Outlet_Routes/Ebooks_Study_Material/PYQ_PDF_Free/PYQ_PDF_Free_A';

// import PYQPDFAnswerKey from './Outlet_Routes/Ebooks_Study_Material/PYQ_PDF_Free/PYQ_PDF_AnswerKey';
import Blog from './Outlet_Routes/Blog/Blog';
import LiveChat from './Outlet_Routes/Live_Chat/Live_Chat';

import MyMeetUps from './Outlet_Routes/Events/My_Meet_Ups/My_Meet_Ups';
import MyYoutubeEvents from './Outlet_Routes/Events/My_Youtube_Events/My_Youtube_Events';
import AskMe from './Outlet_Routes/Ask_Me/Ask_Me';
import FAQOnBooks from './Outlet_Routes/FAQ/FAQ_On_Books/FAQ_On_Books';
import FAQOnMockTests from './Outlet_Routes/FAQ/FAQ_On_Mock_Tests/FAQ_On_Mock_Tests';
import FAQOnPostPreference from './Outlet_Routes/FAQ/FAQ_On_Post_Preference/FAQ_On_Post_Preference';
import Notification from './Outlet_Routes/News_Update/Notification/Notification';
import ExamAnalysisByMe from './Outlet_Routes/Analysis/Exam_Analysis_By_Me/Exam_Analysis_By_Me';
import ExamAnalysisByPinnacle from './Outlet_Routes/Analysis/Exam_Analysis_By_Pinnacle/Exam_Analysis_By_Pinnacle';
import FollowMe from './Outlet_Routes/Follow_Me/Follow_Me';
import PodCast from './Outlet_Routes/Guidance/Podcasts/PodCast';
import Test from './Outlet_Routes/Tests/Quiz_Created_By_Me_Free/Test';
// import TestSeries from './components/DashboardTestSeries/TestSeries';
import SscTestSeries from './Outlet_Routes/Tests/Tests_Created_By_Me/SscTestSeries';
// import Schedule from './Outlet_Routes/Schedule/SSC_CGL_Tier_1/Schedule';
import SpecificationPage from './Pages/Specification_page/Specification_page';
// import OTPVerification from './components/Login_Signup/OTP_Verification';
import RegistrationOtppage from './Pages/OTP  Page/RegistrationOtppage';
import SignupPage from './Pages/Fourth_page/Signup_page';
import LoginPage from './Pages/Login_Page/LoginPage';
// import Signup_login_page from './Pages/Signup_Login_page/Signup_login_page';
import MyNotesSpecificationPages from './Pages/Specification_page/MyNotesSpecification_Pages';
import DashboardTopperSpecificationPages from './Pages/Specification_page/DashboardTopperSpecification_pages';
import GuidanceArticleSpecificationPage from './Pages/Specification_page/GuidanceArticleSpecificationPage';

import MyGiveAwayEvents from './Outlet_Routes/Events/My_Give_Away_Events/My_Give_Away_Events';
import EventLayOut from './Outlet_Routes/Events/My_Give_Away_Events/EventLayOut';
import EndEvent from './Outlet_Routes/Events/My_Give_Away_Events/Ended_Event';
import EventSpecificationPage from './Pages/Specification_page/EventSpecification_Page';
import PrivateComponent from './components/Private_component/PrivateComponent';
import { Context } from './components/Context_Component/Context';
import ForgotPasswordOtpPage from './Pages/OTP  Page/ForgotPasswordOtpPage';
import Update_Password from './Pages/Update_Password';
// import Password_Update from './components/Login_Signup/password_update';


let payload = {
  meetingNumber: 5021457450,
  role: 0,
  sdkKey: 'J24K4OmFQpeoSlv8u1aw8w',
  sdkSecret: '0CqzZnAj0bEJAKFH4PiA2aWdmT9NUdhl',
  passWord: 'Abhi07',
  userName: 'Testing',
  userEmail: '',
  leaveUrl: 'https://kunwar-abhishek-singh.github.io/Topper-s-Guidance-Frontend/'

};

function App() {


  return (
    <Context>
      <BrowserRouter scrollRestoration="manual">
        <Routes>
          <Route path='/Topper-s-Guidance-Frontend/' element={<FirstPage />} />
          {/* <Route path='/signup' element={<Signup_login_page/>}/> */}
          <Route path='/Topper-s-Guidance-Frontend/:exam_selection' element={<SecondPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route exact path='/signup/:email' element={<RegistrationOtppage />} />
          <Route exact path='/forgot_password/otp_verification/:email' element={<ForgotPasswordOtpPage />} />
          <Route exact path='/forgot_password/:email/password_update' element={<Update_Password />} />
          <Route path='/profile/:topper_name' element={<ThirdPage />} />
          <Route element={<PrivateComponent />}>
            <Route path='/logged_in_profile_dashboard/:topper_name' element={<ProfileDashBoardLayout />}>
              <Route path='/logged_in_profile_dashboard/:topper_name/Dashboard' element={<Dashboard />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/Profile' element={<TopperProfile />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/Videos' element={<Videos />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/Articles' element={<Articles />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/Podcasts' element={<PodCast />} />
              {/* <Route path='/logged_in_profile_dashboard/:topper_name/ssc_cgl_tier_1' element={<Schedule />} /> */}
              <Route path='/logged_in_profile_dashboard/:topper_name/ssc_cgl_tier_2' element={<SSCCGLTier2 />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/ssc_chsl_tier_1' element={<SSCCHSLTier1 />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/ssc_chsl_tier_2' element={<SSCCGLTier2 />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/ssc_cgl_tier_1_books' element={<SSCCGLTier1Books />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/ssc_cgl_tier_2_books' element={<SSCCGLTier2Books />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/ssc_chsl_tier_1_books' element={<SSCCHSLTier1Books />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/ssc_chsl_tier_2_books' element={<SSCCHSLTier2Books />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/courses_by_me_free' element={<Courses />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/Courses_by_me_paid' element={<CoursesByMePaid />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/free_study_from_youtube' element={<FreeStudyFromYoutube />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/paid_courses_of_others' element={<PaidCoursesOfOthers />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/quiz_by_me' element={<Test />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/tests_by_me' element={<SscTestSeries />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/test_series_recommen' element={<TestsSeriesRecommendation />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/test_analysis' element={<TestsAnalysisGuidance />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/digital_books' element={<DigitalBooksPaid />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/digital_books/digitalBooksPaid' element={<SpecificationPage />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/my_notes_free/MyNotesFree' element={<MyNotesSpecificationPages />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/Dashboard/Toppers' element={<DashboardTopperSpecificationPages />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/Articles/Article' element={<GuidanceArticleSpecificationPage />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/my_give_away_events/activeEvent' element={<EventSpecificationPage />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/my_notes_free' element={<MyNotesFree />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/my_notes_paid' element={<MyNotesPaid />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/pyq_pdf' element={<PyqpdfLayout />} >
                <Route path='' element={<PYQPDFFree />} />
                <Route path='chapterwise' element={<PYQPDFFreeA />} />
                {/* <Route path='answerkey' element={<PYQPDFAnswerKey/>}/> */}
              </Route>
              <Route path='/logged_in_profile_dashboard/:topper_name/blog' element={<Blog />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/live_chat' element={<LiveChat payload={payload} />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/my_give_away_events' element={<EventLayOut />}>
                <Route path='' element={<MyGiveAwayEvents />} />
                <Route path='endedevent' element={<EndEvent />} />
              </Route>
              <Route path='/logged_in_profile_dashboard/:topper_name/my_meetups' element={<MyMeetUps />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/my_youtube_events' element={<MyYoutubeEvents />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/ask_me' element={<AskMe />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/faq_on_books' element={<FAQOnBooks />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/faq_on_mock_tests' element={<FAQOnMockTests />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/faq_on_post_preference' element={<FAQOnPostPreference />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/notifications' element={<Notification />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/exam_analysis_by_me' element={<ExamAnalysisByMe />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/exam_analysis_by_pinnacle' element={<ExamAnalysisByPinnacle />} />
              <Route path='/logged_in_profile_dashboard/:topper_name/follow_me' element={<FollowMe />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
