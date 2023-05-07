const productData =[
  {
    id: 1,
    name: "Nike Shirt",
    brand: "Nike",
    price: 90,
    size: "Medium",
    type: "Shirt",
    image: "https://cdna.lystit.com/photos/macys/2359949-Black-0f5a1a0a-.jpeg",
    link :"https://nike.com"
  },
  {
    id: 2,
    name: "Nike Pants",
    brand: "Nike",
    price: 130,
    size: "X-Large",
    type: "Pants",
    image:"https://th.bing.com/th/id/R.d38ee14a17bf343848227755197b48be?rik=mf9ibmTG%2f1FXNA&riu=http%3a%2f%2fwww.wigglestatic.com%2fproduct-media%2f5360099603%2fNike-Shield-Pant-HO14-Trousers-Run-Black-Silver-Q4-14-620155-010-2.jpg%3fw%3d2000%26h%3d2000%26a%3d7&ehk=0AUaWvC0CqLRhtBzkie7M2Ym0U0XbAWueLsBiIbN108%3d&risl=&pid=ImgRaw&r=0",
    link :"https://nike.com"
  },
  {
    id: 3,
    name: "Nike Shorts",
    brand: "Nike",
    price: 70,
    size: "Large",
    type: "Shorts",
    image: "https://th.bing.com/th/id/R.70bffb26b01dab588b63267349893d00?rik=ay3QrvHY%2b%2fTRXw&pid=ImgRaw&r=0",
    link :"https://nike.com"
  },
  {
    id: 4,
    name: "Puma Shirt",
    brand: "Puma",
    price: 90,
    size: "Medium",
    type: "Shirt",
    image:"https://th.bing.com/th/id/R.8284a5d5a9cb8297d795e7966a801cc9?rik=vOOk8jLi1utXLA&riu=http%3a%2f%2fimages.sportsdirect.com%2fimages%2fimgzoom%2f59%2f59701340_xxl.jpg&ehk=w3SXTid4vBxRpJtlAF3PRR45%2bvv35K4j%2b%2fWC%2fQWIST8%3d&risl=&pid=ImgRaw&r=0",
    link :"https://puma.com"
  },
  {
    id: 5,
    name: "Puma Pants",
    brand: "Puma",
    price: 110,
    size: "Large",
    type: "Pants",
    image:"https://th.bing.com/th/id/R.77d6d1643225b6a9dbf4a143f8067248?rik=iU76bzzQE7nl%2fw&pid=ImgRaw&r=0",
    link :"https://puma.com"
  },
  {
    id: 6,
    name: "Puma Shorts",
    brand: "Puma",
    price: 50,
    size: "Small",
    type: "Shorts",
    image:"https://th.bing.com/th/id/R.254a867e2a2aa533364aaf5858ad7a51?rik=%2bAus4B8MtpvcLg&riu=http%3a%2f%2fwww.wigglestatic.com%2fproduct-media%2f6360119304%2fPuma-Women-s-Blast-3-Short-SS17-Running-Shorts-Puma-Black-SS17-51507101-8.jpg%3fw%3d1600%26h%3d1600%26a%3d7&ehk=EWP2tNa4RiKALortixjy43NnVLJR9Q7O2fuPHZzUsog%3d&risl=&pid=ImgRaw&r=0",
    link :"https://puma.com"
  },
  {
    id: 7,
    name: "Reebook Shirt",
    brand: "Reebook",
    price: 90,
    size: "Small",
    type: "Shirt",
    image:"https://th.bing.com/th/id/R.1e14dba09c2e2ae9cdf4103c510bf969?rik=M97w2tZ9ZfrgXg&pid=ImgRaw&r=0",
    link :"https://reebook.com"
  },
  {
    id: 8,
    name: "Reebook Pants",
    brand: "Reebook",
    price: 70,
    size: "Large",
    type: "Pants",
    image:"https://th.bing.com/th/id/OIP.ckUJTCPVXfhFhqb_AscfawHaHa?pid=ImgDet&rs=1",
    link :"https://reebook.com"

  },
  {
    id: 9,
    name: "Reebook Shorts",
    brand: "Reebook",
    price: 60,
    size: "X-Large",
    type: "Shorts",
    image:"https://th.bing.com/th/id/R.dbc37593923d52c42719a705a52eeda3?rik=%2fGi8cOH1xGD2LQ&pid=ImgRaw&r=0",
    link :"https://reebook.com"

  },
  {
    id: 10,
    name: "Reebook Shorts",
    brand: "Reebook",
    price: 65,
    size: "Medium",
    type: "Shorts",
    image:"https://th.bing.com/th/id/R.dbc37593923d52c42719a705a52eeda3?rik=%2fGi8cOH1xGD2LQ&pid=ImgRaw&r=0",
    link :"https://reebook.com"

  },
  {
    id: 11,
    name: "Addidas Shirt",
    brand: "Addidas",
    price: 85,
    size: "Medium",
    type: "Shirt",
    image:"https://th.bing.com/th/id/OIP.nH5B-MWJ7NSxqchvGIqHLAHaHa?pid=ImgDet&rs=1",
    link:"https://addidas.com"
  },
  {
    id: 12,
    name: "Addidas Pants",
    brand: "Addidas",
    price: 75,
    size: "Small",
    type: "Pants",
    image:"https://th.bing.com/th/id/OIP.rfrbm8d24LZZ3R1-NhIJsgHaLH?pid=ImgDet&rs=1",
    link:"https://addidas.com"
  },
  {
    id: 13,
    name: "Addidas Shorts",
    brand: "Addidas",
    price: 55,
    size: "Large",
    type: "Shorts",
    image:"https://www.tennisnuts.com/images/product/full/g_AA0671_APP_photo_front.jpg",
    link:"https://addidas.com"
  },
  {
    id: 14,
    name:"Allbirds Shirt",
    brand: "Allbirds",
    price: 45,
    size: "Medium",
    type: "Shirt",
    image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    link:"https://allbirds.com"
  },
  {
    id: 15,
    name:"Allbirds Shorts",
    brand: "Allbirds",
    price: 35,
    size: "Large",
    type: "Shorts",
    image:"https://th.bing.com/th/id/OIP.UM5tIu0_QlZ8PXHfA6jWEAHaHa?pid=ImgDet&rs=1",
    link:"https://allbrids.com"
  },
  {
    id: 16,
    name:"Allbirds Pants",
    brand: "Allbirds",
    price: 55,
    size: "Small",
    type: "Pants",
    image:"https://m.media-amazon.com/images/I/61YhDYiGlJL._AC_UX342_.jpg",
    link:"https://allbirds.com"
  }

]

export default productData;