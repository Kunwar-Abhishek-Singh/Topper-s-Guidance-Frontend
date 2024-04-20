import React from 'react';
import Topper_Profiledata from './Topper_Profiledata';

const topperProfileData = [
  {
    id:1,
    imgUrl:"https://media.istockphoto.com/id/1455943818/photo/the-architect-takes-notes-on-the-blueprint-then-inputs-them-into-the-laptop-to-keep-an.jpg?s=1024x1024&w=is&k=20&c=TsdL0sv_yRI4XreuqMGyHtoblc40X6aUnfVKK-wIKmo=",
    topperName:"Jitendra Kumar Thakur",
    type:"topper expert",
    location:"Gurugram, Haryana, India-122001",
    contactBtn: "Contact",
    profile:"Profile",
    overview:"I used to teach in BM BOYS School and Krishna Balniketan, orphanages of Udupi as a part of social work while working with a community service club, ROTARACT.",
    language:"Languages Spoken",
    languageEng:"English",
    languageHnd:"Hindi",
    education:"Education",
    university:"Ranchi University",
    graduate:"Bechelor of Arts",
    address:"Address",
    permamentAdd:"Bhagalpur,Bihar, India - 813108",
    verifiedInfo:"Verified Info",
    phoneVerify:"Phone Verified",
    report:"Report this Profile",
    rightSideBar: [
      {
        heading:"Also have a look at",
        studyGuide:"How to prepare polity for IAS Prelims",
        selfStudyEco:"Self Study plan for Economics",
        selfStudyHis:"Self Study plan for Indian History",
        selfStudyGeo:"Self Study plan for Physical Geography",
        selfStudyEssay:"Self Study plan for Essay",
        selfStudySci:"Self Study plan for Science",
      }
    ]
  }
]

const TopperProfile = () => {
  return (
    <>      
        <div>
          {topperProfileData.map((item)=> (
            <Topper_Profiledata 
            imgUrl={item.imgUrl}
            topperName={item.topperName}
            type={item.type}
            location={item.location}
            contactBtn={item.contactBtn}
            profile={item.profile}
            overview={item.overview}
            language={item.language}
            languageEng={item.languageEng}
            languageHnd={item.languageHnd}
            education={item.education}
            university={item.university}
            graduate={item.graduate}
            address={item.address}
            permamentAdd={item.permamentAdd}
            verifiedInfo={item.verifiedInfo}
            phoneVerify={item.phoneVerify}
            report={item.report}
            />
          ))}          
        </div>        
    </>
  )
}

export default TopperProfile;
