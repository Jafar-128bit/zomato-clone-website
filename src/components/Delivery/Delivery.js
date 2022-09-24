import './Delivery.css';
import DeliveryCollections from "../DeliveryCollections/DeliveryCollections";
import TopBrands from "../TopBrands/TopBrands";
import Filters from "../Filters/Filters";
import {filterComponents} from "../Filters/filterData";

const Delivery = () => {
    return (
        <div className="delivery">
            <div className="max-width">
                <Filters deliveryFilter={filterComponents}/>
            </div>
            <DeliveryCollections/>
            <TopBrands/>
        </div>
    );
}

export default Delivery;
