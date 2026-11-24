/* VELORA — demo data (all contact/store data is placeholder for a practice project) */

const VELORA_STORE = {
  name: "VELORA 2",
  tagline: "Wear The Difference",
  phone: "+20 100 000 0000",
  whatsapp: "201000000000",
  email: "info@velora-demo.com",
  facebook: "https://facebook.com/velora.demo",
  instagram: "https://instagram.com/velora.demo",
  tiktok: "https://tiktok.com/@velora.demo",
  address: {
    en: "Building 15, Example Street, Nasr City, Cairo, Egypt",
    ar: "عمارة 15، شارع المثال، مدينة نصر، القاهرة، مصر"
  },
  currency: "EGP",
  freeShipOver: 2000
};

const VELORA_CATEGORIES = [
  { id: "men",        en: "Men's Clothing",   ar: "ملابس رجالي" },
  { id: "women",      en: "Women's Clothing", ar: "ملابس حريمي" },
  { id: "tshirts",    en: "T-Shirts",         ar: "تيشيرتات" },
  { id: "shirts",     en: "Shirts",           ar: "قمصان" },
  { id: "jeans",      en: "Jeans",            ar: "جينز" },
  { id: "trousers",   en: "Trousers",         ar: "بناطيل" },
  { id: "hoodies",    en: "Hoodies",          ar: "هوديز" },
  { id: "jackets",    en: "Jackets",          ar: "جواكت" },
  { id: "accessories",en: "Accessories",      ar: "إكسسوارات" }
];

const VELORA_SHIPPING = [
  { id: "cairo", en: "Cairo",              ar: "القاهرة",        fee: 50, days: { en: "1–3 days", ar: "١–٣ أيام" } },
  { id: "giza",  en: "Giza",               ar: "الجيزة",         fee: 60, days: { en: "3–5 days", ar: "٣–٥ أيام" } },
  { id: "alex",  en: "Alexandria",         ar: "الإسكندرية",     fee: 75, days: { en: "3–5 days", ar: "٣–٥ أيام" } },
  { id: "other", en: "Other Governorates", ar: "محافظات أخرى",   fee: 90, days: { en: "3–5 days", ar: "٣–٥ أيام" } }
];

const VELORA_COUPONS = {
  "VELORA10": { type: "percent", value: 10 },
  "WELCOME50": { type: "fixed", value: 50 }
};

/* Sizes / colors helpers */
const SIZES_CLOTHES = ["S", "M", "L", "XL", "XXL"];
const SIZES_ONE = ["One Size"];
const COLOR_SETS = {
  mono:   [{ n: "Black", h: "#171717" }, { n: "White", h: "#f4f2ee" }, { n: "Beige", h: "#d8c7a8" }],
  dark:   [{ n: "Black", h: "#171717" }, { n: "Charcoal", h: "#3a3a3a" }, { n: "Navy", h: "#1f2a44" }],
  denim:  [{ n: "Dark Blue", h: "#27415e" }, { n: "Black", h: "#171717" }, { n: "Light Blue", h: "#7f9dbf" }],
  warm:   [{ n: "Beige", h: "#d8c7a8" }, { n: "Camel", h: "#b08d5f" }, { n: "White", h: "#f4f2ee" }]
};

const DEFAULT_PRODUCTS = [
  {
    sku: "VL-TS-001", name: "Classic Black T-Shirt", category: "tshirts", gender: "men",
    price: 350, salePrice: null, img: null,
    desc: "A wardrobe essential. Heavyweight 100% combed cotton tee with a clean regular fit, ribbed collar and the tonal VELORA monogram embroidered on the chest.",
    sizes: SIZES_CLOTHES, colors: COLOR_SETS.mono, stock: 24,
    isNew: false, isBest: true, rating: 4.8, reviewsCount: 36
  },
  {
    sku: "VL-SH-002", name: "Premium White Shirt", category: "shirts", gender: "men",
    price: 650, salePrice: null, img: null,
    desc: "Crisp Egyptian cotton poplin shirt with a tailored silhouette, mother-of-pearl buttons and a structured collar. Sharp enough for the office, clean enough for the weekend.",
    sizes: SIZES_CLOTHES, colors: COLOR_SETS.mono, stock: 18,
    isNew: false, isBest: true, rating: 4.9, reviewsCount: 28
  },
  {
    sku: "VL-JN-003", name: "Slim Fit Jeans", category: "jeans", gender: "men",
    price: 850, salePrice: null, img: null,
    desc: "Mid-rise slim jeans in a deep indigo wash with a hint of stretch. Five-pocket styling, matte black hardware and a tapered leg that works with everything.",
    sizes: ["30", "32", "34", "36"], colors: COLOR_SETS.denim, stock: 15,
    isNew: false, isBest: true, rating: 4.7, reviewsCount: 41
  },
  {
    sku: "VL-HD-004", name: "Oversized Hoodie", category: "hoodies", gender: "men",
    price: 950, salePrice: 750, img: null,
    desc: "450gsm brushed-back fleece hoodie with dropped shoulders, a double-layer hood and kangaroo pocket. Finished with the gold VELORA mark.",
    sizes: SIZES_CLOTHES, colors: COLOR_SETS.dark, stock: 12,
    isNew: true, isBest: true, rating: 4.9, reviewsCount: 52
  },
  {
    sku: "VL-JK-005", name: "Casual Jacket", category: "jackets", gender: "men",
    price: 1200, salePrice: 900, img: null,
    desc: "A lightweight utility-inspired jacket in washed cotton twill. Four flap pockets, antique brass zips and a relaxed cut made for layering.",
    sizes: SIZES_CLOTHES, colors: COLOR_SETS.dark, stock: 9,
    isNew: true, isBest: false, rating: 4.6, reviewsCount: 19
  },
  {
    sku: "VL-TR-006", name: "Classic Cargo Pants", category: "trousers", gender: "men",
    price: 750, salePrice: null, img: null,
    desc: "Straight-leg cargo trousers in durable cotton ripstop with adjustable hems and low-profile cargo pockets. Utility, tailored the VELORA way.",
    sizes: ["30", "32", "34", "36"], colors: COLOR_SETS.warm, stock: 20,
    isNew: true, isBest: false, rating: 4.5, reviewsCount: 14
  },
  {
    sku: "VL-AC-007", name: "Minimalist Cap", category: "accessories", gender: "men",
    price: 250, salePrice: 199, img: null,
    desc: "Six-panel cap in matte cotton twill with a tonal embroidered V mark and an adjustable brass slider. One size, every day.",
    sizes: SIZES_ONE, colors: COLOR_SETS.mono, stock: 40,
    isNew: false, isBest: true, rating: 4.7, reviewsCount: 63
  },
  {
    sku: "VL-SH-008", name: "Cotton Polo Shirt", category: "shirts", gender: "men",
    price: 550, salePrice: null, img: null,
    desc: "Piqué-knit polo in long-staple cotton with a ribbed collar, two-button placket and a subtle chest monogram. Smart without trying.",
    sizes: SIZES_CLOTHES, colors: COLOR_SETS.mono, stock: 22,
    isNew: false, isBest: false, rating: 4.6, reviewsCount: 23
  },
  {
    sku: "VL-W-TS-009", name: "Essential Women's Tee", category: "tshirts", gender: "women",
    price: 320, salePrice: null, img: null,
    desc: "Soft-touch cotton tee with a flattering relaxed cut and capped sleeves. The everyday base layer, elevated.",
    sizes: ["XS", "S", "M", "L", "XL"], colors: COLOR_SETS.mono, stock: 30,
    isNew: true, isBest: true, rating: 4.8, reviewsCount: 44
  },
  {
    sku: "VL-W-SH-010", name: "Silk-Touch Blouse", category: "shirts", gender: "women",
    price: 720, salePrice: null, img: null,
    desc: "Fluid blouse with a silk-like drape, concealed buttons and gently gathered cuffs. Moves beautifully from day to evening.",
    sizes: ["XS", "S", "M", "L", "XL"], colors: COLOR_SETS.warm, stock: 14,
    isNew: true, isBest: false, rating: 4.7, reviewsCount: 17
  },
  {
    sku: "VL-W-JN-011", name: "High-Waist Slim Jeans", category: "jeans", gender: "women",
    price: 890, salePrice: null, img: null,
    desc: "High-rise slim jeans with sculpting stretch denim and a clean ankle length. Holds its shape wear after wear.",
    sizes: ["26", "28", "30", "32"], colors: COLOR_SETS.denim, stock: 16,
    isNew: false, isBest: true, rating: 4.8, reviewsCount: 38
  },
  {
    sku: "VL-W-HD-012", name: "Cropped Hoodie", category: "hoodies", gender: "women",
    price: 880, salePrice: 690, img: null,
    desc: "Cropped fleece hoodie with a boxy fit, drawstring hood and gold-tipped cords. Lounge luxury with the signature V mark.",
    sizes: ["XS", "S", "M", "L"], colors: COLOR_SETS.mono, stock: 11,
    isNew: true, isBest: false, rating: 4.6, reviewsCount: 21
  },
  {
    sku: "VL-W-JK-013", name: "Elegant Trench Coat", category: "jackets", gender: "women",
    price: 1850, salePrice: 1450, img: null,
    desc: "Double-breasted trench in a water-resistant cotton blend with horn-look buttons, a belted waist and a silky lining. The forever coat.",
    sizes: ["XS", "S", "M", "L", "XL"], colors: COLOR_SETS.warm, stock: 7,
    isNew: true, isBest: true, rating: 4.9, reviewsCount: 26
  },
  {
    sku: "VL-W-TR-014", name: "Wide-Leg Trousers", category: "trousers", gender: "women",
    price: 780, salePrice: null, img: null,
    desc: "High-waisted wide-leg trousers in a flowing crepe with front pleats and a hidden side zip. Tailoring that moves with you.",
    sizes: ["XS", "S", "M", "L", "XL"], colors: COLOR_SETS.mono, stock: 13,
    isNew: false, isBest: false, rating: 4.5, reviewsCount: 12
  },
  {
    sku: "VL-AC-015", name: "Leather Belt", category: "accessories", gender: "men",
    price: 300, salePrice: null, img: null,
    desc: "Full-grain leather belt with a brushed gold buckle. 3.5cm width, made to age beautifully.",
    sizes: SIZES_ONE, colors: COLOR_SETS.warm, stock: 25,
    isNew: false, isBest: false, rating: 4.7, reviewsCount: 15
  },
  {
    sku: "VL-AC-016", name: "Velora Tote Bag", category: "accessories", gender: "women",
    price: 450, salePrice: 380, img: null,
    desc: "Structured canvas tote with vegan leather handles, an interior zip pocket and the gold VELORA monogram. Fits the whole day.",
    sizes: SIZES_ONE, colors: COLOR_SETS.mono, stock: 19,
    isNew: true, isBest: false, rating: 4.6, reviewsCount: 18
  }
];

const VELORA_TESTIMONIALS = [
  { name: "Ahmed M.",  city: { en: "Cairo", ar: "القاهرة" }, stars: 5,
    text: { en: "The quality genuinely surprised me. The hoodie feels premium and the fit is exactly right. Delivery to Cairo took two days.",
            ar: "الجودة فاجأتني بجد. الهودي خامته فخمة والمقاس مظبوط تمامًا. التوصيل للقاهرة وصل في يومين." } },
  { name: "Sara K.",   city: { en: "Alexandria", ar: "الإسكندرية" }, stars: 5,
    text: { en: "Ordered the trench coat and got so many compliments. Elegant packaging, fast shipping, and the size guide was accurate.",
            ar: "طلبت الترنش وجالي عليه compliments كتير. التغليف شيك والشحن سريع ودليل المقاسات مظبوط." } },
  { name: "Omar H.",   city: { en: "Giza", ar: "الجيزة" }, stars: 4,
    text: { en: "Clean designs, fair prices, and cash on delivery made it easy. The black tee is now my go-to. Will order again.",
            ar: "تصميمات نظيفة وأسعار كويسة، والدفع عند الاستلام سهّل الموضوع. التيشيرت الأسود بقى المفضل عندي. هطلب تاني." } }
];

