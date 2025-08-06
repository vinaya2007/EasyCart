window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    setTimeout(() => {
        splash.style.display = 'none';
    }, 2000);
});

const products = [
    { id: 1, name: "Smartphone", price: 550, category: "electronics", image: "https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg" },
    { id: 2, name: "Smartphone", price: 450, category: "electronics", image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg" },
    { id: 3, name: "Laptop", price: 1000, category: "electronics", image: "https://m.media-amazon.com/images/I/510uTHyDqGL._UF1000,1000_QL80_.jpg" },
    { id: 4, name: "Laptop", price: 800, category: "electronics", image: "https://4.imimg.com/data4/QU/QG/GLADMIN-13407505/images-laptop.jpg" },
    { id: 5, name: "Airpods", price: 15, category: "electronics", image: "https://i.guim.co.uk/img/media/fa36d7a2b93ef5ba25931bbfbe3e6780695ffb41/583_494_4667_2802/master/4667.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e2d5d444a5311d08e3436af90cc6c2dc" },
    { id: 6, name: "Airpods", price: 25, category: "electronics", image: "https://cdn.mos.cms.futurecdn.net/PWfmHRfjTzFrhPtSKJJXiP.jpg" },
    { id: 7, name: "Camera", price: 80, category: "electronics", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FZiskmzUJy5OAu3Z47E_Mmr1OUlbtEmPCQ&s" },
    { id: 5, name: "Charger", price: 15, category: "electronics", image: "https://deodap.in/cdn/shop/products/02_a7dbc911-ff03-4084-aeb7-7f335e3d5731.jpg?v=1738414432" },
    { id: 6, name: "Headphone", price: 20, category: "electronics", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495" },
    { id: 7, name: "Smart Watch", price: 30, category: "electronics", image: "https://cdn.mos.cms.futurecdn.net/FkGweMeB7hdPgaSFQdgsfj.jpg" },
    { id: 164, name: "Smart Watch", price: 15, category: "electronics", image: "https://rukminim2.flixcart.com/image/300/300/xif0q/smartwatch/w/g/r/-original-imagxp8utj55gjnk.jpeg" },
    { id: 76, name: "Hair Dryers", price: 20, category: "electronics", image: "https://english.cdn.zeenews.com/sites/default/files/2025/07/03/1784306-hairrrrdryeeer7.png" },
    { id: 77, name: "Hair Dryers", price: 20, category: "electronics", image: "https://pixies.in/media/catalog/product/cache/e9780188a08ae15edb442fcb34502371/0/1/01-philips-hp8142-00-hairdryer-blue-pixies-chennai.jpg" },
    { id: 78, name: "Hair Dryers", price: 24, category: "electronics", image: "https://rukminim2.flixcart.com/image/260/260/xif0q/hair-dryer/1/h/6/professional-nhp-8213-professional-nova-original-imah5ffkbkwxhgjs.jpeg?q=80&crop=false" },
    { id: 79, name: "Hair Dryers", price: 25, category: "electronics", image: "https://pickurneeds.in/cdn/shop/products/1_339d0906-8ef7-455c-b1b5-529c419d3ab3.jpg?v=1663766314" },
    { id: 8, name: "Jeans", price: 12, category: "clothing", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1736527960-untitled-3-67815035563fa.jpg?crop=0.774xw:0.830xh;0.111xw,0.0871xh&resize=980:*" },
    { id: 9, name: "Jeans", price: 10, category: "clothing", image: "https://tigc.in/cdn/shop/files/compress_0923-fhdnmcrg-43-blue__1.jpg?v=1720757717" },
    { id: 9, name: "Dress", price: 17, category: "clothing", image: "https://www.smeramart.in/cdn/shop/files/womens-sleeveless-a-line-midi-schiffli-cotton-dress-white-blue-190756.jpg?v=1739957645" },
    { id: 10, name: "Dress", price: 17, category: "clothing", image: "https://sheetalonlinefashion.in/cdn/shop/files/ug1cr_512.webp?v=1711562296"},
    { id: 15, name: "Party wear", price: 40, category: "clothing", image: "https://5.imimg.com/data5/ANDROID/Default/2021/2/GU/ZM/DO/29603120/product-jpeg-500x500.jpg" },
    { id: 17, name: "Party wear", price: 35, category: "clothing", image: "https://mahezon.in/cdn/shop/files/IMG-20241126-WA0674_800x1026_crop_center@2x.jpg?v=1732617734" },
    { id: 16, name: "Party wear", price: 55, category: "clothing", image: "https://diwalistyle.com/wp-content/uploads/2022/02/aglow-pink-color-party-wear-heavy-sequence-work-gown2-400x800.jpeg" },
    { id: 167, name: "Casual wear", price: 12, category: "clothing", image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021635720_437Wx649H_202403211908471.jpeg" },
    { id: 19, name: "Western wear set", price: 15, category: "clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqclGuWJwpdKI5V2PWX7caEMTCKAatu9lkdA&simages/clothes/dress7.jpg" },
    { id: 20, name: "Western wear", price: 10, category: "clothing", image: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000022070961_437Wx649H_202404270609001.jpeg" },
    { id: 21, name: "Blazer", price: 20, category: "clothing", image: "https://5.imimg.com/data5/SELLER/Default/2021/4/KL/MT/XH/57926816/women-blazer.jpg" },
    { id: 22, name: "Blazer", price: 19, category: "clothing", image: "https://images.meesho.com/images/products/403601623/mjln0_512.jpg" },
    { id: 23, name: "Jeggins", price: 7, category: "clothing", image: "https://imagescdn.pantaloons.com/img/app/product/7/785386-11147553.jpg?auto=format&w=450" },
    { id: 243, name: "Western wear set", price: 20, category: "clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeYUyYbFxAravYSIH8Wlx4bG_YtRfwFu0VQ&s" },
    { id: 243, name: "Western wear", price: 15, category: "clothing", image: "https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326975ia8xr.png" },
    { id: 242, name: "Western wear set", price: 12, category: "clothing", image: "https://images-cdn.ubuy.co.in/66d1e054c1404c3c8c632be2-dresstells-women-39-s-cocktail-party.jpg" },
    { id: 244, name: "Traditional wear", price: 20, category: "clothing", image: "https://img.faballey.com/images/Product/XKS03763F/d3.jpg"},
    { id: 24, name: "Traditional wear", price: 18, category: "clothing", image: "https://5.imimg.com/data5/SELLER/Default/2020/10/SO/PK/KA/9664580/ladies-designer-dress.jpg"},
    { id: 25, name: "Western wear set", price: 18, category: "clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalzD5ePTw4rHTF7Q7s6gq5rT-DLtxZIG9Fw&s" },
    { id: 26, name: "Shirt", price: 14, category: "clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNqvaSJcYdBnbW_2cr124-u8nM765K_EX6w&s" },
    { id: 31, name: "Women Handbag", price: 10, category: "Accessories", image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22423756/2024/1/8/53ef74de-0d58-460e-b0ae-3189889101cc1704713325783ExoticPUStructuredShoulderBag1.jpg" },
    { id: 32, name: "Women Handbag", price: 11, category: "Accessories", image: "https://m.media-amazon.com/images/I/71vz71m5usL._UY1000_.jpg" },
    { id: 33, name: "Women Handbag", price: 12, category: "Accessories", image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/657825837bd9df06650b994d/lbhbpu267p.jpg" },
    { id: 36, name: "Women Hairband", price: 12, category: "Accessories", image: "https://www.shopteh.in/cdn/shop/files/IMG_7083.jpg?v=1732468718" },
    { id: 34, name: "Cap", price: 3, category: "Accessories", image: "https://nutcaseshop.com/cdn/shop/files/3B_4c733c14-f15f-4963-b732-760e8cbcd9d6.jpg?v=1753771618" },
    { id: 35, name: "Cap", price: 3, category: "Accessories", image: "https://i.pinimg.com/474x/fe/4c/39/fe4c390eee3db16ce43dabd1ae97ab99.jpg" },
    { id: 37, name: "Cap", price: 4, category: "Accessories", image: "https://rukminim2.flixcart.com/image/704/844/xif0q/cap/1/r/t/free-sfc-104-highever-original-imaguwsyamkqadxb.jpeg?q=90&crop=false" },
    { id: 40, name: "Sunglass", price: 4, category: "Accessories", image: "https://m.media-amazon.com/images/I/81MPdLzZnaL._UY1100_.jpg" },
    { id: 43, name: "Sunglass", price: 5, category: "Accessories", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKG9TOibmublrgTnvrLjoIV9KXWGpTFyr35w&s" },
    { id: 44, name: "Sunglass", price: 3, category: "Accessories", image: "https://www.jiomart.com/images/product/original/rvytfblj83/piraso-uv-protection-over-sized-full-frame-black-sunglasses-women-large-product-images-rvytfblj83-6-202303301751.jpg?im=Resize=(500,630)" },
    { id: 45, name: "Men Wallet", price: 4, category: "Accessories", image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/1823100/2022/12/2/9b89ce5e-2a50-4752-b288-268392c475ae1669981847470WildHornMenBrownGenuineLeatherWallet1.jpg" },
    { id: 46, name: "Men Wallet", price: 5, category: "Accessories", image: "https://giftingstudio.in/cdn/shop/products/Giftingstudio.in_19.png?v=1629652778" },
    { id: 47, name: "Foot Wear", price: 9, category: "Footwears", image: "https://m.media-amazon.com/images/I/71eCEjZLtfL._UY1000_.jpg" },
    { id: 59, name: "Foot Wear", price: 10, category: "Footwears", image: "https://apisap.fabindia.com/medias/20226818-01.jpg?context=bWFzdGVyfGltYWdlc3wxOTMyMDJ8aW1hZ2UvanBlZ3xhR0ZoTDJoaVppODVPVGMyT0RjeU5UZ3pNVGN4TUM4eU1ESXlOamd4T0Y4d01TNXFjR2N8MDBiMzY2M2UyMjE4NjVhMzkzMzY1OTFjNWVhZTQyZGZlNGFmOTdkMjQxYTZkN2RjZGNhZmZmMjZhZjY0YzAzZQ&aio=w-400" },
    { id: 60, name: "Foot Wear", price: 7, category: "Footwears", image: "https://m.media-amazon.com/images/I/813s+PxqozL._UY1000_.jpg" },
    { id: 48, name: "Foot Wear", price: 10, category: "Footwears", image: "https://www.aroundalways.com/cdn/shop/files/HopeSandals2.jpg?v=1748329397" },
    { id: 50, name: "Foot Wear", price: 12, category: "Footwears", image: "https://www.shoetree.io/cdn/shop/files/SS23-3130L-33_BLACK_1_dab5fc54-12d8-43c0-8561-e717999a2afe.jpg?v=1736705454" },
    { id: 51, name: "Foot Wear", price: 20, category: "Footwears", image: "https://images.jdmagicbox.com/quickquotes/images_main/-lou2scbi.jpg" },
    { id: 52, name: "Foot Wear", price: 10, category: "Footwears", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFL24zjcqze1a2ohln52XIjdwUXPbwMEkLGQ&s" },
    { id: 54, name: "Boots", price: 16, category: "Footwears", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9IosleKobq3K1DjUPinoDV2q7z1_eGcWhw&s" },
    { id: 55, name: "Shoe", price: 15, category: "Footwears", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNL3FvEe-vKdugK8aC-LRhM6wGT04pDMERg&s" },
    { id: 56, name: "Boots", price: 19, category: "Footwears", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-nohyfYp-701MzmYh-Qfxtrv7ksZazDYTQ&s" },
    { id: 57, name: "Shoe", price: 11, category: "Footwears", image: "https://5.imimg.com/data5/SELLER/Default/2023/12/365430631/LB/YJ/FA/6215968/casual-women-shoes.jpg" },
    { id: 58, name: "Shoe", price: 12, category: "Footwears", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiyFpc55z-zH9dYwq_N0Xxz6ZVjyaPfVBXg&s" },
    { id: 61, name: "Necklace", price: 20, category: "Jewellery", image: "https://clara.in/cdn/shop/files/eLlKNAi_2f5fc174-78dc-49c7-a97b-cf203c8319b8_1024x1024.jpg?v=1744796409" },
    { id: 62, name: "Necklace", price: 22, category: "Jewellery", image: "https://rukminim2.flixcart.com/image/704/844/xif0q/pendant-locket/w/o/q/na-na-219-300665-pyr-fashion-original-imah2ut8mvdgfp5n.jpeg?q=90&crop=false" },
    { id: 63, name: "Necklace", price: 16, category: "Jewellery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07Vp_0SMjUcWVcVxYfFq7KyFGPYl9xzH4UA&s" },
    { id: 64, name: "Necklace", price: 18, category: "Jewellery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNSzX_6qW-uliV0WgW5i9iIkm8lzEj7Ov_Q&s" },
    { id: 65, name: "Ring", price: 15, category: "Jewellery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxzugKvcpSy59suCIUPkD5MVlbmEISU4Zeg&s" },
    { id: 66, name: "Ring", price: 20, category: "Jewellery", image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25278236/2023/9/29/2494de87-9e37-43be-915e-4ab320a1fb8d1696011555368JewelsGalaxyRoseGold-PlatedAD-StuddedAdjustableFingerRing1.jpg" },
    { id: 67, name: "Ring", price: 15, category: "Jewellery", image: "https://silverlinings.in/cdn/shop/products/Filigree_Jewellery_R054_103.jpg?v=1569101355" },
    { id: 674, name: "Ring", price: 15, category: "Jewellery", image: "https://salty.co.in/cdn/shop/files/Hc375a34cdd984a739757cd27eeaf4e3cS.jpg_720x720q50.webp" },
    { id: 673, name: "Ring", price: 15, category: "Jewellery", image: "https://5.imimg.com/data5/PG/OD/MY-7122602/fancy-rose-gold-ring-1.png" },
    { id: 680, name: "Ring", price: 10, category: "Jewellery", image: "https://accessorizelondon.in/cdn/shop/files/MA-10001458603_1_91e7d176-7ade-41f4-946e-b43c316a9156.jpg?v=1714635582" },
    { id: 679, name: "Ring", price: 15, category: "Jewellery", image: "https://mollyjewelryus.com/wp-content/uploads/2022/02/Round-Cut-Moissanite-Engagement-Ring-Set-Unique-Bridal-Set-2.jpg" },
    { id: 68, name: "Ring", price: 25, category: "Jewellery", image: "https://static.wixstatic.com/media/0f4318_8492c53d61154d549446658650b7af07~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0f4318_8492c53d61154d549446658650b7af07~mv2.jpg" },
    { id: 73, name: "Women Earrings", price: 7, category: "Jewellery", image: "https://d2ma7w4w9grdob.cloudfront.net/media/46893IND_3072.JPG" },
    { id: 734, name: "Women Earrings", price: 8, category: "Jewellery", image: "https://www.houseofjhumkas.com/cdn/shop/products/imagejpg_bda5e267-b53b-40a3-b23e-10e6d16f0517_2048x.jpg?v=1622117894" },
    { id: 735, name: "Women Earrings", price: 10, category: "Jewellery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpeoPtdtUhfYJFFXhaUVo2UkBWGJaCiw1bg&s" },
    { id: 736, name: "Women Earrings", price: 5, category: "Jewellery", image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24072026/2024/9/15/6d7c9ca7-562b-4296-8a81-921691d14ece1726418186868-LAIDA-Silver-Plated-Oxidised-Classic-Jhumkas-Earrings-633172-1.jpg" },
    { id: 731, name: "Women Earrings", price: 10, category: "Jewellery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThK2XDwFDuwdzl7ezwJHoHf4WTXj__zfeXFw&s" },
    { id: 732, name: "Women Earrings", price: 4, category: "Jewellery", image: "https://accessorizelondon.in/cdn/shop/articles/MA-28049012001_6.jpg?v=1703131701" },
    { id: 743, name: "Women Earrings", price: 6, category: "Jewellery", image: "https://blingbox.in/cdn/shop/products/designer-circular-black-jhumkas-bling-box-jewellery-30525077094588.jpg?v=1661360215" },
    { id: 749, name: "Women Earrings", price: 4, category: "Jewellery", image: "https://wearablejewells.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-27-at-21.47.29_f61bd8a3-600x600.webp" },
    {id:100, name:"Pencil", price: 0.12, category: "Stationaries", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1qb8s7eK6LlNr-YdCXFHT1p_PzoH-iU4UA&s"},
    {id:112, name:"Pencils", price: 0.7, category: "Stationaries", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdpJmojkCmx_kOthNYZkke8af6TTxeDvzQw&s"},
    {id:113, name:"Pencils", price: 1, category: "Stationaries", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEPF7XpeS_8P93akaDBRpUwZD22XKHfH0rw&s"},
    {id:101, name:"Colour Pencils", price: 2, category: "Stationaries", image: "https://m.media-amazon.com/images/I/71j94kB2nxL.jpg"},
    {id:102, name:"Colour Pencils", price: 2.3, category: "Stationaries", image: "https://www.htconline.in/images/thumbs/0011380_faber-castell-albrecht-durer-artist-water-colour-pencil-set-of-24_600.jpeg"},
    {id:103, name:"colour Pencils", price: 10, category: "https://images-cdn.ubuy.co.in/67e27a34c2a7010997139073-colored-pencil-set-zippered-case.jpg"},
    {id:104, name:"Crayons", price: 1, category: "Stationaries", image: "https://d1h5frde2m24sj.cloudfront.net/wp-content/uploads/2022/12/whatsapp-image-2020-06-24-at-8-38-09-pm-500x500-1.webp"},
    {id:105, name:"Crayons", price: 2, category: "Stationaries", image: "https://www.sitaramstationers.com/wp-content/uploads/2022/09/faber-castell-wax-crayons.jpg"},
    {id:106, name:"Pen", price: 0.12, category: "Stationaries", image: "https://www.roritoworld.com/wp-content/uploads/2024/06/B-Max-Fast-Single-450x400.png"},
    {id:107, name:"Pen", price: 0.2, category: "Stationaries", image: "https://m.media-amazon.com/images/I/71uPkyrlipL.jpg"},
    {id:108, name:"Pen", price: 2, category: "Stationaries", image: "https://m.media-amazon.com/images/I/71XmnK4NmXL._UF1000,1000_QL80_.jpg"},
    {id:110, name:"Pen", price: 0.5, category: "Stationaries", image: "https://www.jiomart.com/images/product/original/491491665/flair-studio-blue-gel-pen-pack-of-5-product-images-o491491665-p590032554-0-202308122118.jpg?im=Resize=(1000,1000)"},
    {id:111, name:"Pen", price: 2.5, category: "Stationaries", image: "https://www.giftoo.in/cdn/shop/files/1_c6f4d552-fd8a-4747-b9da-30497a5e4ea3.jpg?v=1717844365"},
    {id:109, name:"Pen", price: 0.3, category: "Stationaries", image: "https://offimart.com/7354-large_default/flair-woody-ball-pen-07mmbluepack-of-10.jpg"},
    {id:115, name:"Erasers", price: 1, category: "Stationaries", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEfMO3ue2-fcTF0z6sHb3MCBcXdCtnQHTIg&s"},
    {id:116, name:"Erasers", price: 1.2, category: "Stationaries", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbT0BagEgq_UIqFUmcx_04i59XhID-BSZYg&s"},
    {id:117, name:"Erasers", price: 2, category: "Stationaries", image: "https://5.imimg.com/data5/SELLER/Default/2023/1/TE/SK/FN/141702072/cute-kawaii-cartoon-roller-eraser-in-a-glitter-cap-pencil-eraser-set-stationery-for-boys-and-girls-500x500.jpg"},
    {id:118, name:"Erasers", price: 1, category: "Stationaries", image: "https://berrymuch.in/cdn/shop/files/rn-image_picker_lib_temp_a39cf1c5-10d8-4192-8b67-e012f56d800a.jpg?v=1702541468&width=1445"},
    {id:119, name:"Erasers", price: 2.5, category: "Stationaries", image: "https://www.giftoo.in/cdn/shop/files/O1CN01UYr0zZ1qGOfjsRADt__2218447895468-0-cib.jpg?v=1728884433"}
]


const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const sortBy = document.getElementById('sortBy');

function displayProducts(productArray) {
    productList.innerHTML = '';
    productArray.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3 style = "color: black";>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: <b>$${product.price}</b></p>
            </div>
        `;
    });
}

function filterAndSort() {
    let filtered = [...products];

    const selectedCategory = categoryFilter.value.toLowerCase();
    if (selectedCategory !== "all") {
        filtered = filtered.filter(p => p.category.toLowerCase() === selectedCategory);
    }

    const sortValue = sortBy.value;
    if (sortValue === "lowToHigh") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === "highToLow") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === "az") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "default") {
    }

    displayProducts(filtered);
}

categoryFilter.addEventListener('change', filterAndSort);
sortBy.addEventListener('change', filterAndSort);

displayProducts(products);
