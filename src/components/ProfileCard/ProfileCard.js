

function ProfileCard ({titulo , descripcion , img}){


    return(
            <div>
                <img src={img} alt="imagen-del-producto" width="400px" height="268px"/>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <button>+</button><button>-</button>
            </div>
    )
}

export default ProfileCard