import React from 'react';
import HeroBanner from './Body/BannerList/HeroBanner';
import TeacherHeader from './Body/TeacherList/TeacherHeader';
import TeacherList from './Body/TeacherList/TeacherList';
import Banner from './Body/BannerList/Banner';
import Statistical from './Body/Statistical';
import Course from './Body/CousesList/Couses';
import Banner2 from './Body/BannerList/Banner2';
import Feedback from './Body/FeedBack';
import Banner3 from './Body/BannerList/Banner3';
import CousesNew from './Body/CousesList/CousesNew';
import '../index.css';


function Body() {
  return (
    <div className="body-container">
    <HeroBanner />
    <TeacherHeader />
    <TeacherList />
    <Banner />
    <Statistical />
    <Course />
    <Banner2 />
    <Feedback />
    <Banner3 />
    <CousesNew />

    </div>
  );
}
export default Body;