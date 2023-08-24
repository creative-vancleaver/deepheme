import React from 'react';
import ImageMapper from 'react-img-mapper';

const RegionMap = () => {

    const URL = 'url("/imgs/Region-bma")';
    const MAP = {
        name: 'my-map',
        areas: 'url("/RegionMapCoords.json")',
    };

  return <ImageMapper src={ URL } map={ MAP } />

}

export default RegionMap