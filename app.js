const colors = [
    '#E3F2FD', '#F1F8E9', '#FFF3E0', '#F3E5F5', '#E8F5E9', 
    '#FFFDE7', '#FCE4EC', '#EFEBE9', '#E0F2F1', '#F9FBE7',
    '#E1F5FE', '#F0F4C3', '#FFE0B2', '#D1C4E9', '#C8E6C9'
];

const colorMap = new Map();
const teacherMap = new Map([
    ["ABK", "Mrs Aburn"], ["ANH", "Mr Addison"], ["AGM", "Mr Agnew"], ["ATL", "Mrs Aitken"], ["ABJ", "Ms Alabaster"],
    ["ALS", "Mrs Alexandre"], ["JNV", "Mr Alexeyev"], ["ARP", "Ms Arnold"], ["BRR", "Mrs Baird"], ["BIS", "Miss Baldwin"],
    ["BRI", "Ms Barczyk"], ["BKC", "Miss Barker"], ["BSJ", "Mr Basevi"], ["BSM", "Mr Berry"], ["BRJ", "Mrs Birch"],
    ["BDA", "Mrs Boardman"], ["BDW", "Mr Boyd"], ["BYS", "Ms Boyle-Curnow"], ["BWJ", "Ms Braithwaite"], ["BGS", "Ms Briggs"],
    ["RBYR", "Mr Bryce"], ["BET", "Ms Burgess"], ["CBS", "Mr Cable"], ["CDA", "Mr Calder"], ["CMK", "Mrs Campbell"],
    ["CAM", "Mr Carroll"], ["RCRS", "Ms Carswell"], ["CTH", "Mr Cattell"], ["HYN", "Ms Caughey"], ["CHT", "Mr Chang"],
    ["CHJ", "Mrs Chapman"], ["CNK", "Ms Chen"], ["CHL", "Ms Choo"], ["RCHB", "Mr Christeller"], ["CLM", "Mrs Clark"],
    ["RCKM", "Miss Clarke"], ["RCLB", "Ms Clausen"], ["CKJ", "Mrs Cloake"], ["CKA", "Miss Cook"], ["COJ", "Mrs Cook"],
    ["CKV", "Mrs Cook"], ["CRK", "Dr Corcoran"], ["YCRS", "Mrs Cornish"], ["CSS", "Mr Coster"], ["RCWV", "Ms Cowley"],
    ["CGR", "Ms Craig"], ["RCWR", "Ms Craw"], ["CRJ", "Ms Crawford"], ["CZJ", "Mr Creighton"], ["CRF", "Mr Cresswell"],
    ["RCRL", "Mrs Crooks"], ["CRM", "Mr Crosby"], ["CRA", "Dr Crowther"], ["DMJ", "Miss Damian"], ["DVA", "Ms Davison"],
    ["DAE", "Mrs Davison"], ["DJN", "Dr de Joux"], ["DVD", "Mr Deavoll"], ["DLN", "Ms Delaney"], ["DES", "Mrs Delaney"],
    ["SDPS", "Ms Depree"], ["DLK", "Mrs Dillon"], ["DXS", "Ms Sue"], ["RDNH", "Ms Donders"], ["RDLP", "Donnelly"],
    ["DLS", "Miss Doole"], ["RDDR", "Mr Dudding"], ["DNE", "Mrs Duncan"], ["DFS", "Mr Dunford"], ["DNK", "Mrs Dunn"],
    ["DYF", "Ms Dwyer"], ["ESM", "Mr Easterbrook"], ["ERS", "Mr Elliott-Rhynd"], ["ELT", "Ms Ellis"], ["EMA", "Mr Emerson"],
    ["ENC", "Miss Ensor"], ["EGE", "Mr Espino Gil"], ["FNH", "Ms Feng"], ["RFGG", "Mrs Fernandez"], ["FDA", "Miss Findlay"],
    ["FID", "Mr Findlay"], ["RFLB", "Mrs Finlayson"], ["RFDC", "Miss Foden"], ["FRC", "Mrs Forde"], ["FRK", "Mrs Fortune"],
    ["FDD", "Miss Foulds"], ["RGWJ", "Ms Galloway"], ["GBB", "Mr Gibson"], ["GCT", "Mrs Gilchrist"], ["GSA", "Ms Gillespie"],
    ["GVA", "Mr Given"], ["GVK", "Mrs Given"], ["GLN", "Mr Glanville"], ["GOA", "Mr Godfrey"], ["GDS", "Ms Goodman"],
    ["RGDM", "Mr Gordon"], ["RGRR", "Mr Greaves"], ["GRC", "Mr Green"], ["GFA", "Ms Griffiths"], ["GRL", "Ms Grocott"],
    ["GRK", "Mr Grounds"], ["RGDR", "Mr Grundy"], ["GLR", "Mrs Guillemot"], ["HNS", "Mr Haines"], ["HLA", "Mr Hall"],
    ["HLC", "Mr Chaz"], ["HSR", "Mrs Hall"], ["HMF", "Mrs Hamilton"], ["HMM", "Mr Hamlin"], ["HYK", "Mrs Hanley"],
    ["HNG", "Mrs Hannan"], ["HRC", "Ms Harrington"], ["HZL", "Ms Lizzy"], ["HRK", "Miss Hayles"], ["HZR", "Hazlett"],
    ["HLK", "Ms Healey"], ["HGM", "Ms Hegarty"], ["HNM", "Ms Hendry"], ["HGA", "Mrs Hennig"], ["HTR", "Miss Heta"],
    ["HCF", "Mrs Hicks"], ["HKR", "Ms Hiku"], ["HOL", "Mrs Holmes"], ["HDC", "Mr Hood"], ["CHKJ", "Mrs Hook"],
    ["RHWK", "Mrs Howard"], ["RHWC", "Mrs Howat"], ["HKK", "Mrs Hunt"], ["HLG", "Mrs Hurley"], ["NNE", "Ms Ioannou"],
    ["JCM", "Mr Jackson"], ["XJCN", "Miss Jackson"], ["RJCN", "Mr Jacobs"], ["JRD", "Mrs Jarrett"], ["RJYC", "Mrs Jellyman"],
    ["JVC", "Mr Ji"], ["JMT", "Miss Joemram"], ["JOG", "Mr Johnson"], ["RJSJ", "Mr Johnson"], ["JJN", "Mrs Johnson"],
    ["JHS", "Mr Johnston"], ["RKKA", "Mrs Karatau-Keightley"], ["KHR", "Mrs Keighley"], ["KTA", "Mrs Keith"], ["KRG", "Mrs Kerr"],
    ["KMN", "Miss Kimber"], ["KGG", "Mr King"], ["KNK", "Mr King"], ["KNM", "Mr Kingsbeer"], ["BYA", "Mrs Klaassens"],
    ["KJJ", "Mrs Kleinpaste"], ["KGR", "Mrs Knights"], ["XKTP", "Mr Koteka"], ["RLTK", "Mrs Kumar"], ["LJJ", "Mr Land"],
    ["LCK", "Mrs Le Cren"], ["LRS", "Mr Leary"], ["LOD", "Ms Lee"], ["RLEB", "Mr Leeson"], ["LWI", "Mrs Lewis"],
    ["LGH", "Ms Lightfoot"], ["LLL", "Mrs Lim"], ["LNC", "Mr Ling"], ["RLSK", "Mr List"], ["LTS", "Ms Litten"],
    ["LIS", "Miss Liu"], ["RLGS", "Mrs Logan"], ["LWS", "Miss Lowry"], ["LUJ", "Mr Lucas"], ["LCG", "Mrs Lucia"],
    ["MDT", "Mrs Maddaford"], ["MAG", "Mrs Magson"], ["KMM", "Mrs Maguire"], ["MRS", "Mrs Maguire"], ["MPP", "Mr Maher"],
    ["MRT", "Mr Mair"], ["MTJ", "Mr Malthus"], ["MNS", "Mr Manners"], ["MNO", "Mr Mansfield"], ["MTR", "Mrs Martin"],
    ["MSI", "Miss Mason"], ["MDM", "Mr Maude"], ["MCE", "Miss McCoy"], ["MCA", "Mr McIntosh"], ["MJW", "Mr Wayne"],
    ["MCM", "Mr McKee"], ["MKB", "Mr McKenzie"], ["MSL", "Ms McLachlan"], ["MLD", "Mr McLauchlan"], ["MLM", "Mrs McLay"],
    ["MNL", "Mrs McNabb"], ["MCR", "Mrs McNicholl"], ["MKK", "Mrs McTavish"], ["MVV", "Ms Mentink"], ["MNK", "Mrs Menzies"],
    ["RMRD", "Mr Merkin"], ["MDA", "Mrs Middelkoop"], ["MRI", "Mr Millar"], ["MRH", "Ms Moore"], ["RMML", "Mrs Morell"],
    ["MRR", "Mrs Moreno"], ["VMW", "Mrs Morris-Williamson"], ["MRD", "Mrs Morrison"], ["MTA", "Ms Mostyn"], ["YMRN", "Mr Muirhead"],
    ["RMSV", "Mrs Music"], ["NLS", "Mrs Neilson"], ["NMJ", "Ms Nimmo"], ["NNA", "Mrs Noon"], ["XNVT", "Ms Novotna"],
    ["ROBC", "Mr O'Brien"], ["OLR", "Miss O'Loughlin"], ["OYL", "Mrs O'Mahony"], ["OSS", "Mr O'Sullivan"], ["OGK", "Ms Ogilvie"],
    ["ROSP", "Ms Olds"], ["OLK", "Ms Olliver"], ["ORL", "Miss Oram"], ["OSC", "Mr Oswin"], ["RPRK", "Mr Parker"],
    ["PSB", "Ms Pass"], ["PAL", "Mr Paull"], ["RPCI", "Miss Pearce"], ["PRR", "Miss Pearn"], ["PEA", "Mrs Peet"],
    ["PRT", "Mr Percival"], ["PEC", "Mr Petch"], ["PHC", "Ms Phillips"], ["PTK", "Miss Pitcher"], ["PLM", "Mr Planner"],
    ["PCS", "Mrs Pooch"], ["PZS", "Mrs Porter"], ["PRA", "Mrs Provis"], ["RPTJ", "Jennifer"], ["QRM", "Miss Quadros"],
    ["QNS", "Mr Quinn"], ["RNA", "Mrs Randall"], ["RDJ", "Ms Reid"], ["RES", "Ms Reid"], ["RAH", "Dr Renaud"],
    ["RNN", "Miss Reynolds"], ["RCM", "Ms Richards"], ["RIC", "Mr Risbridger"], ["RGN", "Mr Roberts"], ["RTA", "Mr Robertson"],
    ["RRNL", "Mrs Robinson"], ["RDS", "Mr Rodkiss"], ["RSC", "Mr Rosengrave"], ["XRSN", "Ms Ross"], ["RHK", "Mr Roughton"],
    ["RCA", "Ms Russ"], ["RZR", "Mrs Ruzicka"], ["RYE", "Miss Ryder"], ["SDV", "Ms Sandes"], ["YSNE", "Mrs Saunders"],
    ["SRT", "Mr Schumacher"], ["TIM", "Mr Schumacher"], ["SCK", "Mrs Scott"], ["SHF", "Mr Sharpe"], ["SHB", "Mrs Shaw"],
    ["SRB", "Mr Shearer"], ["SSHK", "Mr Shields"], ["XSMM", "Mr Sim"], ["SML", "Miss Simons"], ["SLM", "Mr Skelly"],
    ["SMB", "Mrs Smales"], ["SMG", "Dr Smith"], ["SRJ", "Mr Smith"], ["SSMJ", "Mr Smith"], ["LIB", "Library"],
    ["RSTJ", "Mr Stanley"], ["STK", "Mrs Stark"], ["SMT", "Ms Stevens"], ["STR", "Mrs Stidder"], ["RSTH", "Mr Stirling"],
    ["RSJR", "Mr Stoutjesdijk"], ["RSME", "Mrs Emma"], ["XSNY", "Miss Sun"], ["DNS", "Mr Sutton"], ["SND", "Mrs Darlene"],
    ["NIG", "Time Table"], ["TNZ", "Mr Tang"], ["TAT", "Mrs Taylor"], ["RTAW", "Mr Warwick"], ["RTSG", "Mr Glenn"],
    ["TKB", "Mr Bob"], ["TLS", "Mrs Tellick"], ["TEM", "Mr Mathew"], ["TWW", "Mr Will"], ["THA", "Mrs Thompson"],
    ["RTHA", "Mr Andrew"], ["RTHJ", "Ms Jasmihn"], ["TQM", "Ms Tiquia"], ["TNH", "Ms Helen"], ["TWM", "Mrs Mary"],
    ["TWB", "Mrs Trewin"], ["TRD", "Ms Darian"], ["TVM", "Mr Marcus"], ["BWA", "Ms Annie"], ["GVJ", "Mrs van Gerwen"],
    ["VTC", "Mrs Carol"], ["VLK", "Mrs Kate"], ["XLC", "Dr Viskovic"], ["VSR", "Dr Viskovic"], ["WNY", "Mr Wang"],
    ["WAS", "Ms Sue"], ["WES", "Miss Watkins"], ["WAJ", "Mr Watson"], ["WTJ", "Mrs Julie"], ["WYT", "Mr Wayman"],
    ["WRV", "Mrs Vicky"], ["WLO", "Mrs Wells"], ["WSD", "Mrs Debbie"], ["WTA", "Miss Anna"], ["WIC", "Mrs Wichman"],
    ["WDC", "Mrs Widdowson"], ["WKJ", "Mr John"], ["WLD", "Mr Dave"], ["WLH", "Mrs Hilary"], ["RWNR", "Mr Robert"],
    ["RWLB", "Mrs Bronwyn"], ["RWRR", "Mr Richard"], ["WFR", "Mrs Becky"], ["XYNM", "Miss Milly"], ["YNS", "Mr Sam"],
    ["YUY", "Ms Yiting"], ["ZHY", "Ms Zhang"], ["ZHC", "Ms Candy"]
]);

