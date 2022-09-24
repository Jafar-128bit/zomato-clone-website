import './DiningOutCollections.css';
import {diningOutCollectionData} from './diningOutCollectionData';
import Slider from "react-slick-slider";
import rightCaret from '../../assets/flatIcons/caretRigth_icon.png';
import rightCaretBlack from '../../assets/flatIcons/nextIcon.png';

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
};

const DiningOutCollections = () => {
    return (
        <div className="DiningOutCollections">
            <div className="max-width DiningOutCollections__cover">
                <div className="collection__title">Collections</div>
                <div className="DiningOutCollections__info">
                    <p className="DiningOutCollections__tagLine">Explore curated lists of top restaurants, cafes, pubs,
                        and bars in Mumbai, based on trends</p>
                    <p className="DiningOutCollections__exploreLink">
                        All collections in Mumbai
                        <img
                            className="DiningOutCollections__caretRightIcon1"
                            src={rightCaretBlack}
                            alt="right"
                            height="12px"
                        />
                    </p>
                </div>
                <Slider {...settings}>
                    {diningOutCollectionData.map((value, index, array) => {
                        return (
                            <div className="max-width" key={value.id}>
                                <div className="DiningOutCollections__coverCard">
                                    <img
                                        className="DiningOutCollections__coverImage"
                                        src={value.cover}
                                        alt={value.id}
                                    />
                                    <section className="DiningOutCollections__filter">

                                    </section>
                                    <p className="DiningOutCollections__coverTitle position-Class">{value.title}</p>
                                    <div className="DiningOutCollections__placesInfo position-Class">
                                        <p className="DiningOutCollections__placesNumber">{value.placeNumber} Places</p>
                                        <img
                                            className="DiningOutCollections__caretRightIcon2"
                                            src={rightCaret}
                                            alt="right"
                                            height="15px"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default DiningOutCollections;