/* ---------------- i18n ---------------- */
const I18N = {
  en: {
    dir: "ltr", langName: "العربية",
    announce: ["Free shipping on orders over 2,000 EGP", "New season drop — up to 50% off", "Cash on delivery available across Egypt"],
    nav_home: "Home", nav_shop: "Shop", nav_men: "Men", nav_women: "Women",
    nav_new: "New Arrivals", nav_best: "Best Sellers", nav_offers: "Offers", nav_about: "About", nav_contact: "Contact",
    hero_shop: "Shop Now", hero_explore: "Explore Collections",
    feat_cat: "Featured Categories", feat_cat_sub: "Two worlds, one standard of elegance.",
    shop_men: "Shop Men", shop_women: "Shop Women", browse_all: "Browse all",
    new_arrivals: "New Arrivals", new_sub: "Be the first to wear it.",
    best_sellers: "Best Sellers", best_sub: "The pieces everyone keeps coming back for.",
    view_all: "View All",
    promo_eyebrow: "Special Offer",
    why_us: "Why Choose VELORA", why_sub: "Details that make the difference.",
    f1_t: "Premium Quality", f1_d: "Carefully selected fabrics and finishing on every piece.",
    f2_t: "Fast Delivery", f2_d: "1–3 days inside Cairo, 3–5 days across Egypt.",
    f3_t: "Secure Payment", f3_d: "Cash on delivery and protected checkout options.",
    f4_t: "24/7 Support", f4_d: "Real people on WhatsApp whenever you need us.",
    reviews_t: "What Our Customers Say", reviews_sub: "Demo reviews for the practice project.",
    news_t: "Join the VELORA Circle", news_d: "Subscribe for early access to drops and private offers. (Demo — no emails are sent.)",
    news_ph: "Your email address", news_btn: "Subscribe", news_ok: "Welcome to the circle! (demo subscription saved)",
    news_err: "Please enter a valid email address.",
    footer_about: "Modern luxury fashion for men and women, designed in Cairo. Wear the difference.",
    footer_shop: "Shop", footer_help: "Help", footer_contact: "Contact",
    faq: "FAQ", shipping_p: "Shipping Policy", returns_p: "Return Policy", privacy_p: "Privacy Policy",
    rights: "All rights reserved.", demo_notice: "Demo store — practice project. All data is placeholder.",
    search_ph: "Search products…", sort_featured: "Featured", sort_new: "Newest", sort_plh: "Price: Low to High",
    sort_phl: "Price: High to Low", sort_name: "Name A–Z",
    filters: "Filters", categories: "Categories", availability: "Availability", in_stock: "In stock", on_sale: "On sale",
    results: "products", clear_filters: "Clear filters",
    add_cart: "Add to Cart", added: "Added to cart", added_wish: "Added to wishlist", removed_wish: "Removed from wishlist",
    out_stock: "Out of stock", low_stock: "Only a few left",
    select_size: "Select a size first", select_color: "Select a color first",
    cart: "Cart", wishlist: "Wishlist", checkout: "Checkout",
    cart_empty_t: "Your cart is empty", cart_empty_d: "Looks like you haven't added anything yet.",
    wish_empty_t: "Your wishlist is empty", wish_empty_d: "Tap the heart on any product to save it here.",
    start_shopping: "Start Shopping",
    subtotal: "Subtotal", shipping: "Shipping", discount: "Discount", total: "Total", free: "FREE",
    coupon_ph: "Coupon code", apply: "Apply", coupon_ok: "Coupon applied", coupon_bad: "Invalid coupon code",
    ship_to: "Shipping to", free_ship_progress: "away from free shipping", free_ship_done: "You unlocked free shipping!",
    proceed: "Proceed to Checkout", continue_shop: "Continue Shopping",
    contact_info: "Contact Information", full_name: "Full name", phone: "Phone number", governorate: "Governorate",
    address: "Address (street, building, floor)", notes: "Order notes (optional)",
    pay_method: "Payment Method", cod: "Cash on Delivery", cod_d: "Pay in cash when your order arrives.",
    vf_cash: "Vodafone Cash", vf_d: "Demo interface — no real transfer happens.",
    online_pay: "Online Payment", online_d: "Demo interface — no card data is collected.",
    demo_tag: "DEMO",
    place_order: "Place Order",
    err_name: "Please enter your full name", err_phone: "Please enter a valid Egyptian phone number", err_address: "Please enter your address",
    order_ok_t: "Order Confirmed", order_ok_d: "Thank you! This is a demo order — no payment was taken and nothing will be shipped.",
    order_num: "Order number", order_total: "Order total", send_whatsapp: "Send order via WhatsApp", back_home: "Back to Home",
    qty: "Qty", size: "Size", color: "Color", sku: "SKU", category: "Category", description: "Description",
    reviews: "Reviews", write_review: "Write a review", your_name: "Your name", your_review: "Your review", rating: "Rating",
    submit_review: "Submit Review", review_ok: "Thank you! Your review was saved (demo).",
    related: "You May Also Like",
    about_t: "About VELORA", contact_t: "Contact Us", send_msg: "Send Message", msg_ok: "Message sent! (demo — nothing was actually sent)",
    your_email: "Your email", your_msg: "Your message",
    visit_us: "Visit Us (demo address)", call_us: "Call Us", email_us: "Email Us", follow_us: "Follow Us",
    nf_t: "Page Not Found", nf_d: "The page you are looking for moved or never existed.",
    edit_mode_on: "Edit mode ON — tap a product's controls to change its photo or details",
    edit_mode_off: "Edit mode off",
    edit: "Edit", admin: "Admin", dashboard: "Dashboard", products: "Products", orders: "Orders",
    add_product: "Add Product", reset_demo: "Reset demo data", reset_ok: "Demo data restored to defaults",
    total_products: "Products", total_orders: "Orders", total_revenue: "Demo revenue", in_stock_lbl: "In stock items",
    actions: "Actions", price_lbl: "Price (EGP)", sale_price: "Sale price (optional)", stock_lbl: "Stock",
    save: "Save", cancel: "Cancel", delete: "Delete", confirm_del: "Delete this product?",
    change_photo: "Change photo", upload_hint: "Tap to upload a product photo",
    name_lbl: "Product name", flags: "Flags", flag_new: "New arrival", flag_best: "Best seller",
    gender_lbl: "Section", men: "Men", women: "Women",
    img_updated: "Product photo updated", product_saved: "Product saved", product_deleted: "Product deleted",
    no_orders: "No orders yet. Orders placed at checkout appear here for the store owner.",
    sync_on: "Server: live. Edits and orders are shared with everyone", sync_off: "Server unreachable. Changes stay on this device only", sending: "Sending\u2026",
    customer: "Customer", date: "Date", items: "Items", status: "Status", status_new: "New",
    banner_change: "Change banner", banner_updated: "Banner updated (shared live)",
    settings: "Settings", settings_hint: "Shared store settings - saved on the server and applied for everyone.",
    notify_email_lbl: "Order notifications email",
    notify_email_hint: "Every new order is emailed to this address. First time only: the mail service sends a one-time confirmation link to this inbox (check spam) - open it once and notifications go live.",
    store_wa_lbl: "Store WhatsApp number (orders)",
    store_wa_hint: "The 'Send order via WhatsApp' button on the confirmation page opens a chat to this number, separate from the main contact number. Digits only, international format, e.g. 2010XXXXXXXX.",
    send_test: "Send test email", test_sent: "Test email sent - check the inbox (and spam). First time: click the confirmation link in it.",
    settings_saved: "Settings saved and shared",
    order_whatsapp_intro: "Hello VELORA 2! I'd like to place this demo order:",
    men_hero_sub: "Look better. Feel greater.", women_hero_sub: "Elegance in every detail.",
    shop_all: "All Products", special_offers: "Special Offers",
    search_results: "Search results for", no_results_t: "No products found", no_results_d: "Try a different search or clear the filters.",
    loading: "Loading…",
    sizes_guide: "Size guide (demo)", currency: "EGP",
    home: "Home"
  },
  ar: {
    dir: "rtl", langName: "English",
    announce: ["شحن مجاني للطلبات فوق ٢٠٠٠ جنيه", "كولكشن جديد — خصومات لحد ٥٠٪", "الدفع عند الاستلام متاح في كل مصر"],
    nav_home: "الرئيسية", nav_shop: "المتجر", nav_men: "رجالي", nav_women: "حريمي",
    nav_new: "وصل حديثًا", nav_best: "الأكثر مبيعًا", nav_offers: "العروض", nav_about: "من نحن", nav_contact: "تواصل معنا",
    hero_shop: "تسوق الآن", hero_explore: "استكشف الكولكشن",
    feat_cat: "الأقسام الرئيسية", feat_cat_sub: "عالمان، ومعيار واحد للأناقة.",
    shop_men: "تسوق رجالي", shop_women: "تسوق حريمي", browse_all: "تصفح الكل",
    new_arrivals: "وصل حديثًا", new_sub: "كن أول من يرتديه.",
    best_sellers: "الأكثر مبيعًا", best_sub: "القطع اللي الكل بيرجع لها.",
    view_all: "عرض الكل",
    promo_eyebrow: "عرض خاص",
    why_us: "ليه تختار VELORA", why_sub: "تفاصيل بتعمل الفرق.",
    f1_t: "جودة فاخرة", f1_d: "خامات مختارة بعناية وتشطيب ممتاز في كل قطعة.",
    f2_t: "توصيل سريع", f2_d: "من ١ لـ ٣ أيام داخل القاهرة، و٣–٥ أيام لكل مصر.",
    f3_t: "دفع آمن", f3_d: "الدفع عند الاستلام وخيارات دفع محمية.",
    f4_t: "دعم ٢٤/٧", f4_d: "ناس حقيقية على واتساب في أي وقت.",
    reviews_t: "آراء عملائنا", reviews_sub: "آراء تجريبية لغرض المشروع التدريبي.",
    news_t: "انضم لمجتمع VELORA", news_d: "اشترك عشان يوصلك الجديد والعروض الخاصة. (تجريبي — لن يتم إرسال إيميلات.)",
    news_ph: "بريدك الإلكتروني", news_btn: "اشترك", news_ok: "أهلًا بيك في المجتمع! (تم حفظ الاشتراك التجريبي)",
    news_err: "من فضلك اكتب بريد إلكتروني صحيح.",
    footer_about: "أزياء عصرية فاخرة للرجال والسيدات، صُممت في القاهرة. ارتدِ الفرق.",
    footer_shop: "المتجر", footer_help: "المساعدة", footer_contact: "تواصل معنا",
    faq: "الأسئلة الشائعة", shipping_p: "سياسة الشحن", returns_p: "سياسة الاستبدال والاسترجاع", privacy_p: "سياسة الخصوصية",
    rights: "جميع الحقوق محفوظة.", demo_notice: "متجر تجريبي — مشروع تدريبي. كل البيانات Placeholder.",
    search_ph: "ابحث عن منتج…", sort_featured: "مميز", sort_new: "الأحدث", sort_plh: "السعر: من الأقل للأعلى",
    sort_phl: "السعر: من الأعلى للأقل", sort_name: "الاسم أ–ي",
    filters: "الفلاتر", categories: "الأقسام", availability: "التوفر", in_stock: "متوفر", on_sale: "عليه خصم",
    results: "منتج", clear_filters: "مسح الفلاتر",
    add_cart: "أضف للسلة", added: "تمت الإضافة للسلة", added_wish: "تمت الإضافة للمفضلة", removed_wish: "تمت الإزالة من المفضلة",
    out_stock: "نفد من المخزون", low_stock: "باقي قطع قليلة",
    select_size: "اختر المقاس الأول", select_color: "اختر اللون الأول",
    cart: "السلة", wishlist: "المفضلة", checkout: "إتمام الطلب",
    cart_empty_t: "سلتك فاضية", cart_empty_d: "لسه مضفتش أي حاجة.",
    wish_empty_t: "مفضلتك فاضية", wish_empty_d: "دوس على القلب في أي منتج عشان تحفظه هنا.",
    start_shopping: "ابدأ التسوق",
    subtotal: "المجموع الفرعي", shipping: "الشحن", discount: "الخصم", total: "الإجمالي", free: "مجاني",
    coupon_ph: "كود الخصم", apply: "تطبيق", coupon_ok: "تم تطبيق الكوبون", coupon_bad: "كود غير صحيح",
    ship_to: "الشحن إلى", free_ship_progress: "متبقي للشحن المجاني", free_ship_done: "مبروك! حصلت على شحن مجاني",
    proceed: "إتمام الطلب", continue_shop: "كمل تسوق",
    contact_info: "بيانات التواصل", full_name: "الاسم بالكامل", phone: "رقم الموبايل", governorate: "المحافظة",
    address: "العنوان (الشارع، العمارة، الدور)", notes: "ملاحظات الطلب (اختياري)",
    pay_method: "طريقة الدفع", cod: "الدفع عند الاستلام", cod_d: "ادفع كاش عند وصول الطلب.",
    vf_cash: "فودافون كاش", vf_d: "واجهة تجريبية — لن يتم أي تحويل حقيقي.",
    online_pay: "الدفع الإلكتروني", online_d: "واجهة تجريبية — لن يتم جمع أي بيانات بنكية.",
    demo_tag: "تجريبي",
    place_order: "تأكيد الطلب",
    err_name: "من فضلك اكتب اسمك بالكامل", err_phone: "من فضلك اكتب رقم موبايل مصري صحيح", err_address: "من فضلك اكتب عنوانك",
    order_ok_t: "تم تأكيد الطلب", order_ok_d: "شكرًا ليك! ده طلب تجريبي — لم يتم دفع أي مبلغ ولن يتم شحن أي منتجات.",
    order_num: "رقم الطلب", order_total: "إجمالي الطلب", send_whatsapp: "إرسال الطلب عبر واتساب", back_home: "العودة للرئيسية",
    qty: "الكمية", size: "المقاس", color: "اللون", sku: "كود المنتج", category: "القسم", description: "الوصف",
    reviews: "التقييمات", write_review: "اكتب تقييمك", your_name: "اسمك", your_review: "تقييمك", rating: "التقييم",
    submit_review: "إرسال التقييم", review_ok: "شكرًا! تم حفظ تقييمك (تجريبي).",
    related: "قد يعجبك أيضًا",
    about_t: "عن VELORA", contact_t: "تواصل معنا", send_msg: "إرسال الرسالة", msg_ok: "تم إرسال الرسالة! (تجريبي — لم يتم إرسال شيء فعليًا)",
    your_email: "بريدك الإلكتروني", your_msg: "رسالتك",
    visit_us: "زورونا (عنوان تجريبي)", call_us: "اتصل بينا", email_us: "راسلنا", follow_us: "تابعنا",
    nf_t: "الصفحة غير موجودة", nf_d: "الصفحة اللي بتدور عليها اتنقلت أو مش موجودة.",
    edit_mode_on: "وضع التعديل شغال — دوس على أزرار أي منتج عشان تغير صورته أو بياناته",
    edit_mode_off: "تم إيقاف وضع التعديل",
    edit: "تعديل", admin: "الإدارة", dashboard: "لوحة التحكم", products: "المنتجات", orders: "الطلبات",
    add_product: "إضافة منتج", reset_demo: "استعادة البيانات الأصلية", reset_ok: "تمت استعادة البيانات الأصلية",
    total_products: "منتج", total_orders: "طلب", total_revenue: "إيراد تجريبي", in_stock_lbl: "قطع متوفرة",
    actions: "إجراءات", price_lbl: "السعر (جنيه)", sale_price: "سعر الخصم (اختياري)", stock_lbl: "المخزون",
    save: "حفظ", cancel: "إلغاء", delete: "حذف", confirm_del: "حذف المنتج ده؟",
    change_photo: "تغيير الصورة", upload_hint: "دوس عشان ترفع صورة المنتج",
    name_lbl: "اسم المنتج", flags: "العلامات", flag_new: "وصل حديثًا", flag_best: "الأكثر مبيعًا",
    gender_lbl: "القسم الرئيسي", men: "رجالي", women: "حريمي",
    img_updated: "تم تحديث صورة المنتج", product_saved: "تم حفظ المنتج", product_deleted: "تم حذف المنتج",
    no_orders: "لا توجد طلبات بعد. الطلبات اللي بتتعمل من الموقع بتظهر هنا لصاحب المتجر.",
    sync_on: "السيرفر شغال: التعديلات والطلبات بتتشارك مع الكل", sync_off: "السيرفر مش متاح: التعديلات هتتحفظ على الجهاز ده بس", sending: "جاري الإرسال\u2026",
    customer: "العميل", date: "التاريخ", items: "القطع", status: "الحالة", status_new: "جديد",
    banner_change: "تغيير البانر", banner_updated: "تم تحديث البانر (محفوظ للكل)",
    settings: "الإعدادات", settings_hint: "إعدادات متجر مشتركة — بتتحفظ على السيرفر وبتتطبق على كل الزوار.",
    notify_email_lbl: "إيميل إشعارات الطلبات",
    notify_email_hint: "كل طلب جديد بيتبعت على الإيميل ده. أول مرة بس: خدمة البريد هتبعت لينك تأكيد على الإيميل ده (بص في السبام) — افتحه مرة واحدة والإشعارات هتشتغل.",
    store_wa_lbl: "رقم واتساب المتجر (للطلبات)",
    store_wa_hint: "زرار «إرسال الطلب عبر واتساب» في صفحة تأكيد الطلب بيفتح شات على الرقم ده، منفصل عن رقم التواصل الأساسي. أرقام بس بالصيغة الدولية، مثال: 2010XXXXXXXX.",
    send_test: "إرسال إيميل تجريبي", test_sent: "اتبعت الإيميل التجريبي — بص في الإيميل (وفي السبام). أول مرة: دوس على لينك التأكيد اللي فيه.",
    settings_saved: "تم حفظ الإعدادات ومشاركتها",
    order_whatsapp_intro: "أهلًا VELORA 2! حابب أعمل الطلب التجريبي ده:",
    men_hero_sub: "شكل أحسن. إحساس أعظم.", women_hero_sub: "الأناقة في كل تفصيلة.",
    shop_all: "كل المنتجات", special_offers: "عروض خاصة",
    search_results: "نتائج البحث عن", no_results_t: "مفيش منتجات مطابقة", no_results_d: "جرب بحث مختلف أو امسح الفلاتر.",
    loading: "جاري التحميل…",
    sizes_guide: "دليل المقاسات (تجريبي)", currency: "جنيه",
    home: "الرئيسية"
  }
};
/* VELORA — core: state, i18n, shell, router */
"use strict";

