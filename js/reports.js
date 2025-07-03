const params = new URLSearchParams(window.location.search);
const selectedLocation = params.get("location") || "New York";
document.getElementById("selected-location").textContent = selectedLocation;

const reportsByLocation = {
  "New York": [
    { id: "SCAN-001", risk: "Medium", level: 60, date: "May 15, 2023 – 09:45 AM", hosts: 189 },
    { id: "SCAN-002", risk: "High", level: 90, date: "May 14, 2023 – 02:30 PM", hosts: 127 },
    { id: "SCAN-007", risk: "Low", level: 25, date: "May 13, 2023 – 06:15 PM", hosts: 203 },
    { id: "SCAN-012", risk: "Critical", level: 95, date: "May 12, 2023 – 11:30 AM", hosts: 156 },
    { id: "SCAN-018", risk: "Medium", level: 55, date: "May 10, 2023 – 03:20 PM", hosts: 234 }
  ],
  "Los Angeles": [
    { id: "SCAN-003", risk: "Low", level: 30, date: "May 13, 2023 – 11:15 AM", hosts: 142 },
    { id: "SCAN-008", risk: "Medium", level: 65, date: "May 11, 2023 – 02:45 PM", hosts: 198 },
    { id: "SCAN-013", risk: "High", level: 80, date: "May 09, 2023 – 09:30 AM", hosts: 167 },
    { id: "SCAN-019", risk: "Low", level: 20, date: "May 08, 2023 – 04:15 PM", hosts: 213 }
  ],
  "Hong Kong": [
    { id: "SCAN-004", risk: "Low", level: 20, date: "May 12, 2023 – 03:20 PM", hosts: 178 },
    { id: "SCAN-009", risk: "High", level: 85, date: "May 11, 2023 – 08:45 AM", hosts: 145 },
    { id: "SCAN-014", risk: "Medium", level: 50, date: "May 10, 2023 – 01:30 PM", hosts: 221 },
    { id: "SCAN-020", risk: "Critical", level: 92, date: "May 08, 2023 – 10:20 AM", hosts: 134 },
    { id: "SCAN-025", risk: "Low", level: 35, date: "May 07, 2023 – 05:15 PM", hosts: 187 }
  ],
  "Paris": [
    { id: "SCAN-005", risk: "Medium", level: 50, date: "May 10, 2023 – 10:00 AM", hosts: 162 },
    { id: "SCAN-010", risk: "Low", level: 15, date: "May 09, 2023 – 07:30 AM", hosts: 241 },
    { id: "SCAN-015", risk: "High", level: 75, date: "May 08, 2023 – 12:45 PM", hosts: 119 },
    { id: "SCAN-021", risk: "Medium", level: 60, date: "May 07, 2023 – 02:15 PM", hosts: 195 },
    { id: "SCAN-026", risk: "Critical", level: 88, date: "May 06, 2023 – 09:40 AM", hosts: 208 }
  ]
};

const colors = {
  Critical: "red",
  High: "red", 
  Medium: "yellow",
  Low: "green"
};

const container = document.getElementById("reports-container");
const reports = reportsByLocation[selectedLocation] || [];

if (reports.length === 0) {
  container.innerHTML = `<p>No reports available for ${selectedLocation}.</p>`;
} else {
  reports.forEach(report => {
    const card = document.createElement("div");
    card.className = `report-card`;
    card.style.cursor = "pointer";
    card.innerHTML = `
      <h3>Full Network Scan</h3>
      <p>Scan ID: ${report.id}</p>
      <div class="risk-bar ${colors[report.risk]}">
        <span>Vulnerabilities</span>
        <div class="bar"><div class="fill" style="width: ${report.level}%"></div></div>
        <span class="risk-label">${report.risk} Risk</span>
      </div>
      <div class="meta">
        <span>${report.date}</span>
        <span>${report.hosts} hosts</span>
      </div>
    `;
    
    // Add click handler to navigate to detail page
    card.addEventListener('click', function() {
      window.location.href = `report-detail.html?scan=${report.id}&location=${encodeURIComponent(selectedLocation)}`;
    });
    
    container.appendChild(card);
  });
}