const subjectMap = new Map([
    ["SFL", "Skills for Living"], ["LIT", "Literacy"], ["CFS", "Foundation Skills"], ["TTT", "Fashion Design"],
    ["TRH", "Te Reo Māori (1/2)"], ["TRF", "Te Reo Māori"], ["SPH", "Spanish (1/2)"], ["SPF", "Spanish"],
    ["SOC", "Social Studies"], ["SCI", "Science"], ["SCIG", "Science"], ["PMU", "Perf Music"], ["PE", "PE"], ["HEA", "Health"],
    ["MUO", "Music"], ["MNH", "Chinese (1/2)"], ["MNF", "Chinese"], ["MAT", "Maths"],
    ["KCP", "KCP"], ["JPH", "Japanese (1/2)"], ["JPF", "Japanese"], ["FRH", "French (1/2)"],
    ["FRF", "French"], ["FDT", "Food Tech"], ["ENG", "English"], ["ELT", "Electronics"],
    ["DRA", "Drama"], ["DNC", "Dance"], ["DGT", "Digital Tech"], ["ART", "Visual Art"], ["SA3000", "Samoan"],
    ["SA2000", "Samoan"], ["TAH", "Te Ao Haka"], ["TOU", "Tourism"], ["TEN", "Engineering"], ["TCB", "Construction"],
    ["STY", "Study"], ["SPN", "Spanish"], ["SLP", "Sports Leadership"], ["PHY", "Physics"], ["PED", "PE"],
    ["PCE", "Practical Computing"], ["OED", "Outdoor Ed"], ["MUT", "Music Tech"], ["MUP", "Music Project"],
    ["MUC", "Contemporary Music"], ["MTT", "Multi Materials"], ["MNC", "Chinese Mandarin"], ["MED", "Media Studies"],
    ["MCB", "Maths & Stats"], ["MAS", "Statistics"], ["MAO", "Te Reo Māori"], ["MAC", "Calculus"],
    ["LGL", "Legal Studies"], ["JAP", "Japanese"], ["HIS", "History"], ["HFT", "Food Tech"], ["HFS", "Hospitality"],
    ["HEAN", "Health Ed"], ["HCT", "Hospitality"], ["GEO", "Geography"], ["FRE", "French"],
    ["FDN", "Food & Nutrition"], ["ESO", "Extra ESL"], ["ESL", "ESL"],
    ["ENX", "Extension English"], ["ENV", "English - Visual"], ["ENC", "English - Contemporary"], ["EMP", "Employment Skills"],
    ["ECS", "Early Childhood"], ["ECO", "Econ"], ["DVC", "DVC"], ["DTS", "Scholarship Digital Tech"],
    ["DTP", "Software Engineering"], ["DTM", "Product Design"],
    ["DTG", "Game Design"], ["DTE", "Electrical Engineering"],
    ["CLS", "Classics"], ["CHEN", "Chemistry"], ["BUS", "Business"], ["BIO", "Biology"], ["ARH", "Art History"],
    ["APS", "Arts Sculpture"], ["APR", "Arts Printmaking"], ["APH", "Arts Photography"], ["APD", "Arts Design"],
    ["APA", "Arts Painting"], ["ACC", "Accounting"], ["TRT", "Travel & Tourism"], ["ODP", "Outdoor Pursuits"],
    ["NUM", "Numeracy"], ["HFC", "Hospitality"], ["HFB", "Hospitality"],
    ["GER", "German"], ["DTT", "Digital Product Design"], ["COMM", "Commerce"],
    ["ADP", "Arts Design & Photo"], ["ACM", "Art"], ["SCE", "Enviro"], ["BEA", "Business & Econ"],
    ["SA1000", "Samoan"]
]);

