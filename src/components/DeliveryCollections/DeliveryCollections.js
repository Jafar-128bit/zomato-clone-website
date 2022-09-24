import './DeliveryCollections.css';
import { deliveryScrollItems } from './scrollData';
import Slider from "react-slick-slider";

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
};

const DeliveryCollections = () => {
    return (
        <div className="deliveryCollection">
            <div className="max-width deliveryCollection__cover">
                <div className="collection__title">Inspiration for your first order</div>
                <Slider {...settings}>
                    {deliveryScrollItems.map((value, index, array) => {
                        return <div className="ScrollingItems"  key={index}>
                                <img
                                    className="ScrollingItems__itemImage"
                                    src={value.cover}
                                    alt={value.name}
                                />
                                <p className="ScrollingItems__itemTitle">{value.title}</p>
                            </div>
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default DeliveryCollections;
