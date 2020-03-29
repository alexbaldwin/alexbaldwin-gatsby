Dir.glob(__dir__ + '/*.md') do |md|
  slug = File.basename(md,File.extname(md))
  new_md = slug + '/index.md'

  # Make a folder for our new file
  system "mkdir #{slug}"

  # Copy over the file as index.md
  system "cp #{md} #{new_md}"

  system "gsed -i '2i path: /#{slug}/' #{new_md}"
end
