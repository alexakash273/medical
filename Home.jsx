// pages/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const hospitals = [
  { id: 1, name: 'Apollo Hospital', city: 'Delhi', specialty: 'Cardiology', image: 'apollo.jpeg' },
  { id: 2, name: 'Fortis Healthcare', city: 'Mumbai', specialty: 'Orthopedics', image: 'fortis.jpeg' },
  { id: 3, name: 'AIIMS', city: 'Delhi', specialty: 'Neurology', image: 'aiims.jpg' },
  { id: 4, name: 'Max Hospital', city: 'Pune', specialty: 'Pediatrics', image: 'max.jpg' },
    { "id": 5 ,name: "   Nanavati Max Super Speciality Hospital – Vile Parle West " ,city:" Mumbai " , specialty: 'Neurology', "image": " navnati.jpg   "  },


          { "id": 6 ,name: "  Apollo Gleneagles Hospitals – Alipore / Park Street    " ,city:"    Kolkata   " ,specialty: 'Neurology', image: " apollomumbai.jpeg   "  },


      { "id": 7 ,name: " Narayana Multispeciality Hospital – Sanganer  " ,city:"  Jaipur" ,specialty: 'Neurology', image: " aig.jpg  "  },



      { "id": 8 ,name: "  Manipal Hospitals – Old Airport Road  " ,city:"    Bengaluru" ,specialty: 'Neurology', image: "  manipal.jpg  "  },

    { "id": 9 ,name: "    Apollo Hospitals – Jubilee Hills      " ,city:"   Hyderabad   " , specialty: 'Neurology', image: "apollokolkata.jpg"  },

{ "id": 10 ,name: " Indraprastha Apollo Hospital, Sarita Vihar" ,city:"Sarita Vihar" , specialty: 'Neurology', image:"  indra.jpg  "  },

      { "id": 11 ,name: "  Lilavati Hospital & Research Centre – Bandra West   " ,specialty: 'Neurology', city:" Mumbai " ,image: "  lilavati.jpg "  },

          { "id": 12,name: "   AMRI Hospitals – Salt Lake / Dhakuria / Mukundapur   " ,city:"    Kolkata   " ,image: "  amri.jpeg  "  },

      { "id": 13 ,name: "  Eternal Hospital – Jagatpura " ,city:"  Jaipur" ,specialty: 'Neurology', image: "  eternal.jpg "  },



      { "id": 14 ,name: "   Fortis Hospital – Bannerghatta Road  " ,city:"    Bengaluru" ,specialty: 'Neurology', image: "  fortis.jpeg  "  },


    { "id": 15 ,name: "     AIG Hospitals – Gachibowli      " ,city:"   Hyderabad   " ,specialty: 'Neurology', image: "aig.jpg"  },



{ "id": 16 ,name: "Fortis Hospital, Shalimar Bagh" ,city:"New Delhi" ,specialty: 'Neurology', image: "fortisdel.jpg" }



];

const Home = () => {
  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('');
  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/hospital/${id}`);
  };

  const filteredHospitals = hospitals.filter(h =>
    (h.name.toLowerCase().includes(query.toLowerCase()) || h.city.toLowerCase().includes(query.toLowerCase())) &&
    (specialty === '' || h.specialty === specialty)
  );

  return (
    <div className="home-container">
      <h2 className="home-title">🏥 Suggested Hospitals</h2>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name or city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
          <option value="">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Neurology">Neurology</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>
      </div>
      <div className="hospital-grid">
        {filteredHospitals.map(hospital => (
          <div
            className="hospital-card"
            key={hospital.id}
            onClick={() => goToDetails(hospital.id)}
          >
            <img src={hospital.image} alt={hospital.name} />
            <div className="content">
              <h3>{hospital.name}</h3>
              <p>{hospital.city}</p>
              <p><strong>{hospital.specialty}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
