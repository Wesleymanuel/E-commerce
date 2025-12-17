import './Box.css'
import { LiaShippingFastSolid } from "react-icons/lia";

export default function Box() {
    return(
        <>
            <div className="box">
                <LiaShippingFastSolid style={{fontSize: "30px", marginBottom: "3px"}}/>
                <p>entrega hoje</p>
            </div>
        </>
    )
} 