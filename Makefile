.PHONY: deps build clean

build: deps build-semantic
	@npm run build

build-semantic: deps
	@(cd semantic && gulp build)

deps:
	@npm install

clean:
	@npm cache clean && \
		rm -rf bower_components && \
		rm -rf semantic/dist && \
		rm -rf build
