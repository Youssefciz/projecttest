document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const scanId = params.get("scan") || "SCAN-002";
  const location = params.get("location") || "New York";
  
  // Update location display
  document.getElementById("selected-location").textContent = location;
  
  // Update back link with location parameter
  const backLink = document.getElementById("back-link");
  backLink.href = `reports.html?location=${encodeURIComponent(location)}`;

  // Sample detailed scan data
  const scanDetails = {
    "SCAN-001": {
      id: "SCAN-001",
      date: "May 15, 2023 – 09:45 AM",
      duration: "58m",
      type: "Quick Scan",
      risk: "Medium",
      riskLevel: "medium-risk",
      vulnerabilities: { critical: 2, high: 5, medium: 8, low: 3 },
      hostCount: 189,
      hosts: [
        { hostname: "server-01", ip: "192.168.1.10", status: "medium" },
        { hostname: "server-02", ip: "192.168.1.11", status: "low" },
        { hostname: "workstation-03", ip: "192.168.1.25", status: "high" },
        { hostname: "database-01", ip: "192.168.1.50", status: "critical" },
        { hostname: "web-server-01", ip: "192.168.1.80", status: "medium" },
        { hostname: "mail-server", ip: "192.168.1.90", status: "low" },
      ],
      newHosts: [
        { hostname: "new-server-01", ip: "192.168.1.120", info: "Windows Server 2019" },
        { hostname: "iot-device-15", ip: "192.168.1.205", info: "Smart Camera" },
      ],
      missingHosts: [
        { hostname: "old-printer", ip: "192.168.1.99", info: "HP LaserJet Pro" },
      ],
      vulnerabilities_list: [
        {
          cve: "CVE-2023-1234",
          title: "Remote Code Execution in Web Server",
          affects: ["server-01", "web-server-01"],
          description: "A critical vulnerability that allows remote attackers to execute arbitrary code on affected systems through malformed HTTP requests.",
          cvss: "9.8",
          severity: "Critical",
          tags: ["Remote", "Authentication: None"]
        },
        {
          cve: "CVE-2023-5678",
          title: "SQL Injection in Database Interface",
          affects: ["database-01"],
          description: "SQL injection vulnerability in the database management interface allows authenticated users to execute arbitrary SQL commands.",
          cvss: "7.2",
          severity: "High",
          tags: ["Authentication: Required"]
        },
      ]
    },
    "SCAN-002": {
      id: "SCAN-002",
      date: "May 14, 2023 – 02:30 PM",
      duration: "1h 23m",
      type: "Comprehensive",
      risk: "High",
      riskLevel: "high-risk",
      vulnerabilities: { critical: 5, high: 8, medium: 12, low: 6 },
      hostCount: 127,
      hosts: [
        { hostname: "server-01", ip: "192.168.1.10", status: "critical" },
        { hostname: "server-02", ip: "192.168.1.11", status: "high" },
        { hostname: "workstation-03", ip: "192.168.1.25", status: "high" },
        { hostname: "database-01", ip: "192.168.1.50", status: "critical" },
        { hostname: "web-server-01", ip: "192.168.1.80", status: "critical" },
        { hostname: "mail-server", ip: "192.168.1.90", status: "medium" },
        { hostname: "file-server", ip: "192.168.1.100", status: "high" },
        { hostname: "backup-server", ip: "192.168.1.110", status: "low" },
      ],
      newHosts: [
        { hostname: "test-server-01", ip: "192.168.1.130", info: "Ubuntu 20.04 LTS" },
        { hostname: "scanner-device", ip: "192.168.1.210", info: "Network Scanner" },
        { hostname: "new-workstation", ip: "192.168.1.45", info: "Windows 11 Pro" },
      ],
      missingHosts: [
        { hostname: "legacy-system", ip: "192.168.1.200", info: "Windows XP (Decommissioned)" },
      ],
      vulnerabilities_list: [
        {
          cve: "CVE-2023-0001",
          title: "Buffer Overflow in Network Service",
          affects: ["server-01", "server-02", "web-server-01"],
          description: "A buffer overflow vulnerability in the network service daemon allows remote attackers to cause denial of service or potentially execute arbitrary code.",
          cvss: "9.8",
          severity: "Critical",
          tags: ["Remote", "Authentication: None"]
        },
        {
          cve: "CVE-2023-0002",
          title: "Privilege Escalation via Local Service",
          affects: ["workstation-03", "file-server"],
          description: "Local privilege escalation vulnerability allows authenticated users to gain administrative privileges through a vulnerable system service.",
          cvss: "8.1",
          severity: "High",
          tags: ["Local", "Authentication: Required"]
        },
        {
          cve: "CVE-2023-0003",
          title: "Information Disclosure in Web Application",
          affects: ["web-server-01"],
          description: "Sensitive information disclosure vulnerability in the web application configuration files accessible through directory traversal.",
          cvss: "6.5",
          severity: "Medium",
          tags: ["Remote", "Authentication: None"]
        },
      ]
    },
    "SCAN-003": {
      id: "SCAN-003",
      date: "May 13, 2023 – 11:15 AM",
      duration: "45m",
      type: "Quick Scan",
      risk: "Low",
      riskLevel: "low-risk",
      vulnerabilities: { critical: 0, high: 1, medium: 3, low: 8 },
      hostCount: 142,
      hosts: [
        { hostname: "workstation-01", ip: "192.168.2.10", status: "low" },
        { hostname: "workstation-02", ip: "192.168.2.11", status: "low" },
        { hostname: "printer-01", ip: "192.168.2.25", status: "medium" },
        { hostname: "switch-01", ip: "192.168.2.50", status: "low" },
        { hostname: "access-point-01", ip: "192.168.2.80", status: "high" },
      ],
      newHosts: [
        { hostname: "mobile-device-01", ip: "192.168.2.120", info: "iPhone 14" },
      ],
      missingHosts: [],
      vulnerabilities_list: [
        {
          cve: "CVE-2023-0004",
          title: "Weak Default Credentials",
          affects: ["access-point-01"],
          description: "Default administrative credentials are still in use on network equipment, allowing unauthorized access.",
          cvss: "7.5",
          severity: "High",
          tags: ["Remote", "Authentication: None"]
        },
      ]
    },
    "SCAN-007": {
      id: "SCAN-007",
      date: "May 13, 2023 – 06:15 PM",
      duration: "35m",
      type: "Quick Scan",
      risk: "Low",
      riskLevel: "low-risk",
      vulnerabilities: { critical: 0, high: 0, medium: 2, low: 5 },
      hostCount: 203,
      hosts: [
        { hostname: "desktop-01", ip: "192.168.1.15", status: "low" },
        { hostname: "desktop-02", ip: "192.168.1.16", status: "medium" },
        { hostname: "laptop-01", ip: "192.168.1.17", status: "low" },
        { hostname: "server-backup", ip: "192.168.1.85", status: "medium" },
      ],
      newHosts: [
        { hostname: "tablet-device", ip: "192.168.1.220", info: "iPad Pro" },
      ],
      missingHosts: [],
      vulnerabilities_list: [
        {
          cve: "CVE-2023-0005",
          title: "Outdated Software Version",
          affects: ["desktop-02", "server-backup"],
          description: "Software components are running outdated versions with known security issues.",
          cvss: "5.3",
          severity: "Medium",
          tags: ["Local", "Authentication: Required"]
        },
      ]
    },
    "SCAN-012": {
      id: "SCAN-012",
      date: "May 12, 2023 – 11:30 AM",
      duration: "2h 15m",
      type: "Deep Scan",
      risk: "Critical",
      riskLevel: "high-risk",
      vulnerabilities: { critical: 12, high: 18, medium: 15, low: 4 },
      hostCount: 156,
      hosts: [
        { hostname: "domain-controller", ip: "192.168.1.5", status: "critical" },
        { hostname: "exchange-server", ip: "192.168.1.6", status: "critical" },
        { hostname: "sql-server", ip: "192.168.1.7", status: "critical" },
        { hostname: "file-server-01", ip: "192.168.1.8", status: "high" },
        { hostname: "web-app-server", ip: "192.168.1.9", status: "critical" },
      ],
      newHosts: [],
      missingHosts: [
        { hostname: "old-backup", ip: "192.168.1.199", info: "Decommissioned backup server" },
      ],
      vulnerabilities_list: [
        {
          cve: "CVE-2023-0006",
          title: "Active Directory Privilege Escalation",
          affects: ["domain-controller"],
          description: "Critical vulnerability in Active Directory allows attackers to escalate privileges and gain domain admin access.",
          cvss: "9.9",
          severity: "Critical",
          tags: ["Remote", "Authentication: Required"]
        },
        {
          cve: "CVE-2023-0007",
          title: "SQL Server Remote Code Execution",
          affects: ["sql-server"],
          description: "Remote code execution vulnerability in SQL Server allows unauthenticated attackers to execute arbitrary code.",
          cvss: "9.8",
          severity: "Critical",
          tags: ["Remote", "Authentication: None"]
                 },
       ]
     },
     "SCAN-008": {
       id: "SCAN-008", 
       date: "May 11, 2023 – 02:45 PM",
       duration: "1h 5m",
       type: "Comprehensive",
       risk: "Medium",
       riskLevel: "medium-risk",
       vulnerabilities: { critical: 1, high: 4, medium: 12, low: 7 },
       hostCount: 198,
       hosts: [
         { hostname: "web-server-la", ip: "192.168.3.10", status: "medium" },
         { hostname: "db-server-la", ip: "192.168.3.11", status: "high" },
         { hostname: "app-server-la", ip: "192.168.3.12", status: "critical" },
       ],
       newHosts: [
         { hostname: "load-balancer", ip: "192.168.3.100", info: "Nginx Load Balancer" },
       ],
       missingHosts: [],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0008",
           title: "Database Connection String Exposure",
           affects: ["app-server-la"],
           description: "Database connection strings containing credentials are exposed in configuration files.",
           cvss: "8.8",
           severity: "Critical",
           tags: ["Remote", "Authentication: None"]
         },
       ]
     },
     "SCAN-009": {
       id: "SCAN-009",
       date: "May 11, 2023 – 08:45 AM", 
       duration: "1h 45m",
       type: "Deep Scan",
       risk: "High",
       riskLevel: "high-risk",
       vulnerabilities: { critical: 3, high: 12, medium: 8, low: 2 },
       hostCount: 145,
       hosts: [
         { hostname: "firewall-hk", ip: "192.168.4.1", status: "high" },
         { hostname: "router-hk", ip: "192.168.4.2", status: "critical" },
         { hostname: "server-hk-01", ip: "192.168.4.10", status: "high" },
       ],
       newHosts: [],
       missingHosts: [
         { hostname: "old-switch", ip: "192.168.4.99", info: "Legacy network switch" },
       ],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0009",
           title: "Router Firmware Backdoor",
           affects: ["router-hk"],
           description: "Hidden backdoor in router firmware allows unauthorized remote access.",
           cvss: "9.1",
           severity: "Critical",
           tags: ["Remote", "Authentication: None"]
         },
       ]
     },
     "SCAN-013": {
       id: "SCAN-013",
       date: "May 09, 2023 – 09:30 AM",
       duration: "1h 30m", 
       type: "Comprehensive",
       risk: "High",
       riskLevel: "high-risk",
       vulnerabilities: { critical: 2, high: 9, medium: 11, low: 5 },
       hostCount: 167,
       hosts: [
         { hostname: "mail-server-la", ip: "192.168.3.20", status: "high" },
         { hostname: "file-share-la", ip: "192.168.3.21", status: "critical" },
         { hostname: "backup-la", ip: "192.168.3.22", status: "medium" },
       ],
       newHosts: [
         { hostname: "monitoring-server", ip: "192.168.3.150", info: "SIEM Server" },
       ],
       missingHosts: [],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0010", 
           title: "Email Server Buffer Overflow",
           affects: ["mail-server-la"],
           description: "Buffer overflow in email processing allows remote code execution.",
           cvss: "9.0",
           severity: "Critical",
           tags: ["Remote", "Authentication: None"]
         },
       ]
     },
     "SCAN-014": {
       id: "SCAN-014",
       date: "May 10, 2023 – 01:30 PM",
       duration: "55m",
       type: "Quick Scan", 
       risk: "Medium",
       riskLevel: "medium-risk",
       vulnerabilities: { critical: 0, high: 3, medium: 9, low: 6 },
       hostCount: 221,
       hosts: [
         { hostname: "workstation-hk-01", ip: "192.168.4.30", status: "medium" },
         { hostname: "workstation-hk-02", ip: "192.168.4.31", status: "high" },
         { hostname: "printer-hk", ip: "192.168.4.40", status: "medium" },
       ],
       newHosts: [
         { hostname: "conference-room-pc", ip: "192.168.4.160", info: "Meeting Room Computer" },
       ],
       missingHosts: [],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0011",
           title: "Printer Default Password",
           affects: ["printer-hk"],
           description: "Network printer still uses default administrative password.",
           cvss: "6.8",
           severity: "Medium",
           tags: ["Remote", "Authentication: None"]
         },
       ]
     },
     "SCAN-015": {
       id: "SCAN-015",
       date: "May 08, 2023 – 12:45 PM",
       duration: "1h 20m",
       type: "Comprehensive",
       risk: "High", 
       riskLevel: "high-risk",
       vulnerabilities: { critical: 4, high: 8, medium: 7, low: 3 },
       hostCount: 119,
       hosts: [
         { hostname: "web-server-paris", ip: "192.168.5.10", status: "critical" },
         { hostname: "db-server-paris", ip: "192.168.5.11", status: "high" },
         { hostname: "vpn-server", ip: "192.168.5.12", status: "critical" },
       ],
       newHosts: [],
       missingHosts: [
         { hostname: "old-terminal", ip: "192.168.5.99", info: "Legacy terminal server" },
       ],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0012",
           title: "VPN Server Authentication Bypass",
           affects: ["vpn-server"],
           description: "Authentication bypass vulnerability allows unauthorized VPN access.",
           cvss: "9.3",
           severity: "Critical",
           tags: ["Remote", "Authentication: None"]
         },
       ]
     },
     "SCAN-018": {
       id: "SCAN-018",
       date: "May 10, 2023 – 03:20 PM", 
       duration: "42m",
       type: "Quick Scan",
       risk: "Medium",
       riskLevel: "medium-risk",
       vulnerabilities: { critical: 1, high: 2, medium: 8, low: 4 },
       hostCount: 234,
       hosts: [
         { hostname: "laptop-fleet-01", ip: "192.168.1.60", status: "medium" },
         { hostname: "laptop-fleet-02", ip: "192.168.1.61", status: "low" },
         { hostname: "mobile-mdm", ip: "192.168.1.70", status: "high" },
       ],
       newHosts: [
         { hostname: "smart-tv", ip: "192.168.1.230", info: "Conference Room Smart TV" },
       ],
       missingHosts: [],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0013",
           title: "Mobile Device Management Bypass",
           affects: ["mobile-mdm"],
           description: "MDM security policies can be bypassed on managed devices.",
           cvss: "7.1",
           severity: "High",
           tags: ["Local", "Authentication: Required"]
         },
       ]
     },
     "SCAN-019": {
       id: "SCAN-019",
       date: "May 08, 2023 – 04:15 PM",
       duration: "38m", 
       type: "Quick Scan",
       risk: "Low",
       riskLevel: "low-risk",
       vulnerabilities: { critical: 0, high: 0, medium: 1, low: 8 },
       hostCount: 213,
       hosts: [
         { hostname: "guest-wifi-ap", ip: "192.168.3.50", status: "low" },
         { hostname: "kiosk-01", ip: "192.168.3.51", status: "medium" },
         { hostname: "security-camera-01", ip: "192.168.3.60", status: "low" },
       ],
       newHosts: [
         { hostname: "iot-sensor-01", ip: "192.168.3.200", info: "Temperature Sensor" },
       ],
       missingHosts: [],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0014",
           title: "Guest Network Isolation Issue",
           affects: ["guest-wifi-ap"],
           description: "Guest network not properly isolated from internal network.",
           cvss: "4.3",
           severity: "Medium",
           tags: ["Remote", "Authentication: None"]
         },
       ]
     },
     "SCAN-020": {
       id: "SCAN-020",
       date: "May 08, 2023 – 10:20 AM",
       duration: "2h 5m",
       type: "Deep Scan",
       risk: "Critical",
       riskLevel: "high-risk", 
       vulnerabilities: { critical: 8, high: 15, medium: 12, low: 3 },
       hostCount: 134,
       hosts: [
         { hostname: "payment-server", ip: "192.168.4.50", status: "critical" },
         { hostname: "customer-db", ip: "192.168.4.51", status: "critical" },
         { hostname: "api-gateway", ip: "192.168.4.52", status: "high" },
       ],
       newHosts: [],
       missingHosts: [
         { hostname: "test-server", ip: "192.168.4.199", info: "Development test server" },
       ],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0015",
           title: "Payment Processing SQL Injection",
           affects: ["payment-server"],
           description: "SQL injection in payment processing allows access to financial data.",
           cvss: "9.9",
           severity: "Critical",
           tags: ["Remote", "Authentication: None"]
         },
       ]
     },
     "SCAN-021": {
       id: "SCAN-021",
       date: "May 07, 2023 – 02:15 PM",
       duration: "1h 10m",
       type: "Comprehensive",
       risk: "Medium",
       riskLevel: "medium-risk",
       vulnerabilities: { critical: 0, high: 5, medium: 11, low: 6 },
       hostCount: 195,
       hosts: [
         { hostname: "hr-server", ip: "192.168.5.30", status: "high" },
         { hostname: "finance-server", ip: "192.168.5.31", status: "medium" },
         { hostname: "crm-server", ip: "192.168.5.32", status: "high" },
       ],
       newHosts: [
         { hostname: "new-laptop-01", ip: "192.168.5.180", info: "MacBook Pro M2" },
       ],
       missingHosts: [],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0016",
           title: "CRM Data Exposure",
           affects: ["crm-server"],
           description: "Customer data accessible without proper authentication in CRM system.",
           cvss: "7.5",
           severity: "High",
           tags: ["Remote", "Authentication: None"]
         },
       ]
     },
     "SCAN-025": {
       id: "SCAN-025",
       date: "May 07, 2023 – 05:15 PM",
       duration: "40m",
       type: "Quick Scan",
       risk: "Low",
       riskLevel: "low-risk",
       vulnerabilities: { critical: 0, high: 1, medium: 2, low: 9 },
       hostCount: 187,
       hosts: [
         { hostname: "storage-nas", ip: "192.168.4.70", status: "medium" },
         { hostname: "backup-nas", ip: "192.168.4.71", status: "low" },
         { hostname: "media-server", ip: "192.168.4.72", status: "high" },
       ],
       newHosts: [
         { hostname: "docker-host", ip: "192.168.4.190", info: "Container Host Server" },
       ],
       missingHosts: [],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0017",
           title: "Media Server Remote Access",
           affects: ["media-server"],
           description: "Media server allows unauthorized remote access to internal files.",
           cvss: "6.5",
           severity: "Medium",
           tags: ["Remote", "Authentication: None"]
         },
       ]
     },
     "SCAN-026": {
       id: "SCAN-026",
       date: "May 06, 2023 – 09:40 AM",
       duration: "2h 35m",
       type: "Deep Scan",
       risk: "Critical",
       riskLevel: "high-risk",
       vulnerabilities: { critical: 10, high: 16, medium: 14, low: 2 },
       hostCount: 208,
       hosts: [
         { hostname: "core-switch", ip: "192.168.5.1", status: "critical" },
         { hostname: "main-router", ip: "192.168.5.2", status: "critical" },
         { hostname: "dns-server", ip: "192.168.5.5", status: "high" },
         { hostname: "dhcp-server", ip: "192.168.5.6", status: "critical" },
       ],
       newHosts: [],
       missingHosts: [
         { hostname: "old-ups", ip: "192.168.5.254", info: "Decommissioned UPS monitor" },
       ],
       vulnerabilities_list: [
         {
           cve: "CVE-2023-0018",
           title: "Network Infrastructure Compromise",
           affects: ["core-switch", "main-router"],
           description: "Critical vulnerabilities in core network infrastructure allow complete network takeover.",
           cvss: "10.0",
           severity: "Critical",
           tags: ["Remote", "Authentication: None"]
         },
         {
           cve: "CVE-2023-0019",
           title: "DNS Server Cache Poisoning",
           affects: ["dns-server"],
           description: "DNS cache poisoning vulnerability allows traffic redirection attacks.",
           cvss: "8.5",
           severity: "High",
           tags: ["Remote", "Authentication: None"]
         },
       ]
     }
   };

  const currentScan = scanDetails[scanId] || scanDetails["SCAN-002"];

  // Update page content
  document.getElementById("scan-id").textContent = currentScan.id;
  document.getElementById("scan-date").textContent = currentScan.date;
  document.getElementById("scan-duration").textContent = currentScan.duration;
  document.getElementById("scan-type").textContent = currentScan.type;
  document.getElementById("host-count").textContent = currentScan.hostCount;
  document.getElementById("new-hosts-count").textContent = currentScan.newHosts.length;
  document.getElementById("missing-hosts-count").textContent = currentScan.missingHosts.length;

  // Update risk badge
  const riskBadge = document.getElementById("risk-level");
  riskBadge.textContent = `${currentScan.risk} Risk`;
  riskBadge.className = `badge ${currentScan.riskLevel}`;

  // Create vulnerability chart
  createVulnerabilityChart(currentScan.vulnerabilities);

  // Populate hosts table
  populateHostsTable(currentScan.hosts);

  // Populate network changes
  populateNetworkChanges(currentScan.newHosts, currentScan.missingHosts);

  // Populate vulnerabilities list
  populateVulnerabilitiesList(currentScan.vulnerabilities_list);
});

