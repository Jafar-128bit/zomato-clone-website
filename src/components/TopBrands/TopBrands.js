import './TopBrands.css';
import { topBrandItem } from './brandList';
import Slider from "react-slick-slider";

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
};

const TopBrands = () => {
    return (
        <div className="topBrands max-width">
           <p className="collection__title">Top Brands For you</p>
            <Slider {...settings}>
                {topBrandItem.map((value, index, array) => {
                    return <div className="topBrands__container" key={index}>
                            <div className="topBrands__cover">
                                <img className="topBrands__image" src={value.cover} alt={value.name}/>
                            </div>
                            <p className="topBrands__title">{value.name}</p>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default TopBrands;
