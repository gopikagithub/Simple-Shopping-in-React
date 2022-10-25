import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss'

const Directory=()=>{

    const categories = [
        {
          id: 1,
          title: 'hats',
          imageUrl: 'https://www.hats-4-less.com/images/custom-hat-group-1.png',
          route:'shop/hats'
        },
        {
          id: 2,
          title: 'jackets',
          imageUrl: 'https://s3.amazonaws.com/images.ecwid.com/images/21010077/1213134401.jpg',
          route:'shop/jackets'
        },
        {
          id: 3,
          title: 'sneakers',
          imageUrl: 'https://thumbs.dreamstime.com/b/group-fashion-running-sneaker-shoes-isolated-white-background-156568964.jpg',
          route:'shop/sneakers'
        },
        {
          id: 4,
          title: 'womens',
          imageUrl: 'https://media.gettyimages.com/photos/group-of-women-shopping-picture-id495857485',
          route:'shop/womens'
        },

        {
          id: 5,
          title: 'mens',
          imageUrl: 'https://media.istockphoto.com/photos/man-at-shopping-picture-id871386736?k=6&m=871386736&s=170667a&w=0&h=gzDX2B2tvKc_tB7YcSixq1nyKOcTDnjT8WzmUEKp3-4=',
          route:'shop/mens'
        },
      ];

    
    return(
        <div className="directory-container">
            {categories.map((category)=>{
                return(
                    <DirectoryItem key={category.id}  category={category}/>
                )
            })}
      

        </div>
    )
}

export default Directory;