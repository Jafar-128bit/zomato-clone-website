import './TabOptions.css';
import tabIcon01 from '../../assets/tabIcons/tabIcon_01.webp';
import tabIcon02 from '../../assets/tabIcons/tabIcon_02.webp';
import tabIcon03 from '../../assets/tabIcons/tabIcon_03.webp';
import tabIcon01Inactive from '../../assets/tabIcons/tabIcon_01_inactive.webp';
import tabIcon02Inactive from '../../assets/tabIcons/tabIcon_02_inactive.webp';
import tabIcon03Inactive from '../../assets/tabIcons/tabIcon_03_inactive.webp';

const tabs = [
    {
        id: 1,
        name: "Delivery",
        active_img: tabIcon01,
        backdrop: "#fceec0",
        inactive_img: tabIcon01Inactive,
    },
    {
        id: 2,
        name: "Dining Out",
        active_img: tabIcon02,
        backdrop: "#e5f3f3",
        inactive_img: tabIcon02Inactive,
    },
    {
        id: 3,
        name: "Nightlife",
        active_img: tabIcon03,
        backdrop: "#edf4ff",
        inactive_img: tabIcon03Inactive,
    },
]
const TabOptions = ({activeTab, setActiveTab}) => {
    return (
        <div className="tabOptions">
            <div className="tabOptions__optionWrapper max-width">
                {tabs.map((value, index, array) => {
                    return (
                        <div className={
                            `tabOptions__tabItems absolute-center cursor-pointer 
                            ${activeTab === value.name && "active-tab"}`}
                             onClick={() => setActiveTab(value.name)}
                             key={value.id}
                        >
                            <div
                                className="tabOptions__tabIconContainer absolute-center"
                                style={{backgroundColor: `${activeTab === value.name ? value.backdrop : ""}`}}
                            >
                                <img
                                    className="tabOptions__tabIcon"
                                    src={activeTab === value.name ? value.active_img : value.inactive_img}
                                    alt="imgTab"
                                />
                            </div>
                            <p className="tabOptions__tabName">{value.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TabOptions;
