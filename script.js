// --- EXISTING CODE: Mobile Menu Toggle ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// --- EXISTING CODE: Copy IP to Clipboard ---
function copyIP() {
    const ipText = "play.sourmc.xyz";
    navigator.clipboard.writeText(ipText).then(() => {
        const ipBox = document.querySelector('.ip-box');
        const originalContent = ipBox.innerHTML;
        
        ipBox.innerHTML = '<span style="color:#4cd137">Copied!</span>';
        
        setTimeout(() => {
            ipBox.innerHTML = originalContent;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// --- NEW CODE: Rank Data (Details from your file) ---
const rankData = {
    'fly-modal': {
        name: 'FLY',
        perks: ['Custom FLY Prefix', 'Knight KIT', '5 auctions', '10 Vaults', '4 homes', '/Fly', '/Flyspeed', '/Walkspeed', '/speed']
    },
    'vip-modal': {
        name: 'VIP',
        perks: ['Custom VIP Prefix', 'Knight KIT', '10 auctions', '10 Vaults', '5 homes', 'Size 4 Enderchest', '/trash', '/pweather', '/hat', '/glow', '/top', '/flyspeed', '/firework', '/jump', '/itemdb', '/fly']
    },
    'vipplus-modal': {
        name: 'VIP+',
        perks: ['Custom VIP+ Prefix', 'Knight KIT', '15 auctions', '15 Vaults', '6 homes', 'Size 5 Enderchest', '/trash', '/grindstone', '/pweather', '/hat', '/glow', '/top', '/flyspeed', '/firework', '/jump', '/itemdb', '/fly']
    },
    'mvp-modal': {
        name: 'MVP',
        perks: ['Custom MVP Prefix', 'Knight KIT', '20 auctions', '20 Vaults', '8 homes', 'Size 6 Enderchest', '/trash', '/loom', '/smithingtable', '/cartographytable', '/grindstone', '/feed', '/pweather', '/hat', '/glow', '/top', '/flyspeed', '/firework', '/jump', '/itemdb', '/fly']
    },
    'mvpplus-modal': {
        name: 'MVP+',
        perks: ['Custom MVP+ Prefix', 'Champion KIT', '25 Vaults', '25 auctions', '10 homes', 'Size 6 Enderchest', '/near', '/trash', '/extinguish', '/loom', '/sign', '/smithingtable', '/cartographytable', '/grindstone', '/feed', '/ptime', '/pweather', '/hat', '/glow', '/top', '/bottom', '/flyspeed', '/firework', '/jump', '/itemdb', '/fly']
    },
    'mvpplusplus-modal': {
        name: 'MVP++',
        perks: ['Custom MVP++ Prefix', 'Champion KIT', 'No restriction on auctions', 'No restriction on homes', '50 vaults', 'Bigger Enderchests', '/near', '/trash', '/extinguish', '/loom', '/sign', '/smithingtable', '/cartographytable', '/grindstone', '/feed', '/ptime', '/pweather', '/hat', '/glow', '/top', '/bottom', '/heal', '/compass', '/nick', '/realname', '/speed', '/flyspeed', '/repair', '/firework', '/jump', '/itemdb', '/fly']
    }
};

// --- NEW CODE: Modal Logic ---
function openRank(rankId) {
    const data = rankData[rankId];
    const modal = document.getElementById('rank-modal-overlay');
    const body = document.getElementById('modal-body');

    let perksHtml = `<h2 class="ender-text">${data.name}</h2>`;
    perksHtml += `<ul class="modal-perks-list">`;
    data.perks.forEach(perk => {
        perksHtml += `<li><i class="fas fa-check" style="color:var(--ender-glow); margin-right:10px;"></i> ${perk}</li>`;
    });
    perksHtml += `</ul>`;

    body.innerHTML = perksHtml;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('rank-modal-overlay');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal if user clicks outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('rank-modal-overlay');
    if (event.target == modal) {
        closeModal();
    }
}
