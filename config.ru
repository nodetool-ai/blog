require 'shinmun'
require 'rack/session'
require 'rack/static'
require 'fileutils'

use Rack::Static, urls: ['/assets'], root: 'public'
use Rack::Reloader

blog = Shinmun::Blog.new(File.dirname(__FILE__))

blog.config = {
  :language => 'en',
  :title => "Blog Title",
  :author => "Matthias",
  :categories => ["Ruby", "Javascript"],
  :description => "A NodeTool AI inspired blog for developers"
}

run blog
