import React, {useState} from 'react'
import Modal from '../modal'
import "./style.css"

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
                    {body.classroom === " " ? null : <p>{body.classroom}</p>}
                    <p>Email: <a href={"emailto:"+ body.email} >{body.email} </a>| Lattes: <a href={body.lattes}> Acesse </a></p>
                    {body.tel === " " ? null : <p>{body.tel}</p> }
                    <p>Área de Interesse:</p>
                    <hr></hr>
                    {body.areaInterest === " " ? null : <p>{body.areaInterest}</p>}
                </Modal>
            ): null}
        </div>
    )
}