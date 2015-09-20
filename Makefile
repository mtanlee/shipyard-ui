.PHONY: deps build build-semantic serve clean

SEMANTIC_SRCS=$(shell find semantic -type f \
		   -not -path "semantic/dist/*")

SHIPYARD_SRCS=$(shell find src -type f) 

all: deps build

build: build/.shipyard_build_timestamp
build/.shipyard_build_timestamp: $(SHIPYARD_SRCS) semantic/dist/.semantic_build_timestamp deps
	@npm run build && \
		touch ./build/.shiyard_build_timestamp

build-semantic: semantic/dist/.semantic_build_timestamp
semantic/dist/.semantic_build_timestamp: $(SEMANTIC_SRCS) node_modules/.npm_install_timestamp 
	@npm run semantic && \
		touch ./semantic/dist/.semantic_build_timestamp

deps: node_modules/.npm_install_timestamp
node_modules/.npm_install_timestamp: package.json 
	@npm install && \
		touch ./node_modules/.npm_install_timestamp

serve: build-semantic
	@npm run start

clean:
	@npm cache clean && \
		rm -rf bower_components && \
		rm -rf semantic/dist && \
		rm -rf build

print-%: ; @echo $* is $($*)
