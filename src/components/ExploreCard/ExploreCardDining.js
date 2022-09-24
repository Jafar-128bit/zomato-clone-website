import './ExploreCard.css';
import starIcon from '../../assets/flatIcons/star_Icon.png';
import emptyPicture from '../../assets/flatIcons/empty_picture.png';

const ExploreCardDining = ({value}) => {
    const restaurant_name = value?.restaurant_name ?? "Loading...";
    const restaurant_tag = value?.restaurant_tag ?? "Loading...";
    const restaurant_address = value?.restaurant_address ?? "Loading...";
    const rating = value?.rating ?? 0;
    const distance = value?.distance ?? "Loading...";
    const distance_unit = value?.distance_unit ?? "";
    const price_for_two = value?.price_for_two ?? "Loading...";
    const openingTime = value?.openingTime ?? 0;
    const coverPhoto = value?.coverPhoto ?? emptyPicture;

    return (
       <div className="ExploreCardDining">
           <div className="ExploreCardDining__upperContainer">
               <img className="ExploreCardDining__image" src={coverPhoto} alt={emptyPicture}/>
               <p className="ExploreCardDining__distance">{distance} {distance_unit}</p>
           </div>
           <div className="ExploreCardDining__lowerContainer">
               <div className="ExploreCardDining__nameRating">
                   <p className="ExploreCardDining__name">{restaurant_name}</p>
                   <p className="ExploreCardDining__rating">{rating}
                       <img
                           className="ExploreCardDining__rating__starIcon"
                           src={starIcon}
                           alt="*"
                           height="10px"/>
                   </p>
               </div>
               <div className="ExploreCardDining__tagPrice">
                   <p className="ExploreCardDining__tags">{restaurant_tag}</p>
                   <p className="ExploreCardDining__price">₹{price_for_two} for two</p>
               </div>
               <div className="ExploreCardDining__address">{restaurant_address}</div>
               {openingTime === 0 ?
                   <div className="ExploreCardDining__openingTime"> </div>
                   : <div className="ExploreCardDining__openingTime">Opens at {openingTime}am</div> }
           </div>
       </div>
    );
};

export default ExploreCardDining;