function createVulnerabilityChart(vulnerabilities) {
  const ctx = document.getElementById('vulnerabilityChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Critical', 'High', 'Medium', 'Low'],
      datasets: [{
        label: 'Vulnerabilities',
        data: [
          vulnerabilities.critical,
          vulnerabilities.high,
          vulnerabilities.medium,
          vulnerabilities.low
        ],
        backgroundColor: [
          '#ef5350',  // Critical - red
          '#ffa726',  // High - orange
          '#ffeb3b',  // Medium - yellow
          '#66bb6a'   // Low - green
        ],
        borderColor: [
          '#d32f2f',
          '#ff9800',
          '#fdd835',
          '#4caf50'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          },
          grid: {
            color: '#e9ecef'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      elements: {
        bar: {
          borderRadius: 4
        }
      }
    }
  });
}

function populateHostsTable(hosts) {
  const tbody = document.getElementById('hosts-table-body');
  tbody.innerHTML = '';

  hosts.forEach(host => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${host.hostname}</td>
      <td>${host.ip}</td>
      <td><span class="status-badge status-${host.status}">${host.status}</span></td>
    `;
    tbody.appendChild(row);
  });
}

function populateNetworkChanges(newHosts, missingHosts) {
  // Populate new hosts
  const newHostsList = document.getElementById('new-hosts-list');
  newHostsList.innerHTML = '';
  
  newHosts.forEach(host => {
    const hostItem = document.createElement('div');
    hostItem.className = 'host-item';
    hostItem.innerHTML = `
      <div class="host-name">${host.hostname}</div>
      <div class="host-ip">${host.ip}</div>
      <div class="host-info">${host.info}</div>
    `;
    newHostsList.appendChild(hostItem);
  });

  // Populate missing hosts
  const missingHostsList = document.getElementById('missing-hosts-list');
  missingHostsList.innerHTML = '';
  
  missingHosts.forEach(host => {
    const hostItem = document.createElement('div');
    hostItem.className = 'host-item missing';
    hostItem.innerHTML = `
      <div class="host-name">${host.hostname}</div>
      <div class="host-ip">${host.ip}</div>
      <div class="host-info">${host.info}</div>
    `;
    missingHostsList.appendChild(hostItem);
  });
}

function populateVulnerabilitiesList(vulnerabilities) {
  const vulnerabilitiesList = document.getElementById('vulnerabilities-list');
  vulnerabilitiesList.innerHTML = '';

  vulnerabilities.forEach(vuln => {
    const vulnItem = document.createElement('div');
    vulnItem.className = 'vulnerability-item';
    
    const severityClass = vuln.severity.toLowerCase().replace(' ', '-');
    
    vulnItem.innerHTML = `
      <div class="vuln-header">
        <div class="vuln-title">
          <a href="#" class="cve-link">${vuln.cve}</a>
          <div class="vuln-name">${vuln.title}</div>
        </div>
        <span class="badge ${severityClass}-risk">${vuln.severity}</span>
      </div>
      <div class="affected-hosts">
        <strong>Affects:</strong> ${vuln.affects.join(', ')}
      </div>
      <div class="vuln-description">
        ${vuln.description}
      </div>
      <div class="vuln-tags">
        <span class="tag cvss-tag">CVSS: ${vuln.cvss}</span>
        ${vuln.tags.map(tag => `<span class="tag ${getTagClass(tag)}">${tag}</span>`).join('')}
      </div>
    `;
    
    vulnerabilitiesList.appendChild(vulnItem);
  });
}

function getTagClass(tag) {
  if (tag.includes('Authentication')) return 'auth-tag';
  if (tag === 'Remote') return 'remote-tag';
  return 'tag';
} 