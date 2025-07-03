document.addEventListener("DOMContentLoaded", function () {
  // Get location from URL parameters
  const params = new URLSearchParams(window.location.search);
  const location = params.get("location") || "New York";
  
  // Update location display
  document.getElementById("selected-location").textContent = location;

  // Settings data storage
  let settings = {
    scanConfig: {
      defaultScanType: 'Comprehensive',
      scanFrequency: 'Weekly',
      autoScanNewHosts: true
    },
    alerts: {
      criticalAlerts: true,
      highRiskThreshold: 5,
      emailNotifications: true,
      notificationEmail: 'security@company.com'
    },
    display: {
      theme: 'Light',
      reportsPerPage: 20,
      showRiskPercentages: true,
      autoRefresh: '15 minutes'
    },
    security: {
      sessionTimeout: '1 hour',
      twoFactorAuth: false,
      loginAttemptLimit: 3,
      passwordExpiry: 90
    },
    dataManagement: {
      dataRetention: '1 year',
      exportFormat: 'CSV',
      autoBackup: true,
      backupLocation: '/backup/scanergy/'
    },
    integrations: {
      siemIntegration: false,
      slackNotifications: true,
      webhookUrl: '',
      apiRateLimit: 100
    }
  };

  // Load saved settings from localStorage
  function loadSettings() {
    const savedSettings = localStorage.getItem('scanergy-settings');
    if (savedSettings) {
      settings = { ...settings, ...JSON.parse(savedSettings) };
      populateForm();
    }
  }

  // Populate form with current settings
  function populateForm() {
    // Scan Configuration
    const scanTypeSelect = document.querySelector('select[name="scanType"]');
    if (scanTypeSelect) {
      scanTypeSelect.value = settings.scanConfig.defaultScanType;
    }

    // Update all form fields based on settings
    updateFormField('defaultScanType', settings.scanConfig.defaultScanType);
    updateFormField('scanFrequency', settings.scanConfig.scanFrequency);
    updateFormField('autoScanNewHosts', settings.scanConfig.autoScanNewHosts);

    updateFormField('criticalAlerts', settings.alerts.criticalAlerts);
    updateFormField('highRiskThreshold', settings.alerts.highRiskThreshold);
    updateFormField('emailNotifications', settings.alerts.emailNotifications);
    updateFormField('notificationEmail', settings.alerts.notificationEmail);

    updateFormField('theme', settings.display.theme);
    updateFormField('reportsPerPage', settings.display.reportsPerPage);
    updateFormField('showRiskPercentages', settings.display.showRiskPercentages);
    updateFormField('autoRefresh', settings.display.autoRefresh);

    updateFormField('sessionTimeout', settings.security.sessionTimeout);
    updateFormField('twoFactorAuth', settings.security.twoFactorAuth);
    updateFormField('loginAttemptLimit', settings.security.loginAttemptLimit);
    updateFormField('passwordExpiry', settings.security.passwordExpiry);

    updateFormField('dataRetention', settings.dataManagement.dataRetention);
    updateFormField('exportFormat', settings.dataManagement.exportFormat);
    updateFormField('autoBackup', settings.dataManagement.autoBackup);
    updateFormField('backupLocation', settings.dataManagement.backupLocation);

    updateFormField('siemIntegration', settings.integrations.siemIntegration);
    updateFormField('slackNotifications', settings.integrations.slackNotifications);
    updateFormField('webhookUrl', settings.integrations.webhookUrl);
    updateFormField('apiRateLimit', settings.integrations.apiRateLimit);
  }

  // Update individual form field
  function updateFormField(name, value) {
    const elements = document.querySelectorAll(`[name="${name}"], #${name}`);
    elements.forEach(element => {
      if (element.type === 'checkbox') {
        element.checked = value;
      } else {
        element.value = value;
      }
    });
  }

  // Collect form data
  function collectFormData() {
    const formData = new FormData();
    const inputs = document.querySelectorAll('input, select');
    
    inputs.forEach(input => {
      if (input.type === 'checkbox') {
        formData.append(input.name || input.id, input.checked);
      } else {
        formData.append(input.name || input.id, input.value);
      }
    });

    return formData;
  }

  // Save settings
  function saveSettings() {
    const formData = collectFormData();
    
    // Update settings object
    const newSettings = {
      scanConfig: {
        defaultScanType: formData.get('defaultScanType') || settings.scanConfig.defaultScanType,
        scanFrequency: formData.get('scanFrequency') || settings.scanConfig.scanFrequency,
        autoScanNewHosts: formData.get('autoScanNewHosts') === 'true'
      },
      alerts: {
        criticalAlerts: formData.get('criticalAlerts') === 'true',
        highRiskThreshold: parseInt(formData.get('highRiskThreshold')) || settings.alerts.highRiskThreshold,
        emailNotifications: formData.get('emailNotifications') === 'true',
        notificationEmail: formData.get('notificationEmail') || settings.alerts.notificationEmail
      },
      display: {
        theme: formData.get('theme') || settings.display.theme,
        reportsPerPage: parseInt(formData.get('reportsPerPage')) || settings.display.reportsPerPage,
        showRiskPercentages: formData.get('showRiskPercentages') === 'true',
        autoRefresh: formData.get('autoRefresh') || settings.display.autoRefresh
      },
      security: {
        sessionTimeout: formData.get('sessionTimeout') || settings.security.sessionTimeout,
        twoFactorAuth: formData.get('twoFactorAuth') === 'true',
        loginAttemptLimit: parseInt(formData.get('loginAttemptLimit')) || settings.security.loginAttemptLimit,
        passwordExpiry: parseInt(formData.get('passwordExpiry')) || settings.security.passwordExpiry
      },
      dataManagement: {
        dataRetention: formData.get('dataRetention') || settings.dataManagement.dataRetention,
        exportFormat: formData.get('exportFormat') || settings.dataManagement.exportFormat,
        autoBackup: formData.get('autoBackup') === 'true',
        backupLocation: formData.get('backupLocation') || settings.dataManagement.backupLocation
      },
      integrations: {
        siemIntegration: formData.get('siemIntegration') === 'true',
        slackNotifications: formData.get('slackNotifications') === 'true',
        webhookUrl: formData.get('webhookUrl') || settings.integrations.webhookUrl,
        apiRateLimit: parseInt(formData.get('apiRateLimit')) || settings.integrations.apiRateLimit
      }
    };

    settings = newSettings;
    localStorage.setItem('scanergy-settings', JSON.stringify(settings));
    
    showNotification('Settings saved successfully!', 'success');
  }

  // Reset to defaults
  function resetSettings() {
    if (confirm('Are you sure you want to reset all settings to their default values?')) {
      localStorage.removeItem('scanergy-settings');
      location.reload();
    }
  }

  // Export configuration
  function exportConfiguration() {
    const configBlob = new Blob([JSON.stringify(settings, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(configBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scanergy-config-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Configuration exported successfully!', 'success');
  }

  // Show notification
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
      color: white;
      border-radius: 6px;
      z-index: 1000;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Event listeners
  document.querySelector('.btn-save').addEventListener('click', saveSettings);
  document.querySelector('.btn-reset').addEventListener('click', resetSettings);
  document.querySelector('.btn-export').addEventListener('click', exportConfiguration);

  // Browse button functionality
  const browseBtn = document.querySelector('.browse-btn');
  if (browseBtn) {
    browseBtn.addEventListener('click', function() {
      const newPath = prompt('Enter backup path:', settings.dataManagement.backupLocation);
      if (newPath) {
        document.querySelector('input[readonly]').value = newPath;
      }
    });
  }

  // Auto-save on critical settings change
  const criticalInputs = document.querySelectorAll('input[type="checkbox"]');
  criticalInputs.forEach(input => {
    input.addEventListener('change', function() {
      if (this.checked !== undefined) {
        showNotification('Setting updated', 'info');
      }
    });
  });

  // Initialize
  loadSettings();
}); 