# frozen_string_literal: true

require 'shinmun'
require 'fileutils'

desc "Generate static site using Shinmun export"
task :generate do
  blog_dir = Dir.pwd
  output_dir = 'docs'  # GitHub Pages default source folder
  
  puts "Generating static site to #{output_dir}/..."
  
  # Use shinmun export command
  system("bundle exec shinmun export #{output_dir}")
  
  puts "\nDone! Static site generated in #{output_dir}/"
  puts "Enable GitHub Pages in repo settings using the '#{output_dir}/' folder as source."
end
