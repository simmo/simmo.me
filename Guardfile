guard 'coffeescript', input: 'coffeescript', output: 'public_html'

guard 'compass'
 
# guard 'process', name: 'Minify CSS', command: 'juicer merge public_html/application.css --force -c none' do
#   watch %r{public_html/application\.css}
# end
#
# guard 'process', name: 'Minify application javascript', command: 'juicer merge public_html/application.js --force -s' do
#   watch %r{public_html/application\.js}
# end

guard 'uglify', input: 'public_html/application.js', output: "public_html/application.min.js" do
  watch 'public_html/application.js'
end

guard 'livereload' do
  watch(%r{public_html/.+\.*})
end
