import './Home.css';
import TabOptions from "../TabOptions/TabOptions";
import {useState} from "react";
import Delivery from "../Delivery/Delivery";
import DiningOut from "../DiningOut/DiningOut";
import Nightlife from "../Nightlife/Nightlife";
import ExploreSection from "../ExploreSection/ExploreSection";

const Home = () => {
    const [ activeTab, setActiveTab ] = useState("Delivery");
    const getTabOptions = (tab) => {
        switch (tab){
            case "Delivery":
                return <Delivery/>;
            case "Dining Out":
                return <DiningOut/>;
            case "Nightlife":
                return <Nightlife/>;
            default:
                return <Delivery/>;
        }
    }

    return (
        <>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getTabOptions(activeTab)}
            <ExploreSection activeTab={activeTab}/>
        </>
    );
}

export default Home;
