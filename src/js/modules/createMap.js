

const createMap = () => {
  let script = document.createElement('script');
  script.src = "https://unpkg.com/maplibre-gl@2.1.1/dist/maplibre-gl.js";
  document.head.append(script);
  script.onload = function() {
    // contacts__map
    const accessToken = 'kAahXGAfI2ZsUIOZ9lT3R8t7z5C2Een48LgifFBRSnxGQWJT5dI0kLIWtp6LJ23N';
  

      if (document.body.clientWidth < 576) {
        const map = new maplibregl.Map({
          container: 'contacts__map',
          style: `https://api.jawg.io/styles/jawg-dark.json?access-token=${accessToken}`,
          zoom: 7,
          center: [ 37.977168, 55.68] 
        }).addControl(new maplibregl.NavigationControl(), 'top-right');

        const el1 = document.createElement('div'),
        text1 = document.querySelector('.contacts__map_dot_text.address-1');
      


    el1.className = 'contacts__map_dot';
    new maplibregl.Marker(el1)
      .setLngLat([37.858887, 55.695834])
      .addTo(map);

    el1.classList.add('dot-1');
    el1.appendChild(text1);
    
    const el2 = document.createElement('div'),
        text2 = document.querySelector('.contacts__map_dot_text.address-2');

      el2.className = 'contacts__map_dot';
      new maplibregl.Marker(el2)
        .setLngLat([38.131651,55.712807])
        .addTo(map);

        el2.classList.add('dot-2');
        el2.appendChild(text2);
      } else {
        const map = new maplibregl.Map({
          container: 'contacts__map',
          style: `https://api.jawg.io/styles/jawg-dark.json?access-token=${accessToken}`,
          zoom: 9,
          center: [ 37.977168, 55.68] 
        }).addControl(new maplibregl.NavigationControl(), 'top-right');

        const el1 = document.createElement('div'),
        text1 = document.querySelector('.contacts__map_dot_text.address-1');
      


      el1.className = 'contacts__map_dot';
      new maplibregl.Marker(el1)
        .setLngLat([37.858887, 55.695834])
        .addTo(map);

      el1.classList.add('dot-1');
      el1.appendChild(text1);
      
      const el2 = document.createElement('div'),
          text2 = document.querySelector('.contacts__map_dot_text.address-2');

      el2.className = 'contacts__map_dot';
      new maplibregl.Marker(el2)
        .setLngLat([38.131651,55.712807])
        .addTo(map);

        el2.classList.add('dot-2');
        el2.appendChild(text2);
      }
 

    
   }



    
}
export default createMap;