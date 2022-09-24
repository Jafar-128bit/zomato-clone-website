import filtersIcon from "../../assets/flatIcons/filter_Icon.png";
import timeIcon from "../../assets/flatIcons/time_Icon.png";

export const filterComponents = [
    {
        id: 1,
        icon: <img src={filtersIcon} alt={`${filtersIcon}`} height="15px"/>,
        title:"Filters",
    },
    {
        id: 2,
        title:"Rating 4.0+",
    },
    {
        id: 3,
        title:"Safe and Hygienic",
    },
    {
        id: 4,
        title:"Pure Veg",
    },
    {
        id: 5,
        icon:<img src={timeIcon} alt={`${timeIcon}`} height="15px"/>,
        title:"Delivery Time",
    },
    {
        id: 6,
        title:"Great Offers",
    },
];
