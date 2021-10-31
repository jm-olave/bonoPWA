import React, {useEffect} from 'react'

export const Card = ({characters = []}) => {
    useEffect(() => {
        console.log(characters);
    },)
    return (

        <div className = "row">
            {
                characters.map((item, index) =>(
                    <div key ={index} className="col">
                        <div  class="card" >
                            <img class="card-img-top" src = {item.thumbnail.path + "."+  item.thumbnail.extension }   alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">Description: {item.description}</p>
                                
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
            
        
    )
}