# Scanergy - Network Security Dashboard

A comprehensive network security dashboard for monitoring and analyzing vulnerability scans across multiple locations.

![Scanergy Dashboard](https://img.shields.io/badge/status-active-green) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🌟 Features

### 🏢 Multi-Location Support
- **New York** - East Coast Center (5 scan reports)
- **Los Angeles** - West Coast Center (4 scan reports)  
- **Hong Kong** - Asia Pacific Center (5 scan reports)
- **Paris** - European Center (5 scan reports)

### 📊 Comprehensive Reporting
- **Dashboard Overview** - Quick scan report cards with risk levels
- **Detailed Reports** - In-depth vulnerability analysis per scan
- **Interactive Charts** - Vulnerability distribution by severity
- **Host Management** - Complete inventory of scanned systems
- **Network Changes** - Track new and missing hosts over time

### 🔍 Vulnerability Analysis
- **Risk Levels**: Critical, High, Medium, Low
- **CVE Integration** - Detailed vulnerability descriptions
- **CVSS Scoring** - Industry-standard vulnerability ratings
- **Host Impact** - See which systems are affected
- **Trend Analysis** - Compare scans over time

### 📈 Dynamic Data
- **19 Sample Reports** across all locations
- **Randomized Host Counts** (100-254 hosts per scan)
- **Realistic Vulnerabilities** with CVE references
- **Multiple Scan Types**: Quick, Comprehensive, Deep Scan
- **Varied Risk Scenarios** from low-risk to critical infrastructure threats

## 🚀 Live Demo

Visit the live demo: [Scanergy Dashboard](https://yourusername.github.io/scanergy-dashboard)

## 🛠️ Setup & Installation

### Local Development
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/scanergy-dashboard.git
   cd scanergy-dashboard
   ```

2. Open `login.html` in your web browser or serve with a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Navigate to `http://localhost:8000` in your browser

### GitHub Pages Deployment
1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Click "Save"
6. Your site will be available at `https://yourusername.github.io/repository-name`

## 📁 Project Structure

```
scanergy-dashboard/
├── 📄 login.html          # Login page (entry point)
├── 📄 locations.html      # Location selection
├── 📄 reports.html        # Scan reports dashboard
├── 📄 report-detail.html  # Detailed report view
├── 📁 css/
│   ├── styles.css         # Login page styles
│   ├── locations.css      # Location selection styles
│   ├── reports.css        # Dashboard styles
│   └── report-detail.css  # Detail page styles
├── 📁 js/
│   ├── reports.js         # Dashboard functionality
│   └── report-detail.js   # Detail page functionality
└── 📄 README.md           # Project documentation
```

## 🎯 Navigation Flow

1. **Login** (`login.html`) → Enter credentials
2. **Locations** (`locations.html`) → Select monitoring location
3. **Dashboard** (`reports.html`) → View scan report cards
4. **Details** (`report-detail.html`) → Click any report for detailed analysis

## 🔧 Customization

### Adding New Locations
1. Update `locations.html` with new location cards
2. Add location data to `reportsByLocation` in `js/reports.js`
3. Add corresponding detailed data in `js/report-detail.js`

### Adding New Scan Reports
1. Add new scan entries to the appropriate location in `js/reports.js`
2. Create detailed scan data in `js/report-detail.js`
3. Ensure scan IDs match between both files

### Styling Customization
- **Colors**: Modify CSS custom properties in each stylesheet
- **Fonts**: Update font-family declarations
- **Layout**: Adjust grid and flexbox properties
- **Risk Levels**: Update color mappings in JavaScript files

## 🎨 Design System

### Color Palette
- **Primary Blue**: #183bbb (Sidebar background)
- **Secondary Blue**: #2962ff (Buttons and links)
- **Background**: #f4f6f9 (Page background)
- **Success**: #66bb6a (Low risk)
- **Warning**: #ffa726 (Medium/High risk)
- **Danger**: #ef5350 (Critical risk)

### Risk Level Colors
| Risk Level | Color Code | Usage |
|------------|------------|-------|
| Critical   | #ef5350    | Highest priority vulnerabilities |
| High       | #ffa726    | Significant security issues |
| Medium     | #ffeb3b    | Moderate security concerns |
| Low        | #66bb6a    | Minor security issues |

## 🔒 Security Features Simulated

- **Vulnerability Scanning** - Network-wide security assessment
- **Risk Assessment** - Automated risk level calculation
- **Host Discovery** - Track all network devices
- **Change Detection** - Monitor network topology changes
- **Compliance Reporting** - Security posture documentation

## 📊 Sample Data Overview

- **Total Scan Reports**: 19 across 4 locations
- **Host Range**: 119-241 hosts per scan
- **Vulnerability Types**: Network, Application, Infrastructure
- **Scan Types**: Quick (30-60min), Comprehensive (1-2h), Deep (2-3h)
- **CVE References**: 19 unique vulnerabilities with realistic descriptions

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📱 Responsive Design

- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktop (1024px+)
- 🖥️ Large screens (1200px+)

## 🛡️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **JavaScript ES6+** - Dynamic functionality
- **Chart.js** - Interactive vulnerability charts
- **Font Awesome** - Icon library
- **CSS Grid & Flexbox** - Responsive layouts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or run into issues:
1. Check the [Issues](https://github.com/yourusername/scanergy-dashboard/issues) page
2. Create a new issue with detailed information
3. Include browser version and steps to reproduce

---

**Note**: This is a demonstration dashboard with simulated security data. Do not use for actual security monitoring without proper integration with real security tools.

Made with ❤️ for cybersecurity professionals 