/* ---------- storage ---------- */
const LS = {
  get(k, fb) { try { const v = localStorage.getItem(k); return v === null ? fb : JSON.parse(v); } catch (e) { return fb; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { toast(t("img_updated") + "", "error"); } }
};

const state = {
  lang: LS.get("velora2_lang", "en"),
  products: LS.get("velora2_products_v1", null) || JSON.parse(JSON.stringify(DEFAULT_PRODUCTS)),
  banners: LS.get("velora2_banners_v1", {}),       // overrides: {hero, promo, arrivals, men, women} -> dataURL
  cart: LS.get("velora2_cart", []),                // {sku, size, color, qty}
  wishlist: LS.get("velora2_wishlist", []),        // [sku]
  orders: LS.get("velora2_orders", []),
  coupon: LS.get("velora2_coupon", null),
  userReviews: LS.get("velora2_reviews", {}),      // sku -> [{name,text,rating,date}]
  editing: false,
  settings: null                                  // server-shared store settings {notify_email, store_whatsapp}; null = not loaded yet
};

function persist() {
  LS.set("velora2_products_v1", state.products);
  LS.set("velora2_banners_v1", state.banners);
  LS.set("velora2_cart", state.cart);
  LS.set("velora2_wishlist", state.wishlist);
  LS.set("velora2_orders", state.orders);
  LS.set("velora2_coupon", state.coupon);
  LS.set("velora2_reviews", state.userReviews);
}


/* ---------- VELORA 2 live server sync ----------
   Products, banners and orders live on a real server (Supabase), so edits and
   orders are shared by every visitor. Cart, wishlist and coupons stay local. */
const CLOUD = (function () {
  const URL = "https://viwqxuaiqgpbzbweevxs.supabase.co/rest/v1";
  const KEY = "sb_publishable_E0uzCDMDUXn-k409JKwAhQ_nLQbbKrE";
  const H = { apikey: KEY, Authorization: "Bearer " + KEY, "Content-Type": "application/json" };
  let online = false, lastSync = null, saving = false, again = false;

  async function pullState() {
    try {
      const r = await fetch(URL + "/store_state?id=eq.main&select=data", { headers: H });
      if (!r.ok) throw 0;
      const rows = await r.json();
      const d = rows && rows[0] && rows[0].data;
      if (d && typeof d === "object") {
        if (Array.isArray(d.products)) state.products = d.products;
        if (d.banners && typeof d.banners === "object") state.banners = d.banners;
        LS.set("velora2_products_v1", state.products);
        LS.set("velora2_banners_v1", state.banners);
        online = true; lastSync = new Date();
        return true;
      }
    } catch (e) {}
    online = false;
    return false;
  }

  async function pushState() {
    if (saving) { again = true; return; }
    saving = true;
    try {
      const r = await fetch(URL + "/store_state?id=eq.main", {
        method: "PATCH",
        headers: Object.assign({ Prefer: "return=minimal" }, H),
        body: JSON.stringify({ data: { products: state.products, banners: state.banners, rev: Date.now() } })
      });
      online = r.ok;
      if (r.ok) lastSync = new Date();
    } catch (e) { online = false; }
    saving = false;
    if (again) { again = false; pushState(); }
  }

  async function pushOrder(order) {
    try {
      const r = await fetch(URL + "/orders", {
        method: "POST",
        headers: Object.assign({ Prefer: "return=minimal" }, H),
        body: JSON.stringify({ id: order.id, payload: order })
      });
      online = r.ok;
      if (r.ok) lastSync = new Date();
      return r.ok;
    } catch (e) { online = false; return false; }
  }

  async function pullOrders() {
    try {
      const r = await fetch(URL + "/orders?select=payload&order=created_at.desc&limit=500", { headers: H });
      if (!r.ok) throw 0;
      const rows = await r.json();
      state.orders = rows.map(x => x.payload);
      LS.set("velora2_orders", state.orders);
      online = true; lastSync = new Date();
    } catch (e) { online = false; }
  }

  async function pullSettings() {
    try {
      const r = await fetch(URL + "/store_state?id=eq.settings&select=data", { headers: H });
      if (!r.ok) throw 0;
      const rows = await r.json();
      const d = rows && rows[0] && rows[0].data;
      state.settings = (d && typeof d === "object") ? d : {};
    } catch (e) { state.settings = {}; }
    return state.settings;
  }

  async function pushSettings() {
    if (!state.settings) return false;
    try {
      const r = await fetch(URL + "/store_state", {
        method: "POST",
        headers: Object.assign({ Prefer: "resolution=merge-duplicates,return=minimal" }, H),
        body: JSON.stringify({ id: "settings", data: state.settings })
      });
      return r.ok;
    } catch (e) { return false; }
  }

  async function clearOrders() {
    try { await fetch(URL + "/orders?created_at=not.is.null", { method: "DELETE", headers: H }); } catch (e) {}
  }

  return {
    pullState, pushState, pushOrder, pullOrders, clearOrders, pullSettings, pushSettings,
    isOnline: () => online,
    lastSyncAt: () => lastSync
  };
})();

/* ---------- store settings helpers (VELORA 2) ---------- */
function storeWa() {
  const w = state.settings && state.settings.store_whatsapp;
  const d = w ? String(w).replace(/[^0-9]/g, "") : "";
  return d || VELORA_STORE.whatsapp;
}

function notifyOrderEmail(order, isTest) {
  try {
    const to = (state.settings && state.settings.notify_email) || "";
    if (!to || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) return false;
    const lines = (order.lines || []).map(l => "- " + l.name + " (" + l.size + " / " + l.color + ") x" + l.qty + " = " + (l.price * l.qty) + " EGP").join("\n");
    const body =
      (isTest ? "This is a TEST notification from the VELORA 2 admin dashboard. If it reached you, order email notifications are working.\n\n" : "A new order was placed on VELORA 2.\n\n") +
      "Order: " + order.id + "\nDate: " + order.at + "\n\n" +
      "Customer: " + order.name + "\nPhone: " + order.phone + "\nGovernorate: " + order.gov + "\nAddress: " + order.address +
      (order.notes ? "\nNotes: " + order.notes : "") + "\nPayment: " + order.pay + "\n\nItems:\n" + (lines || "- (no items)") +
      "\n\nSubtotal: " + order.subtotal + " EGP\nDiscount: " + (order.discount || 0) + " EGP\nShipping: " + order.shipping + " EGP\nTotal: " + order.total + " EGP" +
      (order.coupon ? "\nCoupon: " + order.coupon : "");
    fetch("https://formsubmit.co/ajax/" + encodeURIComponent(to), {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: isTest ? "VELORA 2 - test notification" : "VELORA 2 - new order " + order.id,
        _template: "box",
        _captcha: "false",
        store: "VELORA 2",
        order: order.id,
        details: body
      })
    }).catch(function () {});
    return true;
  } catch (e) { return false; }
}

/* ---------- i18n ---------- */
function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key; }
function catName(id) { const c = VELORA_CATEGORIES.find(c => c.id === id); return c ? (state.lang === "ar" ? c.ar : c.en) : id; }
function fmt(n) { return Number(n).toLocaleString(state.lang === "ar" ? "ar-EG" : "en-US") + " " + t("currency"); }
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

/* ---------- icons ---------- */
const IC = {
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 7h12l1.5 13.5a1 1 0 0 1-1 1.1H5.5a1 1 0 0 1-1-1.1L6 7z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20.5C7 16.5 3 13.3 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.7 0 3.3.9 4.3 2.4 1-1.5 2.6-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 4-4 7.2-9 11.2z"/></svg>',
  heartFill: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.5C7 16.5 3 13.3 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.7 0 3.3.9 4.3 2.4 1-1.5 2.6-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 4-4 7.2-9 11.2z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  burger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  arrowL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 12H5m6 6-6-6 6-6"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3z"/><path d="m9.5 12 2 2 3.5-4"/></svg>',
  headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 13a8 8 0 0 1 16 0"/><path d="M3 13h3v5H4a1 1 0 0 1-1-1v-4zM18 13h3v4a1 1 0 0 1-1 1h-2v-5z"/><path d="M20 18v1a2 2 0 0 1-2 2h-4"/></svg>',
  gem: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h10l4 6-9 12L3 9l4-6z"/><path d="M3 9h18M9.5 3 8 9l4 12M14.5 3 16 9l-4 12"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8v5m0 3v.01"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="m13.5 6.5 3 3"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.8 1.7.3.2.5.1.7-.1l1-1.2c.2-.3.5-.2.8-.1l2 1c.3.1.5.2.6.4 0 .1 0 .8-.2 1.5z"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.5C11.7 3 11 4.8 11 7v1.5H9V12h2v9h3v-9h2.6l.4-3.5h-3z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
  tk: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 1.9 1.6 3.4 3.5 3.7v3c-1.4 0-2.6-.4-3.5-1v6.6c0 3.4-2.4 5.7-5.6 5.7A5.3 5.3 0 0 1 5.5 15c0-3 2.3-5.3 5.4-5.3l.7.02v3.1a2.3 2.3 0 0 0-2.4 2.3c0 1.3 1 2.2 2.2 2.2 1.4 0 2.3-1 2.3-2.6V3h2.8z"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 19V5m-6 6 6-6 6 6"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 3 8 4v10l-8 4-8-4V7l8-4z"/><path d="M4 7l8 4 8-4M12 11v10"/></svg>'
};
function icon(name) { return IC[name] || ""; }

/* ---------- toast ---------- */
function toast(msg, type) {
  const root = document.getElementById("toast-root");
  const el = document.createElement("div");
  el.className = "toast " + (type || "success");
  el.innerHTML = icon(type === "error" ? "alert" : "check") + "<span>" + esc(msg) + "</span>";
  root.appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 350); }, 2600);
}

/* ---------- product helpers ---------- */
function getProduct(sku) { return state.products.find(p => p.sku === sku); }
function priceOf(p) { return p.salePrice ? p.salePrice : p.price; }
function starsHtml(r) {
  const full = Math.round(r);
  return '<span class="stars">' + "★".repeat(full) + "☆".repeat(5 - full) + "</span>";
}
function IMG(n){ return (window.VELORA_IMG && window.VELORA_IMG[n]) || n; }
function imgHtml(p, cls) {
  if (p.img) return '<img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy"' + (cls ? ' class="' + cls + '"' : "") + ">";
  return '<div class="ph-img" role="img" aria-label="' + esc(p.name) + '">' +
    '<img class="ph-mark" src="' + IMG("logo-mark.png") + '" alt="" aria-hidden="true">' +
    '<span class="ph-cat">' + esc(catName(p.category)) + "</span>" +
    '<span class="ph-name">' + esc(p.name) + "</span>" +
    '<span class="ph-hint">' + (state.editing ? t("change_photo") : "VELORA") + "</span></div>";
}
function bannerSrc(key, fallback) { return state.banners[key] || IMG(fallback); }

function cardHtml(p) {
  const inWish = state.wishlist.includes(p.sku);
  const out = p.stock <= 0;
  return '<article class="pcard" data-sku="' + p.sku + '">' +
    '<div class="pcard-media">' +
      '<a href="#/product/' + p.sku + '" aria-label="' + esc(p.name) + '">' + imgHtml(p) + "</a>" +
      '<div class="pcard-badges">' +
        (p.isNew ? '<span class="badge new">' + t("flag_new") + "</span>" : "") +
        (p.salePrice ? '<span class="badge sale">-' + Math.round((1 - p.salePrice / p.price) * 100) + "%</span>" : "") +
        (out ? '<span class="badge out">' + t("out_stock") + "</span>" : "") +
      "</div>" +
      '<div class="pcard-quick">' +
        '<button class="quick-btn wish-btn' + (inWish ? " active" : "") + '" data-wish="' + p.sku + '" aria-label="' + t("wishlist") + '">' + icon(inWish ? "heartFill" : "heart") + "</button>" +
        '<a class="quick-btn" href="#/product/' + p.sku + '" aria-label="' + t("view_all") + '">' + icon("eye") + "</a>" +
      "</div>" +
      '<div class="pcard-edit">' +
        '<button class="mini-btn" data-edit="' + p.sku + '" aria-label="' + t("edit") + '">' + icon("pencil") + "</button>" +
        '<button class="mini-btn danger" data-del="' + p.sku + '" aria-label="' + t("delete") + '">' + icon("trash") + "</button>" +
      "</div>" +
    "</div>" +
    '<div class="pcard-body">' +
      '<span class="pcard-cat">' + esc(catName(p.category)) + "</span>" +
      '<h3 class="pcard-name"><a href="#/product/' + p.sku + '">' + esc(p.name) + "</a></h3>" +
      '<div class="pcard-rating">' + starsHtml(p.rating) + "<span>(" + p.reviewsCount + ")</span></div>" +
      '<div class="pcard-price">' +
        '<span class="price now' + (p.salePrice ? " sale" : "") + '">' + fmt(priceOf(p)) + "</span>" +
        (p.salePrice ? '<span class="price old">' + fmt(p.price) + "</span>" : "") +
      "</div>" +
      '<div class="add-row"><button class="btn btn-dark btn-sm btn-block" data-add="' + p.sku + '"' + (out ? " disabled" : "") + ">" + icon("cart") + "<span>" + t("add_cart") + "</span></button></div>" +
    "</div></article>";
}

