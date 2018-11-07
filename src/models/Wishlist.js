import { types } from "mobx-state-tree";

// const data = {
//   name: "Chronicle",
//   price: 28.73,
//   image:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sqcxYEJWvPnujIDmw_QBpdBoKMDXsL8dAMMPILqTWgm2YE-H"
// };

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    image: ""
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    changeImage(newImage) {
      self.price = newImage;
    }
  }));

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    }
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum, entry) => {
        return sum + entry.price;
      }, 0);
    }
  }));
