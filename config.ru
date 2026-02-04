# frozen_string_literal: true

require 'shinmun'
require 'rack/session'

use Rack::Reloader

blog = Shinmun::Blog.new(File.dirname(__FILE__))

# Configure blog
blog.config = {
  language: 'en',
  title: 'Blog Title',
  author: 'Matthias',
  categories: ['Ruby', 'JavaScript'],
  description: 'A NodeTool AI inspired blog for developers',
  site_url: 'https://nodetool-ai.github.io/blog'
}

run blog