function gridHtml(list) {
  if (!list.length) return '<div class="empty-state"><div class="eico">' + icon("search") + "</div><h3>" + t("no_results_t") + "</h3><p>" + t("no_results_d") + "</p></div>";
  return '<div class="product-grid">' + list.map(cardHtml).join("") + "</div>";
}

/* ---------- cart ops ---------- */
function cartCount() { return state.cart.reduce((s, l) => s + l.qty, 0); }
function cartSubtotal() { return state.cart.reduce((s, l) => { const p = getProduct(l.sku); return p ? s + priceOf(p) * l.qty : s; }, 0); }
function addToCart(sku, size, color, qty) {
  const p = getProduct(sku);
  if (!p || p.stock <= 0) { toast(t("out_stock"), "error"); return; }
  size = size || p.sizes[0]; color = color || (p.colors[0] && p.colors[0].n) || "";
  qty = qty || 1;
  const line = state.cart.find(l => l.sku === sku && l.size === size && l.color === color);
  if (line) line.qty = Math.min(line.qty + qty, p.stock);
  else state.cart.push({ sku, size, color, qty: Math.min(qty, p.stock) });
  persist(); updateBadges(); toast(t("added"));
}
function toggleWish(sku) {
  const i = state.wishlist.indexOf(sku);
  if (i >= 0) { state.wishlist.splice(i, 1); toast(t("removed_wish")); }
  else { state.wishlist.push(sku); toast(t("added_wish")); }
  persist(); updateBadges();
  document.querySelectorAll('[data-wish="' + sku + '"]').forEach(b => {
    const on = state.wishlist.includes(sku);
    b.classList.toggle("active", on); b.innerHTML = icon(on ? "heartFill" : "heart");
  });
}
function updateBadges() {
  document.querySelectorAll(".cart-badge").forEach(b => { b.textContent = cartCount(); b.style.display = cartCount() ? "flex" : "none"; });
  document.querySelectorAll(".wish-badge").forEach(b => { b.textContent = state.wishlist.length; b.style.display = state.wishlist.length ? "flex" : "none"; });
}

/* ---------- shell ---------- */
function navLinksHtml() {
  const links = [
    ["#/", "nav_home"], ["#/shop", "nav_shop"], ["#/men", "nav_men"], ["#/women", "nav_women"],
    ["#/new", "nav_new"], ["#/best", "nav_best"], ["#/offers", "nav_offers"], ["#/about", "nav_about"], ["#/contact", "nav_contact"]
  ];
  return links.map(([h, k]) => '<a href="' + h + '" data-nav="' + h + '">' + t(k) + "</a>").join("");
}

function shellHtml() {
  const ann = t("announce").map(a => "<span><i></i>" + esc(a) + "</span>").join("");
  return (
    '<div class="announce"><div class="announce-track">' + ann + ann + "</div></div>" +
    '<header class="site-header"><div class="container navbar">' +
      '<button class="icon-btn nav-burger" id="burger" aria-label="menu">' + icon("burger") + "</button>" +
      '<a href="#/" class="brand"><img src="' + IMG("logo-lockup.png") + '" alt="VELORA 2" onerror="this.outerHTML=\'<span class=&quot;brand-text&quot;>VELORA 2<small>FASHION STORE</small></span>\'"><span class="v2-badge">2</span></a>' +
      '<nav class="nav-links">' + navLinksHtml() + "</nav>" +
      '<div class="nav-actions">' +
        '<a class="icon-btn" href="#/shop" data-focus-search aria-label="' + t("search_ph") + '">' + icon("search") + "</a>" +
        '<a class="icon-btn" href="#/wishlist" aria-label="' + t("wishlist") + '">' + icon("heart") + '<span class="count-badge wish-badge"></span></a>' +
        '<a class="icon-btn" href="#/cart" aria-label="' + t("cart") + '">' + icon("cart") + '<span class="count-badge cart-badge"></span></a>' +
        '<button class="lang-toggle" id="langToggle">' + t("langName") + "</button>" +
      "</div>" +
    "</div></header>" +
    '<div class="mobile-nav" id="mobileNav"><div class="scrim" data-close-mnav></div><div class="panel">' +
      '<div class="mhead"><span class="brand-text">VELORA 2<small>FASHION STORE</small></span><button class="icon-btn" data-close-mnav>' + icon("close") + "</button></div>" +
      navLinksHtml().replace(/<a /g, '<a class="mlink" ') +
      (isAdmin() ? '<a class="mlink" href="#/admin">' + t("admin") + "</a>" : "") +
    "</div></div>" +
    '<main id="view"></main>' +
    '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand"><img src="' + IMG("logo-lockup.png") + '" alt="VELORA 2" onerror="this.outerHTML=\'<span class=&quot;brand-text&quot;>VELORA 2<small>FASHION STORE</small></span>\'"><span class="v2-badge">2</span>' +
          "<p>" + t("footer_about") + "</p>" +
          '<div class="socials">' +
            '<a href="' + VELORA_STORE.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">' + icon("fb") + "</a>" +
            '<a href="' + VELORA_STORE.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + icon("ig") + "</a>" +
            '<a href="' + VELORA_STORE.tiktok + '" target="_blank" rel="noopener" aria-label="TikTok">' + icon("tk") + "</a>" +
            '<a href="https://wa.me/' + VELORA_STORE.whatsapp + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + icon("wa") + "</a>" +
          "</div></div>" +
        '<div class="footer-col"><h4>' + t("footer_shop") + "</h4>" +
          '<a href="#/shop">' + t("nav_shop") + '</a><a href="#/men">' + t("nav_men") + '</a><a href="#/women">' + t("nav_women") + '</a><a href="#/new">' + t("nav_new") + '</a><a href="#/best">' + t("nav_best") + '</a><a href="#/offers">' + t("nav_offers") + "</a></div>" +
        '<div class="footer-col"><h4>' + t("footer_help") + "</h4>" +
          '<a href="#/faq">' + t("faq") + '</a><a href="#/shipping">' + t("shipping_p") + '</a><a href="#/returns">' + t("returns_p") + '</a><a href="#/privacy">' + t("privacy_p") + '</a><a href="#/about">' + t("nav_about") + '</a><a href="#/contact">' + t("nav_contact") + "</a></div>" +
        '<div class="footer-col"><h4>' + t("footer_contact") + '</h4><ul class="footer-contact">' +
          "<li>" + icon("pin") + "<span>" + esc(VELORA_STORE.address[state.lang]) + "</span></li>" +
          "<li>" + icon("phone") + '<span dir="ltr">' + esc(VELORA_STORE.phone) + "</span></li>" +
          "<li>" + icon("mail") + "<span>" + esc(VELORA_STORE.email) + "</span></li>" +
        "</ul></div>" +
      "</div>" +
      '<div class="footer-bottom"><span>© 2026 VELORA 2. ' + t("rights") + "</span><span>" + t("demo_notice") + "</span></div>" +
    "</div></footer>" +
    '<a class="wa-float" href="https://wa.me/' + VELORA_STORE.whatsapp + "?text=" + encodeURIComponent("Hello VELORA 2!") + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + icon("wa") + "</a>" +
    '<button class="back-to-top" id="backTop" aria-label="top">' + icon("up") + "</button>" +
    (isAdmin() ? '<button class="edit-fab" id="editFab">' + icon("pencil") + "<span>" + t("edit") + "</span></button>" : "")
  );
}

function bindShell() {
  document.getElementById("langToggle").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "ar" : "en";
    LS.set("velora2_lang", state.lang);
    renderApp();
  });
  document.getElementById("burger").addEventListener("click", () => document.getElementById("mobileNav").classList.add("open"));
  document.querySelectorAll("[data-close-mnav]").forEach(el => el.addEventListener("click", () => document.getElementById("mobileNav").classList.remove("open")));
  document.querySelectorAll("#mobileNav a").forEach(a => a.addEventListener("click", () => document.getElementById("mobileNav").classList.remove("open")));
  const bt = document.getElementById("backTop");
  window.addEventListener("scroll", () => bt.classList.toggle("show", window.scrollY > 600), { passive: true });
  bt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  const efab = document.getElementById("editFab");
  if (efab) efab.addEventListener("click", toggleEditMode);
  updateBadges();
  const h = location.hash || "#/";
  document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("active", a.getAttribute("data-nav") === h || (h.startsWith(a.getAttribute("data-nav")) && a.getAttribute("data-nav") !== "#/")));
}

/* ---------- edit mode ---------- */
function toggleEditMode() {
  state.editing = !state.editing;
  document.body.classList.toggle("editing", state.editing);
  document.getElementById("editFab").classList.toggle("on", state.editing);
  toast(state.editing ? t("edit_mode_on") : t("edit_mode_off"));
  route(); // re-render so edit controls attach
}

/* ---------- global delegation ---------- */
document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) { addToCart(add.getAttribute("data-add")); return; }
  const wish = e.target.closest("[data-wish]");
  if (wish) { toggleWish(wish.getAttribute("data-wish")); return; }
  const ed = e.target.closest("[data-edit]");
  if (ed) { openProductEditor(ed.getAttribute("data-edit")); return; }
  const del = e.target.closest("[data-del]");
  if (del) { deleteProduct(del.getAttribute("data-del")); return; }
  const fs = e.target.closest("[data-focus-search]");
  if (fs) { setTimeout(() => { const i = document.getElementById("shopSearch"); if (i) i.focus(); }, 120); }
});

/* ---------- router ---------- */
const ROUTES = [];
function addRoute(re, fn) { ROUTES.push([re, fn]); }

function route() {
  const h = (location.hash || "#/").slice(1); // strip '#'
  const view = document.getElementById("view");
  for (const [re, fn] of ROUTES) {
    const m = h.match(re);
    if (m) {
      view.classList.remove("route-fade");
      void view.offsetWidth;
      fn.apply(null, m.slice(1));
      view.classList.add("route-fade");
      window.scrollTo({ top: 0 });
      return;
    }
  }
  viewNotFound();
}

function renderApp() {
  const urlLang = new URLSearchParams(location.search).get("lang");
  if (urlLang === "ar" || urlLang === "en") state.lang = urlLang;
  document.documentElement.lang = state.lang;
  document.documentElement.dir = t("dir");
  document.getElementById("app").innerHTML = shellHtml();
  bindShell();
  route();
}

window.addEventListener("hashchange", () => { bindActiveNav(); route(); });
function bindActiveNav() {
  const h = location.hash || "#/";
  document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("active", a.getAttribute("data-nav") === h || (h !== "#/" && h.startsWith(a.getAttribute("data-nav")) && a.getAttribute("data-nav") !== "#/")));
}
/* VELORA — views: home, listings, product details */
"use strict";

function pageHero(title, crumbKey) {
  return '<section class="page-hero"><div class="container"><h1>' + esc(title) + "</h1>" +
    '<div class="crumbs"><a href="#/">' + t("home") + "</a> / " + esc(crumbKey || title) + "</div></div></section>";
}

/* ================= HOME ================= */
function viewHome() {
  const newItems = state.products.filter(p => p.isNew).slice(0, 4);
  const bestItems = state.products.filter(p => p.isBest).slice(0, 4);
  const cats = VELORA_CATEGORIES.filter(c => !["men", "women"].includes(c.id));

  document.getElementById("view").innerHTML =
    /* HERO */
    '<section class="hero banner-slot"><div class="hero-media">' +
      '<img src="' + bannerSrc("hero", "hero.jpg") + '" alt="VELORA — Fashion Beyond Limits">' +
      '<button class="edit-banner-btn" data-banner="hero">' + icon("pencil") + t("banner_change") + "</button>" +
      '<div class="hero-cta"><a class="btn btn-gold" href="#/shop">' + t("hero_shop") + icon("arrow") + '</a><a class="btn btn-outline-light" href="#/new">' + t("hero_explore") + "</a></div>" +
    "</div></section>" +

    /* FEATURED CATEGORIES */
    '<section class="section"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">VELORA</span><h2>' + t("feat_cat") + "</h2><p>" + t("feat_cat_sub") + "</p></div>" +
      '<div class="cat-grid">' +
        '<a class="cat-card banner-slot" href="#/men"><img src="' + bannerSrc("men", "men.jpg") + '" alt="' + t("nav_men") + '"><button class="edit-banner-btn" data-banner="men">' + icon("pencil") + t("banner_change") + '</button><span class="cat-label">' + t("shop_men") + icon("arrow") + "</span></a>" +
        '<a class="cat-card banner-slot" href="#/women"><img src="' + bannerSrc("women", "women.jpg") + '" alt="' + t("nav_women") + '"><button class="edit-banner-btn" data-banner="women">' + icon("pencil") + t("banner_change") + '</button><span class="cat-label">' + t("shop_women") + icon("arrow") + "</span></a>" +
      "</div>" +
      '<div class="chip-row">' + cats.map(c => '<a class="chip" href="#/shop?cat=' + c.id + '">' + esc(catName(c.id)) + "</a>").join("") + "</div>" +
    "</div></section>" +

    /* NEW ARRIVALS */
    '<section class="section dark"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">' + t("promo_eyebrow") + "</span><h2>" + t("new_arrivals") + "</h2><p>" + t("new_sub") + "</p></div>" +
      '<div class="banner-slot" style="border-radius:var(--radius);overflow:hidden;margin-bottom:34px;position:relative">' +
        '<img src="' + bannerSrc("arrivals", "new-arrivals.jpg") + '" alt="' + t("new_arrivals") + '" style="width:100%;max-height:420px;object-fit:cover">' +
        '<button class="edit-banner-btn" data-banner="arrivals">' + icon("pencil") + t("banner_change") + "</button>" +
      "</div>" +
      gridHtml(newItems) +
      '<div style="text-align:center;margin-top:34px"><a class="btn btn-outline-light" href="#/new">' + t("view_all") + icon("arrow") + "</a></div>" +
    "</div></section>" +

    /* BEST SELLERS */
    '<section class="section"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">VELORA</span><h2>' + t("best_sellers") + "</h2><p>" + t("best_sub") + "</p></div>" +
      gridHtml(bestItems) +
      '<div style="text-align:center;margin-top:34px"><a class="btn btn-outline" href="#/best">' + t("view_all") + icon("arrow") + "</a></div>" +
    "</div></section>" +

    /* PROMO BANNER */
    '<section class="promo-band banner-slot"><img src="' + bannerSrc("promo", "promo.jpg") + '" alt="' + t("special_offers") + '">' +
      '<button class="edit-banner-btn" data-banner="promo">' + icon("pencil") + t("banner_change") + "</button>" +
      '<div class="promo-cta"><a class="btn btn-gold" href="#/offers">' + t("hero_shop") + icon("arrow") + "</a></div>" +
    "</section>" +

    /* WHY CHOOSE US */
    '<section class="section"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">VELORA</span><h2>' + t("why_us") + "</h2><p>" + t("why_sub") + "</p></div>" +
      '<div class="feat-grid">' +
        [["gem", "f1_t", "f1_d"], ["truck", "f2_t", "f2_d"], ["shield", "f3_t", "f3_d"], ["headset", "f4_t", "f4_d"]]
          .map(([ic, tt, dd]) => '<div class="feat-card"><div class="feat-ico">' + icon(ic) + "</div><h3>" + t(tt) + "</h3><p>" + t(dd) + "</p></div>").join("") +
      "</div>" +
    "</div></section>" +

    /* REVIEWS */
    '<section class="section dark"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">★★★★★</span><h2>' + t("reviews_t") + "</h2><p>" + t("reviews_sub") + "</p></div>" +
      '<div class="review-grid">' + VELORA_TESTIMONIALS.map(r =>
        '<div class="review-card"><div class="quote">”</div><div class="stars">' + "★".repeat(r.stars) + "☆".repeat(5 - r.stars) + "</div>" +
        "<p>" + esc(r.text[state.lang]) + '</p><div class="review-who"><div class="avatar">' + esc(r.name[0]) + "</div><div><b>" + esc(r.name) + "</b><span>" + esc(r.city[state.lang]) + "</span></div></div></div>").join("") +
      "</div>" +
    "</div></section>" +

    /* NEWSLETTER */
    '<section class="section"><div class="container"><div class="newsletter">' +
      "<h2>" + t("news_t") + "</h2><p>" + t("news_d") + "</p>" +
      '<form class="news-form" id="newsForm"><input type="email" id="newsEmail" placeholder="' + t("news_ph") + '" aria-label="' + t("news_ph") + '"><button class="btn btn-gold" type="submit">' + t("news_btn") + "</button></form>" +
    "</div></div></section>";

  document.getElementById("newsForm").addEventListener("submit", e => {
    e.preventDefault();
    const v = document.getElementById("newsEmail").value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { toast(t("news_err"), "error"); return; }
    LS.set("velora_newsletter", { email: v, at: Date.now() });
    document.getElementById("newsEmail").value = "";
    toast(t("news_ok"));
  });
  bindBannerButtons();
}

