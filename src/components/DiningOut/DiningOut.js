import './DiningOut.css';
import Filters from "../Filters/Filters";
import DiningOutCollections from "../DiningOutCollections/DiningOutCollections";
import {filterComponents} from "../Filters/filterData";

const DiningOut = () => {
    return (
        <div className="diningOut">
            <DiningOutCollections/>
            <div className="max-width">
                <Filters deliveryFilter={filterComponents}/>
            </div>
        </div>
    );
}

export default DiningOut;
