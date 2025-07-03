document.addEventListener("DOMContentLoaded", function () {
  // Get location from URL parameters
  const params = new URLSearchParams(window.location.search);
  const location = params.get("location") || "New York";
  
  // Update location display
  document.getElementById("selected-location").textContent = location;

  // Help card interactions
  const helpCards = document.querySelectorAll('.help-card');
  
  helpCards.forEach(card => {
    card.addEventListener('click', function() {
      const title = this.querySelector('h3').textContent;
      
      switch(title) {
        case 'Understanding Reports':
          showHelpModal('Understanding Reports', `
            <h4>Risk Levels</h4>
            <ul>
              <li><strong style="color: #ef5350;">Critical:</strong> Immediate action required</li>
              <li><strong style="color: #ffa726;">High:</strong> Urgent attention needed</li>
              <li><strong style="color: #ffeb3b; color: #333;">Medium:</strong> Moderate risk</li>
              <li><strong style="color: #66bb6a;">Low:</strong> Low priority</li>
            </ul>
            <h4>Chart Interpretation</h4>
            <p>The vulnerability chart shows the distribution of security issues by severity. Click on each segment to see detailed breakdown.</p>
            <h4>Host Status</h4>
            <p>Green indicators show secure hosts, while red indicates vulnerabilities present.</p>
          `);
          break;
          
        case 'Configuration':
          showHelpModal('Configuration Guide', `
            <h4>Scan Settings</h4>
            <p>Configure scan frequency, types, and targets in the Settings page.</p>
            <h4>Alert Thresholds</h4>
            <p>Set custom thresholds for vulnerability counts to trigger automatic alerts.</p>
            <h4>Notification Preferences</h4>
            <p>Choose how and when you want to be notified of security issues.</p>
            <h4>Integration Setup</h4>
            <p>Connect with SIEM systems, Slack, and other security tools.</p>
          `);
          break;
          
        case 'FAQ':
          showHelpModal('Frequently Asked Questions', `
            <h4>How often should I run scans?</h4>
            <p>For critical infrastructure: Daily quick scans + weekly comprehensive scans.</p>
            <h4>What do scan types mean?</h4>
            <ul>
              <li><strong>Quick Scan:</strong> 30-60 minutes, common vulnerabilities</li>
              <li><strong>Comprehensive:</strong> 1-2 hours, thorough assessment</li>
              <li><strong>Deep Scan:</strong> 2-3 hours, exhaustive analysis</li>
            </ul>
            <h4>How to handle false positives?</h4>
            <p>Review the vulnerability details and create exceptions for confirmed safe configurations.</p>
          `);
          break;
          
        case 'Contact Support':
          showHelpModal('Contact Support', `
            <h4>Support Channels</h4>
            <div style="margin: 15px 0;">
              <strong>📧 Email:</strong> support@scanergy.com<br>
              <small>Response time: 24-48 hours</small>
            </div>
            <div style="margin: 15px 0;">
              <strong>📞 Phone:</strong> +1 (800) SCANERGY<br>
              <small>Available: 24/7</small>
            </div>
            <div style="margin: 15px 0;">
              <strong>💬 Live Chat:</strong> Available in bottom-right corner<br>
              <small>Instant support for urgent issues</small>
            </div>
            <h4>Emergency Contact</h4>
            <p style="color: #ef5350; font-weight: bold;">For critical security incidents: +1 (800) EMERGENCY</p>
          `);
          break;
      }
    });
  });

  // Show help modal
  function showHelpModal(title, content) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.help-modal');
    if (existingModal) {
      existingModal.remove();
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'help-modal';
    modal.innerHTML = `
      <div class="modal-overlay">
        <div class="modal-content">
          <div class="modal-header">
            <h3>${title}</h3>
            <button class="modal-close">&times;</button>
          </div>
          <div class="modal-body">
            ${content}
          </div>
          <div class="modal-footer">
            <button class="btn-close">Close</button>
          </div>
        </div>
      </div>
    `;

    // Add modal styles
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
    `;

    // Add CSS for modal components
    const style = document.createElement('style');
    style.textContent = `
      .modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .modal-content {
        background: white;
        border-radius: 8px;
        max-width: 600px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }
      .modal-header {
        padding: 20px 25px 15px;
        border-bottom: 1px solid #e9ecef;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .modal-header h3 {
        margin: 0;
        color: #333;
      }
      .modal-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .modal-body {
        padding: 20px 25px;
        line-height: 1.6;
      }
      .modal-body h4 {
        color: #2962ff;
        margin: 20px 0 10px 0;
      }
      .modal-body h4:first-child {
        margin-top: 0;
      }
      .modal-body ul {
        margin: 10px 0;
        padding-left: 20px;
      }
      .modal-body li {
        margin: 5px 0;
      }
      .modal-footer {
        padding: 15px 25px 20px;
        border-top: 1px solid #e9ecef;
        text-align: right;
      }
      .btn-close {
        background: #2962ff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
      }
      .btn-close:hover {
        background: #1e4ed8;
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(modal);

    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
    modal.querySelector('.btn-close').addEventListener('click', () => modal.remove());
    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
      if (e.target === modal.querySelector('.modal-overlay')) {
        modal.remove();
      }
    });

    // Remove modal on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
      if (e.key === 'Escape') {
        modal.remove();
        document.removeEventListener('keydown', escapeHandler);
      }
    });
  }

  // Add keyboard shortcuts info
  document.addEventListener('keydown', function(e) {
    // Show shortcuts on F1
    if (e.key === 'F1') {
      e.preventDefault();
      showHelpModal('Keyboard Shortcuts', `
        <h4>Navigation Shortcuts</h4>
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 10px; margin: 15px 0;">
          <strong>Esc</strong> <span>Return to dashboard</span>
          <strong>Ctrl + R</strong> <span>Refresh current view</span>
          <strong>/</strong> <span>Focus search box</span>
          <strong>F1</strong> <span>Show this help</span>
        </div>
        <h4>Settings Shortcuts</h4>
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 10px; margin: 15px 0;">
          <strong>Ctrl + S</strong> <span>Save current settings</span>
          <strong>Ctrl + E</strong> <span>Export configuration</span>
        </div>
      `);
    }
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add copy functionality for support contact info
  const supportItems = document.querySelectorAll('.support-item');
  supportItems.forEach(item => {
    item.addEventListener('click', function() {
      const text = this.querySelector('span').textContent;
      if (text.includes('Email:') || text.includes('Phone:')) {
        const contactInfo = text.split(': ')[1];
        navigator.clipboard.writeText(contactInfo).then(() => {
          showNotification('Contact info copied to clipboard!', 'success');
        }).catch(() => {
          showNotification('Could not copy to clipboard', 'error');
        });
      }
    });
  });

  // Show notification helper
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
      color: white;
      border-radius: 6px;
      z-index: 1001;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
}); 