let nextColorIndex = 0;
let timetableData = null;
let currentRenderId = 0;

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('csvFileInput');
    if (fileInput) fileInput.addEventListener('change', handleTimetableFile, false);

    const searchInput = document.getElementById('studentSearch');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            renderTimetables(timetableData, e.target.value);
        }, 250));
    }

    const clearButton = document.getElementById('clearCacheButton');
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            if (confirm('Clear all cached data?')) {
                localStorage.removeItem('cachedTimetable');
                location.reload();
            }
        });
    }

    const cachedData = localStorage.getItem('cachedTimetable');
    if (cachedData) {
        try {
            timetableData = JSON.parse(cachedData);
            renderTimetables(timetableData);
            document.getElementById('printButton').disabled = false;
        } catch (err) {
            localStorage.removeItem('cachedTimetable');
        }
    }
});

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleTimetableFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            timetableData = parseCSV(e.target.result);
            if (timetableData.length > 1) {
                localStorage.setItem('cachedTimetable', JSON.stringify(timetableData));
                renderTimetables(timetableData);
                document.getElementById('printButton').disabled = false;
            } else {
                alert('CSV is empty or invalid.');
            }
        } catch (err) {
            console.error(err);
            alert('Error processing CSV.');
        }
    };
    reader.readAsText(file);
}

