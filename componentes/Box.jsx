import './Box.css'

export default function Box({icons : Icon, text}) {
    return(
        <>
            <div className="box">
                <Icon style={{fontSize: "30px", marginBottom: "3px"}}/>
                <p>{text}</p>
            </div>
        </>
    )
} 