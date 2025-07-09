import React, { useState } from 'react';


const hospitals = [
  { id: 1, name: 'Apollo Hospital', city: 'Delhi', image: 'apollo.jpeg' },
  { id: 2, name: 'Fortis Healthcare', city: 'Mumbai', image: '   fortis.jpeg ' },
  { id: 3, name: 'AIIMS', city: 'Delhi', image: '    aiims.jpg     ' },
  { id: 4, name: 'Max Hospital', city: 'Pune', image: '  max.jpg  ' },

 { "id": 5 ,"name": "   Nanavati Max Super Speciality Hospital – Vile Parle West " ,"city":" Mumbai " ,"image": "  navnati.jpg  "  },


          { "id": 6 ,"name": "  Apollo Gleneagles Hospitals – Alipore / Park Street    " ,"city":"    Kolkata   " ,"image": "  aig.jpg  "  },


      { "id": 7 ,"name": " Narayana Multispeciality Hospital – Sanganer  " ,"city":"  Jaipur" ,"image": "  aig.jpg  "  },



      { "id": 8 ,"name": "  Manipal Hospitals – Old Airport Road  " ,"city":"    Bengaluru" ,"image": "  manipal.jpg  "  },

    { "id": 9 ,"name": "    Apollo Hospitals – Jubilee Hills      " ,"city":"   Hyderabad   " ,"image": "apollokolkata.jpg"  },

{ "id": 10 ,"name": " Indraprastha Apollo Hospital, Sarita Vihar" ,"city":"Sarita Vihar" ,"image": "  indra.jpg  "  },

      { "id": 11 ,"name": "  Lilavati Hospital & Research Centre – Bandra West   " ,"city":" Mumbai " ,"image": " lilavati.jpg   "  },

          { "id": 12,"name": "   AMRI Hospitals – Salt Lake / Dhakuria / Mukundapur   " ,"city":"    Kolkata   " ,"image": " amri.jpeg   "  },

      { "id": 13 ,"name": "  Eternal Hospital – Jagatpura " ,"city":"  Jaipur" ,"image": "  eternal.jpg  "  },



      { "id": 14 ,"name": "   Fortis Hospital – Bannerghatta Road  " ,"city":"    Bengaluru" ,"image": "  fortisdel.jpg  "  },


    { "id": 15 ,"name": "     AIG Hospitals – Gachibowli      " ,"city":"   Hyderabad   " ,"image": "    aig.jpg"  },



{ "id": 16 ,"name": "Fortis Hospital, Shalimar Bagh" ,"city":"New Delhi" ,"image": "  fortis.jpeg"  }




  // new data here

   








  

];

const SearchResults = () => {
  const [query, setQuery] = useState('');




  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(query.toLowerCase()) ||
    hospital.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by hospital or city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
       
      <div className="hospital-grid">
        {filteredHospitals.map(hospital => (

          <div className="hospital-card" key={hospital.id }  >
            <img src={hospital.image} alt={hospital.name} />
            <div className="content">
              <h3>{hospital.name}</h3>
              <p>{hospital.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default SearchResults;