function getTeacherDisplay(code) {
    if (!code) return '';
    return teacherMap.get(code.toUpperCase()) || code;
}

function getSubjectDisplay(code) {
    if (!code) return '';
    const cleanCode = code.replace(/^\d+/, '').toUpperCase();
    return subjectMap.get(cleanCode) || code;
}

function parseCSV(text) {
    const fields = [];
    let inQuotes = false;
    let currentField = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '"') inQuotes = !inQuotes;
        else if (char === ',' && !inQuotes) {
            fields.push(currentField.trim());
            currentField = '';
        } else if ((char === '\n' || char === '\r') && !inQuotes) {
            if (currentField !== '') {
                fields.push(currentField.trim());
                currentField = '';
            }
        } else currentField += char;
    }
    if (currentField !== '') fields.push(currentField.trim());

    // Detect columns from first line (headers)
    const headerLine = text.split(/\r?\n/)[0];
    const colCount = (headerLine.match(/,/g) || []).length + 1;

    const rows = [];
    for (let i = 0; i < fields.length; i += colCount) {
        rows.push(fields.slice(i, i + colCount));
    }
    return rows;
}

function getClassPart(cell) {
    if (!cell) return null;
    const parts = cell.split('-');
    return parts.length >= 2 ? parts[1] : cell;
}

