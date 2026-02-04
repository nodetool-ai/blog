#!/usr/bin/env ruby
# Static site generator for Shinmun blog

require 'fileutils'
require 'open-uri'
require 'nokogiri'

BLOG_URL = ENV['BLOG_URL'] || 'http://localhost:9292'
OUTPUT_DIR = '_site'

class ShinmunStatic
  def initialize(base_url, output_dir)
    @base_url = base_url
    @output_dir = output_dir
    FileUtils.mkdir_p(output_dir)
  end

  def crawl(path = '/')
    url = @base_url + path
    puts "Crawling: #{url}"
    
    begin
      content = URI.open(url, &:read)
      doc = Nokogiri::HTML(content)
      
      # Remove body and get content
      body = doc.at_css('body')
      return unless body
      
      # Save HTML file
      save_path = path == '/' ? 'index.html' : "#{path}.html"
      save_path = save_path.gsub(/^\/+/, '')
      
      # Create directory structure
      dir = File.dirname(save_path)
      FileUtils.mkdir_p(File.join(@output_dir, dir)) if dir != '.'
      
      # Write file
      File.write(File.join(@output_dir, save_path), content)
      puts "  → Saved: #{save_path}"
      
      # Find and follow links
      doc.css('a[href]').each do |link|
        href = link['href']
        next unless href&.start_with?('/')
        next if href.include?('#')
        next if href.end_with?('.css', '.js', '.png', '.jpg', '.ico', '.woff2')
        next if href.start_with?('//')
        
        path = URI.parse(href).path
        next if path.nil? || path == '/'
        
        crawl(path) unless already_crawled?(path)
      end
      
    rescue OpenURI::HTTPError => e
      puts "  → 404: #{url}"
    rescue => e
      puts "  → Error: #{e.message}"
    end
  end

  def already_crawled?(path)
    @crawled ||= []
    return true if @crawled.include?(path)
    @crawled << path
    false
  end
end

if __FILE__ == $0
  puts "Generating static site from #{BLOG_URL}..."
  generator = ShinmunStatic.new(BLOG_URL, OUTPUT_DIR)
  generator.crawl
  puts "\nDone! Static site saved to #{OUTPUT_DIR}/"
end