/* ================= LISTINGS ================= */
function listingStateFromUrl() {
  const q = (location.hash.split("?")[1] || "");
  const params = new URLSearchParams(q);
  return { cat: params.get("cat") || "", q: params.get("q") || "" };
}

function viewListing(kind) {
  const u = listingStateFromUrl();
  const titles = { shop: t("shop_all"), men: t("nav_men"), women: t("nav_women"), new: t("nav_new"), best: t("nav_best"), offers: t("special_offers") };
  const filter = p => {
    if (kind === "men") return p.gender === "men";
    if (kind === "women") return p.gender === "women";
    if (kind === "new") return p.isNew;
    if (kind === "best") return p.isBest;
    if (kind === "offers") return !!p.salePrice;
    return true;
  };

  const catsHtml = VELORA_CATEGORIES.filter(c => !["men", "women"].includes(c.id)).map(c =>
    '<label class="fcheck"><input type="checkbox" class="fcat" value="' + c.id + '"' + (u.cat === c.id ? " checked" : "") + "><span>" + esc(catName(c.id)) + "</span></label>").join("");

  document.getElementById("view").innerHTML =
    pageHero(titles[kind], titles[kind]) +
    '<section class="section"><div class="container"><div class="shop-layout">' +
      '<aside class="filters" id="filtersPanel">' +
        '<div class="fgroup" style="display:flex;justify-content:space-between;align-items:center"><h3 style="margin:0">' + t("filters") + '</h3><button class="icon-btn" id="closeFilters" style="color:var(--text)">' + icon("close") + "</button></div>" +
        '<div class="fgroup"><h3>' + t("categories") + "</h3>" + catsHtml + "</div>" +
        '<div class="fgroup"><h3>' + t("availability") + "</h3>" +
          '<label class="fcheck"><input type="checkbox" id="fInStock"><span>' + t("in_stock") + "</span></label>" +
          '<label class="fcheck"><input type="checkbox" id="fOnSale"><span>' + t("on_sale") + "</span></label>" +
        "</div>" +
        '<button class="btn btn-ghost btn-sm" id="clearFilters">' + t("clear_filters") + "</button>" +
      "</aside>" +
      "<div>" +
        '<div class="shop-topbar">' +
          '<button class="btn btn-outline btn-sm filters-toggle" id="openFilters">' + t("filters") + "</button>" +
          '<div class="search-box">' + icon("search") + '<input id="shopSearch" type="search" placeholder="' + t("search_ph") + '" value="' + esc(u.q) + '"></div>' +
          '<select class="sort-select" id="sortSel">' +
            '<option value="featured">' + t("sort_featured") + '</option><option value="new">' + t("sort_new") + "</option>" +
            '<option value="plh">' + t("sort_plh") + '</option><option value="phl">' + t("sort_phl") + '</option><option value="name">' + t("sort_name") + "</option>" +
          "</select>" +
          '<span class="results-count" id="resCount"></span>' +
        "</div>" +
        '<div id="listingGrid"><div class="skel-grid">' + Array(4).fill('<div class="skel-card"><div class="skel skel-media"></div><div class="skel skel-line" style="width:70%"></div><div class="skel skel-line" style="width:40%"></div></div>').join("") + "</div></div>" +
      "</div>" +
    "</div></div></section>";

  const panel = document.getElementById("filtersPanel");
  document.getElementById("openFilters").addEventListener("click", () => panel.classList.add("open"));
  document.getElementById("closeFilters").addEventListener("click", () => panel.classList.remove("open"));

  function apply() {
    const q = document.getElementById("shopSearch").value.trim().toLowerCase();
    const sort = document.getElementById("sortSel").value;
    const cats = Array.from(document.querySelectorAll(".fcat:checked")).map(i => i.value);
    const inStock = document.getElementById("fInStock").checked;
    const onSale = document.getElementById("fOnSale").checked;

    let list = state.products.filter(filter);
    if (cats.length) list = list.filter(p => cats.includes(p.category));
    if (inStock) list = list.filter(p => p.stock > 0);
    if (onSale) list = list.filter(p => p.salePrice);
    if (q) list = list.filter(p => (p.name + " " + p.desc + " " + catName(p.category) + " " + p.sku).toLowerCase().includes(q));
    if (sort === "plh") list = list.slice().sort((a, b) => priceOf(a) - priceOf(b));
    else if (sort === "phl") list = list.slice().sort((a, b) => priceOf(b) - priceOf(a));
    else if (sort === "name") list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "new") list = list.filter(p => p.isNew).concat(list.filter(p => !p.isNew));

    document.getElementById("resCount").textContent = list.length + " " + t("results");
    document.getElementById("listingGrid").innerHTML = gridHtml(list);
  }

  setTimeout(apply, 220); // brief skeleton = loading state
  ["shopSearch", "sortSel", "fInStock", "fOnSale"].forEach(id => document.getElementById(id).addEventListener("input", apply));
  document.querySelectorAll(".fcat").forEach(c => c.addEventListener("change", apply));
  document.getElementById("clearFilters").addEventListener("click", () => {
    document.getElementById("shopSearch").value = "";
    document.getElementById("sortSel").value = "featured";
    document.getElementById("fInStock").checked = false;
    document.getElementById("fOnSale").checked = false;
    document.querySelectorAll(".fcat").forEach(c => c.checked = false);
    apply();
  });
}

/* ================= PRODUCT DETAILS ================= */
function viewProduct(sku) {
  const p = getProduct(sku);
  if (!p) { viewNotFound(); return; }
  let selSize = null, selColor = null, qty = 1;
  const related = state.products.filter(x => x.sku !== p.sku && (x.category === p.category || x.gender === p.gender)).slice(0, 4);
  const allReviews = (state.userReviews[p.sku] || []);
  const out = p.stock <= 0;

  document.getElementById("view").innerHTML =
    pageHero(p.name, catName(p.category)) +
    '<section class="section"><div class="container">' +
      '<div class="pd-layout">' +
        '<div class="pd-gallery banner-slot">' + imgHtml(p) +
          '<button class="edit-banner-btn" data-edit="' + p.sku + '">' + icon("pencil") + t("edit") + "</button>" +
        "</div>" +
        '<div class="pd-info">' +
          '<span class="pd-cat">' + esc(catName(p.category)) + " — " + (p.gender === "men" ? t("men") : t("women")) + "</span>" +
          "<h1>" + esc(p.name) + "</h1>" +
          '<div class="pcard-rating">' + starsHtml(p.rating) + "<span>" + p.rating + " · " + (p.reviewsCount + allReviews.length) + " " + t("reviews") + "</span></div>" +
          '<div class="pd-price-row"><span class="price now' + (p.salePrice ? " sale" : "") + '">' + fmt(priceOf(p)) + "</span>" +
            (p.salePrice ? '<span class="price old">' + fmt(p.price) + '</span><span class="save-tag">-' + Math.round((1 - p.salePrice / p.price) * 100) + "%</span>" : "") + "</div>" +
          '<p class="pd-desc">' + esc(p.desc) + "</p>" +
          '<div class="pd-meta"><span><b>' + t("sku") + ":</b> " + esc(p.sku) + "</span>" +
            '<span><b>' + t("category") + ":</b> " + esc(catName(p.category)) + "</span>" +
            '<span class="stock-line ' + (out ? "out" : "in") + '">' + (out ? t("out_stock") : p.stock <= 5 ? t("low_stock") + " (" + p.stock + ")" : t("in_stock") + " (" + p.stock + ")") + "</span></div>" +
          '<div class="opt-label">' + t("size") + "</div>" +
          '<div class="opt-row" id="sizeRow">' + p.sizes.map(s => '<button class="size-pill" data-size="' + esc(s) + '">' + esc(s) + "</button>").join("") + "</div>" +
          '<div class="opt-label">' + t("color") + '</div><div class="opt-row" id="colorRow">' +
            p.colors.map(c => '<button class="color-dot" data-color="' + esc(c.n) + '" title="' + esc(c.n) + '" style="background:' + c.h + '"></button>').join("") + "</div>" +
          '<div class="qty-row"><div class="qty-ctrl"><button id="qMinus">' + icon("minus") + '</button><span id="qVal">1</span><button id="qPlus">' + icon("plus") + "</button></div>" +
            '<button class="btn btn-dark" id="pdAdd"' + (out ? " disabled" : "") + ">" + icon("cart") + "<span>" + t("add_cart") + "</span></button>" +
            '<button class="btn btn-outline" id="pdWish">' + icon(state.wishlist.includes(p.sku) ? "heartFill" : "heart") + "<span>" + t("wishlist") + "</span></button></div>" +
        "</div>" +
      "</div>" +

      '<div class="pd-section"><div class="section-head" style="text-align:start;margin-bottom:20px"><h2 style="font-size:1.5rem">' + t("reviews") + "</h2><div class='divider-gold' style='margin:0'></div></div>" +
        '<div id="reviewList">' +
          (allReviews.length ? allReviews.map(r =>
            '<div class="review-item"><div class="rhead"><b>' + esc(r.name) + "</b><span class='rdate'>" + starsHtml(r.rating) + " · " + esc(r.date) + "</span></div><p>" + esc(r.text) + "</p></div>").join("")
          : '<p style="color:var(--muted);font-size:.9rem">—</p>') +
        "</div>" +
        '<form class="review-form" id="reviewForm"><h3>' + t("write_review") + "</h3>" +
          '<div class="form-row"><div class="field"><label>' + t("your_name") + '</label><input id="rvName" required></div>' +
          '<div class="field"><label>' + t("rating") + '</label><select id="rvRating"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select></div></div>' +
          '<div class="field"><label>' + t("your_review") + '</label><textarea id="rvText" rows="3" required></textarea></div>' +
          '<button class="btn btn-gold" type="submit">' + t("submit_review") + "</button></form>" +
      "</div>" +

      '<div class="pd-section"><div class="section-head"><span class="eyebrow">VELORA</span><h2>' + t("related") + "</h2></div>" + gridHtml(related) + "</div>" +
    "</div></section>";

  document.querySelectorAll("#sizeRow .size-pill").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll("#sizeRow .size-pill").forEach(x => x.classList.remove("sel"));
    b.classList.add("sel"); selSize = b.getAttribute("data-size");
  }));
  document.querySelectorAll("#colorRow .color-dot").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll("#colorRow .color-dot").forEach(x => x.classList.remove("sel"));
    b.classList.add("sel"); selColor = b.getAttribute("data-color");
  }));
  document.getElementById("qMinus").addEventListener("click", () => { qty = Math.max(1, qty - 1); document.getElementById("qVal").textContent = qty; });
  document.getElementById("qPlus").addEventListener("click", () => { qty = Math.min(p.stock || 1, qty + 1); document.getElementById("qVal").textContent = qty; });
  document.getElementById("pdAdd").addEventListener("click", () => {
    if (!selSize) { toast(t("select_size"), "error"); return; }
    if (!selColor) { toast(t("select_color"), "error"); return; }
    addToCart(p.sku, selSize, selColor, qty);
  });
  document.getElementById("pdWish").addEventListener("click", () => toggleWish(p.sku));
  document.getElementById("reviewForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("rvName").value.trim();
    const text = document.getElementById("rvText").value.trim();
    const rating = parseInt(document.getElementById("rvRating").value, 10);
    if (!name || !text) return;
    const arr = state.userReviews[p.sku] || (state.userReviews[p.sku] = []);
    arr.unshift({ name, text, rating, date: new Date().toLocaleDateString(state.lang === "ar" ? "ar-EG" : "en-GB") });
    persist(); toast(t("review_ok")); viewProduct(p.sku);
  });
  bindBannerButtons();
}

addRoute(/^\/$/, viewHome);
addRoute(/^\/shop$/, () => viewListing("shop"));
addRoute(/^\/men$/, () => viewListing("men"));
addRoute(/^\/women$/, () => viewListing("women"));
addRoute(/^\/new$/, () => viewListing("new"));
addRoute(/^\/best$/, () => viewListing("best"));
addRoute(/^\/offers$/, () => viewListing("offers"));
addRoute(/^\/product\/([\w-]+)$/, viewProduct);
/* VELORA — views: wishlist, cart, checkout, static pages, 404 */
"use strict";