function getColor(classPart) {
    if (!classPart) return 'transparent';
    if (!colorMap.has(classPart)) {
        colorMap.set(classPart, colors[nextColorIndex % colors.length]);
        nextColorIndex++;
    }
    return colorMap.get(classPart);
}

function renderTimetables(data, filter = '') {
    const renderId = ++currentRenderId;
    const container = document.getElementById('timetableContainer');
    const status = document.getElementById('statusMessage');
    container.innerHTML = '';
    
    if (!data) return;

    const query = filter.toLowerCase().trim();
    const students = [];

    for (let i = 1; i < data.length; i++) {
        const row = data[i];
        if (row.length < 5) continue;
        if (query && !row[0].toLowerCase().includes(query)) continue;
        students.push(row);
    }

    status.textContent = `Found ${students.length} students. Loading...`;
    
    renderBatch(students, 0, renderId);
}

function renderBatch(students, index, renderId) {
    if (renderId !== currentRenderId) return;

    const container = document.getElementById('timetableContainer');
    const BATCH_SIZE = 10;
    const end = Math.min(index + BATCH_SIZE, students.length);

    const fragment = document.createDocumentFragment();

    for (let i = index; i < end; i++) {
        const row = students[i];
        const student = {
            name: row[0], id: row[1], form: row[2], year: row[3],
            week1: [], week2: []
        };

        for (let d = 0; d < 5; d++) {
            student.week1[d] = row.slice(4 + (d * 9), 4 + ((d + 1) * 9));
            student.week2[d] = row.slice(49 + (d * 9), 49 + ((d + 1) * 9));
        }

        const studentDiv = document.createElement('div');
        studentDiv.className = 'student-page';
        studentDiv.innerHTML = `
            <div class="student-header">
                <div class="student-info"><h2>${student.name}</h2></div>
                <div class="student-meta">
                    <div>ID: ${student.id}</div>
                    <div>Form: ${student.form} | Year: ${student.year}</div>
                </div>
            </div>
            <div class="weeks-wrapper"></div>
        `;
        
        const wrapper = studentDiv.querySelector('.weeks-wrapper');
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const slots = ['Before School', 'Form', 'Period 1', 'Period 2', 'Interval', 'Period 3', 'Period 4', 'Lunch', 'Period 5'];
        
        wrapper.appendChild(createWeekTable(1, days, slots, student.week1, true));
        wrapper.appendChild(createWeekTable(2, days, slots, student.week2, false));
        fragment.appendChild(studentDiv);
    }

    container.appendChild(fragment);

    if (end < students.length) {
        setTimeout(() => renderBatch(students, end, renderId), 0);
    } else {
        document.getElementById('statusMessage').textContent = `Showing ${students.length} students.`;
    }
}

