require 'rest-client'
require 'pry'
require 'json'

def get_user_input
  puts "what book would you like to search for? "
  book_to_search = gets
end 

def find_books(book_to_search)
  url = "https://www.googleapis.com/books/v1/volumes?q=#{book_to_search}"
  response = RestClient.get(url)
  my_response_hash = JSON.parse(response)
  array_of_books = my_response_hash["items"]
end 

def print_books(array_of_books)
  array_of_books.each do |book|
    puts "Title: " + book["volumeInfo"]["title"]
    puts "Authors: " + book["volumeInfo"]["authors"].join(" | ") if book["volumeInfo"]["authors"]
    puts "=" * 70
  end 
end 

user_input = get_user_input
books = find_books(user_input)
print_books(books)

binding.pry

0

