import './Filters.css';
import FilterItems from "../FilterItems/FilterItems";

const Filters = ({ deliveryFilter }) => {
    return (
        <div className="filters">
            { deliveryFilter && deliveryFilter.map((value, index, array) => {
                return <FilterItems filter={value} key={value.id}/>
            })
            }
        </div>
    );
}

export default Filters;
