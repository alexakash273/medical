import React from 'react';
import { useParams } from 'react-router-dom';
import './HospitalDetails.css';

const hospitalData = [
  {
    id: '1',
    name: 'Apollo Hospital',
    address: 'Ring Road, Delhi, India',
    phone: '+91-9876543210',
     major:'   Cardiac Surgery: ₹1.8–₹3.6 lakhs,Organ Transplants: ₹2–₹5 lakhs,General Surgeries: ₹2,000–₹15,000  ',
    keydoctor: '    Dr. P. Venugopal – Cardiac Surgeon (MBBS, MS, MCh, FRCS), Dr. S. Chatterjee – Internal Medicine (MBBS, MD)   ',
    specialty: 'Cardiology, Orthopedics, Neurology',
    description: 'Apollo Hospital is one of the most trusted hospitals in India providing world-class treatment across various specialities.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...' // Replace with actual embed URL
  },
  {
    id: '2',
    name: 'Fortis Hospital',
    address: 'Sector 62, Noida, India',
    phone: '+91-9123456780',
     major:'   Angioplasty: ₹1.5–₹3.2 lakhs,Cancer Surgery: ₹1–₹6 lakhs  ',
    keydoctor: '  Dr. Pradeep Kumar Jain – GI Surgeon (MS, FRCS),Dr. Vinod Raina – Oncologist (MBBS, MD, DM)  ',
    specialty: 'Pediatrics, Oncology, General Surgery',
    description: 'Fortis is known for its cutting-edge medical technology and patient care.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },

   {
    id: '3',
    name: 'AIIMS (All India Institute of Medical Sciences), New Delhi',
    address: 'Ansari Nagar, New Delhi – 110029',
    major:'Cardiac Surgery: ₹1.8–₹3.6 lakhs, Organ Transplants: ₹2–₹5 lakhs,General Surgeries: ₹2,000–₹15,000',
    keydoctor: 'Dr. P. Venugopal – Cardiac Surgeon (MBBS, MS, MCh, FRCS)',

    phone: '91-11-26588500',
    specialty: 'Cardiology, Orthopedics, Neurology',
    description: 'Fortis is known for its cutting-edge medical technology and patient care.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },

  

  
   {
    id: '4',
    name: 'Max Hospital',
    address: '1 2, Press Enclave Marg, Saket Institutional Area, Saket, New Delhi, Delhi 110017',
    major:'IVF treatment typically ranges from ₹1,50,000 to ₹2,50,000 per cycle.',
    keydoctor: 'Dr. Ramji Mehrotra (Cardiac Sciences), Dr. Joy Dev Mukherji (Neurology), and Dr. Vivek Nangia (Pulmonology)',

    phone: '011 2651 5050',
    specialty: 'Pediatrics',
    description: 'Max is known for its cutting-edge medical technology and patient care.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },



   {
    id: '5',
    name: 'Nanavati Max Super Speciality Hospital – Vile Parle West     ',
    address: 'Nanavati Max Super Speciality Hospital, Swami Vivekananda Rd, next to Suresh Colony, LIC Colony, Suresh Colony, Vile Parle West, Mumbai, Maharashtra 400056',
    major:'a liver transplant might cost between INR 15,00,000 to 25,00,000, while a total knee replacement could range from INR 2,50,000 to 4,00,000',
    keydoctor: 'Dr. Jatin Kothari (Nephrology & Renal Transplant), Dr. Manoj Jain (Gastrointestinal, Bariatric, Laparoscopic & Robotic Surgeon)',

    phone: '022 6836 0000',
    specialty: 'cardiology, cancer care, neurosciences, orthopaedics, liver and kidney transplants, gastroenterology, and urology, among others.',
    description: 'Nanavati Hospital. Book appointments at Mumbais top super specialty hospital',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },



   {
    id: '6',
    name: 'Apollo Gleneagles Hospitals – Alipore / Park Street ',
    address: 'Leela Roy Sarani, 48/1F, Gariahat Rd, near Orchestra Co-Operative Housing Society, Dover Terrace, Ballygunge, Kolkata, West Bengal 700019',
    major:'diagnostic hysteroscopy in a single room costs ₹57,800, while a hysteroscopic polypectomy is ₹92,400',
    keydoctor: ' Dr. Amitava Ray,Dr. Amitava Ray   ',

    phone: '       033 2461 9482        ',
    specialty: '    Cardiac Sciences, Neurosciences, and Oncology.        ',
    description: ' the Apollo 8 missions reading from the Book of Genesis, and the Apollo Genesis Pro X stunt scoote       ',
    mapEmbedUrl: '          '
  },



   {
    id: '7',
    name: 'Narayana Multispeciality Hospital – Sanganer',
    address: 'Andul Rd, near Chunabati, Podara, Mourigram, Howrah, West Bengal 711109',
    major:'Caesarean sections can range from ₹62,000 to ₹77,000, while bypass surgery can range from ₹2,25,000 to ₹5,00,000',
    keydoctor: 'Dr. Sukumar Barik, Dr. Subhas Mukherjee, Dr. Jayanta Kumar Das, Dr. Partha Pratim Sen, and Dr. Sanjay K Shah',

    phone: '080 6215 4698',
    specialty: 'Asias First Heart Hospital with an Artificial Heart Implant',
    description: 'Narayana Hospital, Chunavati (Howrah) provides speciality services in 30 specialties and is well-equipped with facilities to cater to emergencies backed by crucial facilities such as 24/7 availability of doctors and nurses to provide an uncompromised...       ',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },



   {
    id: '8',
    name: 'Manipal Hospitals – Old Airport Road',
    address: 'Ansari Nagar, New Delhi – 110029',
    major:'a hysterectomy could range from ₹100,000 to ₹180,000',
    keydoctor: 'Dr. Debraj Jash',

    phone: '1800 102 4647',
    specialty: 'cardiology, oncology, neurosciences, and orthopedics',
    description: 'Manipal Hospital is a prestigious hospital situated in Salt Lake City, Kolkata and is regarded as one of the best hospitals in Kolkata. With advanced infrastructure and cutting-edge medical technology, the hospital offers a comprehensive range of...      ',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },


   {
    id: '9',
    name: '    Apollo Hospitals – Jubilee Hills         ',
    address: '       Rd Number 72, opposite Bharatiya Vidya Bhavan School, Film Nagar, Hyderabad, Telangana 500033     ',
    major:'   Knee Replacement: ₹737,800 - ₹924,800.,Cardiac Resynchronization Therapy (CRT): ₹420,000 - ₹520,000.,  ',
    keydoctor: '   Dr. Vijay Anand Reddy Palkonda (Oncologist), Dr. A Mohan Krishna (Orthopedist), and Dr. Anuradha Panda ',

    phone: '          040 6907 1200    ',
    specialty: '        cardiology, neurology,   ',
    description: '   Apollo Hospitals, Jubilee Hills, Hyderabad, is a premier healthcare institution renowned for excellence in patient care, cutting-edge medical technology, and expert specialists. Established in 1988 by Dr. Prathap C. Reddy, it is Asia’s leading...        ',
    mapEmbedUrl: '      https://www.google.com/maps/embed?...    '
  },


   {
    id: '10',
    name: '    Indraprastha Apollo Hospital, Sarita Vihar       ',
    address: '    Apollo Hospital, NH-19, Jasola Vihar, New Delhi, Delhi 110076    ',
    major:'    Heart & Cardiology: ₹58,344 - ₹2,91,720, Cancer Care: ₹11,669 - ₹5,83,440,Bone Marrow Transplant: ₹51,810 - ₹69,079 ',
    keydoctor: '  DR. ASHISH MALIK · DR. BHARMINDER KAUR ,DR. JAI S GEORGE · Dr. KJ Choudhury  ',

    phone: '        011 7179 1090      ',
    specialty: '      cardiology, cardiac surgery, cancer treatment, pediatrics, critical care     ',
    description: '    Apollo hospitals, established by Dr Prathap C Reddy in 1983, has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Apollo Hospitals has...      ',
    mapEmbedUrl: '    https://www.google.com/maps/embed?...      '
  },


  {
    id: '11',
    name: '        Lilavati Hospital & Research Centre – Bandra West     ',
    address: '    A-791, A-791, Bandra Reclamation Rd, General Arunkumar Vaidya Nagar, Bandra West, Mumbai, Maharashtra 400050   ',
    major:'  eneral ward charges may start at around INR 2,000 per day, while deluxe rooms could exceed INR 10,000 per day.   ',
    keydoctor: '   Dr. Nilesh Goyal,Dr. Leena Jain, Dr. Siddharth Prakash ',

    phone: '022 6930 1000',
    specialty: '      heart& cardiology     ',
    description: '    We are a premier multi-specialty tertiary care hospital of India and have been acknowledged globally as the centre of medical excellence. Over the years, Lilavati Hospital & Research Centre has developed unmatched trust with its patients on the basis...      ',
    mapEmbedUrl: '    https://www.google.com/maps/embed?...      '
  },



  {
    id: '12',
    name: '      AMRI Hospitals – Salt Lake / Dhakuria / Mukundapur      ',
    address: '    223 & 230, Pano Rd, behind Metro Cash & Carry, Purba Jadavpur, Landmark:, Kolkata, West Bengal 700099    ',
    major:'    hip replacement or brain tumor surgery can range from ₹2,00,000 to ₹4,00,000, while gall bladder removal might be ₹60,000 to ₹1,00,000. Heart valve surgery and CABG can range from ₹3,00,000 to ₹5,25,000 ',
    keydoctor: '  Dr. Utpal Chaudhuri (Hematologist), Dr. Prasanna Kumar Mishra (Urologist), and Dr. Sumit Acharyya (Cardiologist)   ',

    phone: '      033 6907 0000        ',
    specialty: '      cardiac sciences, neurosciences, gastro sciences, onco sciences, and emergency & critical care.     ',
    description: '    MRI Hospitals, Mukundapur - Kolkata; AMRI Hospitals, Salt Lake - Kolkata; AMRI Hospitals, Dhakuria- Kolkata. Timings: General wards(IPD):. 9.30 am to 10.30 am ...     ',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },




  {
    id: '13',
    name: '     Eternal Hospital – Jagatpura " ,"city       ',
    address: '     3A, Jagatpura Rd, near Jawahar Circle, Chainpura, Malviya Nagar, Jaipur, Rajasthan 302017  ',
    major:'   heart transplant-2.5lakhs to 6.8lakkhs  ',
    keydoctor: '  dr.ss chatarjee   ',

    phone: '      +91 435554444        ',
    specialty: '     cardiac sciences, neurosciences, gastro sciences, onco sciences, and emergency & critical care.      ',
    description: '  Eternal hospital is best for its service ..       ',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },



  {
    id: '14',
    name: '      Fortis Hospital – Bannerghatta Road       ',
    address: '      Ansari Nagar, New Delhi – 110029     ',
    major:'   heart transplants can range from ₹18,00,000 to ₹26,00,000, while laparoscopic surgeries can range from ₹33,000 to ₹1,00,000.   ',
    keydoctor: '  Dr. A K Sharma · Dr. Aditya Soral · Dr. Ajay Goenka · Dr. Ajeet Bana · Dr. Alok Mathur ·  ',

    phone: '       +91 2398999400        ',
    specialty: '     heart transplant surgeon, doctor & specialists.      ',
    description: '    Eternal Hospital (A unit of Eternal Heart Care Centre and Research Institute) is a state-of-the-art tertiary care hospital in Jaipur city. Founded in 2013, today it is one of the most preferred hospital not only in Jaipur but also nationally and...      ',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },



  {
    id: '15',
    name: '      AIG Hospitals – Gachibowli          ',
    address: '    Survey No 136, 4/5 Plot, Tower-2, Mindspace Rd, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500032     ',
    major:'    Diagnostic Tests:- ₹7,000 to ₹12,000,  Specialized Treatments:-₹20 lak ',
    keydoctor: ' Dr. D Nageshwar Reddy   ',

    phone: '         040 4244 4222      ',
    specialty: '      liver treatments.knees joint    ',
    description: '    AIG hospitals offers international patients a personalized experience along with world-class medical care and is committed to make every patient experience ..     ',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },

  


  {
    id: '16',
    name: '     Fortis Hospital, Shalimar Bagh" ,"city":"New Delhi"       ',
    address: '     Cabin no.975, AA-299, Shaheed Udham Singh Marg, AA Block, Poorbi Shalimar Bag, Shalimar Bagh, Delhi, 110088   ',
    major:'    OPD Consultations: General OPD fees range from ₹600 to ₹1500.:knee replacement costs can range from ₹468009 to ₹498009.  ',
    keydoctor: '   Dr. Pradeep Kumar Jain (Lap GI, GI Onco, Bariatric & MIS Surgery), Dr. Amite Pankaj Aggarwal (Orthopaedics), Dr. Arpana Jain (Obstetrics & Gynaecology),  ',

    phone: '    084483 39575          ',
    specialty: '      ardiac sciences, cancer treatment, and robotic surgery     ',
    description: '  Top Obstetrics & Gynaecology Hospital in Delhi by ET Times and Radio City: Our OBGYN specialists provide exceptional maternity and childcare services, earning ...       ',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  },
];

const HospitalDetails = () => {
  const { id } = useParams();
  const hospital = hospitalData.find(h => h.id === id.trim());

  if (!hospital) return <div className="hospital-not-found">Hospital not found</div>;

  return (
    <div className="hospital-detail-container">
      <div className="hospital-banner">
        <h1>{hospital.name}</h1>
        <p>{hospital.specialty}</p>
      </div>
      <div className="hospital-content">
        <div className="hospital-info">
          <p><strong>Address:</strong> {hospital.address}</p>
          <p><strong>Contact:</strong> {hospital.phone}</p>
          <p><strong>About:</strong> {hospital.description}</p>
          <p><strong>Major-Operations:</strong> {hospital.major}</p>
          <p><strong>Key-Doctors:</strong> {hospital.keydoctor}</p>

        </div>
        <div className="hospital-map">
          <iframe
            src={hospital.mapEmbedUrl}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hospital Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
