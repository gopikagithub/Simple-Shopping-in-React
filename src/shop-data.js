 const SHOP_DATA = [
    {
      title: 'Hats',
      items:[
        {
          "id": 1,
          "name": "Brown Brim",
          "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
          "price": 25
        },
        {
          "id": 2,
          "name": "Blue Beanie",
          "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
          "price": 18
        },
        {
          "id": 3,
          "name": "Brown Cowboy",
          "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
          "price": 35
        },
        {
          "id": 4,
          "name": "Grey Brim",
          "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
          "price": 25
        },
        {
          "id": 5,
          "name": "Green Beanie",
          "imageUrl": "https://lookastic-production.s3.amazonaws.com/article/photo/80/original.jpg",
          "price": 18
        },
        {
          "id": 6,
          "name": "Palm Tree Cap",
          "imageUrl": "https://i.pinimg.com/originals/fc/e1/93/fce193eff44297c713a59c46f2942e92.jpg",
          "price": 14
        },
        {
          "id": 7,
          "name": "Red Beanie",
          "imageUrl": "https://th.bing.com/th/id/OIP.VqGnsNjAE2iYMDqxFl8YNwHaHa?pid=ImgDet&rs=1",
          "price": 18
        },
        {
          "id": 8,
          "name": "Wolf Cap",
          "imageUrl": "https://img.hatshopping.com/Lone-Wolf-Trucker-Cap-by-Goorin-Bros-.51214_1.jpg",
          "price": 14
        },
        {
          "id": 9,
          "name": "Blue Snapback",
          "imageUrl": "https://i.pinimg.com/originals/f9/1e/bf/f91ebf1d47d37115eb662f9fbba8bbd0.jpg",
          "price": 16
        }
      ]
      ,
    },
    {
      title: 'Sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://th.bing.com/th/id/R.fb74678e7b87e09f26b977420e3c3632?rik=7oKR6RBx4K5IzQ&riu=http%3a%2f%2fjustfreshkicks.com%2fwp-content%2fuploads%2f2018%2f11%2fdownload-1.png&ehk=Y8xOzqDhY3LcrJ8adlOA3GUhfDM69%2bZYYXb4hNn4EUA%3d&risl=&pid=ImgRaw&r=0',
          price: 220,
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://sneakerbardetroit.com/wp-content/uploads/2019/05/adidas-Yeezy-Boost-350-V2-Semi-Frozen-1.png',
          price: 280,
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'https://th.bing.com/th/id/R.ac5e1cbc70a3aa128b66327727d9d71e?rik=KJ1HhN9DHddEhg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f13%2fBlack-Converse-Shoes-PNG-Pic.png&ehk=Lw2PsxOlXf5s5JH9d8kwozJ%2bFXik0Bf%2baiyw1y%2fyJGY%3d&risl=&pid=ImgRaw&r=0',
          price: 110,
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: 'https://th.bing.com/th/id/OIP.JykLDAGuqE94-IAZ58cXXQHaHa?pid=ImgDet&rs=1',
          price: 160,
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://th.bing.com/th/id/R.9239920ea763d11b056cba38a2e6d2f1?rik=Qtu0tkueLYZzGA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fapttap%2fnike-classic%2f512%2fnike-classic-shoe-red-icon.png&ehk=x0nrza8RCsPAZWb7YF7oF4IFeUDXnyd6assV73eS3H4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
          price: 160,
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://th.bing.com/th/id/R.88966eb5b76a681d5d4d367f15ee7f4b?rik=i8hMjF%2fjg9Xv5g&pid=ImgRaw&r=0',
          price: 160,
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://th.bing.com/th/id/R.04e693bbc3d3bf558c684a5fc09ed34e?rik=OMSSg%2bmye5rMzQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f1%2fNike-Shoes-PNG-Transparent-Image.png&ehk=OyUHay7AJLx7iTroLvZQuL3R5PQOmeYhwzVRswN715o%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
          price: 190,
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://th.bing.com/th/id/R.70584e4703fb00469f2b07369748f5e8?rik=a0GsQIBBf4j6vg&pid=ImgRaw&r=0',
          price: 200,
        },
      ],
    },
    {
      title: 'Jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: 'https://th.bing.com/th/id/R.698dcfec4e37ac2c546eb26f477e5e66?rik=6e58LXIKZXwDwQ&pid=ImgRaw&r=0',
          price: 125,
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://th.bing.com/th/id/R.5fb3724c4a16e72ec8f3e9cbf6f60a03?rik=FyrfAV%2fHSx1JMg&riu=http%3a%2f%2fblog.luulla.com%2fwp-content%2fuploads%2f2016%2f12%2fDenim-Jacket-1.png&ehk=WmPBSNTWsjWPh%2fuUNOqrjfVmGwiI8scPMio%2bMc%2bqf6M%3d&risl=&pid=ImgRaw&r=0',
          price: 90,
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://th.bing.com/th/id/R.2b1640f9a708ab18b843640dfd847a55?rik=GzX0WL99PfV%2byw&pid=ImgRaw&r=0',
          price: 90,
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: 'https://th.bing.com/th/id/R.804b887ef52bdfa0ede25171ce18bfbf?rik=X9Do%2fTo3xxDEpA&pid=ImgRaw&r=0',
          price: 165,
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://th.bing.com/th/id/R.3fd26d482ae75ee5f002fea4217f5fef?rik=EAe68TcsG%2f1cRw&riu=http%3a%2f%2fbritishsteele.com%2fwp-content%2fuploads%2f2016%2f01%2fsnakefurfront.png&ehk=rf%2b77vUuEqnDsYEbs0Xf0keEfUdbRC2wO6iR%2fpbrvrc%3d&risl=&pid=ImgRaw&r=0',
          price: 185,
        },
      ],
    },
    {
      title: 'Womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61b%2BW0otKjL._AC_UX679_.jpg',
          price: 25,
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'https://th.bing.com/th/id/R.853bb1c4f29618d1614a7ede1707b853?rik=z76mUi%2b6HHiDKQ&pid=ImgRaw&r=0',
          price: 20,
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://th.bing.com/th/id/R.166e935b2225fb7acc1122ccee00e342?rik=YR60CVj4YQwhWg&pid=ImgRaw&r=0',
          price: 80,
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'https://th.bing.com/th/id/R.b9d3b41574a000eb4642fd8e72be4c87?rik=viU0j7f69QjmhA&pid=ImgRaw&r=0',
          price: 80,
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://th.bing.com/th/id/R.b4f31118e5eae4d01a8a237cc2bb8330?rik=GZIeCcZOfTJgoA&riu=http%3a%2f%2fcdnd.lystit.com%2fphotos%2f2013%2f10%2f04%2firo-black-black-and-red-striped-barbara-sweater-product-2-13855607-509307955_large_flex.jpeg&ehk=A472%2bHo%2b%2fThRUmn4yXqMx67Mg9J3TWDYejS1Oa3NJyw%3d&risl=&pid=ImgRaw&r=0',
          price: 45,
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://th.bing.com/th/id/OIP.-3ZgmxxlEkAsbB-XbyPptgHaJ3?pid=ImgDet&rs=1',
          price: 135,
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i1.wp.com/cuttongarments.com/wp-content/uploads/2017/12/17white.png?fit=960%2C1200&ssl=1',
          price: 20,
        },
      ],
    },
    {
      title: 'Mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: 'https://th.bing.com/th/id/R.35faa29184a8ba90ffe3464e5b0f7923?rik=oH54ZVUBlARNVQ&pid=ImgRaw&r=0',
          price: 325,
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: 'https://th.bing.com/th/id/R.3f58ea9f15234808834a899d7c544908?rik=UjzN3BjvdHaRsg&pid=ImgRaw&r=0',
          price: 20,
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://th.bing.com/th/id/OIP.YQPJOcDWLOnWZFsb2GxwMQHaHa?pid=ImgDet&rs=1',
          price: 25,
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: 'https://th.bing.com/th/id/OIP.BrgXkTZTMR-sqlR84clN2AHaJJ?pid=ImgDet&rs=1',
          price: 25,
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://th.bing.com/th/id/OIP.XRiF1EdIDDrkdYi1XjRcPwHaHa?pid=ImgDet&rs=1',
          price: 40,
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://images.menswearhouse.com/is/image/TMW/MW40_5V75_36_CONSTRUCT_WHITE_BLUE_SET?$40MainPDP$',
          price: 25,
        },
      ],
    },
  ];
  
  export default SHOP_DATA;