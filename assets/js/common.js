/**
 * MERCIADO AMUSEMENT PARK - GLOBAL CLIENT SCRIPT
 * Manages Navigation, User Authentication, LocalStorage, Toasts, and Park State
 */

// Initialize LocalStorage Keys
const STORAGE_KEYS = {
  USER: 'merciado_user',
  TICKETS: 'merciado_tickets',
  WISHLIST: 'merciado_wishlist',
  CART: 'merciado_cart'
};

// Default Guest User State
function getStoredUser() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

function setStoredUser(user) {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.USER);
  }
  updateNavbarUserState();
}

// Global Toast Notification Helper
function showToast(message, type = 'success', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconName = 'check_circle';
  if (type === 'coral') iconName = 'local_activity';
  if (type === 'gold') iconName = 'stars';
  if (type === 'error') iconName = 'error';

  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px]">${iconName}</span>
    <span class="flex-1">${message}</span>
    <button class="opacity-70 hover:opacity-100 text-lg leading-none cursor-pointer" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Update Navbar based on logged-in user
function updateNavbarUserState() {
  const user = getStoredUser();
  const userBtn = document.getElementById('navUserBtn');
  const userBadge = document.getElementById('navUserBadge');
  const userIcon = document.getElementById('navUserAvatarIcon');

  if (userBtn && user) {
    userBtn.innerHTML = `
      <span class="material-symbols-outlined text-[18px] text-secondary">verified</span>
      <span class="max-w-[120px] truncate">${user.name.split(' ')[0]}</span>
    `;
    userBtn.href = 'account.html';
  } else if (userBtn) {
    userBtn.innerHTML = `
      <span class="material-symbols-outlined text-[18px] text-primary">person</span>
      <span>Log In</span>
    `;
    userBtn.href = '#';
    userBtn.onclick = (e) => {
      e.preventDefault();
      openAuthModal();
    };
  }
}

// Mobile Drawer Navigation
function initNavigation() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileBackdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('closeMobileNav');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('translate-x-full');
      mobileDrawer.classList.add('translate-x-0');
    }
    if (mobileBackdrop) {
      mobileBackdrop.classList.remove('hidden');
      mobileBackdrop.classList.add('block');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('translate-x-0');
      mobileDrawer.classList.add('translate-x-full');
    }
    if (mobileBackdrop) {
      mobileBackdrop.classList.remove('block');
      mobileBackdrop.classList.add('hidden');
    }
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeDrawer);

  // Set active nav link indicator
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.remove('text-on-surface-variant');
      link.classList.add('bg-primary-container', 'text-on-primary', 'shadow-sm');
    }
  });

  // Back to Top button
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Global Auth Modal (Login / Register anywhere)
function openAuthModal(defaultTab = 'login') {
  let modal = document.getElementById('globalAuthModal');
  if (!modal) {
    createAuthModal();
    modal = document.getElementById('globalAuthModal');
  }
  switchAuthTab(defaultTab);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  const modal = document.getElementById('globalAuthModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById('modalLoginForm');
  const regForm = document.getElementById('modalRegisterForm');
  const tabLoginBtn = document.getElementById('modalTabLogin');
  const tabRegBtn = document.getElementById('modalTabRegister');

  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    regForm.classList.add('hidden');
    tabLoginBtn.className = 'flex-1 py-2 rounded-full font-label-md text-label-md bg-primary text-on-primary shadow-sm';
    tabRegBtn.className = 'flex-1 py-2 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface';
  } else {
    loginForm.classList.add('hidden');
    regForm.classList.remove('hidden');
    tabRegBtn.className = 'flex-1 py-2 rounded-full font-label-md text-label-md bg-primary text-on-primary shadow-sm';
    tabLoginBtn.className = 'flex-1 py-2 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface';
  }
}

