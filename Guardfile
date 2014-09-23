guard 'coffeescript', input: 'coffeescript', output: 'public/javascripts'

guard 'compass', configuration_file: 'compass.rb'
 
# guard 'process', name: 'Minify CSS', command: 'juicer merge public_html/application.css --force -c none' do
#   watch %r{public_html/application\.css}
# end
#
# guard 'process', name: 'Minify application javascript', command: 'juicer merge public_html/application.js --force -s' do
#   watch %r{public_html/application\.js}
# end

guard 'uglify', input: 'public/javascripts/application.js', output: 'public/javascripts/application.min.js' do
  watch 'public/javascripts/application.js'
end

guard 'livereload' do
  watch(%r{(public|templates)/.+\.*})
end
