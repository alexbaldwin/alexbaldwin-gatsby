Dir.glob(__dir__ + '/*.md') do |md|
  slug = File.basename(md,File.extname(md))
  new_md = slug + '/index.md'

  # Remove the date from the beginning
  path = File.basename(md,File.extname(md))
  path.slice!(0, 11)
  
  # Make a folder for our new file
  system "mkdir #{slug}"

  # Copy over the file as index.md
  system "mv #{md} #{new_md}"

  # Insert our path on line 2
  system "gsed -i '2i path: /#{path}/' #{new_md}"

  puts slug
end