function getStartTime(day, uiIdx) {
    const times = {
        'Monday': ['—', '8:15', '9:00', '10:00', '10:50', '11:15', '12:10', '1:00', '1:50'],
        'Wednesday': ['8:15', '8:15', '9:10', '9:30', '10:25', '10:50', '11:50', '12:45', '1:35'],
        'Default': ['8:15', '8:15', '8:30', '9:30', '10:25', '10:50', '11:50', '12:45', '1:45']
    };
    return (times[day] || times['Default'])[uiIdx] || '';
}

function createWeekTable(weekNum, days, slots, weekData, showLabels) {
    const container = document.createElement('div');
    container.className = 'week-container';
    container.innerHTML = `<div class="week-title">WEEK ${weekNum}</div>`;
    
    const table = document.createElement('table');
    let html = `<thead><tr>${showLabels ? '<th class="period-label">Period</th>' : ''}`;
    days.forEach(day => html += `<th>${day}</th>`);
    html += '</tr></thead><tbody>';
    
    slots.forEach((slotName, uiIdx) => {
        const isCompressed = ['Before School', 'Interval', 'Lunch'].includes(slotName);
        html += `<tr class="${isCompressed ? 'compressed-row' : ''}">`;
        if (showLabels) html += `<td class="period-label">${slotName}</td>`;
        
        const csvIdx = slotName === 'Before School' ? -1 : (uiIdx - 1);

        for (let d = 0; d < 5; d++) {
            const dayName = days[d];
            const cellData = csvIdx >= 0 ? (weekData[d] ? weekData[d][csvIdx] : null) : null;
            const classPart = getClassPart(cellData);
            const bgColor = getColor(classPart);
            const startTime = getStartTime(dayName, uiIdx);
            
            let finishTime = '';
            if (slotName === 'Period 2') finishTime = getStartTime(dayName, 4);
            if (slotName === 'Period 4') finishTime = getStartTime(dayName, 7);
            if (slotName === 'Period 5') finishTime = (dayName === 'Wednesday' ? '2:30' : '2:40');

            if (cellData) {
                const parts = cellData.split('-');
                html += `<td><div class="class-cell" style="background-color: ${bgColor}">
                    <span class="time-stamp start">${startTime}</span>
                    ${finishTime ? `<span class="time-stamp finish">${finishTime}</span>` : ''}
                    <span class="class-text">${getSubjectDisplay(parts[1])}</span>
                    <span class="teacher-text">${getTeacherDisplay(parts[0])}</span>
                    <span class="room-text">${parts[2] || ''}</span>
                </div></td>`;
            } else {
                html += `<td><div class="class-cell empty">
                    ${(!isCompressed && startTime && startTime !== '—') ? `<span class="time-stamp start">${startTime}</span>` : ''}
                    ${finishTime ? `<span class="time-stamp finish">${finishTime}</span>` : ''}
                </div></td>`;
            }
        }
        html += '</tr>';
    });
    
    table.innerHTML = html + '</tbody>';
    container.appendChild(table);
    return container;
}
