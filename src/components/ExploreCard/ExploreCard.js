import './ExploreCard.css';
import orderIcon from '../../assets/flatIcons/order_icon.webp';
import safetyIcon from '../../assets/flatIcons/max_safety.webp';
import starIcon from '../../assets/flatIcons/star_Icon.png';

const ExploreCard = ({value}) => {
    const restaurant_name = value?.restaurant_name ?? "Loading...";
    const restaurant_tags = value?.restaurant_tags ?? "Loading...";
    const price_for_one = value?.price_for_one ?? "Loading...";
    const rating = value?.rating ?? "#";
    const offer_condition = value?.offer?.offer_condition ?? false;
    const offerCheck = (condition) => {
        return condition === true ? <p className="ExploreCard__offer">{value?.offer?.offer_amount}% OFF UPTO 100</p> :
            <p className="ExploreCard__offer"> </p>
    };
    const no_of_order = value?.no_of_order ?? "Many";
    const delivery_time = value?.delivery_time ?? 40;
    const safety_delivery_options = value?.safety_delivery_options ?? false;

    return (
        <div className="ExploreCard">
            <div className="ExploreCard__upperContainer">
                <img className="ExploreCard__image" src={value?.image} alt="img"/>
                <div className="ExploreCard__upperInfo">
                    {offerCheck(offer_condition)}
                    <p className="ExploreCard__deliveryTime">{delivery_time} min</p>
                </div>
            </div>
            <div className="ExploreCard__lowerContainer">
                <div className="ExploreCard__nameRating">
                    <p className="ExploreCard__name">{restaurant_name}</p>
                    <p className="ExploreCard__rating">
                        {rating}
                        <img className="ExploreCard__rating__starIcon" src={starIcon} alt="*" height="10px"/>
                    </p>
                </div>
                <div className="ExploreCard__tagsPrice">
                    <p className="ExploreCard__tags">{restaurant_tags}</p>
                    <p className="ExploreCard__price">₹{price_for_one} for one</p>
                </div>
                <div className="ExploreCard__separator"> </div>
                <div className="ExploreCard__extraInfo">
                    <div className="ExploreCard__orderInfo">
                        <img src={orderIcon} alt="ord" height="18px"/>
                        <p className="ExploreCard__orderNumber">{no_of_order}+ orders placed from here recently</p>
                    </div>
                    <img src={safetyIcon} alt="ms" height="18px"/>
                </div>
            </div>
        </div>
    );
};

export default ExploreCard;