function createAuthModal() {
  const div = document.createElement('div');
  div.id = 'globalAuthModal';
  div.className = 'hidden fixed inset-0 z-50 items-center justify-center bg-on-surface/60 backdrop-blur-md p-4 transition-all';
  div.innerHTML = `
    <div class="bg-surface-container-lowest rounded-2xl w-full max-w-md p-6 sm:p-8 shadow-2xl relative border border-outline-variant/30 animate-soft-float">
      <button onclick="closeAuthModal()" class="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-2 rounded-full hover:bg-surface-container">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>

      <div class="text-center mb-6">
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-fixed mb-2 text-primary">
          <span class="material-symbols-outlined text-[26px]">account_circle</span>
        </div>
        <h3 class="font-headline-sm text-headline-sm text-on-surface">Merciado Guest Portal</h3>
        <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Access your tickets, FastPass & VIP benefits</p>
      </div>

      <!-- Tab Buttons -->
      <div class="flex bg-surface-container p-1 rounded-full mb-6">
        <button id="modalTabLogin" onclick="switchAuthTab('login')" class="flex-1 py-2 rounded-full font-label-md text-label-md bg-primary text-on-primary shadow-sm">Log In</button>
        <button id="modalTabRegister" onclick="switchAuthTab('register')" class="flex-1 py-2 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Create Account</button>
      </div>

      <!-- Login Form -->
      <form id="modalLoginForm" onsubmit="handleModalLogin(event)">
        <div class="space-y-4">
          <div>
            <label class="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Email Address</label>
            <input id="modalLoginEmail" type="email" required placeholder="alex@example.com" value="alex@example.com" class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md" />
          </div>
          <div>
            <label class="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Password</label>
            <input id="modalLoginPassword" type="password" required placeholder="••••••••" value="merciado2026" class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md" />
          </div>
          <div class="flex items-center justify-between text-xs text-on-surface-variant">
            <label class="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked class="rounded text-primary focus:ring-primary" />
              <span>Remember me</span>
            </label>
            <a href="account.html#forgot" class="text-primary hover:underline">Forgot password?</a>
          </div>
          <button type="submit" class="w-full py-3.5 rounded-full bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-label-lg shadow-lg hover:scale-[1.02] transition-transform">
            Sign In to My Account
          </button>
        </div>
      </form>

      <!-- Register Form -->
      <form id="modalRegisterForm" class="hidden" onsubmit="handleModalRegister(event)">
        <div class="space-y-3.5">
          <div>
            <label class="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Full Name</label>
            <input id="modalRegName" type="text" required placeholder="Alexander Wright" class="w-full px-4 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md" />
          </div>
          <div>
            <label class="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Email Address</label>
            <input id="modalRegEmail" type="email" required placeholder="alex@merciado.com" class="w-full px-4 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md" />
          </div>
          <div>
            <label class="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Create Password</label>
            <input id="modalRegPassword" type="password" required placeholder="At least 6 characters" class="w-full px-4 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md" />
          </div>
          <div class="flex items-center gap-2 text-xs text-on-surface-variant">
            <input type="checkbox" required id="modalAgreeTerms" checked class="rounded text-primary" />
            <label for="modalAgreeTerms">I agree to <a href="disclaimer.html" class="text-primary underline">Park Rules &amp; Privacy Policy</a></label>
          </div>
          <button type="submit" class="w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg shadow-lg hover:scale-[1.02] transition-transform">
            Create Free Account
          </button>
        </div>
      </form>

      <div class="mt-5 pt-4 border-t border-outline-variant/30 text-center font-body-sm text-body-sm text-on-surface-variant">
        <span>Protected by Seth Group Security Infrastructure</span>
      </div>
    </div>
  `;
  document.body.appendChild(div);
}

function handleModalLogin(e) {
  e.preventDefault();
  const email = document.getElementById('modalLoginEmail').value;
  const name = email.split('@')[0].replace('.', ' ');
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  const user = {
    name: capitalizedName || 'Alexander Wright',
    email: email,
    tier: 'Seth VIP Passholder',
    memberId: 'MER-' + Math.floor(100000 + Math.random() * 900000),
    points: 620,
    joinDate: 'March 2026',
    isLogged: true
  };

  setStoredUser(user);
  closeAuthModal();
  showToast(`Welcome back, ${user.name}! Accessing VIP portal.`, 'success');

  if (window.location.pathname.includes('account.html')) {
    window.location.reload();
  }
}

function handleModalRegister(e) {
  e.preventDefault();
  const name = document.getElementById('modalRegName').value;
  const email = document.getElementById('modalRegEmail').value;

  const newUser = {
    name: name,
    email: email,
    tier: 'Seth Silver Explorer',
    memberId: 'MER-' + Math.floor(100000 + Math.random() * 900000),
    points: 100, // Welcome bonus
    joinDate: 'Today',
    isLogged: true
  };

  setStoredUser(newUser);
  closeAuthModal();
  showToast(`Account created! You received 100 welcome bonus points, ${name}!`, 'gold');

  if (window.location.pathname.includes('account.html')) {
    window.location.reload();
  }
}

// Wishlist / Bookmark Toggle
function toggleWishlist(rideId, rideName, zoneName) {
  try {
    let list = JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST) || '[]');
    const index = list.findIndex(item => item.id === rideId);

    if (index > -1) {
      list.splice(index, 1);
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
      showToast(`Removed "${rideName}" from your Saved Rides.`, 'coral');
    } else {
      list.push({ id: rideId, name: rideName, zone: zoneName, date: new Date().toLocaleDateString() });
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
      showToast(`Saved "${rideName}" to your Park Itinerary!`, 'success');
    }

    // Update buttons on page if any
    document.querySelectorAll(`[data-wishlist-id="${rideId}"]`).forEach(btn => {
      const isSaved = list.some(item => item.id === rideId);
      btn.innerHTML = `<span class="material-symbols-outlined text-[18px] ${isSaved ? 'text-secondary fill-1' : ''}">${isSaved ? 'favorite' : 'favorite_border'}</span>`;
    });
  } catch (err) {
    console.error(err);
  }
}

// Newsletter subscription
function handleNewsletter(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('newsletterEmail') || document.getElementById('footerNewsletterEmail');
  if (input && input.value) {
    showToast(`Thank you for subscribing! Your 15% discount code is MERCIADO15.`, 'gold', 5000);
    input.value = '';
    const successBox = document.getElementById('newsletterSuccess');
    if (successBox) successBox.classList.remove('hidden');
  } else {
    showToast('Please enter a valid email address.', 'coral');
  }
}

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  updateNavbarUserState();
});

