# frozen_string_literal: true

require 'shinmun'
require 'fileutils'

desc "Generate static site"
task :generate do
  blog = Shinmun::Blog.new(Dir.pwd)
  
  output_dir = '_site'
  FileUtils.rm_rf(output_dir)
  FileUtils.mkdir_p(output_dir)
  
  puts "Generating static site..."
  
  # Generate index
  puts "  → index.html"
  content = blog.render('index.rhtml', posts: blog.posts[0, 20])
  File.write(File.join(output_dir, 'index.html'), content)
  
  # Generate posts
  blog.posts.each do |post|
    puts "  → #{post.path}.html"
    content = blog.render('post.rhtml', post: post)
    File.write(File.join(output_dir, "#{post.path}.html"), content)
  end
  
  # Generate categories
  blog.categories.each do |category|
    category_slug = category.downcase.gsub(/\s+/, '-')
    puts "  → categories/#{category_slug}.html"
    posts = blog.posts_by_category[category] || []
    content = blog.render('category.rhtml', category: category, posts: posts)
    FileUtils.mkdir_p(File.join(output_dir, 'categories'))
    File.write(File.join(output_dir, "categories/#{category_slug}.html"), content)
  end
  
  # Generate archive
  puts "  → archive.html"
  content = blog.render('archive.rhtml', archives: blog.archives)
  File.write(File.join(output_dir, 'archive.html'), content)
  
  # Copy assets
  puts "  → copying assets..."
  FileUtils.cp_r('public/.', output_dir)
  
  puts "\nDone! Static site generated in #{output_dir}/"
end
