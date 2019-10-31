Cat.destroy_all

cat_img_urls = ["https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-cat-photos-funny-cover.jpg", "https://www.certapet.com/wp-content/uploads/2018/01/shutterstock_220453237.jpg", "https://i.pinimg.com/originals/69/1d/d8/691dd87d4cfd7da641cd841370b85ef7.jpg", "https://images-na.ssl-images-amazon.com/images/I/51VmmRDO1EL._SX466_.jpg", "http://catsdogsblog.com/wp-content/uploads/2018/04/funny-cat-pic.jpg", "https://www.outfittrends.com/wp-content/uploads/2018/03/Funny-Cat-Outfits1.jpg", "https://www.askideas.com/media/08/Funny-Cat-In-Yallow-Color.jpg", "https://mymodernmet.com/wp/wp-content/uploads/2018/04/cats-in-food-16.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg", "https://http.cat/405"]

cat_img_urls.each do |img|
  Cat.create(name: Faker::Creature::Cat.name, breed: Faker::Creature::Cat.breed, age: Faker::Number.within(range: 1..100), img_url: img)
end 

