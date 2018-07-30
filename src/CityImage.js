import React from 'react';

const photo = {
    'Madrid': 'https://millennialsconsulting.es/wp-content/uploads/2018/06/seo-en-madrid-1.jpg',
    'Barcelona': 'https://okrentacar.es/img/oficinas/barcelona.jpg',
    'Sevilla': 'https://cdn.traveler.es/uploads/images/thumbs/es/trav/3/s/2017/19/un_fin_de_semana_sureno_inigualable_1181_940x633.jpg',

  }

class CityImage extends React.Component {
  render() {
    return (
      <img src={photo[this.props.city]} alt=""/>
     );
    }
  }

export default CityImage;