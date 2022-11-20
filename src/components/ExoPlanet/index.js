import React from 'react';
import style from './style.module.scss';

export const ExoPlanet = (props) => {
  const [planetData, setPlanetData] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch('https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json')
      .then((response) => response.json())
      .then((data) => {
        const new_arr = data.sort(function (a, b) {
          return new Date(b.releasedate) - new Date(a.releasedate);
        }); //Sort array into release date - most recent at top
        console.log(new_arr);
        setPlanetData(new_arr);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`container-sm ${style.main}`}>
      <tr class="row row-cols-3">
        <th className={style.col1}>Release Date</th>
        <th className={style.col2}>Name</th>
        <th className={style.col3}>Radius (Earth Units)</th>
      </tr>
      {!loading &&
        planetData.map((x, i) => {
          // return <PlanetDataRow releasedate={x.releasedate} name={x.pl_name} radius={x.pl_rade} />
          return (
            <tr
              onClick={() => {
                props.stateSetter(x);
              }}
              class={`row row-cols-3 ${style.gridRow}`}>
              <td className={style.col1}>{x.releasedate}</td>
              <td className={style.col2}>{x.pl_name}</td>
              <td className={style.col3}>{x.pl_rade}</td>
            </tr>
          );
        })}
    </div>
  );
};

export default ExoPlanet;
