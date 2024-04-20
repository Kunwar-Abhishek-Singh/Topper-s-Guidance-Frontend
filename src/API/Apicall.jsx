import { Apifetchrequest } from "./Apirequest";
import { Backend_Url } from "./BackendUrl";

export const Askmeapi= async(data,header)=>{
    return await Apifetchrequest("POST",`${Backend_Url}askme`, data, header);
}

export const alltoppers = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}toppers`)
}

export const exam_selection = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}exam_selection`)
}

export const exam_held_under = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}exam_held_under`)
}

export const upcoming_webinar = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}upcoming_webinar`)
}

export const topper_tips = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}topper_tips`)
}

export const subheader = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}subheader`)
}

export const faqdata = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}faq_data`)
}

export const newsupdate = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}news_update`)
}

export const plan_strategy = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}plan_strategy`)
}

export const blog_data = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}blog_data`)
}

export const registration_otp = async(data)=>{
    return await Apifetchrequest("POST", `${Backend_Url}signup_otp_with_mobile`, data)

}

export const OtpVerify = async(data)=>{
    return await Apifetchrequest("POST",`${Backend_Url}otpverify`,data)
}

export const forgot_pwd_otpVerify = async(data)=>{
    return await Apifetchrequest("POST",`${Backend_Url}forgot_pwd_otp_verify`,data)
}

export const updatePassword = async(data)=>{
    return await Apifetchrequest("POST",`${Backend_Url}updatepassword`, data)
}

export const get_registration_otp = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}signup_otp_with_mobile`)
}

export const register_student_data = async (data, header) => {
    return await Apifetchrequest("POST", `${Backend_Url}signup`, data , header);
}

export const signin_student_data = async (data)=>{
    return await Apifetchrequest("POST", `${Backend_Url}signin`, data)
}

export const signout_student_data = async (data)=>{
    return await Apifetchrequest("POST", `${Backend_Url}signout`, data)
}

export const jwt_Authenticate = async(data)=>{
    return await Apifetchrequest("POST", `${Backend_Url}jwt_authenticate`, data)
}

export const get_single_user_regs_data = async(email)=>{
    return await Apifetchrequest("GET",`${Backend_Url}getsingleuser/${email}`)
}

export const get_regs_details = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}get_regs_details`)
}

export const guidanceArticles = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}guidance_articles`);
}

export const dashboardtoppers = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboard_toppers`);
}

export const dashboardbooks = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboard_books`);
}

export const dashboardEbooks = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboard_ebooks`);
}

export const dashboardtestseries = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboard_test_series`);
}

export const dashboardrelatedposts = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}dashboard_related_post`);
}

export const dashboardguidancevideos = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboard_guidance_videos`);
}

export const dashboardbooksdigitalbooks = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboard_books_digital_books`);
}

export const dashboardEbooksStudyMaterial = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboard_ebooks_digital_books_paid`);
}

export const dashboardEbooksMyNotes = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}dashboard_ebooks_mynote_free`);
}

export const dashboardPyqRrb = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboardpyqrrb`);
}

export const dashboardPyqSsc = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboardpyqssc`);
}

export const dashboardCoursesSelectedCourses = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}selectedcourses`);
}

export const dashboardCoursesPaid = async ()=>{
    return await Apifetchrequest("GET",`${Backend_Url}popularcourses`);
}

export const dashboardSscTestSeries = async ()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboardssctestseries`);
}

export const dashboardSscMockTestSeries = async ()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboardsscmocktestseries`);
}

export const dashboardRrbTestSeries = async ()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboardrrbtestseries`);
}

export const dashboardBankingTestSeries = async()=>{
    return await Apifetchrequest("GET",`${Backend_Url}dashboardbanktestseries`);
}