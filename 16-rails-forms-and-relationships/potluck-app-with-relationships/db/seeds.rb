
Attendee.destroy_all
Potluck.destroy_all


attendees = [
  {name: "Jimmy", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNXUP3D6D-c1032775105f-512",},
  {name: "Jack", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNL18GLSF-a64b06fa8bda-512"},
  {name: "Barbara", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZB86DPZ-9feb219be154-512"},
  {name: "Brad", img_url: "https://ca.slack-edge.com/T02MD9XTF-UN7CZTPGX-d8d99a0e9a61-512"},
  {name: "Eli", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNL18FLRZ-cc199dff0f06-512"},
  {name: "Danny", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZMHUWCW-119cea255e50-512"},
  {name: "Gene", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZMJ0LDU-2f642ef66812-512"},
  {name: "Jeffrey", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNC15J11N-228167aebe37-512"},
  {name: "Nick", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZB89QCX-05cb2542dd4c-512"},
  {name: "Ryan", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNJN12H9Q-ebb10a37bdb8-512"},
  {name: "Soufiane", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZMJ2ZGE-4e6743a748bb-512"},
  {name: "Tiana", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNRGGD5BL-b2ed4a8b9044-512"},
  {name: "Yoan", img_url: "https://ca.slack-edge.com/T02MD9XTF-UCPMFFXEC-88c59874fa88-512"},
  {name: "Alex", img_url: "https://ca.slack-edge.com/T02MD9XTF-UK8BFUYUW-a03c9cbb43c8-512"},
  {name: "Tony", img_url: "https://ca.slack-edge.com/T02MD9XTF-UBQUNRJ1X-255b351d068f-512"} 
]

attendees.each do |trainer|
  Attendee.create(trainer)
end 


15.times do 
  Potluck.create(title: Faker::Superhero.name )
end