import './ExploreSection.css';
import { cardDishItem } from './cardData';
import { diningOutCardData } from './diningOutCardData';
import ExploreCard from "../ExploreCard/ExploreCard";
import ExploreCardDining from "../ExploreCard/ExploreCardDining";

const switchExplorationTitle = (tab) => {
    //TODO:Location name will be changed accordingly with location user provides
    switch (tab) {
        case "Delivery":
            return "Malad West Restaurants, Mumbai";
        case "Dining Out":
            return "Best Dining Restaurants near you in Malad West";
        case "Nightlife":
            return "Nightlife Restaurants in Malad West";
        default:
            return "Malad West Restaurants, Mumbai";
    }
};

const switchDataFlow = (tab) => {
    //Data flow controller function
    switch (tab) {
        case "Delivery":
            return cardDishItem;
        case "Dining Out":
            return diningOutCardData;
        case "Nightlife":
            return diningOutCardData;
        default:
            return cardDishItem;
    }
};

const switchComponent = (tab, id, value) => {
    switch (tab) {
        case "Delivery":
            return <ExploreCard key={id} value={value}/>;
        case "Dining Out":
            return <ExploreCardDining key={id} value={value}/>;
        case "Nightlife":
            return <ExploreCardDining key={id} value={value}/>;
        default:
            return <ExploreCard key={id} value={value}/>;
    }
}

const ExploreSection = ({ activeTab }) => {
    return (
        <div className="ExploreSection max-width">
            <p className="collection__title">
                {switchExplorationTitle(activeTab)}
            </p>
            <div className="ExploreSection__cardLayout">
                {switchDataFlow(activeTab).map((value, index, array) => {
                    return switchComponent(activeTab, index, value);
                })}
            </div>
        </div>
    );
}

export default ExploreSection;
