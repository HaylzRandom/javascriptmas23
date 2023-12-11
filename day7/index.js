const wishlistItems = [
  {
    name: 'Ticket to Ride: Europe',
    imageURL:
      'https://cf.geekdo-images.com/0K1AOciqlMVUWFPLTJSiww__imagepage/img/pC5hC440R46jn4EpfdYV5rL4VOc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic66668.jpg',
    website: 'https://www.board-game.co.uk/product/ticket-to-ride-europe/',
  },
  {
    name: 'Cosy Pyjamas',
    imageURL:
      'https://xcdn.next.co.uk/common/items/default/default/publications/g62/shotzoom/465/520-824s.jpg?im=Resize,width=364',
    website: 'https://www.next.co.uk/g62524s2/512359#512359',
  },
  {
    name: 'Marzipan Fruits',
    imageURL:
      'https://lakelandcamel.scene7.com/is/image/LakelandCamel/61954_1?$610$',
    website:
      'https://www.lakeland.co.uk/61954/the-walnut-tree-marzipan-fruits-200g',
  },
  {
    name: 'Fluffy Socks',
    imageURL:
      'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/n05201s.jpg?im=Resize,width=364',
    website: 'https://www.next.co.uk/style/st798809/n05201#n05201',
  },
];

/** Challenge: 
    - Iterate over the wishlist array.
    - Dynamically render your wishlist from the array.
    - Style the wishlist with CSS.
  **/

const wishlist = document.querySelector('.wishlist');

console.log(wishlistItems[0]);

const createList = () => {
  wishlistItems.map((item) => {
    const wishlistItem = document.createElement('div');
    wishlistItem.className = 'wishlistItem';

    // Image
    const wishlistItemImage = document.createElement('img');
    wishlistItemImage.className = 'wishlistItem-image';
    wishlistItemImage.src = item.imageURL;

    wishlistItem.appendChild(wishlistItemImage);

    // Heading
    const wishlistItemHeading = document.createElement('h2');
    wishlistItemHeading.className = 'wishlistItem-heading';

    // Link
    const wishlistItemLink = document.createElement('a');
    wishlistItemLink.href = item.website;
    wishlistItemLink.target = '_blank';
    wishlistItemLink.innerText = item.name;

    wishlistItemHeading.appendChild(wishlistItemLink);

    wishlistItem.appendChild(wishlistItemHeading);

    // Append to parent
    wishlist.append(wishlistItem);
  });
};

createList();