/* ================= WISHLIST ================= */
function viewWishlist() {
  const items = state.wishlist.map(getProduct).filter(Boolean);
  document.getElementById("view").innerHTML =
    pageHero(t("wishlist")) +
    '<section class="section"><div class="container">' +
      (items.length ? gridHtml(items)
        : '<div class="empty-state"><div class="eico">' + icon("heart") + "</div><h3>" + t("wish_empty_t") + "</h3><p>" + t("wish_empty_d") + '</p><a class="btn btn-gold" href="#/shop">' + t("start_shopping") + "</a></div>") +
    "</div></section>";
}

/* ================= CART ================= */
function totalsHtml(shipId) {
  const sub = cartSubtotal();
  let disc = 0;
  if (state.coupon) {
    const c = VELORA_COUPONS[state.coupon];
    if (c) disc = c.type === "percent" ? Math.round(sub * c.value / 100) : Math.min(c.value, sub);
  }
  const ship = VELORA_SHIPPING.find(s => s.id === (shipId || state.shipId)) || VELORA_SHIPPING[0];
  const afterDisc = sub - disc;
  const shipFee = afterDisc >= VELORA_STORE.freeShipOver ? 0 : ship.fee;
  const total = afterDisc + shipFee;
  const remaining = Math.max(0, VELORA_STORE.freeShipOver - afterDisc);
  const pct = Math.min(100, Math.round(afterDisc / VELORA_STORE.freeShipOver * 100));

  return {
    sub, disc, ship, shipFee, total,
    html:
      '<div class="sum-row"><span>' + t("subtotal") + "</span><span>" + fmt(sub) + "</span></div>" +
      (disc ? '<div class="sum-row"><span>' + t("discount") + ' (' + esc(state.coupon) + ')</span><span class="disc">−' + fmt(disc) + "</span></div>" : "") +
      '<div class="sum-row"><span>' + t("shipping") + ' — ' + esc(ship[state.lang === "ar" ? "ar" : "en"]) + "</span><span>" + (shipFee === 0 ? '<span class="free">' + t("free") + "</span>" : fmt(shipFee)) + "</span></div>" +
      '<div class="progress-ship">' +
        (remaining > 0 ? "<p>" + fmt(remaining) + " " + t("free_ship_progress") + "</p>" : "<p style='color:var(--success);font-weight:600'>" + t("free_ship_done") + "</p>") +
        '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
      "</div>" +
      '<div class="sum-row total"><span>' + t("total") + "</span><span>" + fmt(total) + "</span></div>"
  };
}

function viewCart() {
  const view = document.getElementById("view");
  if (!state.cart.length) {
    view.innerHTML = pageHero(t("cart")) + '<section class="section"><div class="container">' +
      '<div class="empty-state"><div class="eico">' + icon("cart") + "</div><h3>" + t("cart_empty_t") + "</h3><p>" + t("cart_empty_d") + '</p><a class="btn btn-gold" href="#/shop">' + t("start_shopping") + "</a></div>" +
      "</div></section>";
    return;
  }

  const lines = state.cart.map((l, i) => {
    const p = getProduct(l.sku);
    if (!p) return "";
    return '<div class="cart-line">' +
      '<a class="cl-img" href="#/product/' + p.sku + '">' + imgHtml(p) + "</a>" +
      "<div><h4>" + esc(p.name) + '</h4><div class="cl-meta">' + t("size") + ": " + esc(l.size) + " · " + t("color") + ": " + esc(l.color) + '</div>' +
      '<div class="cl-price">' + fmt(priceOf(p)) + "</div></div>" +
      '<div class="cl-side"><div class="qty-ctrl"><button data-dec="' + i + '">' + icon("minus") + '</button><span>' + l.qty + '</span><button data-inc="' + i + '">' + icon("plus") + "</button></div>" +
      '<button class="link-remove" data-rm="' + i + '">' + t("delete") + "</button></div>" +
    "</div>";
  }).join("");

  const shipOpts = VELORA_SHIPPING.map(s =>
    '<option value="' + s.id + '"' + ((state.shipId || "cairo") === s.id ? " selected" : "") + ">" +
    esc(s[state.lang === "ar" ? "ar" : "en"]) + " — " + fmt(s.fee) + " (" + esc(s.days[state.lang]) + ")</option>").join("");

  view.innerHTML =
    pageHero(t("cart")) +
    '<section class="section"><div class="container"><div class="cart-layout">' +
      "<div>" + lines +
        '<div style="margin-top:18px"><a class="btn btn-ghost" href="#/shop">' + icon("arrowL") + t("continue_shop") + "</a></div></div>" +
      '<div class="summary-card"><h3>' + t("total") + "</h3>" +
        '<div class="coupon-row"><input id="couponIn" placeholder="' + t("coupon_ph") + '" value="' + esc(state.coupon || "") + '"><button class="btn btn-dark btn-sm" id="applyCoupon">' + t("apply") + "</button></div>" +
        '<div class="field"><label>' + t("ship_to") + '</label><select id="shipSel">' + shipOpts + "</select></div>" +
        '<div id="totalsBox">' + totalsHtml().html + "</div>" +
        '<a class="btn btn-gold btn-block" href="#/checkout" style="margin-top:16px">' + t("proceed") + icon("arrow") + "</a>" +
      "</div>" +
    "</div></div></section>";

  view.querySelectorAll("[data-inc]").forEach(b => b.addEventListener("click", () => {
    const l = state.cart[+b.getAttribute("data-inc")]; const p = getProduct(l.sku);
    if (p && l.qty < p.stock) l.qty++; persist(); updateBadges(); viewCart();
  }));
  view.querySelectorAll("[data-dec]").forEach(b => b.addEventListener("click", () => {
    const l = state.cart[+b.getAttribute("data-dec")];
    l.qty--; if (l.qty <= 0) state.cart.splice(+b.getAttribute("data-dec"), 1);
    persist(); updateBadges(); viewCart();
  }));
  view.querySelectorAll("[data-rm]").forEach(b => b.addEventListener("click", () => {
    state.cart.splice(+b.getAttribute("data-rm"), 1); persist(); updateBadges(); viewCart();
  }));
  document.getElementById("applyCoupon").addEventListener("click", () => {
    const code = document.getElementById("couponIn").value.trim().toUpperCase();
    if (!code) { state.coupon = null; persist(); viewCart(); return; }
    if (VELORA_COUPONS[code]) { state.coupon = code; persist(); toast(t("coupon_ok")); viewCart(); }
    else toast(t("coupon_bad"), "error");
  });
  document.getElementById("shipSel").addEventListener("change", e => {
    state.shipId = e.target.value;
    document.getElementById("totalsBox").innerHTML = totalsHtml().html;
  });
}

/* ================= CHECKOUT ================= */
function viewCheckout() {
  const view = document.getElementById("view");
  if (!state.cart.length) { location.hash = "#/cart"; return; }
  const T = totalsHtml();
  const shipOpts = VELORA_SHIPPING.map(s =>
    '<option value="' + s.id + '"' + ((state.shipId || "cairo") === s.id ? " selected" : "") + ">" +
    esc(s[state.lang === "ar" ? "ar" : "en"]) + " — " + fmt(s.fee) + "</option>").join("");
  const miniLines = state.cart.map(l => {
    const p = getProduct(l.sku);
    return p ? '<div class="mini-line"><div class="ml-img">' + imgHtml(p) + '</div><div><b>' + esc(p.name) + '</b><div class="cl-meta">' + esc(l.size) + " · " + esc(l.color) + '</div></div><span class="ml-qty">×' + l.qty + "</span></div>" : "";
  }).join("");

  view.innerHTML =
    pageHero(t("checkout")) +
    '<section class="section"><div class="container"><div class="checkout-layout">' +
      '<form class="panel-card" id="coForm" novalidate>' +
        "<h3 style='margin-bottom:18px'>" + t("contact_info") + "</h3>" +
        '<div class="form-row"><div class="field"><label>' + t("full_name") + '</label><input id="coName"></div>' +
        '<div class="field"><label>' + t("phone") + '</label><input id="coPhone" dir="ltr" placeholder="01xxxxxxxxx"></div></div>' +
        '<div class="field"><label>' + t("governorate") + '</label><select id="coGov">' + shipOpts + "</select></div>" +
        '<div class="field"><label>' + t("address") + '</label><input id="coAddr"></div>' +
        '<div class="field"><label>' + t("notes") + '</label><textarea id="coNotes" rows="2"></textarea></div>' +
        "<h3 style='margin:22px 0 14px'>" + t("pay_method") + "</h3>" +
        '<label class="pay-opt sel"><input type="radio" name="pay" value="cod" checked><div><b>' + t("cod") + "</b><span>" + t("cod_d") + "</span></div></label>" +
        '<label class="pay-opt"><input type="radio" name="pay" value="vf"><div><b>' + t("vf_cash") + '<span class="demo-tag">' + t("demo_tag") + "</span></b><span>" + t("vf_d") + "</span></div></label>" +
        '<label class="pay-opt"><input type="radio" name="pay" value="online"><div><b>' + t("online_pay") + '<span class="demo-tag">' + t("demo_tag") + "</span></b><span>" + t("online_d") + "</span></div></label>" +
        '<button class="btn btn-gold btn-block" type="submit" style="margin-top:14px">' + t("place_order") + " — " + fmt(T.total) + "</button>" +
      "</form>" +
      '<div class="summary-card"><h3>' + t("cart") + " (" + cartCount() + ")</h3>" + miniLines +
        '<div id="coTotals" style="margin-top:12px">' + T.html + "</div></div>" +
    "</div></div></section>";

  document.querySelectorAll(".pay-opt").forEach(l => l.addEventListener("click", () => {
    document.querySelectorAll(".pay-opt").forEach(x => x.classList.remove("sel")); l.classList.add("sel");
  }));
  document.getElementById("coGov").addEventListener("change", e => {
    state.shipId = e.target.value;
    const T2 = totalsHtml();
    document.getElementById("coTotals").innerHTML = T2.html;
    document.querySelector("#coForm button[type=submit]").innerHTML = t("place_order") + " — " + fmt(T2.total);
  });

  document.getElementById("coForm").addEventListener("submit", async e => {
    e.preventDefault();
    const name = document.getElementById("coName"), phone = document.getElementById("coPhone"), addr = document.getElementById("coAddr");
    let ok = true;
    [name, phone, addr].forEach(i => i.classList.remove("field-error"));
    if (name.value.trim().length < 3) { name.classList.add("field-error"); toast(t("err_name"), "error"); ok = false; }
    if (!/^01[0-9]{9}$/.test(phone.value.trim().replace(/\s/g, ""))) { phone.classList.add("field-error"); toast(t("err_phone"), "error"); ok = false; }
    if (addr.value.trim().length < 5) { addr.classList.add("field-error"); toast(t("err_address"), "error"); ok = false; }
    if (!ok) return;

    const T3 = totalsHtml();
    const order = {
      id: "VL-" + Date.now().toString(36).toUpperCase(),
      at: new Date().toISOString(),
      name: name.value.trim(), phone: phone.value.trim(),
      gov: T3.ship[state.lang === "ar" ? "ar" : "en"], address: addr.value.trim(),
      notes: document.getElementById("coNotes").value.trim(),
      pay: document.querySelector('input[name="pay"]:checked').value,
      lines: state.cart.map(l => { const p = getProduct(l.sku); return { sku: l.sku, name: p ? p.name : l.sku, size: l.size, color: l.color, qty: l.qty, price: p ? priceOf(p) : 0 }; }),
      subtotal: T3.sub, discount: T3.disc, shipping: T3.shipFee, total: T3.total,
      coupon: state.coupon
    };
    const submitBtn = document.querySelector("#coForm button[type=submit]");
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = t("sending"); }
    order.lines.forEach(l => { const p = getProduct(l.sku); if (p) p.stock = Math.max(0, p.stock - l.qty); });
    state.orders.unshift(order);
    state.cart = []; state.coupon = null;
    persist(); updateBadges();
    const sent = await CLOUD.pushOrder(order);
    if (sent) notifyOrderEmail(order);
    CLOUD.pushState();
    if (!sent) toast(t("sync_off"), "error");
    location.hash = "#/confirm/" + order.id;
  });
}

/* ================= CONFIRMATION ================= */
function viewConfirm(id) {
  const o = state.orders.find(x => x.id === id);
  if (!o) { viewNotFound(); return; }
  const waText = t("order_whatsapp_intro") + "\n\n" +
    (o.lines || []).map(l => "• " + l.name + " (" + l.size + " / " + l.color + ") ×" + l.qty + " — " + l.price * l.qty + " EGP").join("\n") +
    "\n\n" + t("order_num") + ": " + o.id + "\n" + t("order_total") + ": " + o.total + " EGP" +
    "\n" + o.name + " — " + o.phone + "\n" + o.gov + " — " + o.address;
  document.getElementById("view").innerHTML =
    pageHero(t("order_ok_t")) +
    '<section class="section"><div class="container confirm-wrap">' +
      '<div class="confirm-check">' + icon("check") + "</div>" +
      "<h2 style='font-size:1.8rem'>" + t("order_ok_t") + "</h2>" +
      '<div class="order-num">' + t("order_num") + ": " + esc(o.id) + "</div>" +
      "<p style='color:var(--muted);max-width:440px;margin:0 auto 28px'>" + t("order_ok_d") + "</p>" +
      '<div class="summary-card" style="text-align:start;max-width:440px;margin:0 auto 28px">' +
        (o.lines || []).map(l => '<div class="sum-row"><span>' + esc(l.name) + " ×" + l.qty + "</span><span>" + fmt(l.price * l.qty) + "</span></div>").join("") +
        (o.discount ? '<div class="sum-row"><span>' + t("discount") + '</span><span class="disc">−' + fmt(o.discount) + "</span></div>" : "") +
        '<div class="sum-row"><span>' + t("shipping") + "</span><span>" + (o.shipping ? fmt(o.shipping) : t("free")) + "</span></div>" +
        '<div class="sum-row total"><span>' + t("total") + "</span><span>" + fmt(o.total) + "</span></div>" +
      "</div>" +
      '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">' +
        '<a class="btn btn-gold" target="_blank" rel="noopener" href="https://wa.me/' + storeWa() + "?text=" + encodeURIComponent(waText) + '">' + icon("wa") + t("send_whatsapp") + "</a>" +
        '<a class="btn btn-outline" href="#/">' + t("back_home") + "</a>" +
      "</div>" +
    "</div></section>";
}

