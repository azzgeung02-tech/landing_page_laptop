const WHATSAPP_NUMBER = "6281234567890";
const products = [
  {
    id: 1,
    name: "Acer Aspire Lite 14",
    category: "budget",
    categoryLabel: "Budget & Pelajar",
    badge: "Best Starter",
    price: 6499000,
    stock: "Stok tersedia",
    description:
      "Laptop ringan untuk sekolah, kuliah, browsing, dan pekerjaan office.",
    specs: [
      "Intel Core i3",
      "RAM 8GB",
      "SSD 512GB",
      "Layar 14 inci"
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkLchJqmLPc5bk1MLHz0PqYmWYWDDDFudK1hVKKq9-w&s=10",
    usages: ["office"]
  },
  {
    id: 2,
    name: "ASUS Vivobook 14",
    category: "ultrabook",
    categoryLabel: "Ultrabook",
    badge: "Paling Laris",
    price: 8999000,
    stock: "Stok terbatas",
    description:
      "Ringkas dan cepat untuk kerja, kuliah, coding, serta multitasking.",
    specs: [
      "Intel Core i5",
      "RAM 16GB",
      "SSD 512GB",
      "Bobot 1,4 kg"
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctwTOu_DenUfpZVYY7-dAHBAPpHRwyGY8d9Y3OlvFhw&s=10",
    usages: ["office", "coding"]
  },
  {
    id: 3,
    name: "Lenovo IdeaPad Slim 5",
    category: "ultrabook",
    categoryLabel: "Ultrabook",
    badge: "Work Favorite",
    price: 10999000,
    stock: "Stok tersedia",
    description:
      "Laptop produktivitas dengan layar nyaman dan baterai tahan lama.",
    specs: [
      "Ryzen 5",
      "RAM 16GB",
      "SSD 512GB",
      "Layar IPS"
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xLc2ddXtvqMqAPDG8PvM5F1BtPx6i4V4svmS29uiOw&s=10",
    usages: ["office", "coding"]
  },
  {
    id: 4,
    name: "ASUS TUF Gaming F15",
    category: "gaming",
    categoryLabel: "Gaming",
    badge: "Gaming Pick",
    price: 14999000,
    stock: "Stok tersedia",
    description:
      "Performa kuat untuk gaming kompetitif, coding, dan editing video.",
    specs: [
      "Intel Core i7",
      "RAM 16GB",
      "RTX 4050",
      "144Hz Display"
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOCzOwExfvHK1rhjkb3QMOIgm6vGKAymZLK_2OcbwbA&s=10",
    usages: ["gaming", "coding", "design"]
  },
  {
    id: 5,
    name: "Lenovo LOQ 15",
    category: "gaming",
    categoryLabel: "Gaming",
    badge: "Best Performance",
    price: 16999000,
    stock: "Pre-order",
    description:
      "Laptop gaming bertenaga untuk game AAA dan pekerjaan grafis berat.",
    specs: [
      "Ryzen 7",
      "RAM 16GB",
      "RTX 4060",
      "SSD 1TB"
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwfxSRHC-J2Vt-AbgWuQ97YhQWRERpuVDsyw5WRR4lw&s",
    usages: ["gaming", "design", "coding"]
  },
  {
    id: 6,
    name: "Creator Studio Pro 16",
    category: "creator",
    categoryLabel: "Creator",
    badge: "Creator Choice",
    price: 22499000,
    stock: "Stok terbatas",
    description:
      "Dirancang untuk desain profesional, rendering, dan editing video.",
    specs: [
      "Intel Core i9",
      "RAM 32GB",
      "RTX 4060",
      "100% sRGB"
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPu0Xg-H2zTDFHkCEgAPaBxRy9v2x_ognCrT8yMj1hA&s",
    usages: ["design", "gaming", "coding"]
  },
  {
    id: 7,
    name: "HP 14s Ryzen Edition",
    category: "budget",
    categoryLabel: "Budget & Pelajar",
    badge: "Value Pick",
    price: 6999000,
    stock: "Stok tersedia",
    description:
      "Pilihan praktis untuk belajar, meeting online, dan kebutuhan harian.",
    specs: ["Ryzen 3", "RAM 8GB", "SSD 512GB", "Layar 14 inci"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlOCdKGfTTY5SiJ_av7YifX1ONre9-cZUWfU7-v1gpg&s=10",
    usages: ["office"]
  },
  {
    id: 8,
    name: "Lenovo V14 G4",
    category: "budget",
    categoryLabel: "Budget & Pelajar",
    badge: "Office Ready",
    price: 7499000,
    stock: "Stok tersedia",
    description:
      "Laptop andal untuk tugas sekolah, administrasi, dan bisnis kecil.",
    specs: ["Ryzen 5", "RAM 8GB", "SSD 512GB", "Layar Full HD"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOCk6eRITwaFxxdgUWMxcTuj7RXnvJM1_GAWlrERDeg&s=10",
    usages: ["office", "coding"]
  },
  {
    id: 9,
    name: "ASUS Vivobook Go 14",
    category: "budget",
    categoryLabel: "Budget & Pelajar",
    badge: "Student Choice",
    price: 7999000,
    stock: "Stok tersedia",
    description:
      "Desain ringkas untuk menemani kuliah, presentasi, dan aktivitas mobile.",
    specs: ["Ryzen 5", "RAM 8GB", "SSD 512GB", "Bobot 1,4 kg"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqb1DrIuKJc2x_VcDYi7vw-ezi8l7hqqkEbAVhvMH2eQ&s=10",
    usages: ["office"]
  },
  {
    id: 10,
    name: "Acer Aspire 5",
    category: "budget",
    categoryLabel: "Budget & Pelajar",
    badge: "Everyday Pro",
    price: 8499000,
    stock: "Stok tersedia",
    description:
      "Performa seimbang untuk produktivitas, belajar, dan multitasking ringan.",
    specs: ["Intel Core i5", "RAM 8GB", "SSD 512GB", "Layar IPS"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3T1U1bra5WMdtpQnBcA2figr5L9GcCPpz6uLmig_Fw&s=10",
    usages: ["office", "coding"]
  },
  {
    id: 11,
    name: "Dell Inspiron 14",
    category: "ultrabook",
    categoryLabel: "Ultrabook",
    badge: "Daily Essential",
    price: 11999000,
    stock: "Stok tersedia",
    description:
      "Laptop tipis yang nyaman untuk bekerja dari kantor maupun perjalanan.",
    specs: ["Intel Core i5", "RAM 16GB", "SSD 512GB", "Layar 14 inci"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4ta1G740t_5v85OoEeC72t7hMih_iKkYgg7bWOB7nw&s=10",
    usages: ["office", "coding"]
  },
  {
    id: 12,
    name: "HP Pavilion Aero 13",
    category: "ultrabook",
    categoryLabel: "Ultrabook",
    badge: "Ultra Light",
    price: 13499000,
    stock: "Stok tersedia",
    description:
      "Ultrabook ringan dengan layar tajam untuk mobilitas dan produktivitas.",
    specs: ["Ryzen 7", "RAM 16GB", "SSD 1TB", "Bobot 1 kg"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScV5QfkEko2knTZf9czNCzbmJztgEpvrCZCLfwF9vsjA&s=10",
    usages: ["office", "coding"]
  },
  {
    id: 13,
    name: "ASUS Zenbook 14 OLED",
    category: "ultrabook",
    categoryLabel: "Ultrabook",
    badge: "OLED Favorite",
    price: 15999000,
    stock: "Stok terbatas",
    description:
      "Layar OLED memukau dalam bodi tipis untuk kerja dan hiburan premium.",
    specs: ["Intel Core Ultra 5", "RAM 16GB", "SSD 1TB", "Layar OLED"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQj5-xw5IpaTEIxPJbVdsn0szjSaLePYKdhC518O6Zg&s=10",
    usages: ["office", "coding", "design"]
  },
  {
    id: 14,
    name: "Lenovo Yoga Slim 7",
    category: "ultrabook",
    categoryLabel: "Ultrabook",
    badge: "Flexible Work",
    price: 17499000,
    stock: "Stok tersedia",
    description:
      "Laptop premium untuk bekerja kreatif dengan layar nyaman dan responsif.",
    specs: ["Ryzen 7", "RAM 16GB", "SSD 1TB", "Layar 2.8K"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9F3A_MKVdLuCtKByqlKnS_nKnjk5c1czoNJSoR-5sw&s=10",
    usages: ["office", "coding", "design"]
  },
  {
    id: 15,
    name: "MSI Thin 15",
    category: "gaming",
    categoryLabel: "Gaming",
    badge: "Slim Gaming",
    price: 13999000,
    stock: "Stok tersedia",
    description:
      "Laptop gaming ramping untuk bermain, kuliah, dan kreasi konten.",
    specs: ["Intel Core i5", "RAM 16GB", "RTX 4050", "144Hz Display"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXhIadNb1SSirc9uryuvoNWFP0SH4eG9p88JULEtxow&s=10",
    usages: ["gaming", "coding", "design"]
  },
  {
    id: 16,
    name: "HP Victus 15",
    category: "gaming",
    categoryLabel: "Gaming",
    badge: "Ready to Play",
    price: 15499000,
    stock: "Stok tersedia",
    description:
      "Performa gaming solid dengan layar lega untuk bermain dan bekerja.",
    specs: ["Ryzen 5", "RAM 16GB", "RTX 4050", "144Hz Display"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8W8-mormLY-PNqOriivu-BtOnXDT7pJ0BR7SlTLZPTQ&s=10",
    usages: ["gaming", "coding"]
  },
  {
    id: 17,
    name: "Acer Nitro V 15",
    category: "gaming",
    categoryLabel: "Gaming",
    badge: "Power Up",
    price: 16499000,
    stock: "Stok tersedia",
    description:
      "Laptop gaming serbaguna untuk game kompetitif dan pekerjaan kreatif.",
    specs: ["Intel Core i7", "RAM 16GB", "RTX 4050", "144Hz Display"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjC8Zm6TO8plqcM7sH7Fe0qV2E8M3Ql0yoYGSE4tvhWw&s=10",
    usages: ["gaming", "coding", "design"]
  },
  {
    id: 18,
    name: "ASUS ROG Zephyrus G14",
    category: "gaming",
    categoryLabel: "Gaming",
    badge: "Compact Beast",
    price: 26999000,
    stock: "Pre-order",
    description:
      "Gaming premium dalam desain ringkas untuk performa di mana saja.",
    specs: ["Ryzen 9", "RAM 32GB", "RTX 4060", "Layar 165Hz"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmwa5v8iX14zfLTnaJCkiV7beAVXListRXXvpTDmcwQ&s=10",
    usages: ["gaming", "coding", "design"]
  },
  {
    id: 19,
    name: "MSI Katana 15",
    category: "gaming",
    categoryLabel: "Gaming",
    badge: "Game On",
    price: 22999000,
    stock: "Stok tersedia",
    description:
      "Siap menjalankan game modern dan aplikasi kreatif dengan lancar.",
    specs: ["Intel Core i7", "RAM 16GB", "RTX 4060", "144Hz Display"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMO732aUyfnyTt37LNd9mnEG4VT1RtxreaP36nh_UtCA&s=10",
    usages: ["gaming", "coding", "design"]
  },
  {
    id: 20,
    name: "ASUS ProArt Studiobook 16",
    category: "creator",
    categoryLabel: "Creator",
    badge: "Studio Grade",
    price: 32999000,
    stock: "Pre-order",
    description:
      "Stasiun kerja mobile untuk ilustrasi, animasi, dan produksi video.",
    specs: ["Intel Core i9", "RAM 32GB", "RTX 4070", "Layar OLED"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhhpPzJrPgpc1vh5ocZAiBLe7mA_chhGKziJPIyVCqA&s=10",
    usages: ["design", "coding"]
  },
  {
    id: 21,
    name: "Acer Swift X 14",
    category: "creator",
    categoryLabel: "Creator",
    badge: "Creative Power",
    price: 24999000,
    stock: "Stok tersedia",
    description:
      "Laptop kreator ringkas untuk editing, desain, dan kerja produktif.",
    specs: ["Intel Core Ultra 7", "RAM 16GB", "RTX 4050", "Layar OLED"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8n_7a30eBb7dwznTpZfonORPPwzw-RxQyrPcK4vDOw&s=10",
    usages: ["design", "coding"]
  },
  {
    id: 22,
    name: "Lenovo Yoga Pro 9i",
    category: "creator",
    categoryLabel: "Creator",
    badge: "Creator Premium",
    price: 35999000,
    stock: "Pre-order",
    description:
      "Layar berkualitas tinggi dan tenaga besar untuk workflow kreatif.",
    specs: ["Intel Core Ultra 9", "RAM 32GB", "RTX 4060", "Layar Mini-LED"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RebkQxj6CsYXAaAQf55R7MdFgLQUWvIbiHFoiNg62Q&s=10",
    usages: ["design", "coding"]
  },
  {
    id: 23,
    name: "MacBook Air 13 M3",
    category: "ultrabook",
    categoryLabel: "Ultrabook",
    badge: "Silent & Light",
    price: 18999000,
    stock: "Stok tersedia",
    description:
      "Laptop tipis dan senyap untuk produktivitas, belajar, dan mobilitas.",
    specs: ["Apple M3", "RAM 16GB", "SSD 512GB", "Layar Retina"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-azO2ftpM5ff9smffUAcgwuCtP2JuoHIrmFXtf3Z0Ng&s=10",
    usages: ["office", "coding", "design"]
  },
  {
    id: 24,
    name: "MacBook Pro 14 M3 Pro",
    category: "creator",
    categoryLabel: "Creator",
    badge: "Pro Workflow",
    price: 34999000,
    stock: "Stok terbatas",
    description:
      "Performa profesional untuk produksi konten, software development, dan desain.",
    specs: ["Apple M3 Pro", "RAM 18GB", "SSD 512GB", "Layar Liquid Retina"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwasgRvfaHD0p6weKIHXDrtT0uTPa71dHrsawA9d-Aw&s",
    usages: ["design", "coding"]
  },
  {
    id: 25,
    name: "Gigabyte AERO 16 OLED",
    category: "creator",
    categoryLabel: "Creator",
    badge: "Color Perfect",
    price: 38999000,
    stock: "Pre-order",
    description:
      "Layar OLED akurat dan grafis bertenaga untuk desain profesional.",
    specs: ["Intel Core i7", "RAM 32GB", "RTX 4070", "Layar 4K OLED"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUZ5SKK6HLfVzsA-UxKGaD5TdAIGPiBnTkvXzWHxH0Q&s=10",
    usages: ["design", "coding", "gaming"]
  }
];
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const emptyState = document.getElementById("emptyState");
const catalogResult = document.getElementById("catalogResult");
const toast = document.getElementById("toast");
const adminPanel = document.getElementById("adminPanel");
const adminLoginForm = document.getElementById("adminLoginForm");
const adminDashboard = document.getElementById("adminDashboard");
const adminStats = document.getElementById("adminStats");
const adminInventoryList = document.getElementById("adminInventoryList");
const adminSalesList = document.getElementById("adminSalesList");
const ADMIN_PIN = "1234";
const INVENTORY_STORAGE_KEY = "azzTechInventoryV1";
let selectedCategory = "all";
function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}
function createWhatsAppURL(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}
function openWhatsApp(message) {
  window.open(createWhatsAppURL(message), "_blank", "noopener,noreferrer");
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}
function createDefaultInventoryState() {
  const stock = {};
  products.forEach((product) => {
    stock[product.id] =
      product.stock === "Stok terbatas"
        ? 3
        : product.stock === "Pre-order"
          ? 2
          : 10;
  });
  return { stock, sales: [] };
}
function isValidInventoryState(value) {
  if (
    !value ||
    typeof value !== "object" ||
    !value.stock ||
    typeof value.stock !== "object" ||
    !Array.isArray(value.sales)
  ) {
    return false;
  }
  const validStock = products.every((product) => {
    const quantity = value.stock[product.id];
    return Number.isInteger(quantity) && quantity >= 0;
  });
  const validSales = value.sales.every((sale) => {
    return (
      sale &&
      Number.isInteger(sale.productId) &&
      products.some((product) => product.id === sale.productId) &&
      typeof sale.timestamp === "string" &&
      Number.isFinite(Date.parse(sale.timestamp)) &&
      Number.isFinite(sale.unitPrice) &&
      sale.unitPrice >= 0
    );
  });
  return validStock && validSales;
}
function saveInventoryState(nextState) {
  try {
    window.localStorage.setItem(
      INVENTORY_STORAGE_KEY,
      JSON.stringify(nextState)
    );
  } catch (error) {
    console.error("Gagal menyimpan data inventaris ke browser.", error);
    showToast("Data tidak dapat disimpan. Periksa pengaturan penyimpanan browser.");
    return false;
  }
  return true;
}
function loadInventoryState() {
  let storedValue;
  try {
    storedValue = window.localStorage.getItem(INVENTORY_STORAGE_KEY);
  } catch (error) {
    console.error("Gagal membaca data inventaris dari browser.", error);
    showToast("Data inventaris tidak dapat dibaca dari browser ini.");
    return createDefaultInventoryState();
  }
  if (storedValue === null) {
    const initialState = createDefaultInventoryState();
    saveInventoryState(initialState);
    return initialState;
  }
  let parsedValue;
  try {
    parsedValue = JSON.parse(storedValue);
  } catch (error) {
    console.error("Data inventaris di browser bukan JSON yang valid.", error);
    showToast("Data inventaris rusak. Perubahan baru akan disimpan setelah diperbarui.");
    return createDefaultInventoryState();
  }
  if (!isValidInventoryState(parsedValue)) {
    console.error("Format data inventaris di browser tidak valid.");
    showToast("Format data inventaris tidak valid. Periksa penyimpanan browser.");
    return createDefaultInventoryState();
  }
  return parsedValue;
}
let inventoryState = loadInventoryState();
function getStockStatus(quantity) {
  if (quantity === 0) {
    return "Habis";
  }
  if (quantity <= 3) {
    return `Stok menipis · ${quantity} unit`;
  }
  return `Tersedia · ${quantity} unit`;
}
function renderAdminDashboard() {
  const outOfStockProducts = products.filter(
    (product) => inventoryState.stock[product.id] === 0
  );
  const totalSold = inventoryState.sales.length;
  const totalSales = inventoryState.sales.reduce(
    (sum, sale) => sum + sale.unitPrice,
    0
  );
  adminStats.innerHTML = `
    <article class="admin-stat-card">
      <span>Produk habis</span>
      <strong>${outOfStockProducts.length}</strong>
    </article>
    <article class="admin-stat-card">
      <span>Unit ditandai dibeli</span>
      <strong>${totalSold}</strong>
    </article>
    <article class="admin-stat-card">
      <span>Nilai pembelian tercatat</span>
      <strong>${formatRupiah(totalSales)}</strong>
    </article>
  `;
  adminInventoryList.innerHTML = products
    .map((product) => {
      const quantity = inventoryState.stock[product.id];
      const statusClass =
        quantity === 0 ? "is-out-of-stock" : quantity <= 3 ? "is-low-stock" : "";
      return `
        <article class="admin-inventory-row">
          <div class="admin-product-info">
            <strong>${product.name}</strong>
            <span class="admin-stock-status ${statusClass}">
              ${getStockStatus(quantity)}
            </span>
          </div>
          <form class="admin-stock-form" data-stock-form="${product.id}">
            <label class="visually-hidden" for="stock-${product.id}">
              Jumlah stok ${product.name}
            </label>
            <input
              class="admin-stock-input"
              id="stock-${product.id}"
              name="stock"
              type="number"
              min="0"
              step="1"
              value="${quantity}"
              required
            />
            <button class="btn btn-outline admin-stock-save" type="submit">
              Simpan
            </button>
            <button
              class="btn btn-primary admin-mark-sold"
              type="button"
              data-mark-sold="${product.id}"
              ${quantity === 0 ? "disabled" : ""}
            >
              Tandai dibeli
            </button>
          </form>
        </article>
      `;
    })
    .join("");
  if (inventoryState.sales.length === 0) {
    adminSalesList.innerHTML =
      '<p class="admin-empty-state">Belum ada pembelian yang ditandai.</p>';
    return;
  }
  adminSalesList.innerHTML = [...inventoryState.sales]
    .reverse()
    .map((sale) => {
      const product = products.find((item) => item.id === sale.productId);
      const saleDate = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(new Date(sale.timestamp));
      return `
        <article class="admin-sale-row">
          <div>
            <strong>${product.name}</strong>
            <span>${saleDate}</span>
          </div>
          <strong>${formatRupiah(sale.unitPrice)}</strong>
        </article>
      `;
    })
    .join("");
}
function updateProductStockDisplay() {
  filterProducts();
  renderAdminDashboard();
}
function setProductStock(productId, quantity) {
  if (!Number.isInteger(quantity) || quantity < 0) {
    showToast("Jumlah stok harus berupa angka bulat nol atau lebih.");
    return false;
  }
  const nextState = {
    ...inventoryState,
    stock: { ...inventoryState.stock, [productId]: quantity }
  };
  if (!saveInventoryState(nextState)) {
    return false;
  }
  inventoryState = nextState;
  updateProductStockDisplay();
  showToast("Stok produk berhasil diperbarui.");
  return true;
}
document.querySelectorAll("[data-admin-open]").forEach((button) => {
  button.addEventListener("click", () => {
    adminPanel.hidden = false;
    adminLoginForm.hidden = false;
    adminDashboard.hidden = true;
    adminLoginForm.reset();
    document.getElementById("adminLoginFeedback").textContent = "";
    adminPanel.scrollIntoView({ behavior: "smooth" });
    document.getElementById("adminPin").focus();
  });
});
document.getElementById("adminCloseButton").addEventListener("click", () => {
  adminPanel.hidden = true;
  adminLoginForm.hidden = false;
  adminDashboard.hidden = true;
});
adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const pin = document.getElementById("adminPin").value;
  const feedback = document.getElementById("adminLoginFeedback");
  if (pin !== ADMIN_PIN) {
    feedback.textContent = "PIN salah. Silakan coba lagi.";
    return;
  }
  feedback.textContent = "";
  adminLoginForm.hidden = true;
  adminDashboard.hidden = false;
  renderAdminDashboard();
});
document.getElementById("adminLogoutButton").addEventListener("click", () => {
  adminDashboard.hidden = true;
  adminLoginForm.hidden = false;
  adminLoginForm.reset();
});
adminInventoryList.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-stock-form]");
  if (!form) {
    return;
  }
  event.preventDefault();
  const productId = Number(form.dataset.stockForm);
  const input = form.elements.namedItem("stock");
  setProductStock(productId, Number(input.value));
});
adminInventoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mark-sold]");
  if (!button) {
    return;
  }
  const productId = Number(button.dataset.markSold);
  const product = products.find((item) => item.id === productId);
  const currentStock = inventoryState.stock[productId];
  if (!product || currentStock < 1) {
    showToast("Stok produk habis. Perbarui stok sebelum menandai pembelian.");
    return;
  }
  const nextState = {
    stock: { ...inventoryState.stock, [productId]: currentStock - 1 },
    sales: [
      ...inventoryState.sales,
      {
        productId,
        unitPrice: product.price,
        timestamp: new Date().toISOString()
      }
    ]
  };
  if (!saveInventoryState(nextState)) {
    return;
  }
  inventoryState = nextState;
  updateProductStockDisplay();
  showToast(`${product.name} ditandai dibeli dan stok dikurangi 1.`);
});
function renderProducts(items) {
  productGrid.innerHTML = "";
  if (items.length === 0) {
    emptyState.style.display = "block";
    catalogResult.textContent = "Tidak ada produk yang cocok.";
    return;
  }
  emptyState.style.display = "none";
  catalogResult.textContent = `${items.length} laptop ditemukan`;
  items.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    const stockQuantity = inventoryState.stock[product.id];
    const stockClass =
      stockQuantity === 0
        ? "is-out-of-stock"
        : stockQuantity <= 3
          ? "is-low-stock"
          : "is-in-stock";
    card.innerHTML = `
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        />
        <span class="product-badge">${product.badge}</span>
        <span class="product-stock ${stockClass}">
          ${getStockStatus(stockQuantity)}
        </span>
      </div>
      <div class="product-content">
        <span class="product-category">
          ${product.categoryLabel}
        </span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">
          ${product.description}
        </p>
        <div class="product-specs">
          ${product.specs
            .map(
              (spec) => `
                <span class="product-spec">${spec}</span>
              `
            )
            .join("")}
        </div>
        <div class="product-footer">
          <div>
            <p class="product-price-label">Harga mulai</p>
            <p class="product-price">
              ${formatRupiah(product.price)}
            </p>
          </div>
          <button
            class="btn btn-primary product-buy"
            type="button"
            data-product-id="${product.id}"
            aria-label="Pesan ${product.name}"
            ${stockQuantity === 0 ? "disabled" : ""}
          >
            ${stockQuantity === 0 ? "Stok habis" : "Beli ↗"}
          </button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
  document.querySelectorAll("[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => {
      orderProduct(Number(button.dataset.productId));
    });
  });
}
function filterProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;
    const searchableContent = [
      product.name,
      product.category,
      product.categoryLabel,
      product.description,
      ...product.specs
    ]
      .join(" ")
      .toLowerCase();
    const matchKeyword = searchableContent.includes(keyword);
    return matchCategory && matchKeyword;
  });
  renderProducts(filteredProducts);
}
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });
    button.classList.add("active");
    selectedCategory = button.dataset.category;
    filterProducts();
  });
});
searchInput.addEventListener("input", filterProducts);
function orderProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  if (inventoryState.stock[productId] === 0) {
    showToast(`${product.name} sedang habis.`);
    return;
  }
  const message = [
    "Halo AZZ-TECH, saya tertarik dengan laptop berikut:",
    "",
    `Nama: ${product.name}`,
    `Kategori: ${product.categoryLabel}`,
    `Spesifikasi: ${product.specs.join(", ")}`,
    `Harga: ${formatRupiah(product.price)}`,
    "",
    "Apakah produknya masih tersedia?"
  ].join("\n");
  showToast(`Membuka WhatsApp untuk ${product.name}`);
  openWhatsApp(message);
}
document.querySelectorAll("[data-consultation]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const message = [
      "Halo AZZ-TECH, saya ingin konsultasi laptop.",
      "",
      "Kebutuhan:",
      "Budget:",
      "Merek pilihan:",
      "",
      "Mohon bantu berikan rekomendasi yang sesuai."
    ].join("\n");
    openWhatsApp(message);
  });
});
const budgetRange = document.getElementById("budgetRange");
const budgetOutput = document.getElementById("budgetOutput");
const recommendationForm = document.getElementById(
  "recommendationForm"
);
const recommendationResult = document.getElementById(
  "recommendationResult"
);
budgetRange.addEventListener("input", () => {
  budgetOutput.textContent = formatRupiah(
    Number(budgetRange.value)
  );
});
const usageRecommendations = {
  office: {
    title: "Laptop Office & Pelajar",
    description:
      "Cocok untuk Microsoft Office, browsing, kelas online, dan aktivitas harian.",
    minimumSpecs: [
      "Core i3 / Ryzen 3",
      "RAM 8GB",
      "SSD 512GB",
      "Layar Full HD"
    ]
  },
  coding: {
    title: "Laptop Coding & Multitasking",
    description:
      "Ideal untuk pemrograman, menjalankan banyak aplikasi, dan pekerjaan produktif.",
    minimumSpecs: [
      "Core i5 / Ryzen 5",
      "RAM 16GB",
      "SSD 512GB",
      "Layar IPS"
    ]
  },
  design: {
    title: "Laptop Desain & Rendering",
    description:
      "Direkomendasikan untuk desain grafis, editing video, dan rendering.",
    minimumSpecs: [
      "Core i7 / Ryzen 7",
      "RAM 16–32GB",
      "RTX 4050 atau lebih",
      "Layar 100% sRGB"
    ]
  },
  gaming: {
    title: "Laptop Gaming",
    description:
      "Dirancang untuk gaming kompetitif dan game dengan kebutuhan grafis tinggi.",
    minimumSpecs: [
      "Core i7 / Ryzen 7",
      "RAM 16GB",
      "RTX 4050 atau lebih",
      "Layar 144Hz"
    ]
  }
};
recommendationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const usage = document.getElementById("usageSelect").value;
  const priority = document.getElementById("prioritySelect").value;
  const budget = Number(budgetRange.value);
  if (!usage || !priority) {
    showToast("Lengkapi kebutuhan dan prioritas terlebih dahulu.");
    return;
  }
  const recommendation = usageRecommendations[usage];
  let matchingProducts = products
    .filter((product) => {
      return (
        inventoryState.stock[product.id] > 0 &&
        product.usages.includes(usage) &&
        product.price <= budget
      );
    })
    .sort((a, b) => b.price - a.price);
  if (priority === "value") {
    matchingProducts.sort((a, b) => a.price - b.price);
  }
  if (priority === "portable") {
    matchingProducts.sort((a, b) => {
      const aUltra = a.category === "ultrabook" ? -1 : 1;
      const bUltra = b.category === "ultrabook" ? -1 : 1;
      return aUltra - bUltra;
    });
  }
  const bestProduct = matchingProducts[0];
  if (!bestProduct) {
    recommendationResult.innerHTML = `
      <span class="recommendation-label">
        Rekomendasi spesifikasi
      </span>
      <h3>${recommendation.title}</h3>
      <p>
        Belum ada produk katalog yang sepenuhnya sesuai dengan budget
        tersebut. Berikut spesifikasi minimum yang disarankan.
      </p>
      <div class="recommendation-specs">
        ${recommendation.minimumSpecs
          .map((spec) => `<span>${spec}</span>`)
          .join("")}
      </div>
      <p class="recommendation-price">
        Budget: ${formatRupiah(budget)}
      </p>
      <button
        class="btn btn-primary btn-block"
        type="button"
        id="customConsultationButton"
      >
        Konsultasikan custom order ↗
      </button>
    `;
    recommendationResult.classList.add("show");
    document
      .getElementById("customConsultationButton")
      .addEventListener("click", () => {
        const message = [
          "Halo AZZ-TECH, saya ingin konsultasi custom order laptop.",
          "",
          `Kebutuhan: ${recommendation.title}`,
          `Budget maksimal: ${formatRupiah(budget)}`,
          `Prioritas: ${priority}`,
          `Spesifikasi minimum: ${recommendation.minimumSpecs.join(
            ", "
          )}`,
          "",
          "Mohon bantu carikan laptop yang sesuai."
        ].join("\n");
        openWhatsApp(message);
      });
    return;
  }
  recommendationResult.innerHTML = `
    <span class="recommendation-label">
      Rekomendasi terbaik
    </span>
    <h3>${bestProduct.name}</h3>
    <p>
      ${bestProduct.description}
    </p>
    <div class="recommendation-specs">
      ${bestProduct.specs
        .map((spec) => `<span>${spec}</span>`)
        .join("")}
    </div>
    <p class="recommendation-price">
      ${formatRupiah(bestProduct.price)}
    </p>
    <button
      class="btn btn-primary btn-block"
      type="button"
      id="orderRecommendationButton"
    >
      Pesan rekomendasi via WhatsApp ↗
    </button>
  `;
  recommendationResult.classList.add("show");
  document
    .getElementById("orderRecommendationButton")
    .addEventListener("click", () => {
      const message = [
        "Halo AZZ-TECH, saya mendapat rekomendasi dari Laptop Matcher.",
        "",
        `Produk: ${bestProduct.name}`,
        `Kebutuhan: ${recommendation.title}`,
        `Prioritas: ${priority}`,
        `Budget maksimal: ${formatRupiah(budget)}`,
        `Harga produk: ${formatRupiah(bestProduct.price)}`,
        `Spesifikasi: ${bestProduct.specs.join(", ")}`,
        "",
        "Apakah produk ini masih tersedia?"
      ].join("\n");
      openWhatsApp(message);
    });
});
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
function closeMobileMenu() {
  navMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});
renderProducts(products);
budgetOutput.textContent = formatRupiah(
  Number(budgetRange.value)
);
