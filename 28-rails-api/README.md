Rails API
===========

## SWBATs
- [ ] Create an API using Rails
- [ ] Render JSON formatted data
- [ ] Use namespacing to version control an API
- [ ] Use serializers to control internal structure of JSON data
- [ ] Use `fetch` in JS to communicate to an API
- [ ] Coordinate data on the frontend with data on the backend
- [ ] Synthesize knowledge of DOM manipulation, event listeners, and asynchronous JS with Rails concepts


## Notes

- I will consider... releasing the requirements but not the pairs 

### Follow up!
- Can you pass two args to namespace? 
- fastjsonAPI gem instead of ActiveModel::Serializer

```rb
class TweetSerializer < ActiveModel::Serializer
  attributes :user, :content, :popularity_score

  def popularity_score
    # this is multiple language im sorrryyyyy
    time_online = Time.now() - instance.created_at
    instance.likes + instance.retweets / time_online 
  end
end

```



















### Objectives

### Getting started

`rails new <app_name> --api`

The `--api` flag tells Rails to build itself for use as an API, making it more lightweight, and setting up initializers that will allow communication between servers.

### Serializers



### Resources
- Faker: `https://github.com/faker-ruby/faker`
- AMS: `https://github.com/rails-api/active_model_serializers`
- Fast JSON: `https://github.com/Netflix/fast_jsonapi`

