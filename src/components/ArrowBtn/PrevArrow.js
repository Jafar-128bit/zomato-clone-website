const PrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div className={className}
             style={{
                 ...style,
                 background: "white",
                 borderRadius: "50%",
                 display: "flex",
                 justifyContent: "center",
                 padding: "4px",
             }}
             onClick={onClick}
        >
            {/*<img className="arrow__btn" src={prevIcon} alt="prv" height="15px"/>*/}
        </div>
    );
};

export default PrevArrow;
