type LiquidTextProp = {
    text: String
}
function LiquidText(props: LiquidTextProp) {
    return (
        <>
            <div className="text">
                <svg viewBox="0 0 100 20" >
                    <defs>
                        <pattern id="wave" x="0" y="0" width="100%" height="100%" patternUnits="userSpaceOnUse">
                            <path id="wavePath"
                                  d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                                  mask="url(#mask)" fill="#5C89BA">
                                <animateTransform attributeName="transform" begin="0s" dur="1.5s" type="translate"
                                                  from="0,0" to="40,0" repeatCount="indefinite"/>
                            </path>
                        </pattern>
                    </defs>
                    <text text-anchor="middle" x="50" y="15" fill="url(#wave)" fill-opacity="1" className="liquid">
                        {props.text}
                    </text>
                </svg>
            </div>
        </>
    )
}
export default LiquidText;