import React, {useState} from 'react'
import Modal from '../modal'
import "./style.css"

let visible = false;
export default function Card({title, image, body=[]}){
    const [isModalVisible, setIsModVisible] = useState(false);
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={image} alt=''/>
            </div>

            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>

                <div className="card-body">
                    <p>{body.role}</p>                    
                </div>   
            </div>

            <div className="btn">
                <button onClick={() => {setIsModVisible(true)}}>
                    <a>
                        Ver mais
                    </a>
                </button>
            </div>

            {isModalVisible?(
                <Modal onClose={()=>setIsModVisible(false)}>
                    <h2>{title}</h2>               

                    <p>{body.role}</p>
                    <p>{body.classroom}</p>
                    <p>Email: {body.email} | Lattes: {body.lattes}</p>
                    {body.tel === " " ? null : <p>{body.tel}</p> }
                    <p>Área de Interesse:</p>
                    <hr></hr>
                    <p>{body.areaInterest}</p>
                </Modal>
            ): null}
        </div>
    )
}