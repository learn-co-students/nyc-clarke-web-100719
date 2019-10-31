Cat.destroy_all
Trainer.destroy_all

cat_img_urls = ["https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-cat-photos-funny-cover.jpg", "https://www.certapet.com/wp-content/uploads/2018/01/shutterstock_220453237.jpg", "https://i.pinimg.com/originals/69/1d/d8/691dd87d4cfd7da641cd841370b85ef7.jpg", "https://images-na.ssl-images-amazon.com/images/I/51VmmRDO1EL._SX466_.jpg", "http://catsdogsblog.com/wp-content/uploads/2018/04/funny-cat-pic.jpg", "https://www.outfittrends.com/wp-content/uploads/2018/03/Funny-Cat-Outfits1.jpg", "https://www.askideas.com/media/08/Funny-Cat-In-Yallow-Color.jpg", "https://mymodernmet.com/wp/wp-content/uploads/2018/04/cats-in-food-16.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg", "https://http.cat/405"]

cat_img_urls.each do |img|
  Cat.create(name: Faker::Creature::Cat.name, breed: Faker::Creature::Cat.breed, age: Faker::Number.within(range: 1..100), img_url: img)
end 

trainers = [
  {name: "Jimmy", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNXUP3D6D-c1032775105f-512", cat_id: Cat.all.sample.id},
  {name: "Jack", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNL18GLSF-a64b06fa8bda-512", cat: Cat.all.sample},
  {name: "Barbara", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZB86DPZ-9feb219be154-512", cat: Cat.all.sample},
  {name: "Brad", img_url: "https://ca.slack-edge.com/T02MD9XTF-UN7CZTPGX-d8d99a0e9a61-512", cat: Cat.all.sample},
  {name: "Eli", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNL18FLRZ-cc199dff0f06-512", cat: Cat.all.sample},
  {name: "Danny", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZMHUWCW-119cea255e50-512", cat: Cat.all.sample},
  {name: "Gene", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZMJ0LDU-2f642ef66812-512", cat: Cat.all.sample},
  {name: "Jeffrey", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNC15J11N-228167aebe37-512", cat: Cat.all.sample},
  {name: "Nick", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZB89QCX-05cb2542dd4c-512", cat: Cat.all.sample},
  {name: "Ryan", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNJN12H9Q-ebb10a37bdb8-512", cat: Cat.all.sample},
  {name: "Soufiane", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZMJ2ZGE-4e6743a748bb-512", cat: Cat.all.sample},
  {name: "Tiana", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNRGGD5BL-b2ed4a8b9044-512", cat: Cat.all.sample},
  {name: "Yoan", img_url: "https://ca.slack-edge.com/T02MD9XTF-UCPMFFXEC-88c59874fa88-512", cat: Cat.all.sample},
  {name: "Alex", img_url: "https://ca.slack-edge.com/T02MD9XTF-UK8BFUYUW-a03c9cbb43c8-512", cat: Cat.all.sample},
  {name: "Tony", img_url: "https://ca.slack-edge.com/T02MD9XTF-UBQUNRJ1X-255b351d068f-512", cat: Cat.all.sample} 
]

trainers.each do |trainer|
  Trainer.create(trainer)
end 



# Different ways ActiveRecord gives us to create associations
# cat1 = Cat.create({name: "Alex", img_url: "https://ca.slack-edge.com/T02MD9XTF-UK8BFUYUW-a03c9cbb43c8-512"})

# Trainer.create({name: "Alex", img_url: "https://ca.slackc8-512", cat_id: cat1.id})
# Trainer.create({name: "Alex", img_url: "https://ca.slack-edg43c8-512", cat: cat1})
# cat1.trainers.create({name: "Alex", img_url: "https://ca.slack-a03c9cbb43c8-512")
# cat1 << Trainer.create({name: "Alex", img_url: "https://ca.slack-edge.com/T02M")

















# Bonus Trainers 
# {name: "Taris", img_url: "https://ca.slack-edge.com/T02MD9XTF-UL917N0TY-582ad7a834dc-512"}
# {name: "Sebastian", img_url: "https://ca.slack-edge.com/T02MD9XTF-UCFK8FNCC-1a53532d55ca-512"}
# {name: "Caryn", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNF12Q8JE-2b02c06a660d-512"}