/* ================= STATIC PAGES ================= */
function viewAbout() {
  document.getElementById("view").innerHTML =
    pageHero(t("about_t")) +
    '<section class="section"><div class="container two-col">' +
      '<div class="about-img banner-slot"><img src="' + bannerSrc("logoBanner", "logo-banner.jpg") + '" alt="VELORA 2" style="width:100%">' +
        '<button class="edit-banner-btn" data-banner="logoBanner">' + icon("pencil") + t("banner_change") + "</button></div>" +
      "<div><h2 style='font-size:1.9rem;margin-bottom:14px'>VELORA — <span class='text-gold'>" + esc(VELORA_STORE.tagline) + "</span></h2>" +
      (state.lang === "ar"
        ? "<p style='color:#4c4c46;margin-bottom:14px'>VELORA متجر أزياء عصري وفاخر للرجال والسيدات، اتأسس في القاهرة بفكرة بسيطة: الأناقة الحقيقية في التفاصيل. بنختار خاماتنا بعناية، وبنصمم قطع مينيمال تعيش معاك وتعبّر عنك.</p><p style='color:#4c4c46'>الموقع ده نسخة تجريبية (مشروع تدريبي) — كل بيانات التواصل والعناوين والطلبات Placeholder.</p>"
        : "<p style='color:#4c4c46;margin-bottom:14px'>VELORA is a modern luxury fashion store for men and women, founded in Cairo on a simple idea: real elegance lives in the details. We choose our fabrics carefully and design minimal pieces that last and speak for you.</p><p style='color:#4c4c46'>This website is a demo (practice project) — all contact details, addresses and orders are placeholder data.</p>") +
      '<div class="feat-grid" style="grid-template-columns:1fr 1fr;margin-top:26px">' +
        [["gem", "f1_t"], ["truck", "f2_t"], ["shield", "f3_t"], ["headset", "f4_t"]].map(([ic, k]) =>
          '<div class="feat-card" style="padding:20px"><div class="feat-ico" style="width:46px;height:46px;margin-bottom:10px">' + icon(ic) + "</div><h3 style='font-size:.95rem'>" + t(k) + "</h3></div>").join("") +
      "</div></div>" +
    "</div></section>";
  bindBannerButtons();
}

function viewContact() {
  document.getElementById("view").innerHTML =
    pageHero(t("contact_t")) +
    '<section class="section"><div class="container two-col">' +
      '<div class="panel-card"><h3 style="margin-bottom:18px">' + t("send_msg") + "</h3>" +
        '<form id="ctForm"><div class="form-row"><div class="field"><label>' + t("your_name") + '</label><input id="ctName" required></div>' +
        '<div class="field"><label>' + t("your_email") + '</label><input id="ctEmail" type="email" required></div></div>' +
        '<div class="field"><label>' + t("your_msg") + '</label><textarea id="ctMsg" rows="5" required></textarea></div>' +
        '<button class="btn btn-gold" type="submit">' + t("send_msg") + "</button></form></div>" +
      '<div><ul class="info-list">' +
        "<li>" + icon("pin") + "<div><b>" + t("visit_us") + "</b><br>" + esc(VELORA_STORE.address[state.lang]) + "</div></li>" +
        "<li>" + icon("phone") + "<div><b>" + t("call_us") + '</b><br><span dir="ltr">' + esc(VELORA_STORE.phone) + "</span></div></li>" +
        "<li>" + icon("mail") + "<div><b>" + t("email_us") + "</b><br>" + esc(VELORA_STORE.email) + "</div></li>" +
        "<li>" + icon("wa") + "<div><b>WhatsApp</b><br>" + '<a href="https://wa.me/' + VELORA_STORE.whatsapp + '" target="_blank" rel="noopener" style="color:var(--gold-deep)"><span dir="ltr">' + esc(VELORA_STORE.phone) + "</span></a></div></li>" +
        "<li>" + icon("ig") + "<div><b>" + t("follow_us") + "</b><br>" +
          '<a href="' + VELORA_STORE.instagram + '" target="_blank" rel="noopener">Instagram</a> · <a href="' + VELORA_STORE.facebook + '" target="_blank" rel="noopener">Facebook</a> · <a href="' + VELORA_STORE.tiktok + '" target="_blank" rel="noopener">TikTok</a></div></li>' +
      '</ul><div class="map-embed" style="margin-top:18px"><iframe title="map" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=31.330%2C30.045%2C31.360%2C30.065&layer=mapnik&marker=30.055%2C31.345"></iframe></div></div>' +
    "</div></section>";
  document.getElementById("ctForm").addEventListener("submit", e => {
    e.preventDefault();
    const em = document.getElementById("ctEmail").value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { toast(t("news_err"), "error"); return; }
    e.target.reset(); toast(t("msg_ok"));
  });
}

function viewFaq() {
  const qa = state.lang === "ar" ? [
    ["إزاي أطلب من الموقع؟", "بتختار المنتج والمقاس واللون وتضيفه للسلة، وبعدين بتكمل للـ checkout وتكتب بياناتك وتختار طريقة الدفع. الطلب كله تجريبي في النسخة دي."],
    ["ما هي طرق الدفع المتاحة؟", "الدفع عند الاستلام، وفودافون كاش (واجهة تجريبية)، والدفع الإلكتروني (واجهة تجريبية). لا يتم تنفيذ أي دفع حقيقي."],
    ["الشحن بياخد قد إيه؟", "داخل القاهرة من ١ لـ ٣ أيام، وخارجها من ٣ لـ ٥ أيام. الشحن مجاني للطلبات فوق ٢٠٠٠ جنيه."],
    ["سياسة الاستبدال والاسترجاع؟", "استبدال أو استرجاع خلال ١٤ يوم بحالة المنتج الأصلية. كل التفاصيل في صفحة سياسة الاسترجاع."],
    ["هل البيانات على الموقع حقيقية؟", "لا، كل بيانات التواصل والعنوان والأسعار بيانات تجريبية لغرض المشروع التدريبي."]
  ] : [
    ["How do I place an order?", "Pick a product, choose size and color, add it to your cart, then checkout with your details and a payment method. In this demo version, orders are not real."],
    ["Which payment methods are available?", "Cash on delivery, Vodafone Cash (demo interface) and online payment (demo interface). No real payment is ever processed."],
    ["How long does shipping take?", "1–3 days inside Cairo, 3–5 days elsewhere in Egypt. Shipping is free for orders over 2,000 EGP."],
    ["What is the return policy?", "Exchange or return within 14 days in original condition. Full details are on the Return Policy page."],
    ["Is the store data real?", "No. All contact details, addresses and prices are placeholder data for this practice project."]
  ];
  document.getElementById("view").innerHTML =
    pageHero(t("faq")) +
    '<section class="section"><div class="container" style="max-width:780px"><div class="accordion">' +
      qa.map((q, i) => '<div class="acc-item"><button class="acc-head" data-acc="' + i + '">' + esc(q[0]) + icon("plus") + '</button><div class="acc-body"><p>' + esc(q[1]) + "</p></div></div>").join("") +
    "</div></div></section>";
  document.querySelectorAll("[data-acc]").forEach(b => b.addEventListener("click", () => {
    const item = b.parentElement, body = item.querySelector(".acc-body"), open = item.classList.contains("open");
    document.querySelectorAll(".acc-item").forEach(x => { x.classList.remove("open"); x.querySelector(".acc-body").style.maxHeight = null; });
    if (!open) { item.classList.add("open"); body.style.maxHeight = body.scrollHeight + "px"; }
  }));
}

function policyPage(titleKey, bodyHtml) {
  document.getElementById("view").innerHTML =
    pageHero(t(titleKey)) +
    '<section class="section"><div class="container"><div class="policy-body">' + bodyHtml + "</div></div></section>";
}

function viewShippingP() {
  const rows = VELORA_SHIPPING.map(s => "<tr><td>" + esc(s[state.lang === "ar" ? "ar" : "en"]) + "</td><td>" + fmt(s.fee) + "</td><td>" + esc(s.days[state.lang]) + "</td></tr>").join("");
  policyPage("shipping_p", state.lang === "ar"
    ? "<h3>مناطق وأسعار الشحن</h3><table><tr><th>المنطقة</th><th>السعر</th><th>المدة</th></tr>" + rows + "</table>" +
      "<h3>الشحن المجاني</h3><p>التوصيل مجاني لكل الطلبات فوق ٢٠٠٠ جنيه.</p>" +
      "<h3>ملاحظات</h3><ul><li>كل الأسعار والمدد افتراضية لأغراض المشروع التجريبي.</li><li>يتم التوصيل خلال مواعيد العمل الرسمية.</li></ul>"
    : "<h3>Shipping zones and rates</h3><table><tr><th>Zone</th><th>Fee</th><th>Duration</th></tr>" + rows + "</table>" +
      "<h3>Free shipping</h3><p>Delivery is free on all orders over 2,000 EGP.</p>" +
      "<h3>Notes</h3><ul><li>All prices and durations are placeholder values for this demo project.</li><li>Deliveries run during standard business hours.</li></ul>");
}

function viewReturnsP() {
  policyPage("returns_p", state.lang === "ar"
    ? "<h3>الاستبدال والاسترجاع</h3><p>تقدر تستبدل أو ترجع أي منتج خلال ١٤ يوم من الاستلام بشرط يكون بحالته الأصلية وبالتغليف والفاتورة.</p>" +
      "<h3>الخطوات</h3><ul><li>تواصل معانا على واتساب أو الإيميل مع رقم الطلب.</li><li>هنحدد معاك ميعاد الاستلام.</li><li>بعد الفحص، بيتم الاستبدال أو رد المبلغ بنفس طريقة الدفع.</li></ul>" +
      "<h3>استثناءات</h3><ul><li>الإكسسوارات الشخصية لا تُستبدل لأسباب صحية.</li><li>المنتجات المستعملة أو المتضررة بسوء استخدام لا تُقبل.</li></ul><p><em>سياسة تجريبية لغرض المشروع.</em></p>"
    : "<h3>Exchange and returns</h3><p>You can exchange or return any item within 14 days of delivery, provided it is in original condition with packaging and receipt.</p>" +
      "<h3>Steps</h3><ul><li>Contact us on WhatsApp or email with your order number.</li><li>We will schedule a pickup with you.</li><li>After inspection, we exchange the item or refund via the original payment method.</li></ul>" +
      "<h3>Exceptions</h3><ul><li>Personal accessories cannot be exchanged for hygiene reasons.</li><li>Used or misused items are not accepted.</li></ul><p><em>Demo policy for the practice project.</em></p>");
}

function viewPrivacyP() {
  policyPage("privacy_p", state.lang === "ar"
    ? "<h3>جمع البيانات</h3><p>النسخة التجريبية دي مبتجمعش أي بيانات حقيقية. بيانات السلة والمفضلة والتعديلات بتتحفظ محليًا على جهازك فقط (Local Storage).</p>" +
      "<h3>الدفع</h3><p>لا يتم جمع أي بيانات مالية أو تنفيذ أي عملية دفع حقيقية.</p>" +
      "<h3>التواصل</h3><p>بيانات التواصل الظاهرة في الموقع Placeholder لأغراض العرض فقط.</p>"
    : "<h3>Data collection</h3><p>This demo does not collect any real data. Cart, wishlist and admin edits are stored locally on your device only (local storage).</p>" +
      "<h3>Payments</h3><p>No financial data is collected and no real payment is ever processed.</p>" +
      "<h3>Contact data</h3><p>The contact details shown on this site are placeholders for demonstration only.</p>");
}

/* ================= 404 ================= */
function viewNotFound() {
  document.getElementById("view").innerHTML =
    '<section class="section"><div class="container notfound-wrap">' +
      '<div class="big">4<span>0</span>4</div>' +
      "<h2 style='margin:10px 0'>" + t("nf_t") + "</h2>" +
      "<p style='color:var(--muted);margin-bottom:26px'>" + t("nf_d") + "</p>" +
      '<a class="btn btn-gold" href="#/">' + t("back_home") + "</a>" +
    "</div></section>";
}

addRoute(/^\/wishlist$/, viewWishlist);
addRoute(/^\/cart$/, viewCart);
addRoute(/^\/checkout$/, viewCheckout);
addRoute(/^\/confirm\/([\w-]+)$/, viewConfirm);
addRoute(/^\/about$/, viewAbout);
addRoute(/^\/contact$/, viewContact);
addRoute(/^\/faq$/, viewFaq);
addRoute(/^\/shipping$/, viewShippingP);
addRoute(/^\/returns$/, viewReturnsP);
addRoute(/^\/privacy$/, viewPrivacyP);
/* VELORA — admin dashboard, edit mode tools, boot */
"use strict";

/* ---------- image upload helper ---------- */
function readImageFile(file, cb) {
  const fr = new FileReader();
  fr.onload = () => {
    const img = new Image();
    img.onload = () => {
      const MAX = 900;
      let w = img.width, h = img.height;
      if (Math.max(w, h) > MAX) { const r = MAX / Math.max(w, h); w = Math.round(w * r); h = Math.round(h * r); }
      const cv = document.createElement("canvas");
      cv.width = w; cv.height = h;
      cv.getContext("2d").drawImage(img, 0, 0, w, h);
      cb(cv.toDataURL("image/jpeg", 0.82));
    };
    img.src = fr.result;
  };
  fr.readAsDataURL(file);
}
function pickImage(cb) {
  const inp = document.createElement("input");
  inp.type = "file"; inp.accept = "image/*";
  inp.onchange = () => { if (inp.files[0]) readImageFile(inp.files[0], cb); };
  inp.click();
}

/* ---------- banner overrides ---------- */
function bindBannerButtons() {
  document.querySelectorAll("[data-banner]").forEach(b => {
    b.addEventListener("click", e => {
      e.preventDefault(); e.stopPropagation();
      if (!state.editing) return;
      pickImage(dataUrl => {
        state.banners[b.getAttribute("data-banner")] = dataUrl;
        persist(); CLOUD.pushState(); toast(t("banner_updated")); route();
      });
    }, { once: true });
  });
}

/* ---------- modal ---------- */
function openModal(html) {
  const root = document.getElementById("overlay-root");
  root.innerHTML = '<div class="modal-scrim open"><div class="modal">' + html + "</div></div>";
  const scrim = root.firstElementChild;
  scrim.addEventListener("click", e => { if (e.target === scrim) closeModal(); });
  return scrim;
}
function closeModal() { document.getElementById("overlay-root").innerHTML = ""; }

