import React from 'react'
import style from './style.module.css'

export const ExoPlanet = (props) => {
    const [planetData, setPlanetData] = React.useState()
    const [loading, setLoading] = React.useState(true)

    React.useEffect(()=> {
        setLoading(true)
        fetch('https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json')
        .then((response) => response.json())
        .then((data) => { 
            const new_arr = data.sort(function(a,b){return new Date(b.releasedate) - new Date(a.releasedate)}); //Sort array into release date - most recent at top
            console.log(new_arr); 
            setPlanetData(new_arr); 
            setLoading(false)
    });
    },[])

    return (
        <div className={`container-sm ${style.main}`}>
            {!loading && planetData.map((x,i) => {
                return (<>
                    <div className={style.col1}>{x.releasedate}</div>
                    <div className={style.col2}>{x.pl_name}</div>
                    <div className={style.col3}>{x.pl_rade}</div>
                    </>
            )
            })}
        </div>
    )
}

export default ExoPlanet