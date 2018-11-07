import { WishListItem, WishList } from "./Wishlist";
import { reaction } from "mobx";

it("can crate an instance of a model", () => {
  const item = WishListItem.create({
    name: "Chronicle",
    price: 28.73,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sqcxYEJWvPnujIDmw_QBpdBoKMDXsL8dAMMPILqTWgm2YE-H"
  });

  expect(item.price).toBe(28.73);
  item.changeName("juan");
  expect(item.name).toBe("juan");
});

it("can create a wishlist", () => {
  const list = WishList.create({
    items: [
      {
        name: "Chronicle",
        price: 28.73,
        image: ""
      }
    ]
  });

  expect(list.items.length).toBe(1);
  expect(list.items[0].price).toBe(28.73);
});

it("can add new items", () => {
  const list = WishList.create();

  list.add(
    WishListItem.create({
      name: "hugo",
      price: 10
    })
  );

  list.add(
    WishListItem.create({
      name: "milena",
      price: 10
    })
  );

  expect(list.items.length).toBe(2);
  expect(list.items[0].name).toBe("hugo");
});

it("can calculate total price", () => {
  const list = WishList.create({
    items: [
      {
        name: "Chronicle",
        price: 28.5,
        image: ""
      },
      {
        name: "Chroniclew2",
        price: 28.5,
        image: ""
      }
    ]
  });

  expect(list.totalPrice).toBe(57);

  let changed = 0

  reaction(() => list.totalPrice, () => changed)

  console.log(list.totalPrice)
});