/* ---------- product editor ---------- */
function openProductEditor(sku) {
  if (!state.editing) return;
  const isNew = sku === "__new__";
  const p = isNew
    ? { sku: "VL-NEW-" + String(Date.now()).slice(-4), name: "", category: "tshirts", gender: "men", price: 0, salePrice: null, img: null, desc: "", sizes: SIZES_CLOTHES.slice(), colors: COLOR_SETS.mono, stock: 10, isNew: true, isBest: false, rating: 4.5, reviewsCount: 0 }
    : getProduct(sku);
  if (!p) return;

  const catOpts = VELORA_CATEGORIES.filter(c => !["men", "women"].includes(c.id))
    .map(c => '<option value="' + c.id + '"' + (p.category === c.id ? " selected" : "") + ">" + esc(c.en) + "</option>").join("");

  const scrim = openModal(
    '<div class="modal-head"><h3>' + (isNew ? t("add_product") : t("edit")) + "</h3>" +
    '<button class="icon-btn" id="mClose" style="color:var(--text)">' + icon("close") + "</button></div>" +
    '<div class="img-drop" id="mImgDrop">' + (p.img ? '<img src="' + p.img + '" alt="">' : "") + "<div>" + icon("plus") + " " + t("upload_hint") + "</div></div>" +
    '<div class="field" style="margin-top:16px"><label>' + t("name_lbl") + '</label><input id="mName" value="' + esc(p.name) + '"></div>' +
    '<div class="form-row">' +
      '<div class="field"><label>' + t("price_lbl") + '</label><input id="mPrice" type="number" min="0" value="' + p.price + '"></div>' +
      '<div class="field"><label>' + t("sale_price") + '</label><input id="mSale" type="number" min="0" value="' + (p.salePrice || "") + '"></div>' +
    "</div>" +
    '<div class="form-row">' +
      '<div class="field"><label>' + t("category") + '</label><select id="mCat">' + catOpts + "</select></div>" +
      '<div class="field"><label>' + t("gender_lbl") + '</label><select id="mGender">' +
        '<option value="men"' + (p.gender === "men" ? " selected" : "") + ">" + t("men") + "</option>" +
        '<option value="women"' + (p.gender === "women" ? " selected" : "") + ">" + t("women") + "</option></select></div>" +
    "</div>" +
    '<div class="form-row">' +
      '<div class="field"><label>' + t("stock_lbl") + '</label><input id="mStock" type="number" min="0" value="' + p.stock + '"></div>' +
      '<div class="field"><label>' + t("size") + '</label><input id="mSizes" value="' + esc(p.sizes.join(", ")) + '"><div class="hint">S, M, L, XL</div></div>' +
    "</div>" +
    '<div class="field"><label>' + t("description") + '</label><textarea id="mDesc" rows="3">' + esc(p.desc) + "</textarea></div>" +
    '<div class="field"><label>' + t("flags") + "</label>" +
      '<label class="fcheck"><input type="checkbox" id="mIsNew"' + (p.isNew ? " checked" : "") + "><span>" + t("flag_new") + "</span></label>" +
      '<label class="fcheck"><input type="checkbox" id="mIsBest"' + (p.isBest ? " checked" : "") + "><span>" + t("flag_best") + "</span></label></div>" +
    '<div style="display:flex;gap:10px;margin-top:10px">' +
      '<button class="btn btn-gold" id="mSave" style="flex:1">' + t("save") + "</button>" +
      '<button class="btn btn-outline" id="mCancel">' + t("cancel") + "</button></div>"
  );

  let newImg = p.img;
  scrim.querySelector("#mImgDrop").addEventListener("click", () => pickImage(dataUrl => {
    newImg = dataUrl;
    scrim.querySelector("#mImgDrop").innerHTML = '<img src="' + dataUrl + '" alt=""><div>' + t("change_photo") + "</div>";
    toast(t("img_updated"));
  }));
  scrim.querySelector("#mClose").addEventListener("click", closeModal);
  scrim.querySelector("#mCancel").addEventListener("click", closeModal);
  scrim.querySelector("#mSave").addEventListener("click", () => {
    const name = scrim.querySelector("#mName").value.trim();
    const price = Math.max(0, +scrim.querySelector("#mPrice").value || 0);
    const saleRaw = scrim.querySelector("#mSale").value;
    const sale = saleRaw === "" ? null : Math.max(0, +saleRaw);
    if (!name || price <= 0) { toast(t("name_lbl") + " / " + t("price_lbl"), "error"); return; }
    if (sale !== null && sale >= price) { scrim.querySelector("#mSale").classList.add("field-error"); return; }
    p.name = name; p.price = price; p.salePrice = sale;
    p.category = scrim.querySelector("#mCat").value;
    p.gender = scrim.querySelector("#mGender").value;
    p.stock = Math.max(0, +scrim.querySelector("#mStock").value || 0);
    p.sizes = scrim.querySelector("#mSizes").value.split(",").map(s => s.trim()).filter(Boolean);
    if (!p.sizes.length) p.sizes = ["One Size"];
    p.desc = scrim.querySelector("#mDesc").value.trim();
    p.isNew = scrim.querySelector("#mIsNew").checked;
    p.isBest = scrim.querySelector("#mIsBest").checked;
    p.img = newImg;
    if (isNew) state.products.unshift(p);
    persist(); CLOUD.pushState(); closeModal(); toast(t("product_saved")); route();
  });
}

function deleteProduct(sku) {
  if (!state.editing) return;
  if (!confirm(t("confirm_del"))) return;
  const i = state.products.findIndex(p => p.sku === sku);
  if (i >= 0) { state.products.splice(i, 1); persist(); CLOUD.pushState(); toast(t("product_deleted")); route(); }
}

/* ---------- admin dashboard ---------- */
let adminTab = "dash";
let needOrderSync = true;
function viewAdmin() {
  if (!isAdmin()) { location.hash = "#/"; return; }
  if (needOrderSync) { needOrderSync = false; CLOUD.pullOrders().then(() => { if (location.hash.indexOf("#/admin") === 0) viewAdmin(); }); }
  const view = document.getElementById("view");
  const revenue = state.orders.reduce((s, o) => s + o.total, 0);
  const stockCount = state.products.reduce((s, p) => s + (p.stock || 0), 0);

  let body = "";
  if (adminTab === "dash") {
    body =
      '<div class="stat-grid">' +
        '<div class="stat-card"><div class="num">' + state.products.length + '</div><div class="lbl">' + t("total_products") + "</div></div>" +
        '<div class="stat-card"><div class="num">' + state.orders.length + '</div><div class="lbl">' + t("total_orders") + "</div></div>" +
        '<div class="stat-card"><div class="num">' + fmt(revenue) + '</div><div class="lbl">' + t("total_revenue") + "</div></div>" +
        '<div class="stat-card"><div class="num">' + stockCount + '</div><div class="lbl">' + t("in_stock_lbl") + "</div></div>" +
      "</div>" +
      "<p style='color:var(--muted);font-size:.9rem'>" + t("edit_mode_on") + "</p>" +
      "<p style='font-size:.85rem;margin-top:8px'>" + (CLOUD.isOnline() ? "\ud83d\udfe2 " : "\ud83d\udd34 ") + t(CLOUD.isOnline() ? "sync_on" : "sync_off") + (CLOUD.lastSyncAt() ? " · " + CLOUD.lastSyncAt().toLocaleTimeString(state.lang === "ar" ? "ar-EG" : "en-GB") : "") + "</p>";
  } else if (adminTab === "products") {
    body =
      '<div style="margin-bottom:16px;display:flex;gap:10px;flex-wrap:wrap">' +
        '<button class="btn btn-gold btn-sm" id="admAdd">' + icon("plus") + t("add_product") + "</button>" +
        '<button class="btn btn-outline btn-sm" id="admReset">' + t("reset_demo") + "</button></div>" +
      '<div class="table-wrap"><table class="admin-table"><thead><tr>' +
        "<th></th><th>" + t("name_lbl") + "</th><th>" + t("category") + "</th><th>" + t("price_lbl") + "</th><th>" + t("stock_lbl") + "</th><th>" + t("actions") + "</th>" +
      "</tr></thead><tbody>" +
        state.products.map(p =>
          "<tr><td><div class='t-img'>" + imgHtml(p) + "</div></td>" +
          "<td><b>" + esc(p.name) + "</b><br><span style='font-size:.74rem;color:var(--muted)'>" + esc(p.sku) + "</span></td>" +
          "<td>" + esc(catName(p.category)) + "</td>" +
          "<td>" + fmt(priceOf(p)) + (p.salePrice ? " <span class='price old' style='font-size:.78rem'>" + fmt(p.price) + "</span>" : "") + "</td>" +
          "<td>" + p.stock + "</td>" +
          '<td><div class="row-actions"><button class="mini-btn" data-edit="' + p.sku + '">' + icon("pencil") + '</button><button class="mini-btn danger" data-del="' + p.sku + '">' + icon("trash") + "</button></div></td></tr>").join("") +
      "</tbody></table></div>";
  } else if (adminTab === "settings") {
    const s = state.settings || {};
    body =
      '<div class="panel-card" style="max-width:560px">' +
        "<h3 style='margin-bottom:6px'>" + t("settings") + "</h3>" +
        "<p style='color:var(--muted);font-size:.85rem;margin-bottom:18px'>" + t("settings_hint") + "</p>" +
        '<div class="field"><label>' + t("notify_email_lbl") + '</label><input id="setEmail" type="email" dir="ltr" placeholder="owner@example.com" value="' + esc(s.notify_email || "") + '"></div>' +
        "<p style='color:var(--muted);font-size:.78rem;margin:6px 0 16px'>" + t("notify_email_hint") + "</p>" +
        '<div class="field"><label>' + t("store_wa_lbl") + '</label><input id="setWa" dir="ltr" placeholder="2010XXXXXXXX" value="' + esc(s.store_whatsapp || "") + '"></div>' +
        "<p style='color:var(--muted);font-size:.78rem;margin:6px 0 16px'>" + t("store_wa_hint") + "</p>" +
        '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
          '<button class="btn btn-gold btn-sm" id="setSave">' + t("save") + "</button>" +
          '<button class="btn btn-outline btn-sm" id="setTest">' + t("send_test") + "</button>" +
        "</div>" +
      "</div>";
  } else {
    body = state.orders.length
      ? '<div class="table-wrap"><table class="admin-table"><thead><tr><th>' + t("order_num") + "</th><th>" + t("customer") + "</th><th>" + t("items") + "</th><th>" + t("total") + "</th><th>" + t("date") + "</th><th>" + t("status") + "</th></tr></thead><tbody>" +
        state.orders.map(o =>
          "<tr><td><b>" + esc(o.id) + "</b></td><td>" + esc(o.name) + "<br><span style='font-size:.76rem;color:var(--muted)' dir='ltr'>" + esc(o.phone) + "</span></td>" +
          "<td>" + (o.lines || []).reduce((s, l) => s + l.qty, 0) + "</td><td>" + fmt(o.total) + "</td>" +
          "<td style='font-size:.8rem'>" + new Date(o.at).toLocaleDateString(state.lang === "ar" ? "ar-EG" : "en-GB") + "</td>" +
          "<td><span class='badge new'>" + t("status_new") + "</span></td></tr>").join("") +
        "</tbody></table></div>"
      : '<div class="empty-state"><div class="eico">' + icon("box") + "</div><h3>" + t("orders") + "</h3><p>" + t("no_orders") + "</p></div>";
  }

  view.innerHTML =
    pageHero(t("dashboard")) +
    '<section class="section"><div class="container">' +
      '<div class="admin-tabs">' +
        '<button class="admin-tab' + (adminTab === "dash" ? " active" : "") + '" data-tab="dash">' + t("dashboard") + "</button>" +
        '<button class="admin-tab' + (adminTab === "products" ? " active" : "") + '" data-tab="products">' + t("products") + "</button>" +
        '<button class="admin-tab' + (adminTab === "orders" ? " active" : "") + '" data-tab="orders">' + t("orders") + "</button>" +
        '<button class="admin-tab' + (adminTab === "settings" ? " active" : "") + '" data-tab="settings">' + t("settings") + "</button>" +
      "</div>" + body +
    "</div></section>";

  view.querySelectorAll("[data-tab]").forEach(b => b.addEventListener("click", () => { adminTab = b.getAttribute("data-tab"); needOrderSync = true; viewAdmin(); }));
  const setSave = document.getElementById("setSave");
  if (setSave) setSave.addEventListener("click", () => {
    state.settings = Object.assign({}, state.settings, {
      notify_email: document.getElementById("setEmail").value.trim(),
      store_whatsapp: document.getElementById("setWa").value.trim()
    });
    CLOUD.pushSettings(); toast(t("settings_saved"));
  });
  const setTest = document.getElementById("setTest");
  if (setTest) setTest.addEventListener("click", () => {
    const em = document.getElementById("setEmail").value.trim();
    if (!em) { toast(t("notify_email_lbl"), "error"); return; }
    state.settings = Object.assign({}, state.settings, {
      notify_email: em,
      store_whatsapp: document.getElementById("setWa").value.trim()
    });
    CLOUD.pushSettings();
    notifyOrderEmail({ id: "TEST", at: new Date().toISOString(), name: "Test Customer", phone: "01000000000", gov: "Cairo", address: "Test address", notes: "", pay: "cod",
      lines: [{ name: "Test Product", size: "M", color: "Black", qty: 1, price: 500 }], subtotal: 500, discount: 0, shipping: 50, total: 550, coupon: null }, true);
    toast(t("test_sent"));
  });
  const addBtn = document.getElementById("admAdd");
  if (addBtn) addBtn.addEventListener("click", () => { if (!state.editing) toggleEditMode(); openProductEditor("__new__"); });
  const rst = document.getElementById("admReset");
  if (rst) rst.addEventListener("click", () => {
    state.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    state.banners = {}; state.orders = []; state.userReviews = {};
    persist(); CLOUD.pushState(); CLOUD.clearOrders(); toast(t("reset_ok")); viewAdmin();
  });
}
addRoute(/^\/admin$/, viewAdmin);


/* ---------- admin access gate ----------
   The Edit button, the admin dashboard link and the #/admin route only unlock
   through the special link (?admin). The unlock sticks to this browser via
   localStorage, so the plain preview link always opens in view-only mode.
   Use ?admin=off to lock again on this device. */
function isAdmin() {
  try { return localStorage.getItem("velora2_admin") === "1"; } catch (e) { return false; }
}
(function () {
  try {
    const q = new URLSearchParams(location.search);
    if (q.has("admin")) {
      if (q.get("admin") === "off") localStorage.removeItem("velora2_admin");
      else localStorage.setItem("velora2_admin", "1");
      history.replaceState(null, "", location.pathname + (location.hash || "#/"));
    }
  } catch (e) {}
});

/* ---------- boot ---------- */
renderApp();
CLOUD.pullState().then(ok => { if (ok) route(); });
CLOUD.pullSettings();
window.addEventListener("load", () => setTimeout(() => document.getElementById("splash").classList.add("hide"), 450));
setTimeout(() => document.getElementById("splash").classList.add("hide"), 2500);
