all: deps demo/components.js lint

bower_components: bower.json
	./node_modules/.bin/bower install
	touch $@

demo/components.js: $(shell find ./bower_components -type f -name '*.js')
	./node_modules/.bin/grunt -v smush-components

deps: node_modules bower_components

lint:
	./node_modules/.bin/jshint src

node_modules: package.json
	npm install --registry=http://npm.eng.dig.lo
	touch $@
