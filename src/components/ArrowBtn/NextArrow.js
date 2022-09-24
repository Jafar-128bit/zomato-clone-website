const NextArrow = (props) => {
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
            {/*<img className="arrow__btn" src={nextIcon} alt="nxt" height="15px"/>*/}
        </div>
    );
};

export default NextArrow;
