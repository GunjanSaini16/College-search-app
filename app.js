const colleges = {
    "rajasthan": ["University of Rajasthan", "IIT Jodhpur", "BITS Pilani Pilani Campus", "MDS University Ajmer", "Kota University", "Jai Narain Vyas University Jodhpur", "Maharshi Dayanand Saraswati University", "Banasthali Vidyapith", "LNM Institute of Information Technology", "Rajasthan Technical University"],
    "maharashtra": ["University of Mumbai", "IIT Bombay", "Pune University", "SNDT Women University", "Nagpur University", "Aurangabad University", "Shivaji University Kolhapur", "NIT Nagpur", "ICT Mumbai", "Symbiosis International University"],
    "delhi": ["University of Delhi", "IIT Delhi", "JNU", "Jamia Millia Islamia", "IGNOU", "Ambedkar University", "IP University", "AIIMS Delhi", "NIT Delhi", "Delhi Technological University"],
    "karnataka": ["Bangalore University", "IISc Bangalore", "Manipal University", "NIT Karnataka", "VTU Belagavi", "Mysore University", "Christ University", "PES University", "RV College of Engineering", "BMS College of Engineering"],
    "gujarat": ["Gujarat University", "IIT Gandhinagar", "PDPU", "NIT Surat", "Nirma University", "DAIICT", "MS University Baroda", "Saurashtra University", "SVNIT Surat", "Dhirubhai Ambani Institute"],
    "tamilnadu": ["Anna University", "IIT Madras", "NIT Trichy", "Madras University", "Vellore Institute of Technology", "SRM University", "Amrita University", "PSG College of Technology", "Coimbatore Institute of Technology", "Bharathiar University"],
    "kerala": ["University of Kerala", "IIT Palakkad", "NIT Calicut", "Cochin University", "Mahatma Gandhi University", "Calicut University", "APJ Abdul Kalam University", "Amrita Vishwa Vidyapeetham", "College of Engineering Trivandrum", "Model Engineering College"],
    "uttarpradesh": ["Allahabad University", "IIT Kanpur", "IIT BHU", "AMU Aligarh", "Lucknow University", "AKTU Lucknow", "NIT Allahabad", "Agra University", "Bundelkhand University", "Chaudhary Charan Singh University"],
    "westbengal": ["Calcutta University", "IIT Kharagpur", "Jadavpur University", "NIT Durgapur", "Presidency University", "IIEST Shibpur", "Kalyani University", "Burdwan University", "Bengal Engineering College", "North Bengal University"],
    "bihar": ["Patna University", "IIT Patna", "NIT Patna", "Magadh University", "BN Mandal University", "Nalanda Open University", "BNMU Madhepura", "Lalit Narayan Mithila University", "Tilka Manjhi Bhagalpur University", "VKS University"],
    "madhyapradesh": ["IIT Indore", "NIT Bhopal", "Barkatullah University", "Devi Ahilya University", "Jiwaji University", "Vikram University", "Sagar University", "RGPV Bhopal", "Rani Durgavati University", "Awadhesh Pratap Singh University"],
    "andhra pradesh": ["Andhra University", "IIT Tirupati", "NIT Warangal", "JNTU Hyderabad", "Sri Venkateswara University", "Osmania University", "Acharya Nagarjuna University", "Krishna University", "Rayalaseema University", "Vikrama Simhapuri University"],
    "punjab": ["Punjab University", "IIT Ropar", "NIT Jalandhar", "Punjabi University Patiala", "Guru Nanak Dev University", "Thapar University", "LPU Jalandhar", "Chitkara University", "DAV University", "GNDU Amritsar"],
    "haryana": ["Kurukshetra University", "NIT Kurukshetra", "MDU Rohtak", "Guru Jambheshwar University", "YMCA University Faridabad", "Deenbandhu Chhotu Ram University", "CDLU Sirsa", "BPS Mahila Vishwavidyalaya", "IGU Meerpur", "Ashoka University"],
    "himachal pradesh": ["HP University Shimla", "IIT Mandi", "NIT Hamirpur", "Jaypee University Solan", "Shoolini University", "Bahra University", "APG Shimla University", "Career Point University", "Chitkara University HP", "ICDEOL Shimla"],
    "uttarakhand": ["IIT Roorkee", "HNB Garhwal University", "Kumaun University", "Uttarakhand Technical University", "UPES Dehradun", "DIT University", "Graphic Era University", "Doon University", "Quantum University", "Patanjali University"],
    "assam": ["Gauhati University", "IIT Guwahati", "NIT Silchar", "Dibrugarh University", "Assam University", "Tezpur University", "Cotton University", "Assam Agricultural University", "NERIST", "Bodoland University"],
    "odisha": ["Utkal University", "IIT Bhubaneswar", "NIT Rourkela", "Berhampur University", "Sambalpur University", "Fakir Mohan University", "KIIT University", "SOA University", "OUTR Bhubaneswar", "Ravenshaw University"],
    "jharkhand": ["IIT ISM Dhanbad", "NIT Jamshedpur", "Ranchi University", "Vinoba Bhave University", "Sido Kanhu Murmu University", "Nilamber Pitamber University", "XLRI Jamshedpur", "BIT Mesra", "Usha Martin University", "Amity University Jharkhand"],
    "chhattisgarh": ["NIT Raipur", "Pt Ravishankar Shukla University", "Hemchand Yadav University", "Shaheed Nandkumar Patel University", "CSVTU Bhilai", "Kalinga University", "AISECT University", "Columbia Institute", "Kushabhau Thakre University", "Bastar University"],
    "goa": ["Goa University", "NIT Goa", "IIT Goa", "Goa Institute of Management", "Padre Conceicao College", "Agnel Institute of Technology", "Don Bosco College", "Dnyanprassarak Mandals College", "Carmel College", "Rosary College"],
    "manipur": ["Manipur University", "NIT Manipur", "Dhanamanjuri University", "JNIMS Imphal", "Manipur Technical University", "Manipur International University", "CMC Imphal", "DM College", "Modern College Imphal", "Ideal College"],
    "meghalaya": ["NEHU Shillong", "NIT Meghalaya", "Martin Luther Christian University", "William Carey University", "Assam Don Bosco University", "CMJ University", "ICFAI University Meghalaya", "Symbiosis Shillong", "St Edmunds College", "Synod College"],
    "tripura": ["Tripura University", "NIT Agartala", "ICFAI Tripura", "Maharaja Bir Bikram University", "Tripura Institute of Technology", "Agartala Government Medical College", "Women College Agartala", "Ramthakur College", "Scottish Church College", "Michael Madhusudan Dutta College"]
};

let btn = document.querySelector('button');

btn.addEventListener("click", () => {
    let state = document.querySelector("input").value.trim().toLowerCase();
    let colArr = getColleges(state);
    show(colArr);
});

function getColleges(state) {

    if (colleges[state]) {
        return colleges[state];
    }

    for (let key in colleges) {
        if (key.includes(state) || state.includes(key)) {
            return colleges[key];
        }
    }

    return [];
}

function show(colArr) {
    let ul = document.querySelector("#result");
    ul.innerHTML = "";

    if (colArr.length === 0) {
        let li = document.createElement('li');
        li.innerText = "No colleges found! Try: Rajasthan, Delhi, Mumbai";
        ul.append(li);
        return;
    }

    for (let college of colArr) {
        let li = document.createElement('li');
        li.innerText = college;
        ul.append(li);
    }
}