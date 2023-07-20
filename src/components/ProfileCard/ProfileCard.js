import "bulma/css/bulma.css";

function ProfileCard ({titulo, descripcion , img}){


    return(
            <div>
                <img src={img} alt="imagen-del-producto" width="400px" height="268px"/>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <div className="is-flex is-justify-content-end">
                    <button className="mr-3">+</button>
                    <button>-</button>
                </div>
            </div>
    )
}

export default ProfileCard