function LiquidButton() {
    return (
        <>
            <div className="loader">
                <div className="loader-bg">
                    <span> <b style={{color:"#565D6C"}}>STAKE</b>  </span>
                </div>
                <div className="drops">
                    <div className="drop1"></div>
                    <div className="drop2"></div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="liquid">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                       result="liquid"/>
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export  default LiquidButton