.PHONE: build

bower_components: bower.json
	./node_modules/.bin/bower install
	touch $@

build:
	./node_modules/.bin/grunt -v smush-components

deps: node_modules bower_components build

lint:
	./node_modules/.bin/jshint src

node_modules: package.json
	npm install --registry=http://npm.eng.dig.lo
	touch $@