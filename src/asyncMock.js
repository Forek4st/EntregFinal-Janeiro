const products = [
  {
    id: 1,
    name: "iPad Pro 13″ (M4) Wi‑Fi",
    description:
      "The iPad Pro 13″ (M4) Wi‑Fi features an Ultra Retina XDR display that offers stunning visuals with high brightness and contrast. Powered by the M4 chip, it delivers exceptional performance for multitasking, gaming, and creative work. The 12 MP camera ensures high-quality photos and videos, while Face ID provides secure authentication. This model is also compatible with the Apple Pencil Pro, making it perfect for artists and note-takers.",
    price: 1625,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_pro_13_m4__d1cups0n7loy_large.jpg",
  },
  {
    id: 2,
    name: "iPad Pro 13″ (M4) Wi‑Fi + Cellular",
    description:
      "The iPad Pro 13″ (M4) Wi‑Fi + Cellular offers all the features of the Wi‑Fi model, with the added benefit of cellular connectivity. Stay connected on the go with 5G support, and enjoy the same Ultra Retina XDR display, M4 chip performance, and 12 MP camera. Face ID ensures your device is secure, and compatibility with the Apple Pencil Pro makes it ideal for creative professionals.",
    price: 1875,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_pro_13_m4__d1cups0n7loy_large.jpg",
  },
  {
    id: 3,
    name: "iPad Pro 11″ (M4) Wi‑Fi",
    description:
      "The iPad Pro 11″ (M4) Wi‑Fi combines portability with power. Featuring an Ultra Retina XDR display, the M4 chip, and a 12 MP camera, this iPad is perfect for both work and play. Face ID provides secure access, and the device is compatible with the Apple Pencil Pro, making it a great choice for artists and professionals who need a powerful, yet compact device.",
    price: 1250,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_pro_11_4th_gen__ebhyx4a43ksy_large.jpg",
  },
  {
    id: 4,
    name: "iPad Pro 11″ (M4) Wi‑Fi + Cellular",
    description:
      "The iPad Pro 11″ (M4) Wi‑Fi + Cellular offers the same powerful features as the Wi‑Fi model, with the added benefit of cellular connectivity. Enjoy the Ultra Retina XDR display, M4 chip performance, and 12 MP camera, all while staying connected on the go with 5G support. Face ID ensures your device is secure, and compatibility with the Apple Pencil Pro makes it ideal for creative professionals.",
    price: 1500,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_pro_11_4th_gen__ebhyx4a43ksy_large.jpg",
  },
  {
    id: 5,
    name: "iPad Air 13″ (M2) Wi‑Fi",
    description:
      "The iPad Air 13″ (M2) Wi‑Fi features a Liquid Retina display that offers vibrant colors and sharp details. Powered by the M2 chip, it delivers impressive performance for everyday tasks and creative work. The 12 MP camera ensures high-quality photos and videos, while Touch ID provides secure authentication. This model is also compatible with the Apple Pencil Pro, making it perfect for artists and note-takers.",
    price: 975,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_air_13_m2__gnlpkp91wdim_large_2x.jpg",
  },
  {
    id: 6,
    name: "iPad Air 13″ (M2) Wi‑Fi + Cellular",
    description:
      "The iPad Air 13″ (M2) Wi‑Fi + Cellular offers all the features of the Wi‑Fi model, with the added benefit of cellular connectivity. Stay connected on the go with 5G support, and enjoy the same Liquid Retina display, M2 chip performance, and 12 MP camera. Touch ID ensures your device is secure, and compatibility with the Apple Pencil Pro makes it ideal for creative professionals.",
    price: 1150,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_air_13_m2__gnlpkp91wdim_large_2x.jpg",
  },
  {
    id: 7,
    name: "iPad Air 11″ (M2) Wi‑Fi",
    description:
      "The iPad Air 11″ (M2) Wi‑Fi combines portability with power. Featuring a Liquid Retina display, the M2 chip, and a 12 MP camera, this iPad is perfect for both work and play. Touch ID provides secure access, and the device is compatible with the Apple Pencil Pro, making it a great choice for artists and professionals who need a powerful, yet compact device.",
    price: 725,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_pro_11_3rd_gen__cobq8298crrm_large_2x.jpg",
  },
  {
    id: 8,
    name: "iPad Air 11″ (M2) Wi‑Fi + Cellular",
    description:
      "The iPad Air 11″ (M2) Wi‑Fi + Cellular offers the same powerful features as the Wi‑Fi model, with the added benefit of cellular connectivity. Enjoy the Liquid Retina display, M2 chip performance, and 12 MP camera, all while staying connected on the go with 5G support. Touch ID ensures your device is secure, and compatibility with the Apple Pencil Pro makes it ideal for creative professionals.",
    price: 900,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_pro_11_3rd_gen__cobq8298crrm_large_2x.jpg",
  },
  {
    id: 9,
    name: "iPad (10th Gen) Wi‑Fi",
    description:
      "The iPad (10th Gen) Wi‑Fi features a Liquid Retina display that offers vibrant colors and sharp details. Powered by the A14 Bionic chip, it delivers impressive performance for everyday tasks and creative work. The 12 MP camera ensures high-quality photos and videos, while Touch ID provides secure authentication. This model is also compatible with the Apple Pencil (USB‑C), making it perfect for artists and note-takers.",
    price: 425,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_pro_9_7__bslhvje30w5e_large_2x.jpg",
  },
  {
    id: 10,
    name: "iPad (10th Gen) Wi‑Fi + Cellular",
    description:
      "The iPad (10th Gen) Wi‑Fi + Cellular offers all the features of the Wi‑Fi model, with the added benefit of cellular connectivity. Stay connected on the go with 5G support, and enjoy the same Liquid Retina display, A14 Bionic chip performance, and 12 MP camera. Touch ID ensures your device is secure, and compatibility with the Apple Pencil (USB‑C) makes it ideal for creative professionals.",
    price: 600,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_pro_9_7__bslhvje30w5e_large_2x.jpg",
  },
  {
    id: 11,
    name: "iPad mini (A17 Pro) Wi‑Fi",
    description:
      "The iPad mini (A17 Pro) Wi‑Fi features a Liquid Retina display that offers vibrant colors and sharp details. Powered by the A17 Pro chip, it delivers impressive performance for everyday tasks and creative work. The 12 MP camera ensures high-quality photos and videos, while Touch ID provides secure authentication. This model is also compatible with the Apple Pencil Pro, making it perfect for artists and note-takers.",
    price: 600,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_mini_a17pro__ez38e8ktwuuu_large.jpg",
  },
  {
    id: 12,
    name: "iPad mini (A17 Pro) Wi‑Fi + Cellular",
    description:
      "The iPad mini (A17 Pro) Wi‑Fi + Cellular offers all the features of the Wi‑Fi model, with the added benefit of cellular connectivity. Stay connected on the go with 5G support, and enjoy the same Liquid Retina display, A17 Pro chip performance, and 12 MP camera. Touch ID ensures your device is secure, and compatibility with the Apple Pencil Pro makes it ideal for creative professionals.",
    price: 775,
    category: "Tablets",
    image:
      "https://www.apple.com/v/ipad/compare/ah/images/overview/techspecs_ipad_mini_a17pro__ez38e8ktwuuu_large.jpg",
  },
  {
    id: 13,
    name: "MacBook Air 13” (M3)",
    description:
      "The MacBook Air 13” (M3) features a 13.6″ Liquid Retina display that offers stunning visuals with high brightness and contrast. Powered by the Apple M3 chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes Touch ID for secure authentication and offers up to 2 TB of storage, making it perfect for professionals and students alike.",
    price: 1299,
    category: "Laptops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_macbook_air_m3_15__ep89l3ndmd2e_large_2x.jpg",
  },
  {
    id: 14,
    name: "MacBook Air 13” (M2)",
    description:
      "The MacBook Air 13” (M2) features a 13.6″ Liquid Retina display that offers stunning visuals with high brightness and contrast. Powered by the Apple M2 chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes Touch ID for secure authentication and offers up to 2 TB of storage, making it perfect for professionals and students alike.",
    price: 1150,
    category: "Laptops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_macbook_air_m3_15__ep89l3ndmd2e_large_2x.jpg",
  },
  {
    id: 15,
    name: "MacBook Air 15” (M3)",
    description:
      "The MacBook Air 15” (M3) features a 15.3″ Liquid Retina display that offers stunning visuals with high brightness and contrast. Powered by the Apple M3 chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes Touch ID for secure authentication and offers up to 2 TB of storage, making it perfect for professionals and students alike.",
    price: 1600,
    category: "Laptops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_macbook_air_m3_15__ep89l3ndmd2e_large_2x.jpg",
  },
  {
    id: 16,
    name: "MacBook Pro 14” (M4)",
    description:
      "The MacBook Pro 14” (M4) features a 14.2″ Liquid Retina XDR display that offers stunning visuals with high brightness and contrast. Powered by the Apple M4 chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes Touch ID for secure authentication and offers up to 2 TB of storage, making it perfect for professionals and students alike.",
    price: 1900,
    category: "Laptops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_macbook_pro_14_m4__gnf5h44gp7qu_large_2x.jpg",
  },
  {
    id: 17,
    name: "MacBook Pro 14” (M4 Pro or M4 Max)",
    description:
      "The MacBook Pro 14” (M4 Pro or M4 Max) features a 14.2″ Liquid Retina XDR display that offers stunning visuals with high brightness and contrast. Powered by the Apple M4 Pro or M4 Max chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes Touch ID for secure authentication and offers up to 8 TB of storage, making it perfect for professionals and students alike.",
    price: 2400,
    category: "Laptops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_macbook_pro_14_m4__gnf5h44gp7qu_large_2x.jpg",
  },
  {
    id: 18,
    name: "MacBook Pro 16” (M4 Pro or M4 Max)",
    description:
      "The MacBook Pro 16” (M4 Pro or M4 Max) features a 16.2″ Liquid Retina XDR display that offers stunning visuals with high brightness and contrast. Powered by the Apple M4 Pro or M4 Max chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes Touch ID for secure authentication and offers up to 8 TB of storage, making it perfect for professionals and students alike.",
    price: 3000,
    category: "Laptops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_macbook_pro_14_m4__gnf5h44gp7qu_large_2x.jpg",
  },
  {
    id: 19,
    name: "iMac (M4, two ports)",
    description:
      "The iMac (M4, two ports) features a 24″ Retina 4.5K display that offers stunning visuals with high brightness and contrast. Powered by the Apple M4 chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes up to 1 TB of storage, making it perfect for professionals and students alike.",
    price: 1600,
    category: "Desktops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_imac_24_m4__cusxw6p9ffgy_large_2x.jpg",
  },
  {
    id: 20,
    name: "iMac (M4, four ports)",
    description:
      "The iMac (M4, four ports) features a 24″ Retina 4.5K display that offers stunning visuals with high brightness and contrast. Powered by the Apple M4 chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes up to 2 TB of storage, making it perfect for professionals and students alike.",
    price: 1850,
    category: "Desktops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_imac_24_m4__cusxw6p9ffgy_large_2x.jpg",
  },
  {
    id: 21,
    name: "Mac mini (M4 or M4 Pro)",
    description:
      "The Mac mini (M4 or M4 Pro) features the Apple M4 or M4 Pro chip, delivering exceptional performance for multitasking, gaming, and creative work. The device includes up to 8 TB of storage, making it perfect for professionals and students alike.",
    price: 725,
    category: "Desktops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_mac_mini_m4__d16yr1jj7x26_large_2x.jpg",
  },
  {
    id: 22,
    name: "Mac Studio (M2 Max or M2 Ultra)",
    description:
      "The Mac Studio (M2 Max or M2 Ultra) features the Apple M2 Max or M2 Ultra chip, delivering exceptional performance for multitasking, gaming, and creative work. The device includes up to 8 TB of storage, making it perfect for professionals and students alike.",
    price: 2500,
    category: "Desktops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_mac_studio__buxgc3l6pw6a_large_2x.jpg",
  },
  {
    id: 23,
    name: "Mac Pro (M2 Ultra)",
    description:
      "The Mac Pro (M2 Ultra) features the Apple M2 Ultra chip, delivering exceptional performance for multitasking, gaming, and creative work. The device includes up to 8 TB of storage, making it perfect for professionals and students alike.",
    price: 8250,
    category: "Desktops",
    image:
      "https://www.apple.com/v/mac/compare/ab/images/overview/all_models_mac_pro__ducir600vfiq_large_2x.jpg",
  },
  {
    id: 24,
    name: "iPhone 16 Pro",
    description:
      "The iPhone 16 Pro features a 48 MP Fusion camera with 5x telephoto, offering stunning photo and video capabilities. Powered by the A18 Pro chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes Face ID for secure authentication and offers a sleek, modern design.",
    price: 1300,
    category: "Smartphones",
    image:
      "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pro_black_titanium__ffs0ixp5spym_large_2x.jpg",
  },
  {
    id: 25,
    name: "iPhone 16",
    description:
      "The iPhone 16 features a 48 MP Fusion camera with 2x telephoto, offering stunning photo and video capabilities. Powered by the A18 chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes Face ID for secure authentication and offers a sleek, modern design.",
    price: 1000,
    category: "Smartphones",
    image:
      "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_black__ghc0maxm7y62_large_2x.jpg",
  },
  {
    id: 26,
    name: "iPhone 15",
    description:
      "The iPhone 15 features a 48 MP main camera, offering stunning photo and video capabilities. Powered by the A16 Bionic chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes Face ID for secure authentication and offers a sleek, modern design.",
    price: 875,
    category: "Smartphones",
    image:
      "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone15_black__dctrrofz8vwy_large_2x.jpg",
  },
  {
    id: 27,
    name: "iPhone 14",
    description:
      "The iPhone 14 features a 12 MP main camera, offering stunning photo and video capabilities. Powered by the A15 Bionic chip, it delivers exceptional performance for multitasking, gaming, and creative work. The device includes Face ID for secure authentication and offers a sleek, modern design.",
    price: 750,
    category: "Smartphones",
    image:
      "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone14_red__ebv1f0m4gwmu_large_2x.jpg",
  },
  {
    id: 28,
    name: "iPhone SE",
    description:
      "The iPhone SE features a compact 4.7-inch design with the powerful A15 Bionic chip, delivering exceptional performance for multitasking, gaming, and creative work. The device includes Touch ID for secure authentication and offers a sleek, modern design.",
    price: 525,
    category: "Smartphones",
    image:
      "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphoneSE_3rd_gen_red__p9edsyvyp6a2_large_2x.jpg",
  },
  {
    id: 29,
    name: "Apple Watch SE (2nd generation)",
    description:
      "The Apple Watch SE (2nd generation) features a Retina display and the S8 SiP chip, offering impressive performance and battery life. The device includes fall detection, GPS, and up to 18 hours of battery life, making it perfect for fitness enthusiasts and everyday use.",
    price: 249,
    category: "Smartwatches",
    image:
      "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphoneSE_3rd_gen_starlight__bvj733gg7hde_large_2x.jpg",
  },
  {
    id: 30,
    name: "Apple Watch Series 10",
    description:
      "The Apple Watch Series 10 features a larger display that provides more room for notifications, apps, and other content. Powered by the new S10 SiP chip, it offers improved performance and efficiency. This model includes new health and wellness features such as advanced sleep tracking, blood oxygen monitoring, and ECG. With up to 20 hours of battery life, it ensures you stay connected and healthy throughout the day. The watch is also water-resistant up to 50 meters, making it perfect for swimming and other water activities.",
    price: 499,
    category: "Smartwatches",
    image:
      "https://www.apple.com/v/watch/compare/af/images/overview/compare_watch_series_10_aluminum_rose_gold__fafcjpggtey6_large_2x.jpg",
  },
  {
    id: 31,
    name: "Apple Watch Ultra 2",
    description:
      "The Apple Watch Ultra 2 is designed for extreme sports and outdoor adventures. It features a brighter display for better visibility in direct sunlight and a dual-frequency GPS for more accurate location tracking. The watch is built with a rugged titanium case and is water-resistant up to 100 meters. It includes advanced health and fitness features such as heart rate monitoring, blood oxygen levels, and ECG. With up to 36 hours of battery life, it can keep up with your most demanding activities.",
    price: 799,
    category: "Smartwatches",
    image:
      "https://www.apple.com/v/watch/compare/af/images/overview/compare_watch_ultra_2_titanium_black__b0uhmfldoiqa_large_2x.jpg",
  },
  {
    id: 32,
    name: "Apple Watch Series 9",
    description:
      "The Apple Watch Series 9 features an Always-On Retina display that ensures you can see your watch face at all times without raising your wrist. Powered by the S9 SiP chip, it offers smooth performance and improved battery life. The new double-tap control allows you to interact with your watch more easily. It includes comprehensive health and fitness tracking features such as heart rate monitoring, blood oxygen levels, and sleep tracking. With up to 18 hours of battery life, it is designed to keep up with your daily routine.",
    price: 399,
    category: "Smartwatches",
    image:
      "https://www.apple.com/v/watch/compare/af/images/overview/compare_watch_series_9_aluminum_midnight__e39g2cjw570i_large_2x.jpg",
  },
  {
    id: 33,
    name: "Apple Watch Ultra",
    description:
      "The original Apple Watch Ultra is built for durability and performance. It features a titanium case that is both lightweight and strong, and it is water-resistant up to 100 meters. The watch includes advanced health and fitness tracking features such as heart rate monitoring, blood oxygen levels, and ECG. With up to 36 hours of battery life, it is designed to last through your toughest workouts and adventures. The Ultra model also includes dual-frequency GPS for more accurate location tracking.",
    price: 699,
    category: "Smartwatches",
    image:
      "https://www.apple.com/v/watch/compare/af/images/overview/compare_watch_ultra_titanium_natural__fbfk23k9fo6e_large_2x.jpg",
  },
  {
    id: 34,
    name: "Apple Watch Series 8",
    description:
      "The Apple Watch Series 8 includes a temperature sensor that helps you track your body temperature throughout the day. It also features crash detection, which can automatically alert emergency services if you are involved in a serious accident. Powered by the S8 SiP chip, it offers smooth performance and improved battery life. The Always-On Retina display ensures you can see your watch face at all times. With up to 18 hours of battery life, it is designed to keep up with your daily routine.",
    price: 349,
    category: "Smartwatches",
    image:
      "https://www.apple.com/v/watch/compare/af/images/overview/compare_watch_series_8_aluminum_midnight__e2ksj23ggh0m_large_2x.jpg",
  },
  {
    id: 35,
    name: "AirPods 4",
    description:
      "The AirPods 4 offer up to 5 hours of audio on a single charge, and up to 30 hours of audio with the charging case. The USB-C charging case provides fast and convenient charging. These earbuds feature high-quality sound with deep bass and clear highs. They are designed for comfort and a secure fit, making them perfect for all-day wear. The AirPods 4 also include touch controls for easy access to music playback and calls.",
    price: 150,
    category: "Headphones",
    image:
      "https://www.apple.com/v/airpods/compare/g/images/overview/allmodels_airpods_4__bdts0cg3zlgy_large_2x.jpg",
  },
  {
    id: 36,
    name: "AirPods 4 Pro",
    description:
      "The AirPods 4 Pro feature high noise reduction and adaptive audio, providing an immersive listening experience. They offer up to 6 hours of audio on a single charge, and up to 30 hours of audio with the charging case. The transparency mode allows you to hear your surroundings while listening to music. These earbuds are designed for comfort and a secure fit, making them perfect for all-day wear. The AirPods 4 Pro also include touch controls for easy access to music playback and calls.",
    price: 215,
    category: "Headphones",
    image:
      "https://www.apple.com/v/airpods/compare/g/images/overview/allmodels_airpods_4__bdts0cg3zlgy_large_2x.jpg",
  },
  {
    id: 37,
    name: "AirPods Pro 2",
    description:
      "The AirPods Pro 2 offer high noise reduction and adaptive audio, providing an immersive listening experience. They feature transparency mode, which allows you to hear your surroundings while listening to music. With up to 6 hours of audio on a single charge, and up to 30 hours of audio with the charging case, they are designed for all-day use. The AirPods Pro 2 include touch controls for easy access to music playback and calls. They are also water and sweat resistant, making them perfect for workouts and outdoor activities.",
    price: 290,
    category: "Headphones",
    image:
      "https://www.apple.com/v/airpods/compare/g/images/overview/allmodels_airpods_pro_magsafe_chargingcase__bo9p1zbw5hjm_large_2x.jpg",
  },
  {
    id: 38,
    name: "AirPods Max",
    description:
      "The AirPods Max offer pro-level active noise cancellation and transparency mode, providing an immersive listening experience. They feature personalized spatial audio with dynamic head tracking, delivering a theater-like sound experience. Powered by the H1 chip, they offer smooth performance and always-on 'Hey Siri' functionality. With up to 20 hours of audio on a single charge, they are designed for all-day use. The AirPods Max are built with premium materials and a comfortable fit, making them perfect for long listening sessions.",
    price: 650,
    category: "Headphones",
    image:
      "https://www.apple.com/v/airpods/compare/g/images/overview/allmodels_airpods_max_smartcase__dlei2dqu21yu_large_2x.jpg",
  },
];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Mezclar los productos antes de exportarlos
const shuffledProducts = shuffle(products);

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shuffledProducts);
    }, 0);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = shuffledProducts.find((product) => product.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 0);
  });
};
export const getProductByCategory = (categories) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productsByCategories = shuffledProducts.filter((product) =>
        categories.includes(product.category)
      );
      if (productsByCategories.length > 0) {
        resolve(productsByCategories);
      } else {
        reject(new Error("Products not found"));
      }
    }, 0);
  });
};
