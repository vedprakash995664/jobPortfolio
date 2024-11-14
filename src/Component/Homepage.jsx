import React from "react";
import Header from './Header'
import Frame from './Frame'
import WorkProcessWebsite from './WorkProcessWebsite'
import Category from './Category'
import FeaturedJob from './FeaturedJob'
import FeaturedCompanies from "./FeaturedCompanies";
import Reviews from './Reviews'
import Action from './Action'
import Foot from './Foot'
import Headernext from "./Headnext";
function Home(){
    return(
        <div style={{ backgroundColor: "#F7F7F8" }}>
        {/* <div>Homepage</div> */}
        <Header/>
        <Headernext/>
        <Frame/>
        <Category/>
        <FeaturedJob/>
        <FeaturedCompanies/>
        <WorkProcessWebsite/>
        <Reviews/>
        <Action/>
        <Foot/>
        </div>
    )
}
export default Home;