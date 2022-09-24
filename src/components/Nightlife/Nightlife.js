import './Nightlife.css';
import DiningOutCollections from "../DiningOutCollections/DiningOutCollections";
import Filters from "../Filters/Filters";
import {filterComponents} from "../Filters/filterData";

const Nightlife = () => {
    return (
        <div className="nightLife">
            <DiningOutCollections/>
            <div className="max-width">
                <Filters deliveryFilter={filterComponents}/>
            </div>
        </div>
    );
}

export default Nightlife;
