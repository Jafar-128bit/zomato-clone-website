import './FilterItems.css';

const FilterItems = ({filter}) => {
    return (
        <div className="filterItems">
            {filter.icon && filter.icon}
            <div className="filterItems__names">{filter.title}</div>
        </div>
    );
}

export default FilterItems;
